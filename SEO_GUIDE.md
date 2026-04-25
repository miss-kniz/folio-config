# SEO Optimization Guide

This guide explains how to optimize your portfolio for search engines.

## Files Involved

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Main SEO metadata configuration |
| `app/sitemap.ts` | XML sitemap generation |
| `public/` | Images and Open Graph assets |

## Understanding the SEO Setup

Your portfolio includes:
- **Metadata** - Title, description, keywords
- **Open Graph** - Social media preview cards
- **Structured Data** - Schema.org markup for Google
- **Sitemap** - XML sitemap for search engines
- **Google Verification** - Search Console verification

## Configuration in layout.tsx

### 1. Basic Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Professional Title",
  description: "A compelling description of who you are and what you do.",
  
  // Google Search Console verification (optional)
  verification: {
    google: "your-verification-code",
  },
  
  // Keywords for SEO
  keywords: [
    "Your Name",
    "Your Title",
    "Your Location",
    "Your Skills",
  ],
};
```

**Tips:**
- **Title**: Keep under 60 characters
- **Description**: Keep under 160 characters
- Include your name variations people might search
- Add location if targeting local opportunities

### 2. Open Graph (Social Media Preview)

```typescript
openGraph: {
  title: "Your Name Portfolio",
  description: "Your description...",
  url: "https://your-domain.com",
  siteName: "Your Name Portfolio",
  images: [
    {
      url: "https://your-domain.com/photo-gallery/portfolio.jpg",
      width: 1200,
      height: 630,
      alt: "Your Name - Professional Photo",
    },
  ],
  locale: "en_US",
  type: "website",
},
```

**Creating OG Image:**
1. Size: 1200x630 pixels (recommended)
2. Include your name and title
3. Use high-quality photo
4. Save as `public/photo-gallery/portfolio.jpg`

**Test your OG tags:**
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 3. Structured Data (Schema.org)

The template includes Person schema:

```typescript
<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Your Full Name",
      alternateName: "Your Nickname/Username",
      url: "https://your-domain.com",
      image: "https://your-domain.com/photo-gallery/portfolio.jpg",
      jobTitle: "Your Job Title",
      worksFor: {
        "@type": "Organization",
        name: "Your Company",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Your City",
        addressCountry: "Your Country Code",
      },
      sameAs: [
        "https://www.linkedin.com/in/your-profile",
        "https://github.com/your-username",
        "https://twitter.com/your-handle",
      ],
      description: "Brief professional description",
    }),
  }}
/>
```

**Test structured data:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## Getting Google Verification Code

### Step 1: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add Property"
4. Enter your domain URL
5. Choose "URL prefix" verification

### Step 2: Get Verification Code

1. Select "HTML tag" method
2. Copy the content value from the meta tag:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
3. Paste only the content value in `layout.tsx`:
   ```typescript
   verification: {
     google: "YOUR_CODE_HERE",
   },
   ```

### Step 3: Verify

Click "Verify" in Search Console after deploying your site.

## Sitemap Configuration

The template auto-generates a sitemap at `/sitemap.xml`.

Edit `app/sitemap.ts` if needed:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add project pages
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
```

**Submit sitemap to Google:**
1. Go to Google Search Console
2. Navigate to "Sitemaps"
3. Enter `sitemap.xml`
4. Click "Submit"

## SEO Best Practices

### Content Optimization

1. **Use your name consistently** across all platforms
2. **Include relevant keywords** naturally in your content
3. **Write unique descriptions** for each project
4. **Add alt text** to all images
5. **Use semantic HTML** (the template handles this)

### Technical SEO

1. **Fast loading** - Optimize images, use WebP format
2. **Mobile-friendly** - Template is already responsive
3. **HTTPS** - Vercel provides free SSL
4. **Clean URLs** - Next.js handles this automatically
5. **Canonical URLs** - Set in metadata

### Local SEO (if applicable)

1. Add your city/region in description
2. Include location in keywords
3. Mention "Remote" if open to remote work
4. Add local business schema if freelancing

## Monitoring SEO Performance

### Google Search Console

After verification, track:
- Search queries people use to find you
- Click-through rates
- Index coverage
- Mobile usability
- Core Web Vitals

### Google Analytics (Optional)

Add Google Analytics to track:
- Page views
- User behavior
- Traffic sources
- Bounce rate

## SEO Checklist

Before launching:

- [ ] Updated title and description in `layout.tsx`
- [ ] Added Google verification code (optional)
- [ ] Created Open Graph image (1200x630)
- [ ] Updated structured data with your info
- [ ] Set correct `NEXT_PUBLIC_BASE_URL` in `.env.local`
- [ ] Submitted sitemap to Google Search Console
- [ ] Tested with Google Rich Results Test
- [ ] Verified social media previews

## Common SEO Issues

### Issue: Site not appearing in search
**Solution:**
1. Submit sitemap to Google Search Console
2. Request indexing
3. Wait 1-4 weeks for indexing
4. Build backlinks (share on social media, LinkedIn)

### Issue: Wrong preview on social media
**Solution:**
1. Clear social media cache using their debug tools
2. Ensure OG image is accessible (not blocked by robots.txt)
3. Use absolute URLs for images

### Issue: Structured data errors
**Solution:**
1. Test with [Rich Results Test](https://search.google.com/test/rich-results)
2. Fix any errors shown
3. Validate JSON syntax

## Advanced SEO Tips

1. **Blog/Content**: Add a blog section for more indexed pages
2. **Case Studies**: Detailed project pages rank better
3. **Backlinks**: Guest post, contribute to open source
4. **Social Signals**: Active social media presence helps
5. **Page Speed**: Aim for 90+ on PageSpeed Insights

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/docs)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Ahrefs SEO Tutorial](https://ahrefs.com/blog/seo-tutorial/)

---

Need help? Reach out at mehak313naqvi@gmail.com or on [LinkedIn](https://linkedin.com/in/miss-kniz).
