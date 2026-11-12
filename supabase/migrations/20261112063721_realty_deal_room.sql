begin;
create function public.realty_is_admin() returns boolean language sql stable security definer set search_path = '' as $$
  select coalesce((auth.jwt()->'app_metadata'->>'realty_admin')::boolean, false)
$$;
create table public.realty_billing (
  user_id uuid primary key references auth.users(id) on delete cascade,
  customer_id text not null unique, subscription_id text not null unique,
  status text not null, paid_until timestamptz not null,
  event_created bigint not null, updated_at timestamptz not null default now()
);
create function public.realty_has_access() returns boolean language sql stable security definer set search_path = '' as $$
  select public.realty_is_admin() or exists(select 1 from public.realty_billing where user_id = auth.uid() and status = 'active' and paid_until > now())
$$;
create table public.realty_submissions (
  id uuid primary key default gen_random_uuid(), submitter_id uuid not null references auth.users(id),
  contact_name text not null check(length(contact_name) between 1 and 120), phone text not null check(length(phone) between 1 and 40),
  role text not null check(role in ('wholesaler','realtor','owner')),
  address text not null check(length(address) between 1 and 300), city text not null check(length(city) between 1 and 100), state text not null check(state ~ '^[A-Za-z]{2}$'),
  asking_price numeric not null check(asking_price between 0 and 100000000), rehab numeric not null check(rehab between 0 and 100000000), arv numeric not null check(arv between 0 and 100000000),
  bedrooms numeric not null check(bedrooms between 0 and 100), bathrooms numeric not null check(bathrooms between 0 and 100), notes text not null check(length(notes) between 1 and 4000),
  consent_name text not null check(length(consent_name) between 1 and 120), consent_text text not null check(length(consent_text) between 100 and 5000), consent_version text not null, consent_at timestamptz not null default now(),
  status text not null default 'submitted' check(status in ('submitted','needs_information','approved','published','rejected','withdrawn')),
  feedback text not null default '' check(length(feedback)<=2000), revision integer not null default 0, created_at timestamptz not null default now()
);
create index realty_submissions_owner on public.realty_submissions(submitter_id);
create table public.realty_packages (
  deal_id uuid primary key references public.realty_submissions(id) on delete cascade,
  status text not null, title text not null check(length(title) between 1 and 140), summary text not null check(length(summary) between 1 and 8000),
  address text not null, city text not null, state text not null, bedrooms numeric not null, bathrooms numeric not null,
  price numeric not null check(price between 0 and 100000000), repairs numeric not null check(repairs between 0 and 100000000), fee numeric not null check(fee between 0 and 100000000),
  rent numeric not null check(rent between 0 and 100000000), piti numeric not null check(piti between 0 and 100000000), arv numeric not null check(arv between 0 and 100000000),
  authority_verified boolean not null default false, updated_at timestamptz not null default now()
);
create index realty_packages_status on public.realty_packages(status);
create table public.realty_files (
  id uuid primary key, deal_id uuid not null references public.realty_submissions(id) on delete cascade,
  path text not null unique, name text not null check(length(name) between 1 and 160),
  audience text not null check(audience in ('private','member')), uploaded_by uuid not null references auth.users(id), created_at timestamptz not null default now(),
  check(path = deal_id::text || '/' || id::text)
);
create index realty_files_deal on public.realty_files(deal_id);
create function public.realty_validate_file() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(new.deal_id::text,1));
  if not exists(select 1 from storage.objects where bucket_id='realty-documents' and name=new.path) then raise exception 'Upload must exist before registration'; end if;
  if (select count(*) from public.realty_files where deal_id=new.deal_id)>=30 then raise exception 'Document limit reached'; end if;
  insert into public.realty_audit(deal_id,actor,action,note) values(new.deal_id,auth.uid(),'file_uploaded',new.audience || ': ' || new.name);
  return new;
