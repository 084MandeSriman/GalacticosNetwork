import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook

export default function DotNet() {
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle navigation
  const handleStartProject = () => {
    navigate('/contact-us');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a0a4a 0%, #2d1b69 50%, #512bd4 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 30px rgba(81, 43, 212, 0.5); } 50% { box-shadow: 0 0 60px rgba(81, 43, 212, 0.9); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .feature-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-radius: 20px; padding: 28px; border: 1px solid rgba(255,255,255,0.15); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.4); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.3); }
        .tech-tag { background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); backdrop-filter: blur(10px); padding: 14px 28px; border-radius: 50px; color: #fff; font-size: 15px; font-weight: 600; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { transform: scale(1.08); background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1)); box-shadow: 0 10px 30px rgba(81, 43, 212, 0.4); }
        .stat-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); backdrop-filter: blur(15px); border-radius: 20px; padding: 35px; text-align: center; border: 1px solid rgba(255,255,255,0.15); transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-8px); background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .benefit-card { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; border-left: 4px solid #512bd4; transition: all 0.3s ease; }
        .benefit-card:hover { background: rgba(255,255,255,0.1); transform: translateX(8px); }
        .cta-btn { background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%); color: #512bd4; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0,0,0,0.3); }
        .cta-btn-outline { background: transparent; color: #fff; padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; border: 2px solid #fff; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
        .floating-orbit { animation: float 8s ease-in-out infinite; }
        .pulse-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
      
      {/* Animated Background */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(81,43,212,0.4), transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,135,245,0.2), transparent 70%)', animation: 'float 12s ease-in-out infinite 2s' }} />
      <div style={{ position: 'absolute', top: '30%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(81,43,212,0.15), transparent 70%)', animation: 'float 14s ease-in-out infinite 1s' }} />
      
      {/* Grid Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          {/* .NET Logo SVG */}
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="dotnetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#9b8af5" />
                </linearGradient>
              </defs>
              <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="url(#dotnetGrad)" strokeWidth="2.5" />
              <polygon points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5" fill="none" stroke="url(#dotnetGrad)" strokeWidth="1.5" opacity="0.7" />
              <circle cx="50" cy="32" r="6" fill="url(#dotnetGrad)" />
              <circle cx="32" cy="50" r="6" fill="url(#dotnetGrad)" />
              <circle cx="68" cy="50" r="6" fill="url(#dotnetGrad)" />
              <circle cx="50" cy="68" r="6" fill="url(#dotnetGrad)" />
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(0,0,0,0.4)', letterSpacing: '-0.02em', fontFamily: "'Segoe UI', sans-serif" }}>
            .NET Development
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7', fontWeight: '400' }}>
            We help enterprises modernize, build, and scale business-critical applications using the Microsoft .NET ecosystem. From cloud-native platforms to API-led integration, our .NET services enable faster innovation, higher performance, and secure digital transformation.
          </p>
          
          {/* Quick Stats Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { number: 'Enterprise Delivery', label: 'Global Engagement Model', icon: '🚀' },
              { number: 'Certified', label: '.NET Consultants', icon: '✅' },
              { number: 'Cloud & API', label: 'Modernization Programs', icon: '💬' },
              { number: 'Agile', label: 'Delivery Approach', icon: '💻' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#fff' }}>{stat.number}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Core Services
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
            End-to-end .NET services for application modernization, cloud adoption, and enterprise platform engineering
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { title: 'ASP.NET Core Web API', icon: '🌐', desc: 'High-performance RESTful APIs and web services with real-time capabilities', features: ['REST & GraphQL APIs', 'SignalR Real-time', 'JWT Authentication', 'OpenAPI/Swagger'] },
              { title: 'Microservices Architecture', icon: '🔗', desc: 'Scalable containerized services with Kubernetes orchestration', features: ['Docker & K8s', 'API Gateway', 'Service Mesh', 'Event Sourcing'] },
              { title: 'Azure Cloud Solutions', icon: '☁️', desc: 'Seamless Microsoft Azure integration and serverless architectures', features: ['Azure Functions', 'Azure DevOps', 'App Service', 'SQL Database'] },
              { title: 'Enterprise Applications', icon: '🏢', desc: 'Robust business applications with advanced security and compliance', features: ['Role-based Access', 'Audit Logging', 'Data Encryption', 'Compliance Reports'] },
              { title: 'Desktop Applications', icon: '🖥️', desc: 'Modern Windows desktop apps with WPF and WinForms', features: ['WPF & WinForms', 'MVVM Pattern', 'Third-party Integration', 'ClickOnce Deployment'] },
              { title: 'Mobile with Xamarin', icon: '📱', desc: 'Cross-platform mobile apps sharing C# codebase', features: ['iOS & Android', 'Native UI', 'Offline Sync', 'Push Notifications'] }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((feature, j) => (
                    <span key={j} style={{ background: 'rgba(81,43,212,0.3)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', color: '#fff', fontWeight: '500' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '30px', padding: '60px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Technologies We Use
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>
            Mastery across the entire .NET ecosystem
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['ASP.NET Core', 'Entity Framework Core', 'Blazor', 'Xamarin', 'WPF', 'WinForms', 'LINQ', 'Azure Functions', 'Docker', 'Kubernetes', 'Redis', 'SQL Server', 'MongoDB', 'RabbitMQ', 'IdentityServer', 'SignalR', 'Ocelot', 'Serilog', 'xUnit', 'FluentValidation'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>
            Why Choose Our .NET Services?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Enterprise-Grade Security', desc: 'Built-in security features with identity management, role-based access, and compliance frameworks', icon: '🛡️' },
              { title: 'Cross-Platform Deployment', desc: 'Deploy anywhere - Windows, Linux, macOS, and cloud platforms with minimal code changes', icon: '🌍' },
              { title: 'High Performance', desc: 'Optimized for speed with async/await patterns, caching strategies, and efficient memory management', icon: '⚡' },
              { title: 'Scalable Architecture', desc: 'Microservices-ready design patterns that grow with your business requirements', icon: '📈' },
              { title: 'Rich Ecosystem', desc: 'Access to thousands of NuGet packages and Microsoft-backed libraries for rapid development', icon: '📦' },
              { title: 'Faster Development & Lower Defect Rates', desc: 'Compile-time error detection and IntelliSense support for faster development cycles', icon: '✅' }
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
        <div style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(81,43,212,0.2), rgba(155,135,245,0.1))', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Ready to Build with .NET?
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Engage with our .NET transformation specialists to modernize applications, accelerate delivery, and unlock new digital capabilities.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Functional Navigation Button */}
            <button className="cta-btn" onClick={handleStartProject}>
              Start Your Project
            </button>
            <button className="cta-btn-outline" onClick={handleStartProject}>
              Schedule Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}