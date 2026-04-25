// ========================================
// THEME CONFIGURATION FILE
// ========================================
// Edit this file to customize your portfolio's colors and theme
// All sections are typed for safety and autocomplete
// This is the ONLY file you need to edit for theme colors

export interface ThemeColors {
  // Light Theme Colors
  light: {
    background: string;      // Main background color (hex format: "#ffffff")
    foreground: string;      // Main text color (RGB format: "14 5 22" - no # or commas)
    primary: string;         // Primary brand color (hex format: "#7b2cbf")
    primaryLight: string;    // Lighter version of primary (for hovers, backgrounds)
    primaryDark: string;     // Darker version of primary (for active states)
    blackLight: string;      // Secondary text color
    glass: string;           // Glass effect background (rgba format)
  };
  
  // Dark Theme Colors
  dark: {
    background: string;      // Main background color for dark mode
    foreground: string;      // Main text color for dark mode (RGB format)
    primary: string;         // Primary brand color (can be same as light)
    primaryLight: string;    // Lighter version for dark mode
    primaryDark: string;     // Darker version for dark mode
    blackLight: string;      // Secondary text color for dark mode
    glass: string;           // Glass effect for dark mode
  };
}

// ========================================
// THEME SETTINGS
// ========================================

export const themeSettings = {
  // Enable/disable theme toggle button in navbar
  enableThemeToggle: true,
  
  // Default theme behavior: 'system' | 'light' | 'dark'
  // 'system' = follows user's device preference
  defaultTheme: "system" as "system" | "light" | "dark",
  
  // Allow users to override system theme with manual toggle
  allowManualOverride: true,
};

// ========================================
// COLOR PRESETS (Optional - Uncomment to use)
// ========================================

// Blue Theme Preset
/*
export const blueTheme: ThemeColors = {
  light: {
    background: "#ffffff",
    foreground: "15 23 42",
    primary: "#2563eb",
    primaryLight: "#2563eb1a",
    primaryDark: "#1d4ed8",
    blackLight: "#64748b",
    glass: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    background: "#0f172a",
    foreground: "226 232 240",
    primary: "#3b82f6",
    primaryLight: "#3b82f633",
    primaryDark: "#60a5fa",
    blackLight: "#94a3b8",
    glass: "rgba(15, 23, 42, 0.05)",
  },
};
*/

// Green Theme Preset
/*
export const greenTheme: ThemeColors = {
  light: {
    background: "#fafafa",
    foreground: "15 23 42",
    primary: "#059669",
    primaryLight: "#0596691a",
    primaryDark: "#047857",
    blackLight: "#64748b",
    glass: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    background: "#064e3b",
    foreground: "226 232 240",
    primary: "#10b981",
    primaryLight: "#10b98133",
    primaryDark: "#34d399",
    blackLight: "#94a3b8",
    glass: "rgba(6, 78, 59, 0.05)",
  },
};
*/

// Pink Theme Preset
/*
export const pinkTheme: ThemeColors = {
  light: {
    background: "#ffffff",
    foreground: "15 23 42",
    primary: "#db2777",
    primaryLight: "#db27771a",
    primaryDark: "#be185d",
    blackLight: "#64748b",
    glass: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    background: "#831843",
    foreground: "226 232 240",
    primary: "#ec4899",
    primaryLight: "#ec489933",
    primaryDark: "#f472b6",
    blackLight: "#94a3b8",
    glass: "rgba(131, 24, 67, 0.05)",
  },
};
*/

// Orange Theme Preset
/*
export const orangeTheme: ThemeColors = {
  light: {
    background: "#ffffff",
    foreground: "15 23 42",
    primary: "#ea580c",
    primaryLight: "#ea580c1a",
    primaryDark: "#c2410c",
    blackLight: "#64748b",
    glass: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    background: "#7c2d12",
    foreground: "226 232 240",
    primary: "#f97316",
    primaryLight: "#f9731633",
    primaryDark: "#fb923c",
    blackLight: "#94a3b8",
    glass: "rgba(124, 45, 18, 0.05)",
  },
};
*/

// ========================================
// CURRENT THEME (EDIT THIS SECTION)
// ========================================
// Change the colors below to customize your portfolio theme
// Only edit this section - don't modify globals.css

export const themeColors: ThemeColors = {
  light: {
    background: "#ffffff",        // Light mode background
    foreground: "14 5 22",        // Text color in RGB (no # or commas)
    primary: "#7b2cbf",           // Your brand color (purple)
    primaryLight: "#7a2cbf0f",    // Very light purple with opacity
    primaryDark: "#4a148c",       // Dark purple for hover states
    blackLight: "#666666",        // Gray for secondary text
    glass: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    background: "#0e0516",        // Dark purple-black background
    foreground: "237 237 237",    // Light gray text in RGB
    primary: "#7b2cbf",           // Same purple as light mode
    primaryLight: "#7a2cbf36",    // More visible in dark mode
    primaryDark: "#9d4edd",       // Lighter purple for dark mode contrast
    blackLight: "#99a1af",        // Cool gray for secondary text
    glass: "rgba(14, 5, 22, 0.05)",
  },
};
