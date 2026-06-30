# OSSFE 2027 — Website Plan

> Planning & reference doc for the OSSFE 2027 conference website.
> **Event:** Madison, Wisconsin · June 2027
> Maintained by the OSSFE board (3 members).

---

## 1. Goal

A fast, modern, **dark-themed** marketing website for OSSFE 2027 that:

- Showcases the **dynamic 2026 video montage** as an always-playing hero background.
- Leverages **high-quality 2026 photography** throughout.
- Drives three primary actions: **Register**, **Submit a talk (CFP)**, **Become a sponsor**.
- Lives online and is easy for non-frontend board members to update.

---

## 2. Tech stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Astro** | Ships ~zero JS by default; great for a content/marketing site. |
| Styling | **Tailwind CSS** | ⚠️ Astro 5 installs **Tailwind 4** (Vite plugin + CSS `@theme`, no `tailwind.config.mjs`). |
| Content | Markdown / MDX + `.astro` components | |
| Hosting | **GitHub Pages** (via GitHub Actions) | Custom domain: `ossfe.org`. |
| Prospectus PDF | **Typst** (separate) | Mirrors `/sponsors` page content; unified branding. |
| Program / schedule | **pretalx** (embed/link) | |
| Ticketing | **pretix** (link) | Configure payout account with MIT finance. |
| Newsletter | listmonk (or similar) | Email capture on site. |

---

## 3. Branding — dark theme

| Role | Color |
|---|---|
| Primary (OSSFE blue) | `#333F50` |
| Section alt (dark) | `#26303D` |
| Footer / deepest | `#1E2731` |
| Accent (CTA) | `#FFB347` amber *(alt: `#4FD1C5` teal — decide!)* |
| Text | `#FFFFFF` / `#E2E8F0` / `#94A3B8` |

- **Display font:** Coolvetica (the OSSFE logo font) — place `.woff2` in `/public/fonts/`.
- **Body font:** Inter (or system-ui).
- **Motif:** the logo's "git commit lines" reused as subtle section dividers / footer flourish.
- Reserve the **bright accent only for CTAs/highlights** — the blue alone is too low-contrast for buttons.

---

## 4. Repo structure

```
website/
├── public/
│   ├── media/
│   │   ├── hero-2026.webm        # compressed montage (VP9/AV1) ≤ ~6MB
│   │   ├── hero-2026.mp4         # H.264 fallback
│   │   └── hero-poster.jpg       # instant + mobile/reduced-motion fallback
│   ├── images/                   # gallery, speakers, sponsor logos
│   ├── fonts/                    # coolvetica.woff2
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── VideoHero.astro
│   │   ├── KeyFacts.astro
│   │   ├── About.astro
│   │   ├── Timeline.astro
│   │   ├── WhyAttend.astro
│   │   ├── Speakers.astro
│   │   ├── Gallery.astro
│   │   ├── Sponsors.astro
│   │   ├── TravelTeaser.astro
│   │   ├── FinalCTA.astro
│   │   └── Footer.astro
│   ├── layouts/Base.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
├── plan.md
└── package.json
```

---

## 5. Home page layout

1. **Nav** — sticky, transparent over hero, fills `#26303D` on scroll. Always-visible accent "Register" button.
2. **Video hero** — full viewport, 2026 montage (muted/loop/`playsinline`), `#333F50` gradient overlay, headline + 2 CTAs. Static poster fallback on **mobile** and **`prefers-reduced-motion`**.
3. **Key facts strip** — dates · location · attendee count · talks (credibility).
4. **About OSSFE** — one tight paragraph + 3 columns (Community · Open Source · Fusion).
5. **Key dates timeline** — horizontal stepper from the conference milestones.
6. **Why attend** — benefit cards (parallel tracks, invited speakers, tutorials, networking).
7. **Invited speakers** — photo grid; "more to be announced".
8. **Gallery** — "Moments from OSSFE 2026" (masonry / carousel).
9. **Sponsors** — tiered logo wall + "Become a sponsor → prospectus PDF".
10. **Travel & venue teaser** — Madison imagery; links to hotels / visa letters / family support.
11. **Final CTA band** — "Join us in Madison" + newsletter signup.
12. **Footer** — nav, socials, CoC, contact, git-commit motif.

---

## 6. Hero video — requirements checklist

- [ ] Muted + `loop` + `playsinline` + `autoplay` (browser autoplay rules).
- [ ] Short loop (~10–20 s), compressed, target **≤ 6 MB**.
- [ ] Two formats: **WebM** (VP9/AV1) + **MP4** (H.264).
- [ ] `hero-poster.jpg` for instant paint + fallback.
- [ ] Hidden on mobile (data/battery) → poster only.
- [ ] Respect `prefers-reduced-motion` → poster only.
- [ ] Dark `#333F50` gradient overlay for text legibility.
- [ ] Self-hosted static asset (no YouTube play button/branding).

---

## 7. Setup & commands

```bash
# scaffold
npm create astro@latest website -- --template minimal --typescript strict
cd website

# add tailwind (remove any @astrojs/tailwind import from astro.config.mjs FIRST)
npx astro add tailwind

# dev
npm run dev

# build
npm run build
```

Tailwind 4 reminder: global.css must begin with @import 'tailwindcss'; and use a @theme { ... } block for the palette/fonts — not the old @tailwind base/components/utilities directives. Check version with npm list astro tailwindcss.

## 8. Build phases

- [ ] **Phase 0 — Setup**: Astro + Tailwind, brand theme, deploy pipeline (GitHub Pages + Action).
- [ ] **Phase 1 — v1 "Save the Date"**: video hero, dates, venue, email signup. *(Target: ~Sept 2026)*
- [ ] **Phase 2 — v2**: CFP, registration, sponsors page + prospectus, Code of Conduct. *(~Nov 2026)*
- [ ] **Phase 3 — v3**: speakers, full program (pretalx embed), travel/venue, gallery. *(~Mar–Apr 2027)*

---

## 9. Open decisions / TODO

- [ ] Choose accent color: **amber `#FFB347`** vs **teal `#4FD1C5`**.
- [ ] Compress 2026 montage → WebM + MP4 + poster.
- [ ] Add Coolvetica `.woff2` to `/public/fonts/`.
- [ ] Confirm **photo/footage consent** for recognizable faces from 2026.
- [ ] Add `.github/workflows/deploy.yml` (GitHub Pages auto-deploy).
- [ ] Register/confirm custom domain `ossfe.org` + DNS.
- [ ] Configure pretix payout account (coordinate with MIT finance).
- [ ] Decide sponsor tiers/pricing (currency = USD; mind MIT overhead/tax).

---

## 10. Related workstreams (see master Gantt)

Website is one piece of the wider OSSFE 2027 plan, which also covers:

- Venue & logistics
- Sponsorship
- CFP (pretalx)
- Invited speakers
- Program & parallel sessions
- Registration (pretix)
- **Open-source social-media templates**
- Travel grants / scholarships
- Visa invitation letters
- Proceedings (Zenodo book of abstracts + possible Curvenote partner)
- Swag
- Childcare / family support
- Post-event report