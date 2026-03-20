import { useNavigate } from 'react-router-dom';

export default function CrossPlatform() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #0284c7 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); } 50% { box-shadow: 0 0 40px rgba(8, 145, 178, 0.8); } }
        @keyframes mobilePulse { 0%, 100% { opacity: 0.8; transform: rotate(0deg); } 50% { opacity: 1; transform: rotate(5deg); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(6, 182, 212, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(34, 211, 238, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(6, 182, 212, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(8, 145, 178, 0.2)); box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #22d3ee; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(6, 182, 212, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(34, 211, 238, 0.5); box-shadow: 0 15px 40px rgba(6, 182, 212, 0.2); }
        .cta-btn { background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(34, 211, 238, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #22d3ee; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(34, 211, 238, 0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background Elements - Mobile/Tech Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(8, 145, 178, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Mobile Phone shapes */}
      <div style={{ position: 'absolute', top: '15%', right: '8%', width: '40px', height: '70px', border: '3px solid rgba(255,255,255,0.3)', borderRadius: '8px', animation: 'mobilePulse 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', right: '15%', width: '30px', height: '50px', background: 'rgba(34, 211, 238, 0.2)', borderRadius: '6px', animation: 'mobilePulse 4s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', bottom: '25%', left: '5%', width: '35px', height: '60px', border: '3px solid rgba(255,255,255,0.2)', borderRadius: '6px', transform: 'rotate(-15deg)', animation: 'mobilePulse 4s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '40%', right: '10%', width: '25px', height: '45px', border: '2px solid rgba(34, 211, 238, 0.3)', borderRadius: '5px', animation: 'mobilePulse 4s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      {/* Wave decoration */}
      <div style={{ position: 'absolute', bottom: '10%', left: 0, right: 0, height: '100px', opacity: 0.1 }}>
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="#fff" />
        </svg>
      </div>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* Mobile App SVG - Phone with apps */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
                <filter id="mobileGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Phone body */}
              <rect x="60" y="20" width="80" height="160" rx="12" fill="none" stroke="url(#mobileGrad)" strokeWidth="4" filter="url(#mobileGlow)" />
              {/* Screen */}
              <rect x="66" y="35" width="68" height="120" rx="4" fill="rgba(34, 211, 238, 0.2)" stroke="none" />
              {/* Home indicator */}
              <rect x="85" y="162" width="30" height="4" rx="2" fill="url(#mobileGrad)" />
              {/* App icons on screen */}
              <rect x="72" y="45" width="16" height="16" rx="3" fill="url(#mobileGrad)" opacity="0.8" />
              <rect x="92" y="45" width="16" height="16" rx="3" fill="url(#mobileGrad)" opacity="0.6" />
              <rect x="112" y="45" width="16" height="16" rx="3" fill="url(#mobileGrad)" opacity="0.7" />
              <rect x="72" y="65" width="16" height="16" rx="3" fill="url(#mobileGrad)" opacity="0.5" />
              <rect x="92" y="65" width="16" height="16" rx="3" fill="url(#mobileGrad)" opacity="0.9" />
              <rect x="112" y="65" width="16" height="16" rx="3" fill="url(#mobileGrad)" opacity="0.6" />
              {/* Notification */}
              <rect x="72" y="90" width="56" height="8" rx="2" fill="url(#mobileGrad)" opacity="0.4" />
              <rect x="72" y="102" width="40" height="6" rx="2" fill="url(#mobileGrad)" opacity="0.3" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(6, 182, 212, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Cross-Platform Experience Platform Engineering
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Build scalable cross-platform experience platforms that accelerate digital product delivery, enable unified customer journeys across devices, and reduce time‑to‑market through a governed, reusable architecture.
          </p>
          
          {/* No stats - removed */}
        </div>

        {/* Transformation Methodology */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Cross‑Platform Experience Platform Transformation Approach
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value‑led methodology for building unified, high‑velocity cross‑platform digital experiences.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess current mobile and web landscape, duplication, and release inefficiencies', icon: '🔍' },
              { step: '02', title: 'Define', desc: 'Identify value streams, platform strategy, and operating model', icon: '🎯' },
              { step: '03', title: 'Architect', desc: 'Design shared experience layers and reusable foundations', icon: '🏗️' },
              { step: '04', title: 'Standardize', desc: 'Establish cross‑platform design system and component model', icon: '🔄' },
              { step: '05', title: 'Enable', desc: 'Integrate CI/CD, automation, and self‑service environments', icon: '⚙️' },
              { step: '06', title: 'Scale', desc: 'Drive adoption across products and business units', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#22d3ee', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Platform Experience Platform Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Cross‑Platform Experience Platform Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome‑driven capabilities for scalable, high‑velocity cross‑platform delivery.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Enterprise Cross‑Platform Platform Enablement',
                icon: '🏗️',
                desc: 'Standardized architecture, tooling, and governance for scalable cross‑platform delivery across multiple products.'
              },
              {
                title: 'Design‑to‑Code Acceleration Across Platforms',
                icon: '⚡',
                desc: 'Transform design systems into reusable components for faster release cycles across iOS, Android, and web.'
              },
              {
                title: 'Shared Experience Layer Architecture',
                icon: '🔄',
                desc: 'Unify business logic and data layers to ensure consistent behaviour and reduce duplication.'
              },
              {
                title: 'Unified Release & DevOps for Mobile and Web',
                icon: '🚀',
                desc: 'Automated CI/CD pipelines that deliver updates simultaneously to all platforms.'
              },
              {
                title: 'Performance & Experience Optimization',
                icon: '📈',
                desc: 'Improve engagement, app store ratings, and conversion through measurable UX and speed.'
              },
              {
                title: 'Governed Reusable Component Model',
                icon: '📦',
                desc: 'Establish a shared component library with versioning, documentation, and contribution workflows.'
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

        {/* Ecosystem Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(6, 182, 212, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Cross‑Platform Experience Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem enabling scalable, high‑velocity cross‑platform delivery.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'React Native', 'Flutter', 'Xamarin', 'Ionic', 'Capacitor',
              'Cordova', 'NativeScript', 'Expo', 'Redux', 'MobX',
              'TypeScript', 'Dart', 'C#', '.NET', 'Swift',
              'Kotlin', 'Java', 'Firebase', 'AWS Amplify', 'App Center',
              'Fastlane', 'TestFlight', 'Google Play', 'App Store', 'PWA'
            ].map((tech, i) => (
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
              { title: 'Reduced product release cycles across platforms', desc: 'Ship features simultaneously on iOS, Android, and web with automated delivery.', icon: '⏱️' },
              { title: 'Lower total cost of experience ownership', desc: 'Maintain one codebase instead of multiple platform-specific teams.', icon: '💰' },
              { title: 'Consistent omnichannel customer journeys', desc: 'Ensure brand and interaction consistency across every touchpoint.', icon: '🔄' },
              { title: 'Higher engineering productivity through reuse', desc: 'Leverage shared components and patterns to accelerate development.', icon: '⚡' },
              { title: 'Faster experimentation and innovation', desc: 'Rapidly test and deploy new features across all platforms simultaneously.', icon: '🧪' },
              { title: 'Future‑ready foundation for AI‑driven experiences', desc: 'Build a scalable platform that can integrate real‑time personalization and intelligence.', icon: '🤖' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.1))', borderRadius: '30px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Cross‑Platform Delivery into a Scalable Experience Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our experience engineering specialists to establish a unified cross‑platform architecture that accelerates innovation and delivers measurable business outcomes.
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