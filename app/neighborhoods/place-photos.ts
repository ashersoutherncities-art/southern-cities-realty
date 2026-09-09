// Per-neighborhood photo gallery — REAL Creative-Commons / public-domain images of
// specific landmark places (parks, stadiums, museums, markets, transit). Same standard
// as credits.ts / places.ts: only images we can verify are real, correctly located, and
// freely licensed, each with proper attribution. Restaurants/bars/gyms are intentionally
// omitted here (no freely-licensed photos) and stay text-only in places.ts.
//
// Files live in /public/neighborhoods/places/. Add entries only after verifying the
// source File: page, author, and license on Wikimedia Commons.

export type PlacePhoto = {
  place: string // the landmark shown
  file: string // path under /public
  creator: string // plain-text author for attribution
  license: string // e.g. "CC BY-SA 4.0", "CC0", "Public domain"
  source?: string // link to the source File: page
}

export const PLACE_PHOTOS: Record<string, PlacePhoto[]> = {}
