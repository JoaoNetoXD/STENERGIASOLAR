import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { ArrowRight, Zap, Users } from 'lucide-react'
import { SimulatorCard } from '../ui/SimulatorCard'
import bgDesktop from '../../assets/IMAGEM FUNDO HOME DESKTOP.jpg'
import bgMobile from '../../assets/IMAGEM FUNDO HOME MOBILED.jpg'

export function HeroSection() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, 400]); // 0.4x speed roughly
  const parallaxY = isMobile ? 0 : y1;

  const scrollToSimulador = () => {
    document.getElementById('simulador-card')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative w-full min-h-0 md:min-h-[95vh] pt-32 pb-16 md:py-32 lg:py-40 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img 
            src={bgMobile} 
            alt="Instalação de painéis solares" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
        {/* Overlay escuro para garantir máximo contraste (aprox 75% opacidade no mobile) */}
        <div className="absolute inset-0 bg-black/75 md:bg-black/60 md:backdrop-blur-[2px]" />
        
        {/* Degradê para mesclar suavemente com a próxima seção (agora usando a exata cor #0b141a do topo da ExperienceSection) */}
        <div className="absolute -bottom-1 left-0 w-full h-48 sm:h-64 bg-gradient-to-t from-[#0b141a] via-[#0b141a]/90 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Esquerda: Textos (Reduza sua conta de luz) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left pt-4 sm:pt-0">
            <div data-anim="fade-up" style={{ transitionDelay: '0.15s' }}>
              <div className="inline-flex justify-center items-center gap-2.5 bg-[#1a232b]/90 md:bg-[#1a232b]/80 border border-white/10 md:backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 mb-8 sm:mb-8 shadow-lg transition-all hover:bg-white/10 w-fit mx-auto lg:mx-0">
                <Users size={14} className="text-primary hidden sm:block" />
                <span className="text-white/90 font-medium text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                  +2000 famílias <span className="text-primary font-bold">que já economizam</span>
                </span>
              </div>
            </div>

            <div data-anim="fade-up" style={{ transitionDelay: '0.4s' }}>
              <h1 className="hero-title font-heading font-black text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] md:leading-[1.05] text-white mb-6 sm:mb-8 tracking-tighter relative z-10 drop-shadow-xl">
                Reduza sua <br className="lg:hidden" /> conta de luz
                <span className="block text-primary mt-1 text-[3.8rem] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] drop-shadow-[0_0_35px_rgba(249,115,22,0.4)] tracking-tight">
                  em até 95%.
                </span>
              </h1>
            </div>

            <div data-anim="fade-up" style={{ transitionDelay: '0.6s' }}>
              <p className="text-white/95 text-[16px] sm:text-lg md:text-xl max-w-[96%] sm:max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-[1.65] font-medium drop-shadow-md border-l-2 border-primary/50 text-left pl-5 py-2 bg-gradient-to-r from-primary/5 to-transparent">
                Transforme o sol em <strong className="text-white font-black text-[17px] sm:text-[19px] md:text-[22px]">economia real</strong>. Nossos consultores fazem todo o processo por você — do financiamento até a ativação da sua usina.
              </p>
            </div>

            <div 
              data-anim="fade-up" 
              style={{ transitionDelay: '0.8s' }}
              className="flex justify-center lg:justify-start lg:hidden w-full px-4 mb-4"
            >
              <Button onClick={scrollToSimulador} variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-5 text-[17px] shadow-[0_0_40px_rgba(249,115,22,0.45)] font-black rounded-xl active:scale-95 transition-transform uppercase tracking-wide">
                Quero minha simulação <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Direita: Simulador */}
          <div id="simulador-card" className="lg:col-span-6 mt-4 lg:mt-0" data-anim={isMobile ? "fade-up" : "fade-left"} style={{ transitionDelay: isMobile ? '0.2s' : '0.8s' }}>
            <SimulatorCard />
          </div>

        </div>
      </div>
    </section>
  )
}
