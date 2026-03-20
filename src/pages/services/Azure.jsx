import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Azure() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0c1e3d 0%, #0d2137 50%, #103156 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(0, 120, 212, 0.4); } 50% { box-shadow: 0 0 40px rgba(0, 120, 212, 0.8); } }
        @keyframes azureFloat { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(15px); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(0, 120, 212, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(0, 120, 212, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(0, 120, 212, 0.2), rgba(0, 95, 175, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(0, 120, 212, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(0, 120, 212, 0.3), rgba(0, 95, 175, 0.2)); box-shadow: 0 10px 30px rgba(0, 120, 212, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(0, 120, 212, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #0078d4; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #0078d4 0%, #005a9e 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0, 120, 212, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #0078d4; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(0, 120, 212, 0.1); transform: translateY(-4px); }
        .process-step { background: linear-gradient(135deg, rgba(0, 120, 212, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(0, 120, 212, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(0, 120, 212, 0.5); box-shadow: 0 15px 40px rgba(0, 120, 212, 0.2); }
      `}</style>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 120, 212, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 95, 175, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Azure Wave Patterns */}
      <svg style={{ position: 'absolute', top: '15%', left: '5%', width: '200px', height: '80px', opacity: 0.1, animation: 'azureFloat 6s ease-in-out infinite' }} viewBox="0 0 200 80">
        <path fill="#0078d4" d="M0,40 Q50,20 100,40 T200,40 L200,80 L0,80 Z" />
        <path fill="#0078d4" d="M0,55 Q50,35 100,55 T200,55 L200,80 L0,80 Z" opacity="0.5" />
      </svg>
      
      {/* Grid Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0, 120, 212, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="azureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0078d4" />
                  <stop offset="100%" stopColor="#005a9e" />
                </linearGradient>
                <filter id="azureGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <ellipse cx="50" cy="55" rx="42" ry="22" fill="none" stroke="url(#azureGrad)" strokeWidth="5" filter="url(#azureGlow)" />
              <ellipse cx="50" cy="50" rx="32" ry="16" fill="none" stroke="url(#azureGrad)" strokeWidth="4" />
              <ellipse cx="50" cy="45" rx="22" ry="11" fill="none" stroke="url(#azureGrad)" strokeWidth="3" />
              <ellipse cx="50" cy="40" rx="12" ry="6" fill="url(#azureGrad)" opacity="0.8" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(0, 120, 212, 0.5)', letterSpacing: '-0.02em' }}>
            Microsoft Azure Solutions
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable an intelligent, cloud-powered enterprise with Microsoft Azure—modernizing applications, unifying data, and delivering secure, scalable digital platforms across hybrid and multi-cloud environments.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Cloud Transformation Programs' },
              { icon: '🚀', label: 'Application Modernization at Scale' },
              { icon: '⚡', label: 'Cloud-Native & AI Innovation' },
              { icon: '🌍', label: 'Hybrid & Multi-Cloud Enablement' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(0, 120, 212, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Azure Solution Areas) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Value-led Azure adoption for modern digital enterprises
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess application landscape & define cloud value roadmap', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Design secure, scalable hybrid cloud operating model', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Accelerate migration & cloud-native build', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Ensure resilience, performance & governance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Execute business-aligned cloud release', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Continuously optimize for innovation & cost efficiency', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#0078d4', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Azure Transformation Capabilities (was Core Azure Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Azure Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven cloud capabilities for modern enterprises
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Cloud-Native Application Modernization', icon: '🏗️', desc: 'Re-architect legacy applications into microservices, containers, and serverless platforms on Azure.' },
              { title: 'Enterprise Cloud Migration & Platform Build', icon: '🚚', desc: 'Accelerate secure, large-scale migration with automated, factory-led delivery models.' },
              { title: 'Data & AI on Azure', icon: '📊', desc: 'Build unified data platforms and AI-powered insights for intelligent decision-making.' },
              { title: 'DevSecOps & Platform Engineering', icon: '⚙️', desc: 'Enable automated, secure, and self-service cloud platforms for faster releases.' },
              { title: 'Resilient & Secure Cloud Foundations', icon: '🛡️', desc: 'Implement zero-trust security, observability, and high-availability architectures.' },
              { title: 'FinOps & Cloud Cost Optimization', icon: '💰', desc: 'Maximize business value with intelligent cloud financial management.' }
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

        {/* Azure Platform Capabilities (was Azure Services We Master) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(0, 120, 212, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Azure Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            End-to-end cloud platform expertise
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
            {['Virtual Machines', 'Azure Kubernetes', 'Azure Functions', 'App Service', 'Azure Storage', 'Azure SQL', 'Cosmos DB', 'Azure AD', 'Azure DevOps', 'Azure Pipelines', 'Logic Apps', 'Event Hub', 'Service Bus', 'Azure Synapse', 'Azure ML', 'Cognitive Services', 'Azure Firewall', 'VPN Gateway', 'Azure CDN', 'Azure Backup', 'Azure Site Recovery', 'Azure Monitor'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (was Why Choose Azure?) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accelerated Time-to-Cloud', desc: 'Rapid migration with minimal business disruption', icon: '⏱️' },
              { title: 'Cloud-Native Agility', desc: 'Faster innovation with automated, scalable platforms', icon: '⚡' },
              { title: 'Resilient Digital Operations', desc: 'High availability and disaster-ready architectures', icon: '🛡️' },
              { title: 'Data-Driven Enterprise', desc: 'Real-time insights across business functions', icon: '📊' },
              { title: 'Optimized Cloud Spend', desc: 'Financial transparency and cost control with FinOps', icon: '💰' },
              { title: 'Secure by Design', desc: 'Zero-trust and compliance-ready cloud environments', icon: '🔒' }
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

        {/* Interactive CTA */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.2), rgba(0, 90, 158, 0.1))', borderRadius: '30px', border: '1px solid rgba(0, 120, 212, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Modernize Your Enterprise with Microsoft Azure
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Engage with our cloud transformation specialists to build a resilient, intelligent, and future-ready digital platform.
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