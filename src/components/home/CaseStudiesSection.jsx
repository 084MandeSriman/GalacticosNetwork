export default function CaseStudiesSection() {
  // ========== ILLUSIONS ONLY (IMAGES REMOVED) ==========
  // ========== ENHANCED ILLUSIONS WITH MORE DYNAMISM ==========
  const renderIllusion = (category) => {
    switch (category) {
      case "Cloud":
        return (
          <div className="illusion-cloud">
            <div className="wind-streak" style={{ top: "20%", animationDelay: "0s" }} />
            <div className="wind-streak" style={{ top: "40%", animationDelay: "0.4s" }} />
            <div className="wind-streak" style={{ top: "60%", animationDelay: "0.8s" }} />
            <div className="wind-streak" style={{ top: "80%", animationDelay: "1.2s" }} />
            <div className="cloud-puff" style={{ top: "30%", left: "10%" }} />
            <div className="cloud-puff" style={{ top: "70%", left: "70%" }} />
          </div>
        );
      case "SAP":
        return (
          <div className="illusion-sap">
            <div className="orbit-ring ring-outer" />
            <div className="orbit-ring ring-inner" />
            <div className="data-particle" style={{ top: "20%", left: "30%" }} />
            <div className="data-particle" style={{ top: "80%", left: "70%" }} />
            <div className="data-particle" style={{ top: "50%", left: "50%" }} />
          </div>
        );
      case "Hyperion":
        return (
          <div className="illusion-hyperion">
            <div className="matrix-rain" />
            <div className="cube-glow" />
          </div>
        );
      case "Automation":
        return (
          <div className="illusion-automation">
            <div className="radar-beam" />
            <div className="scan-line" />
          </div>
        );
      case "AI / ML":
        return (
          <div className="illusion-ai">
            <div className="neural-pulse" style={{ top: "20%", left: "20%", animationDelay: "0s" }} />
            <div className="neural-pulse" style={{ top: "70%", left: "80%", animationDelay: "1s" }} />
            <div className="neural-pulse" style={{ top: "40%", left: "60%", animationDelay: "0.5s" }} />
            <div className="neural-path" />
            <div className="neural-path-2" />
          </div>
        );
      case "Talent":
        return (
          <div className="illusion-talent">
            <div className="connection-dot" style={{ top: "30%", left: "20%" }} />
            <div className="connection-dot" style={{ top: "70%", left: "80%" }} />
            <div className="connection-dot" style={{ top: "50%", left: "40%" }} />
            <div className="connection-line" style={{ top: "30%", left: "20%" }} />
            <div className="connection-line" style={{ top: "70%", left: "80%" }} />
          </div>
        );
      default:
        return null;
    }
  };

  const caseStudies = [
    {
      title: "Cloud Migration & Cost Optimization",
      category: "Cloud",
      desc: "Migrated 200+ legacy apps to AWS/Azure for a global bank. Reduced infrastructure costs by 40% and improved scalability for peak trading hours.",
      link: "/case-study/digital-transformation",
    },
    {
      title: "SAP S/4HANA Transformation",
      category: "SAP",
      desc: "End-to-end SAP S/4HANA implementation for a multinational manufacturer. Real-time supply chain visibility and 99.9% system availability.",
      link: "/case-study/life-sciences-innovation",
    },
    {
      title: "Oracle Hyperion EPM Modernization",
      category: "Hyperion",
      desc: "Consolidated financial close and planning for a Fortune 500 retail group. Cut close time from 12 days to 6 and enabled driver-based forecasting.",
      link: "/case-study/financial-services-modernization",
    },
    {
      title: "Intelligent Automation for Healthcare",
      category: "Automation",
      desc: "Deployed UiPath bots for a healthcare payer. Automated 70% of claims processing, reduced manual errors by 85%, and saved $2M annually.",
      link: "/case-study/hedge-fund-platforms",
    },
    {
      title: "AI-Powered Demand Forecasting",
      category: "AI / ML",
      desc: "Built a predictive analytics platform for a leading retail chain. Improved forecast accuracy by 25% and reduced stockouts by 60%.",
      link: "/case-study/genai-enablement",
    },
    {
      title: "Strategic Staffing – 50+ Experts in 4 Weeks",
      category: "Talent",
      desc: "Rapidly sourced and onboarded 50+ certified SAP and cloud professionals for a global SI. Zero bench time, full client satisfaction.",
      link: "/case-study/smarter-business-solutions",
    },
  ];

  return (
    <section id="case-studies" className="case-section">
      <style>{`
        /* ========== GLOBAL SECTION STYLES ========== */
        .case-section {
          padding: 120px 24px;
          position: relative;
          background: linear-gradient(145deg, #0b1120 0%, #1a2234 100%);
          overflow: hidden;
          animation: sectionFadeIn 1s ease-out;
        }

        @keyframes sectionFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Enhanced animated background particles */
        .case-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 35%),
            radial-gradient(circle at 40% 80%, rgba(239, 68, 68, 0.08) 0%, transparent 40%);
          animation: bgPulse 12s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes bgPulse {
          0% { opacity: 0.4; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }

        /* Subtle noise overlay */
        .case-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          opacity: 0.15;
        }

        /* ========== TITLE STYLES ========== */
        .case-title {
          text-align: center;
          font-size: clamp(36px, 8vw, 56px);
          font-weight: 900;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #f0f4ff 0%, #c7d2fe 50%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          letter-spacing: -0.02em;
          animation: titleGlow 4s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(165, 180, 252, 0.3); }
          50% { text-shadow: 0 0 40px rgba(165, 180, 252, 0.6); }
        }

        .case-title::after {
          content: '';
          display: block;
          width: 120px;
          height: 4px;
          margin: 24px auto 0;
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #34d399);
          border-radius: 4px;
          animation: lineWidth 3s ease-in-out infinite alternate;
        }

        @keyframes lineWidth {
          0% { width: 80px; opacity: 0.6; }
          100% { width: 160px; opacity: 1; }
        }

        .case-subtitle {
          text-align: center;
          font-size: 18px;
          color: #9aa4bf;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
          position: relative;
          z-index: 2;
          animation: subtitleFade 1.2s ease-out 0.2s both;
        }

        @keyframes subtitleFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* ========== CARD GRID ========== */
        .case-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 5;
        }

        /* ========== CARD STYLES ========== */
        .case-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 2px solid rgba(99, 102, 241, 0.3);
          box-shadow: 
            0 20px 40px -10px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(99, 102, 241, 0.2) inset;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1);
          position: relative;
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          animation: cardAppear 0.8s cubic-bezier(0.2, 0.9, 0.4, 1) forwards;
        }

        /* Staggered animation */
        .case-card:nth-child(1) { animation-delay: 0.1s; }
        .case-card:nth-child(2) { animation-delay: 0.2s; }
        .case-card:nth-child(3) { animation-delay: 0.3s; }
        .case-card:nth-child(4) { animation-delay: 0.4s; }
        .case-card:nth-child(5) { animation-delay: 0.5s; }
        .case-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes cardAppear {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Gradient border effect on hover (improved) */
        .case-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: 32px;
          background: linear-gradient(145deg, rgba(255,255,255,0.4), rgba(99,102,241,0.4), rgba(16,185,129,0.4));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .case-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 40px 70px -10px rgba(0, 0, 0, 0.7),
            0 0 0 2px rgba(99, 102, 241, 0.6) inset,
            0 0 40px rgba(99, 102, 241, 0.5);
          border-color: rgba(99, 102, 241, 0.6);
          background: linear-gradient(135deg, rgba(40, 50, 75, 0.98) 0%, rgba(25, 35, 55, 0.98) 100%);
        }

        .case-card:hover::before {
          opacity: 1;
        }

        /* ========== IMAGE CONTAINER (WITHOUT IMAGES) ========== */
        .case-img-container {
          height: 240px;
          position: relative;
          background: linear-gradient(135deg, rgba(45, 70, 120, 0.6) 0%, rgba(60, 50, 100, 0.5) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.6s ease;
          border-bottom: 2px solid rgba(99, 102, 241, 0.2);
        }

        .case-card:hover .case-img-container {
          background: linear-gradient(135deg, rgba(55, 85, 140, 0.7) 0%, rgba(75, 65, 120, 0.6) 100%);
          border-bottom-color: rgba(99, 102, 241, 0.4);
        }

        /* ========== ILLUSIONS (full container) ========== */
        .illusion-cloud, .illusion-sap, .illusion-hyperion, 
        .illusion-automation, .illusion-ai, .illusion-talent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
          overflow: hidden;
        }

        /* Cloud illusions */
        .wind-streak {
          position: absolute;
          left: -20%;
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.7), rgba(167, 139, 250, 0.7), transparent);
          border-radius: 4px;
          animation: windFlow 2.2s infinite linear;
          filter: blur(1px);
        }

        @keyframes windFlow {
          0% { left: -20%; opacity: 0; }
          30% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }

        .cloud-puff {
          position: absolute;
          width: 40px;
          height: 20px;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(6px);
          animation: puffFloat 8s infinite alternate;
        }

        @keyframes puffFloat {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          100% { transform: translate(10px, -10px) scale(1.2); opacity: 0.6; }
        }

        /* SAP illusions */
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 2px solid transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: orbitRotate 6s infinite linear;
        }
        .ring-outer {
          width: 160px;
          height: 160px;
          border-top: 2px solid #60a5fa;
          border-bottom: 2px solid #a78bfa;
          box-shadow: 0 0 20px rgba(96,165,250,0.4);
        }
        .ring-inner {
          width: 100px;
          height: 100px;
          border-left: 2px solid #34d399;
          border-right: 2px solid #f87171;
          animation-duration: 4s;
          animation-direction: reverse;
        }
        @keyframes orbitRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .data-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #a78bfa;
          border-radius: 50%;
          box-shadow: 0 0 10px #a78bfa;
          animation: particlePulse 2s infinite alternate;
        }

        @keyframes particlePulse {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.4); }
        }

        /* Hyperion illusions */
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent 0%,
            rgba(245, 158, 11, 0.2) 10%,
            transparent 20%
          );
          animation: rainShift 3s infinite linear;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        @keyframes rainShift {
          0% { background-position: 0 0; }
          100% { background-position: 0 30px; }
        }

        .cube-glow {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle at 70% 70%, rgba(245,158,11,0.4), transparent 70%);
          filter: blur(15px);
          animation: glowPulse 3s infinite alternate;
        }

        @keyframes glowPulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.3); }
        }

        /* Automation illusions */
        .radar-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: conic-gradient(from 0deg, transparent, rgba(34,197,94,0.3), transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: radarSpin 3s infinite linear;
        }

        @keyframes radarSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          filter: blur(2px);
          animation: scanMove 2.5s infinite ease-in-out;
        }

        @keyframes scanMove {
          0% { left: -100%; top: 10%; }
          50% { left: 100%; top: 80%; }
          100% { left: -100%; top: 10%; }
        }

        /* AI / ML illusions */
        .neural-pulse {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #60a5fa;
          border-radius: 50%;
          box-shadow: 0 0 20px #60a5fa;
          animation: pulseRing 2s infinite;
        }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(96,165,250,0.7); }
          70% { box-shadow: 0 0 0 20px rgba(96,165,250,0); }
          100% { box-shadow: 0 0 0 0 rgba(96,165,250,0); }
        }

        .neural-path {
          position: absolute;
          top: 30%;
          left: 20%;
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #60a5fa, #a78bfa, transparent);
          transform: rotate(25deg);
          animation: pathGlow 3s infinite alternate;
        }

        .neural-path-2 {
          position: absolute;
          bottom: 20%;
          right: 10%;
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #a78bfa, #f472b6, transparent);
          transform: rotate(-15deg);
          animation: pathGlow 2.5s infinite alternate-reverse;
        }

        @keyframes pathGlow {
          0% { opacity: 0.2; filter: blur(1px); }
          100% { opacity: 0.8; filter: blur(2px); }
        }

        /* Talent illusions */
        .connection-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
          box-shadow: 0 0 15px #f59e0b;
          animation: dotPulse 2s infinite alternate;
        }

        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 1; }
        }

        .connection-line {
          position: absolute;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, transparent);
          animation: lineFlicker 1.5s infinite alternate;
        }

        @keyframes lineFlicker {
          0% { opacity: 0.2; width: 20px; }
          100% { opacity: 1; width: 60px; }
        }

        /* ========== CATEGORY BADGE ========== */
        .case-category {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          z-index: 20;
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .case-card:hover .case-category {
          background: rgba(99, 102, 241, 0.9);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
        }

        /* ========== CARD CONTENT ========== */
        .case-content {
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
          z-index: 10;
        }

        .case-content h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 14px;
          color: #f0f4ff;
          line-height: 1.4;
          transition: color 0.3s ease, transform 0.3s ease;
          letter-spacing: -0.01em;
        }

        .case-card:hover .case-content h3 {
          color: #ffffff;
          transform: translateX(6px);
        }

        .case-content p {
          font-size: 15px;
          line-height: 1.7;
          color: #cbd5e0;
          margin-bottom: 24px;
          flex-grow: 1;
          transition: color 0.3s ease;
        }

        .case-card:hover .case-content p {
          color: #e2e8f0;
        }

        .case-link {
          font-size: 15px;
          font-weight: 700;
          color: #60a5fa;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 2px solid rgba(96, 165, 250, 0.3);
          transition: all 0.3s ease;
          padding: 8px 0;
          position: relative;
          width: fit-content;
        }

        .case-link::after {
          content: "→";
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .case-link:hover {
          color: #93c5fd;
          border-bottom-color: #93c5fd;
        }

        .case-link:hover::after {
          transform: translateX(8px);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1100px) {
          .case-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
        }
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr; gap: 24px; }
          .case-title { font-size: 40px; }
          .case-subtitle { font-size: 16px; margin-bottom: 60px; }
        }
        @media (max-width: 640px) {
          .case-img-container { height: 200px; }
          .case-section { padding: 80px 20px; }
        }
        @media (max-width: 480px) {
          .case-img-container { height: 180px; }
          .case-title { font-size: 32px; }
        }
      `}</style>

      <h2 className="case-title">Customer Success Stories</h2>
      <p className="case-subtitle">
        Real transformations delivered across cloud, ERP, automation, AI, and talent solutions — enabled by our certified experts and offshore delivery excellence.
      </p>

      <div className="case-grid">
        {caseStudies.map((item) => (
          <div className="case-card" key={item.title}>
            <div className="case-img-container">
              {/* Images removed – only illusions remain */}
              {renderIllusion(item.category)}
              <span className="case-category">{item.category}</span>
            </div>
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="case-link" href={item.link}>
                Read case study
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}