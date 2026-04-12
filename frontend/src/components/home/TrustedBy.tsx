const clinics = [
  'Apollo Clinics',
  'Fortis Health',
  'Max Healthcare',
  'Manipal Hospitals',
  'Narayana Health',
  'Aster Medcity',
]

export default function TrustedBy() {
  return (
    <div
      className="py-12"
      style={{
        background: '#08040f',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08))' }} />
          <p
            className="text-xs tracking-widest uppercase whitespace-nowrap"
            style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
          >
            Trusted by forward-thinking clinics
          </p>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.08))' }} />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {clinics.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                color: 'rgba(240,234,255,0.7)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
