'use client'

import { motion } from 'framer-motion'
import { Network, Target, Zap, ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Card } from './ui/Card'

const steps = [
  {
    number: 'I',
    icon: Network,
    title: 'Build internal database',
    description: 'We collect employee connections to build your internal talent database.',
    details: 'We securely collect your employees\' LinkedIn connections to create a comprehensive internal database of potential candidates.',
    mockup: (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-blue-500"></div>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded flex-1"></div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded flex-1"></div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded flex-1"></div>
        </div>
        <div className="flex items-center space-x-2 ml-8">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded flex-1"></div>
        </div>
      </div>
    )
  },
  {
    number: 'II',
    icon: Target,
    title: 'Smart matching with ML',
    description: 'Submit job description + ideal profile. Our ML algorithm does the rest.',
    details: 'Simply submit your job description and ideal candidate profile. Our ML-based algorithm automatically matches relevant profiles from your database.',
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center justify-between p-2 bg-primary-50 dark:bg-primary-900/20 rounded">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-primary-500"></div>
            <div className="text-xs">Sarah Chen</div>
          </div>
          <div className="text-xs font-medium text-primary-600">95%</div>
        </div>
        <div className="flex items-center justify-between p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-neutral-400"></div>
            <div className="text-xs">David Park</div>
          </div>
          <div className="text-xs font-medium">92%</div>
        </div>
        <div className="flex items-center justify-between p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-neutral-400"></div>
            <div className="text-xs">Emily Johnson</div>
          </div>
          <div className="text-xs font-medium">88%</div>
        </div>
      </div>
    )
  },
  {
    number: 'III',
    icon: Zap,
    title: 'Automated referral outreach',
    description: 'We reach out to employees who know relevant profiles to verify fit and incentivize referrals.',
    details: 'We automatically contact employees who know the matched candidates, verify they\'re a great fit, then incentivize them to start the referral process.',
    mockup: (
      <div className="space-y-2">
        <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg border border-accent-200 dark:border-accent-800">
          <div className="text-xs font-medium text-accent-800 dark:text-accent-200">
            💡 Referral Opportunity
          </div>
          <div className="text-xs mt-1 text-accent-700 dark:text-accent-300">
            You know Sarah Chen - perfect for our Frontend role!
          </div>
          <div className="flex space-x-2 mt-2">
            <div className="px-2 py-1 bg-accent-600 text-white text-xs rounded">Refer</div>
            <div className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-xs rounded">Later</div>
          </div>
        </div>
      </div>
    )
  }
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              How Netter works
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Three simple steps to transform your hiring process
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
                  {/* Content */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                        <step.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
                      {step.details}
                    </p>
                    
                    <p className="text-base text-neutral-500 dark:text-neutral-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Mockup */}
                  <div className={`mt-8 lg:mt-0 lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Card className="p-6 shadow-lg">
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                        Step {step.number}
                      </div>
                      {step.mockup}
                    </Card>
                  </div>
                </div>

                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-12">
                    <ArrowRight className="h-6 w-6 text-neutral-400 dark:text-neutral-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
