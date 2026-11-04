// GoHighLevel (GHL) lead delivery for Southern Cities Realty.
//
// SCR has its own GHL location (separate from SCC's), accessed via a
// Private Integration token scoped to that location. We upsert the contact
// directly via the REST API rather than depend on a GHL-hosted "Inbound
// Webhook" trigger (premium, and never finished — see the
// scr-forms-deliver-nowhere memory). Freeform context (message, timeline,
// budget, etc.) goes on the contact as a Note, since this location's custom
// fields are mostly single-select picklists validated server-side.
//
// Env vars required:
//   GHL_API_TOKEN     — Private Integration Access Token (pit-...), scoped
//                        to the SCR location
//   GHL_LOCATION_ID   — the SCR location id

const GHL_BASE = 'https://services.leadconnectorhq.com'
const GHL_VERSION = '2021-07-28'

// Custom field IDs on the SCR location (looked up once via
// GET /locations/{id}/customFields).
const FIELD_LEAD_TYPE = 'hClt5zFZUG5S7CUHxiM6' // picklist: Buyer, Seller, Investor, Buyer & Seller, Referral, Other
const FIELD_LEAD_SOURCE = 'wMWWjn9PdrnWHf1Cboot' // picklist, includes 'Website'
const FIELD_TARGET_AREAS = 'k6K8LDmDtUA1lopz5RUL' // free text
const FIELD_SMS_CONSENT = '7CDsNIntUxlkGl34uTIG' // checkbox, single option
const SMS_CONSENT_OPTION =
  "It's OK to text me at the number above about my search (message and data rates may apply; reply STOP to opt out)."

export type GhlLeadType = 'Buyer' | 'Seller' | 'Investor' | 'Buyer & Seller' | 'Referral' | 'Other'

export type GhlLeadPayload = {
  name: string
  email: string
  phone?: string
  source: string
  tags: string[]
  leadType?: GhlLeadType
  areas?: string
  smsConsent?: boolean
  note?: string
}

function getCreds() {
  const token = process.env.GHL_API_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  if (!token || !locationId) return null
  return { token, locationId }
}

function splitName(fullName: string) {
  const trimmed = (fullName || '').trim()
  if (!trimmed) return { firstName: '', lastName: '' }
  const parts = trimmed.split(/\s+/)
  if (parts.length === 1) return { firstName: parts[0], lastName: '' }
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') }
}

async function ghlFetch(path: string, init: RequestInit, token: string) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_VERSION,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  })
  const text = await res.text()
  let json: unknown = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    /* keep raw text */
  }
  return { ok: res.ok, status: res.status, body: json ?? text }
}

export async function upsertGhlContact(
  payload: GhlLeadPayload
): Promise<{ ok: boolean; contactId?: string | null; reason?: string }> {
  const creds = getCreds()
  if (!creds) return { ok: false, reason: 'GHL credentials not configured' }

  const { firstName, lastName } = splitName(payload.name)
  const customFields: { id: string; field_value: string | string[] }[] = [
    { id: FIELD_LEAD_SOURCE, field_value: 'Website' },
  ]
  if (payload.leadType) customFields.push({ id: FIELD_LEAD_TYPE, field_value: payload.leadType })
  if (payload.areas) customFields.push({ id: FIELD_TARGET_AREAS, field_value: payload.areas })
  if (payload.smsConsent) customFields.push({ id: FIELD_SMS_CONSENT, field_value: [SMS_CONSENT_OPTION] })

  const upsertResult = await ghlFetch(
    '/contacts/upsert',
    {
      method: 'POST',
      body: JSON.stringify({
        locationId: creds.locationId,
        firstName,
        lastName,
        name: payload.name,
        email: payload.email,
        phone: payload.phone || undefined,
        source: payload.source,
        customFields,
        tags: payload.tags,
      }),
    },
    creds.token
  )

  const contactId =
    typeof upsertResult.body === 'object' && upsertResult.body !== null && 'contact' in upsertResult.body
      ? (upsertResult.body as { contact?: { id?: string } }).contact?.id
      : null

  if (!upsertResult.ok || !contactId) {
    return { ok: false, reason: `ghl-upsert-failed:${upsertResult.status}` }
  }

  // Freeform context (message, timeline, budget, strategy, etc.) as a note
  // — this location's custom fields are mostly validated picklists, so a
  // note is the safe place for anything free-text.
  if (payload.note) {
    await ghlFetch(
      `/contacts/${contactId}/notes`,
      { method: 'POST', body: JSON.stringify({ body: payload.note }) },
      creds.token
    )
  }

  return { ok: true, contactId }
}
