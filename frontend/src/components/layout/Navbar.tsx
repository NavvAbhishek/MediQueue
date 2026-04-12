import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope, Menu, X } from 'lucide-react'

const navLinks = ['Features', 'How It Works', 'For Doctors', 'Pricing']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        paddingTop: scrolled ? '12px' : '20px',
        paddingBottom: scrolled ? '12px' : '20px',
        background: scrolled ? 'rgba(6,3,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #420699, #b00b69)' }}
          >
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <span
            className="text-white font-bold text-xl"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
          >
            Medi<span style={{ color: '#b00b69' }}>Queue</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(240,234,255,0.55)', fontFamily: 'Syne, sans-serif' }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 text-sm rounded-xl transition-all duration-200 hover:bg-white/5"
            style={{
              color: 'rgba(240,234,255,0.75)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'Syne, sans-serif',
            }}
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 text-sm rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #b00b69, #420699)',
              fontFamily: 'Syne, sans-serif',
              boxShadow: '0 0 24px rgba(176,11,105,0.25)',
            }}
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(6,3,15,0.96)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm"
                  style={{ color: 'rgba(240,234,255,0.6)', fontFamily: 'Syne, sans-serif' }}
                >
                  {link}
                </a>
              ))}
              <div
                className="flex flex-col gap-2 pt-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <Link
                  to="/login"
                  className="text-sm text-center py-2.5 rounded-xl"
                  style={{ color: '#f0eaff', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'Syne, sans-serif' }}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-semibold text-center py-2.5 rounded-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #b00b69, #420699)', fontFamily: 'Syne, sans-serif' }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
