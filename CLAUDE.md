# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**woor-arts** is a digital art portfolio and freelance marketplace for an illustrator. Visitors browse artwork by category, view the artist's profile/certifications, explore commercial/commission workflow, and find the artist on Fiverr, Upwork, and social media (IG, Pinterest, Behance, FB).

Monorepo with two packages:
- `server/` — Express + Sequelize REST API (Node.js)
- `client/` — React (CRA) frontend with TailwindCSS

### UI Layout (from `mockup/`)
- **Navbar:** LOGO | MASSAGE ME | HOME
- **Sidenav:** ABOUT ME | BUSINESS AND COMMERCIAL | SOCIAL MEDIA | CHECK AND CHECK
- **Home:** Art category grid — Surrealism (center), Trippy, Psychedelic, Fantasy, Abstract, Pop Art/Cartoon, NFT, Fan Art/Fun Art
- **About Me:** Artist photo + bio, certifications
- **Business & Commercial:** Commission workflow (brief → concept → sketch → delivery), downloadable PDF/ISO, Fiverr & Upwork links
- **Social Media:** IG, Pinterest, Behance, FB links

Artwork images live in `client/src/assets/` (70+ files, mix of JPG/PNG).

---

## Commands

### Server (`server/`)
```bash
npm run dev          # Start with nodemon (NODE_ENV=development)
npm test             # Jest with coverage, runInBand, forceExit
npm run init-db:dev  # Drop, create, migrate, and seed the dev DB (PostgreSQL)
npm run init-db:test # Drop, create, and migrate the test DB (MySQL)
```

### Client (`client/`)
```bash
npm start            # CRA dev server
npm run build        # Production build
npm test             # Jest in interactive watch mode
npm run build:css    # Compile TailwindCSS → src/style/main.css
npm run build:watch  # Watch TailwindCSS
```

---

## Architecture

### Backend (MVC, Express + Sequelize)

- **Entry:** `server/app.js` — Express app with CORS/JSON middleware on port 3000
- **Routes:** `server/routes/index.js` — Single router for `/users`, `/categories`, `/arts`
- **Controllers:** `server/controllers/` — Business logic for users (register/login), categories (CRUD), and arts (CRUD with validation)
- **Models:** `server/models/` — Sequelize models: `User`, `Category`, `Art`, `Mail`
  - `Art` belongs to `Category` (FK `category_id`, cascade delete)
  - `User.role` defaults to `"Admin"`
- **Helpers:**
  - `server/helpers/jwt.js` — token sign/verify (secret is currently hardcoded)
  - `server/helpers/bcrypt.js` — password hash (10 rounds) and compare
- **DB config:** `server/config/config.json` — dev uses PostgreSQL; test/production use MySQL

### Frontend (React CRA + Redux + TailwindCSS)

- **Entry:** `client/src/index.js` → `App.js` (BrowserRouter, single route to `Home`)
- **Views:** `client/src/views/Home.js` — main landing page grid layout
- **Components:** `client/src/components/` — `Navbar.js`, `Sidenav.js` (both use Headless UI Transition for mobile responsiveness; gray-800 theme)
- **State:** Redux + Redux Thunk (store not yet wired to views — early stage)
- **Styling:** TailwindCSS utility classes; custom theme in `client/tailwind.config.js`; PostCSS via `postcss.config.js`

### Data Flow
```
React (axios) → Express routes → Controllers → Sequelize models → PostgreSQL/MySQL
```
Controllers return plain JSON with HTTP status codes; no view templating.

---

## Key Caveats

- JWT secret and DB password are hardcoded/in `config.json`. Use environment variables before deploying.
- The frontend Redux store is scaffolded but not yet connected to API calls — the app is early-stage.
- Running `npm run init-db:dev` is destructive (drops the database first).
