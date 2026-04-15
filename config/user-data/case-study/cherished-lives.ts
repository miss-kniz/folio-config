interface CaseStudySection {
  title: string;
  body: string;
}

interface Architecture {
  description: string;
  structure: string;
}

export interface CaseStudy {
  bgImageUrl?: string;
  introduction: string;
  overview: string;
  overviewImage?: string;
  architecture: Architecture;
  challenges: CaseStudySection[];
  process: CaseStudySection[];
  features: CaseStudySection[];
  featuresImage?: string;
  outcomes: {
    value: string;
    desc: string;
  }[];
  reflection: string;
}

export const cherishedLivesCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/cherished-lives.png",

  introduction:
    "Cherished Lives is a digital memorial platform where families and friends can preserve the story of a loved one. It brings together photos, videos, written tributes, and shared memories in one place.",

  overview:
    "This project involved building the complete frontend of an online memorial platform. Users can create a dedicated page for a loved one, upload media, and share memories. I handled UI components, routing, state management, and performance optimization.",

  overviewImage: "/projects/case-study/cherished-lives-overview.png",

  architecture: {
    description:
      "The app uses Next.js App Router. Pages are organized under app and components are grouped by domain to keep related logic close to the UI.",

    structure: `
    app/ (pages)
        components/
            inputs/ (form inputs)
            layout/ (navbar, footer, wrappers)
            modals/ (dialogs)
            profile/ (memorial UI)
            ui/ (shared UI components)
        types/ (type definitions)
        utils/
            helpers/ (utility functions)
            enums/ (constant enums)
            routes/ (route definitions)
`,
  },

  challenges: [
    {
      title: "Media handling",
      body: "Handling images and videos of different sizes while keeping performance smooth required lazy loading and optimized delivery.",
    },
    {
      title: "Shared access",
      body: "Multiple users could contribute to the same memorial page. This required careful state handling and permission based UI logic.",
    },
    {
      title: "Accessibility",
      body: "Many users are older, so the interface needed clear focus states, readable typography, and full keyboard navigation.",
    },
    {
      title: "Emotional UI copy",
      body: "Messages for loading, errors, and empty states needed to feel soft and respectful, not technical or harsh.",
    },
  ],

  process: [
    {
      title: "Component planning",
      body: "I mapped all required components before starting development to identify reusable patterns early.",
    },
    {
      title: "Shared UI first",
      body: "I built reusable components like Button, Card, Input, and Modal first using shadcn as a base to keep consistency.",
    },
    {
      title: "Feature by feature",
      body: "Each feature was built end to end, including UI, API integration, and error states, before moving forward.",
    },
    {
      title: "Final polish",
      body: "I tested responsiveness and keyboard navigation, which helped catch focus issues especially in modals.",
    },
  ],

  features: [
    {
      title: "Memorial profile page",
      body: "Each person has a dedicated page with photo, biography, and timeline. Fully responsive and shareable.",
    },
    {
      title: "Tribute wall",
      body: "A feed where users can post tributes with moderation support for the page owner.",
    },
    {
      title: "Media gallery",
      body: "A grid for photos and videos with a lightbox view and upload progress indicators.",
    },
    {
      title: "Dashboard",
      body: "An admin panel to manage multiple memorial pages with quick actions and overview cards.",
    },
  ],

  featuresImage: "/projects/case-study/cherished-lives-features.png",

  outcomes: [
    {
      value: "100%",
      desc: "Responsive across all screen sizes",
    },
    {
      value: "5",
      desc: "Core technologies used",
    },
    {
      value: "210M+",
      desc: "Users reached globally through the platform",
    },
  ],

  reflection:
    "This project changed how I approach frontend work. I started paying more attention to user emotions, not just functionality. It also improved how I structure large Next.js applications.",
};
