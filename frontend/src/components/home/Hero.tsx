import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Bell, CheckCircle } from 'lucide-react'
import QueueWidget from './QueueWidget'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#06030f' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 65% at 12% 55%, rgba(66,6,153,0.55) 0%, transparent 68%),
              radial-gradient(ellipse 55% 55% at 88% 15%, rgba(4,32,105,0.75) 0%, transparent 65%),
              radial-gradient(ellipse 45% 50% at 72% 88%, rgba(176,11,105,0.38) 0%, transparent 62%)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.4,
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(176,11,105,0.6) 1px, transparent 1px)',
            backgroundSize: '100% 120px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: 'rgba(176,11,105,0.1)',
              border: '1px solid rgba(176,11,105,0.28)',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#b00b69' }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#b00b69' }} />
            </span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}
            >
              Smart Queue Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(3rem, 6.5vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            No More
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #b00b69 10%, #420699 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Waiting
            </span>
            <br />
            In The Dark.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg leading-relaxed mb-10"
            style={{ color: 'rgba(240,234,255,0.55)', maxWidth: '46ch' }}
          >
            MediQueue brings real-time queue intelligence to every clinic — so
            patients know exactly when it's their turn, and doctors can focus on
            what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #b00b69, #420699)',
                fontFamily: 'Syne, sans-serif',
                boxShadow: '0 0 48px rgba(176,11,105,0.35), 0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              Start for Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-white/5"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(240,234,255,0.8)',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              { value: '50K+', label: 'Patients Served' },
              { value: '200+', label: 'Clinics Active' },
              { value: '~8 min', label: 'Avg Wait Reduction' },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-bold text-white"
                  style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.75rem', letterSpacing: '-0.03em' }}
                >
                  {s.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(240,234,255,0.4)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-full blur-3xl opacity-25"
              style={{ background: 'radial-gradient(circle, #b00b69, #420699, transparent)' }}
            />

            <QueueWidget />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -left-12 bottom-10 hidden xl:block"
              style={{
                background: 'rgba(6,3,15,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(16px)',
                borderRadius: '14px',
                padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="flex items-center gap-2.5"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(176,11,105,0.2)' }}
                >
                  <Bell className="w-4 h-4" style={{ color: '#e879a0' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Your turn soon!
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(240,234,255,0.45)' }}>
                    Token #51 · 2 ahead
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute -right-10 top-6 hidden xl:block"
              style={{
                background: 'rgba(6,3,15,0.9)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                borderRadius: '12px',
                padding: '8px 12px',
              }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: '#22c55e' }} />
                <span className="text-xs font-medium text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Queue updated
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: 'rgba(240,234,255,0.25)', fontFamily: 'Syne, sans-serif' }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #b00b69, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
