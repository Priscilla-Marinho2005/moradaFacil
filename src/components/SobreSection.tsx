import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { HiOutlineMapPin } from 'react-icons/hi2'

const CEO_NOME = 'Wladimir Lima'
const CEO_FOTO_URL =
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80&auto=format&fit=crop'

/** Ajuste para os perfis reais */
const URL_INSTAGRAM = 'https://www.instagram.com/'
const URL_FACEBOOK = 'https://www.facebook.com/'
const URL_WHATSAPP = 'https://wa.me/5581999999999'
/** Ajuste para o pin real do escritório no Google Maps */
const URL_LOCALIZACAO = 'https://www.google.com/maps/search/?api=1&query=Recife%2C%20PE'

const socialIconBtn =
    'inline-flex size-12 items-center justify-center rounded-full border border-mf-navy/12 bg-mf-ice/60 text-mf-navy transition-colors hover:border-mf-blue hover:bg-mf-blue hover:text-mf-white'


function CeoETextoInstitucional() {
    return (
        <div className="px-0 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,42%)_1fr] lg:items-start lg:gap-12 xl:gap-16">
                <div className="order-2 mx-auto flex w-full max-w-md flex-col text-center lg:order-1 lg:mx-0 lg:max-w-none lg:text-left">
                    <div className="relative aspect-5/6 w-full max-h-[min(28rem,70vh)] overflow-hidden rounded-2xl border border-mf-navy/10 shadow-md">
                        <img
                            src={CEO_FOTO_URL}
                            alt="Retrato de Wladimir Lima, fundador da Morada Fácil"
                            className="size-full max-h-[inherit] object-cover object-top"
                            loading="lazy"
                            decoding="async"
                            width={500}
                            height={600}
                        />
                    </div>
                    <p className="mt-5 text-xl font-bold tracking-tight text-mf-navy">{CEO_NOME}</p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-mf-blue uppercase">
                        Fundador
                    </p>
                </div>

                <div className="order-1 min-w-0 lg:order-2">
                    <p className="mb-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] text-mf-blue uppercase lg:justify-start">
                        <span className="h-px w-10 shrink-0 bg-mf-blue/70" aria-hidden />
                        Sobre nós
                    </p>
                    <h2
                        id="sobre-titulo"
                        className="text-center text-3xl font-bold tracking-tight text-balance text-mf-navy lg:text-left"
                    >
                        A Morada Fácil conecta pessoas ao{' '}
                        <span className="text-mf-blue">lugar certo</span> para viver
                    </h2>
                    <div className="mt-7 space-y-4 text-base leading-relaxed text-mf-navy/70">
                        <p>
                            A Morada Fácil nasceu da ideia de que comprar imóvel não precisa ser
                            confuso ou estressante. Somos uma imobiliária próxima do cliente, que
                            prioriza conversa honesta e empatia em cada etapa — da primeira busca à
                            assinatura.
                        </p>
                        <p>
                            Atuamos no Grande Recife e região, com curadoria de imóveis de médio e
                            alto padrão. Valores, documentação e prazos explicados com clareza, para
                            você decidir com tranquilidade.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                        <a
                            href={URL_WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialIconBtn}
                            aria-label="WhatsApp da Morada Fácil"
                        >
                            <FaWhatsapp className="size-5" aria-hidden />
                        </a>
                        <a
                            href={URL_INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialIconBtn}
                            aria-label="Instagram da Morada Fácil"
                        >
                            <FaInstagram className="size-5" aria-hidden />
                        </a>
                        <a
                            href={URL_FACEBOOK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialIconBtn}
                            aria-label="Facebook da Morada Fácil"
                        >
                            <FaFacebook className="size-5" aria-hidden />
                        </a>
                        <a
                            href={URL_LOCALIZACAO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialIconBtn}
                            aria-label="Ver localização no mapa"
                        >
                            <HiOutlineMapPin className="size-5" aria-hidden />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const destaques = [
    {
        titulo: 'Atendimento humano',
        texto:
            'Cada família tem uma história. Ouvimos com calma e indicamos opções que fazem sentido na prática, sem pressa e sem promessa vazia.',
    },
    {
        titulo: 'Transparência',
        texto:
            'Documentação, valores e etapas explicados com clareza. Você sabe o que está comprando e o que vem depois da visita.',
    },
    {
        titulo: 'Recife e região',
        texto:
            'Trabalhamos com imóveis em Recife e cidades vizinhas, como São Lourenço da Mata, com foco em bairros e perfis variados.',
    },
]

export default function SobreSection() {
    return (
        <section
            id="sobre"
            className="scroll-mt-24 px-6 py-16 text-mf-navy sm:py-20 lg:px-12"
            aria-labelledby="sobre-titulo"
        >
            <div className="mx-auto max-w-6xl">
                <CeoETextoInstitucional />

                <ul className="mt-1 grid gap-8 sm:grid-cols-3">
                    {destaques.map((item) => (
                        <li
                            key={item.titulo}
                            className="rounded-xl border border-mf-navy/8 p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold tracking-tight text-mf-navy">
                                {item.titulo}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-mf-navy/65">
                                {item.texto}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
