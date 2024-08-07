import { Experience, SiteLink } from "@/types/structures.types";

export const STATIC_CDN_IMAGES_LINK =
  "https://veltson-bastien-portfolio.s3.us-west-1.amazonaws.com/images";

//NAVBAR:
export const NAVBAR_LINKS: SiteLink[] = [
  { name: "GitHub", url: "https://github.com/veltsonbastien" },
  { name: "Twitter", url: "https://twitter.com/veltsonbastien" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/veltson-bastien-422b01180/",
  },
  {
    name: "Resume",
    url: "https://docs.google.com/document/d/1YS9S4Hny8FIh40FUsSewDHah6VI_7XtVmbCyKE9hWkQ/edit?usp=sharing",
  },
];

//HERO:
export const HERO_H1_TEXT = "Let's write line 1 or 1,000,000 together.";
export const JOB_TITLE = "Software Engineer";

//EXPERIENCE SECTION:
export const EXPERIENCE_SECTION_TITLE = "My experience";
export const EXPERIENCE_SECTION_SUBTITLE =
  "Where I've been and what I've done (professionally) in a nutshell.";
export const EXPERIENCES: Experience[] = [
  {
    company: "AdTrace",
    role: "Software Engineer",
    startDate: "March 2024",
  },
  {
    company: "Rekndle",
    role: "Backend Engineer",
    startDate: "January 2024",
    endDate: "March 2024",
  },
  {
    company: "Muse (YC S21)",
    role: "Founding Engineer & Team Member",
    startDate: "February 2021",
    endDate: "June 2023",
  },
  {
    company: "AX Media",
    role: "Founder",
    startDate: "August 2019",
    endDate: "February 2021",
  },
  {
    company: "UCSB SIS&T",
    role: "Software Developer",
    startDate: "October 2018",
    endDate: "September 2019",
  },
];

//WRITEUPS SECTION:
export const WRITEUPS_SECTION_TITLE = "More than buzzwords";
export const WRITEUPS_SECTION_SUBTITLE =
  "Click to explore some key projects that I've built with different technologies.";

export const RJPINK = "#ed5d66";
