// Hand-curated, verified local anchors per area — well-known, established places only.
// Rule: only include a place we're confident is real and correctly located. Omit a
// category rather than guess. These are landmarks/institutions, not a full directory.

export type Places = {
  eat?: string[]
  coffee?: string[]
  parks?: string[]
  shopping?: string[]
  entertainment?: string[]
}

export const PLACES: Record<string, Places> = {
  uptown: {
    eat: ['7th Street Public Market'],
    coffee: ['Not Just Coffee'],
    parks: ['Romare Bearden Park', 'First Ward Park'],
    shopping: ['Overstreet Mall', '7th Street Public Market'],
    entertainment: [
      'Spectrum Center (Hornets)',
      'Bank of America Stadium (Panthers)',
      'Truist Field (Knights)',
      'Blumenthal Belk Theater',
      'Discovery Place Science',
      'Mint Museum Uptown',
      'Bechtler Museum of Modern Art',
      'Harvey B. Gantt Center',
    ],
  },
  'south-end': {
    eat: ['Wooden Robot Brewery', 'The Suffolk Punch'],
    coffee: ['Not Just Coffee (Atherton Mill)'],
    parks: ['Charlotte Rail Trail'],
    shopping: ['Atherton Mill', 'Charlotte Design District'],
    entertainment: ['Charlotte Rail Trail public art', 'Lynx Blue Line'],
  },
  loso: {
    entertainment: ['New Bern Blue Line station', 'LoSo brewery district'],
  },
  dilworth: {
    parks: ['Freedom Park', 'Latta Park', 'Little Sugar Creek Greenway'],
    shopping: ['The Metropolitan', 'East Boulevard shops'],
    entertainment: ['Festival in the Park (Freedom Park)'],
  },
  'myers-park': {
    parks: ['Freedom Park', 'Little Sugar Creek Greenway'],
    shopping: ['SouthPark (nearby)'],
    entertainment: ['Queens Road willow-oak canopy'],
  },
  midtown: {
    eat: ["Mama Ricotta's · a beloved Charlotte Italian institution", "Dressler's · upscale steaks and seafood", 'Pizzeria Omaggio · wood-fired Neapolitan pizza', 'Lost World Brewing · neighborhood brewery and taproom'],
    parks: ['Little Sugar Creek Greenway · the scenic urban trail with the fountains', 'Midtown Park · pickleball courts and green space'],
    shopping: ["The Metropolitan · Target, Trader Joe's, and Marshalls"],
  },
  'plaza-midwood': {
    eat: ['Supperland · Southern dining in a restored church', 'Uchi · acclaimed upscale sushi', 'Soul Gastrolounge · tapas, sushi, and rooftop energy', 'Prosecceria · Italian small plates and prosecco', 'Papi Ricko · Latin American eats', 'Dish · Southern comfort classics', "Zada Jane's · neighborhood brunch"],
    coffee: ['Giddy Goat Coffee · cozy neighborhood coffeehouse', 'Central Coffee Co.'],
    parks: ['Veterans Park'],
    shopping: ['2nd Street thrift store · vintage and thrift finds', 'Central Avenue boutiques'],
    entertainment: ['Resident Culture Brewing', "Workman's Friend · Irish pub", 'Snug Harbor · dive-y live music', 'The Common Market · part deli, part bar'],
  },
  noda: {
    eat: ['Cabo Fish Taco', 'Crepe Cellar', 'Haberdish'],
    coffee: ['Amélie’s French Bakery', 'Smelly Cat Coffeehouse'],
    shopping: ['36th Street galleries & shops'],
    entertainment: [
      'Neighborhood Theatre',
      'The Evening Muse',
      'NoDa Brewing Company',
      'First Friday gallery crawl',
    ],
  },
  southpark: {
    shopping: ['SouthPark Mall', 'Phillips Place'],
    parks: ['Symphony Park'],
    entertainment: ['Charlotte Symphony Summer Pops (Symphony Park)'],
  },
  ballantyne: {
    parks: ['The Bowl at Ballantyne', 'Ballantyne District Park'],
    shopping: ['Ballantyne Village', 'Blakeney', 'Stonecrest at Piper Glen'],
    entertainment: ['The Bowl at Ballantyne amphitheater', 'Ballantyne Country Club'],
  },
  university: {
    parks: ['UNC Charlotte Botanical Gardens', 'Reedy Creek Nature Center & Preserve'],
    shopping: ['University Place', 'Concord Mills (nearby)'],
    entertainment: ['UNC Charlotte', 'PNC Music Pavilion'],
  },
  elizabeth: {
    eat: ['Carpe Diem (7th Street)'],
    parks: ['Independence Park', 'Little Sugar Creek Greenway'],
    entertainment: ['Independence Park (Charlotte’s oldest park)'],
  },
  cotswold: {
    shopping: ['Cotswold Village Shops'],
  },
  'steele-creek': {
    parks: ['McDowell Nature Preserve', 'Lake Wylie'],
    shopping: ['RiverGate shopping center'],
    entertainment: ['U.S. National Whitewater Center (nearby)', 'Carowinds (nearby)'],
  },
  huntersville: {
    parks: ['Latta Nature Preserve', 'Rural Hill'],
    shopping: ['Birkdale Village'],
    entertainment: ['Birkdale Village events'],
  },
  cornelius: {
    parks: ['Jetton Park', 'Ramsey Creek Park'],
    entertainment: ['Cornelius Arts Center', 'Lake Norman'],
  },
  davidson: {
    eat: ['Kindred'],
    coffee: ['Summit Coffee'],
    parks: ['Fisher Farm Park', 'Davidson greenway'],
    shopping: ['Main Street Books'],
    entertainment: ['Davidson College'],
  },
  mooresville: {
    parks: ['Lake Norman'],
    shopping: ['Historic Main Street Mooresville'],
    entertainment: ['Memory Lane Motorsports Museum', 'NASCAR team race shops'],
  },
  concord: {
    parks: ['Frank Liske Park'],
    shopping: ['Concord Mills', 'Historic Union Street'],
    entertainment: ['Charlotte Motor Speedway', 'Great Wolf Lodge'],
  },
  kannapolis: {
    parks: ['Village Park'],
    shopping: ['Downtown West Avenue'],
    entertainment: [
      'Atrium Health Ballpark (Cannon Ballers)',
      'Gem Theatre',
      'North Carolina Research Campus',
    ],
  },
  harrisburg: {
    parks: ['Harrisburg Park'],
    entertainment: ['Charlotte Motor Speedway (nearby)'],
  },
  matthews: {
    parks: ['Stumptown Park', 'Squirrel Lake Park'],
    shopping: ['Matthews Community Farmers Market', 'Downtown Matthews shops'],
    entertainment: ['Matthews Playhouse of the Performing Arts'],
  },
  'mint-hill': {
    parks: ['Mint Hill Veterans Memorial Park'],
  },
  pineville: {
    shopping: ['Carolina Place Mall', 'Downtown Main Street'],
    entertainment: ['Carowinds (nearby)'],
  },
  waxhaw: {
    shopping: ['Downtown Waxhaw antique district'],
    entertainment: ['Museum of the Waxhaws'],
  },
  weddington: {
    shopping: ['Weddington Corners'],
  },
  marvin: {
    parks: ['Marvin Efird Park'],
  },
  'indian-trail': {
    parks: ['Crossing Paths Park', 'Chestnut Square Park'],
    shopping: ['Sun Valley Commons'],
  },
  gastonia: {
    parks: ['Crowders Mountain State Park', 'Rankin Lake Park', 'Daniel Stowe Botanical Garden (nearby)'],
    shopping: ['Eastridge Mall', 'Downtown Franklin corridor'],
    entertainment: [
      'CaroMont Health Park (baseball)',
      'Schiele Museum of Natural History',
      'Historic Loray Mill',
    ],
  },
}
