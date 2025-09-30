'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Section } from './ui/Section'

export function CallToAction() {
  const handleBookDemo = () => {
    window.open('https://calendly.com/samuel-netterai/30min', '_blank')
  }

  return (
    <Section id="cta" background="gray">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl mb-6">
            Don't wait — book a demo and start your free trial today to unlock the full power of your network.
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Button 
              onClick={handleBookDemo}
              size="lg"
              className="group text-lg px-8 py-4"
            >
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
