import { CaseStudy } from "./cherished-lives";

export const prepAndPlateCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/prep-plate.webp",

  introduction:
    "Prep & Plate is a SaaS platform designed to help users plan meals and manage recipes efficiently. My contribution focused on improving the mobile experience by transforming an existing desktop interface into a responsive, app-like layout.",

  overview:
    "The platform was originally designed for desktop users, which made navigation and usability challenging on smaller devices. I was responsible for adapting the interface to work seamlessly across screen sizes while maintaining the existing functionality and structure.",

  overviewImage: "/projects/prep-plate.webp",

  architecture: {
    description:
      "The project was built using React with Redux Toolkit for state management. My work focused on enhancing UI responsiveness without altering the underlying application architecture.",
    structure: `
    Worked within the existing component 
    structure and improved layout responsiveness 
    using Tailwind CSS and flexible design patterns.`,
  },

  challenges: [
    {
      title: "Desktop-first design",
      body: "The interface was optimized for large screens, making it difficult to use on mobile devices due to cramped layouts, poor spacing, and lack of touch-friendly interactions.",
    },
    {
      title: "Maintaining feature accessibility",
      body: "All core features needed to remain accessible on smaller screens without overwhelming the user, requiring careful restructuring of components and layout flow.",
    },
  ],

  process: [
    {
      title: "Interface evaluation",
      body: "Analyzed the desktop layout to identify areas that would break or become unusable on smaller screens.",
    },
    {
      title: "Responsive restructuring",
      body: "Rebuilt layouts using flexible grids and stacking patterns to ensure smooth behavior across devices.",
    },
    {
      title: "Mobile experience refinement",
      body: "Improved spacing, touch targets, and navigation flow to create a more intuitive, app-like experience.",
    },
  ],

  features: [
    {
      title: "Responsive layout transformation",
      body: "Converted desktop screens into fully responsive layouts that adapt smoothly across all screen sizes.",
    },
    {
      title: "Mobile-first usability improvements",
      body: "Enhanced navigation, spacing, and touch interactions to create a smoother, app-like experience on mobile devices.",
    },
  ],

  featuresImage: "/projects/case-study/prep-plate-features.png",

  outcomes: [
    {
      value: "Improved UX",
      desc: "Better usability and navigation on mobile devices",
    },
    {
      value: "Fully responsive",
      desc: "Consistent experience across screen sizes",
    },
    {
      value: "Enhanced clarity",
      desc: "Cleaner layout and improved content readability",
    },
  ],

  reflection:
    "This project strengthened my understanding of responsive design beyond basic breakpoints. I learned how to adapt a desktop-focused interface into a mobile-friendly experience while preserving functionality and improving usability.",
};
