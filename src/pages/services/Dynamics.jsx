import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dynamics() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(138, 43, 226, 0.4); } 50% { box-shadow: 0 0 40px rgba(138, 43, 226, 0.8); } }
        @keyframes floatDiamond { 0%, 100% { transform: translateY(0px) rotate(45deg); } 50% { transform: translateY(-30px) rotate(45deg); } }
        @keyframes floatSquare { 0%, 100% { transform: translateY(0px) rotate(20deg); } 50% { transform: translateY(-25px) rotate(20deg); } }
        @keyframes floatCircle { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-35px); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(138, 43, 226, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(138, 43, 226, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(100, 30, 180, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(138, 43, 226, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(100, 30, 180, 0.2)); box-shadow: 0 10px 30px rgba(138, 43, 226, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #8a2be2; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #8a2be2 0%, #6a1bb2 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(138, 43, 226, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #8a2be2; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(138, 43, 226, 0.1); transform: translateY(-4px); }
        .process-step { background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(138, 43, 226, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(138, 43, 226, 0.5); box-shadow: 0 15px 40px rgba(138, 43, 226, 0.2); }
      `}</style>
      
      {/* Animated Background */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100, 30, 180, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Floating Geometric Shapes */}
      <div style={{ position: 'absolute', top: '15%', left: '8%', width: '60px', height: '60px', background: 'rgba(138, 43, 226, 0.15)', transform: 'rotate(45deg)', animation: 'floatDiamond 8s ease-in-out infinite', borderRadius: '8px' }} />
      <div style={{ position: 'absolute', top: '25%', right: '15%', width: '80px', height: '80px', background: 'rgba(138, 43, 226, 0.1)', animation: 'floatSquare 10s ease-in-out infinite 1s', borderRadius: '12px' }} />
      <div style={{ position: 'absolute', bottom: '30%', left: '20%', width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(138, 43, 226, 0.2)', animation: 'floatCircle 7s ease-in-out infinite 0.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="dynamicsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8a2be2" />
                  <stop offset="100%" stopColor="#6a1bb2" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="80" height="80" rx="15" fill="url(#dynamicsGrad)" />
              <circle cx="35" cy="40" r="8" fill="white" opacity="0.9" />
              <circle cx="50" cy="35" r="8" fill="white" opacity="0.9" />
              <circle cx="65" cy="40" r="8" fill="white" opacity="0.9" />
              <circle cx="42" cy="55" r="8" fill="white" opacity="0.9" />
              <circle cx="58" cy="55" r="8" fill="white" opacity="0.9" />
              <circle cx="50" cy="70" r="8" fill="white" opacity="0.9" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(138, 43, 226, 0.5)', letterSpacing: '-0.02em' }}>
            Microsoft Dynamics 365
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Reimagine enterprise operations with a unified, data-driven Dynamics 365 platform that connects finance, sales, service, and supply chain.
          </p>
          
          {/* Updated Stats Section */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Dynamics 365 Transformation Programs' },
              { icon: '🔄', label: 'ERP & CRM Modernization' },
              { icon: '⚡', label: 'Power Platform Enablement' },
              { icon: '🌍', label: 'Global Delivery Capabilities' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(138, 43, 226, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (formerly Implementation Approach) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Discovery', desc: 'Assess business processes, application landscape, and transformation goals', icon: '🔍' },
              { step: '02', title: 'Design', desc: 'Define scalable, future-ready digital architecture', icon: '📐' },
              { step: '03', title: 'Build', desc: 'Accelerate platform configuration with industry-aligned models', icon: '⚙️' },
              { step: '04', title: 'Test', desc: 'Ensure performance, security, and business readiness', icon: '✅' },
              { step: '05', title: 'Deploy', desc: 'Execute seamless release and data transition', icon: '🚀' },
              { step: '06', title: 'Support', desc: 'Continuously enhance for innovation and value realization', icon: '🛡️' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#8a2be2', marginBottom: '12px' }}>{process.step}</div>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{process.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services - Updated Title, Added Subtext, Updated Cards */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Dynamics 365 Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            End-to-end Microsoft business application transformation for intelligent enterprises
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Intelligent Revenue Operations', icon: '💰', desc: 'Enable data-driven selling with AI insights, automated pipelines, and connected customer intelligence.' },
              { title: 'Connected Customer Service Platforms', icon: '🎧', desc: 'Deliver predictive, omnichannel service experiences with intelligent case management.' },
              { title: 'Digital Finance & Supply Chain Modernization', icon: '📊', desc: 'Unify financial control, operational agility, and real-time business visibility.' },
              { title: 'Low-Code Innovation with Power Platform', icon: '⚡', desc: 'Accelerate enterprise automation, analytics, and app development with citizen-led innovation.' }
            ].map((service, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>{service.desc}</p>
                {/* Removed feature tags to focus on outcomes */}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Updated Heading and Text */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(106, 27, 178, 0.1))', borderRadius: '30px', border: '1px solid rgba(138, 43, 226, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Modernize Your Enterprise with Dynamics 365
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Connect with our transformation specialists to build a unified, intelligent business platform.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={handleNavigation}>
              Start Your Project
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