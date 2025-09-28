import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Analytics placeholder - replace with your analytics provider
  if (typeof window !== 'undefined') {
    console.log('Analytics Event:', eventName, properties)
    // Example: analytics.track(eventName, properties)
  }
}
