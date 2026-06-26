const POINTS = [
  {
    title: 'Un metodo, non un tool',
    desc: 'Ogni progetto parte dal framework, non da una lavagna vuota. Regole, template e automazioni sono già pronte. Si adatta al contesto e resta leggibile nel tempo.',
  },
  {
    title: 'Documentazione come parte del lavoro',
    desc: 'Non si scrive dopo. Ogni fase produce documenti operativi veri: brief, preventivi, ledger, note. La conoscenza resta nel progetto, non nelle persone.',
  },
  {
    title: 'AI nei processi reali',
    desc: 'Agenti che triage lead, aggiornano ledger, preparano bozze di fattura. Non chatbot generici: AI operativa integrata nei flussi di lavoro veri.',
  },
  {
    title: 'Source of truth, non duplicati',
    desc: 'Ogni dato vive in un solo posto: template in config, documenti nel repository, overview nel navigatore. Niente file in doppio, niente link rotti.',
  },
]

function WhySection() {
  return (
    <section id="why-zbn" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl w-full px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-text mb-3">
          Perché ZetaByteNexus
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14">
          ZetaByteNexus è un metodo operativo che usa strumenti coerenti, non sovrapposti.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {POINTS.map(p => (
            <div key={p.title} className="border border-border p-6 md:p-8">
              <h3 className="font-display text-xl text-text mb-3">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-xl md:text-2xl text-text mb-6">
            Se vuoi saperne di più o hai un progetto in mente, parliamone.
          </p>
          <a href="#contact"
             className="inline-block px-6 py-3 bg-accent text-text-inverse text-sm no-underline hover:bg-accent-hover transition-colors duration-200">
            Contatto
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhySection
