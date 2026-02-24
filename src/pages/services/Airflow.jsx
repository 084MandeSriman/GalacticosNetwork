import { useNavigate } from 'react-router-dom';

export default function Airflow() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.4); } 50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8); } }
        @keyframes metricPulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(6, 182, 212, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(6, 182, 212, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(14, 165, 233, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(14, 165, 233, 0.3), rgba(6, 182, 212, 0.2)); box-shadow: 0 10px 30px rgba(14, 165, 233, 0.4); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #22d3ee; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(14, 165, 233, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(14, 165, 233, 0.5); box-shadow: 0 15px 40px rgba(14, 165, 233, 0.2); }
        .cta-btn { background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(14, 165, 233, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #22d3ee; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(14, 165, 233, 0.1); transform: translateY(-4px); }
      `}</style>
      
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)', animation: 'float 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 10s ease-in-out infinite 1.5s' }} />
      
      {/* Floating dots */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '50%', background: '#0ea5e9', animation: 'metricPulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', background: '#06b6d4', animation: 'metricPulse 3s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', top: '25%', left: '8%', width: '12px', height: '12px', borderRadius: '50%', background: '#22d3ee', animation: 'metricPulse 3s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '12%', width: '18px', height: '18px', borderRadius: '50%', background: '#38bdf8', animation: 'metricPulse 3s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <svg width="130" height="130" viewBox="0 0 200 200" style={{ marginBottom: '24px', animation: 'float 4s ease-in-out infinite, pulse 3s ease-in-out infinite' }}>
            <defs>
              <linearGradient id="airGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
              </linearGradient>
              <filter id="airGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#airGrad)" strokeWidth="4" filter="url(#airGlow)" />
            <circle cx="100" cy="50" r="15" fill="#fff" />
            <circle cx="150" cy="100" r="15" fill="#fff" />
            <circle cx="100" cy="150" r="15" fill="#fff" />
            <circle cx="50" cy="100" r="15" fill="#fff" />
            <line x1="100" y1="65" x2="135" y2="90" stroke="url(#airGrad)" strokeWidth="3" />
            <line x1="135" y1="110" x2="100" y2="135" stroke="url(#airGrad)" strokeWidth="3" />
            <line x1="65" y1="90" x2="100" y2="65" stroke="url(#airGrad)" strokeWidth="3" />
            <line x1="65" y1="110" x2="100" y2="135" stroke="url(#airGrad)" strokeWidth="3" />
          </svg>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(14, 165, 233, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Data Pipeline Orchestration & DataOps Foundation
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable intelligent, scalable, and resilient data pipeline orchestration that powers real-time analytics, AI initiatives, and business-critical decision making across the enterprise.
          </p>
          
          {/* Capability Highlights */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🔄', label: 'Enterprise DataOps Enablement' },
              { icon: '⚡', label: 'Real-Time & Batch Pipeline Orchestration' },
              { icon: '☁️', label: 'Cloud-Native Workflow Modernization' },
              { icon: '📊', label: 'Trusted & Observable Data Operations' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(14, 165, 233, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Methodology */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Data Pipeline Orchestration Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A business-aligned approach to building scalable, resilient, and observable data pipelines.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess pipeline maturity & operational challenges', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define scalable orchestration & DataOps strategy', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Migrate to cloud-native workflow platforms', icon: '⚙️' },
              { step: '04', title: 'Unify', desc: 'Enable governed, reusable, and modular pipelines', icon: '🔄' },
              { step: '05', title: 'Activate', desc: 'Deliver reliable data for analytics & AI use cases', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Continuous optimization with observability & automation', icon: '📊' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#22d3ee', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Data Pipeline Orchestration & DataOps Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities for intelligent, scalable, and observable data operations.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Modern Workflow Orchestration Enablement',
                icon: '🔄',
                desc: 'Deliver scalable, event-driven pipeline orchestration across hybrid and multi-cloud environments.'
              },
              {
                title: 'Reusable & Modular Data Pipeline Frameworks',
                icon: '🧩',
                desc: 'Accelerate delivery with standardized, governed workflow patterns and best practices.'
              },
              {
                title: 'End-to-End Data Observability',
                icon: '📊',
                desc: 'Gain real-time visibility into pipeline health, SLA adherence, and data reliability.'
              },
              {
                title: 'CI/CD for Data Pipelines',
                icon: '⚙️',
                desc: 'Enable continuous integration and deployment for faster and safer releases.'
              },
              {
                title: 'Enterprise Workload & Cost Optimization',
                icon: '💰',
                desc: 'Optimize compute utilization, scheduling, and resource consumption across pipelines.'
              },
              {
                title: 'AI & Advanced Analytics Data Delivery',
                icon: '🤖',
                desc: 'Ensure reliable and timely data availability for ML and GenAI initiatives.'
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

        {/* Ecosystem Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(14, 165, 233, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Data Pipeline Orchestration Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated, cloud-native ecosystem enabling scalable and reliable data operations.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Apache Airflow', 'MWAA', 'Cloud Composer', 'Astronomer', 
              'Prefect', 'Dagster', 'Apache NiFi', 'Luigi',
              'AWS Glue', 'Azure Data Factory', 'Google Cloud Dataflow',
              'Python', 'Docker', 'Kubernetes', 'Snowflake', 'BigQuery'
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
              { title: 'Faster and reliable data delivery', desc: 'Deliver trusted data to business users and applications with guaranteed SLAs.', icon: '⏱️' },
              { title: 'Reduced pipeline failures and operational risk', desc: 'Minimize downtime with proactive monitoring and self-healing workflows.', icon: '🛡️' },
              { title: 'Accelerated AI and advanced analytics adoption', desc: 'Ensure consistent, high-quality data for ML and GenAI initiatives.', icon: '🤖' },
              { title: 'Improved data platform cost efficiency', desc: 'Optimize resource usage and scheduling to reduce cloud spend.', icon: '💰' },
              { title: 'Real‑time, SLA‑driven data operations', desc: 'Enable business-critical decisions with low‑latency data pipelines.', icon: '⚡' },
              { title: 'Scalable foundation for DataOps transformation', desc: 'Build a future‑ready orchestration layer for continuous innovation.', icon: '📈' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.1))', borderRadius: '30px', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Data Pipeline Operations into a Scalable DataOps Foundation
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our data engineering specialists to build intelligent, reliable, and cloud‑native orchestration that powers real‑time, AI‑driven enterprises.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={handleNavigation}>
              Start Your Data Transformation
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