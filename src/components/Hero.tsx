import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type PointerEvent,
} from 'react'

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

const OVERLAY_BUBBLE_MS = 1000

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null)
    const reduceMotionRef = useRef(false)
    const [glowPos, setGlowPos] = useState({ x: 50, y: 45 })
    const [textIntroVisible, setTextIntroVisible] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        reduceMotionRef.current = mq.matches
        const onChange = () => {
            reduceMotionRef.current = mq.matches
        }
        mq.addEventListener('change', onChange)
        return () => mq.removeEventListener('change', onChange)
    }, [])

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (mq.matches) {
            setTextIntroVisible(true)
            return
        }
        const id = window.setTimeout(() => {
            setTextIntroVisible(true)
        }, OVERLAY_BUBBLE_MS)
        return () => window.clearTimeout(id)
    }, [])

    const handlePointerMove = useCallback(
        (event: PointerEvent<HTMLElement>) => {
            if (reduceMotionRef.current) return
            const root = sectionRef.current
            if (!root) return
            const rect = root.getBoundingClientRect()
            const x = ((event.clientX - rect.left) / rect.width) * 100
            const y = ((event.clientY - rect.top) / rect.height) * 100
            setGlowPos({ x, y })
        },
        [],
    )

    const handlePointerLeave = useCallback(() => {
        setGlowPos({ x: 50, y: 45 })
    }, [])

    return (
        <section
            ref={sectionRef}
            id="inicio"
            className="relative flex min-h-svh flex-col overflow-hidden text-mf-white"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
        >
            <div className="absolute inset-0">
                <img
                    src={HERO_IMAGE}
                    alt="Edifício residencial moderno"
                    className="size-full object-cover object-center"
                    fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                    <div className="mf-hero-overlay-bubble absolute inset-0 bg-linear-to-r from-mf-navy/70 via-mf-navy/55 to-mf-navy/15" />
                    <div
                        className="absolute inset-0 mix-blend-soft-light transition-[background] duration-500 ease-out"
                        style={{
                            background: `radial-gradient(ellipse 85% 70% at ${glowPos.x}% ${glowPos.y}%, rgb(45 105 255 / 0.28) 0%, rgb(141 180 255 / 0.12) 38%, transparent 68%)`,
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-1 flex-col px-6 pb-6 pt-[calc(5rem+env(safe-area-inset-top))] sm:pt-[calc(5.25rem+env(safe-area-inset-top))] lg:px-12 lg:pt-[calc(5.75rem+env(safe-area-inset-top))]">
                <div
                    className={`flex flex-1 flex-col justify-center pb-12 pt-8 sm:pt-12 lg:max-w-2xl lg:pb-20 lg:pt-20${textIntroVisible ? ' hero-mf-stagger-visible' : ''}`}
                >
                    <p className="hero-mf-stagger-item mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-mf-sky uppercase">
                        <span className="h-px w-8 bg-mf-sky/80" aria-hidden />
                        Seu novo capítulo começa aqui
                    </p>

                    <h1 className="hero-mf-stagger-item mb-6 text-4xl leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
                        Mais do que encontrar um imóvel, encontre seu lugar.
                    </h1>

                    <p className="hero-mf-stagger-item mb-10 max-w-xl text-base leading-relaxed text-mf-sky/90 sm:text-lg">
                        Descubra oportunidades para comprar ou alugar e encontre o espaço
                        ideal para viver seus melhores momentos.
                    </p>

                    <div className="hero-mf-stagger-item flex flex-col gap-4 sm:flex-row sm:items-center">
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
