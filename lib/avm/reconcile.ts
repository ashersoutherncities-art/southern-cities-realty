import { AvmEstimate, ReconciledValue } from './types';

// Spread above which the two AVMs are considered to disagree.
const DIVERGENCE_THRESHOLD = 0.07;

// Reconcile 1-2 AVM estimates into a single value for display to a seller.
// Unlike SCC's investor-facing MAO reconciliation (which falls back to the
// CONSERVATIVE/lower value on disagreement to protect a buyer's offer), this
// is a market-value estimate for a homeowner — on disagreement we show the
// average with a wider range, and nudge toward the broker-run CMA.
export function reconcileValue(estimates: AvmEstimate[]): ReconciledValue | null {
  const valid = estimates.filter((e) => e && e.value > 0);
  if (valid.length === 0) return null;

  const notes: string[] = [];

  if (valid.length === 1) {
    const only = valid[0];
    return {
      value: Math.round(only.value),
      low: Math.round(only.low ?? only.value * 0.93),
      high: Math.round(only.high ?? only.value * 1.07),
      sources: valid,
      confidence: only.confidence != null && only.confidence >= 0.7 ? 'moderate' : 'low',
      divergence: null,
      notes: [`Single AVM source (${only.source}); no cross-check available.`],
    };
  }

  const rc = valid.find((e) => e.source === 'rentcast');
  const hc = valid.find((e) => e.source === 'housecanary');
  const a = valid[0].value;
  const b = valid[1].value;
  const avg = (a + b) / 2;
  const divergence = Math.abs(a - b) / avg;

  let value: number;
  let confidence: ReconciledValue['confidence'];

  if (divergence <= DIVERGENCE_THRESHOLD) {
    value = rc && hc ? hc.value * 0.6 + rc.value * 0.4 : avg;
    confidence = 'high';
    notes.push(`Both estimates agree within ${(divergence * 100).toFixed(1)}%.`);
  } else {
    value = avg;
    confidence = 'moderate';
    notes.push(
      `Estimates vary by ${(divergence * 100).toFixed(1)}% — a broker-run CMA will narrow this down.`
    );
  }

  const low = Math.min(...valid.map((e) => e.low ?? e.value * 0.93));
  const high = Math.max(...valid.map((e) => e.high ?? e.value * 1.07));

  return {
    value: Math.round(value),
    low: Math.round(low),
    high: Math.round(high),
    sources: valid,
    confidence,
    divergence,
    notes,
  };
}
