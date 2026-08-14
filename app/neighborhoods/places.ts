// Hand-curated, verified local anchors per area — well-known, established places only.
// Rule: only include a place we're confident is real and correctly located. Omit a
// category rather than guess. These are landmarks/institutions, not a full directory.

export type Places = {
  eat?: string[]
  coffee?: string[]
  parks?: string[]
  shopping?: string[]
  entertainment?: string[]
  fitness?: string[]
}

export const PLACES: Record<string, Places> = {
  uptown: {
    eat: [
      'La Bonbonniere',
      'The French Quarter (The Alley at Latta Arcade, Brevard St.)',
      'Church & Union',
      'Sea Level',
      'Basil Thai',
      'Merchant & Trade',
      '7th Street Public Market',
    ],
    coffee: ['Not Just Coffee'],
    parks: ['Fourth Ward Park', 'Romare Bearden Park', 'First Ward Park'],
    shopping: ['Overstreet Mall', '7th Street Public Market', 'Uptown Farmers Market'],
    entertainment: [
      'Spectrum Center (concerts & Hornets games)',
      'Bank of America Stadium (Panthers & Charlotte FC games)',
      'Truist Field (Knights games)',
      'NASCAR Hall of Fame',
      'Discovery Place Science',
      'Harvey B. Gantt Center',
      'Belk Theater',
      'Mint Museum Uptown',
      'Bechtler Museum of Modern Art',
    ],
    fitness: ['Hustle House', 'Bucked Up Fitness'],
  },
  'south-end': {
    eat: [
      'Half Shell',
      'Para',
      'Yunta',
      'Dolce & Amaro Bakery',
      'Vicente Bakery',
      'Monday Night Brewing',
      'Wooden Robot Brewery',
      'The Suffolk Punch',
    ],
    coffee: ['Not Just Coffee (Atherton Mill)'],
    parks: ['Charlotte Rail Trail'],
    shopping: ['Atherton Mill', 'Charlotte Design District', 'Paddywax Candle Bar'],
    entertainment: [
      'Puttery',
      'Pins Mechanical Co.',
      'OROSOKO Sound Bar',
      'The Music Yard at South Bound',
      'Vinyl',
      'Canopy Cocktails',
      'Front Porch Sundays',
      'Charlotte Rail Trail public art',
      'Lynx Blue Line',
    ],
    fitness: ['Core 24 Gym', 'Solidcore', 'HOTWORX'],
  },
  loso: {
    eat: [
      'Yama Loso',
      'State of Confusion',
      "Waterman's Fish Bar",
      'OMB (Olde Mecklenburg Brewery)',
      "Romeo's Vegan Burgers",
      'Brewers at 4001 Yancey',
      'Protagonist',
    ],
    coffee: ['Burr & Berry Coffee'],
    entertainment: [
      'Rally Pickleball',
      'Queen Park Social',
      'The Platform',
      'Plunge House',
      'New Bern Blue Line station',
      'LoSo brewery district',
    ],
  },
  dilworth: {
    eat: [
      '300 East',
      'Dilworth Tasting Room',
      'Kid Cashew',
      'Inizio Pizza',
      'Yafo Kitchen',
      "Emmy Lou's",
      'Konnichiwa',
    ],
    coffee: ['Backyard Brew', 'Not Just Coffee', 'Vibe Cafe and Wine'],
    parks: ['Freedom Park', 'Latta Park', 'Little Sugar Creek Greenway'],
    shopping: [
      'Paper Skyscraper',
      'Vestique',
      'Southern Blossom florist',
      'The Metropolitan',
      'East Boulevard shops',
    ],
    entertainment: ['Leluia Hall', "Ed's Tavern", 'Festival in the Park (Freedom Park)'],
  },
  'myers-park': {
    eat: [
      'Napa on Providence',
      "Reid's Fine Foods",
      'Stagioni',
      'Laurel Market',
      'Pasta & Provisions',
    ],
    parks: ['Freedom Park', 'Little Sugar Creek Greenway'],
    shopping: ['Park Road Shopping Center', 'SouthPark (nearby)'],
    entertainment: ['Dot Dot Dot', 'Selwyn Avenue Pub', 'The Duke Mansion', 'Queens Road willow-oak canopy'],
    fitness: ['Pvolve Myers Park'],
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
    eat: ['Goodyear House', 'Cabo Fish Taco', 'Crepe Cellar', 'Haberdish'],
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
    eat: ["Bentley's", 'Steak 48', 'Legion Brewing', 'The Suffolk Punch'],
    parks: ['Park Road Park', 'Symphony Park'],
    shopping: ['SouthPark Mall', 'Phillips Place'],
    entertainment: ['Charlotte Symphony Summer Pops (Symphony Park)'],
    fitness: ['Spavia Day Spa', 'MADabolic', 'Motion Fitness'],
  },
  ballantyne: {
    eat: ['OMB (Olde Mecklenburg Brewery)'],
    coffee: ["Frieda's", "Amélie's French Bakery"],
    parks: ['The Bowl at Ballantyne', 'Ballantyne District Park'],
    shopping: ['Ballantyne Village', 'Blakeney', 'Stonecrest at Piper Glen', 'Carolina Place Mall'],
    entertainment: [
      'Fly Kid Fly',
      'Ballantyne Backyard',
      'The Ballantyne (hotel)',
      "Dave & Buster's (Pineville)",
      'Dish It Out',
      'Chuck E. Cheese',
      'Regal Stonecrest at Piper Glen',
      'Game Show Battle Rooms',
      'The Bowl at Ballantyne amphitheater',
      'Ballantyne Country Club',
    ],
  },
  university: {
    eat: [
      'Ma Luz',
      "Boardwalk Billy's",
      "Harold's Chicken & Ice Bar",
      'Iron Dish Korean BBQ',
      "Sol'Delish",
    ],
    coffee: ['Vavela Cafe'],
    parks: ['UNC Charlotte Botanical Gardens', 'Reedy Creek Nature Center & Preserve'],
    shopping: ['Belgate Shopping Center', 'IKEA', "Plato's Closet", 'University Place', 'Concord Mills (nearby)'],
    entertainment: ['The Boardwalk', 'Topgolf', 'Fumee', 'UNC Charlotte', 'PNC Music Pavilion'],
    fitness: ['Crunch Fitness'],
  },
  elizabeth: {
    eat: [
      'Caswell Station',
      'Rosemont',
      'Cajun Queen',
      'Puerta',
      'The Fig Tree',
      'Menya Daruma',
      'Custom Shop',
      'Carpe Diem (7th Street)',
    ],
    coffee: ["People's Market"],
    parks: ['Elizabeth Park', 'Independence Park', 'Little Sugar Creek Greenway'],
    entertainment: ['The Crunkleton', 'Catalina', 'Flight', 'The Spoke Easy', 'Independence Park (Charlotte’s oldest park)'],
  },
  cotswold: {
    eat: ["Eddie's Place", 'Leroy Fox', 'Common Market', 'Mezeh'],
    shopping: ['Cotswold Village Shops', 'Harris Teeter', 'Marshalls', 'Ulta', 'Cost Plus World Market'],
    fitness: ['Y2 Yoga', 'F45 Training'],
  },
  'steele-creek': {
    eat: ["Portofino's"],
    parks: ['McDowell Nature Preserve', 'Lake Wylie'],
    shopping: ['Ayrsley Town Center', 'RiverGate Shopping Center'],
    entertainment: ['Carowinds', 'U.S. National Whitewater Center (nearby)'],
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
