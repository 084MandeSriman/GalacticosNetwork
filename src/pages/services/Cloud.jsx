import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cloud() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (title) => {
    setFlipped(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const styles = {
    // ENHANCED HERO STYLES
    heroContainer: {
      position: "relative",
      minHeight: "85vh",
      height: "auto",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#030712",
    },
    heroWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "100px 20px",
      position: "relative",
      zIndex: 2,
      gap: "40px",
      flexWrap: "wrap"
    },
    heroLeft: {
      flex: 1,
      minWidth: "280px",
      height: "auto",
      maxHeight: "400px",
      animation: "float 6s ease-in-out infinite"
    },
    heroBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(to bottom, rgba(3, 7, 18, 0.7) 0%, rgba(3, 7, 18, 0.4) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1
    },
    heroContent: {
      flex: 1,
      minWidth: "280px",
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "60px 40px",
      maxWidth: "900px",
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      borderRadius: "40px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    heroTag: {
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#60a5fa",
      marginBottom: "24px",
      display: "inline-block",
      padding: "8px 20px",
      background: "rgba(96, 165, 250, 0.1)",
      borderRadius: "100px",
    },
    heroTitle: {
      fontSize: "62px",
      fontWeight: 800,
      lineHeight: 1.1,
      color: "#ffffff",
      margin: "0",
      background: "linear-gradient(to bottom right, #ffffff 60%, #94a3b8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    // EXISTING STYLES
    section: {
      padding: "90px 10%",
      background: "#fff"
    },
    heading: {
      fontSize: "36px",
      color: "#0b5aa2",
      marginBottom: "22px",
      fontWeight: 700
    },
    paragraph: {
      fontSize: "16.5px",
      lineHeight: 1.9,
      color: "#444",
      maxWidth: "900px",
      marginBottom: "18px"
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      marginTop: "50px"
    }
  };

  return (
    <>
      <style>{`
        /* HERO ANIMATIONS */
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(40px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        
        .animate-bg { animation: kenBurns 20s infinite alternate ease-in-out; }
        .animate-text { animation: textReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .plasma-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 2;
          filter: blur(50px);
          animation: floatOrb 12s infinite alternate ease-in-out;
        }
        
        .dais-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .dais-item:hover {
          background: #fff;
          border-color: rgba(13, 110, 253, 0.2);
          transform: translateX(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .enhanced-card {
          background: #fdfdfe;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }
        .accent-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(to bottom, #0d6efd, #00a3ff);
        }

        /* MOBILE RESPONSIVE STYLES */
        @media (max-width: 1200px) {
          .enhanced-card {
            padding: 30px;
          }
        }

        @media (max-width: 992px) {
          .hero-wrapper {
            padding: 80px 20px !important;
          }
          .hero-content {
            padding: 50px 30px !important;
          }
          .hero-title {
            font-size: 48px !important;
          }
          .section {
            padding: 70px 6% !important;
          }
          .split {
            gap: 30px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-wrapper {
            flex-direction: column;
            padding: 60px 20px !important;
          }
          .hero-left {
            min-width: 100%;
            max-height: 300px;
            margin-bottom: 20px;
          }
          .hero-content {
            min-width: 100%;
            padding: 40px 20px !important;
          }
          .hero-title {
            font-size: 40px !important;
            line-height: 1.2 !important;
          }
          .hero-tag {
            font-size: 12px !important;
            padding: 6px 15px !important;
          }
          
          .section {
            padding: 60px 4% !important;
          }
          .heading {
            font-size: 30px !important;
            text-align: center;
          }
          .paragraph {
            font-size: 15px !important;
            line-height: 1.7 !important;
            text-align: center;
          }
          .split {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .enhanced-card {
            padding: 30px 20px !important;
          }
          
          /* Cloud Services Grid */
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 10px !important;
          }
          
          /* Flip Cards */
          .flip-card {
            height: 280px !important;
          }
          
          /* CTA Section */
          .cta-container {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 40px 20px !important;
            gap: 30px !important;
          }
          .cta-left {
            border-right: none !important;
            padding-right: 0 !important;
          }
          .cta-buttons {
            border-right: none !important;
            padding-right: 0 !important;
          }
          .cta-left h2 {
            font-size: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-wrapper {
            padding: 40px 15px !important;
          }
          .hero-left {
            max-height: 250px;
          }
          .hero-content {
            padding: 30px 15px !important;
          }
          .hero-title {
            font-size: 32px !important;
          }
          .hero-tag {
            font-size: 11px !important;
            letter-spacing: 3px !important;
          }
          
          .section {
            padding: 50px 4% !important;
          }
          .heading {
            font-size: 26px !important;
          }
          
          .enhanced-card {
            padding: 25px 15px !important;
          }
          .enhanced-card h3 {
            font-size: 20px !important;
          }
          
          .dais-item {
            padding: 10px !important;
            gap: 10px !important;
          }
          .dais-item span:last-child {
            font-size: 13px !important;
          }
          
          /* Flip Cards */
          .flip-card {
            height: 260px !important;
          }
          .flip-card h3 {
            font-size: 20px !important;
          }
          .flip-card p {
            font-size: 13px !important;
          }
          
          /* CTA Buttons */
          .cta-buttons {
            gap: 10px !important;
          }
          .cta-btn {
            padding: 12px !important;
            font-size: 14px !important;
          }
          .cta-connect {
            padding: 15px 35px !important;
            font-size: 16px !important;
          }
        }

        /* Tablet Landscape */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 52px !important;
          }
          .split {
            gap: 30px !important;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Fix for flip cards on mobile */
        @media (max-width: 768px) {
          .flip-card-inner {
            transform-style: preserve-3d;
          }
        }
      `}</style>

      {/* ENHANCED HERO WITH SVG */}
      <section style={styles.heroContainer}>
        <div style={styles.heroBg} className="animate-bg" />

        <div style={styles.heroWrapper} className="hero-wrapper">
          
          {/* LEFT SIDE - SVG ILLUSTRATION */}
          <div style={styles.heroLeft} className="hero-left">
            <svg
              viewBox="0 0 600 500"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Gradient */}
                <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.1" />
                </radialGradient>

                {/* Blue Gradient */}
                <linearGradient id="serverGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                {/* Blur Filter */}
                <filter id="blurMe">
                  <feGaussianBlur stdDeviation="25" />
                </filter>
              </defs>

              {/* Background Glow */}
              <circle cx="300" cy="220" r="150" fill="url(#cloudGlow)" filter="url(#blurMe)" />

              {/* Cloud Shape */}
              <circle cx="250" cy="230" r="90" fill="rgba(96,165,250,0.25)" />
              <circle cx="350" cy="230" r="80" fill="rgba(96,165,250,0.35)" />
              <circle cx="300" cy="190" r="100" fill="rgba(96,165,250,0.3)" />

              {/* Servers */}
              <rect x="220" y="280" width="160" height="40" rx="10" fill="url(#serverGradient)" />
              <rect x="220" y="330" width="160" height="40" rx="10" fill="url(#serverGradient)" />
              <rect x="220" y="380" width="160" height="40" rx="10" fill="url(#serverGradient)" />

              {/* Server Indicators */}
              <circle cx="240" cy="300" r="4" fill="#60a5fa">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="240" cy="350" r="4" fill="#60a5fa">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="240" cy="400" r="4" fill="#60a5fa">
                <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Network Lines */}
              <line x1="300" y1="190" x2="300" y2="280" stroke="#60a5fa" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div style={styles.heroContent} className="hero-content animate-text">
            <div style={styles.heroTag} className="hero-tag">Enterprise Cloud & Platform Engineering</div>
            <h1 style={styles.heroTitle} className="hero-title">
              Engineer resilient cloud platforms <br />
              <span style={{ color: "#60a5fa" }}>
                that accelerate digital business
              </span>
            </h1>
          </div>

        </div>
      </section>

      {/* ENHANCED INTRO SECTION (Image Part) */}
      <section style={styles.section} className="section">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ ...styles.heading, fontSize: "42px" }} className="heading">
            Cloud Platforms for Agility, Resilience,<br />
            <span style={{ color: "#0d6efd" }}>and Continuous Innovation</span>
          </h2>
          <p style={{ ...styles.paragraph, margin: "0 auto", textAlign: "center" }} className="paragraph">
            We help enterprises evolve from infrastructure-centric models to cloud-native platform operating models—enabling faster product delivery, elastic scalability, built-in security, and continuous cost optimization.
          </p>
        </div>

        <div style={styles.split} className="split">
          <div className="enhanced-card">
            <div className="accent-line"></div>
            <h3 style={{ fontSize: "24px", color: "#0d6efd", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ background: "#0d6efd", color: "#fff", padding: "4px 8px", borderRadius: "4px", fontSize: "14px" }}>■</span> Overview
            </h3>
            <p style={{ ...styles.paragraph, fontSize: "16px" }} className="paragraph">
              Our platform-led approach integrates automation, observability, FinOps, and policy-driven security to transform cloud into a continuous innovation engine rather than a hosting destination.
            </p>

            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
              <svg width="100%" height="auto" viewBox="0 0 200 200" style={{ maxWidth: "320px" }}>
                <circle cx="100" cy="100" r="70" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" style={{ transformOrigin: 'center', animation: 'rotate-slow 20s linear infinite' }} />
                <circle cx="100" cy="100" r="45" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" style={{ transformOrigin: 'center', animation: 'rotate-slow 15s linear reverse infinite' }} />
                <circle cx="100" cy="100" r="18" fill="#0d6efd" />
                <circle cx="100" cy="100" r="24" fill="none" stroke="#0d6efd" strokeWidth="2" opacity="0.2" />
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <g key={i}>
                    <line x1="100" y1="100" x2={100 + 70 * Math.cos(deg * Math.PI / 180)} y2={100 + 70 * Math.sin(deg * Math.PI / 180)} stroke="#0d6efd" strokeWidth="1.5" opacity="0.3" />
                    <circle cx={100 + 70 * Math.cos(deg * Math.PI / 180)} cy={100 + 70 * Math.sin(deg * Math.PI / 180)} r="8" fill={i % 2 === 0 ? "#0d6efd" : "#00a3ff"} style={{ animation: `pulse-node 3s infinite ${i * 0.5}s` }} />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="enhanced-card" style={{ background: "#f8fbff" }}>
            <div className="accent-line" style={{ background: "#00a3ff" }}></div>
            <h3 style={{ fontSize: "24px", color: "#00a3ff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "25px" }}>
              <span style={{ fontSize: "20px" }}>⚡</span> DAIS™ Approach
            </h3>
            <div style={{ display: "grid", gap: "8px" }}>
              {[
                { icon: "📈", text: "Cloud strategy aligned to business value streams" },
                { icon: "🏗️", text: "Application-aware infrastructure design" },
                { icon: "💰", text: "FinOps-driven cost governance" },
                { icon: "🔐", text: "Policy-as-code security and compliance" },
                { icon: "📡", text: "Full-stack observability and SRE enablement" },
                { icon: "🤖", text: "Automation-led operations" },
                { icon: "📊", text: "Continuous optimization through analytics" }
              ].map((item, idx) => (
                <div key={idx} className="dais-item">
                  <span style={{ fontSize: "18px", width: "25px" }}>{item.icon}</span>
                  <span style={{ fontSize: "15px", fontWeight: "500", color: "#334155" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD SERVICES */}
      <section style={{padding: "80px 20px", maxWidth: "1200px", margin: "0 auto"}}>
        <h2 style={{...styles.heading, textAlign: "center", marginBottom: "60px"}} className="heading">Cloud Platform Capabilities</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px"}} className="services-grid">
          {[
            { 
              icon: "☁️", 
              title: "Cloud Value & Transformation Strategy", 
              frontDesc: "Business‑first strategy", 
              backDesc: "Align cloud initiatives with business outcomes, define value streams, and build a transformation roadmap that drives growth and agility.", 
              gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
            },
            { 
              icon: "🚀", 
              title: "Application & Data Platform Modernization", 
              frontDesc: "Modernize at scale", 
              backDesc: "Refactor and replatform workloads using cloud-native patterns, containers, and serverless to improve resilience and reduce time‑to‑market.", 
              gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" 
            },
            { 
              icon: "⚡", 
              title: "Continuous Performance & FinOps Optimization", 
              frontDesc: "Intelligent optimization", 
              backDesc: "Continuously optimize performance, scalability, and cloud spend through data-driven FinOps, autoscaling, and workload right‑sizing.", 
              gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" 
            },
            { 
              icon: "🔒", 
              title: "Zero-Trust Cloud & Policy-Driven Governance", 
              frontDesc: "Security by design", 
              backDesc: "Embed zero-trust principles, automate compliance with policy-as-code, and enforce consistent security across all cloud environments.", 
              gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" 
            },
            { 
              icon: "📊", 
              title: "SRE-Led Cloud Platform Operations", 
              frontDesc: "Reliability at scale", 
              backDesc: "Establish site reliability engineering practices, full-stack observability, and automated incident response for always-on platforms.", 
              gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" 
            },
            { 
              icon: "🌐", 
              title: "Unified Multi‑Cloud Platform Engineering", 
              frontDesc: "Seamless multi‑cloud", 
              backDesc: "Design and operate consistent platform capabilities across AWS, Azure, GCP and private clouds with unified governance and tooling.", 
              gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" 
            }
          ].map((card) => (
            <div key={card.title} className="flip-card" style={{ perspective: "1000px", height: "320px", cursor: "pointer" }} onClick={() => toggleFlip(card.title)}>
              <div className="flip-card-inner" style={{ position: "relative", width: "100%", height: "100%", transition: "transform 0.6s", transformStyle: "preserve-3d", transform: flipped[card.title] ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", background: card.gradient, borderRadius: "16px", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                  <div style={{fontSize: "48px", marginBottom: "16px"}}>{card.icon}</div>
                  <h3 style={{marginBottom: "10px", fontSize: "22px"}}>{card.title}</h3>
                  <p style={{fontSize: "14px", opacity: 0.9}}>{card.frontDesc}</p>
                </div>
                <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#334155", borderRadius: "16px", padding: "30px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white" }}>
                  <p style={{fontSize: "16px", lineHeight: 1.6}}>{card.backDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <style>{`
          .cta-section {
            padding: 100px 10%;
            background: linear-gradient(rgba(13, 27, 61, 0.92), rgba(26, 58, 82, 0.92)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80");
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
            overflow: hidden;
          }
          .cta-section::before {
            content: "";
            position: absolute;
            top: -200px;
            right: -150px;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(0,163,255,0.2), transparent 70%);
            border-radius: 50%;
            filter: blur(50px);
          }
          .cta-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px;
            border-radius: 24px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
            align-items: center;
            background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow: 0 25px 60px rgba(13,110,253,0.25);
            position: relative;
            z-index: 1;
          }
          .cta-left { border-right: 1px solid rgba(255,255,255,0.15); padding-right: 30px; }
          .cta-left h2 { font-size: 30px; color: #ffffff; margin-bottom: 15px; line-height: 1.4; }
          .cta-left p { color: rgba(255,255,255,0.7); font-size: 16px; margin: 0; }
          .cta-buttons { display: flex; flex-direction: column; gap: 14px; border-right: 1px solid rgba(255,255,255,0.15); padding-right: 30px; }
          .cta-btn { padding: 14px; border-radius: 10px; border: 2px solid #0d6efd; background: transparent; color: #ffffff; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
          .cta-btn:hover { background: #0d6efd; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(13,110,253,0.4); }
          .cta-connect { padding: 18px 45px; background: linear-gradient(135deg, #ff9800, #ff6f00); border: none; border-radius: 12px; font-size: 18px; font-weight: 700; color: #fff; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 12px 30px rgba(255,152,0,0.3); }
          .cta-connect:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(255,152,0,0.5); }
          .cta-right { text-align: center; }
          
          @media (max-width: 1024px) {
            .cta-container { 
              grid-template-columns: 1fr; 
              text-align: center; 
              padding: 40px !important;
              gap: 30px !important;
            }
            .cta-left { 
              border-right: none; 
              padding-right: 0; 
            }
            .cta-buttons { 
              border-right: none; 
              padding-right: 0; 
              max-width: 400px;
              margin: 0 auto;
              width: 100%;
            }
            .cta-left h2 {
              font-size: 28px !important;
            }
          }
          
          @media (max-width: 768px) {
            .cta-section {
              padding: 60px 4% !important;
            }
            .cta-container {
              padding: 30px 20px !important;
            }
            .cta-left h2 {
              font-size: 24px !important;
            }
            .cta-left p {
              font-size: 14px !important;
            }
            .cta-btn {
              padding: 12px !important;
              font-size: 14px !important;
            }
            .cta-connect {
              padding: 15px 30px !important;
              font-size: 16px !important;
            }
          }
          
          @media (max-width: 480px) {
            .cta-section {
              padding: 40px 4% !important;
            }
            .cta-container {
              padding: 25px 15px !important;
            }
            .cta-left h2 {
              font-size: 22px !important;
            }
            .cta-buttons {
              gap: 10px !important;
            }
            .cta-connect {
              padding: 12px 25px !important;
              font-size: 15px !important;
            }
          }
        `}</style>

        <div className="cta-container">
          <div className="cta-left">
            <h2>Transform your cloud into a high‑velocity digital platform</h2>
            <p>Partner with our cloud platform engineering specialists to enable continuous innovation, resilience, and cost intelligence.</p>
          </div>
          <div className="cta-buttons">
            <button className="cta-btn">Professional Services</button>
            <button className="cta-btn">Managed Services</button>
            <button className="cta-btn">Build Your Own</button>
          </div>
          <div className="cta-right">
            <button onClick={() => navigate('/contact')} className="cta-connect">CONNECT NOW</button>
          </div>
        </div>
      </section>
    </>
  );
}