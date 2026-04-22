import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'العنوان', value: '123 ميديكال بلازا، جناح 400\nبيفرلي هيلز، كاليفورنيا 90210' },
  { icon: Phone, label: 'الهاتف', value: '+1 (234) 567-890', href: 'tel:+12345678900' },
  { icon: Mail, label: 'الإيميل', value: 'info@drsofialaurent.com', href: 'mailto:info@drsofialaurent.com' },
  { icon: Clock, label: 'ساعات العمل', value: 'الإثنين–الجمعة: 9ص – 7م\nالسبت: 10ص – 4م' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: "10px 20px" }} className="section-padding flex justify-center bg-[#f8f7ff]">
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
            <Mail size={14} /> تواصل معنا
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            احجز موعدك الآن<br />
            <span className="gradient-text">نحن هنا لمساعدتك</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '480px', margin: '0 auto' }}>
            هل أنت مستعد لبدء رحلة التغيير؟ املأ النموذج أدناه أو تواصل معنا مباشرة. سيعاود فريقنا الاتصال بك خلال 24 ساعة.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Centered Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {sent ? (
              <div style={{
                background: 'white', borderRadius: '24px', padding: '48px',
                textAlign: 'center', boxShadow: '0 8px 32px rgba(91,92,255,0.1)',
                width: '100%', maxWidth: '600px'
              }}>
                <CheckCircle2 size={56} color="#5B5CFF" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '22px', color: '#1a1a2e', marginBottom: '10px' }}>
                  تم استلام طلبك!
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                  شكرًا لك يا {form.name}! سنتصل بك خلال 24 ساعة لتأكيد موعدك.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-gradient"
                  style={{ marginTop: '24px', marginInline: 'auto' }}
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 8px 32px rgba(91,92,255,0.08)', width: '100%', maxWidth: '600px' }}
              >
                <h3 style={{ fontFamily: 'Cairo,sans-serif', fontWeight: 700, fontSize: '20px', color: '#1a1a2e', marginBottom: '28px', textAlign: 'center' }}>
                  حجز موعد
                </h3>

                <div style={{ display: 'grid', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px', textAlign: 'right' }}>الاسم الكامل *</label>
                    <input
                      id="contact-name"
                      required
                      className="form-input"
                      placeholder="اسمك الكامل"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px', textAlign: 'right' }}>رقم الهاتف *</label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      className="form-input"
                      placeholder="+1 (234) 567-890"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px', textAlign: 'right' }}>الخدمة المطلوبة</label>
                    <select
                      id="contact-service"
                      className="form-input"
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">اختر الخدمة...</option>
                      <option>علاجات تجميلية</option>
                      <option>إجراءات جراحية</option>
                      <option>علاجات الجلد</option>
                      <option>علاجات مكافحة الشيخوخة</option>
                      <option>الليزر والطاقة</option>
                      <option>نحت القوام</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px', textAlign: 'right' }}>الرسالة</label>
                    <textarea
                      id="contact-message"
                      className="form-input"
                      rows={4}
                      placeholder="أخبرنا عن أهدافك أو أي أسئلة لديك..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" id="contact-submit" className="btn-gradient" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    <Send size={18} style={{ marginLeft: '8px' }} /> إرسال الطلب
                  </button>
                  <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
                    بإرسال هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة بنا. لن نشارك بياناتك أبدًا.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Centered Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', width: '100%' }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px', padding: '24px',
                  boxShadow: '0 4px 20px rgba(91,92,255,0.05)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #5B5CFF11, #8A2EFF11)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5B5CFF'
                }}>
                  <item.icon size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#9ca3af', marginBottom: '4px' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a2e', textDecoration: 'none' }} className="hover:text-indigo-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a2e', whiteSpace: 'pre-line' }}>{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Embedded Map */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', width: '100%', gridColumn: '1 / -1', minHeight: '300px', boxShadow: '0 8px 32px rgba(91,92,255,0.1)' }}>
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.731!2d-118.4004!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly+Hills%2C+CA+90210!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 'none', minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
