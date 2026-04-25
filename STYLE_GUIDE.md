# Style & Theme Customization Guide

This guide explains how to customize the visual appearance of your portfolio.

## Theme System Overview

The portfolio uses CSS variables and a theme configuration file for easy customization. The theme system supports:
- Light mode
- Dark mode  
- System preference detection
- Manual theme toggle

## Files Involved

| File | Purpose |
|------|---------|
| `config/theme.ts` | Main theme configuration (colors, settings) |
| `app/globals.css` | Global styles with CSS variables |
| `components/ThemeProvider.tsx` | Theme logic and state management |
| `components/ThemeToggle.tsx` | Theme toggle button UI |

## Quick Color Changes

### Method 1: Edit config/theme.ts (Recommended)

Open `config/theme.ts` and modify the colors:

```typescript
export const themeColors: ThemeColors = {
  light: {
    background: "#ffffff",      // Main background
    foreground: "14 5 22",      // Text color (RGB format)
    primary: "#7b2cbf",         // Your brand color
    primaryLight: "#7a2cbf0f",  // Light version (for hovers)
    primaryDark: "#4a148c",     // Dark version (for active states)
    blackLight: "#666666",      // Secondary text
  },
  dark: {
    background: "#0e0516",      // Dark mode background
    foreground: "237 237 237",  // Dark mode text (RGB)
    primary: "#7b2cbf",         // Can be same or different
    primaryLight: "#7a2cbf36",  // More visible in dark mode
    primaryDark: "#9d4edd",     // Lighter for contrast
    blackLight: "#99a1af",      // Cool gray for dark mode
  },
};
```

### Method 2: Use Preset Themes

Uncomment one of the preset themes in `config/theme.ts`:

```typescript
// Blue Theme
export const blueTheme: ThemeColors = { ... };

// Green Theme  
export const greenTheme: ThemeColors = { ... };

// Pink Theme
export const pinkTheme: ThemeColors = { ... };

// Orange Theme
export const orangeTheme: ThemeColors = { ... };
```

Then replace `themeColors` with your chosen preset.

## Color Format Guide

### RGB Format (for foreground/text colors)
```typescript
foreground: "14 5 22"  // R G B without # or commas
// Used as: rgb(var(--foreground))
```

### Hex Format (for most colors)
```typescript
primary: "#7b2cbf"     // Standard hex
primaryLight: "#7a2cbf0f"  // Hex with opacity
```

### RGBA Format (for glass effects)
```typescript
glass: "rgba(255, 255, 255, 0.05)"
```

## Choosing Your Colors

### Primary Color Selection

Your primary color is your brand color. It appears in:
- Buttons
- Links
- Highlights
- Skill indicators
- Scrollbar
- Hover states

**Tips:**
- Choose a color that represents you/your brand
- Ensure it has good contrast on both light and dark backgrounds
- Test accessibility with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Background Colors

