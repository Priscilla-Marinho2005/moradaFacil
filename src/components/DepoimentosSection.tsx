const depoimentos = [
  {
    texto:
      'Acompanhei do primeiro contato até a assinatura. Tudo foi explicado com calma e honestidade. Hoje moro num apartamento que realmente cabia no nosso orçamento.',
    nome: 'Marina Costa',
    detalhe: 'Boa Viagem, Recife',
  },
  {
    texto:
      'Já tinha desistido de corretores que empurravam imóvel. Aqui senti que ouviram o que a gente precisava. A visita foi organizada e sem pressa.',
    nome: 'Ricardo Almeida',
    detalhe: 'Casa Forte, Recife',
  },
  {
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

export default function DepoimentosSection() {
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

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {depoimentos.map((item) => (
            <li key={item.nome}>
              <blockquote className="flex h-full flex-col rounded-xl border border-mf-navy/10 bg-mf-white p-6 shadow-sm">
                <AspasDecorativa />
                <p className="flex-1 text-base leading-relaxed text-mf-navy/80">
                  {item.texto}
                </p>
                <footer className="mt-6 border-t border-mf-navy/8 pt-5">
                  <p className="font-semibold text-mf-navy">{item.nome}</p>
                  <p className="mt-0.5 text-sm text-mf-navy/55">{item.detalhe}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
