import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-bold transition-colors disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    primary: "bg-primary text-primary-foreground px-6 py-3.5 shadow-orange hover:bg-accent",
    secondary: "text-foreground/80 hover:text-foreground px-5 py-3.5 border border-border/50 hover:border-primary/30 backdrop-blur-sm",
    ghost: "text-foreground hover:bg-white/5 px-4 py-2"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
