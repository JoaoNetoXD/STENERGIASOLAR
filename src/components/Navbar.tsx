import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '../lib/utils'
import logo from '../assets/logo-st-energia-solar.png'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-background/95 md:bg-background/90 md:backdrop-blur-lg border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          <div className="cursor-pointer flex items-center">
            <img src={logo} alt="ST Energia" className={cn("w-auto transition-all duration-500 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]", scrolled ? "h-11" : "h-14")} />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">SOBRE NÓS</a>
            <a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">SOLUÇÕES</a>
            <a href="#parceiros" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">PARCEIROS</a>
            <Button variant="primary" className="py-2.5 px-6 text-sm h-auto shadow-orange">
              Solicitar Orçamento
            </Button>
          </nav>

          <button className="md:hidden text-foreground hover:text-primary transition-colors p-2 -mr-2 flex items-center justify-center rounded-lg hover:bg-white/5 active:bg-white/10" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="fixed inset-0 z-40 bg-background/98 flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 text-xl">
              <a href="#sobre" onClick={() => setMobileMenu(false)} className="text-foreground hover:text-primary font-bold">Sobre Nós</a>
              <a href="#solucoes" onClick={() => setMobileMenu(false)} className="text-foreground hover:text-primary font-bold">Soluções Solares</a>
              <a href="#parceiros" onClick={() => setMobileMenu(false)} className="text-foreground hover:text-primary font-bold">Parceiros</a>
              <Button variant="primary" onClick={() => setMobileMenu(false)} className="mt-4">
                Solicitar Orçamento
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
