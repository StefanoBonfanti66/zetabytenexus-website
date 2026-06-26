# ZetaByteNexus — Sito ufficiale

[zetabytenexus.it](https://zetabytenexus.it)

Sito istituzionale e landing page di **ZetaByteNexus**, l'ecosistema operativo
che unisce progetti, documentazione, automazione e knowledge layer.

## Stack

- React 19 + TypeScript
- Vite 6
- TailwindCSS v4

## Struttura

- `app/` → frontend React
- `docs/` → documentazione progetto (lead, proposte, admin, fatture)
- `assets/` → brand asset (logo)
- `templates/` → template aziendali ZBN

## Documentazione

Vedi `docs/_INDEX.md` per l'indice della documentazione operativa.  
Vedi `AGENTS.md` per le istruzioni di sessione OpenCode.

## Setup locale

```bash
cd app
cp ../.env.example .env
npm install
npm run dev
```
