import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Star, Shield, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #1a0533 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      padding: "10px 20px"
    }}>
      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,92,255,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,46,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '20%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,92,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Content (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-right"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            {/* <div className="badge" style={{ background: 'rgba(91,92,255,0.15)', color: '#a5b4fc', border: '1px solid rgba(91,92,255,0.3)', margin: '0 auto 16px' }}>
              <Star size={12} fill="currentColor" /> عيادة تجميلية متميزة
            </div> */}

            <h1 style={{
              fontFamily: 'Cairo,sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '24px',
              marginTop: "80px"
            }}>
              رعاية خبراء.<br />
              <span className="gradient-text">نتائج موثوقة.</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px' }}>
              علاجات تجميلية عالمية المستوى، وإجراءات جراحية، وحلول للعناية بالبشرة — مصممة لمساعدتك على الظهور والشعور بأفضل حالاتك.
            </p>

            <div className="flex flex-wrap gap-4 justify-center" style={{ marginBottom: '48px' }}>
              <a href="#contact" className="btn-gradient" id="hero-book-btn">
                <Calendar size={18} /> احجز موعداً
              </a>
              <a href="#contact" className="btn-outline" id="hero-contact-btn" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
                <MessageCircle size={18} /> اتصل بنا
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { icon: Shield, text: 'معتمد من FDA' },
                { icon: Award, text: 'خبرة 15+ عاماً' },
                { icon: Star, text: '5000+ مريض سعيد' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontWeight: 500 }}>
                  <Icon size={16} style={{ color: '#a5b4fc' }} /> {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Doctor Image + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              position: 'relative',
              maxWidth: '100%',
            }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #5B5CFF, #8A2EFF)',
                opacity: 0.4,
                filter: 'blur(20px)',
              }} />

              <img
                src="/hero_doctor.png"
                alt="د. صوفيا لوران"
                className="float-animation"
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  height: '520px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
                }}
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  position: 'absolute', bottom: '30px', right: '-20px', zIndex: 10,
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  padding: '10px 15px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  minWidth: '140px',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#5B5CFF', fontFamily: 'Cairo,sans-serif' }}>5,000+</div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px' }}>مريض سعيد</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                </div>
              </motion.div>

              {/* Floating availability */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  position: 'absolute', top: '30px', left: '-30px', zIndex: 10,
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e' }}>متاح اليوم</span>
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>الموعد القادم: 10:00 صباحاً</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 30C1200 80 960 10 720 40C480 70 240 10 0 30L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
