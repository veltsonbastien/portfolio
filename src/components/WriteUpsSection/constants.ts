import { WriteUpTag, WriteUpType } from "@/types/structures.types";

export const WRITEUPS: WriteUpType[] = [
  {
    title: "Backend Tech Interview 1",
    description:
      "How I downloaded an image and converted it to WebP (for eventual upload to an R2 bucket).",
    cta: "Read more",
    link: "https://magnificent-pewter-94e.notion.site/Tech-Interview-Series-Just-use-fetch-c13dad519f844e32ad69b04872d698cd?pvs=4",
    tags: [WriteUpTag.BACKEND],
    documentId: "TechInterview1",
  },
  {
    title: "Rewriting REST with GraphQL",
    description:
      "I rewrote REST API calls with GraphQL queries and mutations to improve readability and performance.",
    cta: "Read more",
    link: "https://magnificent-pewter-94e.notion.site/Exploring-the-Benefits-of-GraphQL-c6eb4782b4484701b4267bd17bf58772",
    tags: [WriteUpTag.FULLSTACK],
    documentId: "GraphQLBenefits",
  },
  {
    title: "Google Cloud Platform & Firebase",
    description:
      'Designed and developed an analytics tool to help creators "re-live" past visitors of a world.',
    cta: "Explore 'Ghost Goggles'",
    link: "https://magnificent-pewter-94e.notion.site/Ghost-Goggles-Empowering-3D-website-creators-with-more-analytics-313e1c25bb5a41b7a29132dfae424e3b",
    tags: [
      WriteUpTag.FULLSTACK,
      WriteUpTag.NEXTJS,
      WriteUpTag.REACT,
      WriteUpTag.TYPESCRIPT,
    ],
    documentId: "GhostGoggles",
  },
  {
    title: "React, R3F & TypeScript",
    description:
      'Designed frontend "ideas" at Muse to help creators understand how their site performed.',
    cta: "Visit a 3D website",
    link: "https://www.muse.place/loho",
    tags: [
      WriteUpTag.REACT,
      WriteUpTag.TYPESCRIPT,
      WriteUpTag.FULLSTACK,
      WriteUpTag.NEXTJS,
    ],
  },
  {
    title: "Ruby on Rails & PostgreSQL",
    description:
      "Developed backend database and REST API endpoints for in-app Code Editor.",
    cta: "Code Editor Twitter Post",
    link: "https://twitter.com/muse_place/status/1644103101358698497",
    tags: [WriteUpTag.BACKEND],
  },
  {
    title: "WebSockets and Multiplayer",
    description:
      "How many people are visiting a world at a given time? I built a Live Counter that would help answer that question.",
    cta: "Read more",
    link: "https://magnificent-pewter-94e.notion.site/Implementing-WebSockets-to-see-the-live-count-of-visitors-to-a-site-6c5546defaf74b28bb1ab3e3172ed43a?pvs=4",
    tags: [WriteUpTag.BACKEND, WriteUpTag.FULLSTACK],
    documentId: "ImplementingWebsockets",
  },
  {
    title: "Networking and C",
    description:
      "Took Introduction to Computer Communication Networks at UCSB.",
    cta: "Visit Git Repo",
    link: "https://github.com/veltsonbastien/CS176-HW2",
    tags: [WriteUpTag.OOP],
  },
  {
    title: "Python and Data Analysis",
    description:
      "Developed helpful utility functions for data parsing at Muse.",
    cta: "Visit Git Repo",
    link: "https://github.com/veltsonbastien/muse-utils-py",
    tags: [WriteUpTag.BACKEND],
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Completed Data Structures and Algorithms at UCSB (CS130A and CS130B) and implemented common algorithms into real world applications at Muse.",
    cta: "Read more",
    link: "https://magnificent-pewter-94e.notion.site/Implementing-LCS-to-find-the-difference-between-two-worlds-82f3993379e54a82bd6bde0078e9882c",
    tags: [WriteUpTag.BACKEND],
    documentId: "ImplementLCS",
  },
  {
    title: "Object Oriented Design (C++)",
    description:
      "Successfully completed CS16, CS24 and CS32 at UCSB and implemented OOP concepts developing with Typescript at Muse.",
    cta: 'Explore "Heatmap"',
    link: "https://github.com/veltsonbastien/Heatmap",
    tags: [WriteUpTag.OOP, WriteUpTag.TYPESCRIPT],
  },
];
