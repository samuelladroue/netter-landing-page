'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    monthlyPrice: 99,
    annualPrice: 79,
    employees: 'Up to 100 employees',
    features: [
      'Core referral matching',
      'Basic employee network mapping',
      'Email notifications',
      'Standard support',
      'Basic analytics dashboard'
    ],
    cta: 'Start trial',
    popular: false
  },
  {
    name: 'Growth',
    description: 'Advanced features for scaling teams',
    monthlyPrice: 299,
    annualPrice: 239,
    employees: 'Up to 500 employees',
    features: [
      'Advanced ML matching',
      'Custom incentive programs',
      'Slack/Teams integration',
      'ATS integration (Greenhouse, Lever)',
      'Advanced analytics & reporting',
      'Priority support',
      'Custom referral templates'
    ],
    cta: 'Book a demo',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Full-scale solution for large organizations',
    monthlyPrice: null,
    annualPrice: null,
    employees: 'Unlimited employees',
    features: [
      'Everything in Growth',
      'SSO/SAML integration',
      'Data Processing Agreement (DPA)',
      'Custom SLAs',
      'Dedicated customer success manager',
      'Custom integrations',
      'Advanced security controls',
      'White-label options'
    ],
    cta: 'Talk to sales',
    popular: false
  }
]

const faqs = [
  {
    question: 'How does the rollout process work?',
    answer: 'We provide a dedicated onboarding specialist to help you set up Netter, import your team, and configure your first referral campaigns. Most customers are up and running within 2 weeks.'
  },
  {
    question: 'What security measures are in place?',
    answer: 'We use enterprise-grade security including AES-256 encryption, SOC 2 compliance (roadmap), and require explicit employee consent for all data access. All data is processed in accordance with GDPR and other privacy regulations.'
  },
  {
    question: 'Can employees opt out at any time?',
    answer: 'Yes, employees have full control over their participation. They can opt out at any time, and we immediately stop accessing their network data and remove them from all referral campaigns.'
  }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleStartTrial = () => {
    console.log('Start trial clicked')
  }

  const handleBookDemo = () => {
    console.log('Book demo clicked')
  }

  const handleTalkToSales = () => {
    console.log('Talk to sales clicked')
  }

  return (
    <Section id="pricing">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Choose the plan that fits your team size and needs
            </p>
          </motion.div>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'text-neutral-900 dark:text-neutral-100 font-medium' : 'text-neutral-600 dark:text-neutral-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  isAnnual ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-neutral-900 dark:text-neutral-100 font-medium' : 'text-neutral-600 dark:text-neutral-400'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="primary" size="sm">
                  Save 20%
                </Badge>
              )}
            </div>
          </motion.div>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className={`h-full ${tier.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="primary" className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Most Popular</span>
                    </Badge>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {tier.description}
                  </p>

                  <div className="mt-6">
                    {tier.monthlyPrice ? (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                          ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 ml-1">
                          /month
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                        Custom
                      </div>
                    )}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {tier.employees}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      onClick={
                        tier.name === 'Starter' ? handleStartTrial :
                        tier.name === 'Growth' ? handleBookDemo :
                        handleTalkToSales
                      }
                      variant={tier.popular ? 'primary' : 'outline'}
                      className="w-full group"
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mini FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 text-center mb-8">
            Frequently asked questions
          </h3>
          <div className="grid gap-6 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  {faq.question}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
