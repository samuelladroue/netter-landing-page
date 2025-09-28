'use client'

import { motion } from 'framer-motion'
import { X, Clock, UserX, CheckCircle } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'

const problems = [
  {
    icon: X,
    text: 'Cold outreach is noisy',
    description: 'Generic messages get ignored in crowded inboxes'
  },
  {
    icon: Clock,
    text: 'Sourcing is slow & expensive',
    description: 'Traditional recruiting takes months and costs thousands'
  },
  {
    icon: UserX,
    text: 'Good candidates ignore strangers',
    description: 'Top talent rarely responds to unknown recruiters'
  }
]

export function ProblemPromise() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              The sourcing challenge
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Traditional sourcing methods are broken
            </p>
          </motion.div>

          {/* Problems grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <problem.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {problem.text}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-neutral-50 dark:bg-neutral-900 px-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  But there's a better way
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                <CheckCircle className="h-10 w-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Referrals are the strongest and easiest way to hire
              </h3>
              <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Top tech companies get 30-40% of their hires through referrals. They deliver better cultural fit, 
                higher retention rates, and faster onboarding than any other sourcing method.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
