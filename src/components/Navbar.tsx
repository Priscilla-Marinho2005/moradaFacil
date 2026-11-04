const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Comprar', href: '#comprar' },
  { label: 'Alugar', href: '#alugar' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-9">
      <a href="#inicio" className="shrink-0">
        <img
          src="/logoClara.svg"
          alt="Morada Fácil"
          className="h-10 w-auto sm:h-12"
        />
      </a>

      <nav
        className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-mf-ice/95 lg:flex"
        aria-label="Principal"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-mf-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contato"
        className="inline-flex items-center justify-center rounded-md bg-mf-blue px-5 py-2.5 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
      >
        Fale conosco
      </a>
    </header>
  )
}