**Light Mode:**
- Use white (#ffffff) or very light colors
- Avoid pure white if you want a softer look (#fafafa, #f8f9fa)

**Dark Mode:**
- Use dark colors but not pure black (#000000)
- Good options: #0e0516, #0f172a, #1a1a2e, #16213e

### Creating Color Variants

If your primary color is `#7b2cbf`:

```javascript
// Primary Light (10-20% opacity for backgrounds)
primaryLight: "#7a2cbf0f"  // Very light
primaryLight: "#7a2cbf33"  // More visible (dark mode)

// Primary Dark (darker shade for hover/active)
primaryDark: "#4a148c"     // Much darker
primaryDark: "#9d4edd"     // Lighter (for dark mode contrast)
```

**Tools to generate variants:**
- [Coolors.co](https://coolors.co) - Color palette generator
- [Realtime Colors](https://www.realtimecolors.com) - Preview colors
- [ColorBox.io](https://www.colorbox.io) - Generate color scales

## Theme Settings

Control theme behavior in `config/theme.ts`:

```typescript
export const themeSettings = {
  // Show/hide theme toggle button in navbar
  enableThemeToggle: true,
  
  // Default theme on first visit
  // "system" = follows device preference
  // "light" = always light
  // "dark" = always dark
  defaultTheme: "system",
  
  // Allow users to manually override system theme
  allowManualOverride: true,
};
```

## How Theme Toggle Works

1. **System Mode (Default)**
   - Follows user's device/browser preference
   - Automatically switches between light/dark
   - Best for user experience

2. **Manual Override**
   - Users can click theme toggle to switch
   - Preference saved in localStorage
   - Persists across sessions

3. **Cycle Order**
   - Light → Dark → System → Light...

## Advanced Customization

### Changing Fonts

Edit `app/globals.css`:

```css
@import "https://fonts.googleapis.com/css2?family=Your+Font";

:root {
  --font-sans: "Your Font", sans-serif;
  --font-serif: "Your Serif Font", serif;
}
```

### Modifying Glass Effect

The glass effect is used on buttons and overlays:

```css
.glass-btn {
  background: rgba(255, 255, 255, 0.2);  /* Adjust opacity */
  backdrop-filter: blur(12px);           /* Adjust blur */
}
```

### Custom Animations

Add custom animations in `app/globals.css`:

```css
@keyframes your-animation {
  from { /* start state */ }
  to { /* end state */ }
}

.your-class {
  animation: your-animation 1s ease infinite;
}
```

## Responsive Considerations

Colors should work on all devices:

1. **Test on mobile** - Colors may appear different on phone screens
2. **Check contrast** - Outdoor viewing requires higher contrast
3. **Consider OLED** - Pure black (#000000) saves battery on OLED screens

## Accessibility Checklist

- [ ] Text has 4.5:1 contrast ratio minimum (WCAG AA)
- [ ] Links are distinguishable from text
- [ ] Focus states are visible
- [ ] Don't rely solely on color to convey information
- [ ] Test with color blindness simulator

**Tools:**
- [Stark](https://www.getstark.co/) - Accessibility plugin
- [Color Oracle](https://colororacle.org/) - Color blindness simulator

## Example Themes

### Professional Blue
```typescript
light: {
  background: "#ffffff",
  foreground: "15 23 42",
  primary: "#2563eb",
  primaryLight: "#2563eb1a",
  primaryDark: "#1d4ed8",
  blackLight: "#64748b",
}
```

### Creative Purple (Current)
```typescript
light: {
  background: "#ffffff",
  foreground: "14 5 22",
  primary: "#7b2cbf",
  primaryLight: "#7a2cbf0f",
  primaryDark: "#4a148c",
  blackLight: "#666666",
}
```

### Nature Green
```typescript
light: {
  background: "#fafafa",
  foreground: "15 23 42",
  primary: "#059669",
  primaryLight: "#0596691a",
  primaryDark: "#047857",
  blackLight: "#64748b",
}
```

### Bold Red
```typescript
light: {
  background: "#ffffff",
  foreground: "15 23 42",
  primary: "#dc2626",
  primaryLight: "#dc26261a",
  primaryDark: "#b91c1c",
  blackLight: "#64748b",
}
```

## Troubleshooting

### Colors not changing?
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check if you're editing the right file
4. Restart dev server

### Dark mode not working?
1. Verify `.dark` class is being applied
2. Check browser dev tools for CSS variables
3. Ensure theme toggle is enabled
4. Test system dark mode preference

### Contrast issues?
1. Use lighter/darker variants
2. Adjust foreground colors
3. Test with accessibility tools
4. Consider separate colors for light/dark modes

## 📚 Resources

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Google Fonts](https://fonts.google.com)
- [Coolors.co](https://coolors.co) - Color palettes
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Realtime Colors](https://www.realtimecolors.com) - Live preview

---

Need help? Reach out at mehak313naqvi@gmail.com or on [LinkedIn](https://linkedin.com/in/miss-kniz).
