import React from 'react'
import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center my-8 opacity-40">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </div>
  )
}
