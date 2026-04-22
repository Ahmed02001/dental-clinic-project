import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, CheckCircle2, GraduationCap, Star } from 'lucide-react'

const stats = [
  { number: '15+', label: 'سنوات خبرة' },
  { number: '5K+', label: 'مريض سعيد' },
  { number: '98%', label: 'نسبة الرضا' },
  { number: '30+', label: 'جوائز متميزة' },
]

const achievements = [
  'بورد معتمد في الطب التجميلي',
  'زميل الجمعية الدولية للجراحة التجميلية',
  'كلية هارفارد للطب – برنامج الأمراض الجلدية المتقدم',
  'باحث منشور في الجراحة التجميلية والترميمية',
  'عضو الأكاديمية الأمريكية للأمراض الجلدية',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{ padding: "20px 20px" }} className="section-padding flex justify-center bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right — Image (Flipped for Arabic) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Main image container */}
            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, #5B5CFF22, #8A2EFF22)',
                borderRadius: '24px',
                transform: 'rotate(3deg)',
              }} />
              <img
                src="/doctor_profile.png"
                alt="د. صوفيا لوران"
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 24px 60px rgba(91,92,255,0.15)',
                }}
              />

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  position: 'absolute', bottom: '24px', left: '-14px', zIndex: 10,
                  background: 'linear-gradient(135deg, #5B5CFF, #8A2EFF)',
                  borderRadius: '20px',
                  padding: '10px 12px',
                  width: '150px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 12px 40px rgba(91,92,255,0.4)',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'Cairo,sans-serif' }}>15+</div>
                <div style={{ fontSize: '12px', opacity: 0.9, fontWeight: 500 }}>عاماً من<br />التميز</div>
              </motion.div>

              {/* Star rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{
                  position: 'absolute', top: '24px', right: '-24px', zIndex: 10,
                  background: 'white',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  boxShadow: '0 8px 32px rgba(91,92,255,0.15)',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg,#5B5CFF,#8A2EFF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={20} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#1a1a2e' }}>الأعلى تقييماً</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F59E0B" color="#F59E0B" />)}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Center — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <div className="badge" style={{ margin: '0 auto 16px' }}><Award size={14} /> نبذة عن الطبيبة</div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              د. صوفيا لوران،<br />
              <span className="gradient-text">خبرتك الموثوقة</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '24px', maxWidth: '600px' }}>
              مع أكثر من 15 عاماً من الممارسة المتفانية في العلاجات التجميلية والطبية، ساعدت الدكتورة صوفيا لوران آلاف المرضى على تحقيق النتائج المرجوة بأمان وفعالية. التزامها بالتميز والرعاية المتمركزة حول المريض منحها سمعة لا مثيل لها.
            </p>
            <p className="section-subtitle" style={{ marginBottom: '36px', maxWidth: '600px' }}>
              باستخدام أحدث التقنيات القائمة على الأدلة والتكنولوجيا المتطورة، تقدم نتائج طبيعية المظهر وتحويلية تعزز الثقة والرفاهية.
            </p>

            {/* Certifications - Centered list */}
            <div style={{ marginBottom: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {achievements.map((item) => (
                <div key={item} className="flex items-center gap-3" style={{ marginBottom: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: '#5B5CFF', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#4b5563' }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gradient" id="about-book-btn">
              <Award size={18} /> احجز استشارة
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ marginTop: '80px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Cairo,sans-serif', background: 'linear-gradient(135deg,#5B5CFF,#8A2EFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '6px', fontWeight: 500 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
