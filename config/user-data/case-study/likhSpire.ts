import { CaseStudy } from "./cherished-lives";

export const likhSpireCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/likhspire.webp",

  introduction:
    "LikhSpire is a full-stack blog platform that allows users to create, manage, and explore blog posts. It was built as a capstone project during a full-stack development bootcamp, with a strong focus on backend systems and database design.",

  overview:
    "This project focuses on building a complete blogging system with authentication-like behavior, CRUD operations, and PostgreSQL integration. The frontend was designed using Bootstrap without templates to practice layout design and UI structuring.",

  overviewImage: "/projects/likhspire.webp",

  architecture: {
    description:
      "The system follows a simple client-server architecture using Express.js for backend APIs and PostgreSQL for data storage.",

    structure: `
Backend/
  config/        (database + environment setup)
  controllers/   (business logic for routes)
  routes/        (API endpoints)
  sql/           (database queries / schema)
  app.js         (server entry point)

Frontend/
  public/
    assets/      (images, static files)
    view/        (HTML pages / UI structure)
    blogList.js   (frontend logic)
    styles.css    (custom styling)
    index.html   (main entry page)

screenshots/     (UI previews)
README.md        (project documentation)
`,
  },

  challenges: [
    {
      title: "Database design complexity",
      body: "Structuring relational tables and ensuring clean data flow across CRUD operations with PostgreSQL.",
    },
    {
      title: "Frontend–API integration",
      body: "Managing seamless communication between UI and backend while keeping state and responses consistent.",
    },
  ],

  process: [
    {
      title: "Backend-first approach",
      body: "I started by designing database schema and building REST APIs before moving to the frontend.",
    },
    {
      title: "Iterative UI building",
      body: "Frontend pages were built one by one, testing each API integration immediately.",
    },
    {
      title: "Feature validation",
      body: "Each CRUD feature was tested end-to-end to ensure data consistency between UI and database.",
    },
  ],

  features: [
    {
      title: "Blog CRUD system",
      body: "Create, edit, read, and delete posts with full database persistence.",
    },
    {
      title: "Medium-style blog feed",
      body: "Clean listing layout inspired by Medium for better readability and structure.",
    },
    {
      title: "Post detail page",
      body: "Dedicated view for each blog with full content rendering.",
    },
    {
      title: "Responsive Bootstrap UI",
      body: "Handcrafted layout without templates, optimized for all screen sizes.",
    },
  ],

  featuresImage: "/projects/case-study/likhspire-features.png",

  outcomes: [
    {
      value: "Full Stack",
      desc: "End-to-end application built with backend focus",
    },
    {
      value: "PostgreSQL",
      desc: "Hands-on relational database experience",
    },
    {
      value: "CRUD System",
      desc: "Complete implementation of core backend operations",
    },
  ],

  reflection:
    "This project strengthened my backend fundamentals and helped me understand how frontend and database systems communicate in real applications.",
};