end $$;
revoke all on function public.realty_validate_file() from public,anon,authenticated;
create trigger realty_file_validation before insert on public.realty_files for each row execute function public.realty_validate_file();
create table public.realty_audit (
  id bigint generated always as identity primary key, deal_id uuid not null references public.realty_submissions(id),
  actor uuid not null references auth.users(id), action text not null, note text not null, created_at timestamptz not null default now()
);
create index realty_audit_deal on public.realty_audit(deal_id);
create table public.realty_billing_events (id text primary key, created_at timestamptz not null default now());
create table public.realty_checkout_attempts(user_id uuid primary key references auth.users(id) on delete cascade, attempt uuid not null default gen_random_uuid(), expires_at timestamptz not null default now()+interval '25 hours');
alter table public.realty_checkout_attempts enable row level security;
revoke all on public.realty_checkout_attempts from anon,authenticated;
alter table public.realty_submissions enable row level security;
alter table public.realty_packages enable row level security;
alter table public.realty_files enable row level security;
alter table public.realty_audit enable row level security;
alter table public.realty_billing enable row level security;
alter table public.realty_billing_events enable row level security;
create policy submissions_read on public.realty_submissions for select to authenticated using (submitter_id = (select auth.uid()) or (select public.realty_is_admin()));
create policy packages_read on public.realty_packages for select to authenticated using ((select public.realty_is_admin()) or (status = 'published' and (select public.realty_has_access())));
create policy files_read on public.realty_files for select to authenticated using (
  (select public.realty_is_admin()) or exists(select 1 from public.realty_submissions s where s.id = deal_id and s.submitter_id = (select auth.uid()))
  or (audience = 'member' and (select public.realty_has_access()) and exists(select 1 from public.realty_packages p where p.deal_id = realty_files.deal_id and p.status = 'published'))
);
create policy files_insert on public.realty_files for insert to authenticated with check (
  uploaded_by = (select auth.uid()) and exists(select 1 from public.realty_submissions s where s.id = deal_id and s.status <> 'withdrawn'
    and ((select public.realty_is_admin()) or (s.submitter_id = (select auth.uid()) and audience = 'private')))
);
create policy audit_read on public.realty_audit for select to authenticated using ((select public.realty_is_admin()));
create policy billing_read on public.realty_billing for select to authenticated using (user_id = (select auth.uid()));
-- All state transitions occur through narrowly scoped functions, never direct client updates.
revoke all on public.realty_submissions, public.realty_packages, public.realty_files, public.realty_audit, public.realty_billing, public.realty_billing_events from anon, authenticated;
grant select on public.realty_submissions, public.realty_packages, public.realty_files, public.realty_audit, public.realty_billing to authenticated;
grant insert on public.realty_files to authenticated;
create function public.realty_submit_deal(details jsonb) returns uuid language plpgsql security definer set search_path = '' as $$
declare result uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  perform pg_advisory_xact_lock(hashtextextended(auth.uid()::text,0));
  if (select count(*) from public.realty_submissions where submitter_id = auth.uid() and created_at > now()-interval '1 day') >= 20 then raise exception 'Daily submission limit reached'; end if;
  if details->>'consent_version' <> '2026-11-12-v1' then raise exception 'Invalid consent version'; end if;
  if details->>'consent_text' is distinct from 'I authorize Southern Cities Realty to review, edit, package, and market this submitted opportunity and the materials I designate for marketing to its paid members and prospective buyers. I confirm I own the property or have current written authority from the owner or contract holder to submit and market this interest, and permission to share these materials. I will disclose assignment restrictions, brokerage relationships, fees, and material facts. This permission is nonexclusive and does not create an agency agreement or guarantee publication, financing, or sale. I may request withdrawal through my dashboard; Southern Cities Realty will stop future marketing after processing the request, but cannot recall previously delivered materials. Private authority documents and contact details will not be included in member packages.' then raise exception 'Invalid consent text'; end if;
  insert into public.realty_submissions (submitter_id,contact_name,phone,role,address,city,state,asking_price,rehab,arv,bedrooms,bathrooms,notes,consent_name,consent_text,consent_version)
    values(auth.uid(),details->>'contact_name',details->>'phone',details->>'role',details->>'address',details->>'city',upper(details->>'state'),(details->>'asking_price')::numeric,(details->>'rehab')::numeric,(details->>'arv')::numeric,(details->>'bedrooms')::numeric,(details->>'bathrooms')::numeric,details->>'notes',details->>'consent_name',details->>'consent_text',details->>'consent_version') returning id into result;
  insert into public.realty_audit(deal_id,actor,action,note) values(result,auth.uid(),'submitted','Marketing permission recorded');
  return result;
