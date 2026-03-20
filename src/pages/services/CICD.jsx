import { useNavigate } from 'react-router-dom';

export default function CICD() {
  const navigate = useNavigate();

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
        @keyframes metricPulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(255,255,255,0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2)); box-shadow: 0 10px 30px rgba(255,255,255,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #fff; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(255,255,255,0.5); box-shadow: 0 15px 40px rgba(255,255,255,0.2); }
        .cta-btn { background: linear-gradient(135deg, #fff 0%, #f0fdf4 100%); color: #14b8a6; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255,255,255,0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #fff; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20, 184, 166, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)', animation: 'float 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 10s ease-in-out infinite 1.5s' }} />
      
      {/* Floating dots */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '50%', background: '#14b8a6', animation: 'metricPulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', background: '#10b981', animation: 'metricPulse 3s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', top: '25%', left: '8%', width: '12px', height: '12px', borderRadius: '50%', background: '#34d399', animation: 'metricPulse 3s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '12%', width: '18px', height: '18px', borderRadius: '50%', background: '#6ee7b7', animation: 'metricPulse 3s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <svg width="130" height="130" viewBox="0 0 200 200" style={{ marginBottom: '24px', animation: 'float 4s ease-in-out infinite, pulse 3s ease-in-out infinite' }}>
            <defs>
              <linearGradient id="cicdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
              </linearGradient>
              <filter id="cicdGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="100" r="25" fill="none" stroke="url(#cicdGrad)" strokeWidth="4" filter="url(#cicdGlow)" />
            <circle cx="100" cy="100" r="25" fill="none" stroke="url(#cicdGrad)" strokeWidth="4" filter="url(#cicdGlow)" />
            <circle cx="150" cy="100" r="25" fill="none" stroke="url(#cicdGrad)" strokeWidth="4" filter="url(#cicdGlow)" />
            <path d="M75 100 L95 100" stroke="url(#cicdGrad)" strokeWidth="3" />
            <path d="M125 100 L145 100" stroke="url(#cicdGrad)" strokeWidth="3" />
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#fff" />
              </marker>
            </defs>
          </svg>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(20, 184, 166, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise DevOps & CI/CD Transformation Platform
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable faster, reliable, and scalable software delivery with an intelligent, cloud‑native CI/CD platform that accelerates innovation, improves release quality, and powers continuous business value.
          </p>
          
          {/* Capability Highlights */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🚀', label: 'Enterprise DevOps Enablement' },
              { icon: '⚡', label: 'High‑Velocity Release Automation' },
              { icon: '🔐', label: 'DevSecOps & Shift‑Left Security' },
              { icon: '☁️', label: 'Cloud‑Native CI/CD Modernization' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our DevOps & CI/CD Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A business‑aligned approach to building a scalable, secure, and high‑velocity software delivery platform.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess delivery maturity, toolchain, and business goals', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define scalable, cloud‑native CI/CD strategy', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Implement automated pipelines and DevSecOps practices', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Establish quality gates, security, and compliance', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Enable continuous delivery with full observability', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Optimize for speed, reliability, and developer productivity', icon: '📊' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps & CI/CD Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            DevOps & CI/CD Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome‑driven capabilities for modern, high‑velocity software delivery.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Enterprise CI/CD Platform Enablement',
                icon: '🚀',
                desc: 'Build standardized, scalable, and cloud‑native delivery pipelines across hybrid and multi‑cloud environments.'
              },
              {
                title: 'DevSecOps & Shift‑Left Quality',
                icon: '🔐',
                desc: 'Embed automated security, compliance, and quality gates into the software delivery lifecycle.'
              },
              {
                title: 'Release Velocity & Deployment Automation',
                icon: '⚡',
                desc: 'Accelerate time‑to‑market with fully automated build, test, and deployment workflows.'
              },
              {
                title: 'Environment & Infrastructure Automation',
                icon: '☁️',
                desc: 'Enable consistent and repeatable environments using Infrastructure as Code and GitOps practices.'
              },
              {
                title: 'Observability & Continuous Feedback',
                icon: '📊',
                desc: 'Gain real‑time insights into pipeline performance, release health, and developer productivity.'
              },
              {
                title: 'AI‑Ready DevOps Foundation',
                icon: '🤖',
                desc: 'Deliver reliable, high‑frequency releases that support modern digital and AI‑driven applications.'
              }
            ].map((capability, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{capability.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{capability.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Ecosystem */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            DevOps & CI/CD Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated, cloud‑native ecosystem enabling scalable and intelligent software delivery.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'Azure DevOps', 
              'ArgoCD', 'Spinnaker', 'Travis CI', 'Bamboo', 'TeamCity', 'Tekton',
              'Flux', 'Flagger', 'Helm', 'Terraform', 'Pulumi', 'Ansible', 'Chef', 'Puppet',
              'SonarQube', 'Snyk', 'Checkmarx', 'Aqua', 'Docker', 'Kubernetes', 'OpenShift'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">{tech}</div>
            ))}
          </div>
        </div>

        {/* Business Impact */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Faster time‑to‑market', desc: 'Reduce release cycles from weeks to hours with automated pipelines.', icon: '⏱️' },
              { title: 'Higher release quality', desc: 'Prevent defects with shift‑left testing and automated quality gates.', icon: '✅' },
              { title: 'Reduced operational risk', desc: 'Ensure consistency and compliance with Infrastructure as Code.', icon: '🛡️' },
              { title: 'Improved developer productivity', desc: 'Enable self‑service and automated environments.', icon: '👩‍💻' },
              { title: 'Optimized cloud spend', desc: 'Right‑size resources and eliminate waste in CI/CD infrastructure.', icon: '💰' },
              { title: 'Future‑ready digital foundation', desc: 'Support modern architectures and AI‑driven applications.', icon: '🚀' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.1))', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Software Delivery with a Modern DevOps Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our DevOps transformation specialists to build a secure, high‑velocity, and scalable CI/CD platform that drives continuous innovation.
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