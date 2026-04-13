import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface TokenRow {
  num: number
  status: 'serving' | 'waiting'
  wait?: string
}

const pad = (n: number) => n.toString().padStart(2, '0')

export default function QueueWidget() {
  const [serving, setServing] = useState(47)

  useEffect(() => {
    const id = setInterval(() => {
      setServing((p) => p + 1)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const queue: TokenRow[] = [
    { num: serving,     status: 'serving' },
    { num: serving + 1, status: 'waiting', wait: '~3 min' },
    { num: serving + 2, status: 'waiting', wait: '~6 min' },
    { num: serving + 3, status: 'waiting', wait: '~9 min' },
  ]

  return (
    <div
      className="w-full max-w-xs rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div
        className="px-5 py-4"
        style={{
          background: 'linear-gradient(135deg, rgba(66,6,153,0.65), rgba(4,32,105,0.65))',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs" style={{ color: 'rgba(240,234,255,0.55)', fontFamily: 'Syne, sans-serif' }}>
              Dr. Sarah Chen
            </p>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Cardiology
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-semibold text-green-400" style={{ fontFamily: 'Syne, sans-serif' }}>
              LIVE
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: 'rgba(240,234,255,0.35)', fontFamily: 'Syne, sans-serif' }}
        >
          Now Serving
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={serving}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-white text-2xl"
              style={{
                background: 'linear-gradient(135deg, #b00b69, #420699)',
                fontFamily: 'Syne, sans-serif',
                boxShadow: '0 0 28px rgba(176,11,105,0.35)',
              }}
            >
              #{pad(serving)}
            </div>
            <div>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                Token #{serving}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(240,234,255,0.45)' }}>
                Called 2 min ago
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-5 py-2">
        {queue.slice(1).map((token, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5"
            style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(240,234,255,0.75)',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                #{pad(token.num)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" style={{ color: '#b00b69' }} />
                <span className="text-xs" style={{ color: 'rgba(240,234,255,0.45)' }}>
                  {token.wait}
                </span>
              </div>
            </div>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: 'rgba(176,11,105,0.12)',
                color: '#e879a0',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              Waiting
            </span>
          </div>
        ))}
      </div>

      <div className="px-4 pb-4">
        <div
          className="px-4 py-3 rounded-xl"
          style={{
            background: 'rgba(176,11,105,0.1)',
            border: '1px solid rgba(176,11,105,0.2)',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs" style={{ color: 'rgba(240,234,255,0.45)' }}>Your Token</p>
              <p
                className="text-xl font-bold text-white mt-0.5"
                style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
              >
                #{pad(serving + 4)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: 'rgba(240,234,255,0.45)' }}>Est. Wait</p>
              <p
                className="text-base font-bold mt-0.5"
                style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}
              >
                ~12 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
