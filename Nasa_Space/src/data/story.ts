export type ActId = 'I' | 'II' | 'III' | 'IV' | 'V';

export type Fact = {
  label: string;
  title: string;
  body: string;
  source: string;
};

export type Act = {
  id: ActId;
  title: string;
  subtitle: string;
  narrator: string;
  lines: string[];
  facts: Fact[];
  tone: string;
};

export const acts: Act[] = [
  {
    id: 'I',
    title: 'Why We Looked Up',
    subtitle: 'The call',
    narrator: 'The first machine was a question.',
    lines: [
      'Before we had names, we had wonder.',
      'A child looked at the Moon and asked what it was made of.',
      'Then we made instruments to look farther.',
      'We are the answer that learned how to travel.'
    ],
    facts: [
      { label: 'LOOK CLOSER', title: 'The Moon is a time capsule', body: 'The Moon has no thick atmosphere or global magnetic field to erase the marks of its past. Its surface preserves a long record of impacts and exploration.', source: 'https://science.nasa.gov/moon/' },
      { label: 'THE FIRST STEP', title: 'Apollo 11 landed in 1969', body: 'NASA’s Apollo 11 mission put the first people on the Moon. The crew also left scientific experiments and equipment on the surface.', source: 'https://www.nasa.gov/mission/apollo-11/' },
      { label: 'OUR THREAD', title: 'Questions become journeys', body: 'NASA missions are designed to study worlds beyond Earth. The objects they leave behind are part of that record of discovery.', source: 'https://science.nasa.gov/solar-system/' }
    ],
    tone: 'dawn'
  },
  {
    id: 'II',
    title: 'What We Left on the Moon',
    subtitle: 'A place for the weight',
    narrator: 'We were never trash. We were the price of coming home.',
    lines: [
      'To return with Moon rocks, the astronauts had to leave weight behind.',
      'A descent stage. A rover. Tools, cameras, flags.',
      'A mirror that still catches a laser from Earth.',
      'The Moon keeps these things exactly where we placed them.'
    ],
    facts: [
      { label: 'TAP THE ROVER', title: 'Three electric rovers drove on the Moon', body: 'Lunar Roving Vehicles were used on Apollo 15, Apollo 16, and Apollo 17. They helped astronauts travel farther from their lunar modules.', source: 'https://www.nasa.gov/history/alsj/a15/a15.html' },
      { label: 'TAP THE MIRROR', title: 'A reflection still travels home', body: 'Apollo astronauts placed laser retroreflectors on the Moon. Scientists still use them to measure the distance between Earth and the Moon.', source: 'https://science.nasa.gov/moon/lunar-laser-ranging/' },
      { label: 'TAP THE PLAQUE', title: 'A message for the future', body: 'Apollo 17 left a plaque on the Moon that reads: “We came in peace for all mankind.” It marks a human visit, not a claim of ownership.', source: 'https://www.nasa.gov/history/alsj/a17/a17.html' }
    ],
    tone: 'lunar'
  },
  {
    id: 'III',
    title: 'The Machines That Went Quiet',
    subtitle: 'Mars remembers',
    narrator: 'On Mars, silence arrived one day at a time.',
    lines: [
      'Spirit climbed until its wheels could not climb again.',
      'Opportunity waited through a dust storm and never answered.',
      'InSight listened for marsquakes until its solar panels gathered too much dust.',
      'A final signal is not a failure. It is the end of one long sentence.'
    ],
    facts: [
      { label: 'SPIRIT', title: 'A rover became a science station', body: 'Spirit explored Mars for more than six years. NASA ended the mission in 2011 after repeated attempts to regain contact.', source: 'https://science.nasa.gov/mission/mer-spirit/' },
      { label: 'OPPORTUNITY', title: '90 sols became 14 years', body: 'Opportunity landed in 2004 and worked for more than 14 years. A planet-wide dust storm ended communications with the rover in 2018.', source: 'https://science.nasa.gov/mission/mer-opportunity/' },
      { label: 'INSIGHT', title: 'Listening beneath the dust', body: 'InSight studied the deep interior of Mars. NASA ended the mission in December 2022 after dust on its solar panels reduced available power.', source: 'https://science.nasa.gov/mission/insight/' }
    ],
    tone: 'mars'
  },
  {
    id: 'IV',
    title: 'Not Forgotten',
    subtitle: 'The archive above us',
    narrator: 'From orbit, our tracks are still a kind of handwriting.',
    lines: [
      'The Lunar Reconnaissance Orbiter can see the shapes we left below.',
      'Tracks, hardware, and the paths of wheels remain in the dust.',
      'A quiet object can still teach us how materials change.',
      'Memory is not only what we carry. It is what the ground keeps.'
    ],
    facts: [
      { label: 'ZOOM IN', title: 'LRO photographs Apollo sites', body: 'NASA’s Lunar Reconnaissance Orbiter has photographed Apollo landing sites from lunar orbit, showing hardware and astronaut/rover tracks.', source: 'https://www.nasa.gov/mission_pages/LRO/news/apollo-sites.html' },
      { label: 'PROTECT THE RECORD', title: 'Historic sites need care', body: 'NASA has recommendations for protecting historic lunar landing sites from disturbance by future missions.', source: 'https://history.nasa.gov/alsj/alsj-Heritage.pdf' },
      { label: 'SCIENCE IN THE SILENCE', title: 'The surface is a laboratory', body: 'Long-lived instruments and exposed materials help researchers understand the Moon’s environment and plan safer future exploration.', source: 'https://science.nasa.gov/moon/' }
    ],
    tone: 'archive'
  },
  {
    id: 'V',
    title: 'What We Leave Next',
    subtitle: 'A promise',
    narrator: 'The next footprints are already becoming a story.',
    lines: [
      'A girl asks her grandfather why the machines stayed.',
      'He tells her that exploration is not only arriving.',
      'It is choosing how to leave a place after you have learned from it.',
      'She looks up. Then she chooses what to carry.'
    ],
    facts: [
      { label: 'CHOOSE CARE', title: 'Heritage is part of exploration', body: 'NASA’s Artemis missions are planned with attention to lunar science, technology, and the history of earlier landing sites.', source: 'https://www.nasa.gov/humans-in-space/artemis/' },
      { label: 'CHOOSE WONDER', title: 'Bring questions, not just answers', body: 'Science missions are built to make careful observations and share what they learn. Every mission adds another page to the record.', source: 'https://science.nasa.gov/solar-system/' },
      { label: 'CHOOSE A FUTURE', title: 'Leave a legacy', body: 'The objects left on other worlds remind us that responsible exploration includes planning for the people and missions that come next.', source: 'https://www.nasa.gov/space-sustainability/' }
    ],
    tone: 'gold'
  }
];
