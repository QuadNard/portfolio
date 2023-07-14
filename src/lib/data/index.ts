import {
  HomePageInfo,
  KnownTech,
  Project,
  ProjectSection,
  Social,
  Technology,
  WorkExperience,
} from '@/types/page-info';

const knownTechs: KnownTech[] = [
  {
    iconSvg: '/coolcloud.png',
    icon: '/coolcloud.png',
    name: 'Cloud Support',
    startDate: '2023/01/01, 03:30:00',
  },
  {
    iconSvg: '/api.png',
    icon: '/api.png',
    name: 'Api design',
    startDate: '2023/01/01, 03:30:00',
  },
  {
    iconSvg: '/webpack.gif',
    icon: '/webpack.gif',
    name: 'Web Services',
    startDate: '2023/01/01, 03:30:00',
  },
  {
    iconSvg: '/agile.png',
    icon: '/agile.png',
    name: 'Agile Environment',
    startDate: '2023/01/01, 03:30:00',
  },
  {
    iconSvg: '/pipeline.gif',
    icon: '/pipeline.gif',
    name: 'Data Pipelines',
    startDate: '2023/01/01, 03:30:00',
  },
  // Add more known tech objects as needed
];

const technologies: Technology[] = [
  {
    name: 'Next.js',
    icon: '/nextjs.jpeg',
  },
  {
    name: 'React.js',
    icon: '/react.png',
  },
  {
    name: 'Node.js',
    icon: '/nodejs.png',
  },
  {
    name: 'Golang',
    icon: '/golang.png',
  },
  {
    name: 'TypeScript',
    icon: '/typescript_parrot.gif',
  },
  {
    name: 'AWS',
    icon: '/aws.png',
  },
  {
    name: 'Vite',
    icon: '/vite.png',
  },
  {
    name: 'mysql',
    icon: '/mysql.png',
  },
  {
    name: 'Angular',
    icon: '/angular.png',
  },
  {
    name: 'JavaScript',
    icon: '/javascript-on-fire.gif',
  },
  // Add more technology objects as needed
];

const projectSections: ProjectSection[] = [
  {
    title: 'Introduction',
    subtitle: 'Features',
    featureImage: {
      url: '/project-ipad-1.png',
    },
    text: 'help',
    subtext: 'New',
    techStack: 'Next.js',
    description: 'This is a test project',
    image: {
      url: '/project-iphone-1.png',
    },
  },
  {
    title: 'Introduction',
    subtitle: 'Features',
    featureImage: {
      url: '/project-two-view.png',
    },
    subtext: 'New',
    text: 'make',
    techStack: 'Next.js',
    description: 'This is a test project',
    image: {
      url: '/project-two-display.png',
    },
  },
  // Add more project section objects as needed
];

const projects: Project[] = [
  {
    id: '1',
    thumbnail: {
      url: '/laptop-PhotoRoom.png',
    },
    title: 'MaadSounds',
    shortDescription: 'This is project 1',
    technologies: [technologies[0]],
    pageThumbnail: {
      url: '/Hypercolor.jpg',
    },
    sections: [projectSections[0]],
    description: {
      rawText: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet',
    },
    liveProjectUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/user/project1',
  },
  {
    id: '2',
    thumbnail: {
      url: '/laptop-2.png',
    },
    title: 'Giphy App',
    shortDescription: 'This is project 2',
    technologies: [technologies[1]],
    pageThumbnail: {
      url: '/Hypercolor.jpg',
    },
    sections: [projectSections[1]],
    description: {
      rawText: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet',
    },
    liveProjectUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/user/project1',
  },
  // Add more project objects as needed
];

const workexperiences: WorkExperience[] = [
  {
    companyLogo: {
      url: '/open_source.png',
    },
    role: 'Software Engineer Contributor',
    companyName: 'Open Source',
    companyUrl: 'https://example.com/company1',
    startDate: '2023/01/01',
    endDate: '2023/01/01',
    technologies: [technologies[0]],
    description: {
      rawText: 'Lorem ipsum dolor sit amet',
    },
  },
  {
    companyLogo: {
      url: '/disc.webp',
    },
    role: ' Freelance Frontend Developer',
    companyName: 'MaadSounds',
    companyUrl: 'https://example.com/company2',
    startDate: '2023/01/01',
    endDate: '2023/01/01',
    technologies: [technologies[1]],
    description: {
      rawText: 'Lorem ipsum dolor sit amet',
    },
  },
  // Add more work experience objects as needed
];

const socials: Social[] = [
  {
    url: 'https://github.com/QuadNard',
    iconSvg: '/github.png',
    title: 'Github',
  },
  {
    url: 'mailto:jkinardtulloch@gmail.com',
    iconSvg: '/gmail.png',
    title: 'Gmail',
  },
  {
    url: 'https://www.linkedin.com/in/justin-tulloch-010502262/',
    iconSvg: '/linkedin.png',
    title: 'linkedIn',
  },
  // Add more social objects as needed
];
const homeInfo: HomePageInfo[] = [
  {
    introduction: {
      title: 'Hello, I am',
    },
    technologies,
    profilePicture: {
      url: '/person.png',
    },
    socials,
    knownTechs,
    highlightedProjects: projects,
  },
];

export {
  homeInfo,
  socials,
  knownTechs,
  projects,
  workexperiences,
  projectSections,
};
