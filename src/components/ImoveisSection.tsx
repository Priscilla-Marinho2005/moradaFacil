import { useEffect, useMemo, useState, type SelectHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { LISTINGS, type CityId, type PropertyTier, type PropertyListing } from '../data/listings'
import { listingDetailPath } from '../routes'
import ScrollReveal from './ScrollReveal'

const ALL = '__all__' as const

const LISTAGEM_INICIAL = 6

const CIDADES: { value: CityId; label: string }[] = [
    { value: 'Recife', label: 'Recife' },
    { value: 'São Lourenço da Mata', label: 'São Lourenço da Mata' },
]

const TIPOS_IMOVEL: { value: PropertyTier; label: string }[] = [
    { value: 'medio', label: 'Médio padrão' },
    { value: 'alto', label: 'Alto padrão' },
]

type PriceRangeId = typeof ALL | 'ate400' | '400a800' | '800a1200' | 'acima1200'

const FAIXAS_PRECO: { id: PriceRangeId; label: string }[] = [
    { id: ALL, label: 'Qualquer faixa' },
    { id: 'ate400', label: 'Até R$ 400 mil' },
    { id: '400a800', label: 'R$ 400 mil a R$ 800 mil' },
    { id: '800a1200', label: 'R$ 800 mil a R$ 1,2 mi' },
    { id: 'acima1200', label: 'Acima de R$ 1,2 mi' },
]

function priceInRange(value: number, rangeId: PriceRangeId): boolean {
    if (rangeId === ALL) return true
    if (rangeId === 'ate400') return value <= 400_000
    if (rangeId === '400a800') return value > 400_000 && value <= 800_000
    if (rangeId === '800a1200') return value > 800_000 && value <= 1_200_000
    if (rangeId === 'acima1200') return value > 1_200_000
    return true
}

type QuartosFilterId = typeof ALL | '1' | '2' | '3' | '4mais'

const QUARTOS_OPCOES: { id: QuartosFilterId; label: string }[] = [
    { id: ALL, label: 'Qualquer' },
    { id: '1', label: '1 quarto' },
    { id: '2', label: '2 quartos' },
    { id: '3', label: '3 quartos' },
    { id: '4mais', label: '4+ quartos' },
]

function matchQuartos(bedrooms: number, filtro: QuartosFilterId): boolean {
    if (filtro === ALL) return true
    if (filtro === '4mais') return bedrooms >= 4
    return bedrooms === Number.parseInt(filtro, 10)
}

function VerMaisArrowIcon() {
    return (
        <svg
            className="size-4.5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
        >
            <path
                d="M10 4v12m0 0-4-4m4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function SelectChevronIcon() {
    return (
        <svg
            className="size-4 shrink-0 text-mf-navy/45"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
        >
            <path
                d="M5 8 10 13 15 8"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function FilterSelect({
    id,
    label,
    className,
    children,
    ...selectProps
}: {
    id: string
    label: string
    className?: string
} & SelectHTMLAttributes<HTMLSelectElement>) {
    const selectBase =
        'w-full min-h-11 cursor-pointer appearance-none rounded-lg border border-mf-navy/12 bg-mf-white py-2 pr-10 pl-3.5 text-sm font-medium text-mf-navy shadow-sm outline-none transition-[border-color,box-shadow] focus:border-mf-blue focus:ring-2 focus:ring-mf-blue/20'

    return (
        <div className="min-w-0">
            <label
                htmlFor={id}
                className="text-xs font-semibold tracking-wide text-mf-navy/55 uppercase"
            >
                {label}
            </label>
            <div className="relative mt-1">
                <select id={id} className={`${selectBase}${className ? ` ${className}` : ''}`} {...selectProps}>
                    {children}
                </select>
                <span
                    className="pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-center"
                    aria-hidden
                >
                    <SelectChevronIcon />
                </span>
            </div>
        </div>
    )
}

function ListingCard({ listing }: { listing: PropertyListing }) {
    const tipoLabel = listing.tier === 'alto' ? 'Alto padrão' : 'Médio padrão'
    const capa = listing.gallery[0]

    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-mf-navy/8 bg-mf-white shadow-sm transition-shadow hover:shadow-md hover:border-mf-sky/25">
            <div className="relative aspect-4/3 overflow-hidden">
                <img
                    src={capa.imageUrl}
                    alt={capa.imageAlt}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-mf-navy/45 via-mf-navy/5 to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-mf-navy/10 px-2.5 py-1 text-xs font-semibold text-mf-navy">
                        À venda
                    </span>
                    <span className="rounded-full bg-mf-white/90 px-2.5 py-1 text-xs font-semibold text-mf-navy/85 backdrop-blur-sm">
                        {tipoLabel}
                    </span>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                    <h3 className="text-lg font-semibold tracking-tight text-mf-navy">
                        {listing.title}
                    </h3>
                    <p className="mt-1 text-sm text-mf-navy/65">
                        {listing.neighborhood} · {listing.city}
                    </p>
                </div>
                <p className="text-sm text-mf-navy/55">{listing.specs}</p>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-mf-navy/8 pt-4">
                    <div>
                        <p className="text-xs font-medium text-mf-navy/50">A partir de:</p>
                        <p className="text-lg font-bold text-mf-navy">{listing.priceLabel}</p>
                    </div>
                    <Link
                        to={listingDetailPath(listing.id)}
                        className="inline-flex items-center justify-center rounded-md bg-mf-blue px-4 py-2 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
                    >
                        Ver detalhes
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default function ImoveisSection() {
    const [localizacao, setLocalizacao] = useState<string>(ALL)
    const [tipoImovel, setTipoImovel] = useState<string>(ALL)
    const [faixaPreco, setFaixaPreco] = useState<PriceRangeId>(ALL)
    const [quartos, setQuartos] = useState<QuartosFilterId>(ALL)
    const [mostrarTodos, setMostrarTodos] = useState(false)

    const imoveisFiltrados = useMemo(() => {
        return LISTINGS.filter((l) => {
            if (localizacao !== ALL && l.city !== localizacao) return false
            if (tipoImovel !== ALL && l.tier !== tipoImovel) return false
            if (!priceInRange(l.priceValue, faixaPreco)) return false
            if (!matchQuartos(l.bedrooms, quartos)) return false
            return true
        })
    }, [localizacao, tipoImovel, faixaPreco, quartos])

    useEffect(() => {
        setMostrarTodos(false)
    }, [localizacao, tipoImovel, faixaPreco, quartos])

    const imoveisVisiveis = useMemo(() => {
        if (mostrarTodos || imoveisFiltrados.length <= LISTAGEM_INICIAL) {
            return imoveisFiltrados
        }
        return imoveisFiltrados.slice(0, LISTAGEM_INICIAL)
    }, [imoveisFiltrados, mostrarTodos])

    const totalFiltrados = imoveisFiltrados.length
    const podeVerMais = totalFiltrados > LISTAGEM_INICIAL && !mostrarTodos

    return (
        <div className="bg-[#E0EBFF] text-mf-navy">
            <section
                id="comprar"
                className="px-6 py-14 lg:px-12"
                aria-labelledby="imoveis-titulo"
            >
                <div className="mx-auto max-w-7xl">
                    <header className="max-w-3xl lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                            Encontre o espaço certo para viver bem
                        </h2>

                        <form
                            className="mt-8 grid max-w-2xl gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4"
                            onSubmit={(e) => e.preventDefault()}
                            aria-label="Filtrar imóveis"
                        >
                            <FilterSelect
                                id="filtro-localizacao"
                                label="Localização"
                                value={localizacao}
                                onChange={(e) => setLocalizacao(e.target.value)}
                            >
                                <option value={ALL}>Recife e região</option>
                                {CIDADES.map((c) => (
                                    <option key={c.value} value={c.value}>
                                        {c.label}
                                    </option>
                                ))}
                            </FilterSelect>
                            <FilterSelect
                                id="filtro-tipo"
                                label="Tipo de imóvel"
                                value={tipoImovel}
                                onChange={(e) => setTipoImovel(e.target.value)}
                            >
                                <option value={ALL}>Médio e alto padrão</option>
                                {TIPOS_IMOVEL.map((t) => (
                                    <option key={t.value} value={t.value}>
                                        {t.label}
                                    </option>
                                ))}
                            </FilterSelect>
                            <FilterSelect
                                id="filtro-preco"
                                label="Faixa de preço"
                                value={faixaPreco}
                                onChange={(e) =>
                                    setFaixaPreco(e.target.value as PriceRangeId)
                                }
                            >
                                {FAIXAS_PRECO.map((f) => (
                                    <option key={f.id} value={f.id}>
                                        {f.label}
                                    </option>
                                ))}
                            </FilterSelect>
                            <FilterSelect
                                id="filtro-quartos"
                                label="Quartos"
                                value={quartos}
                                onChange={(e) =>
                                    setQuartos(e.target.value as QuartosFilterId)
                                }
                            >
                                {QUARTOS_OPCOES.map((q) => (
                                    <option key={q.id} value={q.id}>
                                        {q.label}
                                    </option>
                                ))}
                            </FilterSelect>
                            <p
                                className="text-sm text-mf-navy/55 sm:col-span-2 lg:col-span-4"
                                aria-live="polite"
                            >
                                {totalFiltrados === LISTINGS.length
                                    ? `${LISTINGS.length} imóveis`
                                    : `${totalFiltrados} de ${LISTINGS.length} imóveis`}
                            </p>
                        </form>
                    </header>
                </div>
            </section>

            <section
                className="px-6 pb-14 sm:pb-16 lg:px-12"
                aria-labelledby="comprar-titulo"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mt-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {totalFiltrados === 0 ? (
                            <p className="col-span-full text-center text-mf-navy/60 sm:text-left">
                                Nenhum imóvel com esses critérios. Limpe um filtro ou entre em
                                contato para encontrar outras opções.
                            </p>
                        ) : (
                            imoveisVisiveis.map((listing, index) => (
                                <ScrollReveal
                                    key={listing.id}
                                    delayMs={Math.min(index * 75, 450)}
                                    rootMargin="0px 0px -12% 0px"
                                >
                                    <ListingCard listing={listing} />
                                </ScrollReveal>
                            ))
                        )}
                    </div>

                    {podeVerMais && (
                        <div className="mt-5 flex justify-center px-1">
                            <button
                                type="button"
                                onClick={() => setMostrarTodos(true)}
                                className="group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-mf-navy active:translate-y-0 cursor-pointer"
                            >
                                Ver mais Imóveis
                                <VerMaisArrowIcon />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
