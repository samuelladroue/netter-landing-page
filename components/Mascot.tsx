'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MascotProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48'
}

export function Mascot({ className, size = 'lg', animate = true }: MascotProps) {
  const mascotContent = (
    <div className={cn(sizeClasses[size], 'relative', className)}>
      {/* Use your original mascot image */}
      <Image
        src="/netter-mascot.png"
        alt="Netter Mascot"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
        onError={(e) => {
          // Fallback to emoji if image fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling.style.display = 'block';
        }}
      />
      {/* Fallback emoji (hidden by default) */}
      <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
        <span className="text-6xl">🐙</span>
      </div>
    </div>
  )

  if (!animate) {
    return mascotContent
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 0.8, 
        y: { 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      className="cursor-pointer"
    >
      {mascotContent}
    </motion.div>
  )
}
