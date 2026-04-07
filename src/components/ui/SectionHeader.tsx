import React from 'react'

interface SectionHeaderProps {
  overline: string;
  title: string;
  highlight: string;
  subtitle: string;
}

export function SectionHeader({ overline, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block">
        {overline}
      </span>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
        {title} <span className="text-gradient-orange">{highlight}</span>
      </h2>
      <p className="text-secondary-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
        {subtitle}
      </p>
    </div>
  )
}
