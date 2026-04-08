import React from 'react'
import { motion } from 'framer-motion'

const depoimentos = [
  {
    nome: "Carlos Eduardo",
    texto: "Macho, minha conta da Equatorial era quase 900 reais todo mês com esse calor de Teresina… agora tô pagando só a taxa mínima! Ainda financiei tudo pelo banco e a parcela ficou MENOR que a conta antiga. Não tem nem comparação 🔥",
    hora: "09:14"
  },
  {
    nome: "Francisca Lima",
    texto: "Gente, tô impressionada! A equipe veio, fez tudo certinho em dois dias e deixou a casa impecável. Meu marido ficou desconfiado no início mas quando chegou a primeira conta ele ficou sem acreditar kkkk já indiquei pra minha vizinha e minha irmã lá no Dirceu 👏",
    hora: "14:32"
  },
  {
    nome: "Raimundo Sousa",
    texto: "Tenho uma oficina aqui na zona sul e o gasto com energia era absurdo, mais de 2 mil por mês. Depois que coloquei o sistema pela ST, a economia foi imediata. Em menos de 4 anos já vou ter o retorno total do investimento. Recomendo demais! 💰",
    hora: "17:45"
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
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              className="bg-[#0b141a] border border-border/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl relative transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 cursor-pointer"
            >
              {/* Fake WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-white/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#6b7b8d] flex items-center justify-center border border-primary/20">
                  <svg viewBox="0 0 212 212" width="24" height="24" className="text-[#cfd9df]">
                    <path fill="currentColor" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                    <path fill="#fff" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.218-.09-.437-.176-.656-.262a68.867 68.867 0 0 0-6.447-2.198 13.607 13.607 0 0 1-.39-.109l-1.078-.31c-3.327-1.019-6.8-1.694-10.378-2.013-.655-.056-.424-.049-1.079-.09a69.065 69.065 0 0 0-6.403-.058l-.084.003c-1.874.067-3.724.229-5.544.479-1.648.226-3.27.537-4.858.926l-.089.02c-.891.219-1.773.461-2.644.726a59.836 59.836 0 0 0-3.33 1.162l-.073.029a56.47 56.47 0 0 0-2.32.975l-.018.008a54.08 54.08 0 0 0-2.4 1.175l-.026.014a71.568 71.568 0 0 0-4.755 2.854l-.383.252a65.242 65.242 0 0 0-3.898 2.88c-.192.153-.384.308-.573.465a57.625 57.625 0 0 0-1.598 1.375c-.36.322-.714.65-1.062.984l-.086.082a57.98 57.98 0 0 0-1.608 1.64l-.034.037a59.463 59.463 0 0 0-5.735 7.464 5.06 5.06 0 0 1-.363.467 62.635 62.635 0 0 0-4.756 8.444c-.025.054-.052.109-.076.163l-.078.169-.14.317-.126.286-.12.283-.022.054c-.128.311-.253.624-.374.94-.1.26-.197.523-.291.788l-.054.15c-.03.087-.06.174-.088.262l-.06.185c-.032.1-.063.2-.093.303l-.032.109c-.064.22-.125.443-.184.668l-.01.042a30.548 30.548 0 0 0-.2.835c-.031.14-.06.28-.088.422-.02.098-.04.198-.057.297l-.045.258c-.015.09-.028.18-.04.272-.03.22-.054.441-.072.664l-.004.052-.002.028a.397.397 0 0 0 .004.062l.005.042.014.102.01.063.03.13.011.043.044.13.018.045.048.105.013.026.053.09.017.025a.2.2 0 0 0 .028.037l.018.021.012.012.02.019c1.256 1.095 137.009 1.084 138.21-.026a.214.214 0 0 0 .049-.065l.018-.031.048-.093.015-.032.035-.085.019-.053.027-.086.01-.035.022-.098.008-.042.017-.11.003-.028.007-.073v-.049l-.002-.06a4.966 4.966 0 0 0-.062-.566z" />
                    <path fill="#fff" d="M106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-2.023 36.413 36.413 0 0 0 6.15-3.96 35.862 35.862 0 0 0 5.12-5.13 36.28 36.28 0 0 0 3.96-6.15 37.124 37.124 0 0 0 2.024-5.12 38.272 38.272 0 0 0 .896-3.624c.484-2.468.737-5.035.737-7.68 0-2.645-.253-5.212-.737-7.68a38.272 38.272 0 0 0-.896-3.624 37.124 37.124 0 0 0-2.023-5.12 36.413 36.413 0 0 0-3.96-6.15 35.862 35.862 0 0 0-5.13-5.12 36.28 36.28 0 0 0-6.15-3.96 37.124 37.124 0 0 0-5.12-2.024 38.272 38.272 0 0 0-3.624-.896 39.88 39.88 0 0 0-7.68-.737c-2.645 0-5.212.253-7.68.737a38.272 38.272 0 0 0-3.624.896 37.124 37.124 0 0 0-5.12 2.023 36.413 36.413 0 0 0-6.15 3.96 35.862 35.862 0 0 0-5.12 5.13 36.28 36.28 0 0 0-3.96 6.15 37.124 37.124 0 0 0-2.024 5.12 38.272 38.272 0 0 0-.896 3.624c-.484 2.468-.737 5.035-.737 7.68 0 2.645.253 5.212.737 7.68.222 1.22.52 2.422.896 3.624a37.124 37.124 0 0 0 2.023 5.12 36.413 36.413 0 0 0 3.96 6.15 35.862 35.862 0 0 0 5.13 5.12 36.28 36.28 0 0 0 6.15 3.96 37.124 37.124 0 0 0 5.12 2.024c1.202.376 2.404.674 3.624.896 2.468.484 5.035.737 7.68.737z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-[#e9edef] font-semibold text-sm truncate">{dep.nome}</h4>
                  <p className="text-[#8696a0] text-xs">online</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4 sm:p-5 bg-[#0b141a] flex-1 relative min-h-[220px] flex flex-col justify-end items-start">
                {/* Wallpaper sim */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-repeat" />

                {/* Balão WhatsApp Recebido */}
                <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-sm text-[#e9edef] relative w-full sm:max-w-[95%] shadow-[0_2px_4px_rgba(0,0,0,0.3)] ml-2 inline-block z-10">
                  <p className="text-[14px] sm:text-[15px] leading-[22px] mb-1">{dep.texto}</p>
                  <div className="flex justify-end items-center gap-1 font-sans text-[#8696a0] text-[11px] mt-1 pr-1 pb-0.5">
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
