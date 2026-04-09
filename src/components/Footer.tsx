import React from 'react'
import { Linkedin, Instagram, MapPin, Mail, Phone, ArrowUpRight, Facebook, Youtube } from 'lucide-react'
import logo from '../assets/logo-st-energia-solar.png'

export function Footer() {
  return (
    <footer className="bg-charcoal text-foreground pt-16 pb-8 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               {/* Logo / Brand Name */}
               <img src={logo} alt="ST Energia" className="h-11 w-auto mb-2" />
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Mais de 30 anos de infraestrutura sólida e 2000 projetos entregues. Somos a maior referência em transição energética do Norte e Nordeste.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="font-heading font-bold text-lg mb-6 text-white drop-shadow-sm">Links Rápidos</h4>
             <ul className="space-y-3">
               <li><a href="#sobre" className="text-zinc-300 font-medium text-sm hover:text-primary transition-colors">Sobre Nós</a></li>
               <li><a href="#solucoes" className="text-zinc-300 font-medium text-sm hover:text-primary transition-colors">Diferenciais</a></li>
               <li><a href="#parceiros" className="text-zinc-300 font-medium text-sm hover:text-primary transition-colors">Parceiros</a></li>
               <li><a href="#faq" className="text-zinc-300 font-medium text-sm hover:text-primary transition-colors">Perguntas Frequentes</a></li>
               <li><a href="#contatos" className="text-zinc-300 font-medium text-sm hover:text-primary transition-colors">Contato</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-heading font-bold text-lg mb-6 text-white drop-shadow-sm">Contato</h4>
             <ul className="space-y-4">
               <li className="hover:text-primary transition-colors cursor-pointer">
                 <a href="https://wa.me/558630250140?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20meu%20projeto." target="_blank" rel="noreferrer" className="flex items-start gap-3 w-full text-zinc-300 hover:text-primary">
                   <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                   <span>86 30250140<br/><span className="text-xs opacity-60">Comercial e WhatsApp</span></span>
                 </a>
               </li>
               <li className="flex items-center gap-3 text-zinc-300 font-medium text-sm hover:text-primary transition-colors cursor-pointer">
                 <a href="mailto:stenergia@stenergia.net" className="flex items-center gap-3 w-full text-zinc-300 hover:text-primary">
                   <Mail size={16} className="text-primary flex-shrink-0" />
                   stenergia@stenergia.net
                 </a>
               </li>
             </ul>
          </div>

           <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white drop-shadow-sm">Sede Operacional</h4>
             <ul className="space-y-4 mb-6">
               <li className="flex items-start gap-3 text-zinc-300 font-medium text-sm">
                 <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                 <span>Rua Des. Adalberto Correia Lima, N° 2390<br/>Ininga, Teresina - Piauí</span>
               </li>
             </ul>
             {/* Small Map Reference */}
             <a href="https://maps.app.goo.gl/iHksDL8ARtbBTpi58" target="_blank" rel="noreferrer" className="block w-full h-24 bg-card rounded-lg overflow-hidden border border-border/50 relative group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop" alt="Localização ST Energia" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0" />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-background/90 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-orange">Ver no Maps <ArrowUpRight size={12} /></span>
               </div>
             </a>
          </div>

        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ST Energia. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
