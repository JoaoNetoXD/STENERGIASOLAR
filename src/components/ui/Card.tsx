import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animateHover?: boolean;
}

export function Card({ className, children, animateHover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={animateHover ? { y: -6, scale: 1.02 } : undefined}
      className={cn(
        "bg-card/60 backdrop-blur-sm border border-border rounded-lg transition-all duration-300",
        animateHover && "hover:border-glow-orange hover:shadow-orange",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
