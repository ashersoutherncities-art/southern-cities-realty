// Single source of truth for Southern Cities Realty neighborhood guides.
// image: null => the card/page renders a branded fallback (no fabricated photo).

export type Neighborhood = {
  slug: string
  name: string
  subtitle: string
  group: (typeof GROUPS)[number]
  image: string | null
  about: string
  food: string
  shops: string
  thingsToDo: string
  nearby: string[]
}

export const GROUPS = [
  'Charlotte Neighborhoods',
  'North Charlotte',
  'South & East Charlotte',
  'Union County',
  'Gaston County',
] as const

export const NEIGHBORHOODS: Neighborhood[] = [
  // ---------------- Charlotte ----------------
  {
    slug: 'uptown', name: 'Uptown', subtitle: 'Center City Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/uptown.jpg',
    about: "Charlotte's skyline and center of gravity. Business towers, pro sports, and the city's biggest arts and culture venues, all packed into a walkable, high-energy core.",
    food: 'Rooftop bars, chef-driven restaurants, and the 7th Street Public Market food hall.',
    shops: 'Boutiques, galleries, and everyday essentials within walking distance.',
    thingsToDo: 'Panthers at Bank of America Stadium, Hornets at Spectrum Center, Knights baseball at Truist Field, plus the Mint, Bechtler, and Gantt museums and Romare Bearden Park.',
    nearby: ['south-end', 'dilworth', 'elizabeth'],
  },
  {
    slug: 'south-end', name: 'South End', subtitle: 'Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/south-end.jpg',
    about: "One of Charlotte's most popular neighborhoods for young professionals. A dense, walkable strip of breweries, patios, and shops along the Rail Trail and the Lynx Blue Line.",
    food: 'Wall-to-wall breweries, rooftop bars, coffee shops, and buzzy restaurants.',
    shops: 'The Design District, Atherton Mill, and local boutiques.',
    thingsToDo: 'Public art and events along the Rail Trail, with light rail to Uptown in minutes.',
    nearby: ['loso', 'dilworth', 'uptown'],
  },
  {
    slug: 'loso', name: 'LoSo', subtitle: 'Lower South End, Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/loso.jpg',
    about: 'Lower South End, the up-and-coming pocket just south of South End, where old warehouses are turning into breweries, food halls, and maker spaces around the New Bern rail stop.',
    food: 'A growing cluster of craft breweries, taprooms, and food halls.',
    shops: 'Makers, studios, and design showrooms in converted industrial space.',
    thingsToDo: 'Blue Line light rail access and an emerging arts and brewery scene with room to grow.',
    nearby: ['south-end', 'steele-creek', 'dilworth'],
  },
  {
    slug: 'dilworth', name: 'Dilworth', subtitle: 'Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/dilworth.jpg',
    about: "Charlotte's first streetcar suburb. Tree-lined streets, front-porch bungalows, and historic charm a short walk or bike from Uptown and South End.",
    food: "East Boulevard's restaurants, cafes, and neighborhood favorites.",
    shops: 'Boutiques and local shops along East Boulevard.',
    thingsToDo: 'Freedom Park and Latta Park, plus the greenway and easy access to the city.',
    nearby: ['myers-park', 'south-end', 'elizabeth'],
  },
  {
    slug: 'myers-park', name: 'Myers Park', subtitle: 'Central Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/myers-park.jpg',
    about: "One of Charlotte's most prestigious addresses. Grand historic homes under a canopy of willow oaks along Queens Road, minutes from SouthPark and Uptown.",
    food: 'Fine dining and cafes nearby in Dilworth and SouthPark.',
    shops: 'Upscale shopping a short drive away at SouthPark.',
    thingsToDo: 'Freedom Park, the Little Sugar Creek Greenway, and some of the prettiest streets in the city for a walk.',
    nearby: ['dilworth', 'southpark', 'cotswold'],
  },
  {
    slug: 'plaza-midwood', name: 'Plaza Midwood', subtitle: 'Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/plaza-midwood.jpg',
    about: "Charlotte's eclectic, artsy side. A diverse, walkable neighborhood along Central Avenue known for vintage shops, global food, dive bars, and creative energy.",
    food: 'An international mix of restaurants, coffee shops, and craft beer.',
    shops: 'Vintage, records, plants, and independent boutiques.',
    thingsToDo: 'The Common Market, live music, and a genuinely local, come-as-you-are vibe.',
    nearby: ['noda', 'elizabeth', 'uptown'],
  },
  {
    slug: 'noda', name: 'NoDa', subtitle: 'North Davidson, Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/noda.jpg',
    about: "Charlotte's historic arts district (North Davidson). Murals, galleries, live-music venues, and breweries in a colorful, creative, walkable stretch.",
    food: 'Breweries, taprooms, and independent restaurants.',
    shops: 'Art galleries, studios, and quirky local shops along 36th Street.',
    thingsToDo: 'Live music at the Neighborhood Theatre and The Evening Muse, First Friday gallery crawls, and NoDa Brewing.',
    nearby: ['plaza-midwood', 'uptown', 'university'],
  },
  {
    slug: 'southpark', name: 'SouthPark', subtitle: 'Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/southpark.jpg',
    about: "Charlotte's upscale shopping and dining hub. Polished, convenient, and built around one of the Southeast's premier malls.",
    food: 'Fine dining and popular restaurants throughout the district.',
    shops: "SouthPark Mall's flagship and luxury stores, plus surrounding retail.",
    thingsToDo: "Symphony Park's outdoor concerts and events, with Myers Park and greenways close by.",
    nearby: ['myers-park', 'cotswold', 'ballantyne'],
  },
  {
    slug: 'ballantyne', name: 'Ballantyne', subtitle: 'South Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/ballantyne.jpg',
    about: 'A polished, master-planned community in far south Charlotte. Newer homes, corporate campuses, golf, and the new Bowl at Ballantyne mixed-use district.',
    food: 'Restaurants and cafes at Ballantyne Village and the Bowl.',
    shops: 'Shopping centers and everyday retail throughout.',
    thingsToDo: "The Bowl at Ballantyne's greenway, amphitheater, and dining, plus golf and country-club living.",
    nearby: ['pineville', 'southpark', 'steele-creek'],
  },
  {
    slug: 'university', name: 'University', subtitle: 'University City, Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/university.jpg',
    about: 'University City, anchored by UNC Charlotte and University Research Park. A fast-growing, affordable area with light-rail access to Uptown.',
    food: 'Casual restaurants and cafes around campus and the research park.',
    shops: 'University-area retail and nearby Concord Mills.',
    thingsToDo: 'UNC Charlotte events and Botanical Gardens, PNC Music Pavilion concerts, and the Blue Line to Uptown.',
    nearby: ['noda', 'harrisburg', 'concord'],
  },
  {
    slug: 'elizabeth', name: 'Elizabeth', subtitle: 'Central Charlotte', group: 'Charlotte Neighborhoods',
    image: '/neighborhoods/elizabeth.jpg',
    about: "One of Charlotte's oldest and prettiest neighborhoods, just east of Uptown. Tree-lined streets, historic bungalows and Craftsman homes, and a genuinely walkable, close-in feel.",
    food: 'Elizabeth Avenue and Seventh Street restaurants, cafes, and long-standing local favorites.',
    shops: 'Boutiques and everyday shops along Seventh Street and Elizabeth Avenue.',
    thingsToDo: 'Independence Park, the Little Sugar Creek Greenway, and an easy walk or streetcar ride to Uptown.',
    nearby: ['dilworth', 'plaza-midwood', 'uptown'],
  },
  {
    slug: 'cotswold', name: 'Cotswold', subtitle: 'Southeast Charlotte', group: 'Charlotte Neighborhoods',
    image: null,
    about: 'An established, leafy Southeast Charlotte area known for solid mid-century and ranch homes, mature trees, and a convenient location near SouthPark and Uptown.',
    food: 'Restaurants and cafes around Cotswold and nearby SouthPark.',
    shops: 'Cotswold Village shopping center and everyday retail.',
    thingsToDo: 'Greenways, parks, and quick access to SouthPark and Uptown.',
    nearby: ['southpark', 'myers-park', 'matthews'],
  },
  {
    slug: 'steele-creek', name: 'Steele Creek', subtitle: 'Southwest Charlotte', group: 'Charlotte Neighborhoods',
    image: null,
    about: 'A fast-growing Southwest Charlotte area near the airport and Lake Wylie, with newer neighborhoods, room to spread out, and quick highway access.',
    food: 'Restaurants and everyday dining around Rivergate and the Steele Creek corridor.',
    shops: 'Rivergate shopping center and surrounding retail.',
    thingsToDo: 'Lake Wylie access, the U.S. National Whitewater Center nearby, and area parks and greenways.',
    nearby: ['ballantyne', 'pineville', 'loso'],
  },
  // ---------------- North Charlotte ----------------
  {
    slug: 'huntersville', name: 'Huntersville', subtitle: 'North Mecklenburg', group: 'North Charlotte',
    image: '/neighborhoods/huntersville.jpg',
    about: 'A family-friendly northern suburb blending Lake Norman access with the walkable shopping and dining of Birkdale Village.',
    food: 'Restaurants and cafes at Birkdale Village and beyond.',
    shops: "Birkdale Village's open-air shops and everyday retail.",
    thingsToDo: 'Lake Norman recreation, greenways, and community events.',
    nearby: ['cornelius', 'davidson', 'mooresville'],
  },
  {
    slug: 'cornelius', name: 'Cornelius', subtitle: 'Lake Norman', group: 'North Charlotte',
    image: '/neighborhoods/cornelius.jpg',
    about: 'A Lake Norman town blending waterfront living with a walkable historic core. Marinas, lakeside parks, and an easy, resort-like pace just north of Charlotte.',
    food: 'Lakeside restaurants and downtown Cornelius dining.',
    shops: 'Antique shops and boutiques in the historic district, plus lake-town retail.',
    thingsToDo: 'Boating and swimming on Lake Norman, Jetton Park, and Ramsey Creek Park.',
    nearby: ['davidson', 'huntersville', 'mooresville'],
  },
  {
    slug: 'davidson', name: 'Davidson', subtitle: 'North Mecklenburg', group: 'North Charlotte',
    image: '/neighborhoods/davidson.jpg',
    about: 'A charming college town anchored by Davidson College, with a walkable, historic Main Street, front-porch homes, and a tight-knit community feel on the edge of Lake Norman.',
    food: "Main Street restaurants, cafes, and the town's beloved local spots.",
    shops: 'Independent bookstores, boutiques, and shops along Main Street.',
    thingsToDo: 'Davidson College arts and athletics, the greenway, and lakefront parks nearby.',
    nearby: ['cornelius', 'huntersville', 'mooresville'],
  },
  {
    slug: 'mooresville', name: 'Mooresville', subtitle: 'Lake Norman / Iredell', group: 'North Charlotte',
    image: '/neighborhoods/mooresville.jpg',
    about: 'Race City USA, home to NASCAR teams and race shops, sitting right on Lake Norman with a lively historic Main Street.',
    food: 'Downtown Main Street restaurants and lakeside dining.',
    shops: 'Local shops downtown and race-shop showrooms.',
    thingsToDo: 'NASCAR team tours, the lake, and downtown festivals.',
    nearby: ['cornelius', 'davidson', 'kannapolis'],
  },
  {
    slug: 'concord', name: 'Concord', subtitle: 'Cabarrus County', group: 'North Charlotte',
    image: '/neighborhoods/concord.jpg',
    about: 'A growing city just north of Charlotte with a preserved historic downtown, big-time motorsports, and one of the region’s largest shopping destinations.',
    food: 'Downtown Union Street dining and plenty of options near Concord Mills.',
    shops: 'Concord Mills outlet mall and historic downtown shops.',
    thingsToDo: 'Charlotte Motor Speedway, Great Wolf Lodge, and downtown events.',
    nearby: ['kannapolis', 'harrisburg', 'university'],
  },
  {
    slug: 'kannapolis', name: 'Kannapolis', subtitle: 'Cabarrus County', group: 'North Charlotte',
    image: null,
    about: 'A Cabarrus County city with a reinvented, walkable downtown, the North Carolina Research Campus, and Atrium Health Ballpark, offering strong value north of Charlotte.',
    food: 'Downtown restaurants and dining around West Avenue and the ballpark.',
    shops: 'Downtown shops and everyday retail.',
    thingsToDo: 'Cannon Ballers baseball at Atrium Health Ballpark, downtown events, and the Research Campus.',
    nearby: ['concord', 'harrisburg', 'mooresville'],
  },
  {
    slug: 'harrisburg', name: 'Harrisburg', subtitle: 'Cabarrus County', group: 'North Charlotte',
    image: '/neighborhoods/harrisburg.jpg',
    about: 'A family-friendly Cabarrus County town with newer neighborhoods, good schools, parks, and an easy commute to both Charlotte and Concord.',
    food: 'Local restaurants and casual dining around town.',
    shops: 'Everyday retail and shopping centers, with Concord Mills close by.',
    thingsToDo: 'Town parks and greenways, community events, and nearby Charlotte Motor Speedway.',
    nearby: ['concord', 'kannapolis', 'mint-hill'],
  },
  // ---------------- South & East Charlotte ----------------
  {
    slug: 'matthews', name: 'Matthews', subtitle: 'Southeast metro', group: 'South & East Charlotte',
    image: '/neighborhoods/matthews.jpg',
    about: "A charming small town on Charlotte's southeast edge. A walkable historic downtown, strong schools, and a real community feel.",
    food: 'Local restaurants and cafes around downtown.',
    shops: 'The Matthews Community Farmers Market and independent shops.',
    thingsToDo: 'Stumptown Park events, festivals, and greenways.',
    nearby: ['mint-hill', 'cotswold', 'waxhaw'],
  },
  {
    slug: 'mint-hill', name: 'Mint Hill', subtitle: 'Southeast metro', group: 'South & East Charlotte',
    image: '/neighborhoods/mint-hill.jpg',
    about: 'A quiet, family-oriented Southeast metro town with larger lots, a small-town feel, and easy access to Matthews, Uptown, and the interstate.',
    food: 'Local restaurants and cafes around town.',
    shops: 'Everyday shopping centers and nearby retail.',
    thingsToDo: 'Town parks, greenways, and community events.',
    nearby: ['matthews', 'harrisburg', 'indian-trail'],
  },
  {
    slug: 'pineville', name: 'Pineville', subtitle: 'South Charlotte', group: 'South & East Charlotte',
    image: '/neighborhoods/pineville.jpg',
    about: 'A small, historic South Charlotte town with a walkable Main Street and one of the region’s major malls right at its doorstep.',
    food: 'Downtown Pineville restaurants and dining near Carolina Place.',
    shops: 'Carolina Place mall and historic Main Street shops.',
    thingsToDo: 'Historic downtown, area parks, and quick access to South Charlotte and Ballantyne.',
    nearby: ['ballantyne', 'southpark', 'steele-creek'],
  },
  // ---------------- Union County ----------------
  {
    slug: 'waxhaw', name: 'Waxhaw', subtitle: 'Union County', group: 'Union County',
    image: '/neighborhoods/waxhaw.jpg',
    about: 'A historic small town south of Charlotte known for its antique district, walkable downtown, and quiet, family-friendly pace.',
    food: 'Downtown restaurants, breweries, and cafes.',
    shops: 'Antique stores and local boutiques.',
    thingsToDo: 'Festivals, small-town events, and easy access to open space.',
    nearby: ['weddington', 'marvin', 'indian-trail'],
  },
  {
    slug: 'weddington', name: 'Weddington', subtitle: 'Union County', group: 'Union County',
    image: '/neighborhoods/weddington.jpg',
    about: 'An affluent, quiet Union County town known for larger homes on spacious lots, top-rated schools, and a green, residential feel.',
    food: "Local dining at Weddington's village commons and nearby Waxhaw.",
    shops: 'Village shopping centers and everyday retail.',
    thingsToDo: "Parks, greenways, and easy access to Waxhaw's historic downtown.",
    nearby: ['waxhaw', 'marvin', 'indian-trail'],
  },
  {
    slug: 'marvin', name: 'Marvin', subtitle: 'Union County', group: 'Union County',
    image: null,
    about: 'A small, upscale Union County village prized for its rural character, large estate lots, parks, and highly-rated schools.',
    food: 'Nearby dining in Waxhaw and Weddington.',
    shops: 'Everyday retail nearby, with a deliberately residential, low-density feel.',
    thingsToDo: 'Marvin Efird Park, greenways, and open space.',
    nearby: ['weddington', 'waxhaw', 'marvin'].filter((s) => s !== 'marvin'),
  },
  {
    slug: 'indian-trail', name: 'Indian Trail', subtitle: 'Union County', group: 'Union County',
    image: '/neighborhoods/indian-trail.jpg',
    about: 'A growing Union County town offering strong value, newer neighborhoods, and family-friendly amenities with an easy commute toward Charlotte.',
    food: 'Restaurants and casual dining around town and Sun Valley.',
    shops: 'Sun Valley Commons and everyday shopping centers.',
    thingsToDo: 'Town parks, greenways, Crooked Creek, and community events.',
    nearby: ['waxhaw', 'weddington', 'matthews'],
  },
  // ---------------- Gaston County ----------------
  {
    slug: 'gastonia', name: 'Gastonia', subtitle: 'Gaston County', group: 'Gaston County',
    image: '/neighborhoods/gastonia.jpg',
    about: 'The heart of Gaston County west of Charlotte. An affordable, revitalizing downtown, historic mill neighborhoods, and quick access to Crowders Mountain and the U.S. National Whitewater Center.',
    food: 'Downtown Gastonia restaurants and breweries along the Franklin corridor and the FUSE district.',
    shops: 'Downtown shops and everyday retail, with more along Franklin Boulevard.',
    thingsToDo: 'Minor-league baseball at CaroMont Health Park, the Schiele Museum, Crowders Mountain State Park, and Daniel Stowe Botanical Garden nearby.',
    nearby: ['steele-creek', 'uptown'],
  },
]

