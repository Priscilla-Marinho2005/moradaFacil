import Hero from '../components/Hero'
import ImoveisSection from '../components/ImoveisSection'
import SobreSection from '../components/SobreSection'
import DepoimentosSection from '../components/DepoimentosSection'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <ImoveisSection />
      </ScrollReveal>
      <ScrollReveal>
        <SobreSection />
      </ScrollReveal>
      <ScrollReveal>
        <DepoimentosSection />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
      <ScrollReveal rootMargin="0px 0px -20px 0px">
        <Footer />
      </ScrollReveal>
    </>
  )
}
