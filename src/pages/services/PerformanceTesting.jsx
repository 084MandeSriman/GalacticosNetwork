import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PerformanceTesting() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes speed { 0% { transform: translateX(0); } 50% { transform: translateX(20px); } 100% { transform: translateX(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); } 50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); } }
        @keyframes metricPulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(139, 92, 246, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(139, 92, 246, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(139, 92, 246, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.2)); box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(139, 92, 246, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #a78bfa; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(139, 92, 246, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(139, 92, 246, 0.5); box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2); }
        .feature-tag { background: rgba(139, 92, 246, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 12px; color: #c4b5fd; font-weight: 500; }
        .cta-btn { background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #a78bfa; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(139, 92, 246, 0.1); transform: translateY(-4px); }
        .case-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 35px; border: 1px solid rgba(139, 92, 246, 0.15); transition: all 0.4s ease; }
        .case-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.3); border-color: rgba(139, 92, 246, 0.3); }
        .faq-item { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { background: rgba(255,255,255,0.1); }
        .faq-item.active { background: rgba(255,255,255,0.1); border-color: rgba(139, 92, 246, 0.5); }
      `}</style>
      
      {/* Animated Background Elements - Performance Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Performance-colored metric dots */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '50%', background: '#06b6d4', animation: 'metricPulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', background: '#8b5cf6', animation: 'metricPulse 3s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', top: '25%', left: '8%', width: '12px', height: '12px', borderRadius: '50%', background: '#a78bfa', animation: 'metricPulse 3s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '12%', width: '18px', height: '18px', borderRadius: '50%', background: '#22d3ee', animation: 'metricPulse 3s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* Performance/Speed SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="perfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
                <filter id="perfGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Speed/Performance meter - gauge style */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#perfGrad)" strokeWidth="4" filter="url(#perfGlow)" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="url(#perfGrad)" strokeWidth="2" opacity="0.6" />
              {/* Speed lines */}
              <path d="M40 100 L70 100" stroke="url(#perfGrad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M130 100 L160 100" stroke="url(#perfGrad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 40 L100 70" stroke="url(#perfGrad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 130 L100 160" stroke="url(#perfGrad)" strokeWidth="4" strokeLinecap="round" />
              {/* Gauge needle - pointing to high performance */}
              <path d="M100 100 L100 50" stroke="#fff" strokeWidth="4" strokeLinecap="round" transform="rotate(-45 100 100)" />
              <circle cx="100" cy="100" r="10" fill="#fff" />
              {/* Performance arc */}
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#perfGrad)" strokeWidth="2" strokeDasharray="10 5" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(139, 92, 246, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Performance Engineering
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Drive enterprise-wide performance engineering transformation with intelligent, scalable, and continuous validation—ensuring digital platforms deliver speed, resilience, and seamless user experience at any scale.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '⚡', label: 'Enterprise Performance Engineering Transformation' },
              { icon: '🚀', label: 'High-Scale Digital Release Readiness' },
              { icon: '📈', label: 'Scalable Cloud & Microservices Performance' },
              { icon: '🔄', label: 'Continuous Performance in DevSecOps' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Performance Testing Solutions) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value-led approach to performance engineering aligned with business SLAs and digital growth.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess performance maturity & business SLAs', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define enterprise performance strategy', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Enable continuous performance testing', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Establish performance benchmarks & governance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Integrate with CI/CD for release readiness', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Optimize with AI-driven performance insights', icon: '📊' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#a78bfa', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Engineering & Optimization Capabilities (was Performance Testing Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Performance Engineering & Optimization Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities to deliver resilient, high-speed, and scalable digital platforms.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Digital Experience Performance Engineering',
                icon: '✨',
                desc: 'Deliver consistent, high-speed user experiences through intelligent load modeling and real-time performance validation.'
              },
              {
                title: 'Cloud & Microservices Performance Validation',
                icon: '☁️',
                desc: 'Ensure resilient, auto-scalable architectures with end-to-end distributed performance testing.'
              },
              {
                title: 'Continuous Performance in DevSecOps',
                icon: '🔄',
                desc: 'Embed performance gates into CI/CD pipelines to prevent regressions and enable faster releases.'
              },
              {
                title: 'Enterprise Scalability & Capacity Engineering',
                icon: '📈',
                desc: 'Forecast growth, validate peak readiness, and right-size infrastructure for cost-efficient scale.'
              },
              {
                title: 'Observability-Driven Performance Insights',
                icon: '📊',
                desc: 'Correlate performance data across application, network, and infrastructure layers for rapid bottleneck resolution.'
              },
              {
                title: 'Performance Optimization & Tuning',
                icon: '🎯',
                desc: 'Improve response time, throughput, and resource efficiency through data-driven optimization.'
              }
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

        {/* Remove Success Stories section */}

        {/* Performance Engineering Platform Capabilities (was Performance Testing Tools) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(139, 92, 246, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Performance Engineering Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem enabling continuous, AI-powered performance engineering.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Apache JMeter', 'Gatling', 'k6', 'Locust', 'Blazemeter', 'LoadRunner', 
              'NeoLoad', 'WebLOAD', 'AppDynamics', 'New Relic', 'Datadog', 'Grafana',
              'Prometheus', 'InfluxDB', 'Visual Studio Load Test', 'Azure Load Testing',
              'AWS CloudWatch', 'Google Cloud Monitoring', 'Dynatrace', 'Splunk', 'Python', 'JavaScript'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Remove Why Choose Us section */}

        {/* Business Impact (new section) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accelerated digital release velocity', desc: 'Prevent performance bottlenecks early with continuous validation.', icon: '⏱️' },
              { title: 'Enhanced customer experience at scale', desc: 'Deliver sub-second response times across channels.', icon: '✨' },
              { title: 'Optimized cloud and infrastructure cost', desc: 'Right-size infrastructure using real performance data.', icon: '💰' },
              { title: 'Peak-load and high-growth readiness', desc: 'Confidently handle peak traffic and business growth.', icon: '📈' },
              { title: 'Reduced production performance risk', desc: 'Eliminate performance failures before go-live.', icon: '🛡️' },
              { title: 'Real-time, data-driven release decisions', desc: 'Make release decisions with data-driven insights.', icon: '📊' }
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

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.1))', borderRadius: '30px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Performance Engineering for High-Scale Digital Platforms
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our performance engineering specialists to build resilient, high-speed digital platforms ready for continuous growth.
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