'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'

const faqs = [
  {
    question: 'How does Netter protect employee privacy and data?',
    answer: 'Employee privacy is our top priority. We require explicit opt-in consent from each employee before accessing their LinkedIn connections. Employees can revoke access at any time, and we immediately stop processing their data. We use AES-256 encryption, follow data minimization principles, and maintain comprehensive audit logs. All data processing complies with GDPR and other privacy regulations.'
  },
  {
    question: 'What LinkedIn permissions does Netter require?',
    answer: 'Netter only requests the minimum permissions necessary: access to basic profile information and first/second-degree connections. We never post on behalf of employees, access private messages, or modify their LinkedIn profiles. The connection data is used solely for matching candidates to open roles within your organization.'
  },
  {
    question: 'How do employees opt-in and what control do they have?',
    answer: 'Employees receive a clear invitation explaining how Netter works and what data will be accessed. They must actively consent before any data is collected. Once opted in, employees can see which of their connections have been matched to roles, control their notification preferences, and opt out completely at any time through their dashboard.'
  },
  {
    question: 'Which ATS systems does Netter integrate with?',
    answer: 'Netter integrates with major ATS platforms including Greenhouse, Lever, Workday, BambooHR, and others. We sync job openings, candidate information, and hiring status automatically. For systems we don\'t directly integrate with, we provide CSV export/import functionality and API access for custom integrations.'
  },
  {
    question: 'How can I customize our employee reward and incentive policies?',
    answer: 'Netter offers flexible reward systems that can be tailored to your company culture and budget. You can set different point values for various actions (referrals, profile shares, successful hires), create tier-based rewards, offer gift cards or cash bonuses, and set spending limits. You can also create custom rules based on role seniority, department, or other criteria.'
  },
  {
    question: 'How transparent is the ML matching algorithm?',
    answer: 'Our ML model considers multiple factors including skills match, experience level, company culture fit, and network strength. We provide transparency by showing the specific factors that contributed to each match score. You can see why a candidate was ranked highly and adjust the weighting of different factors to match your hiring priorities. We also support human-in-the-loop feedback to continuously improve matching accuracy.'
  },
  {
    question: 'What happens to our data if we stop using Netter?',
    answer: 'If you decide to stop using Netter, we provide a complete data export of all your referral data, analytics, and employee information. After your contract ends, we securely delete all your data within 30 days unless legally required to retain it longer. We can also provide a Data Processing Agreement (DPA) that outlines our data handling practices in detail.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq" background="gray">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Everything you need to know about Netter
            </p>
          </motion.div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                >
                  <span className="font-medium text-neutral-900 dark:text-neutral-100 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 dark:text-neutral-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact for more questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            Still have questions?{' '}
            <a
              href="mailto:support@netter.com"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
            >
              Get in touch with our team
            </a>
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
