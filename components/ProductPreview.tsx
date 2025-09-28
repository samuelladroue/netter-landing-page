'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Star, TrendingUp, Users } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'

const candidates = [
  {
    name: 'Sarah Chen',
    role: 'Senior Frontend Engineer',
    company: 'Stripe',
    match: 95,
    connections: ['Alex Kim', 'Maria Rodriguez'],
    skills: ['React', 'TypeScript', 'Node.js'],
    location: 'San Francisco, CA'
  },
  {
    name: 'David Park',
    role: 'Software Engineer',
    company: 'Figma',
    match: 92,
    connections: ['Jennifer Liu'],
    skills: ['React', 'TypeScript', 'GraphQL'],
    location: 'New York, NY'
  },
  {
    name: 'Emily Johnson',
    role: 'Frontend Engineer',
    company: 'Stripe',
    match: 88,
    connections: ['Michael Brown', 'Sarah Wilson'],
    skills: ['React', 'JavaScript', 'CSS'],
    location: 'Seattle, WA'
  }
]

export function ProductPreview() {
  return (
    <div className="relative">
      {/* Main dashboard mockup */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Senior Frontend Engineer
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                3 candidates from your network
              </p>
            </div>
            <Badge variant="primary">Active</Badge>
          </div>

          {/* Candidates list */}
          <div className="space-y-4">
            {candidates.map((candidate, index) => (
              <motion.div
                key={candidate.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          {candidate.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">
                            {candidate.match}% match
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {candidate.role} at {candidate.company}
                      </p>
                      <div className="flex items-center mt-1 space-x-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">
                            {candidate.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-neutral-400" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">
                            {candidate.connections.length} connections
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {candidate.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} size="sm" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Floating connection indicators */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Users className="w-6 h-6 text-primary-600" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Star className="w-5 h-5 text-accent-600 fill-current" />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-2xl" />
      </div>
    </div>
  )
}
