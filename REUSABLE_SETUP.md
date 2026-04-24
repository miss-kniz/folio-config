# Reusable Portfolio Setup Guide

This project is designed to be reused as a personal portfolio or as a starter template for another open-source developer portfolio.

The goal is simple:

- keep content data-driven
- avoid editing TSX files for everyday customization
- use `env.example` as the source of truth for setup
- keep `metadata` customizable separately
- allow theme changes
- optionally remove dark/light mode entirely

## What You Can Customize

You should be able to update the portfolio by editing:

- `env.example` or your local `.env.local`
- your content/data source files
- theme values in the global styling setup
- metadata in the app layout

You should not need to edit page component TSX files for normal content changes.

## Quick Start

1. Install dependencies.
2. Copy `env.example` to `.env.local`.
3. Fill in your personal or project data.
4. Run the development server.

## Environment Setup

Use `env.example` as your setup reference. Each value in that file should be replaced with your own data in `.env.local`.

Recommended flow:

1. Open `env.example`.
2. Copy all variables into `.env.local`.
3. Replace the placeholder values with your own information.
4. Restart the dev server after changing environment values.

If a field is left blank, the app may fall back to a default value or hide that section depending on how the template is configured.

## Data-Driven Customization

This template is intended to be driven by data rather than hardcoded UI edits.

Typical things you should configure through data files or environment variables:

- name and title
- bio and headline
- social links
- projects
- experience
- skills
- services
- case studies
- contact details
- CTA text

If your current setup still has content hardcoded inside TSX files, move that content into a data file or environment variable first so the template remains reusable.

## Metadata Exception

Metadata is the one area that may still live in code.

If you want each portfolio clone to have its own:

- page title
- description
- Open Graph tags
- favicon or social preview setup

then update the app metadata section in your layout or metadata configuration file.

Everything else should be managed through data.

## Theme Customization

The theme should be configurable without rewriting page components.

You can usually change:

- primary color
- accent color
- background colors
- text colors
- border colors
- shadows
- gradients

Look for your Tailwind theme tokens, CSS variables, or global styles and update those values instead of changing component markup.

## Removing Dark/Light Mode

If you want a single-theme portfolio, remove the dark/light mode toggle and keep only one visual theme.

Recommended approach:

1. Remove the theme toggle UI from the header, navbar, or settings area.
2. Remove theme switching logic from client state.
3. Keep only one set of theme tokens in your global styles.
4. Remove any `dark:` utility classes that are no longer needed.
5. Make sure all text, backgrounds, cards, and borders work well in the single theme.

If you keep dark mode enabled, verify both themes after every design change.

## Suggested Reusable Structure

For a reusable template, organize content like this:

- `data/` for portfolio content
- `content/` for copy and case studies
- `config/` for site settings
- `lib/` for reusable helpers
- `app/` for routes and metadata
- `components/` for UI only

The idea is that components render data, but do not own the data itself.

## Adding Your Own Content

When replacing the template content, update the following in your data source:

- personal introduction
- project cards
- featured work
- technology stack
- testimonials
- contact information
- social profiles

Keep the component structure intact so future updates stay easy.

## Deployment

Before deploying:

1. Confirm all environment variables are set.
2. Verify metadata values.
3. Check responsive layout behavior.
4. Review theme contrast.
5. Test all external links.

## Reuse Checklist

- `env.example` is complete
- `.env.local` is filled in
- no content is hardcoded in TSX files
- metadata is configured separately
- theme values are easy to edit
- dark/light mode is either fully supported or fully removed
- all reusable content lives in data files

## Notes For Template Users

If you are cloning this repo for your own portfolio:

- update the data first
- change metadata second
- tweak the theme third
- remove unused sections last

This keeps the template clean and easy to maintain.
