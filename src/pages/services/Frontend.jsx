import { useNavigate } from 'react-router-dom';

export default function Frontend() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); } 50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.8); } }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(236, 72, 153, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(236, 72, 153, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(236, 72, 153, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2)); box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #f472b6; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #f472b6; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(236, 72, 153, 0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Floating dots */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '50%', background: '#a855f7', animation: 'pulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', background: '#ec4899', animation: 'pulse 3s ease-in-out infinite 0.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <svg width="130" height="130" viewBox="0 0 200 200" style={{ marginBottom: '24px', animation: 'float 4s ease-in-out infinite, pulse 3s ease-in-out infinite' }}>
            <defs>
              <linearGradient id="feGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
              </linearGradient>
              <filter id="feGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="30" y="40" width="140" height="120" rx="10" fill="none" stroke="url(#feGrad)" strokeWidth="4" filter="url(#feGlow)" />
            <path d="M60 80 L45 100 L60 120" fill="none" stroke="url(#feGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M140 80 L155 100 L140 120" fill="none" stroke="url(#feGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="90" y1="70" x2="110" y2="70" stroke="url(#feGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="80" y1="130" x2="120" y2="130" stroke="url(#feGrad)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(168, 85, 247, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Frontend Engineering & Experience Platform Transformation
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Build scalable, high-performance digital experience platforms that accelerate product delivery, improve customer engagement, and enable consistent, design‑to‑code execution across the enterprise.
          </p>
        </div>

        {/* Experience Platform Engineering Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Experience Platform Engineering Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome‑driven capabilities for scalable, high‑velocity frontend delivery
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Enterprise Frontend Platform Enablement',
                icon: '🏗️',
                desc: 'Standardized architecture, tooling, and governance for scalable UI delivery across multiple products and teams.'
              },
              {
                title: 'Design-to-Code Acceleration',
                icon: '🎨',
                desc: 'Transform design systems into reusable production components, reducing implementation time and ensuring consistency.'
              },
              {
                title: 'Micro‑Frontend Architecture',
                icon: '🧩',
                desc: 'Enable independent, faster releases across large product portfolios with decoupled frontend modules.'
              },
              {
                title: 'Performance & Core Web Vitals Optimization',
                icon: '⚡',
                desc: 'Improve conversion and engagement through measurable UX performance, targeting LCP, FID, and CLS.'
              },
              {
                title: 'Experience‑Led Product Engineering',
                icon: '✨',
                desc: 'Align frontend delivery with customer journeys and business KPIs, delivering value at every interaction.'
              },
              {
                title: 'Developer Experience & Toolchain Modernization',
                icon: '🛠️',
                desc: 'Faster builds, automated testing, and self‑service environments that boost productivity and code quality.'
              }
            ].map((capability, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{capability.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{capability.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Platform Ecosystem */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(236, 72, 153, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Experience Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem for scalable, high‑velocity frontend delivery
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'Svelte',
              'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS',
              'Bootstrap', 'Material UI', 'Chakra UI', 'Framer Motion', 'GSAP',
              'Redux', 'Zustand', 'Vuex', 'React Query', 'GraphQL', 'REST APIs'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">{tech}</div>
            ))}
          </div>
        </div>

        {/* Business Impact */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Faster feature delivery', desc: 'Reduce frontend release cycles from weeks to days with modular architecture and automation.', icon: '⏱️' },
              { title: 'Higher digital conversion rates', desc: 'Optimize performance and usability to increase revenue and user engagement.', icon: '📈' },
              { title: 'Consistent cross‑channel experiences', desc: 'Unified design systems and components ensure brand coherence across all touchpoints.', icon: '🔄' },
              { title: 'Improved developer productivity', desc: 'Self‑service tooling and reusable components eliminate repetitive work.', icon: '👩‍💻' },
              { title: 'Reduced maintenance cost', desc: 'Scalable and modular frontend architecture lowers technical debt and upkeep.', icon: '💰' },
              { title: 'Future‑ready experience foundation', desc: 'Support AI‑driven and real‑time digital products with modern platform engineering.', icon: '🤖' }
            ].map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '32px' }}>{benefit.icon}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', margin: 0 }}>{benefit.title}</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))', borderRadius: '30px', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Digital Experience with a Scalable Frontend Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our experience engineering specialists to build high‑performance, enterprise‑grade frontend platforms.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={handleNavigation}>
              Start Your Transformation
            </button>
            <button className="cta-btn-outline" onClick={handleNavigation}>
              Talk to Experts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}