import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'primary'
}

const backgroundClasses = {
  white: 'bg-white dark:bg-neutral-950',
  gray: 'bg-neutral-50 dark:bg-neutral-900',
  primary: 'bg-primary-50 dark:bg-primary-950/20'
}

export function Section({ children, className, id, background = 'white' }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  )
}
