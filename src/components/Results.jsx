import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const results = [
  {
    img: '/before_after.png',
    title: 'تجديد نضارة البشرة',
    desc: 'ليزر + هيدرافيشل — 3 جلسات',
  },
  {
    img: '/clinic_interior.png',
    title: 'علاجات مكافحة الشيخوخة',
    desc: 'بوتوكس + فيلر — نتائج طبيعية',
  },
  {
    img: '/before_after.png',
    title: 'إزالة آثار حب الشباب',
    desc: 'RF Microneedling — 4 جلسات',
  },
  {
    img: '/clinic_interior.png',
    title: 'شد الوجه بالخيوط',
    desc: 'شد وجه غير جراحي — تأثير فوري',
  },
]

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setActive(a => (a - 1 + results.length) % results.length)
  const next = () => setActive(a => (a + 1) % results.length)

  return (
    <section id="results" style={{ padding: "10px 20px" }} className="section-padding flex justify-center bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div className="badge" style={{ justifyContent: 'center' }}>
            <ZoomIn size={14} /> نتائج حقيقية
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            تحولات تتحدث<br />
            <span className="gradient-text">عن نفسها</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '520px', margin: '0 auto' }}>
            كل نتيجة هي قصة ثقة استعيدت. تصفح تحولات المرضى الحقيقية التي تحققت في عيادتنا.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: '40px' }}>
          {results.map((r, i) => (
            <motion.div
              key={i}
              className="results-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'white', borderRadius: '24px', overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(91,92,255,0.08)',
                cursor: 'pointer', textAlign: 'center'
              }}
              onClick={() => setLightbox(r)}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={r.img} alt={r.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  className="hover-scale"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(26,26,46,0.8), transparent)',
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '24px'
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '16px', color: '#1a1a2e', marginBottom: '4px' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280' }}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more btn */}
        <div className="text-center">
          <a href="#contact" className="btn-outline" style={{ padding: '14px 40px', color: '#5B5CFF', borderColor: '#5B5CFF' }}>
            مشاهدة المزيد من الحالات
          </a>
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
              zIndex: 9990, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ maxWidth: '720px', width: '100%', background: 'white', borderRadius: '20px', overflow: 'hidden' }}
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.img} alt={lightbox.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: '20px', color: '#1a1a2e' }}>{lightbox.title}</h3>
                <p style={{ color: '#6b7280', marginTop: '6px' }}>{lightbox.desc}</p>
              </div>
            </motion.div>
          </div>
        )}

        {/* CTA */}
        <motion.div className="text-center" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} style={{ marginTop: '56px' }}>
          <a href="#contact" className="btn-gradient" id="results-book-btn">Book Your Transformation</a>
        </motion.div>
      </div>
    </section>
  )
}
