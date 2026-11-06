import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import HashLink from './HashLink'

/** Ajuste para os perfis reais (mantenha igual à SobreSection) */
const URL_INSTAGRAM = 'https://www.instagram.com/'
const URL_FACEBOOK = 'https://www.facebook.com/'
const URL_WHATSAPP = 'https://wa.me/5581999999999'

const navLinks = [
  { label: 'Início', hash: '#inicio' },
  { label: 'Comprar', hash: '#comprar' },
  { label: 'Sobre nós', hash: '#sobre' },
  { label: 'Depoimentos', hash: '#depoimentos' },
  { label: 'Contato', hash: '#contato' },
]

const socialLinkClass =
  'inline-flex size-10 items-center justify-center rounded-full border border-mf-white/20 text-mf-ice/90 transition-colors hover:border-mf-sky hover:bg-mf-white/10 hover:text-mf-white'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer
      className="border-t border-mf-white/10 bg-mf-navy px-6 py-14 text-mf-ice/90 lg:px-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <HashLink to="/" hash="#inicio" className="inline-block">
              <img
                src="/logoClara.svg"
                alt="Morada Fácil"
                className="h-10 w-auto sm:h-11"
                width={160}
                height={44}
              />
            </HashLink>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mf-ice/70">
              Imobiliária no Grande Recife. Atendimento humano, transparência e
              imóveis selecionados para você encontrar o lugar certo.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-mf-sky/95 uppercase">
              Navegação
            </p>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Rodapé">
              {navLinks.map((link) => (
                <HashLink
                  key={link.hash}
                  to="/"
                  hash={link.hash}
                  className="w-fit text-sm text-mf-ice/80 transition-colors hover:text-mf-white"
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-mf-sky/95 uppercase">
              Fale conosco
            </p>
            <ul className="mt-4 space-y-3 text-sm text-mf-ice/75">
              <li>
                <a
                  href={URL_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mf-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-mf-ice/60">
                  Recife e região — horário comercial
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={URL_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="size-4.5" aria-hidden />
              </a>
              <a
                href={URL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="Instagram"
              >
                <FaInstagram className="size-4.5" aria-hidden />
              </a>
              <a
                href={URL_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="Facebook"
              >
                <FaFacebook className="size-4.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-mf-white/10 pt-8 text-xs text-mf-ice/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} Morada Fácil. Todos os direitos reservados.
          </p>
          <p className="text-mf-ice/45">
            Informações e valores sujeitos a alteração sem aviso prévio.
          </p>
        </div>
      </div>
    </footer>
  )
}
