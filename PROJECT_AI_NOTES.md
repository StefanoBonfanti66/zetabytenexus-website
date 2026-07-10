# PROJECT_AI_NOTES.md — zetabytenexus-website

## Scopo

Landing page istituzionale di ZetaByteNexus: presentazione del framework e del
metodo ZetaByteNexus, canale di contatto/lead.

## Stack

- React 19 + TypeScript + Vite 6 + TailwindCSS v4
- Deploy: Vercel (progetto `zetabytenexus`, dominio `www.zetabytenexus.it`)
- Backend: API route Vercel (`/api/contact`) con Supabase (tabella `contacts`) + Resend (email notification)
- MCP: Supabase, Playwright, DuckDuckGo, filesystem configurati in `opencode.json`

## Stato attuale — 2026-07-10

**Homepage live su `www.zetabytenexus.it`:**
- 7 sezioni: Hero, ProblemSection, FrameworkSection, WhatWeBuildSection, WhySection, ContactSection + Header/Footer
- Design system: palette petrolio/warm-white/antracite, IBM Plex Serif + Inter
- Favicon brandizzata ZBN con supporto dark mode
- Responsive desktop + mobile, menu accessibile con aria + ESC focus management
- Anchor navigation nativa con scroll-padding-top

**Form contatti funzionante:**
- Endpoint `/api/contact` con Supabase insert (tabella `contacts`) + Resend (notifica email)
- RLS attivo: solo `service_role` può inserire/leggere
- Catch-all rewrite rimosso da `vercel.json` (bloccava le API route)

**SEO / Performance:**
- Meta description keyword-optimized (155 char)
- Open Graph completo (type, url, title, description, image 1200x630, locale, site_name)
- Twitter Card (summary_large_image)
- Canonical URL + robots meta + theme-color
- JSON-LD structured data: Organization + WebSite schema
- Sitemap.xml + robots.txt serviti staticamente
- Immagine homepage: PNG 250KB → WebP 23KB (-90%)
- OG image creata (1200x630, dark background)
- Hero: `loading="eager"` + width/height espliciti (evita CLS)

**Layout Hero:**
- Immagine spostata dalla colonna destra (dietro FrameworkDiagram) a sopra il titolo nella colonna sinistra

**Social:**
- Icone Instagram, LinkedIn, Facebook in Header e Footer

**Infrastruttura:**
- Vercel: Deployment Protection disabilitata (accesso pubblico senza login)
- `vercel.json` con build da `app/`
- Fix CSS layers per evitare override Tailwind
- Build QA sempre pulita (0 errori, 0 warning)

## Vincoli attuali

- Singola pagina verticale, nessun routing interno
- Contenuti hardcoded in React, nessun CMS
- No dark mode, no multi-lingua, no animazioni complesse
- Tabella `contacts` Supabase: 0 record (nessun lead ricevuto)

## Decisioni approvate

- **Tono**: sobrio, tecnico, autorevole, industrial-luxury
- **Palette**: bianco sporco + antracite + accento petrolio (#3a5a5c)
- **Tipografia**: serif per titoli (IBM Plex Serif), sans per corpo (Inter)
- **Struttura pagina**: Header → Hero → Problem → Framework → "Cosa realizziamo" → Why ZBN → Contact → Footer
- **Logo**: logo-azienda.png (provvisorio)
- **Repo separato da opencode-config**: sì
- **Obsidian**: solo nota overview, nessun duplicato
- **Backend contact form**: Supabase (dati) + Resend (notifica), nessun DB dedicato
- **SEO**: approccio statico (meta, OG, JSON-LD), no plugin/server-side

## Prossimi step

1. **Definire posizionamento e offerta servizi** → `docs/leads/` (brief, positioning, pricing)
2. **Sitemap/robots dinamici** (opzionale) se si aggiungono pagine
3. **Monitoraggio lead** → verificare record `contacts` su Supabase
4. **Eventuale blog/casi studio** in fasi successive
