'use client'

import { Container } from './ui/Container'
import { Logo } from './Logo'

const navigation = {
  product: [
    { name: 'Features', href: '#product' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'DPA', href: '#dpa' },
    { name: 'Security', href: '#security-page' },
  ],
  contact: [
    { name: 'Support', href: 'mailto:support@netter.com' },
    { name: 'Sales', href: 'mailto:sales@netter.com' },
    { name: 'Partnerships', href: 'mailto:partnerships@netter.com' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950">
      <Container>
        <div className="py-16">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Logo variant="white" size="lg" />
              </div>
              <p className="text-neutral-400 max-w-md">
                Automate hiring through employee referrals. Transform your team's network 
                into your most powerful recruiting channel.
              </p>
            </div>

            {/* Navigation links */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-3 mb-6">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-3">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-neutral-400">
                © 2024 Netter. All rights reserved.
              </p>
              
              <div className="mt-4 sm:mt-0 flex space-x-6">
                <a
                  href="#twitter"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                
                <a
                  href="#linkedin"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