end $$;
create function public.realty_withdraw_deal(deal_id uuid) returns void language plpgsql security definer set search_path = '' as $$
begin
  perform 1 from public.realty_submissions s where s.id = deal_id and s.submitter_id = auth.uid() for update;
  if not found then raise exception 'Not authorized'; end if;
  update public.realty_submissions s set status='withdrawn',revision=revision+1 where s.id=deal_id;
  update public.realty_packages p set status='withdrawn',updated_at=now() where p.deal_id=realty_withdraw_deal.deal_id;
  insert into public.realty_audit(deal_id,actor,action,note) values(deal_id,auth.uid(),'withdrawn','Submitter withdrew marketing permission');
end $$;
create function public.realty_review_deal(deal_id uuid, expected_revision integer, package jsonb) returns void language plpgsql security definer set search_path = '' as $$
declare s public.realty_submissions; target text := package->>'status'; verified boolean := coalesce((package->>'authority_verified')::boolean,false);
begin
  if not public.realty_is_admin() then raise exception 'Not authorized'; end if;
  select * into s from public.realty_submissions where id=deal_id for update;
  if s.id is null or s.revision <> expected_revision or s.status = 'withdrawn' then raise exception 'Submission changed; refresh before reviewing'; end if;
  if target is null or target not in ('submitted','needs_information','approved','published','rejected') then raise exception 'Invalid status'; end if;
  if coalesce(length(trim(package->>'review_note')),0) not between 1 and 2000 then raise exception 'Review note required'; end if;
  if target in ('approved','published') and (not verified or not exists(select 1 from public.realty_files f where f.deal_id=s.id and f.audience='private')) then raise exception 'Verify supporting authority documents first'; end if;
  if target = 'published' and (s.status not in ('approved','published') or not exists(select 1 from public.realty_files f where f.deal_id=s.id and f.audience='member')) then raise exception 'Approve first and upload a member package before publishing'; end if;
  insert into public.realty_packages(deal_id,status,title,summary,address,city,state,bedrooms,bathrooms,price,repairs,fee,rent,piti,arv,authority_verified)
    values(s.id,target,package->>'title',package->>'summary',s.address,s.city,s.state,s.bedrooms,s.bathrooms,(package->>'price')::numeric,(package->>'repairs')::numeric,(package->>'fee')::numeric,(package->>'rent')::numeric,(package->>'piti')::numeric,(package->>'arv')::numeric,verified)
    on conflict on constraint realty_packages_pkey do update set status=excluded.status,title=excluded.title,summary=excluded.summary,price=excluded.price,repairs=excluded.repairs,fee=excluded.fee,rent=excluded.rent,piti=excluded.piti,arv=excluded.arv,authority_verified=excluded.authority_verified,updated_at=now();
  update public.realty_submissions set status=target,feedback=coalesce(package->>'feedback',''),revision=revision+1 where id=s.id;
  insert into public.realty_audit(deal_id,actor,action,note) values(s.id,auth.uid(),target,package->>'review_note');
end $$;
create function public.realty_sync_billing(event_id text,event_created bigint,member_id uuid,customer text,subscription text,billing_status text,paid_until timestamptz) returns void language plpgsql security definer set search_path = '' as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(member_id::text,0));
  insert into public.realty_billing_events(id) values(event_id) on conflict do nothing;
  if not found then return; end if;
  insert into public.realty_billing(user_id,customer_id,subscription_id,status,paid_until,event_created) values(member_id,customer,subscription,billing_status,paid_until,event_created)
  on conflict (user_id) do update set customer_id=excluded.customer_id,subscription_id=excluded.subscription_id,status=excluded.status,paid_until=excluded.paid_until,event_created=excluded.event_created,updated_at=now()
  where public.realty_billing.event_created <= excluded.event_created
    and (public.realty_billing.subscription_id=excluded.subscription_id or public.realty_billing.status in ('canceled','incomplete_expired'));
  if found and billing_status in ('canceled','incomplete_expired') then delete from public.realty_checkout_attempts where user_id=member_id; end if;
