import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  variant?: 'default' | 'white'
}

const sizeClasses = {
  sm: {
    container: 'h-16',
    logo: 'h-16 w-auto',
  },
  md: {
    container: 'h-20',
    logo: 'h-20 w-auto',
  },
  lg: {
    container: 'h-24',
    logo: 'h-24 w-auto',
  }
}

export function Logo({ className, size = 'md', showText = true, variant = 'default' }: LogoProps) {
  const sizes = sizeClasses[size]
  
  return (
    <div className={cn('flex items-center', sizes.container, className)}>
      {/* Use transparent logo - no background removal needed! */}
      <Image
        src="/netter_logo_transparent.png"
        alt="Netter Logo"
        width={400}
        height={100}
        className={cn(
          'object-contain',
          sizes.logo,
          // Simple styling for white variant (footer)
          variant === 'white' ? 'brightness-0 invert' : ''
        )}
        priority
        style={{
          filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  )
}
