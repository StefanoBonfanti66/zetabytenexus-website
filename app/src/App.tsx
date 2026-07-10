import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import FrameworkSection from './components/FrameworkSection'
import WhatWeBuildSection from './components/WhatWeBuildSection'
import WhySection from './components/WhySection'
import ContactSection from './components/ContactSection'
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
