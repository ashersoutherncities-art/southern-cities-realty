import { NextRequest, NextResponse } from "next/server";
import {
  database,
  configured,
  service,
  siteURL,
} from "@/lib/marketplace/server";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (!configured())
    return NextResponse.json({ error: "Unavailable" }, { status: 503 });
  if (request.headers.get("origin") !== new URL(siteURL()).origin)
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  const db = database();
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user)
    return NextResponse.json({ error: "Sign in first" }, { status: 401 });
  const form = await request.formData();
  const id = String(form.get("deal_id"));
  const { data: deal } = await db
    .from("realty_submissions")
    .select("id,status")
    .eq("id", id)
    .maybeSingle();
  if (!deal || deal.status === "withdrawn")
    return NextResponse.json({ error: "Deal unavailable" }, { status: 403 });
  const admin = user.app_metadata?.realty_admin === true;
  const audience =
    form.get("audience") === "member" && admin ? "member" : "private";
  const file = form.get("file");
  if (!(file instanceof File) || file.size < 1 || file.size > 3 * 1024 * 1024)
    return NextResponse.json(
      { error: "Use a file up to 3 MB" },
      { status: 400 },
    );
  const bytes = Buffer.from(await file.arrayBuffer());
  const type =
    bytes.subarray(0, 5).toString() === "%PDF-"
      ? "application/pdf"
      : bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff
        ? "image/jpeg"
        : bytes
              .subarray(0, 8)
              .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
          ? "image/png"
          : null;
  if (!type || file.type !== type)
    return NextResponse.json(
      { error: "Use a valid PDF, JPG, or PNG" },
      { status: 400 },
    );
  const adminDB = service();
  const fileID = crypto.randomUUID();
  const path = `${id}/${fileID}`;
  const { error: uploadError } = await adminDB.storage
    .from("realty-documents")
    .upload(path, bytes, { contentType: type, upsert: false });
  if (uploadError)
    return NextResponse.json(
      { error: "Upload failed; please retry" },
      { status: 500 },
    );
  // Insert as the authenticated user so RLS rechecks ownership and withdrawal after upload.
  const { error } = await db.from("realty_files").insert({
    id: fileID,
    deal_id: id,
    path,
    name: file.name.replace(/[^a-zA-Z0-9 ._()-]/g, "_").slice(0, 160),
    audience,
    uploaded_by: user.id,
  });
  if (error) {
    await adminDB.storage.from("realty-documents").remove([path]);
    return NextResponse.json({ error: "Unable to save file" }, { status: 409 });
  }
  return NextResponse.redirect(
    new URL(admin ? "/deals/admin" : "/deals/dashboard", siteURL()),
    303,
  );
}
