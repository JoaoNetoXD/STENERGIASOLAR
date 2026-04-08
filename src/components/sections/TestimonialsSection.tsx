import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const depoimentos = [
  {
    nome: "Carlos Eduardo",
    texto: "Minha conta da Equatorial era quase 900 reais todo mês com esse calor... agora tô pagando só a taxa mínima! Ainda financiei tudo pelo banco e a parcela ficou MENOR que a conta antiga. Não tem nem comparação.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
  },
  {
    nome: "Francisca Lima",
    texto: "A equipe veio, fez tudo certinho em dois dias e deixou a casa impecável. Meu marido ficou desconfiado no início mas quando chegou a primeira conta ele ficou sem acreditar. Já indiquei pra minha vizinha.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    nome: "Raimundo Sousa",
    texto: "Tenho uma oficina aqui na zona sul e o gasto com energia era absurdo. Depois que coloquei o sistema, a economia foi imediata. Em menos de 4 anos já vou ter o retorno total. Recomendo demais!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-[#070b10] w-full">
      {/* Background de Alta Qualidade */}
      <div className="absolute inset-0 z-0 bg-[#040608] pointer-events-none" />

      {/* Background Mesh/Grid Quadriculado mais evidente */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-80"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* Focos gigantes de luz nos cantos da seção */}
      <div className="absolute -top-[20%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 -right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block drop-shadow-md">
            Prova Social Real
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-foreground">
            O que dizem os nossos <span className="text-gradient-orange">clientes?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {depoimentos.map((dep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              className="bg-[#0b141a]/80 backdrop-blur-sm border border-border/30 rounded-2xl flex flex-col shadow-2xl relative transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 p-6 sm:p-8"
            >
              {/* Quote Icon */}
              <Quote className="text-primary/10 w-16 h-16 absolute top-6 right-6 rotate-180" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-300 leading-relaxed mb-8 flex-1 italic relative z-10 text-sm sm:text-base">
                "{dep.texto}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <img src={dep.avatar} alt={dep.nome} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">{dep.nome}</h4>
                  <p className="text-primary text-xs uppercase tracking-widest font-semibold mt-1">Cliente Verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
