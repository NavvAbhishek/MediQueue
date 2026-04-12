import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Calendar, Stethoscope, BarChart3, Clock, Shield } from 'lucide-react'

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="features" className="py-28" style={{ background: '#06030f' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#b00b69', fontFamily: 'Syne, sans-serif' }}
          >
            Everything You Need
          </p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              lineHeight: 1.05,
              maxWidth: '28ch',
            }}
          >
            Built for every role <br />
            <span style={{ color: 'rgba(240,234,255,0.35)' }}>in the clinic</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="lg:col-span-2 p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(66,6,153,0.22), rgba(4,32,105,0.18))',
              border: '1px solid rgba(66,6,153,0.2)',
            }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ background: '#420699' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(66,6,153,0.28)' }}>
                <Activity className="w-6 h-6" style={{ color: '#a78bfa' }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.025em' }}>
                Real-Time Queue Tracking
              </h3>
              <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(240,234,255,0.5)' }}>
                Live queue board refreshes every 10 seconds. Patients see exactly where they stand. Doctors see who's next. Everyone stays informed.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['#044', '#045', '#046', '#047', '#048'].map((t, i) => (
                  <motion.div
                    key={t}
                    animate={i === 3 ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.3 * i }}
                    className="px-3 py-2 rounded-lg text-xs font-bold"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      background: i === 3 ? 'linear-gradient(135deg, #b00b69, #420699)' : 'rgba(255,255,255,0.06)',
                      color: i === 3 ? '#fff' : 'rgba(240,234,255,0.45)',
                      boxShadow: i === 3 ? '0 0 16px rgba(176,11,105,0.4)' : 'none',
                    }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(176,11,105,0.15)' }}>
              <Calendar className="w-6 h-6" style={{ color: '#e879a0' }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}>
              Smart Booking
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.48)' }}>
              Book, reschedule, or cancel in seconds. Intelligent time-slot allocation prevents double-booking at the database level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(4,32,105,0.4)' }}>
              <Stethoscope className="w-6 h-6" style={{ color: '#6d9cff' }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}>
              Doctor Dashboard
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.48)' }}>
              Control your entire queue from one screen. Call next, skip, complete — one click per action. Designed for speed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(66,6,153,0.2)' }}>
              <BarChart3 className="w-6 h-6" style={{ color: '#a78bfa' }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}>
              Analytics & Insights
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.48)' }}>
              Track peak hours, average wait times, and patient flow. Data-driven decisions for a better clinic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-2 p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(176,11,105,0.14), rgba(66,6,153,0.1))',
              border: '1px solid rgba(176,11,105,0.14)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(176,11,105,0.2)' }}>
                  <Clock className="w-6 h-6" style={{ color: '#e879a0' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.025em' }}>
                  Dynamic Wait Time
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.5)' }}>
                  Real-time wait estimation that re-calculates as the queue moves. Patients always know exactly how long they have.
                </p>
              </div>
              <div className="w-full md:w-48 space-y-3">
                {['Dr. Mehta · 4 min', 'Dr. Chen · 8 min', 'Dr. Patel · 15 min'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className="text-xs" style={{ color: 'rgba(240,234,255,0.6)', fontFamily: 'Syne, sans-serif' }}>
                      {item.split('·')[0]}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}>
                      {item.split('·')[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(4,32,105,0.35)' }}>
              <Shield className="w-6 h-6" style={{ color: '#6d9cff' }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}>
              Role-Based Access
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.48)' }}>
              Patients, doctors, and admins each get a tailored view — locked down with JWT authentication.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
