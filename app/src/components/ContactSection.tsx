function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-text mb-3">
            Contatto
          </h2>
          <p className="text-base md:text-lg text-muted mb-10">
            Raccontaci cosa hai in mente. Ti rispondiamo per capire insieme se possiamo esserti utili.
          </p>

          <div className="border border-border bg-surface p-8 md:p-10 inline-block text-left w-full max-w-md">
            <p className="text-sm text-text mb-1">
              <a href="mailto:info@zetabytenexus.it"
                 className="text-accent hover:text-accent-hover no-underline transition-colors duration-200">
                info@zetabytenexus.it
              </a>
            </p>
            <p className="text-sm text-muted">
              via Mazzo, 73/B – 20017 Rho (MI)
            </p>
          </div>

          <p className="text-sm text-muted mt-10 max-w-md mx-auto leading-relaxed">
            Dopo averti ascoltato, prepariamo un preventivo chiaro con tempi e costi. Senza impegno.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
