import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Shield, Zap, TrendingUp } from 'lucide-react'

const stats = [
  { value: '50,000+', label: 'Patients Managed',  icon: Users },
  { value: '99.9%',   label: 'Uptime Guaranteed', icon: Shield },
  { value: '< 30s',   label: 'Avg Booking Time',  icon: Zap },
  { value: '200+',    label: 'Clinics Onboarded', icon: TrendingUp },
]

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, rgba(66,6,153,0.14) 0%, rgba(4,32,105,0.18) 50%, rgba(176,11,105,0.1) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon className="w-5 h-5 mx-auto mb-3" style={{ color: 'rgba(176,11,105,0.8)' }} />
            <p
              className="font-bold text-white mb-1"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                letterSpacing: '-0.035em',
              }}
            >
              {s.value}
            </p>
            <p className="text-xs" style={{ color: 'rgba(240,234,255,0.4)' }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
