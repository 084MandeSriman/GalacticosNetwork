import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DesignSystems() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); } 50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.8); } }
        @keyframes designPulse { 0%, 100% { opacity: 0.8; transform: rotate(0deg); } 50% { opacity: 1; transform: rotate(3deg); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(236, 72, 153, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(236, 72, 153, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(236, 72, 153, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2)); box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #f472b6; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(168, 85, 247, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 15px 40px rgba(168, 85, 247, 0.2); }
        .cta-btn { background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #f472b6; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(236, 72, 153, 0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background Elements - Design System Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Design System Grid Pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      {/* Geometric shapes for design system theme */}
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: '30px', height: '30px', border: '3px solid rgba(255,255,255,0.3)', borderRadius: '4px', animation: 'designPulse 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '25%', right: '15%', width: '20px', height: '20px', background: 'rgba(236, 72, 153, 0.3)', borderRadius: '50%', animation: 'designPulse 4s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '26px solid rgba(168, 85, 247, 0.3)', animation: 'designPulse 4s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '35%', right: '20%', width: '25px', height: '25px', border: '3px solid rgba(255,255,255,0.2)', transform: 'rotate(45deg)', animation: 'designPulse 4s ease-in-out infinite 1.5s' }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* Design System SVG - Component/Library icon */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="dsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                <filter id="dsGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Grid/Component squares - representing design system components */}
              <rect x="40" y="40" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="80" y="40" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="120" y="40" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="40" y="80" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="80" y="80" width="40" height="40" rx="6" fill="url(#dsGrad)" stroke="url(#dsGrad)" strokeWidth="2" filter="url(#dsGlow)" />
              <rect x="120" y="80" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="40" y="120" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="80" y="120" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
              <rect x="120" y="120" width="40" height="40" rx="6" fill="none" stroke="url(#dsGrad)" strokeWidth="3" filter="url(#dsGlow)" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(168, 85, 247, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Design System & Experience Platform Transformation
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Establish a scalable, governed design system that accelerates digital delivery, ensures brand and experience consistency across products, and enables seamless design-to-code execution at enterprise scale.
          </p>
        </div>

        {/* Experience Platform Standardization Methodology */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Experience Platform Standardization Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value‑led approach to building a unified, scalable design system for enterprise‑wide experience consistency.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess current UI landscape, duplication, and delivery inefficiencies', icon: '🔍' },
              { step: '02', title: 'Define', desc: 'Identify value streams, governance model, and adoption strategy', icon: '🎯' },
              { step: '03', title: 'Architect', desc: 'Design scalable token architecture and component foundations', icon: '🏗️' },
              { step: '04', title: 'Standardize', desc: 'Create reusable cross‑product experience patterns', icon: '🔄' },
              { step: '05', title: 'Enable', desc: 'Integrate design, engineering, and product workflows', icon: '⚙️' },
              { step: '06', title: 'Scale', desc: 'Drive adoption, contribution model, and continuous evolution', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#f472b6', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Platform Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Experience Platform Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome‑driven capabilities for scalable, high‑velocity experience delivery
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Design System Platform Enablement',
                icon: '🏗️',
                desc: 'A unified foundation for consistent, scalable digital experiences across all products and channels.'
              },
              {
                title: 'Design‑to‑Code Acceleration',
                icon: '⚡',
                desc: 'Transform design assets into production‑ready components with automated workflows and tooling.'
              },
              {
                title: 'Multi‑Product Experience Standardization',
                icon: '🔄',
                desc: 'One system powering multiple applications and platforms, ensuring brand and interaction consistency.'
              },
              {
                title: 'Design Token Governance & Automation',
                icon: '🔧',
                desc: 'Centralized control of visual and interaction patterns with token‑driven theming and versioning.'
              },
              {
                title: 'Contribution & Operating Model',
                icon: '👥',
                desc: 'Enable product teams to scale the system collaboratively with clear governance and contribution paths.'
              },
              {
                title: 'Experience Performance & Accessibility by Default',
                icon: '✅',
                desc: 'Built‑in usability, responsiveness, and WCAG compliance across all components and patterns.'
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

        {/* Experience Platform Ecosystem (renamed from Tools & Technologies) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(168, 85, 247, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>Experience Platform Ecosystem</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated ecosystem enabling scalable, high‑velocity experience delivery.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Figma', 'Storybook', 'Sketch', 'Adobe XD', 'Framer',
              'Tokens Studio', 'Style Dictionary', 'Design Tokens', 'Bit',
              'React', 'Vue', 'Angular', 'Web Components', 'Stencil',
              'TypeScript', 'CSS Variables', 'Sass', 'Tailwind',
              'Chromatic', 'Lerna', 'Yarn Workspaces', 'npm',
              'ZeroHeight', 'Supernova', 'Specify', 'Amplitude'
            ].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
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
              { title: 'Faster product delivery', desc: 'Reduce design‑to‑development cycle time across teams with reusable assets and automated workflows.', icon: '⏱️' },
              { title: 'Consistent cross‑channel experiences', desc: 'One unified experience across web, mobile, and platforms ensures brand integrity everywhere.', icon: '🔄' },
              { title: 'Higher developer productivity', desc: 'Reusable components and self‑service consumption model speed up engineering.', icon: '👩‍💻' },
              { title: 'Reduced design and engineering duplication', desc: 'Eliminate fragmented UI implementations and reduce technical debt.', icon: '💰' },
              { title: 'Stronger brand governance at scale', desc: 'Maintain visual and interaction consistency globally with governed patterns.', icon: '🏆' },
              { title: 'Future‑ready experience foundation', desc: 'Support AI‑driven and real‑time digital products with a flexible, scalable platform.', icon: '🤖' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))', borderRadius: '30px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Digital Experience with a Scalable Design System Platform
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our experience platform specialists to establish a governed, enterprise‑grade design system that accelerates innovation and ensures consistency at scale.
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