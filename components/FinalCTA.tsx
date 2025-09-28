'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, TrendingUp } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Button } from './ui/Button'

export function FinalCTA() {
  const handleBookDemo = () => {
    console.log('Book demo clicked')
  }

  return (
    <Section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </div>

      <Container className="relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turn your team's network into your{' '}
              <span className="text-primary-200">top hiring channel</span>
            </h2>
            
            <p className="mt-6 text-lg text-primary-100 max-w-2xl mx-auto">
              Join innovative companies using Netter to hire faster, 
              reduce costs, and find better candidates through warm introductions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button
              onClick={handleBookDemo}
              size="lg"
              className="bg-white text-primary-700 hover:bg-primary-50 shadow-xl hover:shadow-2xl group"
            >
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid gap-8 sm:grid-cols-3 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">80%</div>
              <div className="text-sm text-primary-200">Faster sourcing</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">60%</div>
              <div className="text-sm text-primary-200">Savings on hiring costs</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-3">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">+400%</div>
              <div className="text-sm text-primary-200">More referral hires</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
