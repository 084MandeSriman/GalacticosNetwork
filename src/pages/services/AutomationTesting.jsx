import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AutomationTesting() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.4); } 50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.8); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes borderGlow { 0%, 100% { border-color: rgba(255,255,255,0.2); } 50% { border-color: rgba(255,255,255,0.5); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.4); }
        .tech-tag { background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1)); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #fbbf24; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.15); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(255,255,255,0.4); box-shadow: 0 15px 40px rgba(0,0,0,0.2); }
        .feature-tag { background: rgba(245, 158, 11, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 12px; color: #fef3c7; font-weight: 500; }
        .cta-btn { background: linear-gradient(135deg, #fff 0%, #f3f4f6 100%); color: #f59e0b; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0,0,0,0.3); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #fff; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
        .client-logo { background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.1); }
        .client-logo:hover { background: rgba(255,255,255,0.2); transform: scale(1.05); }
        .case-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 35px; border: 1px solid rgba(255,255,255,0.15); transition: all 0.4s ease; }
        .case-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.3); border-color: rgba(255,255,255,0.3); }
        .faq-item { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { background: rgba(255,255,255,0.1); }
        .faq-item.active { background: rgba(255,255,255,0.1); border-color: rgba(251, 191, 36, 0.5); }
        .package-card { background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border-radius: 24px; padding: 40px; border: 1px solid rgba(255,255,255,0.15); transition: all 0.4s ease; text-align: center; }
        .package-card:hover { transform: translateY(-12px); border-color: rgba(255,255,255,0.4); box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
        .package-card.featured { background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(239, 68, 68, 0.1)); border-color: #fbbf24; }
      `}</style>
      
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)', animation: 'float 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 10s ease-in-out infinite 1.5s' }} />
      <div style={{ position: 'absolute', top: '40%', right: '20%', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent)', animation: 'float 6s ease-in-out infinite 0.5s' }} />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.3)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite ${Math.random() * 2}s`
        }} />
      ))}
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      {/* Code Window SVG Pattern - Unique decoration */}
      <svg style={{ position: 'absolute', top: '15%', left: '3%', width: '180px', height: '140px', opacity: 0.12 }} viewBox="0 0 180 140">
        <rect x="5" y="5" width="170" height="130" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="20" cy="15" r="5" fill="#fff" />
        <circle cx="35" cy="15" r="5" fill="#fff" />
        <circle cx="50" cy="15" r="5" fill="#fff" />
        <line x1="5" y1="28" x2="175" y2="28" stroke="#fff" strokeWidth="2" />
        <rect x="15" y="40" width="40" height="6" rx="2" fill="#fff" opacity="0.4" />
        <rect x="15" y="52" width="150" height="6" rx="2" fill="#fff" opacity="0.4" />
        <rect x="15" y="64" width="120" height="6" rx="2" fill="#fff" opacity="0.4" />
        <rect x="15" y="76" width="80" height="6" rx="2" fill="#fff" opacity="0.4" />
        <rect x="15" y="88" width="140" height="6" rx="2" fill="#fff" opacity="0.4" />
        <rect x="15" y="100" width="100" height="6" rx="2" fill="#fff" opacity="0.4" />
        {/* Gear/Cog element */}
        <circle cx="145" cy="100" r="20" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="145" cy="100" r="12" fill="none" stroke="#fff" strokeWidth="1" />
        <circle cx="145" cy="100" r="5" fill="#fff" />
      </svg>
      
      <svg style={{ position: 'absolute', bottom: '20%', right: '5%', width: '160px', height: '120px', opacity: 0.1 }} viewBox="0 0 180 140">
        <rect x="5" y="5" width="170" height="130" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
        <line x1="5" y1="28" x2="175" y2="28" stroke="#fff" strokeWidth="2" />
        <rect x="15" y="45" width="60" height="30" rx="2" fill="#fff" opacity="0.3" />
        <rect x="85" y="45" width="70" height="30" rx="2" fill="none" stroke="#fff" strokeWidth="1" />
        <rect x="15" y="85" width="150" height="8" rx="2" fill="#fff" opacity="0.3" />
        <rect x="15" y="100" width="100" height="8" rx="2" fill="#fff" opacity="0.3" />
      </svg>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <svg width="130" height="130" viewBox="0 0 200 200" style={{ marginBottom: '24px', animation: 'float 4s ease-in-out infinite, pulse 3s ease-in-out infinite' }}>
            <defs>
              <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0.6 }} />
              </linearGradient>
              <filter id="autoGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Gear/Cog representation */}
            <circle cx="100" cy="100" r="75" fill="none" stroke="url(#autoGrad)" strokeWidth="4" filter="url(#autoGlow)" />
            <circle cx="100" cy="100" r="55" fill="none" stroke="url(#autoGrad)" strokeWidth="3" />
            <circle cx="100" cy="100" r="35" fill="rgba(255,255,255,0.15)" stroke="url(#autoGrad)" strokeWidth="2" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect 
                key={i}
                x="94" y="15" 
                width="12" height="25" 
                rx="3"
                fill="url(#autoGrad)"
                transform={`rotate(${angle} 100 100)`}
              />
            ))}
            {/* Center automation icon */}
            <circle cx="100" cy="100" r="22" fill="rgba(255,255,255,0.2)" />
            <path d="M90 100 L95 108 L108 108 L100 114 L103 122 L90 116 L80 122 L83 114 L75 108 L88 108 Z" fill="#fff" />
          </svg>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '20px', textShadow: '0 4px 20px rgba(245, 158, 11, 0.5)', letterSpacing: '-0.02em' }}>
            Automation Testing Services
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.92)', maxWidth: '850px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable enterprise-wide quality engineering transformation with intelligent test automation—accelerating digital delivery, improving product reliability, and embedding continuous testing across DevSecOps.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Enterprise Quality Engineering Transformation' },
              { icon: '⚡', label: 'High-Velocity Digital Release Enablement' },
              { icon: '🔄', label: 'Continuous Testing in DevSecOps' },
              { icon: '🌐', label: 'Unified Cross-Platform Quality Engineering' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Our Testing Process) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Value-led quality engineering for scalable digital delivery
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess QA maturity & delivery landscape', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define scalable automation strategy', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Implement continuous testing model', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Establish quality gates & governance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Enable CI/CD integrated execution', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Optimize with AI-driven insights', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fbbf24', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Engineering & Intelligent Test Automation Capabilities (was Automation Testing Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Quality Engineering & Intelligent Test Automation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for enterprise-scale digital quality
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Intelligent Web & Digital Experience Automation',
                icon: '🌐',
                desc: 'Deliver scalable, resilient automation for modern digital platforms with parallel execution and adaptive test design.'
              },
              {
                title: 'API & Integration Test Automation',
                icon: '🔗',
                desc: 'Unlock continuous quality for microservices and APIs with automated contract testing and end‑to‑end validation.'
              },
              {
                title: 'Mobile & Cross-Platform Quality Engineering',
                icon: '📱',
                desc: 'Ensure seamless user experiences across iOS, Android, and emerging platforms with unified test automation.'
              },
              {
                title: 'Continuous Testing in DevSecOps',
                icon: '🔄',
                desc: 'Embed test automation into CI/CD pipelines for instant feedback and faster, safer releases.'
              },
              {
                title: 'AI-Assisted Test Optimization',
                icon: '🤖',
                desc: 'Reduce maintenance overhead, eliminate flaky tests, and optimize execution with intelligent analytics.'
              },
              {
                title: 'Test Data & Environment Orchestration',
                icon: '⚙️',
                desc: 'Provision on‑demand, reliable test data and environments to eliminate bottlenecks and accelerate delivery.'
              }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '18px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                {/* No feature tags – outcome focused */}
              </div>
            ))}
          </div>
        </div>

        {/* Test Automation Platform Capabilities (was Automation Tools & Technologies) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Test Automation Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            End-to-end ecosystem for intelligent quality engineering
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Selenium WebDriver', 'Cypress', 'Playwright', 'TestNG', 'JUnit', 'PyTest', 
              'Cucumber (BDD)', 'Appium', 'Postman', 'RestAssured', 'SoapUI', 'Jenkins', 
              'Docker', 'Kubernetes', 'Azure DevOps', 'GitLab CI', 'BrowserStack', 'Sauce Labs',
              'Katalon', 'Ranorex', 'Robot Framework', 'Gauge', 'Taiko', 'Travis CI', 'CircleCI'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (new section) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accelerated release velocity', desc: 'Execute high‑speed parallel automation for faster time‑to‑market.', icon: '⏱️' },
              { title: 'Reduced production defects', desc: 'Shift‑left quality with unified UI and API testing.', icon: '🐞' },
              { title: 'Shift‑left quality engineering', desc: 'Integrate quality from design to deployment, reducing rework.', icon: '⬅️' },
              { title: 'Optimized QA cost', desc: 'Minimize manual testing through intelligent automation.', icon: '💰' },
              { title: 'Scalable continuous testing', desc: 'Run thousands of tests across browsers in parallel.', icon: '⚡' },
              { title: 'Real‑time quality insights', desc: 'Gain release readiness visibility through analytics.', icon: '📊' }
            ].map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '32px' }}>{benefit.icon}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', margin: 0 }}>{benefit.title}</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.1))', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Quality Engineering with Intelligent Test Automation
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.92)', marginBottom: '35px', maxWidth: '650px', margin: '0 auto 35px' }}>
            Engage with our specialists to build a scalable, AI‑driven continuous testing platform.
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