# PROJECT_AI_NOTES.md — zetabytenexus-website

## Scopo

Landing page istituzionale di ZetaByteNexus: presentazione del framework e del
metodo ZetaByteNexus, canale di contatto/lead.

## Stack

- React 19 + TypeScript + Vite 6 + TailwindCSS v4
- Deploy target: Vercel (progetto `zetabytenexus`, alias `www.zetabytenexus.it`)

## Stato attuale — 2026-06-26

- **Homepage completa** — build pulita (0 errori, 0 warning), QA passed
- 7 sezioni: Hero, ProblemSection, FrameworkSection, WhatWeBuildSection,
  WhySection, ContactSection, Footer + Header
- Design system: palette petrolio/warm-white/antracite, IBM Plex Serif + Inter
- Favicon brandizzata ZBN con supporto dark mode
- Responsive desktop + mobile, menu accessibile, anchor navigation nativa
- Pronta per deploy su dominio zetabytenexus.it

## Vincoli fase 1

- Solo frontend statico, nessun backend
- Form contatti non operativo (solo CTA + email + eventuali riferimenti diretti)
- Singola pagina verticale, nessun routing interno
- Contenuti hardcoded in React, nessun CMS
- No dark mode, no multi-lingua, no animazioni complesse

## Decisioni approvate

- **Tono**: sobrio, tecnico, autorevole, industrial-luxury
- **Palette**: bianco sporco + antracite + accento petrolio (#3a5a5c)
- **Tipografia**: serif per titoli (IBM Plex Serif), sans per corpo (Inter)
- **Struttura pagina**: Header → Hero → Problem → Framework → "Cosa realizziamo" → Why ZBN → Contact → Footer
- **Logo**: logo-azienda.png (provvisorio)
- **Repo separato da opencode-config**: sì
- **Obsidian**: solo nota overview, nessun duplicato

## Prossimi step

1. Deploy su dominio zetabytenexus.it (Vercel o GitHub Pages)
2. Eventuale form contatti funzionante (fase 2)
3. Eventuali ritocchi SEO e performance
