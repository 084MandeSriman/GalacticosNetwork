import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Salesforce() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1929 0%, #0d2137 50%, #102a43 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(0, 161, 224, 0.4); } 50% { box-shadow: 0 0 40px rgba(0, 161, 224, 0.8); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatCloud { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(20px); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(0, 161, 224, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(0, 161, 224, 0.6); }
        .salesforce-logo { animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite; }
        .tech-tag { background: linear-gradient(135deg, rgba(0, 161, 224, 0.2), rgba(0, 130, 200, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(0, 161, 224, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(0, 161, 224, 0.3), rgba(0, 130, 200, 0.2)); box-shadow: 0 10px 30px rgba(0, 161, 224, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(0, 161, 224, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #00a1e0; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #00a1e0 0%, #0080c0 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0, 161, 224, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #00a1e0; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(0, 161, 224, 0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 161, 224, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 130, 200, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Cloud Pattern */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1, animation: 'floatCloud 8s ease-in-out infinite' }}>
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path fill="#00a1e0" d="M25,80 Q40,60 60,70 Q80,50 100,70 Q120,60 140,75 Q160,65 175,80 Q185,80 180,90 Q175,100 160,100 L40,100 Q20,100 25,80 Z" />
        </svg>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0, 161, 224, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="sfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00a1e0" />
                  <stop offset="100%" stopColor="#0080c0" />
                </linearGradient>
              </defs>
              <path fill="url(#sfGrad)" d="M50 10 C30 15 15 30 15 50 C15 70 30 85 50 90 C70 85 85 70 85 50 C85 30 70 15 50 10 M50 25 C65 30 75 42 75 55 C75 68 65 80 50 85 C35 80 25 68 25 55 C25 42 35 30 50 25"/>
              <text x="50" y="58" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial">S</text>
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(0, 161, 224, 0.5)', letterSpacing: '-0.02em' }}>
            Salesforce Solutions
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
           Accelerate customer-centric digital transformation with scalable Salesforce platforms, intelligent automation, and connected enterprise ecosystems.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { number: 'Salesforce Consulting & Implementation', label: '', icon: '🚀' },
              { number: 'CRM Modernization Programs', label: '', icon: '⭐' },
              { number: 'Enterprise System Integrations', label: '', icon: '👨‍💻' },
              { number: 'Global Delivery Model', label: '', icon: '💬' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(0, 161, 224, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#00a1e0' }}>{stat.number}</div>
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
            End-to-end Salesforce transformation capabilities
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Intelligent Sales Transformation', icon: '💰', desc: 'Enable data-driven selling with automated pipelines, real-time insights, and scalable revenue operations.', features: ['Lead Management', 'Opportunity Tracking', 'Account Management', 'Sales Forecasting'] },
              { title: 'Connected Customer Service Platforms', icon: '🎧', desc: 'Deliver omnichannel support experiences with AI-powered case management and service automation.', features: ['Case Management', 'Service Console', 'Knowledge Base', 'Live Agent'] },
              { title: 'Experience Cloud & Lightning Modernization', icon: '⚡', desc: 'Build high-performance, role-based digital experiences for employees, partners, and customers.', features: ['Lightning Web Components', 'Lightning Apps', 'Aura Components', 'Lightning Design System'] },
              { title: 'Salesforce Platform Engineering', icon: '🔧', desc: 'Extend Salesforce with scalable, secure, and enterprise-grade custom applications.', features: ['Apex Classes', 'Visualforce Pages', 'Triggers', 'Custom Integrations'] },
              { title: 'Enterprise Integration & Data Synchronization', icon: '🔗', desc: 'Create a unified digital core by connecting Salesforce with SAP, ERP, data platforms, and third-party systems.', features: ['REST/SOAP APIs', 'MuleSoft', 'Third-party Apps', 'Data Migration'] },
              { title: 'AI-Driven Marketing Automation', icon: '📧', desc: 'Deliver personalized customer journeys with real-time segmentation and campaign intelligence.', features: ['Email Studio', 'Journey Builder', 'Audience Builder', 'Analytics'] }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((feature, j) => (
                    <span key={j} style={{ background: 'rgba(0, 161, 224, 0.2)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', color: '#4dc3ff', fontWeight: '500' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(0, 161, 224, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Technologies We Use
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            Enterprise-ready Salesforce ecosystem capabilities
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud', 'Lightning Web Components', 'Apex', 'Visualforce', 'Salesforce DX', 'Copado', 'Gearset', 'MuleSoft', 'Heroku', 'Tableau CRM', 'Einstein AI', 'Salesforce CPQ', 'Field Service Lightning'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact We Deliver
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Industry-Aligned Salesforce Expertise', desc: 'Certified consultants with deep domain and transformation experience.', icon: '🏆' },
              { title: 'Business-Driven CRM Strategy', desc: 'Solutions aligned to your operating model and growth objectives.', icon: '🎯' },
              { title: 'Unified Enterprise Landscape', desc: 'Connected CRM, ERP, data, and digital platforms.', icon: '🔗' },
              { title: 'Continuous Innovation & Optimization', desc: 'Enhancement roadmaps for long-term value realization.', icon: '🛠️' },
              { title: 'User Adoption & Change Enablement', desc: 'Driving measurable productivity and experience improvements.', icon: '📚' },
              { title: 'Outcome-Centric Delivery', desc: 'Programs focused on revenue growth, efficiency, and customer experience.', icon: '📈' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 161, 224, 0.2), rgba(0, 130, 200, 0.1))', borderRadius: '30px', border: '1px solid rgba(0, 161, 224, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
           Reimagine Your Customer Engagement
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Connect with our Salesforce transformation specialists to build a scalable, AI-powered CRM ecosystem.
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