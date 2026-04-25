# Troubleshooting Guide

Common issues and solutions for the Portfolio Template.

## Installation Issues

### Issue: "Module not found" errors

**Symptoms:**
```
Error: Cannot find module 'react'
ModuleNotFoundError: Module not found
```

**Solutions:**
1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   pnpm install
   # or
   npm install
   ```

2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

3. Check Node.js version (must be 20+):
   ```bash
   node --version
   ```

### Issue: TypeScript errors during build

**Symptoms:**
```
Type error: Property 'xyz' does not exist on type...
```

**Solutions:**
1. Run TypeScript check locally:
   ```bash
   npx tsc --noEmit
   ```

2. Fix the specific type errors shown

3. If it's a false positive, add `@ts-ignore` comment above the line

## Theme & Styling Issues

### Issue: Theme toggle not working

**Solutions:**
1. Clear browser cache and hard refresh (Ctrl+Shift+R)
2. Check browser console for errors
3. Verify `ThemeProvider` is wrapping your app in `page.tsx`
4. Ensure localStorage is enabled in browser

### Issue: Colors not updating after change

**Solutions:**
1. Restart dev server:
   ```bash
   Ctrl+C
   pnpm dev
   ```

2. Clear `.next` cache:
   ```bash
   rm -rf .next
   pnpm dev
   ```

3. Hard refresh browser (Ctrl+Shift+R)

### Issue: Dark mode looks broken

**Solutions:**
1. Check dark mode colors in `config/theme.ts`
2. Ensure both light and dark variants are defined
3. Test system dark mode preference
4. Manually toggle to dark mode and check

## Contact Form Issues

### Issue: Contact form not sending emails

**Symptoms:**
- Form submits but no email received
- Error message appears

**Solutions:**

1. **Check Resend API Key:**
   ```bash
   # In .env.local
   RESEND_API_KEY=re_xxxxx  # Should start with re_
   ```

2. **Verify API key is valid:**
   - Go to [Resend Dashboard](https://resend.com/api-keys)
   - Check if key is active
   - Try regenerating the key

3. **Check Resend domain verification:**
   - Verified domains required for sending
   - Add and verify domain in Resend dashboard

4. **Check server logs:**
   ```bash
   # Look at terminal output when submitting form
   ```

5. **Test API key:**
   ```bash
   curl -X POST https://api.resend.com/emails \
     -H "Authorization: Bearer re_xxxxx" \
     -H "Content-Type: application/json" \
     -d '{"from":"test@yourdomain.com","to":"test@example.com","subject":"Test","html":"Test"}'
   ```

### Issue: Getting "Unauthorized" error

**Solutions:**
1. API key is incorrect or expired
2. Regenerate API key in Resend dashboard
3. Update `.env.local` and restart server
4. Update environment variables in Vercel

## Image Issues

### Issue: Images not loading

**Symptoms:**
- Broken image icons
- 404 errors in console

**Solutions:**

1. **Check file location:**
   - Images must be in `public/` folder
   - Path should be relative to `public/`
   ```typescript
   // Correct
   imageUrl: "projects/my-project.webp"
   
   // Wrong
   imageUrl: "/public/projects/my-project.webp"
   ```

2. **Check file extension:**
   - Ensure extension matches exactly (.webp vs .png)
   - File extensions are case-sensitive

3. **Restart dev server:**
   ```bash
   pnpm dev
   ```

4. **Clear browser cache**

### Issue: Images appear blurry

**Solutions:**
1. Use higher resolution images
2. Convert to WebP format for better quality/size ratio
3. Check image dimensions match display size

### Issue: Large image files slowing down site

**Solutions:**
1. Compress images using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   
2. Convert to WebP format
3. Aim for < 200KB per image

## Build & Deployment Issues

### Issue: Build fails on Vercel

**Symptoms:**
```
Error: Command "npm run build" exited with 1
```

**Solutions:**

1. **Test build locally:**
   ```bash
   pnpm build
   ```

2. **Check build logs in Vercel:**
   - Go to Deployments tab
   - Click failed deployment
   - View full logs

3. **Common causes:**
   - TypeScript errors
   - Missing environment variables
   - Out of memory (large projects)

4. **Fix environment variables:**
   - Add all required vars in Vercel Settings
   - Ensure no typos in variable names

### Issue: Site deployed but shows old content

**Solutions:**
1. Force new deployment:
   - Go to Vercel > Deployments
   - Click "Redeploy" on latest

2. Clear CDN cache:
   - Wait a few minutes (Vercel caches globally)
   - Use incognito mode to test

3. Check you're on correct branch

### Issue: 404 on project pages

**Solutions:**
1. Check dynamic route structure:
   - Folder should be `app/projects/[id]/page.tsx`
   
2. Verify project IDs match

3. Rebuild and redeploy

## Performance Issues

### Issue: Slow page load

**Solutions:**

1. **Optimize images:**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Check bundle size:**
   ```bash
   pnpm build
   # Check .next/static/chunks size
   ```

3. **Enable compression:**
   - Vercel handles this automatically

4. **Use Next.js Image component:**
   ```typescript
   import Image from 'next/image';
   ```

### Issue: Poor Lighthouse score

**Solutions:**

1. **Run audit:**
   - Chrome DevTools > Lighthouse
   - Or [PageSpeed Insights](https://pagespeed.web.dev/)

2. **Common fixes:**
   - Optimize images
   - Reduce JavaScript bundle
   - Enable text compression
   - Preload critical resources
   - Reduce third-party scripts

## SEO Issues

### Issue: Site not appearing in Google

**Solutions:**

1. **Submit to Google Search Console:**
   - Add property
   - Verify ownership
   - Submit sitemap.xml

2. **Request indexing:**
   - URL Inspection tool
   - Request indexing

3. **Wait 1-4 weeks** for indexing

4. **Build backlinks:**
   - Share on social media
   - Add to LinkedIn profile
   - Contribute to open source

### Issue: Wrong meta tags showing

**Solutions:**

1. **Clear social media cache:**
   - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/)
   - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)

2. **Update metadata in `layout.tsx`**

3. **Redeploy**

## Development Issues

### Issue: ESLint errors

**Solutions:**

1. **Run lint to see errors:**
   ```bash
   pnpm lint
   ```

2. **Auto-fix where possible:**
   ```bash
   pnpm lint --fix
   ```

3. **Disable rule for specific line:**
   ```typescript
   // eslint-disable-next-line rule-name
   ```

### Issue: Hot reload not working

**Solutions:**

1. Restart dev server

2. Check file watchers:
   ```bash
   # On Linux
   cat /proc/sys/fs/inotify/max_user_watches
   # Should be at least 524288
   ```

3. Increase watchers if needed:
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

## Browser Compatibility Issues

### Issue: Works in Chrome but not Safari/Firefox

**Solutions:**

1. **Check for browser-specific CSS:**
   - Avoid vendor prefixes where possible
   - Test in multiple browsers

2. **Check JavaScript features:**
   - Use polyfills if needed
   - Check caniuse.com for compatibility

3. **Clear browser cache**

## Mobile Issues

### Issue: Layout broken on mobile

**Solutions:**

1. **Test in Chrome DevTools:**
   - Toggle device toolbar
   - Test various screen sizes

2. **Check responsive classes:**
   - Ensure proper use of `md:`, `lg:` breakpoints

3. **Test on real devices**

## Still Having Issues?

### Before Asking for Help:

1. - Read all relevant documentation
2. - Search existing GitHub issues
3. - Try all suggested solutions above
4. - Check browser console for errors
5. - Test in incognito mode
6. - Clear all caches

### How to Report an Issue:

When opening a GitHub issue, include:

1. **Description:** What's happening?
2. **Expected:** What should happen?
3. **Steps to reproduce:** How can we replicate it?
4. **Environment:**
   - Node.js version
   - Browser and version
   - OS
5. **Screenshots/Error messages**
6. **What you've tried**

### Where to Get Help:

- Email: mehak313naqvi@gmail.com
- LinkedIn: [linkedin.com/in/miss-kniz](https://linkedin.com/in/miss-kniz)
- GitHub Issues: [Open an issue](https://github.com/miss-kniz/portfolio-template/issues)

---

Remember: Most issues are caused by caching, environment variables, or simple typos. Always check these first!
