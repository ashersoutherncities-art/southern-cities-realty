// GoHighLevel (GHL) lead delivery for Southern Cities Realty.
//
// Southern Cities Realty shares its GHL location with Southern Cities
// Construction. Rather than wait on a GHL-hosted "Inbound Webhook" trigger
// (premium, and never finished — see scr-forms-deliver-nowhere memory), we
// upsert the contact directly via the REST API, same pattern as SCC's
// lib/ghl.ts. GHL workflows then listen for "Contact Tag Added" events.
//
// Env vars required:
//   GHL_API_TOKEN     — Private Integration Access Token (pit-...)
//   GHL_LOCATION_ID   — shared SC location id

const GHL_BASE = 'https://services.leadconnectorhq.com'
const GHL_VERSION = '2021-07-28'

// Custom field IDs on the shared SC location (looked up once in GHL, same
// IDs SCC's lib/ghl.ts uses).
const CUSTOM_FIELD_IDS: Record<string, string> = {
  Audience: 'QhU70KrKAxK5BtbbF34q',
  'Your Message': 'XUtw0Y4pMhiF9DppQ327',
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

export type GhlLeadPayload = {
  name: string
  email: string
  phone?: string
  source: string
  tags: string[]
  message?: string
  audience?: string
}

export async function upsertGhlContact(
  payload: GhlLeadPayload
): Promise<{ ok: boolean; contactId?: string | null; reason?: string }> {
  const creds = getCreds()
  if (!creds) return { ok: false, reason: 'GHL credentials not configured' }

  const { firstName, lastName } = splitName(payload.name)
  const customFields = [
    payload.message
      ? { id: CUSTOM_FIELD_IDS['Your Message'], field_value: payload.message }
      : null,
    payload.audience
      ? { id: CUSTOM_FIELD_IDS.Audience, field_value: payload.audience }
      : null,
  ].filter((f): f is { id: string; field_value: string } => Boolean(f))

  const body = {
    locationId: creds.locationId,
    firstName,
    lastName,
    name: payload.name,
    email: payload.email,
    phone: payload.phone || undefined,
    source: payload.source,
    customFields,
    tags: payload.tags,
  }

  try {
    const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${creds.token}`,
        Version: GHL_VERSION,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const text = await res.text()
    let json: unknown = null
    try {
      json = text ? JSON.parse(text) : null
    } catch {
      /* keep raw text */
    }
    const contactId =
      typeof json === 'object' && json !== null && 'contact' in json
        ? (json as { contact?: { id?: string } }).contact?.id
        : null
    if (!res.ok || !contactId) {
      return { ok: false, reason: `ghl-upsert-failed:${res.status}` }
    }
    return { ok: true, contactId }
  } catch {
    return { ok: false, reason: 'ghl-upsert-threw' }
  }
}
