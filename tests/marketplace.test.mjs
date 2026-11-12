import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { PGlite } from "@electric-sql/pglite";
import ts from "typescript";

const policySource = readFileSync(
  new URL("../lib/marketplace/policy.ts", import.meta.url),
  "utf8",
);
const policy = await import(
  `data:text/javascript;base64,${Buffer.from(ts.transpile(policySource, { module: ts.ModuleKind.ESNext })).toString("base64")}`
);
const ids = {
  owner: "00000000-0000-0000-0000-000000000001",
  other: "00000000-0000-0000-0000-000000000002",
  member: "00000000-0000-0000-0000-000000000003",
  admin: "00000000-0000-0000-0000-000000000004",
};
const db = new PGlite();
await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
create schema auth; create schema storage; create table auth.users(id uuid primary key);
create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
create table storage.objects(bucket_id text,name text);
create function auth.jwt() returns jsonb language sql stable as $$ select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb $$;
create function auth.uid() returns uuid language sql stable as $$ select (auth.jwt()->>'sub')::uuid $$;
grant usage on schema auth to anon,authenticated,service_role; grant execute on all functions in schema auth to anon,authenticated,service_role;
insert into auth.users(id) values ${Object.values(ids)
  .map((id) => `('${id}')`)
  .join(",")};`);
await db.exec(
  readFileSync(
    new URL(
      "../supabase/migrations/20261112063721_realty_deal_room.sql",
      import.meta.url,
    ),
    "utf8",
  ),
);
async function as(who) {
  await db.exec("reset role");
  await db.query(`select set_config('request.jwt.claims',$1,false)`, [
    JSON.stringify({
      sub: ids[who],
      app_metadata: { realty_admin: who === "admin" },
    }),
  ]);
  await db.exec("set role authenticated");
}
async function root() {
  await db.exec("reset role");
}
async function rejects(sql, params = []) {
  await assert.rejects(db.query(sql, params));
}
const submission = {
  address: "123 Test Street",
  city: "Elizabeth City",
  state: "NC",
  asking_price: 70000,
  rehab: 30000,
  arv: 150000,
  bedrooms: 3,
  bathrooms: 2,
  role: "wholesaler",
  contact_name: "Test submitter",
  phone: "555-0100",
  notes: "Test opportunity. Authority attached.",
  consent_name: "Test Submitter",
  consent_text: policy.CONSENT,
  consent_version: policy.CONSENT_VERSION,
};
let dealID;
const pack = {
  status: "approved",
  title: "Three-bedroom rental opportunity",
  summary: "Illustrative package, independently verify all estimates.",
  price: 70000,
  repairs: 30000,
  fee: 10000,
  rent: 1698,
  piti: 1100,
  arv: 150000,
  review_note: "Authority reviewed against signed owner authorization.",
  authority_verified: true,
};

test("database workflow and access boundaries", async (t) => {
  await t.test(
    "anonymous users cannot read submissions or submit",
    async () => {
      await db.exec("set role anon");
      await rejects("select * from public.realty_submissions");
      await rejects("select public.realty_submit_deal($1)", [submission]);
    },
  );
  await t.test(
    "owner submits immutable permission and sees only their own records",
    async () => {
      await as("owner");
      dealID = (
        await db.query("select public.realty_submit_deal($1) id", [submission])
      ).rows[0].id;
      await root();
      await db.query(
        "insert into storage.objects(bucket_id,name) values('realty-documents',$1),('realty-documents',$2)",
        [
          dealID + "/10000000-0000-0000-0000-000000000001",
          dealID + "/10000000-0000-0000-0000-000000000002",
        ],
      );
      await as("owner");
      assert.equal(
        (await db.query("select * from public.realty_submissions")).rows.length,
        1,
      );
      await rejects(
        "update public.realty_submissions set consent_text='changed'",
      );
      await rejects("select public.realty_review_deal($1,0,$2)", [
        dealID,
        pack,
      ]);
      await as("other");
      assert.equal(
        (await db.query("select * from public.realty_submissions")).rows.length,
        0,
      );
      await rejects("select public.realty_withdraw_deal($1)", [dealID]);
      await rejects(
        "insert into public.realty_files(id,deal_id,path,name,audience,uploaded_by) values('10000000-0000-0000-0000-000000000001',$1,$2,'stolen.pdf','private',$3)",
        [dealID, `${dealID}/10000000-0000-0000-0000-000000000001`, ids.other],
      );
    },
  );
  await t.test(
    "approval requires authority; publishing requires prior approval and member document",
    async () => {
      await as("admin");
      await rejects("select public.realty_review_deal($1,0,$2)", [
        dealID,
        pack,
      ]);
      await as("owner");
      await db.query(
        "insert into public.realty_files(id,deal_id,path,name,audience,uploaded_by) values('10000000-0000-0000-0000-000000000001',$1,$2,'authority.pdf','private',$3)",
        [dealID, `${dealID}/10000000-0000-0000-0000-000000000001`, ids.owner],
      );
      await rejects(
        "insert into public.realty_files(id,deal_id,path,name,audience,uploaded_by) values('10000000-0000-0000-0000-000000000002',$1,$2,'unreviewed.pdf','member',$3)",
        [dealID, `${dealID}/10000000-0000-0000-0000-000000000002`, ids.owner],
      );
      await as("admin");
      await rejects("select public.realty_review_deal($1,0,$2)", [
        dealID,
        { ...pack, status: "published" },
      ]);
      await db.query("select public.realty_review_deal($1,0,$2)", [
        dealID,
        pack,
      ]);
      await rejects("select public.realty_review_deal($1,0,$2)", [
        dealID,
        pack,
      ]);
      await rejects("select public.realty_review_deal($1,1,$2)", [
        dealID,
        { ...pack, status: "published" },
      ]);
      await db.query(
        "insert into public.realty_files(id,deal_id,path,name,audience,uploaded_by) values('10000000-0000-0000-0000-000000000002',$1,$2,'package.pdf','member',$3)",
        [dealID, `${dealID}/10000000-0000-0000-0000-000000000002`, ids.admin],
      );
      await db.query("select public.realty_review_deal($1,1,$2)", [
        dealID,
        { ...pack, status: "published" },
      ]);
    },
  );
  await t.test(
    "unpaid members cannot read published packages or documents",
    async () => {
      await as("member");
      assert.equal(
        (await db.query("select * from public.realty_packages")).rows.length,
        0,
      );
      assert.equal(
        (await db.query("select * from public.realty_files")).rows.length,
        0,
      );
      await rejects(
        "select public.realty_sync_billing('forged',1,$1,'cus_forged','sub_forged','active',now()+interval '1 month')",
        [ids.member],
      );
      const one = (await db.query("select public.realty_checkout_key() key"))
        .rows[0].key;
      const two = (await db.query("select public.realty_checkout_key() key"))
        .rows[0].key;
      assert.equal(one, two);
    },
  );
  await t.test(
    "paid access, duplicate and out-of-order billing, cancellation and expiry",
    async () => {
      await root();
      await db.query(
        "select public.realty_sync_billing('evt_paid',100,$1,'cus_test','sub_test','active',now()+interval '1 month')",
        [ids.member],
      );
      await db.query(
        "select public.realty_sync_billing('evt_paid',100,$1,'cus_test','sub_test','canceled',now())",
        [ids.member],
      );
      await as("member");
      assert.equal(
        (await db.query("select * from public.realty_packages")).rows.length,
        1,
      );
      assert.equal(
        (await db.query("select * from public.realty_files")).rows.length,
        1,
      );
      assert.equal(
        (await db.query("select * from public.realty_submissions")).rows.length,
        0,
      );
      await root();
      await db.query(
        "select public.realty_sync_billing('evt_cancel',200,$1,'cus_test','sub_test','canceled',now())",
        [ids.member],
      );
      await db.query(
        "select public.realty_sync_billing('evt_old',99,$1,'cus_test','sub_test','active',now()+interval '1 month')",
        [ids.member],
      );
      await as("member");
      assert.equal(
        (await db.query("select * from public.realty_packages")).rows.length,
        0,
      );
      await root();
      await db.query(
        "select public.realty_sync_billing('evt_expired',300,$1,'cus_test','sub_test','active',now()-interval '1 day')",
        [ids.member],
      );
      await as("member");
      assert.equal(
        (await db.query("select public.realty_has_access() allowed")).rows[0]
          .allowed,
        false,
      );
    },
  );
  await t.test(
    "withdrawal removes published package and files immediately",
    async () => {
      await root();
      await db.query(
        "select public.realty_sync_billing('evt_rejoin',400,$1,'cus_test','sub_test','active',now()+interval '1 month')",
        [ids.member],
      );
      await as("owner");
      await db.query("select public.realty_withdraw_deal($1)", [dealID]);
      await as("member");
      assert.equal(
        (await db.query("select * from public.realty_packages")).rows.length,
        0,
      );
      assert.equal(
        (await db.query("select * from public.realty_files")).rows.length,
        0,
      );
      await as("admin");
      await rejects("select public.realty_review_deal($1,3,$2)", [
        dealID,
        pack,
      ]);
    },
  );
  await t.test(
    "information replies, exact consent, and document registration safeguards",
    async () => {
      await as("owner");
      await rejects("select public.realty_submit_deal($1)", [
        { ...submission, consent_text: "Forged permission text ".repeat(10) },
      ]);
      const fresh = (
        await db.query("select public.realty_submit_deal($1) id", [submission])
      ).rows[0].id;
      await db.query("select public.realty_update_notes($1,$2)", [
        fresh,
        "New repair and occupancy details",
      ]);
      assert.equal(
        (
          await db.query(
            "select notes,revision from public.realty_submissions where id=$1",
            [fresh],
          )
        ).rows[0].revision,
        1,
      );
      await rejects(
        "insert into public.realty_files(id,deal_id,path,name,audience,uploaded_by) values('10000000-0000-0000-0000-000000000003',$1,$2,'not-uploaded.pdf','private',$3)",
        [fresh, fresh + "/10000000-0000-0000-0000-000000000003", ids.owner],
      );
      await rejects("select public.realty_remove_file($1)", [
        "10000000-0000-0000-0000-000000000001",
      ]);
      await as("other");
      await rejects("select public.realty_update_notes($1,$2)", [
        fresh,
        "Unauthorized change",
      ]);
      await as("admin");
      await db.query("select public.realty_remove_file($1)", [
        "10000000-0000-0000-0000-000000000001",
      ]);
      assert.equal(
        (
          await db.query(
            "select status from public.realty_submissions where id=$1",
            [dealID],
          )
        ).rows[0].status,
        "withdrawn",
      );
    },
  );
  await db.close();
});
test("billing never grants access for trial, failed, or unpaid subscription", () => {
  const subscription = {
    status: "active",
    items: { data: [{ current_period_end: 9999999999 }] },
    latest_invoice: { status: "paid" },
  };
  assert.equal(policy.paidThrough(subscription), 9999999999);
  for (const status of [
    "trialing",
    "past_due",
    "unpaid",
    "canceled",
    "paused",
    "incomplete",
  ])
    assert.equal(policy.paidThrough({ ...subscription, status }), 0);
  assert.equal(
    policy.paidThrough({ ...subscription, latest_invoice: { status: "open" } }),
    0,
  );
  assert.equal(
    policy.paidThrough({ ...subscription, latest_invoice: null }),
    0,
  );
});
