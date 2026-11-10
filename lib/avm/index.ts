import { getRentCastValue } from './rentcast';
import { getHouseCanaryValue } from './housecanary';
import { reconcileValue } from './reconcile';
import { ReconciledValue } from './types';

export * from './types';

// Master feature flag — stays dark until keys are live and numbers are signed off.
export function isAvmEnabled(): boolean {
  const v = (process.env.AVM_ENABLED ?? '').trim().toLowerCase();
  return v === 'true' || v === '1';
}

function extractZip(address: string): string {
  const m = address.match(/(\d{5})(?:-\d{4})?\s*$/);
  return m ? m[1] : '';
}

// Full pipeline for the "What's My Home Worth" tool: RentCast + HouseCanary in
// parallel, reconciled into one estimate. Returns null when AVM is disabled or
// neither source returned a value — caller falls back to lead-capture only.
export async function getHomeValueEstimate(address: string): Promise<ReconciledValue | null> {
  if (!isAvmEnabled()) return null;

  const query = { address, zipcode: extractZip(address) };
  const [rc, hc] = await Promise.all([getRentCastValue(query), getHouseCanaryValue(query)]);
  const estimates = [rc, hc].filter((e): e is NonNullable<typeof e> => e !== null);

  return reconcileValue(estimates);
}
