import React from 'react'
import { motion } from 'framer-motion'
import bank1 from '../../assets/1.png'
import bank2 from '../../assets/2.png'
import bank3 from '../../assets/3.png'
import bank4 from '../../assets/4.png'
import bank5 from '../../assets/5.png'

const banks = [
  { id: 1, src: bank1, alt: 'Santander' },
  { id: 2, src: bank2, alt: 'Sicredi' },
  { id: 3, src: bank3, alt: 'Banco do Brasil' },
  { id: 4, src: bank4, alt: 'Banco do Nordeste' },
  { id: 5, src: bank5, alt: 'BV Financeira' },
];

export function BanksSection() {
  // Duplicamos a lista para criar o efeito infinito sem quebra
  const marqueeBanks = [...banks, ...banks, ...banks, ...banks];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative">
      {/* Estilo para animação infinita do marquee */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Glow Suave super sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 relative z-10 w-full mb-8 sm:mb-10">
        <div className="text-center">
           <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block drop-shadow-md">
            Parceiros de Financiamento
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground">
            As Melhores Taxas do <span className="text-gradient-orange">Mercado</span>
          </h2>
          <p className="mt-3 text-secondary-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
             Trabalhamos com os principais bancos para garantir condições exclusivas, prazos estendidos e carência imperdível na hora de financiar o seu projeto de energia solar.
          </p>
        </div>
      </div>

      {/* Faixa Marquee Limitada ao Container com Efeito de Parede */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="relative w-full py-4 overflow-hidden flex items-center h-[140px] md:h-[180px]"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="animate-marquee items-center gap-12 sm:gap-20 md:gap-32 px-10">
            {marqueeBanks.map((bank, index) => (
              <div 
                key={`${bank.id}-${index}`}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer flex-shrink-0"
              >
                <img 
                  src={bank.src} 
                  alt={bank.alt} 
                  className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[400px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}


