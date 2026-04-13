import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope, Clock, Shield, BarChart3 } from 'lucide-react'

const queueTokens = [
  { token: '#041', label: 'In consultation', active: false, done: true },
  { token: '#042', label: 'Now serving', active: true, done: false },
  { token: '#043', label: 'Waiting', active: false, done: false },
  { token: '#044', label: 'Waiting', active: false, done: false },
]

const features = [
  { icon: Clock, text: 'Real-time queue tracking' },
  { icon: Shield, text: 'Role-based secure access' },
  { icon: BarChart3, text: 'Analytics & wait-time insights' },
]

export default function AuthBrand() {
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % 4)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative flex flex-col justify-between p-10 overflow-hidden"
      style={{ background: '#04010d', minHeight: '100vh' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(66,6,153,0.35)' }}
        />
        <div
          className="absolute top-1/2 -right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(176,11,105,0.2)' }}
        />
        <div
          className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(4,32,105,0.3)' }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <Link to="/" className="relative flex items-center gap-2.5 w-fit">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #420699, #b00b69)' }}
        >
          <Stethoscope className="w-5 h-5 text-white" />
        </div>
        <span
          className="text-xl font-bold text-white"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}
        >
          Medi<span style={{ color: '#b00b69' }}>Queue</span>
        </span>
      </Link>

      <div className="relative space-y-8">
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#b00b69', fontFamily: 'Syne, sans-serif' }}
          >
            Live Queue
          </p>
          <div
            className="rounded-2xl p-5 space-y-2.5"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium" style={{ color: 'rgba(240,234,255,0.5)', fontFamily: 'Syne, sans-serif' }}>
                Dr. Arjun Mehta · Cardiology
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: 'rgba(176,11,105,0.15)', color: '#e879a0', fontFamily: 'Syne, sans-serif' }}
              >
                Live
              </span>
            </div>

            {queueTokens.map((item, i) => (
              <motion.div
                key={item.token}
                animate={i === activeIndex ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{
                  background: i === activeIndex
                    ? 'linear-gradient(135deg, rgba(176,11,105,0.2), rgba(66,6,153,0.15))'
                    : 'rgba(255,255,255,0.03)',
                  border: i === activeIndex
                    ? '1px solid rgba(176,11,105,0.3)'
                    : '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span
                  className="text-sm font-bold w-12"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    color: i === activeIndex ? '#e879a0' : item.done ? 'rgba(240,234,255,0.2)' : 'rgba(240,234,255,0.45)',
                    textDecoration: item.done ? 'line-through' : 'none',
                  }}
                >
                  {item.token}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${item.token}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs flex-1"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      color: i === activeIndex ? 'rgba(240,234,255,0.85)' : 'rgba(240,234,255,0.3)',
                    }}
                  >
                    {item.label}
                  </motion.span>
                </AnimatePresence>
                {i === activeIndex && (
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#b00b69' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(66,6,153,0.2)' }}
              >
                <f.icon className="w-3.5 h-3.5" style={{ color: '#a78bfa' }} />
              </div>
              <span
                className="text-sm"
                style={{ color: 'rgba(240,234,255,0.5)', fontFamily: 'Syne, sans-serif' }}
              >
                {f.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <p
        className="relative text-xs"
        style={{ color: 'rgba(240,234,255,0.2)', fontFamily: 'Syne, sans-serif' }}
      >
        © 2025 MediQueue. Trusted by 200+ clinics.
      </p>
    </div>
  )
}
