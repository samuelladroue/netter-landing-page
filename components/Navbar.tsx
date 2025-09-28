'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Security', href: '#security' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setDarkMode(isDark)
    }

    window.addEventListener('scroll', handleScroll)
    handleDarkMode()
    
    // Watch for dark mode changes
    const observer = new MutationObserver(handleDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  const handleBookDemo = () => {
    // This will be connected to the modal later
    console.log('Book demo clicked')
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-200',
        scrolled
          ? 'glass bg-white/80 backdrop-blur-md border-b border-neutral-200/50 dark:bg-neutral-950/80 dark:border-neutral-800/50'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-primary-600">Netter</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA and theme toggle */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button onClick={handleBookDemo} size="md">
              Book a demo
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:sm:ring-neutral-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-primary-600">Netter</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10 dark:divide-neutral-500/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center gap-2 -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-900 w-full text-left"
                    >
                      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      {darkMode ? 'Light mode' : 'Dark mode'}
                    </button>
                    <Button onClick={handleBookDemo} className="w-full">
                      Book a demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
