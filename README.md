# Portfolio Reusable Open-Source Template

A modern, data-driven portfolio template built with Next.js 16, TypeScript, and Tailwind CSS v4. Designed for developers who want a professional portfolio that's easy to customize in under an hour.

## Features

### Core Features
- **Data-Driven Design** - All content is managed through configuration files, no need to edit components
- **Theme System** - Automatic dark/light mode with manual toggle and system preference detection
- **Fully Responsive** - Works perfectly on all devices
- **SEO Optimized** - Built-in metadata, Open Graph, and structured data
- **Type-Safe** - Full TypeScript support with autocomplete
- **Modern Stack** - Next.js 16, Tailwind CSS v4, Framer Motion

### Sections Included
- **Hero Section** - Bold headline with availability status and CTAs
- **About Section** - Personal story with journey modal
- **Projects Section** - Filterable project showcase with case studies
- **Skills/Services Section** - Toggle between skills display or services (for freelancers)
- **Contact Section** - Contact form with email integration
- **Footer** - Social links and navigation

## Project Structure

```
portfolio-template/
├── config/
│   ├── theme.ts          # Theme colors and settings
│   └── user-data/        # All your content goes here
│       ├── about.ts      # Personal info, hero, contact
│       ├── projects.ts   # Projects and case studies
│       ├── skills.ts     # Skills configuration
│       └── services.ts   # Services (for freelancers)
├── components/
│   ├── ThemeProvider.tsx # Theme management
│   ├── ThemeToggle.tsx   # Theme toggle button
│   ├── Navbar.tsx        # Navigation bar
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── app/
│   ├── layout.tsx        # Root layout with SEO
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── projects/[id]/    # Project detail pages
└── public/               # Images and static assets
```

## Quick Start

### Prerequisites
- Node.js 20+ installed
- pnpm or npm package manager

### Installation

1. **Clone or fork this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your values (see [Environment Setup](#environment-setup))

4. **Customize your content**
   - Edit `config/user-data/about.ts` for personal information
   - Edit `config/user-data/projects.ts` for your projects
   - Edit `config/theme.ts` for colors and theme settings

5. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

6. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

## Customization Guide

### 1. Personal Information
Edit `config/user-data/about.ts`:
```typescript
export const aboutData: AboutData = {
  name: "Your Name",
  title: "Your Title",
  hero: {
    headline: "Your Headline",
    // ... more settings
  },
  // ... rest of your info
};
```

### 2. Projects
Edit `config/user-data/projects.ts`:
```typescript
export const projects: ProjectItem[] = [
  {
    id: "project-id",
    title: "Project Name",
    description: "Description",
    technologies: ["React", "Next.js"],
    // ... more details
  },
];
```

### 3. Theme Colors
Edit `config/theme.ts`:
```typescript
export const themeColors: ThemeColors = {
  light: {
    background: "#ffffff",
    primary: "#your-brand-color",
    // ... more colors
  },
  dark: {
    background: "#0e0516",
    primary: "#your-brand-color",
    // ... more colors
  },
};
```

### 4. Theme Settings
Control theme behavior in `config/theme.ts`:
```typescript
export const themeSettings = {
  enableThemeToggle: true,      // Show/hide theme toggle
  defaultTheme: "system",       // "system" | "light" | "dark"
  allowManualOverride: true,    // Allow users to override system
};
```

## Environment Setup

Create a `.env.local` file based on `env.example`:

```bash
# Email service for contact form (get from https://resend.com)
RESEND_API_KEY=your_resend_api_key

# Your deployed URL (update after deployment)
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Getting Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new key and copy it to `.env.local`

## Documentation Files

| File | Purpose |
|------|---------|
| `GETTING_STARTED.md` | Step-by-step setup guide |
| `STYLE_GUIDE.md` | Theme customization guide |
| `SEO_GUIDE.md` | SEO optimization instructions |
| `DEPLOYMENT.md` | Deployment instructions for Vercel |
| `TROUBLESHOOTING.md` | Common issues and solutions |

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_BASE_URL`
5. Click Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## What You Can Customize Without Touching Code

- Personal information (name, title, bio)  
- Hero section text and CTAs  
- Projects and case studies  
- Skills and their categories  
- Services (if freelancing)  
- Contact information  
- Social media links  
- Theme colors (primary, background, etc.)  
- Fonts and typography  
- Navigation structure  

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Phosphor React + Remix Icon
- **Email**: Resend
- **Deployment**: Vercel

## Support

If you like this template, consider:
- Starring this repository
- Following me on [LinkedIn](https://linkedin.com/in/miss-kniz)

### Need Help?
- Email: mehak313naqvi@gmail.com
- LinkedIn: [linkedin.com/in/miss-kniz](https://linkedin.com/in/miss-kniz)
- Issues: [Open an issue](https://github.com/miss-kniz/portfolio-template/issues)

### Want to Support Me?
Just hit follow on LinkedIn or GitHub!

## License

This project is open source and available under the MIT License.

---

Made with love by [Mehak Fatima Naqvi](https://linkedin.com/in/miss-kniz)
