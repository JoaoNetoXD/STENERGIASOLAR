import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-[#070b10] relative overflow-hidden w-full">
      {/* Background de Alta Qualidade */}
      <div className="absolute inset-0 z-0 bg-[#040608] pointer-events-none" />

      {/* Background Mesh/Grid Tecnológico Sutil com Fade Real */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-50"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-lg overflow-hidden h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop" 
              alt="Instalação Solar ST Energia"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/80 backdrop-blur-md border border-border p-5 rounded-lg border-l-4 border-l-primary">
                <p className="font-bold text-foreground text-xl">10+ Anos de Excelência</p>
                <p className="text-secondary-foreground text-sm">Mais de 50MW implementados</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4 block">
              Quem Somos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Engenharia por trás da sua <span className="text-gradient-orange">Independência </span>
            </h2>
            <p className="text-secondary-foreground text-lg mb-8 leading-relaxed">
              A ST Energia não faz apenas instalações solares. Desenvolvemos projetos completos de infraestrutura energética, projetados sob medida para garantir eficiência e ROI máximo no menor tempo possível.
            </p>

            <ul className="mb-8 space-y-4">
              {['Projetos assinalados por especialistas', 'Homologação e tramitação rápida', 'Equipamentos Tier 1', 'Suporte técnico ativo'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90 font-medium">
                  <CheckCircle2 size={20} className="text-primary" /> {item}
                </li>
              ))}
            </ul>

            <Button variant="secondary" className="text-foreground hover:bg-white/5 border border-border">
              Nossa História
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
