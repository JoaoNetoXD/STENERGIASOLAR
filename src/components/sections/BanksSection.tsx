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
  // Exatamente 2 cópias: -50% = 1 set completo → loop perfeito
  const marqueeBanks = [...banks, ...banks];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#040608] relative w-full" id="parceiros">
      {/* Dark background and Tech Grid Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Tech Grid Texture */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' 
          }} 
        />
        
        {/* Glow Central Sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-primary/5 blur-[80px] rounded-[100%] pointer-events-none" />

        {/* Smooth fades at borders to blend perfectly com outras seções (#040608) */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-[#040608] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-[#040608] to-transparent pointer-events-none" />
      </div>

      {/* Animação marquee com GPU acceleration */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          display: flex;
          will-change: transform;
          animation: marquee-scroll 20s linear infinite;
        }
        @media (min-width: 768px) {
          .marquee-track {
            animation-duration: 28s;
          }
        }
        @media (hover: hover) and (pointer: fine) {
          .marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>


      <div className="container mx-auto px-4 relative z-10 w-full mb-12 sm:mb-16">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Fundo radial escurecido super sutil apenas atrás do texto para leitura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[180%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_40%,transparent_70%)] pointer-events-none -z-10 blur-md"></div>

          <span className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 block drop-shadow-md">
            Parceiros de Financiamento
          </span>

          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            As Melhores Taxas do <span className="text-gradient-orange">Mercado</span>
          </h2>

          <p className="text-zinc-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Trabalhamos com os principais bancos para garantir condições exclusivas, prazos estendidos e carência imperdível na hora de financiar o seu projeto de energia solar.
          </p>
        </div>
      </div>

      {/* Faixa Marquee com loop infinito perfeito */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="relative w-full overflow-hidden flex items-center h-[140px] sm:h-[160px] md:h-[180px]"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="marquee-track">
            {marqueeBanks.map((bank, index) => (
              <div
                key={`${bank.id}-${index}`}
                className="flex items-center justify-center flex-shrink-0 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[360px] px-4 sm:px-6 md:px-8"
              >
                <img
                  src={bank.src}
                  alt={bank.alt}
                  className="h-20 sm:h-24 md:h-32 lg:h-36 w-auto object-contain max-w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}


