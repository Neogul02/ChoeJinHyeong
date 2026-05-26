'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  id?: string
  delay?: number
  children: React.ReactNode
  className?: string
}

export default function AnimatedSection({ id, delay = 0, children, className = '' }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`max-w-5xl mx-auto py-16 px-4 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}>
      {children}
    </motion.section>
  )
}
