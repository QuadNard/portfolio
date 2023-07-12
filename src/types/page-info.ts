export type KnownTech = {
  iconSvg: string;
  icon: string;
  name: string;
  startDate: string;
};

export type Technology = {
  name: string;
  icon: string;
};

export type ProjectSection = {
  title: string;
  subtitle: string;
  text: string;
  subtext: string;
  techStack: string;
  description: string;
  featureImage: {
    url: string;
  };
  image: {
    url: string;
  };
};

export type Social = {
  url: string;
  iconSvg: string;
  title: string;
};

/* Projects  */
export type Project = {
  id: string;
  thumbnail: {
    url: string;
  };
  title: string;
  shortDescription: string;
  technologies: Technology[];
  pageThumbnail: {
    url: string;
  };
  sections: ProjectSection[];
  description: {
    rawText: string;
    text: string;
  };
  liveProjectUrl?: string;
  githubUrl?: string;
};

/* Work Experience Section */
export type WorkExperience = {
  companyLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  technologies: Technology[];
  description: {
    rawText: string;
  };
};

/*  Home Page */
export type HomePageInfo = {
  introduction: {
    title: string;
  };
  technologies: Technology[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: KnownTech[];
  highlightedProjects: Project[];
};

export type HomePageData = {
  page: HomePageInfo;
  workExperience: WorkExperience[];
};

/*  Projects Page */

export type ProjectPageData = {
  project: Project;
};

export type ProjectsPageData = {
  projects: Project[];
};
export type ProjectsPageStaticData = {
  projects: {
    id: string;
  }[];
};
