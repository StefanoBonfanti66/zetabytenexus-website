function Footer() {
  return (
    <footer className="bg-text text-text-inverse py-12">
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-base">ZetaByteNexus</p>
          <p className="text-sm text-text-inverse/60">
            <a href="mailto:info@zetabytenexus.it"
               className="text-text-inverse/60 hover:text-text-inverse no-underline transition-colors duration-200">
              info@zetabytenexus.it
            </a>
          </p>
        </div>
        <p className="text-xs text-text-inverse/40 text-center md:text-left mt-6">
          &copy; 2026 ZetaByteNexus
        </p>
      </div>
    </footer>
  )
}

export default Footer
