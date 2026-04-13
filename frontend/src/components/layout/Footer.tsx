import { Stethoscope } from 'lucide-react'

const productLinks = ['Features', 'How It Works', 'Pricing', 'Changelog']
const companyLinks = ['About', 'Blog', 'Careers', 'Contact']

export default function Footer() {
  return (
    <footer
      className="py-14"
      style={{ background: '#040210', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #420699, #b00b69)' }}
              >
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <span
                className="font-bold text-white text-lg"
                style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
              >
                Medi<span style={{ color: '#b00b69' }}>Queue</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(240,234,255,0.35)' }}>
              Smart clinic queue management for the modern healthcare experience. Zero wait stress for everyone.
            </p>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(240,234,255,0.25)', fontFamily: 'Syne, sans-serif' }}
            >
              Product
            </p>
            <div className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: 'rgba(240,234,255,0.42)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(240,234,255,0.25)', fontFamily: 'Syne, sans-serif' }}
            >
              Company
            </p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: 'rgba(240,234,255,0.42)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(240,234,255,0.25)' }}>
            © 2026 MediQueue. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: 'rgba(240,234,255,0.28)' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
