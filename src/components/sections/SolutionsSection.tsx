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
    <section className="py-16 sm:py-20 md:py-24 relative bg-background w-full">
      {/* Background Mesh/Grid Tecnológico Sutil com Fade Real */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center justify-between">
          
          {/* Esquerda: Textos e Botões */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left" data-anim="fade-right">
            <span className="text-secondary-foreground font-medium text-xl md:text-2xl mb-1 tracking-wide">
              As melhores
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-8">
              Soluções
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              A ST Energia oferece as melhores soluções em energia solar para residências, comércios e propriedades rurais. Com qualidade e garantia, proporcionamos alta economia para você. Invista em um futuro sustentável e reduza seus custos com energia!
            </p>

            {/* Abas Interativas */}
            <div className="flex gap-4 sm:gap-8 justify-between w-full max-w-[400px]">
              {tabData.map((tab) => {
                const isActive = activeTab.id === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className="flex flex-col items-center gap-4 group relative focus:outline-none transition-transform hover:scale-105 active:scale-95"
                  >
                    <div className={`relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-background border-2 border-primary shadow-[0_0_25px_rgba(249,115,22,0.3)]' 
                        : 'bg-primary/90 hover:bg-primary shadow-lg'
                    }`}>
                      {/* Badge do número */}
                      <div className={`absolute -top-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md transition-colors duration-300 ${
                        isActive ? 'bg-primary text-white' : 'bg-background text-primary border border-primary/30'
                      }`}>
                        {tab.num}
                      </div>
                      
                      {/* Ícone */}
                      <tab.icon className={`w-6 h-6 sm:w-10 sm:h-10 transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-background'
                      }`} />
                    </div>
                    
                    <span className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-zinc-400 group-hover:text-zinc-200'
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
