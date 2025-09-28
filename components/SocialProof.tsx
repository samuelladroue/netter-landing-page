'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Card } from './ui/Card'

// Placeholder company logos (using CSS shapes for now)
const companies = [
  { name: 'TechCorp', color: 'bg-blue-500' },
  { name: 'InnovateLabs', color: 'bg-green-500' },
  { name: 'DataFlow', color: 'bg-purple-500' },
  { name: 'CloudScale', color: 'bg-orange-500' },
  { name: 'DevTools', color: 'bg-red-500' },
  { name: 'AIStartup', color: 'bg-indigo-500' }
]

const testimonials = [
  {
    quote: "Netter cut our time-to-hire from 8 weeks to 3 weeks. The warm introductions from our team made all the difference in attracting top talent.",
    author: "Sarah Johnson",
    role: "VP of Engineering",
    company: "TechCorp",
    rating: 5
  },
  {
    quote: "We've seen a 5x increase in candidate response rates since implementing Netter. Our employees love being part of the hiring process.",
    author: "Michael Chen",
    role: "Head of Talent",
    company: "InnovateLabs", 
    rating: 5
  },
  {
    quote: "The ML matching is incredibly accurate. We're finding candidates we never would have discovered through traditional sourcing methods.",
    author: "Emily Rodriguez",
    role: "Talent Acquisition Lead",
    company: "DataFlow",
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
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-6 items-center justify-items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                {/* Placeholder logo using colored rectangle */}
                <div className={`w-16 h-8 ${company.color} rounded opacity-60 hover:opacity-80 transition-opacity`} />
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

          <div className="grid gap-8 lg:grid-cols-3">
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
                  
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mr-3">
                        <span className="text-white font-medium text-sm">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
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
