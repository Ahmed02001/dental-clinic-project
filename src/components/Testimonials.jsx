import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'إيميلي ريتشاردسون',
    role: 'مريضة تجديد البشرة',
    text: 'الدكتورة صوفيا غيرت بشرتي تماماً! بعد 3 جلسات فقط من الليزر، أصبحت آثار حب الشباب غير مرئية تقريباً. العيادة نظيفة جداً والطاقم محترف ودود للغاية.',
    rating: 5,
    initials: 'إر',
    color: '#5B5CFF',
  },
  {
    name: 'جيمس موريسون',
    role: 'مريض تجميل الأنف',
    text: 'كنت متوتراً بشأن الإجراء، لكن الدكتورة لوران جعلتني أشعر بارتياح تام. النتائج تجاوزت كل توقعاتي — طبيعية وجميلة وبالضبط ما كنت أريده.',
    rating: 5,
    initials: 'جم',
    color: '#8A2EFF',
  },
  {
    name: 'صوفيا تشين',
    role: 'علاج مكافحة الشيخوخة',
    text: 'شد الوجه بالخيوط كان تغييراً جذرياً! أبدو أصغر بـ 10 سنوات بدون أي جراحة. الدكتورة صوفيا لديها لمسة لطيفة جداً وعين مذهلة للجمال الطبيعي.',
    rating: 5,
    initials: 'صت',
    color: '#EC4899',
  },
  {
    name: 'مايكل توريس',
    role: 'مريض البوتوكس والفيلر',
    text: "تجربة استثنائية تماماً من البداية إلى النهاية. تبدو نتائجي طبيعية للغاية — يسألني الأصدقاء عما غيرته لكن لا يمكنهم معرفة أنه علاج. أنصح بها بشدة!",
    rating: 5,
    initials: 'مت',
    color: '#10B981',
  },
  {
    name: 'عائشة الفارس',
    role: 'مريضة نحت القوام',
    text: 'بعد شهرين من جلسات نحت القوام غير الجراحية، ارتفعت ثقتي بنفسي. الفريق دافئ ومرحب ومستثمر حقاً في مساعدتك على تحقيق أهدافك.',
    rating: 5,
    initials: 'عف',
    color: '#F59E0B',
  },
  {
    name: 'أحمد محمد',
    role: 'مريض نحت القوام',
    text: 'بعد شهرين من جلسات نحت القوام غير الجراحية، ارتفعت ثقتي بنفسي. الفريق دافئ ومرحب ومستثمر حقاً في مساعدتك على تحقيق أهدافك.',
    rating: 5,
    initials: 'أم',
    color: '#F59E0B',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1" style={{ marginBottom: '12px' }}>
      {[...Array(count)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const visible = 3
  const totalSlides = Math.ceil(testimonials.length / visible)

  const handlePrev = () => setCurrent(c => Math.max(0, c - 1))
  const handleNext = () => setCurrent(c => Math.min(totalSlides - 1, c + 1))

  const visibleItems = testimonials.slice(current * visible, current * visible + visible)

  return (
    <section id="testimonials" style={{ padding: "10px 20px" }} className="section-padding flex justify-center bg-[#f8f7ff]">
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
            <Star size={14} fill="currentColor" /> قصص مرضانا
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            ماذا يقول<br />
            <span className="gradient-text">مرضانا</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '480px', margin: '0 auto' }}>
            قصص حقيقية من أشخاص حقيقيين تغيرت حياتهم بفضل الرعاية التجميلية المتخصصة.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 justify-center" style={{ marginBottom: '40px' }}>
          {visibleItems.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Quote size={32} style={{ color: '#5B5CFF', opacity: 0.2, marginBottom: '16px', transform: 'scaleX(-1)' }} />
              <StarRating count={t.rating} />
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div className="flex flex-col items-center gap-3">
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`,
                  border: `2px solid ${t.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: t.color, fontFamily: 'Cairo,sans-serif' }}>
                    {t.initials}
                  </span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#1a1a2e', fontFamily: 'Cairo,sans-serif' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '2px solid #5B5CFF', background: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: current === 0 ? 0.4 : 1, transition: 'all 0.2s',
            }}
          >
            <ChevronLeft size={20} color="#5B5CFF" />
          </button>

          <div className="flex gap-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === current ? '#5B5CFF' : '#d1d5db',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={current >= totalSlides - 1}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'linear-gradient(135deg,#5B5CFF,#8A2EFF)', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: current >= totalSlides - 1 ? 0.4 : 1, transition: 'all 0.2s',
            }}
          >
            <ChevronRight size={20} color="white" />
          </button>
        </div>
      </div>
    </section>
  )
}
