import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { BanksSection } from './components/sections/BanksSection'
import { DiferenciaisSection } from './components/sections/DiferenciaisSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { FaqSection } from './components/sections/FaqSection'
import { ContactSection } from './components/sections/ContactSection'
import { InvestReasonsSection } from './components/sections/InvestReasonsSection'
import { SolutionsSection } from './components/sections/SolutionsSection'
import { SustainabilitySection } from './components/sections/SustainabilitySection'
import { Footer } from './components/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { Helmet } from 'react-helmet-async'

function App() {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-[#040608] text-foreground font-sans overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Helmet>
        <title>ST Energia - Sistemas de Energia Solar Fotovoltaicos</title>
        <meta name="description" content="Mais de 30 anos de infraestrutura sólida e 2000 projetos entregues. Somos a maior referência em transição energética do Norte e Nordeste." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* 1 - Gancho Inicial */}
        <HeroSection />

        {/* 5 e 6 - 30 Anos e Escala 2000+ */}
        <ExperienceSection />

        {/* Por Que Investir */}
        <InvestReasonsSection />

        {/* Categoria de Soluções Interativas */}
        <SolutionsSection />

        {/* Bancos Parceiros de Financiamento */}
        <BanksSection />

        {/* 4 - Por Que Nós? (Diferenciais) */}
        <DiferenciaisSection />

        {/* Sustainability Banner */}
        <SustainabilitySection />

        {/* 7 - Prova Social WhatsApp */}
        <TestimonialsSection />

        {/* 8 - FAQ / Objeções */}
        <FaqSection />
        
        {/* 9 - CTA Magnet (Banner vibrante) */}
        <ContactSection />
      </main>
      
      {/* 10 - Rodapé */}
      <Footer />
    </div>
  )
}

export default App
