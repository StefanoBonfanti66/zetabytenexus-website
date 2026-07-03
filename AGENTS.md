# AGENTS.md — zetabytenexus-website

This project is part of the **ZetaByteNexus** ecosystem.
Refer to `~/Scrivania/Progetti/opencode-config/AGENTS.md` for global rules.

## Project context

- **Scopo:** Sito web istituzionale ZetaByteNexus — vetrina servizi, lead generation, presentazione aziendale.
- **Stack:** React 19 + TypeScript + Vite + TailwindCSS + Vercel.
- **Repo:** `StefanoBonfanti66/zetabytenexus-website` (privato).

## Standard di progetto

- Usa la struttura `docs/` standard:
  - `docs/leads/` → brief, positioning, pricing, admin check
  - `docs/proposals/` → preventivi ed email
  - `docs/project/` → piani, kickoff, checklist
  - `docs/admin/` → cashflow, solleciti
  - `docs/invoices/` → fatture + index.md
- Template disponibili in `templates/` (copiati da opencode-config).
- Asset aziendali in `assets/` (logo, brand).
- Ledger di progetto in `docs/admin/zetabytenexus-website-ledger.md`.

## Agenti di riferimento

Agenti interni definiti in opencode-config:

- **@marketing** / **@pricing**: positioning e pricing in `docs/leads/*`
- **@amministrazione**: cashflow, solleciti, ledger in `docs/admin/*`
- **@fatturazione** / **@commercialista**: schede fattura e checklist fiscale

## Data Separation Principle

- Config globale vive in `opencode-config`.
- Dati reali del progetto (lead, preventivi, fatture) vivono in QUESTO repo.

## Current Focus — 2026-07-03

### Completato (sessioni precedenti)
- **Homepage istituzionale completa e live su `https://www.zetabytenexus.it`**
  - 7 sezioni + Header + Footer (Hero, ProblemSection, FrameworkSection, WhatWeBuildSection, WhySection, ContactSection)
  - Design system: palette petrolio/warm-white/antracite, IBM Plex Serif + Inter
  - Favicon brandizzata ZBN con dark mode support
  - Responsive desktop + mobile, menu accessibile con aria + ESC focus management
  - Anchor navigation nativa con scroll-padding-top
- **Build QA superata** (0 errori, 0 warning)
- **Deploy Vercel** — progetto rinominato in `zetabytenexus`, alias `www.zetabytenexus.it`
- **Fix CSS layers**: spostati stili globali in `@layer base` per evitare override su utility Tailwind
- **Fix leggibilità pulsanti**: testo cambiato da `text-text-inverse` (#e8e5e0) a `text-white` (#ffffff)
- .env copiato da .env.example

### Completato (03-07-2026)
- Disabilitata Deployment Protection su Vercel per accesso pubblico senza login
- Aggiunta immagine decorativa (`img-homepage.png`) nella Hero Section (colonna destra, opacità 20%, dietro FrameworkDiagram)
- Immagine ottimizzata da 1.3 MB a 250 KB
- Build QA superata (0 errori, 0 warning)
- Commit e push su main

### Da fare / Mancante
- Form contatti funzionante (fase 2)
- Ritocchi SEO e performance
- Definire posizionamento e offerta servizi in `docs/leads/`
- Preparare pagina lead generation / contatti
- Convertire immagine in WebP per performance migliori

### Prossimo step concreto
Verificare deploy Vercel completato, poi form contatti e lead pipeline.
