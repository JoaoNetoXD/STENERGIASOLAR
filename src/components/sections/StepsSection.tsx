import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { SunMedium, Settings, Banknote } from 'lucide-react'

const steps = [
  {
    icon: <SunMedium size={32} className="text-primary" />,
    title: 'Captação',
    description: 'Durante o dia os painéis fotovoltaicos convertem a energia do sol em eletricidade. A produção de energia só depende da área disponível em seu telhado e do nível de radiação da sua cidade.'
  },
  {
    icon: <Settings size={32} className="text-primary" />,
    title: 'Conversão',
    description: 'O inversor converte a energia solar para o formato que você pode utilizar nas suas tomadas sem a necessidade de obras ou de alteração das instalações elétricas da sua casa.'
  },
  {
    icon: <Banknote size={32} className="text-primary" />,
    title: 'Remuneração',
    description: 'Caso você não consuma toda a energia solar produzida, o excedente é injetado na rede e você é remunerado com créditos para consumir energia da concessionária.'
  }
]

export function StepsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#070b10] relative w-full">
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
          overline="Como começar a gerar energia"
          title="3 passos para começar a"
          highlight="Gerar Energia"
          subtitle="Compreenda de forma simples como funciona o sistema e veja como é ágil e seguro iniciar a transição."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="p-8 text-center h-full border-t-4 border-t-primary hover:-translate-y-2">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{step.title}</h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
