import { useNavigate } from 'react-router-dom';

export default function NativeApps() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #475569 0%, #1e40af 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes ping { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(30, 64, 175, 0.4); } 50% { box-shadow: 0 0 40px rgba(71, 85, 105, 0.8); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(255,255,255,0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: slideInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2)); box-shadow: 0 10px 30px rgba(255,255,255,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #60a5fa; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #60a5fa 0%, #1e40af 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(30, 64, 175, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #60a5fa; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(96, 165, 250, 0.1); transform: translateY(-4px); }
      `}</style>
      
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30, 64, 175, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(71, 85, 105, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent)', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 9s ease-in-out infinite 2s' }} />
      
      {/* Grid Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 0.8s ease-out' }}>
          <svg width="120" height="120" viewBox="0 0 200 200" style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <defs>
              <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
              </linearGradient>
              <filter id="mobileGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="60" y="30" width="80" height="140" rx="12" fill="rgba(255,255,255,0.15)" stroke="url(#mobileGrad)" strokeWidth="3" filter="url(#mobileGlow)" />
            <rect x="70" y="45" width="60" height="100" rx="4" fill="rgba(255,255,255,0.25)" />
            <circle cx="100" cy="160" r="8" fill="#fff" opacity="0.8" />
            <rect x="85" y="35" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.5)" />
          </svg>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(30, 64, 175, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Native Mobile Engineering & Experience Platform Transformation
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Build scalable, high-performance mobile experience platforms that accelerate digital product delivery, increase customer engagement, and enable secure, always-on enterprise mobility across iOS and Android ecosystems.
          </p>
        </div>

        {/* Mobile Experience Platform Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Mobile Experience Platform Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for scalable, high-velocity enterprise mobile delivery.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Mobile Experience Platform Enablement',
                icon: '🏗️',
                desc: 'Standardized architecture, tooling, and governance for scalable mobile delivery across multiple products.'
              },
              {
                title: 'Design-to-Code Mobile Acceleration',
                icon: '⚡',
                desc: 'Transform design systems into reusable native components for faster release cycles.'
              },
              {
                title: 'Omnichannel Mobile Journey Engineering',
                icon: '🔄',
                desc: 'Seamless experiences across mobile, web, wearables, and in-store touchpoints.'
              },
              {
                title: 'Performance & App Store Experience Optimization',
                icon: '📈',
                desc: 'Improve engagement, ratings, and conversion through measurable UX and speed.'
              },
              {
                title: 'Secure Enterprise Mobility & Offline‑First Apps',
                icon: '🔒',
                desc: 'Support field operations, partners, and employees with resilient mobile platforms.'
              },
              {
                title: 'AI‑Enabled Personalization in Mobile Experiences',
                icon: '🤖',
                desc: 'Deliver real‑time, context‑aware mobile journeys using data and intelligence.'
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

        {/* Mobile Experience Platform Ecosystem */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Mobile Experience Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem enabling scalable, secure, and high‑velocity enterprise mobile delivery.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {['Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose', 'Core Data', 'Room', 'Firebase', 'ARKit', 'React Native', 'Flutter', 'Xcode', 'Android Studio'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
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
              { title: 'Higher mobile customer engagement', desc: 'Increase retention and loyalty with personalised, high‑performance mobile journeys.', icon: '❤️' },
              { title: 'Faster mobile feature release cycles', desc: 'Deliver new capabilities to users more frequently with platform‑driven development.', icon: '⏱️' },
              { title: 'Consistent cross‑channel experiences', desc: 'Unify brand and interaction patterns across mobile, web, and wearables.', icon: '🔄' },
              { title: 'Improved field workforce productivity', desc: 'Equip teams with offline‑first, secure mobile tools for critical operations.', icon: '👷' },
              { title: 'Reduced mobile platform maintenance cost', desc: 'Standardize and reuse components to lower technical debt.', icon: '💰' },
              { title: 'Future‑ready mobile foundation', desc: 'Support AI‑driven and real‑time mobile experiences with modern architectures.', icon: '🤖' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(71, 85, 105, 0.1))', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Enterprise Mobility into a Scalable Experience Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our mobile experience engineering specialists to build secure, high‑performance native platforms that drive measurable business outcomes.
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