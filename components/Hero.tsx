'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { ProductPreview } from './ProductPreview'

export function Hero() {
  const handleBookDemo = () => {
    console.log('Book demo clicked')
  }

  const handleSeeHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950/20 dark:via-neutral-950 dark:to-accent-950/20" />
      
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Left column - Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl lg:text-5xl xl:text-6xl">
                Automate sourcing through{' '}
                <span className="text-primary-600">employee referrals</span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 sm:text-xl sm:leading-9">
                Netter maps your company network, finds relevant profiles when roles open, 
                and motivates employees to make warm introductions. The strongest and easiest way to hire.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleBookDemo}
                  size="lg"
                  className="group"
                >
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  onClick={handleSeeHowItWorks}
                  variant="outline"
                  size="lg"
                  className="group"
                >
                  <Play className="mr-2 h-4 w-4" />
                  See how it works
                </Button>
              </div>

              {/* Stats */}
              <motion.div 
                className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <div className="text-2xl font-bold text-primary-600">80%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Faster sourcing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">60%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Savings on hiring costs</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-primary-600">+400%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">More referral hires</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Product Preview */}
          <div className="relative mx-auto mt-16 max-w-2xl lg:col-span-5 lg:mt-0 lg:max-w-none xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProductPreview />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
