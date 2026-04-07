import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  const sectionRef = useRef<HTMLElement>(null);
  
  // Sincronização do Sol com o Scroll (Parallax)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sunY = useTransform(scrollYProgress, [0, 1], ["-20%", "70%"]);
  const sunScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 relative w-full overflow-hidden bg-[#070b10]">
      {/* Background de Alta Qualidade */}
      <div className="absolute inset-0 z-0 bg-[#040608] pointer-events-none" />

      {/* Grid Tecnológico Sutil com Fade Real */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-50"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      />

      {/* EFEITO LUZ DE PREENCHIMENTO (Top Right) para balancear a descida do sol anterior */}
      <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-[#ff8a00]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#ffffff04] border border-[#ffffff10] backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center group shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:border-primary/40 hover:bg-gradient-to-b hover:from-[#ffffff08] hover:to-[#ffffff02] hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-500 w-full relative overflow-hidden"
            >
              {/* Subtle top edge glare for glass effect on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-8">
                {/* Outer circle glow */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[25px] scale-[1.5] group-hover:bg-primary/25 transition-colors duration-500"></div>
                
                {/* Icon Recess Container */}
                <div className="w-24 h-24 rounded-full border border-[#ffffff15] flex items-center justify-center bg-black/40 backdrop-blur-md relative z-10 transition-all duration-500 group-hover:border-primary/50 group-hover:bg-black/60 group-hover:scale-105 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                  <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                </div>
              </div>
              
              <h3 className="font-heading font-extrabold text-[1.15rem] md:text-xl text-white mb-4 leading-snug w-full min-h-[56px] flex items-center justify-center group-hover:text-primary transition-colors duration-300">
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
