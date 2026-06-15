export interface ProjectDescription {
  id: number;
  featured: boolean; // specifies whether a project is a featured project (front-page project)
  title: string;
  role: string;
  association: string;
  client: string | null;
  stack: string[];
  startDate: string; // use ISO-8601 format please
  endDate: string | null; // use ISO-8601 format please; null means it hasn't ended
  projectPage: string | null;
  liveSite: string | null;
  synopsis: string;
  longDescription: string;
  contributions: string[];
  pageDetails?: PageDetailsDescription[];
  images: ProjectImages;
  contributors: ContributorSection[];
}

interface PageDetailsDescription {
  section: string;
  title: string;
  description?: string;
  subcontent: DetailsSubcontent[];
}

type SubcontentTypes = 'listpoint' | 'image';

interface DetailsSubcontent {
  type: SubcontentTypes;
  heading: string; // Bold text for listpoint, alt text for image
  content: string; // text for listpoint, URL for image
}

interface ProjectImages {
  cardImage: string;
  bannerImage: string;
  gallery: string[];
}

interface ContributorSection {
  name: string;
  url: string | null;
}

export const projects: ProjectDescription[] = [
  {
    id: 9,
    featured: true,
    title: 'SETLib',
    role: 'Front End Team Lead and Developer',
    association: 'Tech Startup Club UW Tacoma',
    client: 'UW Tacoma SET',
    stack: ['TypeScript', 'Next.js', 'Node.js'],
    startDate: '2025-06-16',
    endDate: '2026-04-01',
    projectPage: null,
    liveSite: 'https://uwsetlib.vercel.app',
    synopsis: 'A document management system for the TCSS facilitators at UW Tacoma',
    longDescription: 'A document management system designed for the computer science seminar facilitator program at the University of Washington Tacoma. This full-stack application enables users to add, search, and manage worksheet questions related to computer science topics.',
    contributions: [
      'Organize team deliverables through project sprints and maintain documentation, ensuring clear communication of the club\'s vision while maintaining project timelines.',
      'Built the login system on the Next.js front end to ensure secure, intuitive access by users.',
      'Reviewed team code for cleanliness and bugs, keeping the codebase clean and functional.'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: 'Worksheet documents are disorganized and hard to manage',
        description: 'Files were stored as a series of PDF and Word documents in a shared Google Drive, often poorly organized with some content missing altogether.',
        subcontent: [
          { type: 'listpoint', heading: 'Duplicates', content: 'Multiple worksheets contained inadvertent duplicates since previous problems were hard to find and verify.' },
          { type: 'listpoint', heading: 'Missing work', content: 'Some worksheets never made it to the shared drive and is considered lost.' },
          { type: 'listpoint', heading: 'Wasted time', content: 'The shared drive system required tedious work that needed to be spent on managing documents rather than focusing on teaching.' }
        ]
      },
      {
        section: 'Goals',
        title: 'Create a centralized hub for searching and building high-quality worksheets and worksheet content',
        description: 'Stakeholders desired a web-based solution where facilitators could search for worksheet questions using filters, generate worksheets from these questions, and submit problems through a peer-reviewed system.',
        subcontent: [
          { type: 'listpoint', heading: 'Intuitive search', content: 'Allow searching by category, difficulty, course, question type, and keyword.' },
          { type: 'listpoint', heading: 'Quality control', content: 'Peer review and approval system that professors can use to vet problems before final submission.' }
        ]
      },
      {
        section: 'Results',
        title: '',
        description: 'Check back in for more information.',
        subcontent: [

        ]
      }
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Celestin Ryf (celestinryf)',
        url: 'https://github.com/celestinryf'
      },
      {
        name: 'Anthony Naydyuk (antnay)',
        url: 'https://github.com/antnay'
      },
      {
        name: 'Matthew Franchini (matchewf11)',
        url: 'https://github.com/matchewf11'
      },
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      },
      {
        name: 'Austin Nguyen (ASTN-NGYN)',
        url: 'https://github.com/ASTN-NGYN'
      },
      {
        name: 'Selly Beyene (SellyB-lionesscub7)',
        url: 'https://github.com/SellyB-lionesscub7'
      },
      {
        name: 'Nick Jordan (NickJordan-BE)',
        url: 'https://github.com/NickJordan-BE'
      },
      {
        name: 'Chris Pihlman (Chris5605)',
        url: 'https://github.com/Chris5605'
      },
      {
        name: 'Fernando Olivar Neri (Feekly)',
        url: 'https://github.com/Feekly'
      },
      {
        name: 'Felix Kiama (felixkiama77)',
        url: 'https://github.com/felixkiama77'
      },
      {
        name: 'Caleb Ernst (calebaernst)',
        url: 'https://github.com/calebaernst'
      },
      {
        name: 'sla-y-er',
        url: 'https://github.com/sla-y-er'
      },
      {
        name: 'Adin Smith (smithad26)',
        url: 'https://github.com/smithad26'
      }
    ]
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
          { type: 'listpoint', heading: 'Lacking signage', content: 'Electronic road signs aren\'t always present on all routes' },
          { type: 'listpoint', heading: 'Lack of official data on map apps', content: 'While local transportation agencies keep tabs on bridge openings, apps like Google Maps don\'t appear to display this data' }
        ]
      },
      {
        section: 'Goals',
        title: 'Build a simple, intuitive web app that displays live data of bridge openings',
        subcontent: [
          { type: 'listpoint', heading: 'Easy to read', content: 'Provide a summary of the statuses for all bridges in one place using easy-to-distinguish graphics.' },
          { type: 'listpoint', heading: 'Details for verification', content: 'Show details for those who want it with the location name and live traffic camera image for verification.' },
          { type: 'listpoint', heading: 'Live updates', content: 'Update every minute or faster to bring users the latest information without overwhelming the APIs provided by local DOTs.' }
        ]
      },
      {
        section: 'Results',
        title: 'A quick, convenient solution for checking up on the status of movable bridges',
        description: 'I don\'t suspect that there\'s been much use by other people other than myself. Personally, the app has been quite useful when I\'m in a car with other people going over one of Seattle\'s draw bridges. It just takes a minute for the free tier services to warm up.',
        subcontent: [
        ]
      }
    ],
    images: {
      cardImage: "isthebridgeup_card.png",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      }
    ]
  },

  {
    id: 7,
    featured: false,
    title: 'DungeonAdventure',
    role: 'Java Developer',
    association: 'University course project',
    client: null,
    stack: ['Java', 'JavaFX'],
    startDate: '2025-04-01',
    endDate: '2025-06-14',
    projectPage: 'https://github.com/presiauw0/360team17DungeonAdventure',
    liveSite: null,
    synopsis: 'A rogue-like dungeon-themed game written in Java',
    longDescription: 'Run through a procedurally-generated maze, picking up loot and fighting monsters to reach the exit.',
    contributions: [
      'Implemented the maze generation system using a recursive depth-first search algorithm and factory pattern.',
      'Made the front end for viewing dungeon "rooms" using the observer design pattern.',
      'Emphasized and reviewed group work for defensive coding practices.'
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      },
      {
        name: 'Jonathan Hernandez (jhernandezzz)',
        url: 'https://github.com/jhernandezzz'
      },
      {
        name: 'Luke Willis (luke-willis)',
        url: 'https://github.com/luke-willis'
      }
    ]
  },

  {
    id: 6,
    featured: false,
    title: 'UMarket',
    role: 'Front End Team Lead and Developer',
    association: 'Tech Startup Club UW Tacoma',
    client: 'Tech Startup Club UW Tacoma',
    stack: ['TypeScript', 'React', 'Node.js'],
    startDate: '2025-01-01',
    endDate: '2025-05-01',
    projectPage: 'https://github.com/TechStartupClub/UMarket',
    liveSite: null,
    synopsis: 'A marketplace and social media platform for UW students.',
    longDescription: 'UMarket is a marketplace and social platform for UW students. From clothes and beds, to computers and pencils, whether you are moving out of your dorm, or you just need the extra cash, buy and sell on UMarket! Communicate and market your shop on the social media page, and buy and sell using the Market.',
    contributions: [
      'Design low-fidelity prototypes for the marketplace and social media features of the platform.',
      'Ensure color pallets met WCAG contrast requirements.',
      'Scaffold the main pages for the marketplace section of the site.',
      'Work with the club president in the assignment of deliverables and code review.'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: 'The closest platform related to student-focused social media is difficult to use. A marketplace system doesn\'t exist.',
        description: 'The closest platform at UW Tacoma is a platform called "DUBNET" by 3rd party vendor CampusGroups. The DUBNET platform is seldom used outside of check-ins for events by student clubs. Many of our club members have found the interface difficult to use.',
        subcontent: [
          { type: 'listpoint', heading: 'Current solutions are unpopular', content: 'A social media system exists on the platform, but rarely sees use. Events used to be posted on DUBNET but are not commonly posted on the platform in recent years.' },
          { type: 'listpoint', heading: 'Current solutions are hard to use', content: 'The multitude of menus make using the platform difficult to use.' }
        ]
      },
      {
        section: 'Goals',
        title: 'Create a unified, intuitive platform for students to connect and buy/sell items',
        description: 'A successful platform needs to be intuitive and easy to use. The cornerstones of this project were the social media and marketplace aspects fo the platform.',
        subcontent: [
          { type: 'listpoint', heading: 'Intuitive interface', content: 'The User Interface must be accessible and intuitive for all users.' },
          { type: 'listpoint', heading: 'Marketplace', content: 'Provide an interactive marketplace for students to buy and sell items from each other in a simple and secure manner.' },
          { type: 'listpoint', heading: 'Social media', content: 'Create a social media platform that people actually want to use' },
          { type: 'listpoint', heading: 'Learning', content: 'With many new club members, this should also function as a learning opportunity to gain practice using React and TypeScript.' }
        ]
      },
      {
        section: 'Results',
        title: 'A strong start and rough ending',
        description: 'There was a lot of excitement around the project at the time after finishing up UWealth (out previous project). However, some rough patches in communication, productivity, and a shift in priorities taught some important lessons.',
        subcontent: [
          { type: 'listpoint', heading: 'Unclear objectives', content: 'There was a misunderstanding between different leads among whether the project was a "market-focused platform with social features" or a "social-focused platform with marketplace features." I and the other leads worked this out during the low-fidelity ideation and prototype phase. We\'ll be certain to all be on the same page next time.' },
          { type: 'listpoint', heading: 'Limitations of being a club', content: 'Alas, since everyone is volunteering their time, development is sometimes subject to interruption by other priorities such as the intense midterm exams that many students (who were in the same class) needed to study for. This probably calls for better sprint planning that takes this into account.' },
          { type: 'listpoint', heading: 'Playing catch-up', content: 'After returning during the spring to work on the project, we attempted to get everyone "up to speed" before moving on, involving the merging of partially completed features from the previous months. This likely hampered some of our progress by being hung up by other code. This again calls for better spring planning.' },
          { type: 'listpoint', heading: 'Shift in priorities', content: 'For this project, the club itself was its own client. The stakes weren\'t particularly high, and once we were approached by our professors for a project proposal, our priorities shifted. This project was put on hold indefinitely.' },
          { type: 'listpoint', heading: 'Learning experiences', content: 'This experience did teach us a lot about communication, drafting prototypes, and gaining a better understanding of the TypeScript which was new for a lot of people. We were able to take this knowledge into the SETlib project.' },
        ]
      }
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Celestin Ryf (celestinryf)',
        url: 'https://github.com/celestinryf'
      },
      {
        name: 'Jacob Klymenko (jacobkly)',
        url: 'https://github.com/jacobkly'
      },
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      },
      {
        name: 'Primitivo Bambao (abstracted)',
        url: 'https://github.com/abstrcted'
      },
      {
        name: 'Austin Nguyen (ASTN-NGYN)',
        url: 'https://github.com/matchewf11'
      },
      {
        name: 'Matthew Franchini (matchewf11)',
        url: 'https://github.com/matchewf11'
      },
      {
        name: 'Fernando Olivar Neri (feekly)',
        url: 'https://github.com/Feekly'
      },
      {
        name: 'Anthony Naydyuk (antnay)',
        url: 'https://github.com/antnay'
      },
      {
        name: 'Nick Jordan (njordanuw)',
        url: 'https://github.com/NjordanUW'
      },
      {
        name: 'Alex Yu (AlexY305)',
        url: 'https://github.com/AlexY305'
      },
      {
        name: 'James Escudero (jamesesc)',
        url: 'https://github.com/jamesesc'
      },
      {
        name: 'Caleb Ernst (calebaernst)',
        url: 'https://github.com/calebaernst'
      },
      {
        name: 'John Diego Menudo (diego-menudo)',
        url: 'https://github.com/diego-menudo'
      }
    ]
  },

  {
    id: 5,
    featured: false,
    title: 'UWealth',
    role: 'Front End Web Developer',
    association: 'Tech Startup Club UW Tacoma',
    client: 'Tech Startup Club UW Tacoma',
    stack: ['JavaScript', 'React', 'Node.js'],
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    projectPage: 'https://github.com/TechStartupClub/UWealth',
    liveSite: null,
    synopsis: 'A stock tracking web app using data from AlphaVantage.',
    longDescription: 'UWealth is a stock-tracking and screening website with data from AlphaVantage. View graphs, data, and analyst recommendations for stock symbols and crypto, and have your own profile to view your own list of stocks with a personal watchlist.',
    contributions: [
      'Designed and implemented front end logic for the stock watchlist page, allowing users to add stock listings to watch in one convenient dashboard.',
      'Designed the homepage/landing page of the site.',
      'Provided guidance to fellow developers on the things I learned about React.js.'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: 'UW Tacoma lacked active clubs focused on full-stack projects',
        description: 'Fresh in our major, a group of about 8 of us wanted to form a group for building full-stack web apps.',
        subcontent: [
          { type: 'listpoint', heading: 'Lack of opportunities', content: 'Most of the classes related to full-stack development are only available in our senior year. Many of us wanted to find ways to gain experience working together on projects outside of the classroom and do something meaningful.' },
          { type: 'listpoint', heading: 'Lack of clubs', content: 'Most clubs at the time were focused on LeetCode or social activities, not web or app development.' },
          { type: 'listpoint', heading: 'A project to build our experience', content: 'Club leader Celestin wanted to do something related to FinTech involving full-stack development teams and an external API to connect to. UWealth provided a way for us to build experience working together as a club and learning different technologies.' },
        ]
      },
      {
        section: 'Goals',
        title: 'Build our experiences',
        description: 'UWealth was intended to help us grow and learn as a group, as well as learn new technologies.',
        subcontent: [
          { type: 'listpoint', heading: 'Multiple opportunities for development', content: 'This project provided different teams with the opportunity to work on front-end and back-end code, UI design, and REST APIs, both internal with our application and external with AlphaVantage.' },
          { type: 'listpoint', heading: 'Stock tracking', content: 'Focus on designing a platform to track trending stocks and stocks of a users choosing.' }
        ]
      },
      {
        section: 'Results',
        title: 'A new student organization forms',
        description: 'UWealth was always limited by the number of requests that the free tier of the API allowed, and the designs and code wasn\'t perfect. However, this project gave the club the experience it needed to grow and move to bigger, more practical projects. We moved from being an semi-organized group of students to an official Registered Student Organization at UW Tacoma.',
        subcontent: [
          { type: 'listpoint', heading: 'Feasibility', content: 'Given the expensive nature of accessing live stock information, this project serves more as a proof-of-concept then anything else.' },
          { type: 'listpoint', heading: 'Learning', content: 'Team members learned a lot about React development for front end, usage of Git and GitHub, and ways to communicate project ideas online and offline.' }
        ]
      }
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Celestin Ryf (celestinryf)',
        url: 'https://github.com/celestinryf'
      },
      {
        name: 'Jacob Klymenko (jacobkly)',
        url: 'https://github.com/jacobkly'
      },
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      },
      {
        name: 'Primitivo Bambao (abstracted)',
        url: 'https://github.com/abstrcted'
      },
      {
        name: 'Fernando Olivar Neri (feekly)',
        url: 'https://github.com/Feekly'
      },
      {
        name: 'Anthony (antnay)',
        url: 'https://github.com/antnay'
      },
      {
        name: 'Nick Jordan (njordanuw)',
        url: 'https://github.com/NjordanUW'
      },
      {
        name: 'Alex Yu (AlexY305)',
        url: 'https://github.com/AlexY305'
      }
    ]
  },

  {
    id: 4,
    featured: false,
    title: 'Tetris Clone',
    role: 'Java Developer',
    association: 'University Course Project',
    client: null,
    stack: ['Java', 'Java Swing'],
    startDate: '2024-11-01',
    endDate: '2024-12-14',
    projectPage: 'https://github.com/presiauw0/group6-tetris',
    liveSite: null,
    synopsis: 'A clone of TETRIS in Java Swing',
    longDescription: 'A clone of TETRIS in Java/Java Swing for a university course project.',
    contributions: [
      'Implementation of multiple parts of the graphical front end, including the Tetris board, using the Observer Design Pattern and Model-View-Controller to connect the back-end logic, maintaining scalability.',
      'Lead the team\'s usage of Git, maintaining organization of branches and keeping merge conflicts minimal.',
      'Found and included the music used in the TETRIS game.'
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      },
      {
        name: 'Khalid Rashid (ksrashid)',
        url: 'https://github.com/ksrashid'
      },
      {
        name: 'Balkirat Singh (Balkirat21)',
        url: 'https://github.com/Balkirat21',
      },
      {
        name: 'Abdulrahman Hassan (ahhassan1)',
        url: 'https://github.com/ahhassan1'
      }
    ]
  },

  {
    id: 3,
    featured: false,
    title: 'jNav',
    role: 'Front End Web Developer',
    association: 'Personal Project',
    client: 'Undisclosed',
    stack: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
    startDate: '2024-06-25',
    endDate: '2024-07-02',
    projectPage: 'https://github.com/presia27/jNav',
    liveSite: 'https://presia27.github.io/demos/jNav/v1.0.0/console/index.html',
    synopsis: 'A tool to create and store links in JSON format which can be loaded into a webpage and used to build site navigation tools. This project also defines a JSON structure for storing the information.',
    longDescription: 'A full-stack project that shows when Seattle\'s moveable bridges are up for boat traffic.Users can view traffic camera images or view a summary of all bridges during their commute.',
    contributions: [
      'Create a JSON schema for storing sections and records of links to documents, webpages, and other resources.',
      'Create a WYSIWYG editor in HTML, JavaScript, and jQuery to allow easy editing by non-technical users.'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: 'PDFViewer, the complimentary project, used a schema that was inflexible for a variety of use cases, and lacked a front-end for non-technical users',
        description: 'PDFViewer is a complimentary project that reads a list of links and auto-generates a vertical sidebar with links that open PDF documents in a viewer in the center of the screen. The data is stored in JSON format which is difficult for non-technical users to edit without a graphical editor. The previous schema was really only suited for PDF documents in PDFViewer making it difficult to scale to meet other needs.',
        subcontent: [
          { type: 'listpoint', heading: 'Inflexibility', content: 'The old JSON schema was difficult to use outside of viewing PDF documents in PDFViewer' },
          { type: 'listpoint', heading: 'Difficult to edit', content: 'Non-technical users would have a difficult time editing JSON data. Even technical users might find editing JSON tedious.' }
        ]
      },
      {
        section: 'Goals',
        title: 'Build a simple, intuitive web app that displays live data of bridge openings',
        description: 'jNav must maintain compatibility constraints while allowing future growth.',
        subcontent: [
          { type: 'listpoint', heading: 'Compatible', content: 'The new schema should still serve the needs met by the old schema. The front-end editor should be compatible with Internet Explorer 11 due to a certain client\'s specifications.' },
          { type: 'listpoint', heading: 'SharePoint compatible', content: 'All code must be pure front end and not rely on any server-side code. All code and resources must be hosted internally and be compatible with running on a Microsoft SharePoint server.' },
          { type: 'listpoint', heading: 'Easy to use', content: 'Non-technical users should be able to easily edit the document listing without editing JSON.' },
          { type: 'listpoint', heading: 'Flexible', content: 'The schema should allow the addition of new features over time.' }
        ]
      },
      {
        section: 'Results',
        title: '',
        description: 'Building on the previous system, the new schema allows for different JSON object \"types\" such as headings, sections, and list entries. This results in a schema that is a lot more flexible and allows sections to be nested multiple times if desired. The rendering of these nested section involves a recursive search algorithm. The front end allows you to see the document list as it would appear in PDFViewer and allows the user to drag items to change the ordering.',
        subcontent: [
        ]
      }
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      }
    ]
  },

  {
    id: 2,
    featured: false,
    title: 'Labyrinth',
    role: 'Java Developer',
    association: 'University course project',
    client: null,
    stack: ['Java', 'Java Swing', 'Java AWT'],
    startDate: '2022-05-01',
    endDate: '2022-06-05',
    projectPage: null,
    liveSite: null,
    synopsis: 'A rogue-like maze game where the player runs through different maze rooms and fights enemies.',
    longDescription: 'Run through an series of never-ending procedurally-generated mazes while fighting off enemies. Each level gets faster and more difficult.',
    contributions: [
      'Coordinate communication and organization of ideas to keep the project moving.',
      'Development of game character logic for the \"player\" and \"enemy\", utilizing inheritance for code organization.',
      'Added an extra feature for the loading of character sprites.'
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      },
      {
        name: 'Hai Duong',
        url: null
      }
    ]
  },

  {
    id: 1,
    featured: false,
    title: 'PDFViewer',
    role: 'Front End Web Developer',
    association: 'Personal Project',
    client: 'Undisclosed',
    stack: ['JavaScript', 'HTML'],
    startDate: '2018-01-01',
    endDate: '2024-04-21',
    projectPage: 'https://github.com/presia27/PDFViewer',
    liveSite: 'https://presia27.github.io/demos/PDFViewer/v4.0.0/PDFViewer/index.html',
    synopsis: 'Web-based file navigator and PDF reader built on Mozilla\'s PDF.JS',
    longDescription: 'PDFViewer is a web-based tool designed to easily organize and present different PDF files, all in one interface. No back-end code is necessary. The PDFViewer interface consists of an \"index\" or a sidebar with a list of documents. When a user clicks on an index entry, the PDF document appears on the right-hand side of the users screen. The interface also supports normal hyperlinks, a helpful feature if a document is maintained in multiple file types.',
    contributions: [
      'Designed a simple interface that auto-generates a sidebar index of documents that, when clicked, opens a PDF document in the center of the web page.',
      'Designed a JSON schema to store the information and subsequent script to read and build the index.'
    ],
    pageDetails: [
      {
        section: 'Problem',
        title: 'A simple, front-end only solution for organizing office documents was needed.',
        description: 'Subject to several constraints, a browser-based platform that simply focused on displaying PDF documents in the browser and providing an "index" of documents to click and open from a sidebar was desired.',
        subcontent: [
          { type: 'listpoint', heading: 'No IT Access', content: 'Must be compatible running in Microsoft SharePoint server used as a simple HTTP server for the purposes of such a solution. No back end access is provided, and no back end code can be used.' },
          { type: 'listpoint', heading: 'Ease of use', content: 'Non-technical users must be able to use and edit this index.' },
          { type: 'listpoint', heading: 'Scattered documents', content: 'While SharePoint is used as the file server, documents are scattered across various SharePoint folders, making organization using the file browser difficult.' }
        ]
      },
      {
        section: 'Goals',
        title: 'Build a viewer and sidebar for viewing documents',
        description: 'PDFViewer must run as a \"front-end only\" application that uses runs in the browser.',
        subcontent: [
          { type: 'listpoint', heading: 'Easy to view', content: 'The interface should be easy for the viewer to view documents listed in the index.' },
          { type: 'listpoint', heading: 'Easy to add', content: 'The system should make it easy for the manager of the list to add or remove documents from the index.' },
          { type: 'listpoint', heading: 'Compatible', content: 'The system should be compatible with Microsoft SharePoint and Internet Explorer 11.' }
        ]
      },
      {
        section: 'Results',
        title: 'An easy-to-use document viewer',
        description: 'The platform uses a JSON file that contains a list of all PDF documents to load into the index. This file is loaded by the browser and parsed with JavaScript. The user interface for viewing documents made viewing office documents much easier. An intuitive front-end editor took some time (view the jNav project for details).',
        subcontent: [
          { type: 'listpoint', heading: 'Easy to view and organize', content: 'PDFViewer made organizing documents from different locations much easier. Viewing documents is as simple as clicking on the desired document link.'},
          { type: 'listpoint', heading: 'In-browser viewing', content: 'Using Mozilla\'s PDF.js, documents can be viewed right beside the list of documents, making it easy to switch between documents.' }
        ]
      }
    ],
    images: {
      cardImage: "#",
      bannerImage: "#",
      gallery: []
    },
    contributors: [
      {
        name: 'Preston Sia (presia27)',
        url: 'https://github.com/presia27/'
      }
    ]
  }
];