// Editorial "Local Picks" — our brokers' suggestions, framed as opinion (not claims of
// fact). Same rule as places.ts: only spots we're confident are real, established, and
// correctly located. Fields are optional; omit rather than guess. Thin for small towns.

export type LocalPicks = {
  coffee?: string
  brunch?: string
  dateNight?: string
  dogFriendly?: string[]
  hiddenGems?: string[]
  instaSpots?: string[]
  weekend?: string
}

export const LOCAL_PICKS: Record<string, LocalPicks> = {
  uptown: {
    coffee: 'Not Just Coffee at 7th Street Public Market',
    dateNight: 'Rooftop dinner and skyline views at Fahrenheit',
    dogFriendly: ['Romare Bearden Park', 'First Ward Park'],
    hiddenGems: ['The Green (tucked-away pocket park off Tryon)', 'The Overstreet Mall skywalk network'],
    instaSpots: ['Romare Bearden Park framed by the skyline', 'The Green'],
    weekend: 'Coffee at 7th Street Public Market, a Knights game at Truist Field, then rooftop drinks over the skyline.',
  },
  'south-end': {
    coffee: 'Not Just Coffee at Atherton Mill',
    brunch: 'The Suffolk Punch',
    dateNight: 'Sushi at O-Ku',
    dogFriendly: ['Charlotte Rail Trail'],
    hiddenGems: ['The giant swings and murals along the Rail Trail'],
    instaSpots: ['Rail Trail murals', 'The oversized Rail Trail swings'],
    weekend: 'Walk the Rail Trail, brewery-hop to Wooden Robot, and brunch at The Suffolk Punch.',
  },
  noda: {
    coffee: 'Smelly Cat Coffeehouse',
    brunch: 'Haberdish',
    dateNight: 'Dinner at Haberdish, then a show at the Neighborhood Theatre',
    dogFriendly: ['NoDa brewery patios', 'the 36th Street stroll'],
    hiddenGems: ['The Evening Muse for intimate live music', 'the ever-changing murals off 36th Street'],
    instaSpots: ['NoDa murals', 'the Cabo Fish Taco corner', '36th Street mural walls'],
    weekend: 'Pastries at Amélie’s, a First Friday gallery crawl, and live music at The Evening Muse.',
  },
  midtown: {
    dateNight: "Dressler's",
    hiddenGems: ['The Little Sugar Creek Greenway fountains'],
    instaSpots: ['The Little Sugar Creek Greenway'],
    weekend: "Walk the greenway, play pickleball at Midtown Park, shop the Metropolitan, and dinner at Mama Ricotta's.",
  },
  'plaza-midwood': {
    coffee: 'Giddy Goat Coffee',
    brunch: "Zada Jane's",
    dateNight: 'Dinner at Supperland or Uchi',
    dogFriendly: ['The Common Market patio', 'Resident Culture Brewing'],
    hiddenGems: ["Workman's Friend", 'the 2nd Street thrift store'],
    instaSpots: ['Central Avenue murals', "Supperland's restored-church interior"],
    weekend: 'Coffee at Giddy Goat, vintage on 2nd Street, and dinner at Supperland.',
  },
  dilworth: {
    dogFriendly: ['Freedom Park', 'Little Sugar Creek Greenway'],
    hiddenGems: ['Latta Park', 'the Little Sugar Creek Greenway to Midtown'],
    instaSpots: ['The Freedom Park lake and bridge', 'Dilworth’s historic bungalow streets'],
    weekend: 'A morning in Freedom Park, the greenway to Midtown, and dinner along East Boulevard.',
  },
  'myers-park': {
    dogFriendly: ['Freedom Park', 'Little Sugar Creek Greenway'],
    hiddenGems: ['The Duke Mansion grounds', 'the Little Sugar Creek Greenway'],
    instaSpots: ['The Queens Road willow-oak canopy', 'Freedom Park'],
    weekend: 'Stroll the Queens Road canopy, picnic in Freedom Park, and browse nearby SouthPark.',
  },
  southpark: {
    dateNight: 'Dinner at Phillips Place',
    dogFriendly: ['Symphony Park'],
    instaSpots: ['Symphony Park'],
    weekend: 'Shop SouthPark and Phillips Place, then a summer concert at Symphony Park.',
  },
  ballantyne: {
    dogFriendly: ['The Bowl at Ballantyne greenway', 'Ballantyne District Park'],
    instaSpots: ['The Bowl at Ballantyne'],
    weekend: 'A round of golf, dinner at The Bowl, and a show at the amphitheater.',
  },
  university: {
    dogFriendly: ['Reedy Creek Nature Preserve'],
    hiddenGems: ['UNC Charlotte Botanical Gardens'],
    instaSpots: ['The UNC Charlotte Botanical Gardens'],
    weekend: 'The Botanical Gardens, a concert at PNC Music Pavilion, and Reedy Creek trails.',
  },
  elizabeth: {
    dateNight: 'Dinner at Carpe Diem',
    dogFriendly: ['Independence Park'],
    hiddenGems: ['Independence Park, Charlotte’s oldest park'],
    instaSpots: ['Independence Park', 'Elizabeth’s tree-lined bungalow streets'],
    weekend: 'Coffee on 7th Street, a walk through Independence Park, and dinner at Carpe Diem.',
  },
  'steele-creek': {
    dogFriendly: ['McDowell Nature Preserve'],
    instaSpots: ['Lake Wylie sunsets', 'the U.S. National Whitewater Center'],
    weekend: 'Paddle or zipline at the Whitewater Center, then a sunset over Lake Wylie.',
  },
  huntersville: {
    dogFriendly: ['Latta Nature Preserve'],
    instaSpots: ['Birkdale Village'],
    weekend: 'Shop and dine at Birkdale Village, then explore Latta Nature Preserve.',
  },
  cornelius: {
    dogFriendly: ['Jetton Park', 'Ramsey Creek Park'],
    instaSpots: ['Sunset over Lake Norman at Jetton Park'],
    weekend: 'A morning at Jetton Park, an afternoon on Lake Norman, and sunset from Ramsey Creek Park.',
  },
  davidson: {
    coffee: 'Summit Coffee',
    dateNight: 'Dinner at Kindred',
    dogFriendly: ['Fisher Farm Park', 'the Davidson greenway'],
    hiddenGems: ['Main Street Books', 'the Davidson College lawns'],
    instaSpots: ['Davidson’s historic Main Street', 'the Davidson College campus'],
    weekend: 'Coffee at Summit, browse Main Street Books, and dinner at Kindred.',
  },
  mooresville: {
    instaSpots: ['Historic Main Street', 'Lake Norman'],
    weekend: 'Tour a NASCAR race shop, lunch on Main Street, and an afternoon on Lake Norman.',
  },
  concord: {
    instaSpots: ['Historic Union Street', 'Charlotte Motor Speedway'],
    weekend: 'A race at Charlotte Motor Speedway, outlet shopping at Concord Mills, and dinner on Union Street.',
  },
  kannapolis: {
    instaSpots: ['Atrium Health Ballpark', 'the Gem Theatre marquee'],
    weekend: 'A Cannon Ballers game at Atrium Health Ballpark and a stroll through revitalized downtown.',
  },
  matthews: {
    dogFriendly: ['Squirrel Lake Park', 'Stumptown Park'],
    instaSpots: ['Historic downtown Matthews'],
    weekend: 'The Saturday farmers market, a play at Matthews Playhouse, and time in Stumptown Park.',
  },
  waxhaw: {
    instaSpots: ['Downtown Waxhaw', 'the historic railroad district'],
    weekend: 'Antique-hunt downtown, visit the Museum of the Waxhaws, and grab lunch on Main Street.',
  },
  pineville: {
    instaSpots: ['Historic Main Street Pineville'],
    weekend: 'Carolina Place shopping and a day at Carowinds nearby.',
  },
  gastonia: {
    dogFriendly: ['Crowders Mountain State Park', 'Rankin Lake Park'],
    instaSpots: ['Crowders Mountain summit views', 'downtown Gastonia'],
    weekend: 'Hike Crowders Mountain, catch a ballgame at CaroMont Health Park, and explore the Schiele Museum.',
  },
  belmont: {
    instaSpots: ['Historic downtown Belmont', 'the Daniel Stowe Botanical Garden'],
    weekend: 'Stroll historic Main Street, tour the Daniel Stowe Botanical Garden, and paddle at the Whitewater Center.',
  },

  // ---- Raleigh neighborhoods ----
  'downtown-raleigh': {
    hiddenGems: ['Videri Chocolate Factory in the Warehouse District'],
    instaSpots: ['Fayetteville Street and the State Capitol', 'Moore Square'],
    weekend: 'Tour the free state museums, lunch in the Warehouse District, and catch a show at Red Hat Amphitheater.',
  },
  'north-hills': {
    instaSpots: ['North Hills at night'],
    weekend: 'Shop and dine at North Hills, then a summer concert at Midtown Park.',
  },
  'five-points-raleigh': {
    instaSpots: ['The Rialto Theatre marquee', 'Hayes Barton’s 1920s homes'],
    weekend: 'Coffee in Five Points, a film at the historic Rialto, and a walk through Hayes Barton.',
  },
  'village-district': {
    instaSpots: ['The Pullen Park carousel'],
    weekend: 'Shop the Village District and picnic at nearby Pullen Park.',
  },
  oakwood: {
    hiddenGems: ['Historic Oakwood Cemetery'],
    instaSpots: ['Historic Oakwood’s Victorian homes'],
    weekend: 'Wander Oakwood’s Victorian streets and the historic cemetery, then walk to Person Street.',
  },
  'brier-creek': {
    weekend: 'A round at Brier Creek Country Club and shopping at Brier Creek Commons.',
  },

  // ---- Durham neighborhoods ----
  'downtown-durham': {
    hiddenGems: ['The American Tobacco Campus water tower'],
    instaSpots: ['The CCB Plaza bull', 'the American Tobacco Campus'],
    weekend: 'A Durham Bulls game, dinner downtown, and a show at DPAC.',
  },
  'trinity-park': {
    instaSpots: ['Duke’s East Campus quad'],
    weekend: 'A walk on Duke’s East Campus and brunch on Ninth Street.',
  },
  'old-west-durham': {
    weekend: 'Coffee, shopping, and dinner along Ninth Street.',
  },
  'hope-valley': {
    weekend: 'A round at Hope Valley Country Club and a drive through its historic streets.',
  },
  'forest-hills': {
    instaSpots: ['Forest Hills Park'],
    weekend: 'A picnic in Forest Hills Park and a short trip downtown.',
  },
  'south-durham': {
    weekend: 'Shopping at The Streets at Southpoint and a bike on the American Tobacco Trail.',
  },

  // ---- Asheville neighborhoods ----
  'downtown-asheville': {
    hiddenGems: ['The Grove Arcade'],
    instaSpots: ['Pack Square', 'downtown’s Art Deco architecture'],
    weekend: 'Gallery-hop, brewery-hop, and dinner in the heart of downtown.',
  },
  'west-asheville': {
    instaSpots: ['Haywood Road murals'],
    weekend: 'Coffee, breweries, and dinner along Haywood Road.',
  },
  montford: {
    hiddenGems: ['Riverside Cemetery'],
    instaSpots: ['Montford’s Victorian homes'],
    weekend: 'Stroll Montford’s historic streets and catch the Montford Park Players.',
  },
  'river-arts-district': {
    instaSpots: ['River Arts District studios and murals'],
    weekend: 'Tour the artist studios, walk the river greenway, and grab a RAD brewery.',
  },
  'biltmore-village': {
    instaSpots: ['The Cathedral of All Souls', 'Biltmore Village'],
    weekend: 'Tour the Biltmore Estate and shop Biltmore Village.',
  },
  'north-asheville': {
    instaSpots: ['The Omni Grove Park Inn'],
    weekend: 'Sunset drinks at the Grove Park Inn and a walk around Beaver Lake.',
  },
}
