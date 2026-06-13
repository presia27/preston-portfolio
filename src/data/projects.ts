interface ProjectDescription {
  id: number;
  featured: boolean; // specifies whether a project is a featured project (front-page project)
  title: string;
  role: string;
  association: string;
  client: string | null;
  stack: string[];
  startDate: string; // use ISO-8601 format please
  endDate: string | null; // use ISO-8601 format please; null means it hasn't ended
  projectPage: string;
  liveSite: string;
  synopsis: string;
  longDescription: string;
  contributions: string[];
  pageDetails: PageDetailsDescription[];
  images: ProjectImages;
}

interface PageDetailsDescription {
  section: string;
  title: string;
  description?: string;
  subcontent: DetailsSubcontent[];
}

interface DetailsSubcontent {
  heading: string;
  content: string;
}

interface ProjectImages {
  cardImage: string;
  bannerImage: string;
  gallery: string[];
}

export const projects: ProjectDescription[] = [
  {
    id: 9,
    featured: true,
    title: 'SETLib',
    role: 'Front End Team Lead and Developer',
    association: 'Tech Startup Club UW Tacoma',
    client: null,
    stack: ['TypeScript', 'Next.js', 'Node.js'],
    startDate: '2025-06-16',
    endDate: null,
    projectPage: '',
    liveSite: 'https://uwsetlib.vercel.app',
    synopsis: 'A document management system for the TCSS facilitators at UW Tacoma',
    longDescription: '[to be filled]',
    contributions: [
      'To be filled',
      'To be filled'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: '[to be filled]',
        description: 'To be filled',
        subcontent: [
          { heading: 'To be filled', content: 'To be filled' },
          { heading: 'To be filled', content: 'To be filled' }
        ]
      }
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    }
  },
  {
    id: 8,
    featured: true,
    title: 'Is The Bridge Up?',
    role: 'Full Stack Web Developer',
    association: 'Personal Project',
    client: null,
    stack: ['TypeScript', 'React', 'Node.js', 'Express.js'],
    startDate: '2025-03-19',
    endDate: null,
    projectPage: 'https://github.com/presia27/IsTheBridgeUp',
    liveSite: 'https://isthebridgeup.vercel.app',
    synopsis: 'Displays the status of Seattle\'s movable highway bridges',
    longDescription: 'A full-stack project that shows when Seattle\'s moveable bridges are up for boat traffic.Users can view traffic camera images or view a summary of all bridges during their commute.',
    contributions: [
      'Developed a full-stack web application to show real-time data on Seattle\'s movable bridge openings.',
      'Designed a lightweight database for storing bridge and traffic image data, deployed the app to Vercel and the database to Supabase to practice cloud deployment workflows'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: 'Notice of bridge openings can be easy to miss or aren\'t available',
        description: 'While electronic signage exists on some roads, it can be easy to miss some of the signage unless you know where to look. Some roads lack electronic signage leading up to some of these bridges. Many commuters find themselves stuck waiting for the bridge to open and close and are too far from the nearest street or exit to use an alternate route.',
        subcontent: [
          { heading: 'Lacking signage', content: 'Electronic road signs aren\'t always present on all routes' },
          { heading: 'Lack of official data on many map apps', content: 'While local transportation agencies keep tabs on bridge openings, apps like Google Maps don\'t appear to display this data (though I admit, I don\'t use Google Maps much for active navigation).' }
        ]
      },
      {
        section: 'Goals',
        title: 'Build a simple, intuitive web app that displays live data of bridge openings',
        subcontent: [
          { heading: 'Easy to read', content: 'Provide a summary of the statuses for all bridges in one place using easy-to-distinguish graphics' },
          { heading: 'Details for verification', content: 'Show details for those who want it with the location name and live traffic camera image for verification' },
          { heading: 'Live updates', content: 'Update every minute or faster to bring users the latest information without overwhelming the API' }
        ]
      }
    ],
    images: {
      cardImage: "isthebridgeup_card.png",
      bannerImage: "#",
      gallery: []
    }
  }
];