import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Hash, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Book Your Slot',
    desc: 'Choose your doctor, pick a date, and reserve your appointment slot in under 60 seconds. No phone calls, no queuing at the front desk.',
    accent: '#420699',
    rgbAccent: '66,6,153',
    image: '/images/step-book.jpeg',
  },
  {
    number: '02',
    icon: Hash,
    title: 'Get Your Token',
    desc: 'Receive an instant digital token with your real-time queue position. Track your status from anywhere — even from the parking lot.',
    accent: '#042069',
    rgbAccent: '4,32,105',
    image: '/images/step-token.jpeg',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Walk In On Time',
    desc: "Get a push notification when you're 2 patients away. Arrive exactly when it's your turn. Zero crowding, zero guesswork.",
    accent: '#b00b69',
    rgbAccent: '176,11,105',
    image: '/images/step-arrive.jpeg',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="how-it-works" className="py-28" style={{ background: '#08040f' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#b00b69', fontFamily: 'Syne, sans-serif' }}
          >
            Simple Process
          </p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              lineHeight: 1.05,
            }}
          >
            Three steps to{' '}
            <span style={{ color: 'rgba(240,234,255,0.35)' }}>zero waiting stress</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="group"
            >
              <div
                className="p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `rgba(${step.rgbAccent}, 0.18)` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.accent }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '4rem',
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.05)',
                      lineHeight: 1,
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <div
                  className="w-full h-36 rounded-xl mb-6 overflow-hidden relative flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, rgba(${step.rgbAccent},0.15), rgba(${step.rgbAccent},0.04))`,
                    border: `1px solid rgba(${step.rgbAccent},0.15)`,
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <step.icon
                    className="w-12 h-12 opacity-15 absolute"
                    style={{ color: step.accent }}
                  />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.025em' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,234,255,0.48)' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
