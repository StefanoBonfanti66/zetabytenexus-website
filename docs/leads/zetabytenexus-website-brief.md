---
name: zetabytenexus-website-brief
description: Brief di posizionamento e offerta servizi del sito istituzionale ZetaByteNexus
type: lead
status: draft
created: 2026-07-20
---

# Brief — zetabytenexus-website

## Contesto

Sito istituzionale live su `www.zetabytenexus.it` (React 19 + Vite + TailwindCSS, deploy Vercel).
Obiettivo: vetrina del framework ZetaByteNexus + canale di lead generation.

I servizi oggi esposti nelle sezioni della homepage (`app/src/components/`):

- **Sviluppo software su misura** — web app, automazioni.
- **Consulenza su processi e workflow digitali**.
- **Integrazione AI/agent** per gestione lead, preventivi, amministrazione e fatturazione.

## Obiettivi

- Chiarire il posizionamento rispetto a una "piccola software house" generica.
- Tradurre le 3 aree di servizio in un'offerta leggibile per prospect non tecnici.
- Alimentare i contenuti di `docs/leads/positioning.md` e `docs/leads/pricing.md`.

## In scope

- Definizione value proposition per ciascuna area servizio.
- Coerenza con il tono già approvato (sobrio, tecnico, autorevole, industrial-luxury).
- Allineamento con la struttura pagina esistente (Hero → Problem → Framework → Cosa realizziamo → Why → Contact).

## Out of scope

- Nuove pagine o routing interno (vincolo: single page verticale).
- CMS o backend aggiuntivo.
- Dark mode / multi-lingua / animazioni complesse.

## Rischi / domande aperte

- Il sito descrive il "framework" ma non distingue chiaramente prodotto vs servizio.
- Nessun lead ancora ricevuto (`contacts` a 0 record): il messaggio va validato col primo feedback reale.
- Pricing ancora non formalizzato in `docs/leads/pricing.md`.

## Next step

1. Produrre `docs/leads/zetabytenexus-website-positioning.md` con @marketing.
2. Produrre `docs/leads/zetabytenexus-website-pricing.md` con @pricing.
3. Aggiornare `docs/_INDEX.md` per riflettere i nuovi file in `docs/leads/`.
