import React from 'react'
import { SectionHeader } from '../ui/SectionHeader'

const features = [
  {
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
    title: 'Equipe Especializada',
    description: 'Profissionais capacitados e certificados para garantir a máxima segurança na instalação.'
  },
  {
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=1937&auto=format&fit=crop',
    title: 'Proteção & Garantia',
    description: 'Até 10 anos de garantia nos módulos solares e suporte técnico prioritário.'
  },
  {
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop',
    title: 'Controle no App',
    description: 'Acompanhe a sua economia de energia em tempo real pela tela do seu smartphone.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: 'Financiamento Fácil',
    description: 'As melhores taxas de mercado com prazos estendidos e carência para pagar.'
  }
]

export function DiferenciaisSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-background w-full">
      {/* Background Topográfico Sutil com bordas esfumaçadas (fade) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2064&auto=format&fit=crop"
          alt="Textura Topográfica Abstrata"
          className="w-full h-full object-cover opacity-[0.03] grayscale mix-blend-screen"
        />
      </div>

      {/* Glow Radial central para atrair o olhar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary/10 blur-[130px] rounded-[100%] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeader
          overline="Por que nós?"
          title="Os nossos"
          highlight="Diferenciais"
          subtitle="Garantia de segurança, eficiência e máxima solidez para o seu projeto."
        />

        <div data-anim="stagger-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 desktop-left-right mobile-bottom-top mt-12 cursor-pointer">
          {features.map((item, index) => (
            <div
              key={index}
              data-anim="stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              className="relative overflow-hidden h-[380px] w-full rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Imagem de Fundo real */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Escuro com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:via-black/50" />

              {/* Conteúdo Textual em baixo */}
              <div className="absolute bottom-0 left-0 p-6 flex flex-col z-10 w-full">
                <div className="w-10 h-1 bg-primary mb-4 rounded-full transition-all duration-500 group-hover:w-20" />
                <h3 className="font-heading font-bold text-2xl text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed text-sm drop-shadow-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
