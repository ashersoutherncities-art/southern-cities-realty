// NC coverage organized by metro region. Charlotte is deep (its own neighborhood
// pages); Triangle & Triad have per-city pages; the rest are region landing pages
// that establish coverage now and get per-town depth later.

export type RegionDepth = 'deep' | 'cities' | 'landing'

export type Region = {
  slug: string
  name: string // page H1
  short: string // nav dropdown label
  tagline: string
  blurb: string
  image: string | null
  depth: RegionDepth
  counties: string // short teaser list for cards
  allCounties: string[] // full county coverage for this region (all 100 NC counties across regions)
  areaSlugs?: string[] // for depth 'cities' — areas with their own pages
  towns?: string[] // for depth 'landing' — towns we serve (no page yet)
}

export const REGIONS: Region[] = [
  {
    slug: 'charlotte',
    name: 'Charlotte & the Metro',
    short: 'Charlotte',
    tagline: 'Our home turf',
    blurb:
      'Where we live and work. From Uptown and South End to Lake Norman, Union County, and Gastonia, this is the market we know street by street.',
    image: '/neighborhoods/uptown.jpg',
    depth: 'deep',
    counties: 'Mecklenburg, Union, Cabarrus, Gaston, Iredell',
    allCounties: ['Mecklenburg', 'Union', 'Cabarrus', 'Gaston', 'Iredell', 'Lincoln', 'Cleveland', 'Rowan', 'Stanly', 'Anson'],
  },
  {
    slug: 'triangle',
    name: 'Raleigh–Durham & The Triangle',
    short: 'Raleigh–Durham',
    tagline: 'The Triangle',
    blurb:
      "North Carolina's fast-growing research and university hub. Raleigh, Durham, Chapel Hill, and the booming Wake County towns.",
    image: '/neighborhoods/raleigh.jpg',
    depth: 'cities',
    counties: 'Wake, Durham, Orange, Chatham',
    allCounties: ['Wake', 'Durham', 'Orange', 'Chatham', 'Johnston', 'Franklin', 'Granville', 'Vance', 'Warren', 'Person', 'Lee'],
    areaSlugs: ['raleigh', 'durham', 'chapel-hill', 'cary', 'apex', 'wake-forest'],
  },
  {
    slug: 'triad',
    name: 'Greensboro–Winston-Salem & The Triad',
    short: 'Greensboro–Winston-Salem',
    tagline: 'The Triad',
    blurb:
      'Central NC value and character. Greensboro, Winston-Salem, High Point, and the towns in between.',
    image: '/neighborhoods/winston-salem.jpg',
    depth: 'cities',
    counties: 'Guilford, Forsyth',
    allCounties: ['Guilford', 'Forsyth', 'Davidson', 'Davie', 'Randolph', 'Rockingham', 'Alamance', 'Surry', 'Stokes', 'Yadkin', 'Caswell'],
    areaSlugs: ['greensboro', 'winston-salem', 'high-point', 'kernersville'],
  },
  {
    slug: 'western',
    name: 'Asheville & Western North Carolina',
    short: 'Asheville & the Mountains',
    tagline: 'The Mountains',
    blurb:
      'Blue Ridge living, from the arts and food of Asheville to the college towns and foothills. We serve buyers and sellers across the mountains.',
    image: '/neighborhoods/asheville.jpg',
    depth: 'cities',
    counties: 'Buncombe, Watauga, Catawba, Caldwell, Henderson',
    allCounties: ['Buncombe', 'Henderson', 'Haywood', 'Madison', 'Transylvania', 'Jackson', 'Macon', 'Swain', 'Graham', 'Cherokee', 'Clay', 'Polk', 'Rutherford', 'McDowell', 'Burke', 'Caldwell', 'Catawba', 'Alexander', 'Wilkes', 'Watauga', 'Ashe', 'Alleghany', 'Avery', 'Mitchell', 'Yancey'],
    towns: ['Asheville', 'Hendersonville', 'Boone', 'Blowing Rock', 'Hickory', 'Lenoir', 'Waynesville', 'Brevard'],
  },
  {
    slug: 'wilmington',
    name: 'Wilmington & the Coast',
    short: 'Wilmington & the Coast',
    tagline: 'The Cape Fear Coast',
    blurb:
      'Riverfront and beach living along the southern coast, from historic downtown Wilmington to the island towns.',
    image: '/neighborhoods/wilmington.jpg',
    depth: 'cities',
    counties: 'New Hanover, Brunswick, Pender',
    allCounties: ['New Hanover', 'Brunswick', 'Pender', 'Columbus', 'Bladen'],
    towns: ['Wilmington', 'Wrightsville Beach', 'Carolina Beach', 'Leland', 'Southport', 'Hampstead'],
  },
  {
    slug: 'eastern',
    name: 'Eastern North Carolina',
    short: 'Eastern NC',
    tagline: 'Down East',
    blurb:
      'Historic river towns and coastal-plain communities, from Greenville and New Bern to Jacksonville and Goldsboro.',
    image: '/neighborhoods/new-bern.jpg',
    depth: 'cities',
    counties: 'Pitt, Craven, Onslow, Wayne, Lenoir',
    allCounties: ['Pitt', 'Craven', 'Onslow', 'Wayne', 'Lenoir', 'Carteret', 'Jones', 'Greene', 'Duplin', 'Sampson', 'Beaufort', 'Martin', 'Nash', 'Edgecombe', 'Wilson', 'Halifax', 'Northampton', 'Bertie', 'Hertford', 'Pamlico'],
    towns: ['Greenville', 'New Bern', 'Jacksonville', 'Goldsboro', 'Kinston', 'Wilson'],
  },
  {
    slug: 'sandhills',
    name: 'Fayetteville & the Sandhills',
    short: 'Fayetteville & Pinehurst',
    tagline: 'The Sandhills',
    blurb:
      'Home of Fort Liberty and the golf capital of Pinehurst and Southern Pines, with strong value across the Sandhills.',
    image: null,
    depth: 'cities',
    counties: 'Cumberland, Moore, Hoke',
    allCounties: ['Cumberland', 'Moore', 'Hoke', 'Harnett', 'Richmond', 'Scotland', 'Robeson', 'Montgomery'],
    towns: ['Fayetteville', 'Pinehurst', 'Southern Pines', 'Aberdeen', 'Hope Mills'],
  },
  {
    slug: 'outer-banks',
    name: 'The Outer Banks',
    short: 'Outer Banks',
    tagline: 'The OBX',
    blurb:
      "North Carolina's barrier-island coastline, from Corolla and Duck to Nags Head and Hatteras.",
    image: '/neighborhoods/hatteras.jpg',
    depth: 'cities',
    counties: 'Dare, Currituck',
    allCounties: ['Dare', 'Currituck', 'Camden', 'Pasquotank', 'Perquimans', 'Chowan', 'Gates', 'Tyrrell', 'Hyde', 'Washington'],
    towns: ['Corolla', 'Duck', 'Kitty Hawk', 'Kill Devil Hills', 'Nags Head', 'Hatteras'],
  },
]

export const BY_REGION: Record<string, Region> = Object.fromEntries(REGIONS.map((r) => [r.slug, r]))
