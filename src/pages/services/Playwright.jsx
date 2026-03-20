import React from 'react';
import { Link } from 'react-router-dom'; // Use 'next/link' if using Next.js

export default function Playwright() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #a855f7 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); } 50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(139, 92, 246, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(139, 92, 246, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(139, 92, 246, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.2)); box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #a855f7; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(168, 85, 247, 0.4); color: #fff; }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #a855f7; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .cta-btn-outline:hover { background: rgba(168, 85, 247, 0.1); transform: translateY(-4px); color: #fff; }
        .process-step { background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(139, 92, 246, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(139, 92, 246, 0.5); box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2); }
      `}</style>
      
      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Playwright SVG Decorations */}
      <svg style={{ position: 'absolute', top: '10%', left: '5%', width: '180px', height: '140px', opacity: 0.12 }} viewBox="0 0 180 140">
        <rect x="5" y="5" width="170" height="130" rx="5" fill="none" stroke="#a855f7" strokeWidth="2" />
        <circle cx="20" cy="15" r="5" fill="#a855f7" />
        <circle cx="35" cy="15" r="5" fill="#a855f7" />
        <circle cx="50" cy="15" r="5" fill="#a855f7" />
        <line x1="5" y1="28" x2="175" y2="28" stroke="#a855f7" strokeWidth="2" />
        <rect x="15" y="40" width="40" height="6" rx="2" fill="#a855f7" opacity="0.4" />
        <rect x="15" y="52" width="150" height="6" rx="2" fill="#a855f7" opacity="0.4" />
        <rect x="15" y="64" width="120" height="6" rx="2" fill="#a855f7" opacity="0.4" />
        <circle cx="145" cy="100" r="20" fill="none" stroke="#a855f7" strokeWidth="2" />
      </svg>
      
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="playwrightGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#playwrightGradNew)" strokeWidth="4" />
              <circle cx="100" cy="100" r="15" fill="rgba(168, 85, 247, 0.3)" />
              <circle cx="100" cy="100" r="6" fill="#fff" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(168, 85, 247, 0.5)', letterSpacing: '-0.02em' }}>
            Playwright Testing Services
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable high-velocity digital delivery with Playwright-based intelligent test automation—accelerating release cycles, improving product quality, and embedding continuous testing across modern DevSecOps pipelines.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Enterprise Quality Engineering Programs' },
              { icon: '⚡', label: 'High-Speed Release Enablement' },
              { icon: '🔄', label: 'Continuous Testing in CI/CD' },
              { icon: '🌐', label: 'Cross-Browser & Cross-Platform Validation' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Process Section) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Value-led quality engineering for high-speed digital delivery
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess QA maturity & toolchain', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define scalable automation strategy', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Implement high-speed continuous testing', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Enable quality gates & governance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Integrate with CI/CD pipelines', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Optimize with AI-driven insights', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#a855f7', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Engineering & High-Speed Test Automation Capabilities (was Services Section) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Quality Engineering & High-Speed Test Automation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for intelligent, high-velocity testing
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'High-Speed End-to-End Test Automation',
                icon: '🌐',
                desc: 'Deliver ultra-fast and reliable E2E automation for modern web platforms using Playwright’s parallel and auto-wait architecture.'
              },
              {
                title: 'Continuous Testing in DevSecOps',
                icon: '🔄',
                desc: 'Embed Playwright automation into CI/CD pipelines for rapid feedback and release confidence.'
              },
              {
                title: 'API & UI Unified Quality Engineering',
                icon: '🔌',
                desc: 'Validate APIs and user journeys in a single automation layer to accelerate delivery.'
              },
              {
                title: 'Test Data & Environment Orchestration',
                icon: '📊',
                desc: 'Provision scalable test environments and data for high-velocity execution.'
              },
              {
                title: 'AI-Driven Test Optimization',
                icon: '🤖',
                desc: 'Improve stability, reduce flaky tests, and optimize execution using intelligent analytics.'
              },
              {
                title: 'Cross-Browser Release Validation',
                icon: '🌍',
                desc: 'Ensure consistent digital experience across Chromium, WebKit, and Firefox.'
              }
            ].map((service, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                {/* No feature tags – outcome focused */}
              </div>
            ))}
          </div>
        </div>

        {/* Test Automation Platform Capabilities (was Tools Section) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(168, 85, 247, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Test Automation Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            End-to-end ecosystem for high-speed quality engineering
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Playwright', 'TypeScript', 'GitHub Actions', 'Jenkins', 'Docker', 'Allure Reports', 'Azure DevOps'].map((tech, i) => (
              <div key={i} className="tech-tag">{tech}</div>
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
              { title: 'Accelerated release velocity', desc: 'Execute high-speed parallel automation for faster time-to-market.', icon: '⏱️' },
              { title: 'Reduced production defects', desc: 'Shift-left quality with unified UI and API testing.', icon: '🐞' },
              { title: 'Stable and reliable automation', desc: 'Auto-wait and smart retries eliminate flaky tests.', icon: '✅' },
              { title: 'Optimized QA cost', desc: 'Minimize manual testing through intelligent automation.', icon: '💰' },
              { title: 'Scalable continuous testing', desc: 'Run thousands of tests across browsers in parallel.', icon: '⚡' },
              { title: 'Real-time quality insights', desc: 'Gain release readiness visibility through analytics.', icon: '📊' }
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

        {/* CTA Section - updated heading, text and button */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(124, 58, 237, 0.1))', borderRadius: '30px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Digital Quality with High-Speed Test Automation
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Engage with our quality engineering specialists to build a scalable, high-velocity continuous testing platform powered by Playwright.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us" className="cta-btn">
              Start Your Transformation
            </Link>
            <Link to="/contact-us" className="cta-btn-outline">
              Talk to Experts
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}