import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getListingById } from '../data/listings'
import NotFoundPage from './NotFoundPage'
import Footer from '../components/Footer'

const URL_WHATSAPP = 'https://wa.me/5581999999999'

function IconChevron(props: { dir: 'prev' | 'next'; className?: string }) {
  const d = props.dir === 'prev' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'
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

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const listing = useMemo(() => (id ? getListingById(id) : undefined), [id])

  const [idxPrincipal, setIdxPrincipal] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [id])

  useEffect(() => {
    setIdxPrincipal(0)
  }, [id])

  if (!listing) {
    return <NotFoundPage />
  }

  const fotos = listing.gallery
  const fotoAtual = fotos[idxPrincipal] ?? fotos[0]
  const tipoLabel = listing.tier === 'alto' ? 'Alto padrão' : 'Médio padrão'

  const anteriorFoto = () =>
    setIdxPrincipal((i) => (i - 1 + fotos.length) % fotos.length)
  const proximaFoto = () => setIdxPrincipal((i) => (i + 1) % fotos.length)

  return (
    <>
      <main className="bg-mf-ice/35 pb-16 pt-[calc(5rem+env(safe-area-inset-top))] text-mf-navy sm:pb-20 sm:pt-[calc(5.25rem+env(safe-area-inset-top))] lg:pt-[calc(5.75rem+env(safe-area-inset-top))]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <nav className="text-sm text-mf-navy/55" aria-label="Trilha">
            <Link to="/#comprar" className="text-mf-blue no-underline hover:underline">
              Imóveis
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-mf-navy/80">{listing.title}</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12">
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-mf-navy/10 bg-mf-white shadow-sm">
                <div className="relative aspect-4/3 bg-mf-navy/5">
                  <img
                    src={fotoAtual.imageUrl}
                    alt={fotoAtual.imageAlt}
                    className="size-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-mf-navy/85 px-2.5 py-1 text-xs font-semibold text-mf-white backdrop-blur-sm">
                      À venda
                    </span>
                    <span className="rounded-full bg-mf-white/95 px-2.5 py-1 text-xs font-semibold text-mf-navy/85">
                      {tipoLabel}
                    </span>
                  </div>
                  {fotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={anteriorFoto}
                        className="absolute top-1/2 left-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-mf-navy/10 bg-mf-white/95 text-mf-navy shadow-sm transition-colors hover:bg-mf-ice"
                        aria-label="Foto anterior"
                      >
                        <IconChevron dir="prev" className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={proximaFoto}
                        className="absolute top-1/2 right-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-mf-navy/10 bg-mf-white/95 text-mf-navy shadow-sm transition-colors hover:bg-mf-ice"
                        aria-label="Próxima foto"
                      >
                        <IconChevron dir="next" className="size-5" />
                      </button>
                      <p className="absolute bottom-3 right-3 rounded-full bg-mf-navy/75 px-2.5 py-1 text-xs font-medium text-mf-white">
                        {idxPrincipal + 1} / {fotos.length}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {fotos.length > 1 && (
                <ul className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-width:thin">
                  {fotos.map((foto, i) => (
                    <li key={foto.imageUrl} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setIdxPrincipal(i)}
                        className={`relative block size-20 overflow-hidden rounded-lg border-2 sm:size-24 ${i === idxPrincipal ? 'border-mf-blue' : 'border-transparent opacity-80 hover:opacity-100'}`}
                        aria-label={`Mostrar foto ${i + 1}`}
                        aria-current={i === idxPrincipal}
                      >
                        <img
                          src={foto.imageUrl}
                          alt=""
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="min-w-0">
              <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {listing.title}
              </h1>
              <p className="mt-2 text-lg text-mf-navy/70">
                {listing.neighborhood}, {listing.city}
              </p>
              <p className="mt-6 text-sm font-medium text-mf-navy/50">Valor</p>
              <p className="text-3xl font-bold text-mf-blue">{listing.priceLabel}</p>

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                <li className="rounded-xl border border-mf-navy/10 bg-mf-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium text-mf-navy/45">Quartos</p>
                  <p className="mt-0.5 text-lg font-semibold text-mf-navy">
                    {listing.bedrooms}
                  </p>
                </li>
                <li className="rounded-xl border border-mf-navy/10 bg-mf-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium text-mf-navy/45">Banheiros</p>
                  <p className="mt-0.5 text-lg font-semibold text-mf-navy">
                    {listing.bathrooms}
                  </p>
                </li>
                <li className="rounded-xl border border-mf-navy/10 bg-mf-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium text-mf-navy/45">Metragem</p>
                  <p className="mt-0.5 text-lg font-semibold text-mf-navy">
                    {listing.areaM2} m²
                  </p>
                </li>
                <li className="rounded-xl border border-mf-navy/10 bg-mf-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium text-mf-navy/45">Vagas</p>
                  <p className="mt-0.5 text-lg font-semibold text-mf-navy">
                    {listing.parkingSpaces}
                  </p>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={URL_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-mf-blue px-6 py-3 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
                >
                  Agendar visita no WhatsApp
                </a>
                <Link
                  to="/#contato"
                  className="inline-flex items-center justify-center rounded-md border border-mf-navy/18 bg-mf-white px-6 py-3 text-sm font-semibold text-mf-navy no-underline transition-colors hover:border-mf-blue hover:bg-mf-ice/80"
                >
                  Outras formas de contato
                </Link>
              </div>
            </div>
          </div>

          <section
            className="mt-14 scroll-mt-28 rounded-2xl border border-mf-navy/10 bg-mf-white p-6 shadow-sm sm:p-8"
            aria-labelledby="ficha-titulo"
          >
            <h2
              id="ficha-titulo"
              className="text-xl font-bold tracking-tight text-mf-navy sm:text-2xl"
            >
              Ficha técnica
            </h2>
            <p className="mt-2 text-sm text-mf-navy/60">
              Resumo das principais características. Valores e disponibilidade podem mudar —
              confirme com a equipe.
            </p>
            <dl className="mt-6 divide-y divide-mf-navy/10 rounded-xl border border-mf-navy/8">
              {listing.technicalSheet.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-sm font-medium text-mf-navy/55">{row.label}</dt>
                  <dd className="text-sm font-medium text-mf-navy sm:text-right">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12" aria-labelledby="plantas-titulo">
            <h2
              id="plantas-titulo"
              className="text-xl font-bold tracking-tight text-mf-navy sm:text-2xl"
            >
              Plantas
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-mf-navy/65">
              Ilustrações meramente decorativas para demonstração — substitua por PDFs ou
              plantas oficiais do empreendimento quando disponíveis.
            </p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {listing.floorPlans.map((planta) => (
                <li
                  key={planta.imageUrl}
                  className="overflow-hidden rounded-xl border border-mf-navy/10 bg-mf-white shadow-sm"
                >
                  <div className="aspect-4/3 bg-mf-navy/5">
                    <img
                      src={planta.imageUrl}
                      alt={planta.imageAlt}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="border-t border-mf-navy/8 px-4 py-3 text-sm font-semibold text-mf-navy">
                    {planta.title}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-10 text-center text-sm text-mf-navy/55 lg:text-left">
            <Link
              to="/#comprar"
              className="font-semibold text-mf-blue no-underline hover:underline"
            >
              ← Voltar para a lista de imóveis
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
