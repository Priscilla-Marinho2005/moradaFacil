import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
    <main className="flex min-h-svh flex-col items-center justify-center bg-mf-ice/40 px-6 py-24 pt-[calc(6rem+env(safe-area-inset-top))] text-center text-mf-navy sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
      <p className="text-sm font-semibold tracking-[0.2em] text-mf-blue uppercase">
        Erro 404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-mf-navy/70">
        O endereço pode estar incorreto ou o imóvel não está mais disponível na vitrine.
      </p>
      <Link
        to="/#comprar"
        className="mt-8 inline-flex rounded-md bg-mf-blue px-6 py-3 text-sm font-semibold text-mf-white no-underline transition-colors hover:bg-mf-cobalt"
      >
        Ver imóveis
      </Link>
    </main>
    <Footer />
    </>
  )
}
