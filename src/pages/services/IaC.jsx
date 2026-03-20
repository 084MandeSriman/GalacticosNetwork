import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function IaC() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.4); } 50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); } }
        @keyframes infraPulse { 0%, 100% { opacity: 0.8; transform: rotate(0deg); } 50% { opacity: 1; transform: rotate(5deg); } }
        @keyframes serverGlow { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.3); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(20, 184, 166, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(20, 184, 166, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(20, 184, 166, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(16, 185, 129, 0.2)); box-shadow: 0 10px 30px rgba(20, 184, 166, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #2dd4bf; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(20, 184, 166, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(20, 184, 166, 0.5); box-shadow: 0 15px 40px rgba(20, 184, 166, 0.2); }
        .cta-btn { background: linear-gradient(135deg, #2dd4bf 0%, #10b981 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(20, 184, 166, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #2dd4bf; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(20, 184, 166, 0.1); transform: translateY(-4px); }
        .server-icon { animation: serverGlow 2s ease-in-out infinite; }
      `}</style>
      
      {/* Animated Background Elements - IaC/Infrastructure Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20, 184, 166, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Infrastructure-colored dots */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '3px', background: '#14b8a6', animation: 'infraPulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '3px', background: '#10b981', animation: 'infraPulse 3s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', top: '25%', left: '8%', width: '12px', height: '12px', borderRadius: '3px', background: '#2dd4bf', animation: 'infraPulse 3s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '12%', width: '18px', height: '18px', borderRadius: '3px', background: '#34d399', animation: 'infraPulse 3s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* Infrastructure/Server SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="iacGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
                <filter id="iacGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Server rack icon */}
              <rect x="30" y="40" width="140" height="120" rx="10" fill="none" stroke="url(#iacGrad)" strokeWidth="4" filter="url(#iacGlow)" />
              {/* Server units */}
              <rect x="40" y="50" width="120" height="25" rx="4" fill="rgba(45, 212, 191, 0.2)" stroke="url(#iacGrad)" strokeWidth="2" />
              <rect x="40" y="80" width="120" height="25" rx="4" fill="rgba(45, 212, 191, 0.2)" stroke="url(#iacGrad)" strokeWidth="2" />
              <rect x="40" y="110" width="120" height="25" rx="4" fill="rgba(45, 212, 191, 0.2)" stroke="url(#iacGrad)" strokeWidth="2" />
              {/* LED indicators */}
              <circle cx="50" cy="62" r="4" fill="#10b981" className="server-icon" />
              <circle cx="50" cy="92" r="4" fill="#14b8a6" className="server-icon" />
              <circle cx="50" cy="122" r="4" fill="#2dd4bf" className="server-icon" />
              {/* Code brackets representing IaC */}
              <path d="M165 75 L175 100 L165 125" stroke="url(#iacGrad)" strokeWidth="3" fill="none" />
              <text x="178" y="105" fill="url(#iacGrad)" fontSize="24" fontWeight="bold">{' >'}_</text>
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(20, 184, 166, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Infrastructure Automation & IaC Platform
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Establish a scalable, secure, and cloud-native infrastructure foundation using Infrastructure as Code to accelerate digital delivery, improve operational resilience, and enable consistent multi-cloud environments.
          </p>
          
          {/* Capability Highlights */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏗️', label: 'Cloud‑Native Infrastructure Foundation' },
              { icon: '🚀', label: 'Platform Engineering Enablement' },
              { icon: '📜', label: 'Policy‑Driven Governance' },
              { icon: '⚙️', label: 'Automated Environment Lifecycle' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(20, 184, 166, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (replaces Infrastructure Solutions) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Infrastructure Automation Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value‑led approach to building a scalable, automated, and governed infrastructure foundation.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess infrastructure & operating model', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define scalable IaC platform strategy', icon: '📐' },
              { step: '03', title: 'Standardize', desc: 'Create reusable infrastructure patterns', icon: '🔄' },
              { step: '04', title: 'Automate', desc: 'Enable CI/CD‑driven provisioning', icon: '⚙️' },
              { step: '05', title: 'Govern', desc: 'Implement policy‑as‑code & compliance', icon: '📜' },
              { step: '06', title: 'Optimize', desc: 'Continuous performance & cost optimization', icon: '📊' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#2dd4bf', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Automation Transformation Capabilities (replaces IaC Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Infrastructure Automation Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome‑driven capabilities for modern, automated infrastructure platforms.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Enterprise IaC Platform Enablement',
                icon: '🏗️',
                desc: 'Standardized, reusable, and scalable infrastructure across hybrid and multi‑cloud environments.'
              },
              {
                title: 'Environment Lifecycle Automation',
                icon: '⚙️',
                desc: 'On‑demand, consistent, and version‑controlled infrastructure provisioning.'
              },
              {
                title: 'Policy‑as‑Code & Governance',
                icon: '📜',
                desc: 'Built‑in compliance, security, and audit readiness with automated policy enforcement.'
              },
              {
                title: 'DevOps & CI/CD Integration',
                icon: '🔄',
                desc: 'Automated infrastructure delivery through pipeline‑driven workflows.'
              },
              {
                title: 'Observability‑Driven Operations',
                icon: '📊',
                desc: 'Real‑time visibility into infrastructure performance, reliability, and cost.'
              },
              {
                title: 'Cost & Resource Optimization',
                icon: '💰',
                desc: 'Intelligent capacity management, rightsizing, and cloud financial control.'
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

        {/* Infrastructure Automation Platform Ecosystem (replaces IaC Tools & Technologies) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(20, 184, 166, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Infrastructure Automation Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem enabling scalable and intelligent infrastructure automation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Terraform', 'Terragrunt', 'Pulumi', 'AWS CloudFormation', 'AWS CDK',
              'Azure Bicep', 'ARM Templates', 'Ansible', 'Chef', 'Puppet',
              'SaltStack', 'Kubernetes', 'Helm', 'Kustomize', 'K9s',
              'Docker', 'Vagrant', 'Packer', 'Vault', 'Consul',
              'GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'Flux'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">{tech}</div>
            ))}
          </div>
        </div>

        {/* Remove Why Choose Us section */}
        {/* Remove FAQ section */}

        {/* Business Impact (new section) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Faster environment provisioning', desc: 'Deliver infrastructure in minutes instead of weeks.', icon: '⏱️' },
              { title: 'Improved operational consistency', desc: 'Eliminate configuration drift with version‑controlled infrastructure.', icon: '✅' },
              { title: 'Reduced cloud spend', desc: 'Optimize utilization through automated scaling and rightsizing.', icon: '💰' },
              { title: 'Stronger security and compliance', desc: 'Embed governance and policy enforcement by design.', icon: '🔒' },
              { title: 'Higher developer productivity', desc: 'Enable self‑service infrastructure and platform workflows.', icon: '🚀' },
              { title: 'Future‑ready digital foundation', desc: 'Support modern applications, data platforms, and AI workloads.', icon: '🤖' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.1))', borderRadius: '30px', border: '1px solid rgba(20, 184, 166, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Infrastructure with an Intelligent IaC Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our platform engineering specialists to build a secure, scalable, and fully automated infrastructure foundation that powers continuous innovation.
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