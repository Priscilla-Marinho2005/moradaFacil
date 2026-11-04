import Navbar from './Navbar'

const HERO_IMAGE =
    'https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786571816/engenhoPaulista_xsxbhj.webp'

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

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-svh overflow-hidden text-mf-white"
        >
            <div className="absolute inset-0">
                <img
                    src={HERO_IMAGE}
                    alt="Edifício residencial moderno"
                    className="size-full object-cover object-center"
                    fetchPriority="high"
                />
                <div
                    className="absolute inset-0 bg-linear-to-r from-mf-navy/95 via-mf-navy/75 to-mf-navy/15"
                    aria-hidden
                />
            </div>

            <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-6 py-6 lg:px-12">
                <Navbar />

                <div className="flex flex-1 flex-col justify-center pb-12 pt-16 lg:max-w-2xl lg:pb-20 lg:pt-24">
                    <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-mf-sky uppercase">
                        <span className="h-px w-8 bg-mf-sky/80" aria-hidden />
                        Seu novo capítulo começa aqui
                    </p>

                    <h1 className="mb-6 text-4xl leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
                        Mais do que encontrar um imóvel, encontre seu lugar.
                    </h1>

                    <p className="mb-10 max-w-xl text-base leading-relaxed text-mf-sky/90 sm:text-lg">
                        Descubra oportunidades para comprar ou alugar e encontre o espaço
                        ideal para viver seus melhores momentos.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#comprar"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-mf-blue px-6 py-3.5 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
                        >
                            Encontrar meu imóvel
                            <ArrowIcon />
                        </a>
                        <a
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md border border-mf-white/35 bg-mf-white/5 px-6 py-3.5 text-sm font-semibold text-mf-white no-underline backdrop-blur-sm transition-colors hover:border-mf-white/55 hover:bg-mf-white/10"
                        >
                            Fale com um especialista
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
