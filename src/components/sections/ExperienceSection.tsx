import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { Star } from 'lucide-react'
import vid1 from '../../assets/video 01.mp4'
import vid2 from '../../assets/video 02.mp4'
import vid3 from '../../assets/video 03.mp4'

function AnimatedNumber({ value, duration = 2000 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            if (ref.current) {
              ref.current.textContent = Math.floor(ease * value).toString();
            }
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else if (ref.current) {
              ref.current.textContent = value.toString();
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>0</span>;
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Parallax — only on desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sunY = useTransform(scrollYProgress, [0, 1], ["-10%", "80%"]);
  const sunScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} className="relative w-full pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16" id="sobre">

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b141a] via-[#070b10] to-[#040608] pointer-events-none" />

      {/* Background Dots — hidden on mobile for performance */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80 hidden sm:block"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* SOL PARALLAX — Simplified on mobile, full on desktop */}
      {!isMobile ? (
        <motion.div
          className="absolute -right-[5%] lg:right-[2%] top-[10%] w-[600px] h-[600px] pointer-events-none z-[5] flex items-center justify-center transform-gpu"
          style={{ y: sunY, scale: sunScale, rotate: sunRotate }}
        >
          {/* Glow de Fundo — reduced blur */}
          <div className="absolute w-[600px] h-[600px] bg-[#ff8a00]/15 rounded-full blur-[100px]" />
          
          {/* Halo Orbital */}
          <div className="absolute w-[300px] h-[300px] border-[3px] border-[#ff8a00]/30 rounded-full blur-[6px]" />

          {/* Flares — only 2 for performance */}
          <div className="absolute w-[700px] h-[3px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px]" />
          <div className="absolute w-[3px] h-[700px] bg-gradient-to-b from-transparent via-white/40 to-transparent blur-[2px]" />

          {/* Corona */}
          <div className="absolute w-[200px] h-[200px] bg-[#ffdb70] opacity-60 rounded-full blur-[25px]" />

          {/* Core */}
          <div className="absolute w-[110px] h-[110px] bg-[#ffffff] rounded-full blur-[3px] shadow-[0_0_60px_#ffffff,_0_0_100px_#ffdb70,_0_0_160px_#ff8a00]" />
        </motion.div>
      ) : (
        /* Mobile: static simplified sun glow — no parallax, no mix-blend */
        <div className="absolute -right-[200px] top-[5%] w-[400px] h-[400px] pointer-events-none z-[5] flex items-center justify-center opacity-40">
          <div className="absolute w-[300px] h-[300px] bg-[#ff8a00]/20 rounded-full blur-[40px]" />
          <div className="absolute w-[80px] h-[80px] bg-[#ffffff] rounded-full blur-[3px] shadow-[0_0_40px_#ffffff,_0_0_60px_#ffdb70]" />
        </div>
      )}

      {/* Fill light — reduced blur on mobile */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-500/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left: Content */}
          <div data-anim="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-primary rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
              <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block">
                Nossa História
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-[3.5rem] text-white mb-6 leading-[1.1] tracking-tight">
              A solidez da <br className="hidden sm:block" />
              <span className="text-gradient-orange">ST Energia</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-10 leading-relaxed border-l-2 border-primary/50 pl-5 py-1 bg-gradient-to-r from-primary/5 to-transparent">
              Mais de duas décadas entregando economia e sustentabilidade para empresas e famílias em todo o Brasil. Nossa equipe 100% própria atua em infraestrutura sólida, acompanhando você da consultoria à ativação.
            </p>

            {/* Stats — NO backdrop-blur on mobile */}
            <div className="grid grid-cols-3 divide-x divide-white/10 bg-[#111a20]/95 md:bg-[#111a20]/90 md:backdrop-blur-sm border border-white/10 rounded-2xl mb-10 sm:mb-12 shadow-2xl overflow-hidden relative">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/15 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>
              
              {/* Stat 1 */}
              <div className="p-3 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mb-1 flex items-end justify-center gap-0.5 sm:gap-1 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  <AnimatedNumber value={30} /><span className="text-xs sm:text-xl text-primary font-bold mb-0 sm:mb-1">Anos</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-400 relative z-10 tracking-[0.1em] uppercase leading-tight h-[28px] sm:h-auto flex items-center justify-center">De História</p>
              </div>

              {/* Stat 2 */}
              <div className="p-3 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mb-1 flex items-end justify-center gap-0.5 sm:gap-1 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  <AnimatedNumber value={2000} duration={2500} /><span className="text-base sm:text-3xl text-primary font-bold mb-0 sm:mb-1">+</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-400 relative z-10 tracking-[0.1em] uppercase leading-tight h-[28px] sm:h-auto flex items-center justify-center">Projetos Ativos</p>
              </div>

              {/* Stat 3 */}
              <div className="p-3 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mb-1 flex items-center justify-center gap-0.5 sm:gap-1 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  4.<AnimatedNumber value={9} duration={1500} /><Star size={14} className="text-primary fill-primary ml-0.5 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)] sm:w-6 sm:h-6" />
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-400 relative z-10 tracking-[0.1em] uppercase leading-tight h-[28px] sm:h-auto flex items-center justify-center">Avaliação Média</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-6">
              <a href="https://wa.me/5598999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor." target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" className="uppercase w-full sm:w-auto text-xs sm:text-sm tracking-widest px-6 sm:px-10 py-4 font-bold rounded-md animate-pulse-glow">
                  Falar com um Consultor
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Video Collage */}
          <div
            data-anim="fade-left"
            className="relative h-[450px] sm:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-border/50"
          >
            {/* Grid Collage */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full p-2 bg-background/50">
              <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden">
                <video
                  src={vid3}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                <video
                  src={vid2}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                <video
                  src={vid1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] bg-black/15 pointer-events-none rounded-2xl" />

            {/* Play Button — optimized pulse (no animate-ping on mobile) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-primary/40 rounded-full hidden md:block animate-[ping_3s_ease-out_infinite]" />
                <div className="absolute w-32 h-32 bg-primary/15 rounded-full hidden md:block animate-[ping_3s_ease-out_infinite]" style={{ animationDelay: '1s' }} />
                {/* Mobile: simple static glow ring instead of ping */}
                <div className="absolute w-28 h-28 bg-primary/20 rounded-full md:hidden animate-pulse" />
                <div className="relative w-20 h-20 bg-primary/90 border-[2px] border-white/20 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1 drop-shadow-md">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Label Inferior */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[90%] pointer-events-none">
              <div className="bg-black/50 border border-white/10 px-5 sm:px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3">
                 <div className="relative flex items-center justify-center w-2.5 h-2.5">
                   <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-75 animate-ping"></span>
                   <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-primary"></span>
                 </div>
                 <h3 className="font-heading font-bold text-xs sm:text-sm text-zinc-100 tracking-wider uppercase drop-shadow-md">
                   Nossa Estrutura Operacional
                 </h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
