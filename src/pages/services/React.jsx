import { useNavigate } from "react-router-dom";

export default function React() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(129, 140, 248, 0.4); } 50% { box-shadow: 0 0 40px rgba(129, 140, 248, 0.8); } }
        @keyframes floatAtom { 
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(90deg); }
          50% { transform: translate(0, -25px) rotate(180deg); }
          75% { transform: translate(-10px, -15px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .atom-orbit { animation: floatAtom 8s ease-in-out infinite; }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(129,140,248,0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(129,140,248,0.6); }
        .react-logo { animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite; }
        .tech-tag { background: linear-gradient(135deg, rgba(129,140,248,0.2), rgba(99,102,241,0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(129,140,248,0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(129,140,248,0.3), rgba(99,102,241,0.2)); box-shadow: 0 10px 30px rgba(129,140,248,0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(129,140,248,0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #818cf8; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(129,140,248,0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; borderRadius: 50px; fontSize: 16px; fontWeight: 700; border: 2px solid #818cf8; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(129,140,248,0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background - Atom/Electron Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(129,140,248,0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Atom Electrons */}
      <div className="atom-orbit" style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '200px' }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(129,140,248,0.3)" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="160" cy="100" r="12" fill="#818cf8" opacity="0.8" />
          <circle cx="40" cy="100" r="12" fill="#6366f1" opacity="0.8" />
          <circle cx="100" cy="40" r="12" fill="#a5b4fc" opacity="0.8" />
        </svg>
      </div>
      
      <div className="atom-orbit" style={{ position: 'absolute', bottom: '15%', right: '15%', width: '250px', height: '250px', animationDelay: '2s' }}>
        <svg width="250" height="250" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(129,140,248,0.2)" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="180" cy="100" r="10" fill="#818cf8" opacity="0.7" />
          <circle cx="20" cy="100" r="10" fill="#6366f1" opacity="0.7" />
          <circle cx="100" cy="20" r="10" fill="#a5b4fc" opacity="0.7" />
          <circle cx="100" cy="180" r="10" fill="#c7d2fe" opacity="0.7" />
        </svg>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(129,140,248,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* React Logo SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="reactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#reactGrad)" strokeWidth="2" opacity="0.3" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="url(#reactGrad)" strokeWidth="1.5" opacity="0.5" />
              <path d="M50 15 L50 35 M50 65 L50 85 M15 50 L35 50 M65 50 L85 50" stroke="url(#reactGrad)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="50" cy="50" r="12" fill="url(#reactGrad)" opacity="0.8" />
              <circle cx="50" cy="25" r="6" fill="url(#reactGrad)" />
              <circle cx="50" cy="75" r="6" fill="url(#reactGrad)" />
              <circle cx="25" cy="50" r="6" fill="url(#reactGrad)" />
              <circle cx="75" cy="50" r="6" fill="url(#reactGrad)" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(129,140,248,0.5)', letterSpacing: '-0.02em' }}>
            Modern Frontend Engineering
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            We design and build scalable, experience-driven digital platforms using modern frontend architectures. Our solutions enable faster user engagement, seamless integrations, and enterprise-grade performance.
          </p>
          
          {/* Quick Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { number: 'Digital Experience Platforms', label: 'Projects', icon: '🚀' },
              { number: 'Enterprise UI Modernization', label: 'Satisfaction', icon: '⭐' },
              { number: 'API-Driven Integrations', label: 'Experts', icon: '👨‍💻' },
              { number: 'Global Delivery Model', label: 'Support', icon: '💬' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(129,140,248,0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#818cf8' }}>{stat.number}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Core Services
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Enterprise-grade frontend transformation capabilities
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Enterprise UI Modernization', icon: '⚛️', desc: 'Transform legacy interfaces into high-performance, component-driven modern web applications.', features: ['React.js', 'Next.js', 'TypeScript', 'Redux/Context'] },
              { title: 'Scalable Frontend Architectures', icon: '🅰️', desc: 'Build large-scale, maintainable frontend ecosystems aligned with microservices and API-first strategies.', features: ['Angular', 'RxJS', 'NgRx', 'Angular Material'] },
              { title: 'Experience-Driven Progressive Web Platforms', icon: '📱', desc: 'Deliver app-like digital experiences with offline capability, real-time engagement, and omnichannel reach.', features: ['Service Workers', 'Web App Manifest', 'Offline Support', 'Push Notifications'] },
              { title: 'Design-to-Digital Acceleration', icon: '🎨', desc: 'Convert product designs into pixel-perfect, responsive, and performance-optimized digital interfaces.', features: ['Figma to Code', 'Responsive Design', 'Animations', 'Accessibility'] },
              { title: 'Frontend Platform Engineering', icon: '🔄', desc: 'Establish reusable component libraries, governance models, and scalable frontend foundations.', features: ['Redux Toolkit', 'NgRx', 'Zustand', 'Jotai'] },
              { title: 'Performance & Experience Optimization', icon: '⚡', desc: 'Enhance speed, accessibility, SEO readiness, and user engagement across digital touchpoints.', features: ['Code Splitting', 'Lazy Loading', 'SSR/SSG', 'Bundle Optimization'] }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((feature, j) => (
                    <span key={j} style={{ background: 'rgba(129,140,248,0.2)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', color: '#a5b4fc', fontWeight: '500' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(129,140,248,0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Technologies We Use
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            Enterprise-ready modern frontend ecosystem
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['React', 'Next.js', 'Angular', 'TypeScript', 'Redux', 'NgRx', 'RxJS', 'Tailwind CSS', 'SASS', 'Figma', 'Jest', 'Cypress', 'Playwright', 'Webpack', 'Vite', 'GraphQL', 'REST APIs', 'PWA', 'JAMstack', 'Node.js'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact We Deliver
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Future-Ready Digital Platforms', desc: 'Built using scalable and long-term sustainable architectures.', icon: '🚀' },
              { title: 'Faster Time-to-Market', desc: 'Accelerated product releases with optimized frontend delivery models.', icon: '⚡' },
              { title: 'Omnichannel Experience', desc: 'Consistent user journeys across web, mobile, and enterprise portals.', icon: '📱' },
              { title: 'Enterprise Scalability', desc: 'Frontend platforms that grow with business demand.', icon: '📈' },
              { title: 'Higher Digital Reach', desc: 'Improved discoverability and engagement through optimized experiences.', icon: '🔍' },
              { title: 'Inclusive & Compliant Experiences', desc: 'Accessibility-aligned platforms for global users.', icon: '♿' }
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

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(99,102,241,0.1))', borderRadius: '30px', border: '1px solid rgba(129,140,248,0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Reimagine Your Digital Experience
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Connect with our experts to build scalable, high-performance, and future-ready frontend platforms.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={() => navigate("/contact")}>
              Start Your Project
            </button>
            <button className="cta-btn-outline">
              Talk to Experts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
