'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Card } from './ui/Card'

// Real company logos - updated
const companies = [
  { name: 'Alan', logo: '/logo Alan.png' },
  { name: 'Riot Games', logo: '/logo riot.png' },
  { name: 'IDA', logo: '/logo ida.png' },
  { name: 'EY', logo: '/logo EY.png' },
  { name: 'Oliverlist', logo: '/logo oliverlist.png' }
]

const testimonials = [
  {
    quote: "We truly needed this software and it would be hard for us to continue without it. We went from 12% to 38% referrals among hires in only one month",
    author: "Maxime Lebras",
    role: "Talent Lead at Alan",
    company: "700+ employees",
    rating: 5
  },
  {
    quote: "I'd been thinking about a tool like Netter for months, as I struggled to leverage referrals despite offering a €3,000 referral bonus. Now everything is super smooth",
    author: "Benjamin Netter",
    role: "CEO at Riot",
    company: "100+ employees",
    rating: 5
  }
]

export function SocialProof() {
  return (
    <Section background="gray">
      <Container>
        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-8">
            Trusted by innovative companies
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 items-center justify-items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative w-24 h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              What our customers say
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              See how teams are transforming their hiring with Netter
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-neutral-700 dark:text-neutral-300 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mr-4">
                        <span className="text-white font-medium text-base">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="p-8">
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  10k+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Successful referrals
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  20k+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Active employees
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  4.9
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Customer satisfaction
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
