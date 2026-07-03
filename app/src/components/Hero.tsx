function FrameworkDiagram() {
  return (
    <div className="flex flex-col items-center w-full max-w-[260px]">
      <div className="self-end w-[80%] border border-border bg-surface-alt/80 backdrop-blur-sm p-4 z-30">
        <div className="text-xs font-mono tracking-wider text-accent mb-0.5">CONFIG</div>
        <div className="text-[10px] text-muted">regole e template</div>
      </div>
      <div className="-mt-4 w-[92%] border border-accent/30 bg-accent/10 backdrop-blur-sm p-5 z-20">
        <div className="text-xs font-mono tracking-wider text-accent mb-0.5">PROGETTO</div>
        <div className="text-[10px] text-muted">dati e documenti operativi</div>
      </div>
      <div className="-mt-4 self-start w-[80%] border border-border bg-surface-alt/80 backdrop-blur-sm p-4 z-10">
        <div className="text-xs font-mono tracking-wider text-accent mb-0.5">NAVIGAZIONE</div>
        <div className="text-[10px] text-muted">knowledge semantico</div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center py-20 md:py-24">
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-text leading-tight">
              Progettare, sviluppare, documentare.<br />
              <span className="text-accent">Con un metodo solo.</span>
            </h1>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
              ZetaByteNexus unisce documentazione, automazione e knowledge layer in un ecosistema unico. Niente processi astratti, solo ciò che serve.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact"
                 className="inline-block px-6 py-3 bg-accent text-white text-sm no-underline hover:bg-accent-hover transition-colors duration-200">
                Parlane con noi
              </a>
              <a href="#framework"
                 className="inline-block px-6 py-3 border border-text text-text text-sm no-underline hover:bg-text hover:text-bg transition-colors duration-200">
                Scopri il metodo
              </a>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center items-center">
            <img
              src="/img-homepage.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none select-none"
              aria-hidden="true"
              loading="lazy"
            />
            <FrameworkDiagram />
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-12">
          <FrameworkDiagram />
        </div>
      </div>
    </section>
  )
}

export default Hero
