import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "noelia:~$",
  EMAIL: "naylenmiranda@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Noelia Miranda",
  DESCRIPTION: "Welcome to my personal website. I am a software engineer and I love to build things.",
};

export const TIL: Metadata = {
  TITLE: "til",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const BOOKS: Metadata = {
  TITLE: "Books",
  DESCRIPTION: "A collection of books I have read, with reviews and ratings.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/namiranda"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/noelia-a-miranda/",
  }
];
