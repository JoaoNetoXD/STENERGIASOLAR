import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { Sun, Battery, Activity, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: <Sun size={28} className="text-primary" />,
    title: 'Usinas Solares',
    description: 'Projetos de grande porte focados em máxima geração e rentabilidade para investidores.'
  },
  {
    icon: <Battery size={28} className="text-primary" />,
    title: 'Armazenamento de Energia',
    description: 'Sistemas de baterias integrados para independência e segurança energética ininterrupta.'
  },
  {
    icon: <Activity size={28} className="text-primary" />,
    title: 'Gestão Inteligente',
    description: 'Monitoramento contínuo da usina em tempo real para otimização de performance.'
  },
  {
    icon: <ShieldCheck size={28} className="text-primary" />,
    title: 'Consultoria Especializada',
    description: 'Viabilidade do projeto, documentação e aprovações com a concessionária.'
  }
]

export function ServicesSection() {
  return (
    <section id="solucoes" className="py-16 sm:py-20 md:py-24 relative bg-[#070b10] w-full">
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <SectionHeader 
          overline="Serviços Especializados"
          title="Nossas"
          highlight="Especialidades Solares"
          subtitle="Projetos estruturados sob medida para o mercado de energia livre e geração distribuída."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <Card className="p-6 h-full flex flex-col group relative overflow-hidden">
                <div className="mb-6 bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* Decorative glow bottom right */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
