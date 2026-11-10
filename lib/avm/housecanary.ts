import { AvmEstimate, PropertyValueQuery } from './types';

// HouseCanary AVM — the premium cross-check valuation.
// Docs: https://api-docs.housecanary.com/ — GET /v2/property/value.
// Auth: HTTP Basic, API Key as username + API Secret as password (HTTPS only).

const HC_BASE = 'https://api.housecanary.com/v2';
const TIMEOUT_MS = 8000;

// HouseCanary returns FSD (forecast standard deviation): the fraction by which
// the true value is expected to vary. Lower FSD => higher confidence.
function confidenceFromFsd(fsd: number | null | undefined): number | null {
  if (fsd == null || Number.isNaN(Number(fsd))) return null;
  return Math.max(0, Math.min(1, 1 - Number(fsd) / 0.25));
}

export async function getHouseCanaryValue(query: PropertyValueQuery): Promise<AvmEstimate | null> {
  const apiKey = process.env.HOUSECANARY_API_KEY;
  const apiSecret = process.env.HOUSECANARY_API_SECRET;
  if (!apiKey || !apiSecret) return null; // not configured

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const params = new URLSearchParams({ address: query.address, zipcode: query.zipcode });

  type HouseCanaryValueBlock = {
    api_code?: number;
    result?: {
      value?: {
        price_mean?: number;
        price_lwr?: number;
        price_upr?: number;
        fsd?: number;
      };
    };
  };
  type HouseCanaryEntry = { 'property/value'?: HouseCanaryValueBlock };

  let json: HouseCanaryEntry | HouseCanaryEntry[];
  try {
    const res = await fetch(`${HC_BASE}/property/value?${params.toString()}`, {
      headers: { Authorization: `Basic ${auth}`, Accept: 'application/json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;
    json = (await res.json()) as HouseCanaryEntry | HouseCanaryEntry[];
  } catch {
    return null;
  }

  const entry = Array.isArray(json) ? json[0] : json;
  const block = entry?.['property/value'];
  if (!block || block.api_code !== 0) return null; // HC signals errors via api_code
  const v = block?.result?.value;
  const value = Number(v?.price_mean);
  if (!value || Number.isNaN(value)) return null;

  return {
    source: 'housecanary',
    value,
    low: v?.price_lwr != null ? Number(v.price_lwr) : null,
    high: v?.price_upr != null ? Number(v.price_upr) : null,
    confidence: confidenceFromFsd(v?.fsd),
    compCount: null,
    raw: entry,
  };
}
