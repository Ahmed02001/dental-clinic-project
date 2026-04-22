import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Scissors, Droplets, Sun, Zap, Heart, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'علاجات تجميلية',
    desc: 'البوتوكس، الفيلر، العلاج بالبلازما الغنية بالصفائح الدموية (PRP)، وتجديد الشباب المتقدم لاستعادة شبابك.',
    tag: 'الأكثر طلباً',
  },
  {
    icon: Scissors,
    title: 'إجراءات جراحية',
    desc: 'تجميل الأنف، شد الجفون، شد الوجه، وتنسيق القوام على يد جراح تجميل معتمد.',
    tag: null,
  },
  {
    icon: Droplets,
    title: 'علاجات الجلد',
    desc: 'التقشير الكيميائي، علاج الندبات، الهيدرافيشل، وعلاجات الليزر لبشرة نضرة وصحية.',
    tag: null,
  },
  {
    icon: Sun,
    title: 'علاجات مكافحة الشيخوخة',
    desc: 'تحفيز الكولاجين، شد الوجه بالخيوط، والترطيب العميق للوقاية من علامات تقدم السن.',
    tag: 'شائع',
  },
  {
    icon: Zap,
    title: 'الليزر والطاقة',
    desc: 'ليزر CO₂ الجزئي، IPL، وترددات الراديو لاستهداف التصبغات والندبات.',
    tag: null,
  },
  {
    icon: Heart,
    title: 'نحت القوام',
    desc: 'تقليل الدهون غير الجراحي، علاجات السيلوليت، وشد الجلد للحصول على قوام متناسق.',
    tag: null,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" style={{ padding: "10px 20px" }} className="section-padding flex justify-center bg-[#f8f7ff]">
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
            <Sparkles size={14} /> خدماتنا
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            علاجات مخصصة<br />
            <span className="gradient-text">لك خصيصاً</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '520px', margin: '0 auto' }}>
            نقدم مجموعة شاملة من العلاجات التجميلية والطبية، يتم تنفيذ كل منها بدقة وعناية وخبرة عالمية المستوى.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            return (
              <motion.div
                key={s.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: 'linear-gradient(135deg, #5B5CFF11, #8A2EFF11)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px', color: '#5B5CFF',
                }}>
                  <s.icon size={28} />
                </div>

                {s.tag && (
                  <span style={{
                    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '1px', color: '#5B5CFF', background: '#5B5CFF11',
                    padding: '4px 10px', borderRadius: '100px', marginBottom: '12px'
                  }}>
                    {s.tag}
                  </span>
                )}

                <h3 style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '20px', marginBottom: '12px', color: '#1a1a2e' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
                  {s.desc}
                </p>

                <a href="#contact" style={{ fontSize: '14px', fontWeight: 600, color: '#5B5CFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="hover:underline">
                  معرفة المزيد <ArrowRight size={14} />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '56px' }}
        >
          <a href="#contact" className="btn-gradient" id="services-book-btn">
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
