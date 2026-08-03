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
