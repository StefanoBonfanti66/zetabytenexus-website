const LAYERS = [
  {
    num: '01', name: 'CONFIG',
    desc: 'Regole, template e automazioni che valgono per tutti i progetti. È la base del sistema.',
    items: ['template, agenti AI, comandi, configurazioni', 'fonte: opencode-config', 'accesso: AI e umani'],
  },
  {
    num: '02', name: 'PROGETTO',
    desc: 'Il repository di ogni iniziativa con documenti operativi, cronologia e dati reali.',
    items: ['brief, preventivi, ledger, fatture', 'fonte: repo dedicato del progetto', 'accesso: team di progetto + AI'],
  },
  {
    num: '03', name: 'NAVIGAZIONE',
    desc: "La visione d'insieme che collega progetti, decisioni e conoscenza. Senza duplicare i dati.",
    items: ['MOC, overview, collegamenti', 'fonte: Obsidian ZBN-Navigator', 'uso principale: navigazione umana'],
  },
]

function LayerCard({ layer }: { layer: typeof LAYERS[number] }) {
  return (
    <div className="border border-border bg-surface p-6 md:p-8 hover:shadow-sm transition-shadow duration-200">
      <span className="font-mono text-xs text-accent tracking-wider">{layer.num}</span>
      <h3 className="font-display text-xl text-text mt-1 mb-3">{layer.name}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{layer.desc}</p>
      <ul className="text-xs text-muted space-y-1">
        {layer.items.map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-accent shrink-0">─</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FrameworkSection() {
  return (
    <section id="framework" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl w-full px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-text mb-3">
          Come funziona
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14">
          ZetaByteNexus organizza il lavoro in tre layer distinti. Ognuno ha un ruolo, nessuno si duplica.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {LAYERS.slice(0, 2).map(l => (
            <LayerCard key={l.num} layer={l} />
          ))}
        </div>

        <div className="md:flex md:justify-center mt-6 md:mt-8">
          <div className="md:w-1/2">
            {LAYERS.slice(2).map(l => (
              <LayerCard key={l.num} layer={l} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-xl md:text-2xl text-text mb-6">
            Tre layer, un metodo. Per dare struttura al lavoro reale.
          </p>
          <a href="#cosa-realizziamo"
             className="inline-block px-6 py-3 border border-text text-text text-sm no-underline hover:bg-text hover:text-bg transition-colors duration-200">
            Scopri cosa realizziamo
          </a>
        </div>
      </div>
    </section>
  )
}

export default FrameworkSection
