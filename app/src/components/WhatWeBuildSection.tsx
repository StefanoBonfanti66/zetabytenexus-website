const CATEGORIES = [
  {
    title: 'Applicazioni web su misura',
    desc: 'Sviluppo di web app, dashboard, portali interni e strumenti operativi pensati per il tuo contesto.',
    examples: ['pannelli di gestione, pianificatori, cruscotti', 'portali cliente, strumenti di reportistica'],
    stack: 'React, TypeScript, Supabase, Vercel',
  },
  {
    title: 'Automazione di processi',
    desc: 'Da lead a fattura: workflow documentati e automatizzati che riducono passaggi manuali e perdita di contesto.',
    examples: ['pipeline lead-to-cash, preventivi automatici', 'sincronizzazione tool, generatori documentali'],
    stack: 'OpenCode, Supabase, API, Gmail',
  },
  {
    title: 'AI operativa integrata',
    desc: 'Agenti AI che lavorano nei tuoi processi reali, non chatbot generici. Lead triage, documentazione, KPI.',
    examples: ['triage lead automatico, report amministrativi', 'assistenti documentali, dashboard KPI'],
    stack: 'OpenCode agents, MCP, Supabase, LLM',
  },
]

function WhatWeBuildSection() {
  return (
    <section id="cosa-realizziamo" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl w-full px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-text mb-3">
          Cosa realizziamo
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14">
          Il metodo si traduce in progetti concreti. Ognuno parte dal framework,
          si adatta al contesto e produce risultati verificabili.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map(cat => (
            <div key={cat.title} className="border border-border p-6 md:p-8">
              <h3 className="font-display text-xl text-text mb-3">{cat.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{cat.desc}</p>
              <ul className="text-xs text-muted space-y-1 mb-4">
                {cat.examples.map(ex => (
                  <li key={ex} className="flex items-start gap-2">
                    <span className="text-accent shrink-0">─</span>
                    {ex}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] font-mono text-muted/60">Stack tipico: {cat.stack}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-xl md:text-2xl text-text mb-6">
            Ogni progetto inizia con un metodo chiaro. Poi si costruisce.
          </p>
          <a href="#why-zbn"
             className="inline-block px-6 py-3 border border-text text-text text-sm no-underline hover:bg-text hover:text-bg transition-colors duration-200">
            Perché funziona
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuildSection
