import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { RefreshCcw, Sun, ArrowRight, Mail, Phone, User, Zap } from 'lucide-react'

const TARIFA_MEDIA = 0.98
const HORAS_SOL_PLENO = 5.5
const EFICIENCIA_SISTEMA = 0.75
const CUSTO_KWP = 3800

export function SimulatorCard() {
  const [step, setStep] = useState(1)
  const [isSimulating, setIsSimulating] = useState(false)
  const [result, setResult] = useState<null | {
    potencia: string,
    economia25: number,
    payback: string,
    consumoKwh: number 
  }>(null)

  const [formData, setFormData] = useState({
    nome: '',
    valorConta: '',
    celular: '',
    email: ''
  })

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    value = (Number(value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    setFormData({ ...formData, valorConta: value })
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    const conta = parseFloat(formData.valorConta.replace(/\D/g, '')) / 100
    if (conta < 50 || isNaN(conta)) {
      alert('Por favor, informe um valor aproximado da conta (mínimo R$ 50,00).')
      return;
    }
    if (!formData.nome.trim()) {
      alert('Por favor, nos diga o seu nome.')
      return;
    }
    setStep(2)
  }

  const calcularSimulacao = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.celular.trim() || !formData.email.trim()) {
      alert('Preencha os campos para receber o resultado detalhado.')
      return;
    }
    
    setIsSimulating(true)
    
    setTimeout(() => {
      const conta = parseFloat(formData.valorConta.replace(/\D/g, '')) / 100
      const consumoMensalKwh = conta / TARIFA_MEDIA
      const geracaoDiariaKwh = consumoMensalKwh / 30
      const potenciaKWp = geracaoDiariaKwh / (HORAS_SOL_PLENO * EFICIENCIA_SISTEMA)
      
      const custoEstimado = potenciaKWp * CUSTO_KWP
      const economiaMensal = conta * 0.95 
      const paybackAnos = (custoEstimado / (economiaMensal * 12)).toFixed(1)

      let economia25Anos = 0
      let economiaAnoAtual = economiaMensal * 12
      for(let i = 0; i < 25; i++) {
        economia25Anos += economiaAnoAtual
        economiaAnoAtual *= 1.06
      }

      setResult({
        potencia: potenciaKWp.toFixed(2),
        economia25: economia25Anos,
        payback: paybackAnos,
        consumoKwh: Math.round(consumoMensalKwh)
      })
      
      setIsSimulating(false)
      setStep(3)
    }, 1500)
  }

  return (
    <div className="relative bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden w-full max-w-lg mx-auto backdrop-blur-sm">
      {/* Progress Bar Header */}
      {step < 3 && (
        <div className="w-full bg-secondary/50 h-1.5 flex">
          <div className="bg-primary h-full transition-all duration-500 ease-out" style={{ width: step === 1 ? '50%' : '100%' }} />
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 relative z-10"
          >
            <div className="mb-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-foreground mb-3 flex justify-center items-center gap-2">
                 Simulador Gratuito
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base px-2">Descubra sua economia de até 95% em apenas 2 passos.</p>
            </div>

            <form onSubmit={handleNextStep} className="flex flex-col gap-5">
              <div>
                <label className="block text-primary text-xs font-bold mb-2 tracking-wider">QUAL O VALOR MÉDIO DA SUA CONTA? (R$) *</label>
                <div className="relative flex items-center">
                  <Zap className="absolute left-4 text-primary/60" size={20} />
                  <input 
                    required 
                    autoFocus
                    type="text" 
                    inputMode="numeric"
                    placeholder="R$ 0,00" 
                    value={formData.valorConta}
                    onChange={handleCurrencyChange}
                    className="w-full bg-secondary/30 border border-border rounded-xl pl-12 pr-4 py-5 text-xl sm:text-2xl font-black text-primary focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-white/20" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted-foreground text-xs font-bold mb-2 tracking-wider">COMO PODEMOS TE CHAMAR? *</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 text-muted-foreground/50" size={20} />
                  <input 
                    required 
                    type="text" 
                    placeholder="Seu nome completo" 
                    value={formData.nome} 
                    onChange={e => setFormData({...formData, nome: e.target.value})} 
                    className="w-full bg-secondary/30 border border-border rounded-xl pl-12 pr-4 py-4 text-base text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-white/20" 
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button type="submit" variant="primary" className="w-full py-5 text-base font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  Avançar <ArrowRight className="ml-2" size={20} />
                </Button>
                <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-4 font-medium">Leva menos de 30 segundos.</p>
              </div>
            </form>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 relative z-10"
          >
            <div className="mb-6 relative">
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className="absolute left-0 top-1 text-muted-foreground hover:text-foreground flex items-center text-xs font-semibold"
              >
                Voltar
              </button>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-center text-foreground mb-2 mt-8">Quase lá, {formData.nome.split(' ')[0]}!</h3>
              <p className="text-muted-foreground text-sm text-center px-4">Para onde devemos enviar sua simulação e estudo de viabilidade?</p>
            </div>

            <form onSubmit={calcularSimulacao} className="flex flex-col gap-5">
              <div>
                <label className="block text-foreground text-xs font-bold mb-2 tracking-wider">SEU MELHOR WHATSAPP *</label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-4 text-muted-foreground/50" size={20} />
                  <input 
                    required 
                    autoFocus
                    type="tel" 
                    placeholder="(00) 90000-0000" 
                    value={formData.celular} 
                    onChange={e => setFormData({...formData, celular: e.target.value})} 
                    className="w-full bg-secondary/30 border border-border rounded-xl pl-12 pr-4 py-4 text-base text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-white/20" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground text-xs font-bold mb-2 tracking-wider">SEU E-MAIL PRINCIPAL *</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 text-muted-foreground/50" size={20} />
                  <input 
                    required 
                    type="email" 
                    placeholder="voce@email.com.br" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    className="w-full bg-secondary/30 border border-border rounded-xl pl-12 pr-4 py-4 text-base text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-white/20" 
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button type="submit" variant="primary" className="w-full py-5 text-base font-black shadow-[0_0_20px_rgba(249,115,22,0.3)] tracking-wide" disabled={isSimulating}>
                  {isSimulating ? (
                    <> <RefreshCcw className="mr-3 animate-spin" size={20} /> PROCESSANDO... </>
                  ) : (
                    'GERAR MINHA SIMULAÇÃO'
                  )}
                </Button>
                <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium px-4">Seus dados estão 100% seguros conosco e não enviamos spam.</p>
              </div>
            </form>
          </motion.div>
        )}

        {step === 3 && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
            className="p-6 sm:p-10 relative z-10 flex flex-col items-center text-center"
          >
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center border border-green-500/50 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Sun size={32} className="text-green-500" />
            </div>
            
            <h3 className="font-heading font-black text-2xl text-foreground mb-2">Simulação Pronta!</h3>
            <p className="text-muted-foreground text-sm mb-8 max-w-sm">
              Enviamos os detalhes em PDF para o seu e-mail e WhatsApp. Veja o resumo rápido do seu sistema:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-secondary/40 border border-border p-4 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Tamanho do Sistema</span>
                <span className="font-heading font-black text-xl text-foreground">{result.potencia} kWp</span>
              </div>
              <div className="bg-secondary/40 border border-border p-4 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Tempo de Payback</span>
                <span className="font-heading font-black text-xl text-foreground">{result.payback} Anos</span>
              </div>
              <div className="sm:col-span-2 bg-primary/10 border border-primary/30 p-5 rounded-xl flex flex-col items-center shadow-[0_0_15px_rgba(249,115,22,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] animate-[shimmer_2s_infinite]" />
                <span className="text-xs text-primary uppercase tracking-widest font-black mb-1">Economia Projetada (25 anos)</span>
                <span className="font-heading font-black text-3xl sm:text-4xl text-primary">
                  {result.economia25.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <a href={`https://wa.me/558630250140?text=Ol%C3%A1!%20Fiz%20uma%20simula%C3%A7%C3%A3o%20pelo%20site%20no%20nome%20de%20${formData.nome}%20com%20conta%20de%20${formData.valorConta}.%20Quero%20falar%20com%20um%20especialista.`} target="_blank" rel="noreferrer" className="w-full">
                <Button variant="primary" className="w-full py-4 text-sm font-bold uppercase tracking-wide gap-2 bg-green-500 hover:bg-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                   Acelerar Atendimento
                </Button>
              </a>
              <Button variant="ghost" onClick={() => { setStep(1); setResult(null); setFormData({nome:'', valorConta:'', celular:'', email:''}); }} className="w-full py-3 text-xs font-bold uppercase text-muted-foreground hover:text-foreground">
                Refazer Simulação
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
