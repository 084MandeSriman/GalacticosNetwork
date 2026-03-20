import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EnterpriseMobility() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #4c1d95 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.4); } 50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); } }
        @keyframes enterprisePulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes shieldRotate { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(5deg); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(147, 51, 234, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(251, 191, 36, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(251, 191, 36, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(147, 51, 234, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(251, 191, 36, 0.2)); box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #fbbf24; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(147, 51, 234, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(251, 191, 36, 0.5); box-shadow: 0 15px 40px rgba(147, 51, 234, 0.2); }
        .feature-tag { background: rgba(147, 51, 234, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 12px; color: #ddd6fe; font-weight: 500; }
        .cta-btn { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #1e3a8a; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(251, 191, 36, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #fbbf24; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(251, 191, 36, 0.1); transform: translateY(-4px); }
        .case-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 35px; border: 1px solid rgba(147, 51, 234, 0.15); transition: all 0.4s ease; }
        .case-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.3); border-color: rgba(251, 191, 36, 0.3); }
        .faq-item { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { background: rgba(255,255,255,0.1); }
        .faq-item.active { background: rgba(255,255,255,0.1); border-color: rgba(251, 191, 36, 0.5); }
      `}</style>
      
      {/* Animated Background Elements - Enterprise/Business Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Shield shapes - representing security/enterprise */}
      <div style={{ position: 'absolute', top: '12%', right: '10%', width: '0', height: '0', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '35px solid rgba(251, 191, 36, 0.3)', animation: 'shieldRotate 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '28%', right: '18%', width: '30px', height: '50px', border: '3px solid rgba(255,255,255,0.2)', borderRadius: '0 0 15px 15px', animation: 'shieldRotate 4s ease-in-out infinite 0.5s' }} />
      
      {/* Building/Corporate shapes */}
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '40px', height: '60px', border: '3px solid rgba(147, 51, 234, 0.3)', animation: 'enterprisePulse 4s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '35%', right: '8%', width: '25px', height: '40px', background: 'rgba(251, 191, 36, 0.15)', animation: 'enterprisePulse 4s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* Enterprise Shield SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="enterpriseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <filter id="enterpriseGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Shield shape */}
              <path d="M100,20 L170,40 L170,100 Q170,160 100,180 Q30,160 30,100 L30,40 Z" fill="none" stroke="url(#enterpriseGrad)" strokeWidth="4" filter="url(#enterpriseGlow)" />
              {/* Mobile phone inside shield */}
              <rect x="80" y="60" width="40" height="70" rx="6" fill="none" stroke="url(#enterpriseGrad)" strokeWidth="3" />
              {/* Screen */}
              <rect x="85" y="70" width="30" height="50" rx="2" fill="rgba(251, 191, 36, 0.2)" />
              {/* Home button */}
              <circle cx="100" cy="125" r="3" fill="url(#enterpriseGrad)" />
              {/* Checkmark/secure indicator */}
              <path d="M95,85 L100,90 L110,78" fill="none" stroke="url(#enterpriseGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(147, 51, 234, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Mobility Experience Platform Transformation
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Establish a secure, scalable enterprise mobility platform that enables a connected workforce, digitizes core operations, and delivers governed, always-on access to business capabilities across devices and locations.
          </p>
          
          {/* No stats – removed */}
        </div>

        {/* Transformation Methodology */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Enterprise Mobility Platform Transformation Approach
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value‑led methodology for building a secure, scalable, and governed enterprise mobility platform.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess workforce journeys, device landscape, security posture, and operational bottlenecks', icon: '🔍' },
              { step: '02', title: 'Define', desc: 'Establish mobility vision, governance model, and value streams', icon: '🎯' },
              { step: '03', title: 'Architect', desc: 'Design a unified enterprise mobility platform and secure access layer', icon: '🏗️' },
              { step: '04', title: 'Standardize', desc: 'Create reusable mobile capabilities and policy‑driven controls', icon: '🔄' },
              { step: '05', title: 'Enable', desc: 'Integrate identity, automation, and self‑service provisioning', icon: '⚙️' },
              { step: '06', title: 'Scale', desc: 'Drive adoption across business units and global workforce', icon: '📈' }
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

        {/* Enterprise Mobility Platform Capabilities (replaces services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Enterprise Mobility Platform Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome‑driven capabilities for a secure, scalable, and productive workforce mobility platform.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Unified Workforce Mobility Platform Enablement',
                icon: '🏗️',
                desc: 'Establish a governed mobility foundation delivering secure access to enterprise applications and workflows.'
              },
              {
                title: 'Zero‑Trust Mobile Access Architecture',
                icon: '🔐',
                desc: 'Implement identity‑centric, policy‑driven access across devices, users, and locations.'
              },
              {
                title: 'Mobile‑First Business Process Digitization',
                icon: '📱',
                desc: 'Transform field, operations, and service workflows into real‑time mobile experiences.'
              },
              {
                title: 'Secure BYOD & Corporate Device Strategy',
                icon: '🤝',
                desc: 'Enable flexible device programs with full compliance, data separation, and lifecycle governance.'
              },
              {
                title: 'Enterprise App Distribution & Lifecycle Governance',
                icon: '📦',
                desc: 'Deliver controlled, versioned, and measurable application adoption across the workforce.'
              },
              {
                title: 'Mobility Intelligence & Workforce Insights',
                icon: '📊',
                desc: 'Use analytics to optimize productivity, security posture, and operational performance.'
              }
            ].map((capability, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{capability.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{capability.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{capability.desc}</p>
                {/* No feature tags */}
              </div>
            ))}
          </div>
        </div>

        {/* Remove Success Stories section */}

        {/* Enterprise Mobility Platform Ecosystem */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(147, 51, 234, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Enterprise Mobility Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem enabling secure, scalable, and intelligent enterprise mobility.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Microsoft Intune', 'Jamf', 'VMware Workspace ONE', 'MobileIron', 'BlackBerry UEM',
              'SOTI', 'Citrix Endpoint Management', 'SAP Fiori', 'Salesforce Mobile', 'ServiceNow Mobile',
              'Workday', 'Oracle Mobile Cloud', 'AWS Device Farm', 'Google Endpoint Management', 'IBM MaaS360',
              'AppConfig', 'MDM APIs', 'REST APIs', 'OAuth 2.0', 'SAML',
              'Active Directory', 'Azure AD', 'Okta', 'Ping Identity', 'PKI'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (replaces Why Choose Us) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Secure access from anywhere', desc: 'Enable a location‑independent workforce with policy‑driven access to enterprise capabilities.', icon: '🔒' },
              { title: 'Higher workforce productivity', desc: 'Digitize workflows for real‑time execution and decision‑making.', icon: '⚡' },
              { title: 'Reduced mobility operating cost', desc: 'Eliminate fragmented tools and manual provisioning through standardization.', icon: '💰' },
              { title: 'Improved compliance and audit readiness', desc: 'Centralized governance and automated policy enforcement.', icon: '✅' },
              { title: 'Faster onboarding of employees and partners', desc: 'Self‑service, automated provisioning across devices.', icon: '⏱️' },
              { title: 'Future‑ready AI‑enabled workforce experiences', desc: 'Support real‑time insights and intelligent automation.', icon: '🤖' }
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

        {/* Remove FAQ section */}

        {/* CTA Section */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(251, 191, 36, 0.1))', borderRadius: '30px', border: '1px solid rgba(147, 51, 234, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Enterprise Mobility into a Secure Workforce Experience Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our experience engineering specialists to establish a governed enterprise mobility platform that delivers secure access, operational agility, and measurable business outcomes.
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