const URL_WHATSAPP = 'https://wa.me/5581999999999'

function ArrowIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CtaSection() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden bg-mf-navy px-6 py-16 text-mf-white sm:py-20 lg:px-12"
      aria-labelledby="cta-titulo"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex w-[min(100%,28rem)] items-center justify-end sm:w-[min(100%,32rem)] lg:w-[min(100%,36rem)]"
        aria-hidden
      >
        <img
          src="/icone.svg"
          alt=""
          className="h-[min(55vh,18rem)] w-auto max-w-none translate-x-[18%] object-contain opacity-[0.14] min-[400px]:h-[min(65vh,22rem)] min-[400px]:opacity-[0.18] sm:h-[min(75vh,28rem)] sm:translate-x-[10%] sm:opacity-[0.22] lg:h-[min(80vh,32rem)] lg:translate-x-0"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl pr-[min(42%,9rem)] max-[380px]:pr-3 sm:pr-[min(28%,7rem)] lg:pr-6">
        <p className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.22em] text-mf-sky uppercase">
          <span className="h-px w-10 shrink-0 bg-mf-sky/70" aria-hidden />
          Contato
        </p>
        <h2
          id="cta-titulo"
          className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl"
        >
          Pronto para encontrar o seu{' '}
          <span className="text-mf-sky">próximo lar</span>?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mf-ice/85 sm:text-lg">
          Fale com a nossa equipe no WhatsApp. Respondemos com clareza sobre
          imóveis, visitas e próximos passos — sem pressão.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={URL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-mf-blue px-6 py-3.5 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
          >
            Chamar no WhatsApp
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
