import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Droplets, Globe, Lightbulb } from 'lucide-react'

const benefits = [
  {
    icon: <Droplets size={24} className="text-primary" />,
    title: 'Economia',
    description: 'Com energia solar, você pode reduzir sua conta em até 95% e esquecer de vez os temíveis aumentos tarifários. Conforte para sua casa usando energia limpa.'
  },
  {
    icon: <Globe size={24} className="text-primary" />,
    title: '100% Limpo e renovável',
    description: 'Não gera poluição nem resíduos e utiliza a energia do sol, que é ilimitada. Ajuda o meio-ambiente e garante um futuro sustentável.'
  },
  {
    icon: <Lightbulb size={24} className="text-primary" />,
    title: 'Um excelente negócio',
    description: 'Investimento com retorno garantido e muito superior ao investimento convencional. O payback médio é inferior a 5 anos com até 30 anos de vida útil.'
  }
]

const progressBars = [
  { label: 'Economia na conta', value: 90 },
  { label: 'Menos poluente', value: 100 },
  { label: 'Estabilidade', value: 99 },
]

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#070b10] relative w-full z-10">
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
        
        {/* Benefícios Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:shadow-orange transition-all mb-6">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Imagem representativa para balancear o layout original */}
            <div className="relative w-full aspect-square max-w-md rounded-full overflow-hidden border-2 border-primary/20 p-2 shadow-orange">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
                  alt="Solução Solar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">
              Comece a Economizar Imediatamente
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Por onde começo e qual a solução <span className="text-gradient-orange">ideal para a minha necessidade?</span>
            </h2>
            <p className="text-secondary-foreground text-base mb-10 leading-relaxed">
              Estamos comprometidos em ajudar você a produzir sua própria energia de forma simples e ainda reduzir sua conta de luz. Solicite um estudo de viabilidade completo e personalizado. Não cobramos por isso!
            </p>

            <div className="space-y-6">
              {progressBars.map((bar, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-foreground">{bar.label}</span>
                    <span className="text-primary">{bar.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contatos" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold hover:bg-accent transition-colors shadow-orange">
                ORÇAMENTO
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
