import React from 'react'
import { motion } from 'framer-motion'

const depoimentos = [
  {
    nome: "Carlos Silva",
    foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    texto: "Minha conta de R$ 900 baixou para R$ 80! 😱 O investimento já se pagou! Olha o telhado: ☀️",
    imagemInstalacao: "/solar_residencial.png",
    hora: "10:42"
  },
  {
    nome: "Mariana Costa",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    texto: "Instalação rápida e sem sujeira. A equipe que veio aqui é nota 10! 👏 Indico de olhos fechados 🙌",
    imagemInstalacao: "/solar_instalacao.png",
    hora: "14:15"
  },
  {
    nome: "Julio Nogueira",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    texto: "Financiamento muito fácil para a minha empresa 🏢 Agora pago a parcela com a própria economia da conta de luz! 💰",
    imagemInstalacao: "/solar_comercial.png",
    hora: "16:30"
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
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/5 blur-[60px] md:blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 -right-[10%] w-[600px] h-[600px] bg-primary/5 blur-[60px] md:blur-[150px] rounded-full pointer-events-none z-0" />

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#0b141a] border border-border/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl relative transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] cursor-pointer"
            >
              {/* Fake WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-white/5 shadow-sm">
                <img src={dep.foto} alt={dep.nome} className="w-10 h-10 rounded-full object-cover border border-primary/20" />
                <div className="flex-1">
                  <h4 className="text-[#e9edef] font-semibold text-sm truncate">{dep.nome}</h4>
                  <p className="text-[#8696a0] text-xs">online</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4 sm:p-5 bg-[#0b141a] flex-1 relative min-h-[300px] flex flex-col justify-end items-start">
                {/* Wallpaper sim */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-repeat" />

                {/* Balão WhatsApp Recebido */}
                <div className="bg-[#202c33] p-1.5 rounded-lg rounded-tl-sm text-[#e9edef] relative w-full sm:max-w-[95%] shadow-[0_2px_4px_rgba(0,0,0,0.3)] ml-2 inline-block z-10">
                  {dep.imagemInstalacao && (
                    <div className="relative w-full h-40 sm:h-48 mb-2 overflow-hidden rounded-md border border-white/5">
                      <img src={dep.imagemInstalacao} alt="Instalação do Cliente" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <p className="text-[14px] sm:text-[15px] leading-[22px] px-2 mb-1">{dep.texto}</p>
                  <div className="flex justify-end items-center gap-1 font-sans text-[#8696a0] text-[11px] mt-1 pr-2 pb-1">
                    {dep.hora}
                    <svg viewBox="0 0 16 11" width="16" height="11" className="text-[#53bdeb] ml-0.5"><path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 0 0-.36-.186.465.465 0 0 0-.344.153.458.458 0 0 0-.14.337c0 .134.047.248.14.337l2.38 2.459a.463.463 0 0 0 .69-.012l6.54-8.069a.456.456 0 0 0 .12-.314.478.478 0 0 0-.14-.322z" fill="currentColor" /><path d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.249-.69.839 1.52 1.57a.463.463 0 0 0 .69-.012l6.54-8.069a.456.456 0 0 0 .12-.314.478.478 0 0 0-.14-.322z" fill="currentColor" /></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
