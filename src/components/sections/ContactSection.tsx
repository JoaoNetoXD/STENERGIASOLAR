import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { ArrowRight, Zap, Flame } from 'lucide-react'
import bgContact from '../../assets/04 SEÇÃO.jpg'

export function ContactSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden" id="contatos">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgContact} 
          alt="Contato ST Energia" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-background/90" />
        
        {/* Sutil brilho laranja no centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[150px] rounded-full bg-primary w-[800px] h-[400px] pointer-events-none" />
        
        {/* Smooth fades at borders */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center border border-primary/50 mx-auto mb-8 shadow-[0_0_30px_rgba(249,115,22,0.6)] animate-float">
            <Zap size={40} className="text-primary drop-shadow-md" />
          </div>
          
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-foreground mb-8 leading-tight drop-shadow-sm">
            Pronto para <span className="underline decoration-wavy decoration-primary/60 underline-offset-8">zerar sua conta</span> de luz?
          </h2>
          
          <p className="text-secondary-foreground text-xl font-medium mb-8 max-w-xl mx-auto">
            O sol não espera — e sua economia também não. Mais de 2000 famílias já deram o primeiro passo inteligente.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10 text-sm text-primary font-bold">
            <Flame size={16} className="text-primary animate-pulse" />
            <span>47 simulações realizadas hoje</span>
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-lg px-8 sm:px-12 py-6 rounded-xl uppercase tracking-widest font-black animate-pulse-glow hover:scale-105 transition-all w-full sm:w-auto"
          >
            Quero Meu Projeto Solar Gratuito
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
