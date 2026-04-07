import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import bgFaq from '../../assets/03 SEÇÃO.jpg'

const faqs = [
  {
    pergunta: "Como funciona o financiamento? Eu pago a parcela com a economia da luz?",
    resposta: "Exatamente! Essa é a maior vantagem da energia solar hoje. Nós trocamos o valor que você já paga de conta de luz pela parcela do financiamento. Na prática, você adquire seu sistema solar sem tirar um novo valor do bolso mensalmente, usando a própria economia gerada para quitar o investimento."
  },
  {
    pergunta: "E se o dia estiver chuvoso ou nublado?",
    resposta: "O sistema solar fotovoltaico não precisa de céu limpo para funcionar. Ele capta a luz difusa do dia para gerar energia. Seu sistema continuará gerando economia mesmo em dias fechados ou chuvosos."
  },
  {
    pergunta: "Vocês resolvem a papelada com a concessionária?",
    resposta: "100%! Temos uma equipe de engenharia própria que cuida do projeto técnico, homologação e todas as tratativas com a concessionária de energia. Você não precisa se preocupar com nenhuma burocracia."
  },
  {
    pergunta: "A instalação faz muita sujeira e quebra-quebra na minha casa?",
    resposta: "De forma alguma. Nossas equipes (que possuem certificação NR-35) são treinadas para realizar a instalação nos telhados de forma limpa, ágil e segura, sem necessidade de grandes reformas ou obras pesadas na estrutura do imóvel."
  },
  {
    pergunta: "Qual é a vida útil dos equipamentos?",
    resposta: "Garantimos extrema durabilidade com painéis solares Tier 1 (WEG, BYD, etc). A vida útil dos módulos ultrapassa os 25 anos, com perda mínima de eficiência (menos de 0.5% ao ano)."
  },
  {
    pergunta: "Posso instalar em telhado de laje, cerâmica ou fibrocimento?",
    resposta: "Sim! Nossos sistemas são adaptáveis a praticamente todos os tipos de telhado: cerâmica, fibrocimento, metálico, laje e até solo. Nossa equipe de engenharia faz uma análise estrutural prévia para garantir que tudo seja instalado com total segurança e máxima eficiência."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-background w-full" id="faq">
      {/* Background Mesh/Grid Tecnológico Sutil com Fade Real */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
        }}
      />
      
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block flex items-center justify-center gap-2 drop-shadow-md">
            <HelpCircle size={18} /> Quebrando Objeções
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground">
            Perguntas <span className="text-gradient-orange">Frequentes</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg font-medium">Tire suas dúvidas finais sobre o investimento fotovoltaico</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-md ${isOpen ? 'border-primary shadow-[0_0_20px_rgba(249,115,22,0.15)] bg-card/85' : 'border-border/50 bg-card/40 hover:border-primary/50 hover:bg-card/70'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-heading font-black text-lg sm:text-xl transition-colors ${isOpen ? 'text-primary drop-shadow-sm' : 'text-foreground'}`}>
                    {faq.pergunta}
                  </span>
                  <ChevronDown 
                    size={24} 
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? '-rotate-180' : 'rotate-0'}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-border/20 mt-2 text-zinc-300 leading-relaxed font-medium">
                        {faq.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
