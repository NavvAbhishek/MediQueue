import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Arjun Mehta',
    role: 'Cardiologist, Apollo Clinic',
    quote: 'Before MediQueue, my waiting room was always overcrowded. Now patients arrive exactly when needed. My consultation quality has genuinely improved.',
    rating: 5,
    initials: 'AM',
    accent: '#420699',
    image: '/images/doctor-arjun.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Patient, Bangalore',
    quote: "I used to take half a day off for a 15-minute consultation. With MediQueue I know exactly when to arrive. It's changed how I approach doctor visits.",
    rating: 5,
    initials: 'PS',
    accent: '#b00b69',
    image: '/images/patient-priya.jpg',
  },
  {
    name: 'Nisha Kapoor',
    role: 'Clinic Admin, City Hospital',
    quote: "Managing three doctors' queues simultaneously was a nightmare. MediQueue's admin panel gives me complete visibility and control. Our chaos is now calm.",
    rating: 5,
    initials: 'NK',
    accent: '#042069',
    image: '/images/admin-nisha.jpg',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="py-28" style={{ background: '#08040f' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#b00b69', fontFamily: 'Syne, sans-serif' }}
          >
            Testimonials
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
            Loved by clinics,{' '}
            <span style={{ color: 'rgba(240,234,255,0.35)' }}>cherished by patients.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-7 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-current" style={{ color: '#b00b69' }} />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(240,234,255,0.6)' }}>
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.removeAttribute('style')
                    }}
                  />
                  <span style={{ display: 'none' }}>{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(240,234,255,0.38)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
