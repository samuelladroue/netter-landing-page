'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ProblemPromise } from '@/components/ProblemPromise'
import { HowItWorks } from '@/components/HowItWorks'
import { ProductHighlights } from '@/components/ProductHighlights'
import { Security } from '@/components/Security'
import { SocialProof } from '@/components/SocialProof'
import { CallToAction } from '@/components/CallToAction'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemPromise />
      <HowItWorks />
      <ProductHighlights />
      <SocialProof />
      <Security />
      <CallToAction />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
