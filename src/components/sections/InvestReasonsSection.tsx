import React from 'react'
import { motion } from 'framer-motion'
import { PiggyBank, Leaf, Wrench, ShieldCheck, TrendingUp } from 'lucide-react'

const reasons = [
  {
    title: 'Até 95% de economia',
    description: 'Alta economia de até 95% em sua conta de energia.',
    icon: PiggyBank
  },
  {
    title: 'Energia 100% limpa',
    description: 'Contribui tanto para economia quanto para o planeta.',
    icon: Leaf
  },
  {
    title: 'Mínima Manutenção',
    description: 'Sistema com manutenção quase zero.',
    icon: Wrench
  },
  {
    title: 'Investimento Seguro',
    description: 'Retorno do valor investido em pouco tempo.',
    icon: ShieldCheck
  },
  {
    title: 'Valorização do Imóvel',
    description: 'Valoriza seu imóvel para uma futura venda.',
    icon: TrendingUp
  }
]

export function InvestReasonsSection() {

  return (
    <section className="py-12 sm:py-14 md:py-16 relative w-full">

      {/* Background Dots — hidden on mobile */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80 hidden sm:block"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* EFEITO LUZ DE PREENCHIMENTO movido para baixo para não ser decapitado pela borda */}
      <div className="absolute top-[20%] -right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ff8a00]/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block drop-shadow-md">
            Por que investir em
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground">
            Energia <span className="text-gradient-orange">Solar?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {reasons.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#0a1015] md:bg-[#ffffff04] border border-[#ffffff10] md:backdrop-blur-sm rounded-2xl md:rounded-3xl py-6 px-4 md:p-8 flex flex-col items-center text-center group shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:border-primary/40 hover:bg-gradient-to-b hover:from-[#ffffff08] hover:to-[#ffffff02] hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] hover:-translate-y-2 transition-all duration-300 w-full relative overflow-hidden justify-center min-h-[220px] md:min-h-[300px]"
            >
              {/* Subtle top edge glare for glass effect on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-4 md:mb-8">
                {/* Outer circle glow */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[15px] md:blur-[20px] scale-[1.3] md:scale-[1.5] group-hover:bg-primary/25 transition-colors duration-500"></div>
                
                {/* Icon Recess Container */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#ffffff15] flex items-center justify-center bg-black/50 md:bg-black/40 md:backdrop-blur-sm relative z-10 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-black/60 group-hover:scale-105 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                  <item.icon className="w-7 h-7 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                </div>
              </div>
              
              <h3 className="font-heading font-extrabold text-[1.05rem] md:text-xl text-white mb-2 md:mb-4 leading-snug w-full sm:min-h-[56px] flex items-center justify-center group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#a1a1aa] text-sm md:text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
