function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl w-full px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-text mb-3">
          Il costo del disordine
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14">
          Ogni progetto digitale si scontra prima o poi con gli stessi attriti.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="border border-border p-6 md:p-8">
            <h3 className="font-display text-lg text-accent mb-2">Documenti sparsi</h3>
            <p className="text-sm text-muted leading-relaxed">
              Brief in email, specifiche in chat, decisioni perse tra call e documenti condivisi.
              Le informazioni esistono, ma mai nel posto giusto.
            </p>
          </div>

          <div className="border border-border p-6 md:p-8">
            <h3 className="font-display text-lg text-accent mb-2">Passaggi non tracciati</h3>
            <p className="text-sm text-muted leading-relaxed">
              Dal preventivo al progetto alla consegna: ogni cambio di fase è un salto nel buio.
              Cosa è stato deciso? Cosa manca ancora?
            </p>
          </div>

          <div className="border border-border p-6 md:p-8">
            <h3 className="font-display text-lg text-accent mb-2">Troppi strumenti</h3>
            <p className="text-sm text-muted leading-relaxed">
              CRM, task board, chat, mail, storage. Ogni tool aggiunge una giuntura,
              e ogni giuntura perde contesto.
            </p>
          </div>

          <div className="border border-border p-6 md:p-8">
            <h3 className="font-display text-lg text-accent mb-2">Consegne fragili</h3>
            <p className="text-sm text-muted leading-relaxed">
              Quando la conoscenza è nella testa di una persona, il progetto si ferma con lei.
              Documentazione posticipata, mai scritta.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-xl md:text-2xl text-text mb-6">
            Non servono strumenti migliori. Serve un metodo.
          </p>
          <a href="#framework"
             className="inline-block px-6 py-3 border border-text text-text text-sm no-underline hover:bg-text hover:text-bg transition-colors duration-200">
            Scopri il framework
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
