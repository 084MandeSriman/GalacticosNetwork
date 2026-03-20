import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UXStrategy() {
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
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(168, 85, 247, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(236, 72, 153, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(168, 85, 247, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2)); box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #f472b6; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(168, 85, 247, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 15px 40px rgba(168, 85, 247, 0.2); }
        .feature-tag { background: rgba(168, 85, 247, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 12px; color: #e9d5ff; font-weight: 500; }
        .cta-btn { background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #f472b6; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(236, 72, 153, 0.1); transform: translateY(-4px); }
        .case-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 35px; border: 1px solid rgba(168, 85, 247, 0.15); transition: all 0.4s ease; }
        .case-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.3); border-color: rgba(236, 72, 153, 0.3); }
        .faq-item { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { background: rgba(255,255,255,0.1); }
        .faq-item.active { background: rgba(255,255,255,0.1); border-color: rgba(236, 72, 153, 0.5); }
      `}</style>
      
      {/* Animated Background Elements - UX/Design Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Design-colored dots - different pattern */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '50%', background: '#a855f7', animation: 'designPulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', background: '#ec4899', animation: 'designPulse 3s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', top: '25%', left: '8%', width: '12px', height: '12px', borderRadius: '50%', background: '#f472b6', animation: 'designPulse 3s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '12%', width: '18px', height: '18px', borderRadius: '50%', background: '#c084fc', animation: 'designPulse 3s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* UX/Design SVG - Pen tool icon - unique to UX */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="uxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                <filter id="uxGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Design pen tool - unique to UX Strategy */}
              <rect x="70" y="30" width="60" height="140" rx="8" fill="none" stroke="url(#uxGrad)" strokeWidth="4" filter="url(#uxGlow)" />
              {/* Pen tip */}
              <polygon points="100,170 80,140 120,140" fill="url(#uxGrad)" />
              {/* Pen clip */}
              <rect x="90" y="50" width="20" height="40" rx="2" fill="url(#uxGrad)" />
              {/* Design elements around */}
              <circle cx="50" cy="60" r="15" fill="none" stroke="url(#uxGrad)" strokeWidth="2" />
              <circle cx="150" cy="80" r="10" fill="none" stroke="url(#uxGrad)" strokeWidth="2" />
              <circle cx="160" cy="140" r="12" fill="none" stroke="url(#uxGrad)" strokeWidth="2" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(168, 85, 247, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Experience Transformation & UX Strategy
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Reimagine customer, partner, and employee experiences through a data-driven UX strategy that aligns business outcomes, digital platforms, and human-centered design to drive engagement, conversion, and long-term loyalty.
          </p>
          
          {/* No stats - removed */}
        </div>

        {/* Our Experience Transformation Methodology */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Experience Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value-led approach to building human-centered digital experiences that drive business outcomes
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess customer journeys, business goals, and experience maturity', icon: '🔍' },
              { step: '02', title: 'Define', desc: 'Identify value streams and experience transformation priorities', icon: '🎯' },
              { step: '03', title: 'Architect', desc: 'Design scalable experience platforms and design systems', icon: '🏗️' },
              { step: '04', title: 'Align', desc: 'Integrate product, engineering, and business workflows', icon: '🔄' },
              { step: '05', title: 'Enable', desc: 'Establish continuous research, testing, and optimization', icon: '✅' },
              { step: '06', title: 'Measure', desc: 'Track experience KPIs tied to business outcomes', icon: '📊' }
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

        {/* Experience Transformation Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Experience Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for enterprise-scale experience innovation
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { 
                title: 'Experience-Led Product Strategy', 
                icon: '🎯', 
                desc: 'Define product vision and roadmaps rooted in user research and business value, ensuring every feature drives engagement and retention.'
              },
              { 
                title: 'Design Systems & Experience Platforms', 
                icon: '🏗️', 
                desc: 'Build scalable, consistent design systems that accelerate development and maintain brand coherence across all touchpoints.'
              },
              { 
                title: 'Omnichannel Journey Transformation', 
                icon: '🔄', 
                desc: 'Map and reimagine customer journeys across web, mobile, and in-person interactions to reduce friction and increase satisfaction.'
              },
              { 
                title: 'Data-Driven Experience Optimization', 
                icon: '📈', 
                desc: 'Leverage analytics, A/B testing, and user feedback to continuously improve conversion, retention, and task success.'
              },
              { 
                title: 'Customer & Employee Experience (CX & EX)', 
                icon: '👥', 
                desc: 'Unify external and internal experience strategies to drive brand loyalty and workforce productivity.'
              },
              { 
                title: 'AI-Enabled Personalization & Insights', 
                icon: '🤖', 
                desc: 'Deliver tailored experiences at scale using AI-driven segmentation, recommendations, and predictive analytics.'
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

        {/* Business Impact */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Higher customer engagement and retention', desc: 'Create experiences that keep users coming back, reducing churn and increasing lifetime value.', icon: '❤️' },
              { title: 'Improved digital conversion rates', desc: 'Streamline journeys to boost signups, purchases, and key conversion metrics.', icon: '📈' },
              { title: 'Faster product adoption', desc: 'Design intuitive interfaces that minimize learning curves and accelerate time-to-value.', icon: '⚡' },
              { title: 'Reduced experience-related support costs', desc: 'Eliminate confusion with user-centered design, cutting help requests and support tickets.', icon: '💰' },
              { title: 'Stronger brand differentiation', desc: 'Stand out in crowded markets with memorable, cohesive brand experiences.', icon: '✨' },
              { title: 'Data-driven continuous innovation', desc: 'Embed research and analytics into the product lifecycle for ongoing improvement.', icon: '📊' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))', borderRadius: '30px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Digital Experiences with an Experience-Led Operating Model
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our experience transformation specialists to create human-centered, high-impact digital platforms.
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