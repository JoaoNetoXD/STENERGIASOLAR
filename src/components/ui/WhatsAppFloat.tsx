import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/558630250140?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20solar."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Contato pelo WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-charcoal text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-border">
        Fale conosco
      </span>
    </a>
  );
}
