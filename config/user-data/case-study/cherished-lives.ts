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
  introduction?: string;
  overview?: string;
  overviewImage?: string;
  architecture?: Architecture;
  challenges?: CaseStudySection[];
  process?: CaseStudySection[];
  features?: CaseStudySection[];
  featuresImage?: string;
  outcomes?: {
    value: string;
    desc: string;
  }[];
  reflection?: string;
}

export const cherishedLivesCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/cherished-lives.png",

  introduction:
    "Cherished Lives started from a real need: a respectful, lasting place for families to remember and celebrate the people they have lost. The idea grew into a full memorial platform where families can create rich profiles, share memories, write tributes, and stay connected around the people who mattered most.",

  overview:
    "I worked on the full-stack development of Cherished Lives, building the entire system across three separate applications — the public memorial site, an internal admin panel, and a dedicated admin API. My work covered authentication flows, profile management, media handling, access control, real-time updates, and the admin tooling used to manage users and content behind the scenes.",

  overviewImage: "/projects/case-study/cherished-lives-overview.png",

  architecture: {
    description:
      "The platform is a monorepo with three independently deployed apps. The main app handles everything users see and interact with. The admin backend is a dedicated Express API for internal operations. Each app owns its own dependencies, and the shared MongoDB database is accessed through Prisma with strict per-tenant scoping.",

    structure: `apps/
  main-app/           (Next.js 16, App Router — public site + dashboard)
    app/
      api/v1/         (REST API routes per resource)
      auth/           (login, register, verify, reset)
      dashboard/      (protected user area)
      [tagid]/        (public memorial profile pages)
    components/
      auth/           (auth flow UI)
      profile/        (profile display and editing)
      media/          (gallery, upload, slideshow)
      dashboard/      (dashboard-specific UI)
      ui/             (Radix UI primitives, shadcn pattern)
    lib/
      auth/           (NextAuth config + helpers)
      redux/api/      (13 RTK Query slices)
      email/          (SendGrid templates)
      prisma.ts       (singleton client)
    messages/         (en, es, fr, de translations)

  admin-app/          (Next.js 16 — internal admin UI)
  admin-backend/      (Express 5 — admin REST API + media processing)`,
  },

  challenges: [
    {
      title: "Access control that had to cover many scenarios",
      body: "Profiles can be fully public, private, or shared with specific people through invitations and access requests. Getting the permission logic right across API routes, middleware, and UI states without creating gaps was one of the harder parts of the build.",
    },
    {
      title: "Multi-tenant data isolation",
      body: "The platform supports white-label deployments where different brands share the same database. Every query touching users or profiles had to be scoped to the correct App ID. A missing filter meant data leaking across tenants, so I had to be consistent about this everywhere.",
    },
    {
      title: "Media uploads across two apps",
      body: "File uploads are handled by the admin backend, not the main app, because media processing (image optimization, video transcoding with FFmpeg, S3 uploads) belongs server-side. Coordinating upload flows between the two apps while keeping the user experience smooth required careful API design.",
    },
    {
      title: "Auth flows with many edge cases",
      body: "Between email/password, Google OAuth, email verification, password reset, and role-based access, the auth system had a lot of moving parts. Each flow needed to handle errors gracefully, redirect correctly, and keep the user informed at every step.",
    },
  ],

  process: [
    {
      title: "Designing the data model first",
      body: "Before writing any UI, I worked out the Prisma schema in detail — 17 models covering profiles, media, tributes, access control, invitations, and tags. Getting this right early meant the API and UI work had a stable foundation to build on.",
    },
    {
      title: "Building auth before anything else",
      body: "Authentication and session management were the first things I completed. Registration, verification, login, password reset, and Google OAuth were all working end-to-end before any feature work started.",
    },
    {
      title: "One feature slice at a time",
      body: "Each feature was built fully — API route, RTK Query integration, UI components, loading states, error handling — before moving on. This kept the product stable and prevented half-finished states from piling up.",
    },
    {
      title: "Admin tooling in parallel",
      body: "The admin backend and admin UI were developed alongside the main app so internal operations like user management, profile moderation, and tag assignment were available as soon as the main features needed them.",
    },
  ],

  features: [
    {
      title: "Memorial profiles",
      body: "Rich profile pages with biography, life events, family tree, photo and video galleries, and a tribute wall for messages from friends and family.",
    },
    {
      title: "Access control and privacy",
      body: "Profiles can be public or private. Private profiles support manager invitations and access requests, giving owners full control over who can view or contribute.",
    },
    {
      title: "Media and slideshows",
      body: "Upload photos and videos, organize them into galleries, and create memorial slideshows with background audio — all processed and stored on DigitalOcean Spaces.",
    },
    {
      title: "QR and NFC tag linking",
      body: "Physical tags (QR codes or NFC) can be linked to a profile, letting anyone scan a memorial marker and land directly on the digital tribute page.",
    },
    {
      title: "Real-time tributes and comments",
      body: "Tributes, comments, and likes update in real time across all visitors using Pusher, making memorial pages feel alive and connected.",
    },
    {
      title: "Multilingual support",
      body: "The entire platform is available in English, Spanish, French, and German, with automatic locale detection based on the visitor's location.",
    },
  ],
  featuresImage: "/projects/case-study/cherished-lives-features.png",

  outcomes: [
    {
      value: "3 apps",
      desc: "Built and maintained across the public platform, admin UI, and admin API",
    },
    {
      value: "4 languages",
      desc: "Supported with automatic locale detection across the entire platform",
    },
    {
      value: "Multi-tenant",
      desc: "White-label architecture supporting multiple brands from a single codebase",
    },
  ],

  reflection:
    "Cherished Lives was one of the more meaningful projects I have worked on — both technically and in what it represents. Building something that families will use during difficult moments pushed me to care more about reliability and clarity than I might have otherwise. Every auth edge case, every missing loading state, and every confusing flow mattered more than usual. That kept the bar high throughout.",
};
