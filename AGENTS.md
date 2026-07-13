# AGENTS.md — zetabytenexus-website

This project is part of the **ZetaByteNexus** ecosystem.
Refer to `~/Scrivania/Progetti/opencode-config/AGENTS.md` for global rules.

## Project context

- **Scopo:** Sito web istituzionale ZetaByteNexus — vetrina servizi, lead generation, presentazione aziendale.
- **Stack:** React 19 + TypeScript + Vite + TailwindCSS + Vercel.
- **Repo:** `StefanoBonfanti66/zetabytenexus-website` (privato).
- **Stato:** commerciale=active / operativo=production / amministrativo=active

## Standard di progetto

- Usa la struttura `docs/` standard:
  - `docs/leads/` → brief, positioning, pricing, admin check
  - `docs/proposals/` → preventivi ed email
  - `docs/project/` → piani, kickoff, checklist
  - `docs/admin/` → cashflow, solleciti
  - `docs/invoices/` → fatture + index.md
- Template disponibili in `templates/` (copiati da opencode-config).
- Asset aziendali in `assets/` (logo, brand).
- Ledger di progetto in `docs/admin/ledger.md`.

## Agenti di riferimento

Agenti interni definiti in opencode-config:

- **@marketing** / **@pricing**: positioning e pricing in `docs/leads/*`
- **@amministrazione**: cashflow, solleciti, ledger in `docs/admin/*`
- **@fatturazione** / **@commercialista**: schede fattura e checklist fiscale

## Data Separation Principle

- Config globale vive in `opencode-config`.
- Dati reali del progetto (lead, preventivi, fatture) vivono in QUESTO repo.

## Current Focus — 2026-07-10

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

### Completato (08-07-2026 - questa sessione)
- **Icône social Instagram, LinkedIn, Facebook in Header e Footer** (commit `546c398`)
- **Fix configurazione Vercel**: creato `vercel.json` in root per build da directory `app/` (commit `a4f5562`)
- **Disabilitato CodeQL default setup** su GitHub per risolvere conflitto con workflow avanzato
- **Deploy Vercel funzionante** con icone social live su `www.zetabytenexus.it`

### Completato (10-07-2026 - fix contact form)
- **Fix root `api/contact.ts`**: sostituito stub con logica reale (Supabase insert + Resend email notification)
- **Fix `app/package.json`**: ripristinate dipendenze frontend (era vuoto `{}`)
- **Creato root `package.json`**: dipendenze API Vercel (`@supabase/supabase-js`, `@vercel/node`, `resend`)
- **Rimosso catch-all rewrite** da `app/vercel.json` (reindirizzava `/api/contact` a `index.html`)
- **Fix `opencode.json` locale**: aggiunto MCP `supabase` (mancante, sovrascriveva config globale)
- **Tabella Supabase `contacts` verificata**: esiste, 0 record
- **RLS abilitato**: tabella `contacts` protetta — solo `service_role` può inserire/leggere
- **Form contatti live e funzionante** su `https://www.zetabytenexus.it/api/contact`

### Completato (10-07-2026 - SEO + performance)
- **Meta description** keyword-optimized (155 char)
- **Open Graph** completo (type, url, title, description, image 1200x630, locale, site_name)
- **Twitter Card** (summary_large_image)
- **Canonical URL** + robots meta + theme-color
- **JSON-LD structured data**: Organization + WebSite schema
- **Img homepage**: PNG 250KB → WebP 23KB (-90%)
- **OG image** creata (1200x630, dark background)
- **Hero.tsx**: `loading="eager"` + width/height espliciti (evita CLS)

### Completato (10-07-2026 - Hero layout)
- **Img-homepage.webp spostata** dalla colonna destra (dietro FrameworkDiagram, opacità 20%) a sopra il titolo "Progettare, sviluppare" nella colonna sinistra
- **Rimosso** l'`<img>` assoluto dalla colonna destra
- **Build QA**: 0 errori, 0 warning
- **Deploy Vercel live** su `www.zetabytenexus.it`

### In corso
- Definire posizionamento e offerta servizi in `docs/leads/`

### Prossimo step concreto
- Definire posizionamento e offerta servizi — creare brief in `docs/leads/` con @marketing
