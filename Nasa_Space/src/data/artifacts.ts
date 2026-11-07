export type Destination = 'Moon' | 'Mars';
export type ArtifactStatus = 'Operational' | 'Inactive' | 'Mission completed' | 'Deliberately discarded' | 'Communication lost' | 'Status uncertain';
export type CoordinatePrecision = 'Verified' | 'Approximate' | 'Mission site';

export type Artifact = {
  id: string;
  name: string;
  mission: string;
  destination: Destination;
  category: string;
  launchDate: string;
  landingDate: string;
  status: ArtifactStatus;
  reason: string;
  purpose: string;
  engineering: string;
  science: string;
  location: string;
  latitude?: number;
  longitude?: number;
  coordinatePrecision: CoordinatePrecision;
  image: string;
  imageAlt: string;
  timeline: { date: string; title: string; description: string }[];
  references: { label: string; url: string }[];
};

const nasaImage = (id: string) => `https://images-assets.nasa.gov/image/${id}/${id}~large.jpg`;

export const artifacts: Artifact[] = [
  {
    id: 'apollo-11-descent-stage',
    name: 'Apollo 11 descent stage',
    mission: 'Apollo 11',
    destination: 'Moon',
    category: 'Landing hardware',
    launchDate: '16 July 1969',
    landingDate: '20 July 1969',
    status: 'Deliberately discarded',
    reason: 'The descent stage was used as the launch platform for the ascent stage and remained at Tranquility Base.',
    purpose: 'To carry astronauts, supplies and the ascent stage safely to the lunar surface.',
    engineering: 'A four-legged aluminum landing platform held the descent engine, propellant tanks, landing radar and scientific equipment.',
    science: 'Its position helps preserve the context of humanity’s first crewed lunar landing and provides a reference point for later orbital imaging.',
    location: 'Tranquility Base, Mare Tranquillitatis',
    latitude: 0.6741,
    longitude: 23.4729,
    coordinatePrecision: 'Verified',
    image: nasaImage('AS11-40-5868'),
    imageAlt: 'Apollo 11 lunar module on the Moon',
    timeline: [
      { date: '16 Jul 1969', title: 'Launch', description: 'Saturn V launches Apollo 11 from Kennedy Space Center.' },
      { date: '20 Jul 1969', title: 'Landing', description: 'The lunar module lands at Tranquility Base.' },
      { date: '21 Jul 1969', title: 'Ascent', description: 'The ascent stage leaves the descent stage on the surface.' }
    ],
    references: [
      { label: 'NASA Apollo 11', url: 'https://www.nasa.gov/mission/apollo-11/' },
      { label: 'NASA LRO Apollo sites', url: 'https://science.nasa.gov/mission/lro/' }
    ]
  },
  {
    id: 'apollo-15-lrv',
    name: 'Apollo 15 Lunar Roving Vehicle',
    mission: 'Apollo 15',
    destination: 'Moon',
    category: 'Surface vehicle',
    launchDate: '26 July 1971',
    landingDate: '30 July 1971',
    status: 'Mission completed',
    reason: 'The battery-powered rover was not designed to return with the crew and remains near Hadley–Apennine.',
    purpose: 'To extend astronaut traverses and carry tools, cameras and lunar samples across rough terrain.',
    engineering: 'The foldable, four-wheel-drive vehicle used wire-mesh wheels, two independent steering systems and a navigation display.',
    science: 'Apollo 15 crews travelled farther from the lunar module and documented geology around Hadley Rille and the Apennine mountains.',
    location: 'Hadley–Apennine region',
    latitude: 26.1322,
    longitude: 3.6339,
    coordinatePrecision: 'Verified',
    image: nasaImage('AS15-88-11866'),
    imageAlt: 'Apollo 15 lunar rover on the lunar surface',
    timeline: [
      { date: '26 Jul 1971', title: 'Launch', description: 'Apollo 15 begins the first J mission focused on extended lunar science.' },
      { date: '31 Jul 1971', title: 'First drive', description: 'The rover carries the crew across the Hadley–Apennine landing site.' },
      { date: '2 Aug 1971', title: 'Parked', description: 'The rover is left behind as the crew prepares to depart.' }
    ],
    references: [
      { label: 'NASA Apollo Lunar Surface Journal', url: 'https://www.nasa.gov/history/alsj/a15/a15.html' },
      { label: 'NASA Apollo 15 overview', url: 'https://www.nasa.gov/mission/apollo-15/' }
    ]
  },
  {
    id: 'apollo-17-lrv',
    name: 'Apollo 17 Lunar Roving Vehicle',
    mission: 'Apollo 17',
    destination: 'Moon',
    category: 'Surface vehicle',
    launchDate: '7 December 1972',
    landingDate: '11 December 1972',
    status: 'Mission completed',
    reason: 'The final Apollo rover was left at Taurus–Littrow after carrying the crew and samples across the valley.',
    purpose: 'To support the longest and most geologically diverse Apollo surface expedition.',
    engineering: 'A lightweight electric chassis carried two astronauts, tools, a television camera and the Lunar Neutron Probe Experiment.',
    science: 'Apollo 17 returned an extensive collection of samples, including the orange soil that revealed volcanic history.',
    location: 'Taurus–Littrow valley',
    latitude: 20.1653,
    longitude: 30.7658,
    coordinatePrecision: 'Verified',
    image: nasaImage('AS17-137-20979'),
    imageAlt: 'Apollo 17 lunar rover near the lunar module',
    timeline: [
      { date: '11 Dec 1972', title: 'Landing', description: 'Challenger lands in the Taurus–Littrow valley.' },
      { date: '12 Dec 1972', title: 'Exploration', description: 'The rover carries the crew toward the South Massif.' },
      { date: '14 Dec 1972', title: 'Last drive', description: 'The rover is parked for the final crewed lunar departure.' }
    ],
    references: [
      { label: 'NASA Apollo 17', url: 'https://www.nasa.gov/mission/apollo-17/' },
      { label: 'Apollo Lunar Surface Journal', url: 'https://www.nasa.gov/history/alsj/a17/a17.html' }
    ]
  },
  {
    id: 'alsep',
    name: 'Apollo Lunar Surface Experiments Package',
    mission: 'Apollo 12, 14, 15, 16 & 17',
    destination: 'Moon',
    category: 'Science instrument',
    launchDate: '14 November 1969',
    landingDate: '19 November 1969',
    status: 'Mission completed',
    reason: 'The experiments were deployed as long-duration observatories and were switched off in 1977.',
    purpose: 'To make continuous measurements of the lunar interior, surface and environment after astronauts left.',
    engineering: 'The packages combined radioisotope-powered instruments with a central station that transmitted data to Earth.',
    science: 'ALSEP recorded seismic activity, heat flow, charged particles and the Moon’s interaction with the solar wind.',
    location: 'Multiple Apollo landing sites',
    latitude: 3.012,
    longitude: -23.421,
    coordinatePrecision: 'Mission site',
    image: nasaImage('AS12-47-6989'),
    imageAlt: 'Apollo astronauts deploying lunar experiments',
    timeline: [
      { date: '1969–1972', title: 'Deployment', description: 'Experiment packages are installed across five Apollo sites.' },
      { date: '1976', title: 'Long record', description: 'The instruments continue returning lunar environmental data.' },
      { date: '30 Sep 1977', title: 'Shutdown', description: 'ALSEP transmissions end because of budget and operational constraints.' }
    ],
    references: [
      { label: 'NASA Apollo science experiments', url: 'https://science.nasa.gov/moon/' }
    ]
  },
  {
    id: 'surveyor-3',
    name: 'Surveyor 3',
    mission: 'Surveyor 3',
    destination: 'Moon',
    category: 'Lander',
    launchDate: '17 April 1967',
    landingDate: '20 April 1967',
    status: 'Mission completed',
    reason: 'The robotic lander completed its planned surface operations and remains in Oceanus Procellarum.',
    purpose: 'To test lunar soil properties and demonstrate soft-landing technology before Apollo.',
    engineering: 'A three-legged lander used a television camera, a soil mechanics scoop and vernier engines for its descent.',
    science: 'Surveyor 3 helped establish that a crewed spacecraft would not sink into a deep layer of lunar dust.',
    location: 'Oceanus Procellarum',
    latitude: -3.0162,
    longitude: -23.4193,
    coordinatePrecision: 'Verified',
    image: nasaImage('AS12-48-7133'),
    imageAlt: 'Surveyor 3 spacecraft on the Moon',
    timeline: [
      { date: '20 Apr 1967', title: 'Landing', description: 'Surveyor 3 touches down after bouncing twice.' },
      { date: '1967', title: 'Soil tests', description: 'Its scoop investigates the mechanical properties of the surface.' },
      { date: '1969', title: 'Visited', description: 'Apollo 12 astronauts photograph and collect parts of the lander.' }
    ],
    references: [
      { label: 'NASA Surveyor program', url: 'https://science.nasa.gov/mission/surveyor-3/' }
    ]
  },
  {
    id: 'lunar-retroreflectors',
    name: 'Lunar laser retroreflectors',
    mission: 'Apollo 11, 14 & 15 / Lunokhod',
    destination: 'Moon',
    category: 'Science instrument',
    launchDate: '16 July 1969',
    landingDate: '20 July 1969',
    status: 'Operational',
    reason: 'The passive arrays were designed to remain useful long after their host missions ended.',
    purpose: 'To reflect laser pulses back to Earth for precise Earth–Moon distance measurements.',
    engineering: 'Arrays of corner-cube prisms return incoming light toward its source without needing power or moving parts.',
    science: 'Laser ranging reveals the Moon’s gradual recession, interior motion and details of its orbit and libration.',
    location: 'Apollo landing sites',
    latitude: 0.674,
    longitude: 23.473,
    coordinatePrecision: 'Mission site',
    image: nasaImage('AS11-40-5921'),
    imageAlt: 'Apollo 11 astronaut with lunar equipment',
    timeline: [
      { date: '20 Jul 1969', title: 'First array', description: 'Apollo 11 astronauts deploy the first lunar retroreflector.' },
      { date: '1971', title: 'More stations', description: 'Apollo 14 and Apollo 15 add larger arrays at new sites.' },
      { date: 'Today', title: 'Still measured', description: 'Observatories continue using the arrays for lunar laser ranging.' }
    ],
    references: [
      { label: 'NASA Lunar laser ranging', url: 'https://science.nasa.gov/moon/lunar-laser-ranging/' }
    ]
  },
  {
    id: 'sojourner',
    name: 'Sojourner rover',
    mission: 'Mars Pathfinder',
    destination: 'Mars',
    category: 'Surface vehicle',
    launchDate: '4 December 1996',
    landingDate: '4 July 1997',
    status: 'Communication lost',
    reason: 'The technology demonstrator stopped communicating after Pathfinder’s lander fell silent.',
    purpose: 'To demonstrate low-cost rover mobility and analyze rocks and soil around Ares Vallis.',
    engineering: 'A six-wheeled rocker-bogie rover used solar power, autonomous hazard avoidance and an Alpha Proton X-ray Spectrometer.',
    science: 'Sojourner proved that a small rover could explore beyond its landing platform and perform surface chemistry.',
    location: 'Ares Vallis, Chryse Planitia',
    latitude: 19.13,
    longitude: 33.22,
    coordinatePrecision: 'Verified',
    image: nasaImage('PIA01120'),
    imageAlt: 'Sojourner rover on Mars',
    timeline: [
      { date: '4 Jul 1997', title: 'Landing', description: 'Pathfinder lands using airbags.' },
      { date: '5 Jul 1997', title: 'First drive', description: 'Sojourner rolls down the lander ramp.' },
      { date: '27 Sep 1997', title: 'Last signal', description: 'Contact with Pathfinder and Sojourner is lost.' }
    ],
    references: [
      { label: 'NASA Mars Pathfinder', url: 'https://science.nasa.gov/mission/mars-pathfinder/' }
    ]
  },
  {
    id: 'spirit',
    name: 'Spirit rover',
    mission: 'Mars Exploration Rover A',
    destination: 'Mars',
    category: 'Surface vehicle',
    launchDate: '10 June 2003',
    landingDate: '4 January 2004',
    status: 'Inactive',
    reason: 'Spirit became embedded in soft soil and later lost power during the Martian winter.',
    purpose: 'To search for evidence that ancient Mars was once wetter and warmer.',
    engineering: 'A solar-powered six-wheel rover carried panoramic cameras, a rock abrasion tool and instruments for mineral analysis.',
    science: 'Spirit found evidence of past water, including silica-rich deposits associated with hydrothermal activity.',
    location: 'Gusev crater',
    latitude: -14.5684,
    longitude: 175.4726,
    coordinatePrecision: 'Verified',
    image: nasaImage('PIA05281'),
    imageAlt: 'Spirit rover exploring Mars',
    timeline: [
      { date: '4 Jan 2004', title: 'Landing', description: 'Spirit lands inside Gusev crater.' },
      { date: '2009', title: 'Embedded', description: 'The rover becomes stuck in soft soil while searching for a route.' },
      { date: '22 Mar 2010', title: 'Last contact', description: 'Spirit enters communications silence.' }
    ],
    references: [
      { label: 'NASA Spirit mission', url: 'https://science.nasa.gov/mission/mer-spirit/' }
    ]
  },
  {
    id: 'opportunity',
    name: 'Opportunity rover',
    mission: 'Mars Exploration Rover B',
    destination: 'Mars',
    category: 'Surface vehicle',
    launchDate: '7 July 2003',
    landingDate: '25 January 2004',
    status: 'Inactive',
    reason: 'A planet-encircling dust storm covered the rover’s solar arrays and ended communications.',
    purpose: 'To investigate Meridiani Planum and search for geological evidence of ancient surface water.',
    engineering: 'Opportunity used solar power, six-wheel mobility, a microscopic imager and a rock abrasion tool.',
    science: 'The rover operated for more than 14 years and found hematite spherules and other evidence of ancient water.',
    location: 'Meridiani Planum',
    latitude: -1.9462,
    longitude: 354.4734,
    coordinatePrecision: 'Verified',
    image: nasaImage('PIA18137'),
    imageAlt: 'Opportunity rover panorama on Mars',
    timeline: [
      { date: '25 Jan 2004', title: 'Landing', description: 'Opportunity lands inside Eagle crater.' },
      { date: '2008', title: 'Victoria crater', description: 'The rover studies the edge of a large impact crater.' },
      { date: '13 Feb 2019', title: 'Mission complete', description: 'NASA declares the mission complete after the 2018 dust storm.' }
    ],
    references: [
      { label: 'NASA Opportunity mission', url: 'https://science.nasa.gov/mission/mer-opportunity/' }
    ]
  },
  {
    id: 'curiosity-landing-system',
    name: 'Curiosity landing system',
    mission: 'Mars Science Laboratory',
    destination: 'Mars',
    category: 'Landing hardware',
    launchDate: '26 November 2011',
    landingDate: '6 August 2012',
    status: 'Deliberately discarded',
    reason: 'The heat shield, parachute and descent-stage hardware separated from Curiosity during the sky-crane landing.',
    purpose: 'To deliver the Curiosity rover safely through the Martian atmosphere and onto the surface.',
    engineering: 'The system combined a guided entry vehicle, supersonic parachute, powered descent stage and sky crane.',
    science: 'Its precision landing opened access to Gale crater, where Curiosity studies Mars’s ancient habitability.',
    location: 'Gale crater / Bradbury Landing',
    latitude: -4.5895,
    longitude: 137.4417,
    coordinatePrecision: 'Mission site',
    image: nasaImage('PIA15986'),
    imageAlt: 'Curiosity rover landing system illustration',
    timeline: [
      { date: '26 Nov 2011', title: 'Launch', description: 'The Mars Science Laboratory leaves Earth.' },
      { date: '6 Aug 2012', title: 'Seven minutes', description: 'The sky-crane system lowers Curiosity into Gale crater.' },
      { date: '2012', title: 'Separated', description: 'Landing components remain in the crater around the rover.' }
    ],
    references: [
      { label: 'NASA Curiosity', url: 'https://science.nasa.gov/mission/msl-curiosity/' }
    ]
  },
  {
    id: 'perseverance-landing-system',
    name: 'Perseverance landing system',
    mission: 'Mars 2020',
    destination: 'Mars',
    category: 'Landing hardware',
    launchDate: '30 July 2020',
    landingDate: '18 February 2021',
    status: 'Deliberately discarded',
    reason: 'The heat shield, parachute and descent stage were discarded during entry and landing while Perseverance continued its mission.',
    purpose: 'To deliver Perseverance and Ingenuity to Jezero crater with improved landing precision.',
    engineering: 'The entry system used terrain-relative navigation, a supersonic parachute and a powered sky-crane descent stage.',
    science: 'The separated components are now part of the Jezero landing-site record while the rover caches samples for possible return.',
    location: 'Jezero crater / Octavia E. Butler Landing',
    latitude: 18.4447,
    longitude: 77.4508,
    coordinatePrecision: 'Mission site',
    image: nasaImage('PIA24427'),
    imageAlt: 'Perseverance rover landing on Mars',
    timeline: [
      { date: '30 Jul 2020', title: 'Launch', description: 'Mars 2020 begins its journey to Jezero crater.' },
      { date: '18 Feb 2021', title: 'Landing', description: 'The descent stage lowers Perseverance to the surface.' },
      { date: '2021', title: 'Hardware separated', description: 'Entry and descent components remain near the landing site.' }
    ],
    references: [
      { label: 'NASA Perseverance', url: 'https://science.nasa.gov/mission/mars-2020-perseverance/' }
    ]
  },
  {
    id: 'ingenuity',
    name: 'Ingenuity Mars Helicopter',
    mission: 'Mars 2020',
    destination: 'Mars',
    category: 'Aerial vehicle',
    launchDate: '30 July 2020',
    landingDate: '18 February 2021',
    status: 'Mission completed',
    reason: 'After completing its technology demonstration and an extended science mission, Ingenuity can no longer fly.',
    purpose: 'To demonstrate powered, controlled flight on another planet and scout terrain for Perseverance.',
    engineering: 'A lightweight coaxial-rotor aircraft used solar charging, autonomous navigation and carbon-fiber blades in Mars’s thin atmosphere.',
    science: 'Ingenuity completed 72 flights, proving aerial scouting can support future planetary exploration.',
    location: 'Jezero crater',
    latitude: 18.4447,
    longitude: 77.4508,
    coordinatePrecision: 'Mission site',
    image: nasaImage('PIA25811'),
    imageAlt: 'Ingenuity helicopter on Mars',
    timeline: [
      { date: '19 Apr 2021', title: 'First flight', description: 'Ingenuity makes the first powered, controlled flight on another world.' },
      { date: '2023', title: 'Extended mission', description: 'The helicopter scouts terrain and tests new flight profiles.' },
      { date: '18 Jan 2024', title: 'Final flight', description: 'NASA ends the flight mission after a rotor-blade issue.' }
    ],
    references: [
      { label: 'NASA Ingenuity', url: 'https://science.nasa.gov/mission/mars-2020-ingenuity-helicopter/' }
    ]
  }
];

export const timelineEvents = artifacts.flatMap((artifact) =>
  artifact.timeline.map((event) => ({ ...event, artifactId: artifact.id, artifactName: artifact.name, destination: artifact.destination }))
);

