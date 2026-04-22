import { MessageCircle, Info, ExternalLink } from 'lucide-react'

// Custom Brand Icons to replace missing lucide-react exports
const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const YoutubeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 2.78 2.78 0 0 0-1.94-2z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

const links = {
  'روابط سريعة': ['الرئيسية', 'عن الطبيبة', 'خدماتنا', 'النتائج', 'آراء المرضى', 'اتصل بينا'],
  'خدماتنا': ['علاجات تجميلية', 'إجراءات جراحية', 'علاجات الجلد', 'علاجات مكافحة الشيخوخة', 'الليزر والطاقة', 'نحت القوام'],
  'معلومات': ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة ملفات الارتباط', 'الوظائف', 'المدونة', 'الصحافة'],
}

const socials = [
  { icon: InstagramIcon, href: '#', label: 'إنستجرام' },
  { icon: FacebookIcon, href: '#', label: 'فيسبوك' },
  { icon: TwitterIcon, href: '#', label: 'تويتر' },
  { icon: LinkedinIcon, href: '#', label: 'لينكد إن' },
  { icon: YoutubeIcon, href: '#', label: 'يوتيوب' },
]

export default function Footer() {
  return (
    <footer style={{ padding: "10px 20px" }} className="bg-[#1a1a2e] text-white section-padding flex justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12" style={{ marginBottom: '60px' }}>
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="flex items-center gap-2" style={{ marginBottom: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg,#5B5CFF,#8A2EFF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '18px' }}>
                د. صوفيا<span className="gradient-text"> لوران</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '280px' }}>
              خبرة عالمية في الطب التجميلي، نقدم رعاية مخصصة ونتائج طبيعية تعزز جمالك وثقتك بنفسك.
            </p>
            <div className="flex gap-4 justify-center ml-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg,#5B5CFF,#8A2EFF)'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.borderColor = 'transparent'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="flex flex-col items-center">
              <h4 style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '16px', marginBottom: '24px', color: 'white' }}>
                {heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                      className="hover:text-indigo-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'between', alignItems: 'center', gap: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>
            © {new Date().getFullYear()} عيادة د. صوفيا لوران التجميلية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-2 items-center">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>جميع الأنظمة تعمل بكفاءة</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
