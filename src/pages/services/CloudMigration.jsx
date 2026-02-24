import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CloudMigration() {
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
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.4); } 50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.8); } }
        @keyframes cloudFloat { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(20px); } }
        @keyframes floatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(245, 158, 11, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(245, 158, 11, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(200, 120, 0, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(245, 158, 11, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(200, 120, 0, 0.2)); box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(245, 158, 11, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #f59e0b; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #f59e0b; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(245, 158, 11, 0.1); transform: translateY(-4px); }
        .process-step { background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(245, 158, 11, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(245, 158, 11, 0.5); box-shadow: 0 15px 40px rgba(245, 158, 11, 0.2); }
      `}</style>
      
      {/* Animated Background - Cloud Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 120, 0, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Cloud Shapes */}
      <svg style={{ position: 'absolute', top: '15%', left: '8%', width: '150px', height: '80px', opacity: 0.15, animation: 'cloudFloat 8s ease-in-out infinite' }} viewBox="0 0 150 80">
        <path fill="#f59e0b" d="M25,60 Q35,40 55,45 Q70,30 90,45 Q110,40 120,60 Q130,60 125,70 Q120,80 100,80 L40,80 Q20,80 25,60 Z" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '20%', right: '10%', width: '120px', height: '60px', opacity: 0.12, animation: 'cloudFloat 10s ease-in-out infinite 2s' }} viewBox="0 0 150 80">
        <path fill="#f59e0b" d="M25,60 Q35,40 55,45 Q70,30 90,45 Q110,40 120,60 Q130,60 125,70 Q120,80 100,80 L40,80 Q20,80 25,60 Z" />
      </svg>
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* Cloud Migration Logo SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="cloudGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path fill="url(#cloudGrad)" filter="url(#cloudGlow)" d="M20,65 Q30,45 50,50 Q65,35 85,50 Q100,45 105,65 Q115,65 110,75 Q105,85 85,85 L30,85 Q15,85 20,65 Z" />
              <path d="M50 30 L50 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M40 42 L50 30 L60 42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(245, 158, 11, 0.5)', letterSpacing: '-0.02em' }}>
            Cloud Migration Services
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Accelerate enterprise cloud transformation with a value-led migration approach—modernizing applications, unifying data platforms, and enabling secure, resilient, and scalable digital operations across hybrid and multi-cloud environments.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Enterprise Cloud Transformation Programs' },
              { icon: '🚀', label: 'Application & Infrastructure Modernization' },
              { icon: '⚡', label: 'Data Center Exit & Platform Consolidation' },
              { icon: '🌍', label: 'Hybrid & Multi-Cloud Enablement' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Migration Process) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Value-led cloud transformation for modern enterprises
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess application & infrastructure landscape', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Design scalable cloud operating model', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Accelerate migration & cloud-native adoption', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Ensure resilience, security & governance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Execute business-aligned release', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Optimize for innovation & cost efficiency', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#f59e0b', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Migration & Modernization Capabilities (was Core Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Cloud Migration & Modernization Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for enterprise cloud transformation
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Cloud-Native Application Modernization', icon: '🏗️', desc: 'Re-architect legacy applications into microservices, containers, and serverless platforms.' },
              { title: 'Enterprise Migration Factory Model', icon: '🏭', desc: 'Accelerate large-scale migration with automated, factory-led delivery and repeatable patterns.' },
              { title: 'Data & Platform Migration', icon: '📊', desc: 'Seamlessly migrate databases, data warehouses, and analytics platforms with zero data loss.' },
              { title: 'DevSecOps & Automation Enablement', icon: '⚙️', desc: 'Embed security and automation into the migration lifecycle for faster, safer releases.' },
              { title: 'Resilient & Secure Cloud Foundations', icon: '🛡️', desc: 'Build landing zones with zero-trust security, observability, and high-availability architectures.' },
              { title: 'FinOps & Cloud Cost Optimization', icon: '💰', desc: 'Maximize business value with intelligent cloud financial management and continuous optimization.' }
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

        {/* Cloud Platform Capabilities (was Technologies) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(245, 158, 11, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Cloud Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            End-to-end cloud platform and migration ecosystem expertise
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud', 'IBM Cloud', 'Alibaba Cloud', 'VMware', 'OpenStack', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation', 'Ansible', 'Jenkins', 'Azure DevOps', 'GitHub Actions'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (was Why Choose Us) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accelerated Data Center Exit', desc: 'Rapid migration from legacy data centers with minimal business disruption.', icon: '⏱️' },
              { title: 'Reduced Transformation Cost', desc: 'Optimize migration spend and avoid unnecessary rework with proven factory models.', icon: '💰' },
              { title: 'Resilient Digital Operations', desc: 'Ensure high availability and disaster recovery with cloud‑native resilience.', icon: '🛡️' },
              { title: 'Cloud-Native Business Agility', desc: 'Enable faster innovation and time‑to‑market with modern application architectures.', icon: '⚡' },
              { title: 'Optimized Cloud Spend with FinOps', desc: 'Gain financial transparency and continuous cost optimization across your cloud footprint.', icon: '📊' },
              { title: 'Secure & Compliance-Ready Platforms', desc: 'Implement zero‑trust security and meet regulatory requirements from day one.', icon: '🔒' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.1))', borderRadius: '30px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Modernize Your Enterprise with Cloud Transformation
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Engage with our cloud transformation specialists to migrate, modernize, and build a resilient, future-ready digital platform.
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