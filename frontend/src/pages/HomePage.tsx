import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import TrustedBy from '@/components/home/TrustedBy'
import HowItWorks from '@/components/home/HowItWorks'
import StatsStrip from '@/components/home/StatsStrip'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <div style={{ background: '#06030f' }}>
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <StatsStrip />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}
