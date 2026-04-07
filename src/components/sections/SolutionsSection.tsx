import React, { useState } from 'react'
import { Home, Building2, Tractor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const tabData = [
  {
    id: 'residencial',
    num: '1',
    title: 'Residencial',
    badge: 'Residenciais',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
    description: 'Transforme o sol em economia financeira direta para sua família. O sistema residencial valoriza o seu imóvel e garante proteção contra os constantes aumentos na tarifa de luz.'
  },
  {
    id: 'comercial',
    num: '2',
    title: 'Comercial',
    badge: 'Comerciais',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2000&auto=format&fit=crop',
    description: 'Aumente a competitividade do seu negócio cortando um dos seus maiores custos fixos. Retorno sobre investimento rápido e previsibilidade financeira para a sua empresa.'
  },
  {
    id: 'rural',
    num: '3',
    title: 'Rural',
    badge: 'Propriedades Rurais',
    icon: Tractor,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop',
    description: 'Autonomia energética para o agronegócio. Garanta o funcionamento de equipamentos, irrigação e refrigeração sem depender das instabilidades da rede convencional.'
  }
];

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section className="pt-12 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 relative bg-[#070b10] w-full">
      {/* Background de Alta Qualidade */}
      <div className="absolute inset-0 z-0 bg-[#040608] pointer-events-none" />

      {/* Background Mesh/Grid Tecnológico Sutil com Fade Real */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-50"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center justify-between">
          
          {/* Esquerda: Textos e Botões */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left" data-anim="fade-right">
            <span className="text-primary font-bold text-sm sm:text-base tracking-widest uppercase mb-4 block drop-shadow-md">
              As melhores
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              Soluções
            </h2>
            
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-12 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-xl">
              A ST Energia oferece as melhores soluções em energia solar para residências, comércios e propriedades rurais. Com qualidade e garantia, proporcionamos alta economia para você. Invista em um futuro sustentável e reduza seus custos com energia!
            </p>

            {/* Abas Interativas */}
            <div className="flex justify-center sm:justify-start gap-4 sm:gap-8 w-full max-w-full">
              {tabData.map((tab) => {
                const isActive = activeTab.id === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className="flex flex-col items-center gap-3 sm:gap-4 group relative focus:outline-none transition-transform hover:scale-105 active:scale-95"
                  >
                    <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-400 border-2 ${
                      isActive 
                        ? 'bg-primary border-primary shadow-[0_0_30px_rgba(249,115,22,0.6)]' 
                        : 'bg-[#0f1720] border-white/10 group-hover:border-primary/50 shadow-md'
                    }`}>
                      {/* Badge do número */}
                      <div className={`absolute -top-1 -left-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md transition-colors duration-400 border-2 ${
                        isActive ? 'bg-[#0f1720] text-primary border-primary' : 'bg-primary text-[#0f1720] border-[#0f1720]'
                      }`}>
                        {tab.num}
                      </div>
                      
                      {/* Ícone */}
                      <tab.icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-400 ${
                        isActive ? 'text-white' : 'text-zinc-500 group-hover:text-white'
                      }`} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    
                    <span className={`font-bold text-sm sm:text-lg transition-colors duration-400 ${
                      isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}>
                      {tab.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Direita: Imagem com Animação */}
          <div className="w-full lg:w-6/12 relative mt-8 lg:mt-0" data-anim="fade-left">
            
            {/* Dot Pattern de Fundo (Decorativo) - igual à imagem de inspiração (top-left) */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-dot-tech opacity-60 pointer-events-none z-0 hidden sm:block" />
            
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-card border border-white/5 z-10 group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Imagem em alta resolução */}
                  <img 
                    src={activeTab.image} 
                    alt={`Energia Solar ${activeTab.title}`} 
                    className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                  />
                  {/* Gradiente escuro embaix/cima para destacar textos por cima se precisar, e também para harmonizar com site escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Badge da imagem (Canto superior direito) */}
                  <div className="absolute top-6 right-6 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-md">
                    {activeTab.badge}
                  </div>
                  
                  {/* Descrição específica sobre a imagem */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-base md:text-lg drop-shadow-md border-l-4 border-primary pl-4 font-medium backdrop-blur-sm bg-black/20 py-2 py-3 rounded-r-md">
                      {activeTab.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Efeito Glow para dar vida, sutil */}
            <div className="absolute -inset-4 bg-primary/10 blur-[80px] -z-10 rounded-full" />
            
          </div>

        </div>
      </div>
    </section>
  )
}
