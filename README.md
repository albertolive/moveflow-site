# MoveFlow Site

Marketing and distribution site for [MoveFlow](https://moveflow.app) — a macOS menubar app that fights sedentary behavior.

## Stack

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Fonts**: Clash Display, Satoshi, JetBrains Mono

## What This Repo Contains

- **Marketing page** (`src/app/page.tsx`): Hero section, feature showcase, download CTA
- **Sparkle update feed** (`public/appcast.xml`): RSS feed checked by the app for auto-updates
- **Signed binaries** (`public/MoveFlow-v*.zip`): App downloads served by Vercel

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
```

## Deployment

Hosted on **Vercel** with automatic deploys on push to `main`.

- Domain: [moveflow.app](https://moveflow.app)
- Builds trigger on every push
- Static assets in `public/` (including `.zip` binaries) served as-is

## Release Flow

Releases are managed from the [MoveFlow app repo](https://github.com/albertolive/MoveFlow) (private):

```bash
# From the MoveFlow repo:
./scripts/release.sh --bump patch --push
```

This automatically:
1. Builds and signs the macOS app
2. Copies the signed `.zip` to this repo's `public/`
3. Updates `appcast.xml` with the new version + EdDSA signature
4. Commits and pushes — Vercel deploys automatically

## Repo Visibility

This repo is **public** (free Vercel tier, no secrets). The app source code lives in a private repo.
