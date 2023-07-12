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
    iconSvg: '/react.png',
    icon: '/react.png',
    name: 'React',
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
    name: 'Typescript',
    icon: '/typescript_parrot.gif',
  },
  {
    name: 'AWS',
    icon: '/aws.png',
  },
  {
    name: 'Linux',
    icon: '/linux.png',
  },
  {
    name: 'GraphQL',
    icon: '/graphql.png',
  },
  {
    name: 'fastapi',
    icon: '/fastapi.png',
  },
  {
    name: 'MongoDB',
    icon: '/mongodb.png',
  },
  {
    name: 'PostgreSQL',
    icon: '/postgresql.png',
  },
  {
    name: 'JavaScript',
    icon: '/js.png',
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
    title: 'Project 1',
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
    title: 'Project 2',
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
  },
  // Add more project objects as needed
];

const workexperiences: WorkExperience[] = [
  {
    companyLogo: {
      url: '/imgur.png',
    },
    role: 'Software Engineer',
    companyName: 'Company 1',
    companyUrl: 'https://example.com/company1',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    technologies: [technologies[0]],
    description: {
      rawText: 'Lorem ipsum dolor sit amet',
    },
  },
  {
    companyLogo: {
      url: '/profile.webp',
    },
    role: 'Frontend Developer',
    companyName: 'Company 2',
    companyUrl: 'https://example.com/company2',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
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
