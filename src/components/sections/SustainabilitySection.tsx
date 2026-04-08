import React from 'react'
import arvorePlaneta from '../../assets/arvore-planeta.png'
import { motion } from 'framer-motion'

export function SustainabilitySection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative w-full bg-[#070b10] overflow-hidden">
      {/* Background de Alta Qualidade */}
      <div className="absolute inset-0 z-0 bg-[#040608] pointer-events-none" />

      {/* Background Dots/Pontilhado Tecnológico */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80 hidden sm:block"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-[1200px] mx-auto text-center lg:text-left">

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start" data-anim="fade-right">
            <h2 className="text-[12vw] sm:text-5xl md:text-6xl lg:text-[80px] font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
              Gerando <br />
              <span className="text-white relative inline-block">
                Sustentabilida<span className="bg-white/10 text-white/50 px-2 rounded-lg inline-block ml-1 -rotate-2 origin-bottom shadow-lg">de!</span>
              </span>
            </h2>

            <div className="bg-[#0b1218]/95 md:bg-background/80 md:backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 max-w-lg shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed relative z-10 text-left">
                Além de economizar até <strong className="text-primary font-bold">95%</strong> na sua conta de energia, você ainda
                <strong className="text-white font-semibold"> contribui com o nosso planeta.</strong>
              </p>
            </div>

            <a
              href="#simulator"
              className="hidden md:inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-orange-600 transition-all duration-300 hover:shadow-orange hover:-translate-y-1 text-lg group w-full sm:w-auto"
            >
              Faça um orçamento
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0" data-anim="fade-left">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-square flex items-center justify-center">

              <div className="absolute inset-0 bg-primary/15 blur-[40px] md:blur-[80px] rounded-full scale-75 animate-pulse-glow" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] z-10 flex items-center justify-center"
              >
                {/* Imagem principal arredondada (representando o planeta com painel) */}
                <img
                  src={arvorePlaneta}
                  alt="Sustentabilidade"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Painel Solar e árvore decorações flutuantes */}
              <div className="absolute top-0 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl z-20 animate-float" style={{ animationDelay: '0s' }}>
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" alt="Painel Solar" />
              </div>

              <div className="absolute bottom-4 -left-4 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/10 shadow-xl z-20 animate-float" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&auto=format&fit=crop" className="w-full h-full object-cover transform scale-110" alt="Natureza" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
