# moveflow-site — Agent Rules

## Project overview

Marketing and distribution site for MoveFlow, a macOS menubar app. Hosts the landing page, download binaries, and Sparkle auto-update feed.

## Architecture

```text
moveflow-site/
├── src/app/
│   ├── layout.tsx    → Root layout, fonts (Clash Display, Satoshi, JetBrains Mono)
│   ├── page.tsx      → Landing page (hero, features, CTA)
│   ├── globals.css   → Tailwind imports + custom styles
│   └── fonts/        → Local font files
├── public/
│   ├── appcast.xml   → Sparkle RSS update feed (EdDSA-signed entries)
│   └── MoveFlow-*.zip → Signed app binaries (served as static files)
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

## Key conventions

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 (utility-first, no CSS modules)
- **Animation**: Framer Motion (`motion` package) — `useInView`, `useScroll`, `AnimatePresence`
- **Icons**: Lucide React
- **Fonts**: Clash Display (headings), Satoshi (body), JetBrains Mono (code)
- **No backend**: Static site, no API routes, no database
- **Deployment**: Vercel (auto-deploys on push to main)
- **Repo visibility**: Public (no secrets in repo)

## Build & run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build
npm run start  # Serve production build
```

## appcast.xml

Sparkle auto-update feed. Each `<item>` has:
- Version numbers (`sparkle:version`, `sparkle:shortVersionString`)
- EdDSA signature (`sparkle:edSignature`)
- Download URL pointing to `public/MoveFlow-v*.zip`

Updated automatically by `MoveFlow/scripts/release.sh` — do not edit manually.

## Do not

- Add secrets, API keys, or environment variables to this repo
- Edit `appcast.xml` manually — use the release script from MoveFlow repo
- Edit `public/MoveFlow-*.zip` files — they are signed binaries
- Use CSS modules or styled-components — use Tailwind utilities
- Add a backend/API routes — this is a static marketing site
- Use Pages Router — App Router only
