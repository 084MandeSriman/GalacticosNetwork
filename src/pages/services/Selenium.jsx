import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Selenium() {
  const navigate = useNavigate();

  // Function to handle redirection to contact page
  const handleContactRedirect = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0d2818 0%, #1a4731 50%, #234f38 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(67, 176, 42, 0.4); } 50% { box-shadow: 0 0 40px rgba(67, 176, 42, 0.8); } }
        @keyframes browserPulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(67, 176, 42, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(67, 176, 42, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(67, 176, 42, 0.2), rgba(52, 140, 34, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(67, 176, 42, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(67, 176, 42, 0.3), rgba(52, 140, 34, 0.2)); box-shadow: 0 10px 30px rgba(67, 176, 42, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(67, 176, 42, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #43b02a; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #43b02a 0%, #348c22 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(67, 176, 42, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #43b02a; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(67, 176, 42, 0.1); transform: translateY(-4px); }
        .process-step { background: linear-gradient(135deg, rgba(67, 176, 42, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(67, 176, 42, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(67, 176, 42, 0.5); box-shadow: 0 15px 40px rgba(67, 176, 42, 0.2); }
      `}</style>
      
      {/* Animated Background - Green theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(67, 176, 42, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(52, 140, 34, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Browser Window Pattern */}
      <svg style={{ position: 'absolute', top: '10%', left: '5%', width: '180px', height: '140px', opacity: 0.12 }} viewBox="0 0 180 140">
        <rect x="5" y="5" width="170" height="130" rx="5" fill="none" stroke="#43b02a" strokeWidth="2" />
        <line x1="5" y1="25" x2="175" y2="25" stroke="#43b02a" strokeWidth="2" />
        <circle cx="20" cy="15" r="5" fill="#43b02a" />
        <circle cx="35" cy="15" r="5" fill="#43b02a" />
        <circle cx="50" cy="15" r="5" fill="#43b02a" />
        <rect x="65" y="8" width="100" height="14" rx="3" fill="none" stroke="#43b02a" strokeWidth="1" />
        <rect x="15" y="40" width="60" height="30" rx="2" fill="#43b02a" opacity="0.3" />
        <rect x="15" y="80" width="150" height="8" rx="2" fill="#43b02a" opacity="0.3" />
        <rect x="15" y="95" width="140" height="8" rx="2" fill="#43b02a" opacity="0.3" />
        <rect x="15" y="110" width="100" height="8" rx="2" fill="#43b02a" opacity="0.3" />
      </svg>
      
      <svg style={{ position: 'absolute', bottom: '15%', right: '8%', width: '160px', height: '120px', opacity: 0.1 }} viewBox="0 0 180 140">
        <rect x="5" y="5" width="170" height="130" rx="5" fill="none" stroke="#43b02a" strokeWidth="2" />
        <line x1="5" y1="25" x2="175" y2="25" stroke="#43b02a" strokeWidth="2" />
        <rect x="15" y="40" width="60" height="30" rx="2" fill="#43b02a" opacity="0.3" />
        <rect x="15" y="80" width="150" height="8" rx="2" fill="#43b02a" opacity="0.3" />
      </svg>
      
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(67, 176, 42, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="selGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#43b02a" />
                  <stop offset="100%" stopColor="#348c22" />
                </linearGradient>
                <filter id="selGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#selGrad)" strokeWidth="4" filter="url(#selGlow)" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="url(#selGrad)" strokeWidth="2" />
              <rect x="30" y="35" width="40" height="30" rx="3" fill="none" stroke="url(#selGrad)" strokeWidth="2" />
              <line x1="30" y1="43" x2="70" y2="43" stroke="url(#selGrad)" strokeWidth="2" />
              <circle cx="36" cy="39" r="2" fill="url(#selGrad)" />
              <circle cx="42" cy="39" r="2" fill="url(#selGrad)" />
              <circle cx="48" cy="39" r="2" fill="url(#selGrad)" />
              <path d="M55 50 L60 65 L65 60 L72 70 L75 67 L68 57 L73 57 Z" fill="url(#selGrad)" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(67, 176, 42, 0.5)', letterSpacing: '-0.02em' }}>
            Selenium Automation Testing
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable intelligent, scalable quality engineering with Selenium-based test automation—accelerating release cycles, improving product quality, and embedding continuous testing across DevSecOps pipelines.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Enterprise Quality Engineering Programs' },
              { icon: '🚀', label: 'Continuous Testing Enablement' },
              { icon: '⚡', label: 'DevSecOps & CI/CD Integration' },
              { icon: '🌍', label: 'Cross-Platform Test Modernization' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(67, 176, 42, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Selenium Testing Process) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Value-led quality engineering for modern software delivery
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess QA maturity & toolchain', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define scalable automation framework', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Implement continuous testing model', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Ensure quality gates & governance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Enable CI/CD integrated execution', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Optimize with AI-driven insights', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#43b02a', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Engineering & Test Automation Transformation Capabilities (was Core Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Quality Engineering & Test Automation Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for intelligent test automation
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Intelligent Test Automation Frameworks', icon: '🛠️', desc: 'Build scalable, maintainable automation frameworks aligned with business objectives and technology stack.' },
              { title: 'Continuous Testing in DevSecOps', icon: '🔄', desc: 'Embed automated testing into CI/CD pipelines for faster feedback and higher release confidence.' },
              { title: 'Test Data & Environment Engineering', icon: '📊', desc: 'Provision on-demand test data and environments to accelerate testing and reduce bottlenecks.' },
              { title: 'AI-Assisted Test Optimization', icon: '🤖', desc: 'Leverage AI to optimize test suites, reduce flaky tests, and improve maintenance efficiency.' },
              { title: 'Cross-Platform & Cross-Browser Quality Engineering', icon: '🌐', desc: 'Ensure consistent quality across web, mobile, and multiple browsers with parallel execution.' },
              { title: 'Quality Analytics & Reporting', icon: '📈', desc: 'Gain real-time insights into quality metrics, test coverage, and release readiness.' }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                {/* No feature tags – outcome focused */}
              </div>
            ))}
          </div>
        </div>

        {/* Test Automation Platform Capabilities (was Selenium Tools & Technologies) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(67, 176, 42, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Test Automation Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            End-to-end quality engineering ecosystem expertise
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Selenium WebDriver', 'Selenium IDE', 'Selenium Grid', 'TestNG', 'JUnit', 'PyTest', 'Cucumber', 'Behave', 'Appium', 'Robot Framework', 'Extent Reports', 'Allure', 'BrowserStack', 'Sauce Labs', 'LambdaTest', 'Jenkins', 'Docker', 'Maven', 'Gradle'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (was Why Choose Selenium Automation?) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Faster release cycles', desc: 'Accelerate time-to-market with automated regression and continuous testing.', icon: '⏱️' },
              { title: 'Reduced production defects', desc: 'Catch issues early with shift-left testing and expanded test coverage.', icon: '🐞' },
              { title: 'Higher test coverage', desc: 'Achieve comprehensive coverage across browsers, devices, and platforms.', icon: '✅' },
              { title: 'Shift-left quality engineering', desc: 'Integrate quality from design to deployment, reducing rework.', icon: '⬅️' },
              { title: 'Optimized QA cost', desc: 'Reduce manual testing effort and maintenance overhead with smart automation.', icon: '💰' },
              { title: 'Real-time quality insights', desc: 'Gain visibility into quality metrics and release readiness with analytics.', icon: '📊' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(67, 176, 42, 0.2), rgba(52, 140, 34, 0.1))', borderRadius: '30px', border: '1px solid rgba(67, 176, 42, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Quality Engineering with Intelligent Test Automation
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Engage with our quality engineering specialists to build a scalable, AI-driven continuous testing platform.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={handleContactRedirect}>
              Start Your Transformation
            </button>
            <button className="cta-btn-outline" onClick={handleContactRedirect}>
              Talk to Experts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}