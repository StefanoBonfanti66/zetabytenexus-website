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

## Current Focus — 2026-06-26

### Completato
- Creazione repo da template `triathlon-starter`
- Provisioning struttura docs standard
- Copia template aziendali e asset brand
- Installazione dipendenze

### Da fare
- Personalizzare layout e contenuti del sito istituzionale
- Definire posizionamento e offerta servizi
- Preparare pagina lead generation / contatti

### Prossimo step concreto
Aprire `docs/bootstrap.md` e `app/src/` per iniziare la personalizzazione.
