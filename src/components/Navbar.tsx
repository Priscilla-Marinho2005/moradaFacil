import { useCallback, useEffect, useId, useState } from 'react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Comprar', href: '#comprar' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const SCROLL_THRESHOLD_PX = 12

function IconMenu(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function IconClose(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolouPagina, setRolouPagina] = useState(false)
  const menuId = useId()

  const fecharMenu = useCallback(() => setMenuAberto(false), [])

  useEffect(() => {
    const atualizar = () => {
      setRolouPagina(window.scrollY > SCROLL_THRESHOLD_PX)
    }
    atualizar()
    window.addEventListener('scroll', atualizar, { passive: true })
    return () => window.removeEventListener('scroll', atualizar)
  }, [])

  const barraComFundo = rolouPagina || menuAberto

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 min-w-0 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out${barraComFundo ? ' border-b border-mf-white/10 bg-mf-navy/93 shadow-sm backdrop-blur-md' : ' border-b border-transparent bg-transparent'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex min-w-0 items-center justify-between gap-3 py-3 sm:gap-6 sm:py-3.5 lg:gap-9 lg:py-4">
          <a href="#inicio" className="min-w-0 shrink-0">
            <img
              src="/logoClara.svg"
              alt="Morada Fácil"
              className="h-9 w-auto sm:h-12"
              width={140}
              height={40}
            />
          </a>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-6 text-sm font-medium text-mf-ice/95 lg:flex xl:gap-8"
            aria-label="Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 transition-colors hover:text-mf-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className={`inline-flex size-10 items-center justify-center rounded-md border text-mf-ice/95 transition-colors lg:hidden ${barraComFundo ? 'border-mf-white/25 hover:border-mf-white/45 hover:bg-mf-white/10 hover:text-mf-white' : 'border-mf-white/30 hover:border-mf-white/55 hover:bg-mf-white/10 hover:text-mf-white'}`}
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
              aria-controls={menuId}
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuAberto ? (
                <IconClose className="size-5" />
              ) : (
                <IconMenu className="size-5" />
              )}
            </button>
            <a
              href="#contato"
              className="hidden items-center justify-center rounded-md bg-mf-blue px-5 py-2.5 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt lg:inline-flex"
            >
              Fale conosco
            </a>
          </div>
        </div>

        <div
          id={menuId}
          className={`border-t border-mf-white/15 pb-3 lg:hidden${menuAberto ? '' : ' hidden'}`}
          hidden={!menuAberto}
        >
          <nav className="flex flex-col gap-0.5 pt-3" aria-label="Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-mf-ice/95 no-underline transition-colors hover:bg-mf-white/10 hover:text-mf-white active:bg-mf-white/15"
                onClick={fecharMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 px-3 pb-1">
            <a
              href="#contato"
              className="flex min-h-12 w-full items-center justify-center rounded-md bg-mf-blue px-4 py-3 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
              onClick={fecharMenu}
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
