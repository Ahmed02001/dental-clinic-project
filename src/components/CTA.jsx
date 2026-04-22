import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Sparkles } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className='section-padding flex justify-center bg-white'>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #1a0533 100%)',
          borderRadius: '32px',
          padding: '80px 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blobs */}
        <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(91,92,255,0.35) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-30%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(138,46,255,0.25) 0%,transparent 70%)', pointerEvents: 'none' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="badge" style={{ background: 'rgba(91,92,255,0.2)', color: '#a5b4fc', border: '1px solid rgba(91,92,255,0.3)', justifyContent: 'center', marginBottom: '24px' }}>
            <Sparkles size={14} /> تتوفر مواعيد محدودة
          </div>

          <h2 style={{
            fontFamily: 'Cairo,sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem,4vw,3rem)',
            color: 'white', lineHeight: 1.15, marginBottom: '20px',
          }}>
            ابدأ رحلة<br />
            <span className="gradient-text">تغييرك اليوم</span>
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 40px' }}>
            اتخذ الخطوة الأولى نحو النسخة الأكثر ثقة وإشراقاً من نفسك. احجز استشارة مجانية ودعنا نصمم لك خطة علاج مخصصة.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-gradient" id="cta-book-btn" style={{ fontSize: '16px', padding: '16px 40px' }}>
              <Calendar size={20} /> احجز الآن — مجاناً
            </a>
            <a href="tel:+11234567890" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.35)', fontSize: '16px', padding: '16px 40px' }}>
              اتصل بنا اليوم
            </a>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginTop: '24px' }}>
            بدون التزام • استشارة مجانية • سرية تامة
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
