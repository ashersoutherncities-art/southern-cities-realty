// AVM (Automated Valuation Model) layer for the "What's My Home Worth" seller
// lead-gen tool. Blends two providers into a single estimate:
//   - RentCast    — cheap screening AVM, always runs
//   - HouseCanary — premium AVM, runs alongside it for a cross-check
// This is a market-value ESTIMATE for a homeowner, not an offer or appraisal —
// unlike SCC's investor-facing MAO math, there's no rehab/profit subtraction here.

export type AvmSource = 'rentcast' | 'housecanary';

export type AvmEstimate = {
  source: AvmSource;
  value: number; // point estimate
  low: number | null; // provider's low end of the range
  high: number | null; // provider's high end of the range
  confidence: number | null; // normalized 0..1 (1 = most confident)
  compCount: number | null;
  raw?: unknown; // original provider payload, for debugging
};

export type PropertyValueQuery = {
  address: string; // full address as typed, e.g. "123 Main St, Charlotte, NC 28202"
  zipcode: string; // extracted from address; HouseCanary requires it separately
};

// Result of reconciling 1-2 AVMs into a single estimate for display.
export type ReconciledValue = {
  value: number;
  low: number;
  high: number;
  sources: AvmEstimate[];
  confidence: 'high' | 'moderate' | 'low';
  divergence: number | null; // relative spread between the two AVMs, null if <2 sources
  notes: string[];
};