end $$;
create function public.realty_checkout_key() returns text language plpgsql security definer set search_path = '' as $$
declare result uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  perform pg_advisory_xact_lock(hashtextextended(auth.uid()::text,0));
  if exists(select 1 from public.realty_billing where user_id=auth.uid() and status not in ('canceled','incomplete_expired')) then return 'billing'; end if;
  insert into public.realty_checkout_attempts(user_id) values(auth.uid()) on conflict(user_id) do update set attempt=gen_random_uuid(),expires_at=now()+interval '25 hours' where public.realty_checkout_attempts.expires_at<now();
  select attempt into result from public.realty_checkout_attempts where user_id=auth.uid();
  return result::text;
end $$;
create function public.realty_update_notes(deal_id uuid, note text) returns void language plpgsql security definer set search_path = '' as $$
begin
  if length(trim(note)) not between 1 and 4000 then raise exception 'Valid notes required'; end if;
  perform 1 from public.realty_submissions s where s.id=deal_id and s.submitter_id=auth.uid() and s.status in ('submitted','needs_information') for update;
  if not found then raise exception 'Submission cannot be edited in this status'; end if;
  update public.realty_submissions s set notes=note,status='submitted',revision=revision+1 where s.id=deal_id;
  insert into public.realty_audit(deal_id,actor,action,note) values(deal_id,auth.uid(),'information_updated',note);
end $$;
revoke all on function public.realty_update_notes(uuid,text) from public,anon;
grant execute on function public.realty_update_notes(uuid,text) to authenticated;
create function public.realty_remove_file(file_id uuid) returns text language plpgsql security definer set search_path = '' as $$
declare f public.realty_files;
begin
  if not public.realty_is_admin() then raise exception 'Not authorized'; end if;
  select * into f from public.realty_files where id=file_id;
  if f.id is null then raise exception 'File not found'; end if;
  perform 1 from public.realty_submissions where id=f.deal_id for update;
  delete from public.realty_files where id=f.id;
  update public.realty_submissions set status=case when status='withdrawn' then 'withdrawn' else 'needs_information' end,revision=revision+1 where id=f.deal_id;
  update public.realty_packages set status=case when status='withdrawn' then 'withdrawn' else 'needs_information' end,updated_at=now() where deal_id=f.deal_id;
  insert into public.realty_audit(deal_id,actor,action,note) values(f.deal_id,auth.uid(),'file_removed',f.name || '; package requires re-review');
  return f.path;
end $$;
revoke all on function public.realty_remove_file(uuid) from public,anon;
grant execute on function public.realty_remove_file(uuid) to authenticated;
revoke all on function public.realty_checkout_key() from public,anon;
grant execute on function public.realty_checkout_key() to authenticated;
revoke all on function public.realty_is_admin(),public.realty_has_access(),public.realty_submit_deal(jsonb),public.realty_withdraw_deal(uuid),public.realty_review_deal(uuid,integer,jsonb),public.realty_sync_billing(text,bigint,uuid,text,text,text,timestamptz) from public,anon;
grant execute on function public.realty_is_admin(),public.realty_has_access(),public.realty_submit_deal(jsonb),public.realty_withdraw_deal(uuid),public.realty_review_deal(uuid,integer,jsonb) to authenticated;
revoke all on function public.realty_sync_billing(text,bigint,uuid,text,text,text,timestamptz) from authenticated;
grant execute on function public.realty_sync_billing(text,bigint,uuid,text,text,text,timestamptz) to service_role;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('realty-documents','realty-documents',false,3145728,array['application/pdf','image/jpeg','image/png']);
-- No browser storage policies. All bytes go through authenticated, RLS-checked API routes.
commit;
