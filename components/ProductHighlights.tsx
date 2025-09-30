'use client'

import { motion } from 'framer-motion'
import { Brain, MessageSquare, Gift } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'

const highlights = [
  {
    icon: Brain,
    title: 'ML ranking you can trust',
    description: 'Transparent signals, human-in-the-loop.',
    details: 'Our AI considers skills, experience, company culture fit, and network strength to surface the best candidates.',
    mockup: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span>Skills Match</span>
          <span className="font-medium">95%</span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
          <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: '95%' }}></div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span>Experience Level</span>
          <span className="font-medium">88%</span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
          <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: '88%' }}></div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span>Network Strength</span>
          <span className="font-medium">92%</span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
          <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: '92%' }}></div>
        </div>
      </div>
    )
  },
  {
    icon: MessageSquare,
    title: 'Warm intros at scale',
    description: 'One-click nudge flows, templates, reminders.',
    details: 'Automated workflows make it easy for employees to send personalized referral messages.',
    mockup: (
      <div className="space-y-3">
        <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded text-xs">
          <div className="font-medium">Template: Frontend Engineer</div>
          <div className="text-neutral-600 dark:text-neutral-400 mt-1">
            "Hi Sarah! We have an exciting Frontend role that seems perfect for you..."
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-primary-600 text-white text-xs rounded">Send</button>
          <button className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-xs rounded">Edit</button>
        </div>
      </div>
    )
  },
  {
    icon: Gift,
    title: 'Incentives & rewards',
    description: 'Points, tiers, gift cards or cash; policy rules.',
    details: 'Flexible reward system to motivate employees with points, leaderboards, and customizable incentives.',
    mockup: (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs">Your Points</div>
          <Badge variant="primary" size="sm">Gold Tier</Badge>
        </div>
        <div className="text-lg font-bold text-primary-600">2,450 pts</div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Successful referral</span>
            <span className="text-green-600">+500 pts</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Profile shared</span>
            <span className="text-blue-600">+50 pts</span>
          </div>
        </div>
      </div>
    )
  }
]

export function ProductHighlights() {
  return (
    <Section id="product" background="gray">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Powerful features to keep your project on track
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Everything you need to transform employee networks into your top hiring channel
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <highlight.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {highlight.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {highlight.description}
                </p>
                
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
                  {highlight.details}
                </p>

                {/* Mini UI Preview */}
                <div className="mt-auto">
                  <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg border">
                    {highlight.mockup}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Better cultural fit
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Referrals understand your company culture and values
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Higher retention rates
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Employees hired through referrals stay 45% longer on average
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
