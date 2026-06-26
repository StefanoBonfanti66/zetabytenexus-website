# Struttura Documentazione Progetto — zetabytenexus-website

## Cartelle docs/

La documentazione del progetto segue la struttura standard ZetaByteNexus:

```
docs/
├── leads/           # Lead intake, brief, positioning, pricing, admin check
│   ├── <slug>-brief.md
│   ├── <slug>-positioning.md
│   ├── <slug>-pricing.md
│   └── <slug>-admin-check.md
├── proposals/       # Preventivi ed email
│   ├── preventivo-<slug>.md
│   └── email-preventivo-<slug>.md
├── project/         # Piano, kickoff, checklist
│   ├── <slug>-plan.md
│   ├── <slug>-kickoff-interno.md
│   └── <slug>-kickoff-cliente.md
├── admin/           # Cashflow, solleciti, ledger
│   ├── <slug>-ledger.md
│   ├── <slug>-cashflow.md
│   └── <slug>-solleciti.md
└── invoices/        # Fatture PDF + index.md
    └── index.md
```

## Agenti coinvolti

| Agente | Ruolo | Documenti |
|--------|-------|-----------|
| @marketing / @pricing | Positioning, offerta, pricing | `docs/leads/*` |
| @amministrazione | Cashflow, solleciti, ledger | `docs/admin/*`, `docs/invoices/index.md` |
| @fatturazione / @commercialista | Schede fattura, checklist fiscale | Schede dati fattura |

## Primi file da compilare

- `docs/leads/<slug>-brief.md`
- `docs/leads/<slug>-positioning.md`
- `docs/leads/<slug>-pricing.md`
- `docs/project/<slug>-plan.md`
- `docs/admin/<slug>-ledger.md`
- `docs/admin/<slug>-cashflow.md`
- `docs/admin/<slug>-solleciti.md`
- `docs/invoices/index.md`

## Template disponibili

I template aziendali sono nella cartella `templates/`:
- `preventivo.md` / `preventivo-brand.html` — template preventivo
- `email-preventivo.md` — email accompagnamento preventivo
- `fattura.md` — template fattura
- `project-ledger.md` — ledger progetto
- `technical-spec.md`, `runbook.md`, `org-chart.md` — documentazione tecnica

## Asset

Logo e brand asset in `assets/`.
