# Portfolio Template Configuration Guide

This portfolio is now **fully dynamic** and configured through a single source of truth. All your personal data, content, and settings are centralized in the `/config` directory.

## 🎯 Quick Start

### 1. Main Configuration File
Edit **`/config/site-config.ts`** to customize your entire portfolio:

```typescript
export const portfolioConfig: PortfolioConfig = {
  mode: "job-seeking", // or "freelancing"
  name: "Your Name",
  title: "Your Title",
  // ... rest of config
};
```

### 2. Change Portfolio Mode
Switch between job-seeking and freelancing modes:

```typescript
// For job applications (shows Skills section)
mode: "job-seeking"

// For freelancing clients (shows Services section)
mode: "freelancing"
```

## 📁 Configuration Structure

```
/config
├── site-config.ts          # ⭐ MAIN CONFIG - Edit this first!
└── user-data/
    ├── about.ts            # Personal info, experience, education
    ├── projects.ts         # Project portfolio
    ├── services.ts         # Services offered (for freelancing)
    ├── skills.ts           # Technical skills orbital display
    └── case-study/         # Detailed project case studies
```

## 🔧 What You Can Configure

### Site Metadata (SEO)
- Site name and description
- Domain URL
- Author name
- Keywords for SEO
- Open Graph image
- Theme color

### Personal Information
- Name and title
- Profile photo
- Contact details (email, phone, location)
- Social media links

### Hero Section
- Headline with highlighted words
- Subheadline
- CTA buttons (text + links)
- Availability badge

### About Section
- Story paragraphs
- Role titles
- Skills & interests
- Personal story/blog link

### Experience & Education
- Work history (role, company, period, description)
- Education details
- Hobbies

### Projects
- Project cards with images
- Technologies used
- Live/GitHub links
- Full case studies

### Skills (Job-seeking mode)
- Interactive orbital skill display
- Categories: Frontend, Backend, Tools, Languages
- Custom icons and colors

### Services (Freelancing mode)
- Service offerings
- Descriptions
- Pricing tiers (optional)

## 🎨 Customization Tips

### 1. Update Profile Photo
Place your photo in `/public/photo-gallery/` and update the path:
```typescript
profileImage: "/photo-gallery/my-picture.png"
```

### 2. Add/Edit Projects
In `/config/user-data/projects.ts`:
```typescript
{
  id: "my-project",
  title: "Project Name",
  description: "Brief description",
  imageUrl: "projects/my-project.webp",
  technologies: ["React", "TypeScript"],
  liveUrl: "https://...",
  githubUrl: "https://...",
}
```

### 3. Customize Skills
In `/config/user-data/skills.ts`:
- Add new skills to `BASE_SKILLS` array
- Assign to categories: `frontend`, `backend`, `tools`, `language`
- Set ring position: `inner`, `mid`, `outer`
- Provide custom icon component

### 4. Highlight Words
Use the `highlightedWords` arrays to emphasize key terms:
```typescript
hero: {
  headline: "Building Amazing Digital Products",
  highlightedWords: ["Amazing", "Digital Products"],
}
```

## 🚀 Future Template Reuse

This structure makes it easy to:
1. **Fork the template** for new portfolios
2. **Quickly customize** by editing one file
3. **Maintain consistency** across sections
4. **Add new features** without breaking existing code

### To Create a New Portfolio:
1. Copy the entire `/config` folder
2. Edit `site-config.ts` with new person's data
3. Update images in `/public`
4. Deploy!

## 📝 Best Practices

1. **Always use TypeScript interfaces** - You get autocomplete and type safety
2. **Keep images optimized** - Use WebP format when possible
3. **Test both modes** - Check job-seeking AND freelancing views
4. **Update social links** - Ensure all URLs are correct
5. **Review SEO metadata** - Customize for each person

## 🐛 Troubleshooting

### Changes not appearing?
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check browser console for errors

### TypeScript errors?
- Make sure you're following the interface shapes
- Check that all required fields are filled
- Optional fields have `?` marker

### Images not loading?
- Verify path starts with `/`
- Check file exists in `/public` folder
- Ensure correct file extension

## 📞 Support

For questions or issues, check:
- Existing config files for examples
- TypeScript interfaces for available options
- Component files to understand how data is used

---

**Happy building! 🎉**
