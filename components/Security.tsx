'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, FileText, Users, CheckCircle } from 'lucide-react'
import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Compliance',
    description: 'Enterprise-grade security controls and regular audits',
    status: 'active'
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'End-to-end encryption in transit and at rest',
    status: 'active'
  },
  {
    icon: Users,
    title: 'SSO & SAML',
    description: 'Single sign-on with your identity provider',
    status: 'active'
  },
  {
    icon: FileText,
    title: 'GDPR Ready',
    description: 'Full compliance with European data protection regulations',
    status: 'active'
  }
]


export function Security() {
  return (
    <Section id="security">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Security & Compliance
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Enterprise-grade security you can trust
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {feature.title}
                  </h3>
                  {feature.status === 'active' && (
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Data Protection
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Employee opt-in required for all data access
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Data minimization - only collect what's necessary
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Right to revoke access at any time
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Comprehensive audit logs for all activities
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Infrastructure Security
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      AES-256 encryption for data at rest
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      TLS 1.3 encryption for data in transit
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Regular security assessments and penetration testing
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      24/7 monitoring and incident response
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

      </Container>
    </Section>
  )
}
