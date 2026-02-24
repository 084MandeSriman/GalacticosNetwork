import { useNavigate } from "react-router-dom";

export default function ServiceNow() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #1e3a5f 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(0, 206, 201, 0.4); } 50% { box-shadow: 0 0 40px rgba(0, 206, 201, 0.8); } }
        @keyframes flowLeft { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-20px); } }
        @keyframes flowRight { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(20px); } }
        @keyframes rotateGear { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(0, 206, 201, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(0, 206, 201, 0.6); }
        .servicenow-logo { animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite; }
        .tech-tag { background: linear-gradient(135deg, rgba(0, 206, 201, 0.2), rgba(0, 180, 175, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(0, 206, 201, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(0, 206, 201, 0.3), rgba(0, 180, 175, 0.2)); box-shadow: 0 10px 30px rgba(0, 206, 201, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(0, 206, 201, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #00cec9; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #00cec9 0%, #00a8a3 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0, 206, 201, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #00cec9; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(0, 206, 201, 0.1); transform: translateY(-4px); }
        .process-step { background: linear-gradient(135deg, rgba(0, 206, 201, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(0, 206, 201, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(0, 206, 201, 0.5); box-shadow: 0 15px 40px rgba(0, 206, 201, 0.2); }
      `}</style>
      
      {/* Animated Background - Flow/Wave Pattern */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 206, 201, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 180, 175, 0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Flow Lines - Unique to ServiceNow */}
      <svg style={{ position: 'absolute', top: '20%', left: '5%', width: '150px', height: '150px', opacity: 0.15, animation: 'flowLeft 6s ease-in-out infinite' }} viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" stroke="#00cec9" strokeWidth="2" fill="none" />
        <path d="M10,70 Q30,40 50,70 T90,70" stroke="#00cec9" strokeWidth="2" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '25%', right: '8%', width: '180px', height: '180px', opacity: 0.12, animation: 'flowRight 7s ease-in-out infinite 1s' }} viewBox="0 0 100 100">
        <path d="M10,30 Q30,60 50,30 T90,30" stroke="#00cec9" strokeWidth="2" fill="none" />
        <path d="M10,50 Q30,80 50,50 T90,50" stroke="#00cec9" strokeWidth="2" fill="none" />
      </svg>
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0, 206, 201, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* ServiceNow Logo SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="snGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00cec9" />
                  <stop offset="100%" stopColor="#00a8a3" />
                </linearGradient>
                <filter id="snGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect x="15" y="15" width="70" height="70" rx="12" fill="url(#snGrad)" filter="url(#snGlow)" />
              <rect x="25" y="30" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="42" y="30" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="59" y="30" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="25" y="48" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="42" y="48" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="59" y="48" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="25" y="66" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="42" y="66" width="15" height="15" rx="3" fill="white" opacity="0.9" />
              <rect x="59" y="66" width="15" height="15" rx="3" fill="white" opacity="0.9" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(0, 206, 201, 0.5)', letterSpacing: '-0.02em' }}>
            ServiceNow Solutions
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Reimagine enterprise workflows with a unified ServiceNow platform that connects people, processes, and systems for intelligent operations at scale.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏢', label: 'Enterprise Workflow Transformation Programs' },
              { icon: '⚙️', label: 'IT & Business Process Modernization' },
              { icon: '⚡', label: 'Automation at Scale with Now Platform' },
              { icon: '🌍', label: 'Global Delivery & Managed Services' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(0, 206, 201, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology (was Implementation Methodology) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Proven approach for successful ServiceNow deployments
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess workflows, service maturity, and value transformation roadmap', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Design a scalable, experience-led operating model', icon: '📐' },
              { step: '03', title: 'Digitize', desc: 'Accelerate platform configuration using industry-aligned solutions', icon: '⚙️' },
              { step: '04', title: 'Validate', desc: 'Ensure performance, governance, and enterprise readiness', icon: '✅' },
              { step: '05', title: 'Launch', desc: 'Execute seamless release with organizational adoption', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Continuously optimize for innovation and business value', icon: '📈' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#00cec9', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ServiceNow Transformation Capabilities (was Core Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            ServiceNow Transformation Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            End-to-end enterprise service management and workflow modernization
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Autonomous IT Operations', icon: '🎯', desc: 'Enable predictive, AI-driven IT service and operations management with end-to-end visibility.' },
              { title: 'Connected Employee Experiences', icon: '👥', desc: 'Deliver unified, consumer-grade employee services across HR, IT, and workplace operations.' },
              { title: 'Enterprise Workflow Automation', icon: '🔄', desc: 'Digitize and orchestrate cross-functional processes for speed, agility, and governance.' },
              { title: 'Integrated Risk & Security Operations', icon: '🛡️', desc: 'Unify security, risk, and compliance workflows for proactive enterprise resilience.' },
              { title: 'Customer Service Transformation', icon: '🎧', desc: 'Deliver omnichannel, AI-powered service experiences with intelligent case resolution.' },
              { title: 'Platform-Led Innovation', icon: '⚡', desc: 'Accelerate low-code application development and automation across the enterprise.' }
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

        {/* Platform Capabilities - No change */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(0, 206, 201, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            ServiceNow Platform Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            End-to-end enterprise service management
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['ITSM', 'ITOM', 'ITBM', 'HR Service Delivery', 'Customer Service', 'Security Operations', 'GRC', 'Integration Hub', 'Flow Designer', 'Service Portal', 'Workspace', 'Now Platform', 'Virtual Agent', 'AIOps', 'Asset Management', 'Project Portfolio'].map((cap, i) => (
              <div key={i} className="tech-tag">
                {cap}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies - No change */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(0, 206, 201, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Technologies We Use
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            Expertise across ServiceNow ecosystem
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['ServiceNow', 'Now Platform', 'JavaScript', 'Angular', 'REST APIs', 'Glide API', 'ACL', 'Business Rules', 'Script Includes', 'MID Server', 'Azure', 'AWS', 'Jenkins', 'Splunk', 'Slack', 'Microsoft Teams'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact (was Why Choose Our ServiceNow Services?) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Business Impact
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accelerated Service Delivery', desc: 'Reduce resolution time with intelligent automation', icon: '⚡' },
              { title: 'Unified Service Experience', desc: 'One platform for IT, HR, customer, and operations', icon: '🔄' },
              { title: 'AI-Driven Productivity', desc: 'Boost workforce efficiency with predictive insights', icon: '🤖' },
              { title: 'Operational Resilience', desc: 'Proactive risk and security workflow management', icon: '🛡️' },
              { title: 'Faster Innovation Cycles', desc: 'Low-code development at enterprise scale', icon: '🚀' },
              { title: 'Data-Driven Decisions', desc: 'Real-time visibility across business services', icon: '📊' }
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

        {/* CTA - updated heading and text */}
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 206, 201, 0.2), rgba(0, 168, 163, 0.1))', borderRadius: '30px', border: '1px solid rgba(0, 206, 201, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Modernize Your Enterprise Workflows with ServiceNow
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Connect with our transformation specialists to build an intelligent, experience-led service platform.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={() => navigate("/contact")}>
              Start Your Project
            </button>
            <button className="cta-btn-outline">
              Talk to Experts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}