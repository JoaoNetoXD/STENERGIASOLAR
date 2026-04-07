import React from 'react'
import { motion } from 'framer-motion'
import bank1 from '../../assets/1.png'
import bank2 from '../../assets/2.png'
import bank3 from '../../assets/3.png'
import bank4 from '../../assets/4.png'
import bank5 from '../../assets/5.png'
import bgBanks from '../../assets/IMAGEM FUNDO 12.jpg'
import bgBanksMobile from '../../assets/imagem taxas mobile.jpg'
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#070b10] relative w-full">
      {/* Background Image with Dark Overlay and Section Smoothing Fades */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop Image */}
        <img
          src={bgBanks}
          alt="Melhores Taxas ST Energia"
          className="hidden md:block w-full h-full object-cover object-center opacity-80"
        />
        {/* Mobile Image */}
        <img
          src={bgBanksMobile}
          alt="Melhores Taxas ST Energia"
          className="block md:hidden w-full h-full object-cover object-center opacity-80"
        />
        {/* Overlay escuro para consistência de cor (SEM blur para preservar 100% da resolução da foto) */}
        <div className="absolute inset-0 bg-black/80 md:bg-black/50" />


        {/* Smooth fades at borders to blend perfectly com outras seções (#040608) */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-[#040608] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-[#040608] to-transparent pointer-events-none" />
      </div>

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 blur-[60px] md:blur-[120px] rounded-[100%] pointer-events-none z-0" />

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

      {/* Faixa Marquee Limitada ao Container com Efeito de Parede */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="relative w-full py-4 overflow-hidden flex items-center h-[160px] sm:h-[180px]"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="animate-marquee items-center gap-12 sm:gap-20 md:gap-32 px-10">
            {marqueeBanks.map((bank, index) => (
              <div
                key={`${bank.id}-${index}`}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer flex-shrink-0 group"
              >
                <img
                  src={bank.src}
                  alt={bank.alt}
                  className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] z-10 relative"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}


