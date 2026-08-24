import type { HubQ } from './HubQuiz'

// Per-hub neighborhood-match quizzes. Answers point to that hub's neighborhood slugs.
export const HUB_QUIZZES: Record<string, HubQ[]> = {
  raleigh: [
    {
      q: 'What kind of setting fits you best?',
      a: [
        { t: 'Urban and walkable, in the middle of it all', s: ['downtown-raleigh', 'north-hills'] },
        { t: 'Historic and tree-lined with character', s: ['oakwood', 'five-points-raleigh'] },
        { t: 'Newer and convenient', s: ['brier-creek', 'north-hills'] },
      ],
    },
    {
      q: "What's the priority for daily life?",
      a: [
        { t: 'Nightlife, dining, and events out the door', s: ['downtown-raleigh', 'north-hills'] },
        { t: 'Quiet streets, big trees, and charm', s: ['five-points-raleigh', 'oakwood', 'village-district'] },
        { t: 'Shopping and modern convenience', s: ['north-hills', 'brier-creek', 'village-district'] },
      ],
    },
    {
      q: 'Which home speaks to you?',
      a: [
        { t: 'A historic home with real character', s: ['oakwood', 'five-points-raleigh'] },
        { t: 'Modern and low-maintenance', s: ['downtown-raleigh', 'brier-creek', 'north-hills'] },
        { t: 'A classic home in an established area', s: ['village-district', 'five-points-raleigh'] },
      ],
    },
    {
      q: 'Where do you want to be?',
      a: [
        { t: 'Right in the center of Raleigh', s: ['downtown-raleigh', 'north-hills'] },
        { t: 'Quiet but still close-in', s: ['five-points-raleigh', 'oakwood', 'village-district'] },
        { t: 'Near the airport and Research Triangle Park', s: ['brier-creek'] },
      ],
    },
  ],
  durham: [
    {
      q: 'What kind of setting fits you best?',
      a: [
        { t: 'Urban and walkable downtown', s: ['downtown-durham', 'old-west-durham'] },
        { t: 'Historic and tree-lined', s: ['trinity-park', 'forest-hills', 'hope-valley'] },
        { t: 'Newer and convenient', s: ['south-durham'] },
      ],
    },
    {
      q: "What's the priority for daily life?",
      a: [
        { t: 'Food, arts, and nightlife out the door', s: ['downtown-durham', 'old-west-durham'] },
        { t: 'Quiet historic charm', s: ['forest-hills', 'hope-valley', 'trinity-park'] },
        { t: 'Shopping and everyday convenience', s: ['south-durham'] },
      ],
    },
    {
      q: 'Which home speaks to you?',
      a: [
        { t: 'A historic home with character', s: ['trinity-park', 'forest-hills', 'hope-valley'] },
        { t: 'Modern and low-maintenance', s: ['downtown-durham', 'south-durham'] },
        { t: 'An established country-club home', s: ['hope-valley'] },
      ],
    },
    {
      q: 'Where do you want to be?',
      a: [
        { t: 'In the middle of it all', s: ['downtown-durham', 'old-west-durham'] },
        { t: 'Close to Duke', s: ['trinity-park', 'old-west-durham'] },
        { t: 'Near RTP and Southpoint', s: ['south-durham', 'hope-valley'] },
      ],
    },
  ],
  asheville: [
    {
      q: 'What kind of setting fits you best?',
      a: [
        { t: 'Downtown energy and walkability', s: ['downtown-asheville', 'river-arts-district'] },
        { t: 'Hip and creative', s: ['west-asheville', 'river-arts-district'] },
        { t: 'Historic and leafy', s: ['montford', 'north-asheville'] },
      ],
    },
    {
      q: "What's the priority for daily life?",
      a: [
        { t: 'Food, beer, and art', s: ['downtown-asheville', 'west-asheville', 'river-arts-district'] },
        { t: 'Historic homes and quiet', s: ['montford', 'north-asheville'] },
        { t: 'Village charm and shopping', s: ['biltmore-village', 'north-asheville'] },
      ],
    },
    {
      q: 'Which home speaks to you?',
      a: [
        { t: 'A historic home with character', s: ['montford', 'north-asheville'] },
        { t: 'Creative and eclectic', s: ['west-asheville', 'river-arts-district'] },
        { t: 'Upscale and established', s: ['north-asheville', 'biltmore-village'] },
      ],
    },
    {
      q: "What's your ideal vibe?",
      a: [
        { t: 'In the thick of downtown', s: ['downtown-asheville'] },
        { t: 'Artsy and riverside', s: ['river-arts-district', 'west-asheville'] },
        { t: 'Refined and scenic', s: ['north-asheville', 'biltmore-village', 'montford'] },
      ],
    },
  ],
}

