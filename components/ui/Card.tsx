import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = false, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900',
        hover && 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        glass && 'glass bg-white/80 dark:bg-neutral-900/80',
        className
      )}
    >
      {children}
    </div>
  )
}
