import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-28" style={{ background: '#06030f' }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(66,6,153,0.48) 0%, rgba(4,32,105,0.48) 45%, rgba(176,11,105,0.32) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-35" style={{ background: '#420699' }} />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-28" style={{ background: '#b00b69' }} />

          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(232,121,160,0.9)', fontFamily: 'Syne, sans-serif' }}
            >
              Get Started Today
            </p>
            <h2
              className="font-bold text-white mb-5"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
              }}
            >
              Your clinic deserves <br />
              smarter queues.
            </h2>
            <p className="mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.52)' }}>
              Join hundreds of clinics already running MediQueue. Setup takes less than 10 minutes. Free forever for small clinics.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #b00b69, #420699)',
                  fontFamily: 'Syne, sans-serif',
                  boxShadow: '0 0 56px rgba(176,11,105,0.5), 0 4px 24px rgba(0,0,0,0.4)',
                }}
              >
                Start for Free — No Card Needed
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-white/10"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(240,234,255,0.85)',
                  fontFamily: 'Syne, sans-serif',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
