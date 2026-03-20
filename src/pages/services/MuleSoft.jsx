import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MuleSoft() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a0a1a 0%, #2d0a2d 50%, #3d0a3d 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 128, 0.4); } 50% { box-shadow: 0 0 40px rgba(255, 0, 128, 0.8); } }
        @keyframes networkPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(255, 0, 128, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(255, 0, 128, 0.6); }
        .mulesoft-logo { animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite; }
        .tech-tag { background: linear-gradient(135deg, rgba(255, 0, 128, 0.2), rgba(200, 0, 100, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(255, 0, 128, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(255, 0, 128, 0.3), rgba(200, 0, 100, 0.2)); box-shadow: 0 10px 30px rgba(255, 0, 128, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(255, 0, 128, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #ff0080; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #ff0080 0%, #c40060 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255, 0, 128, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #ff0080; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(255, 0, 128, 0.1); transform: translateY(-4px); }
        .process-step { background: linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(255, 0, 128, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(255, 0, 128, 0.5); box-shadow: 0 15px 40px rgba(255, 0, 128, 0.2); }
      `}</style>
      
      {/* Animated Background - Network/Connection Pattern */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 0, 128, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 0, 100, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Network Lines - Unique to MuleSoft */}
      <svg style={{ position: 'absolute', top: '10%', left: '5%', width: '200px', height: '200px', opacity: 0.15 }} viewBox="0 0 100 100">
        <line x1="20" y1="20" x2="50" y2="50" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="50" y1="50" x2="80" y2="30" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="50" y1="50" x2="40" y2="80" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="50" y1="50" x2="70" y2="70" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <circle cx="20" cy="20" r="4" fill="#ff0080" />
        <circle cx="50" cy="50" r="6" fill="#ff0080" />
        <circle cx="80" cy="30" r="4" fill="#ff0080" />
        <circle cx="40" cy="80" r="4" fill="#ff0080" />
        <circle cx="70" cy="70" r="4" fill="#ff0080" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '15%', right: '10%', width: '180px', height: '180px', opacity: 0.12 }} viewBox="0 0 100 100">
        <line x1="30" y1="30" x2="60" y2="60" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="60" y1="60" x2="90" y2="50" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="60" y1="60" x2="50" y2="85" stroke="#ff0080" strokeWidth="1" strokeDasharray="5,5" />
        <circle cx="30" cy="30" r="4" fill="#ff0080" />
        <circle cx="60" cy="60" r="6" fill="#ff0080" />
        <circle cx="90" cy="50" r="4" fill="#ff0080" />
        <circle cx="50" cy="85" r="4" fill="#ff0080" />
      </svg>
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255, 0, 128, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* MuleSoft Logo SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="muleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff0080" />
                  <stop offset="100%" stopColor="#c40060" />
                </linearGradient>
                <filter id="muleGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#muleGrad)" filter="url(#muleGlow)" />
              <path d="M30 35 L50 35 L50 50 L70 50 L70 65 L50 65 L50 80 L30 80 Z" fill="white" opacity="0.9" />
              <path d="M55 35 L75 35 L75 80 L55 80 Z" fill="white" opacity="0.9" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(255, 0, 128, 0.5)', letterSpacing: '-0.02em' }}>
            MuleSoft Integration Solutions
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable a composable, connected enterprise with an API-led digital integration platform that unlocks real-time data, accelerates innovation, and powers seamless experiences across your business ecosystem.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Integration Transformation Programs' },
              { icon: '🔄', label: 'Composable Enterprise Enablement' },
              { icon: '⚡', label: 'API Productization at Scale' },
              { icon: '🌍', label: 'Hybrid & Multi-Cloud Connectivity' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(255, 0, 128, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Integration Approach) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Value-led integration approach for composable enterprises
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Discover enterprise integration value streams', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define composable, scalable integration architecture', icon: '📐' },
              { step: '03', title: 'Productize', desc: 'Productize reusable APIs and accelerators', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Ensure governance, security, and performance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Execute value-led release and adoption', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Continuously evolve the integration ecosystem', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#ff0080', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MuleSoft Transformation Capabilities (was Core Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            MuleSoft Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for composable business integration
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Composable Enterprise Integration', icon: '🏗️', desc: 'Enable business agility with reusable APIs and microservices that connect applications, data, and devices across your enterprise.' },
              { title: 'API Productization & Marketplace Enablement', icon: '📦', desc: 'Transform APIs into strategic digital products with full lifecycle management, discoverability, and governance.' },
              { title: 'Real-Time Data & Event-Driven Connectivity', icon: '⚡', desc: 'Unlock real-time insights with event-driven architectures and streaming data integration across hybrid environments.' },
              { title: 'Hybrid & Multi-Cloud Integration', icon: '☁️', desc: 'Seamlessly connect workloads across on-premise, cloud, and edge with a unified integration platform.' },
              { title: 'Legacy Modernization through API Enablement', icon: '🔄', desc: 'Extend the life of core systems by exposing legacy capabilities as modern, secure APIs for innovation.' },
              { title: 'Integration Governance & Observability', icon: '📊', desc: 'Ensure compliance, security, and performance with centralized monitoring, policy enforcement, and analytics.' }
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

        {/* Anypoint Platform Capabilities (keep) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(255, 0, 128, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Anypoint Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            Complete integration platform for digital transformation
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Anypoint Platform', 'Anypoint Studio', 'CloudHub', 'Mule ESB', 'API Manager', 'Exchange', 'DataWeave', 'MuleSoft Composer', 'Runtime Fabric', 'Anypoint VPC', 'API Gateway', 'Traffic Management', 'Access Management', 'Analytics', 'Visualizer', 'API Governance'].map((cap, i) => (
              <div key={i} className="tech-tag">
                {cap}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies (keep) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(255, 0, 128, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Technologies We Use
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            Expertise across MuleSoft ecosystem
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Mule 4.x', 'Anypoint Studio', 'Java', 'DataWeave', 'DataSense', 'MEL', 'REST API', 'GraphQL', 'SOAP', 'JSON', 'XML', 'Salesforce', 'SAP', 'Database', 'JMS', 'Kafka'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (was Why Choose Our MuleSoft Services?) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accelerated Time-to-Integration', desc: 'Reduce integration delivery cycles with reusable APIs and composable building blocks.', icon: '⚡' },
              { title: 'Unified Digital Ecosystem', desc: 'Connect applications, data, and devices across cloud and on-premise seamlessly.', icon: '🔄' },
              { title: 'API-Driven Innovation', desc: 'Enable new business models by exposing capabilities as products through an API marketplace.', icon: '🚀' },
              { title: 'Operational Resilience', desc: 'Ensure high availability and security with enterprise-grade governance and monitoring.', icon: '🛡️' },
              { title: 'Faster Time-to-Market', desc: 'Launch new integrations and digital experiences faster with a platform-led approach.', icon: '⏱️' },
              { title: 'Data-Driven Decisions', desc: 'Unlock real-time data across silos for actionable insights and intelligent operations.', icon: '📊' }
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

        {/* CTA with Navigation */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.2), rgba(196, 0, 96, 0.1))', borderRadius: '30px', border: '1px solid rgba(255, 0, 128, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Build a Composable, Connected Enterprise with MuleSoft
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Engage with our integration transformation specialists to unlock data, accelerate innovation, and deliver seamless digital experiences.
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