// Per-region "which town fits you" quizzes. Answers point to town/area slugs in that region.
export const REGION_QUIZZES: Record<string, HubQ[]> = {
  triangle: [
    {
      q: "What kind of place fits you best?",
      a: [
        { t: "Big-city energy and a lively downtown", s: ['raleigh', 'durham'] },
        { t: "College-town culture and character", s: ['chapel-hill', 'durham'] },
        { t: "Polished, family-friendly suburbs", s: ['cary', 'apex'] },
        { t: "A growing small town with room to breathe", s: ['wake-forest', 'apex'] },
      ],
    },
    {
      q: "What matters most day to day?",
      a: [
        { t: "Restaurants, nightlife, and the arts", s: ['durham', 'raleigh', 'chapel-hill'] },
        { t: "Top-rated schools and amenities", s: ['cary', 'apex', 'wake-forest'] },
        { t: "An easy commute to Research Triangle Park", s: ['cary', 'durham', 'apex'] },
      ],
    },
    {
      q: "Your ideal home?",
      a: [
        { t: "Historic and walkable", s: ['durham', 'chapel-hill', 'raleigh'] },
        { t: "New construction in a planned community", s: ['cary', 'apex', 'wake-forest'] },
        { t: "Established and central", s: ['raleigh', 'cary'] },
      ],
    },
  ],
  triad: [
    {
      q: "What draws you to the Triad?",
      a: [
        { t: "Arts, food, and a walkable downtown", s: ['winston-salem', 'greensboro'] },
        { t: "A bigger city with parks and universities", s: ['greensboro'] },
        { t: "A smaller-town feel and strong value", s: ['kernersville', 'high-point'] },
      ],
    },
    {
      q: "What matters most?",
      a: [
        { t: "Culture and dining", s: ['winston-salem', 'greensboro'] },
        { t: "Affordability and space", s: ['high-point', 'kernersville'] },
        { t: "A central spot between the cities", s: ['kernersville', 'high-point'] },
      ],
    },
    {
      q: "Your ideal home?",
      a: [
        { t: "Historic character", s: ['winston-salem', 'greensboro'] },
        { t: "Newer and low-maintenance", s: ['kernersville', 'high-point'] },
      ],
    },
  ],
  western: [
    {
      q: "What's your mountain lifestyle?",
      a: [
        { t: "City arts, food, and breweries", s: ['asheville'] },
        { t: "A charming small mountain town", s: ['hendersonville', 'waynesville', 'brevard'] },
        { t: "High-country and college-town energy", s: ['boone', 'blowing-rock'] },
        { t: "Foothills value with more space", s: ['hickory', 'lenoir'] },
      ],
    },
    {
      q: "What are you here for?",
      a: [
        { t: "Culture, dining, and nightlife", s: ['asheville'] },
        { t: "Outdoor recreation and scenery", s: ['boone', 'blowing-rock', 'brevard', 'waynesville'] },
        { t: "Everyday convenience and affordability", s: ['hickory', 'lenoir', 'hendersonville'] },
      ],
    },
    {
      q: "Your ideal setting?",
      a: [
        { t: "A walkable downtown", s: ['asheville', 'hendersonville', 'brevard'] },
        { t: "A mountain retreat", s: ['blowing-rock', 'boone'] },
        { t: "An established town with room to grow", s: ['hickory', 'lenoir', 'waynesville'] },
      ],
    },
  ],
  wilmington: [
    {
      q: "What's your coastal vibe?",
      a: [
        { t: "A historic riverfront city", s: ['wilmington'] },
        { t: "Oceanfront beach life", s: ['wrightsville-beach', 'carolina-beach'] },
        { t: "A quiet harbor town", s: ['southport'] },
        { t: "Newer and affordable, just off the coast", s: ['leland', 'hampstead'] },
      ],
    },
    {
      q: "What matters most?",
      a: [
        { t: "Walking to the beach", s: ['wrightsville-beach', 'carolina-beach'] },
        { t: "Restaurants, history, and culture", s: ['wilmington', 'southport'] },
        { t: "Value and space", s: ['leland', 'hampstead'] },
      ],
    },
    {
      q: "Your ideal home?",
      a: [
        { t: "In the middle of it all", s: ['wilmington'] },
        { t: "Steps from the sand", s: ['wrightsville-beach', 'carolina-beach'] },
        { t: "Small-town charm", s: ['southport', 'hampstead', 'leland'] },
      ],
    },
  ],
  eastern: [
    {
      q: "What fits you in Eastern NC?",
      a: [
        { t: "A university city with energy", s: ['greenville'] },
        { t: "Historic riverfront charm", s: ['new-bern', 'kinston'] },
        { t: "Military-community convenience", s: ['jacksonville', 'goldsboro'] },
        { t: "Small-town roots and value", s: ['wilson', 'kinston'] },
      ],
    },
    {
      q: "What matters most?",
      a: [
        { t: "Dining, culture, and a walkable downtown", s: ['new-bern', 'greenville', 'kinston'] },
        { t: "Affordability and space", s: ['wilson', 'goldsboro', 'jacksonville'] },
        { t: "Being close to base", s: ['jacksonville', 'goldsboro'] },
      ],
    },
    {
      q: "Your ideal home?",
      a: [
        { t: "A historic district", s: ['new-bern', 'greenville'] },
        { t: "Newer and convenient", s: ['jacksonville', 'wilson'] },
        { t: "Established and affordable", s: ['goldsboro', 'kinston'] },
      ],
    },
  ],
  sandhills: [
    {
      q: "What draws you to the Sandhills?",
      a: [
        { t: "Golf and resort living", s: ['pinehurst', 'southern-pines'] },
        { t: "A charming, walkable small town", s: ['southern-pines', 'aberdeen'] },
        { t: "City amenities and convenience", s: ['fayetteville'] },
        { t: "Value close to Fort Liberty", s: ['hope-mills', 'aberdeen'] },
      ],
    },
    {
      q: "What matters most?",
      a: [
        { t: "Golf, dining, and leisure", s: ['pinehurst', 'southern-pines'] },
        { t: "Affordability and space", s: ['hope-mills', 'aberdeen', 'fayetteville'] },
        { t: "Close to base and shopping", s: ['fayetteville', 'hope-mills'] },
      ],
    },
    {
      q: "Your ideal home?",
      a: [
        { t: "A resort community", s: ['pinehurst'] },
        { t: "A historic small town", s: ['southern-pines', 'aberdeen'] },
        { t: "Newer and affordable", s: ['hope-mills', 'fayetteville'] },
      ],
    },
  ],
  'outer-banks': [
    {
      q: "What's your Outer Banks?",
      a: [
        { t: "Upscale, quiet northern beaches", s: ['corolla', 'duck'] },
        { t: "Classic beach-town living", s: ['kitty-hawk', 'kill-devil-hills', 'nags-head'] },
        { t: "Remote, wild, and uncrowded", s: ['hatteras'] },
        { t: "Mainland value near the water", s: ['elizabeth-city'] },
      ],
    },
    {
      q: "What matters most?",
      a: [
        { t: "Seclusion and natural beauty", s: ['corolla', 'hatteras', 'duck'] },
        { t: "Restaurants, shops, and things to do", s: ['nags-head', 'kill-devil-hills', 'kitty-hawk'] },
        { t: "A real-town feel and affordability", s: ['elizabeth-city'] },
      ],
    },
    {
      q: "Your ideal home?",
      a: [
        { t: "An oceanfront escape", s: ['corolla', 'duck', 'hatteras'] },
        { t: "An established beach community", s: ['kill-devil-hills', 'nags-head', 'kitty-hawk'] },
        { t: "In-town and year-round", s: ['elizabeth-city'] },
      ],
    },
  ],
}
