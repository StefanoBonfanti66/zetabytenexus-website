import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import FrameworkSection from './components/FrameworkSection'
import WhatWeBuildSection from './components/WhatWeBuildSection'
import WhySection from './components/WhySection'
// import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FrameworkSection />
        <WhatWeBuildSection />
        <WhySection />
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">Contact</h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              Form contact temporarily unavailable. Check server logs for errors.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
