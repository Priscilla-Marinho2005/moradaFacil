import { useCallback, useEffect, useId, useRef, useState } from 'react'

const depoimentos = [
  {
    id: '1',
    texto:
      'Acompanhei do primeiro contato até a assinatura. Tudo foi explicado com calma e honestidade. Hoje moro num apartamento que realmente cabia no nosso orçamento.',
    nome: 'Marina Costa',
    detalhe: 'Boa Viagem, Recife',
  },
  {
    id: '2',
    texto:
      'Já tinha desistido de corretores que empurravam imóvel. Aqui senti que ouviram o que a gente precisava. A visita foi organizada e sem pressa.',
    nome: 'Ricardo Almeida',
    detalhe: 'Casa Forte, Recife',
  },
  {
    id: '3',
    texto:
      'Documentação e valores claros desde o início. Ninguém sumiu depois do interesse — o que mais me passou segurança na compra.',
    nome: 'Fernanda e Bruno',
    detalhe: 'São Lourenço da Mata',
  },
]

function AspasDecorativa() {
  return (
    <span
      className="mb-4 block font-serif text-5xl leading-none text-mf-blue/25"
      aria-hidden
    >
      “
    </span>
  )
}

function IconChevron(props: { dir: 'prev' | 'next'; className?: string }) {
  const d =
    props.dir === 'prev' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  )
}

export default function DepoimentosSection() {
  const total = depoimentos.length
  const [indice, setIndice] = useState(0)
  const touchInicioX = useRef<number | null>(null)
  const regionId = useId()
  const labelId = useId()

  const irPara = useCallback(
    (i: number) => {
      setIndice(((i % total) + total) % total)
    },
    [total],
  )

  const anterior = useCallback(() => irPara(indice - 1), [indice, irPara])
  const proximo = useCallback(() => irPara(indice + 1), [indice, irPara])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') anterior()
      if (e.key === 'ArrowRight') proximo()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [anterior, proximo])

  return (
    <section
      id="depoimentos"
      className="scroll-mt-24 bg-mf-ice/40 px-6 py-16 text-mf-navy sm:py-20 lg:px-12"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] text-mf-blue uppercase lg:justify-start">
          <span className="h-px w-10 shrink-0 bg-mf-blue/70" aria-hidden />
          Depoimentos
        </p>
        <h2
          id="depoimentos-titulo"
          className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-balance text-mf-navy sm:text-4xl lg:mx-0 lg:max-w-2xl lg:text-left"
        >
          O que quem já passou por aqui{' '}
          <span className="text-mf-blue">conta</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-mf-navy/70 lg:mx-0 lg:text-left">
          Histórias reais de famílias que buscaram um lugar para morar com
          tranquilidade e transparência.
        </p>

        <div
          id={regionId}
          className="mt-12"
          role="region"
          aria-roledescription="Carrossel"
          aria-labelledby={labelId}
        >
          <p id={labelId} className="sr-only">
            Depoimentos de clientes. Use os botões ou deslize para navegar.
          </p>

          <div
            className="relative"
            onTouchStart={(e) => {
              touchInicioX.current = e.touches[0]?.clientX ?? null
            }}
            onTouchEnd={(e) => {
              const start = touchInicioX.current
              touchInicioX.current = null
              if (start == null) return
              const end = e.changedTouches[0]?.clientX
              if (end == null) return
              const dx = end - start
              if (dx > 48) anterior()
              else if (dx < -48) proximo()
            }}
          >
            <div className="overflow-hidden rounded-xl">
              <ul
                className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${indice * 100}%)` }}
                aria-live="polite"
              >
                {depoimentos.map((item) => (
                  <li
                    key={item.id}
                    className="w-full shrink-0 px-0.5 sm:px-12 lg:px-16"
                  >
                    <blockquote className="mx-auto flex min-h-64 max-w-xl flex-col rounded-xl border border-mf-navy/10 bg-mf-white p-6 shadow-sm sm:min-h-72 sm:p-8">
                      <AspasDecorativa />
                      <p className="flex-1 text-base leading-relaxed text-mf-navy/80">
                        {item.texto}
                      </p>
                      <footer className="mt-6 border-t border-mf-navy/8 pt-5">
                        <p className="font-semibold text-mf-navy">{item.nome}</p>
                        <p className="mt-0.5 text-sm text-mf-navy/55">
                          {item.detalhe}
                        </p>
                      </footer>
                    </blockquote>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="absolute top-1/2 left-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-mf-navy/15 bg-mf-white text-mf-navy shadow-sm transition-colors hover:border-mf-blue hover:bg-mf-ice sm:left-1 sm:size-11"
              onClick={anterior}
              aria-label="Depoimento anterior"
            >
              <IconChevron dir="prev" className="size-5" />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-mf-navy/15 bg-mf-white text-mf-navy shadow-sm transition-colors hover:border-mf-blue hover:bg-mf-ice sm:right-1 sm:size-11"
              onClick={proximo}
              aria-label="Próximo depoimento"
            >
              <IconChevron dir="next" className="size-5" />
            </button>
          </div>

          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Escolher depoimento"
          >
            {depoimentos.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === indice}
                aria-label={`Mostrar depoimento de ${item.nome}`}
                className={`size-2.5 rounded-full transition-colors sm:size-3 ${i === indice ? 'bg-mf-blue' : 'bg-mf-navy/20 hover:bg-mf-navy/35'}`}
                onClick={() => irPara(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
