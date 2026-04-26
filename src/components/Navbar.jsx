import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'عن الطبيبة', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'النتائج', href: '#results' },
  { label: 'آراء المرضى', href: '#testimonials' },
  { label: 'اتصل بنا', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ padding: "20px 10px" }} className=" mx-auto px-6 p-4 flex items-center justify-around">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-decoration-none">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#5B5CFF,#8A2EFF)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '18px', color: scrolled ? '#1a1a2e' : 'white' }}>
            د. صوفيا<span className="gradient-text"> لوران</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Cairo,sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: scrolled ? '#4b5563' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              className="hover:text-indigo-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* <a href="tel:+11234567890" className="flex items-center gap-2" style={{ color: scrolled ? '#5B5CFF' : 'white', fontWeight: 500, fontSize: '14px', textDecoration: 'none' }}>
            <Phone size={16} /> +1 (234) 567-890
          </a> */}
          <a href="#contact" className="btn-gradient" style={{ padding: '10px 22px', fontSize: '14px' }}>
            احجز الآن
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? '#1a1a2e' : 'white' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #f0f0ff', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ color: '#4b5563', fontWeight: 500, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid #f9f9ff' }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-gradient" style={{ textAlign: 'center', marginTop: '8px' }}>Book Appointment</a>
        </div>
      )}
    </nav>
  )
}
