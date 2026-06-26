import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'Framework', href: '#framework' },
  { label: 'Cosa realizziamo', href: '#cosa-realizziamo' },
  { label: 'Perché ZBN', href: '#why-zbn' },
  { label: 'Contatto', href: '#contact' },
] as const

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }

  return (
    <header className={`sticky top-0 z-50 h-16 flex items-center transition-shadow duration-200 ${
      scrolled ? 'shadow-sm' : 'shadow-none'
    } bg-bg/85 backdrop-blur-sm border-b border-border`}>
      <div className="mx-auto max-w-6xl w-full px-6 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg md:text-xl tracking-tight no-underline">
          <span className="text-accent">Z</span><span className="text-text">etaByteNexus</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href}
               className="text-sm text-muted hover:text-text no-underline transition-colors duration-200">
              {item.label}
            </a>
          ))}
          <a href="#contact"
             className="ml-4 px-4 py-2 text-sm border border-accent text-accent hover:bg-accent hover:text-white no-underline transition-colors duration-200">
            Parlane con noi
          </a>
        </nav>

        <button ref={hamburgerRef} onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-nav"
                className="md:hidden relative w-6 h-6 flex flex-col items-center justify-center gap-1">
          <span className={`block w-5 h-[1.5px] bg-text transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-text transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-text transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div onClick={closeMenu}
             className="fixed inset-0 top-16 bg-black/30 md:hidden z-40" />
      )}

      <div id="mobile-nav"
           className={`fixed top-16 right-0 w-64 bg-surface border-l border-border h-[calc(100vh-4rem)] z-50 transform transition-transform duration-200 md:hidden ${
             menuOpen ? 'translate-x-0' : 'translate-x-full'
           }`}>
        <nav className="flex flex-col p-6 gap-6">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu}
               className="text-base text-text no-underline hover:text-accent transition-colors duration-200">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}
             className="mt-4 px-4 py-2 text-sm border border-accent text-accent hover:bg-accent hover:text-white no-underline transition-colors duration-200 text-center">
            Parlane con noi
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
