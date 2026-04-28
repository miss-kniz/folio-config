# SEO Setup Guide

This guide shows two valid paths:

- Customize the SEO setup and keep it in the project
- Remove the SEO setup completely if you do not want to maintain it

It is recommended to keep SEO in the project because it helps search engines show your portfolio for related keywords. Good SEO can improve how your work appears in search results and make it easier for people to discover your site.

## Option 1: Customize SEO (Recommended)

Keep the SEO logic in [config/seo.ts](./config/seo.ts) and make sure `app/sitemap.ts` stays aligned with it.

### Example `config/seo.ts`

Replace the placeholder values with your own portfolio details:

```ts
export const seo = {
  siteName: "Your Name",
  title: "Your Name | Full Stack Developer",
  description:
    "Portfolio of Your Name, a full stack developer building modern web apps.",
     keywords: [
        "Important",
        "Keywords",
        "To",
        "Tell",
        "Search engine",
        "show your portfolio",
        "when that word get search"
    ]
  ogImage: "/images/og-image.png", // image which you want to show when you portfolio's link gets shared
};
```

### What to replace in `config/seo.ts`

- Replace `siteName` with your name or portfolio brand
- Replace `title` with the main SEO title you want shown in search results
- Replace `description` with a short summary of what you do
- Replace `ogImage` with your social sharing image

## Option 2: Remove SEO completely

If you do not want SEO config in the project, remove it fully instead of leaving partial files behind.

### Steps to remove SEO

1. Delete all fields in `config/seo.ts`
2. Just keep title and description
3. Delete [sitemap.ts](./app/sitemap.ts)