// Primary ZIP (for market data) + the public school district that serves the area.
// Districts are factual; assigned schools are address-specific (never fabricated).
export type AreaMeta = { zip: string; district: string; districtUrl: string }

const CMS: [string, string] = ['Charlotte-Mecklenburg Schools', 'https://www.cmsk12.org']
const UCPS: [string, string] = ['Union County Public Schools', 'https://www.ucps.k12.nc.us']
const CABARRUS: [string, string] = ['Cabarrus County Schools', 'https://www.cabarrus.k12.nc.us']

export const AREA_META: Record<string, AreaMeta> = {
  uptown: { zip: '28202', district: CMS[0], districtUrl: CMS[1] },
  'south-end': { zip: '28203', district: CMS[0], districtUrl: CMS[1] },
  loso: { zip: '28217', district: CMS[0], districtUrl: CMS[1] },
  dilworth: { zip: '28203', district: CMS[0], districtUrl: CMS[1] },
  'myers-park': { zip: '28207', district: CMS[0], districtUrl: CMS[1] },
  'plaza-midwood': { zip: '28205', district: CMS[0], districtUrl: CMS[1] },
  noda: { zip: '28205', district: CMS[0], districtUrl: CMS[1] },
  southpark: { zip: '28211', district: CMS[0], districtUrl: CMS[1] },
  ballantyne: { zip: '28277', district: CMS[0], districtUrl: CMS[1] },
  university: { zip: '28262', district: CMS[0], districtUrl: CMS[1] },
  elizabeth: { zip: '28204', district: CMS[0], districtUrl: CMS[1] },
  cotswold: { zip: '28211', district: CMS[0], districtUrl: CMS[1] },
  'steele-creek': { zip: '28273', district: CMS[0], districtUrl: CMS[1] },
  huntersville: { zip: '28078', district: CMS[0], districtUrl: CMS[1] },
  cornelius: { zip: '28031', district: CMS[0], districtUrl: CMS[1] },
  davidson: { zip: '28036', district: CMS[0], districtUrl: CMS[1] },
  mooresville: { zip: '28117', district: 'Mooresville Graded School District', districtUrl: 'https://www.mgsd.net' },
  concord: { zip: '28025', district: CABARRUS[0], districtUrl: CABARRUS[1] },
  kannapolis: { zip: '28081', district: 'Kannapolis City Schools', districtUrl: 'https://www.kcs.k12.nc.us' },
  harrisburg: { zip: '28075', district: CABARRUS[0], districtUrl: CABARRUS[1] },
  matthews: { zip: '28105', district: CMS[0], districtUrl: CMS[1] },
  'mint-hill': { zip: '28227', district: CMS[0], districtUrl: CMS[1] },
  pineville: { zip: '28134', district: CMS[0], districtUrl: CMS[1] },
  waxhaw: { zip: '28173', district: UCPS[0], districtUrl: UCPS[1] },
  weddington: { zip: '28104', district: UCPS[0], districtUrl: UCPS[1] },
  marvin: { zip: '28173', district: UCPS[0], districtUrl: UCPS[1] },
  'indian-trail': { zip: '28079', district: UCPS[0], districtUrl: UCPS[1] },
  gastonia: { zip: '28054', district: 'Gaston County Schools', districtUrl: 'https://www.gaston.k12.nc.us' },
}

export const BY_SLUG: Record<string, Neighborhood> = Object.fromEntries(
  NEIGHBORHOODS.map((n) => [n.slug, n]),
)

export function neighborhoodsByGroup() {
  return GROUPS.map((group) => ({
    group,
    items: NEIGHBORHOODS.filter((n) => n.group === group),
  }))
}
