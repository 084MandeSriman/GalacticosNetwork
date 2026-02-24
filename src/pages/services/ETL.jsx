import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ETL() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.4); } 50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8); } }
        @keyframes dataPulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(99, 102, 241, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(99, 102, 241, 0.6); }
        .tech-tag { background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(14, 165, 233, 0.1)); padding: 12px 24px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(99, 102, 241, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(14, 165, 233, 0.2)); box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(99, 102, 241, 0.2); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #818cf8; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .process-step { background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 30px; border: 1px solid rgba(99, 102, 241, 0.2); text-align: center; transition: all 0.3s ease; }
        .process-step:hover { transform: scale(1.05); border-color: rgba(99, 102, 241, 0.5); box-shadow: 0 15px 40px rgba(99, 102, 241, 0.2); }
        .feature-tag { background: rgba(99, 102, 241, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 12px; color: #c7d2fe; font-weight: 500; }
        .cta-btn { background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%); color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #818cf8; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(99, 102, 241, 0.1); transform: translateY(-4px); }
        .case-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 20px; padding: 35px; border: 1px solid rgba(99, 102, 241, 0.15); transition: all 0.4s ease; }
        .case-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.3); border-color: rgba(99, 102, 241, 0.3); }
        .faq-item { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { background: rgba(255,255,255,0.1); }
        .faq-item.active { background: rgba(255,255,255,0.1); border-color: rgba(99, 102, 241, 0.5); }
      `}</style>
      
      {/* Animated Background Elements - Data/ETL Theme */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      
      {/* Data-colored dots */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '20px', height: '20px', borderRadius: '50%', background: '#0ea5e9', animation: 'dataPulse 3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', background: '#6366f1', animation: 'dataPulse 3s ease-in-out infinite 0.5s' }} />
      <div style={{ position: 'absolute', top: '25%', left: '8%', width: '12px', height: '12px', borderRadius: '50%', background: '#818cf8', animation: 'dataPulse 3s ease-in-out infinite 1s' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '12%', width: '18px', height: '18px', borderRadius: '50%', background: '#38bdf8', animation: 'dataPulse 3s ease-in-out infinite 1.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* ETL/Data Pipeline SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="etlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
                <filter id="etlGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Data pipeline - three connected nodes */}
              <circle cx="50" cy="100" r="30" fill="none" stroke="url(#etlGrad)" strokeWidth="4" filter="url(#etlGlow)" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="url(#etlGrad)" strokeWidth="4" filter="url(#etlGlow)" />
              <circle cx="150" cy="100" r="30" fill="none" stroke="url(#etlGrad)" strokeWidth="4" filter="url(#etlGlow)" />
              {/* Connection lines */}
              <path d="M80 100 L120 100" stroke="url(#etlGrad)" strokeWidth="4" />
              {/* Data flow arrows */}
              <path d="M60 70 L60 60 L50 60" stroke="url(#etlGrad)" strokeWidth="3" fill="none" />
              <path d="M110 70 L110 60 L100 60" stroke="url(#etlGrad)" strokeWidth="3" fill="none" />
              <path d="M160 70 L160 60 L150 60" stroke="url(#etlGrad)" strokeWidth="3" fill="none" />
              {/* Center icons */}
              <text x="50" y="105" textAnchor="middle" fill="#fff" fontSize="16">E</text>
              <text x="100" y="105" textAnchor="middle" fill="#fff" fontSize="16">T</text>
              <text x="150" y="105" textAnchor="middle" fill="#fff" fontSize="16">L</text>
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(99, 102, 241, 0.5)', letterSpacing: '-0.02em' }}>
            Enterprise Data Integration & ETL Engineering
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Enable a unified, trusted, and real-time data foundation with scalable, cloud-native, and intelligence-driven data integration—empowering analytics, AI, and business decision-making.
          </p>
          
          {/* Capability Highlights (replaced stats) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { icon: '🏗️', label: 'Modern Data Platform Enablement' },
              { icon: '🔄', label: 'Real-time & Batch Data Integration' },
              { icon: '☁️', label: 'Cloud-Native Data Pipeline Transformation' },
              { icon: '🔐', label: 'Trusted & Governed Data for AI & Analytics' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Data Integration Transformation Methodology (was ETL Solutions) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Our Data Integration Transformation Methodology
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            A value-led approach to building a trusted, real-time, and AI-ready data foundation
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Assess data landscape & business outcomes', icon: '🔍' },
              { step: '02', title: 'Architect', desc: 'Define modern data integration strategy', icon: '📐' },
              { step: '03', title: 'Modernize', desc: 'Migrate to cloud-native & real-time pipelines', icon: '⚙️' },
              { step: '04', title: 'Unify', desc: 'Enable governed & trusted data foundation', icon: '🔄' },
              { step: '05', title: 'Activate', desc: 'Deliver data for analytics, AI & business apps', icon: '🚀' },
              { step: '06', title: 'Evolve', desc: 'Continuous optimization with observability & automation', icon: '📊' }
            ].map((process, i) => (
              <div key={i} className="process-step">
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#818cf8', marginBottom: '10px' }}>{process.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{process.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Integration & ETL Engineering Capabilities (was ETL Services) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Data Integration & ETL Engineering Capabilities
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>
            Outcome-driven capabilities to build a trusted, scalable, and intelligent data foundation
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Modern Data Pipeline Engineering',
                icon: '🔄',
                desc: 'Deliver scalable batch and real-time pipelines for enterprise data platforms.'
              },
              {
                title: 'Cloud Data Platform Integration',
                icon: '☁️',
                desc: 'Unify data across multi-cloud, SaaS, and on-prem systems for a single source of truth.'
              },
              {
                title: 'Real-Time Data Enablement',
                icon: '⚡',
                desc: 'Power event-driven architectures for instant business insights and responsive applications.'
              },
              {
                title: 'Trusted Data & Governance',
                icon: '🔐',
                desc: 'Ensure quality, lineage, compliance, and business-ready data for critical decision-making.'
              },
              {
                title: 'Analytics & AI Data Readiness',
                icon: '🤖',
                desc: 'Prepare high-quality data for BI, ML, and GenAI use cases to drive innovation.'
              },
              {
                title: 'Data Operations & Observability',
                icon: '📊',
                desc: 'Monitor, optimize, and automate pipelines for continuous reliability and performance.'
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

        {/* Data Integration Platform Ecosystem (was ETL Tools & Technologies) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(99, 102, 241, 0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Data Integration Platform Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            An integrated, cloud-native ecosystem enabling scalable and intelligent data integration.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {[
              'Apache Spark', 'Apache Airflow', 'AWS Glue', 'Azure Data Factory', 'Google Dataflow',
              'Snowflake', 'BigQuery', 'Redshift', 'Databricks', 'Kafka', 'Flink',
              'Python', 'SQL', 'dbt', 'Dagster', 'Prefect', 'Talend', 'Informatica',
              'Apache NiFi', 'StreamSets', 'Matillion', 'DBT', 'ETL', 'Reverse ETL'
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
              { title: 'Faster access to trusted business data', desc: 'Accelerate time-to-insight with automated, governed data pipelines.', icon: '⏱️' },
              { title: 'Real-time, insight-driven decision making', desc: 'Enable instant responses with event-driven data integration.', icon: '⚡' },
              { title: 'Reduced data platform operational cost', desc: 'Optimize infrastructure and eliminate data silos.', icon: '💰' },
              { title: 'Unified data for AI and advanced analytics', desc: 'Deliver clean, curated data for ML and GenAI initiatives.', icon: '🤖' },
              { title: 'Improved regulatory compliance and governance', desc: 'Ensure data lineage, quality, and security at scale.', icon: '🔐' },
              { title: 'Accelerated digital transformation initiatives', desc: 'Build a future-ready data foundation for continuous innovation.', icon: '🚀' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(14, 165, 233, 0.1))', borderRadius: '30px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Data into a Strategic Business Asset
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with our data integration specialists to build a unified, scalable, and AI-ready data foundation for continuous growth.
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