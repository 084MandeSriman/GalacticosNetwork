export default function SmarterBusinessSolutions() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 30%, #2d3b4f 70%, #1e3a5f 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        /* ========== GLOBAL ANIMATIONS ========== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
          66% { transform: translateY(10px) translateX(-10px) rotate(-2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.7); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes businessRain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(139, 92, 246, 0.8); }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        @keyframes moveGrid {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(30px); }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }

        /* ========== BACKGROUND LAYERS ========== */
        .business-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .rain-word {
          position: absolute;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #3b82f6;
          opacity: 0.1;
          animation: businessRain 20s linear infinite;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveGrid 20s linear infinite alternate;
          z-index: 0;
          pointer-events: none;
        }
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 92, 246, 0.4);
          border-radius: 50%;
          animation: particleFloat 12s infinite;
        }

        /* ========== HERO SECTION WITH ENHANCED ILLUSIONS ========== */
        .consulting-hero {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          background: linear-gradient(135deg, #0a1a3a, #1e3a8a, #3b5b9d, #2d4b7a);
          background-size: 300% 300%;
          animation: gradientShift 15s ease infinite;
          border-bottom: 1px solid rgba(59,130,246,0.3);
        }

        /* 3D Perspective Grid Floor */
        .hero-3d-floor {
          position: absolute;
          bottom: -200px;
          left: -10%;
          width: 120%;
          height: 400px;
          background: repeating-linear-gradient(
            45deg,
            rgba(59,130,246,0.1) 0px,
            rgba(59,130,246,0.1) 2px,
            transparent 2px,
            transparent 10px
          );
          transform: perspective(500px) rotateX(60deg);
          transform-origin: bottom;
          animation: pulse 6s infinite;
          z-index: 1;
        }

        /* Floating geometric shapes */
        .hero-shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3));
          border-radius: 50%;
          filter: blur(40px);
          z-index: 1;
        }
        .hero-shape1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -50px;
          animation: float 14s infinite alternate;
        }
        .hero-shape2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: -50px;
          background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3));
          animation: float 12s infinite alternate-reverse;
        }
        .hero-shape3 {
          width: 200px;
          height: 200px;
          top: 30%;
          left: 20%;
          background: radial-gradient(circle, rgba(6,182,212,0.4), transparent);
          filter: blur(30px);
          animation: pulse 8s infinite;
        }

        /* Floating icons / elements */
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        .floating-elem {
          position: absolute;
          font-size: 28px;
          color: rgba(255,255,255,0.3);
          animation: float 15s infinite;
          text-shadow: 0 0 20px rgba(59,130,246,0.5);
        }
        .floating-elem:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .floating-elem:nth-child(2) { top: 70%; left: 85%; animation-delay: 2s; }
        .floating-elem:nth-child(3) { top: 40%; left: 70%; animation-delay: 4s; }
        .floating-elem:nth-child(4) { top: 80%; left: 20%; animation-delay: 1s; }
        .floating-elem:nth-child(5) { top: 20%; left: 80%; animation-delay: 3s; }

        /* Animated connecting lines */
        .connection-lines svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.2;
        }
        .connection-lines path {
          stroke: #3b82f6;
          stroke-width: 1;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 20s linear forwards infinite;
        }

        /* Hero content */
        .consulting-hero-content {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 1200px;
          width: 100%;
          padding: 0 24px;
          color: #ffffff;
          z-index: 5;
          text-align: center;
        }
        .consulting-tag {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 40px;
          letter-spacing: 2px;
          animation: pulse 3s infinite;
          color: #fff;
        }
        .hero-title {
          font-size: 62px;
          font-weight: 900;
          line-height: 1.2;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          max-width: 1000px;
          margin: 0 auto;
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid #3b82f6;
          animation: typewriter 4s steps(40, end) forwards, blink 0.75s step-end infinite;
          width: 0;
          background: linear-gradient(45deg, #fff, #a5f3fc, #c7d2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ========== WRAPPER & BLOCKS ========== */
        .consulting-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 24px 40px;
          position: relative;
          z-index: 2;
        }
        .consulting-block {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(15px);
          border: 1px solid;
          border-radius: 32px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
        }
        .consulting-block::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(59,130,246,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
          pointer-events: none;
        }
        .consulting-block:hover::before {
          transform: translateX(100%);
        }

        /* Section-specific styling with new palette */
        .consulting-block:nth-child(1) { border-color: #3b82f6; background: linear-gradient(145deg, rgba(59,130,246,0.1), rgba(15,23,42,0.8)); }
        .consulting-block:nth-child(2) { border-color: #8b5cf6; background: linear-gradient(145deg, rgba(139,92,246,0.1), rgba(15,23,42,0.8)); }
        .consulting-block:nth-child(3) { border-color: #06b6d4; background: linear-gradient(145deg, rgba(6,182,212,0.1), rgba(15,23,42,0.8)); }
        .consulting-block:nth-child(4) { border-color: #f97316; background: linear-gradient(145deg, rgba(249,115,22,0.1), rgba(15,23,42,0.8)); }
        .consulting-block:nth-child(5) { border-color: #10b981; background: linear-gradient(145deg, rgba(16,185,129,0.1), rgba(15,23,42,0.8)); }
        .consulting-block:nth-child(6) { border-color: #ec4899; background: linear-gradient(145deg, rgba(236,72,153,0.1), rgba(15,23,42,0.8)); }

        .consulting-block:nth-child(1):hover { box-shadow: 0 35px 60px -15px rgba(59,130,246,0.5); }
        .consulting-block:nth-child(2):hover { box-shadow: 0 35px 60px -15px rgba(139,92,246,0.5); }
        .consulting-block:nth-child(3):hover { box-shadow: 0 35px 60px -15px rgba(6,182,212,0.5); }
        .consulting-block:nth-child(4):hover { box-shadow: 0 35px 60px -15px rgba(249,115,22,0.5); }
        .consulting-block:nth-child(5):hover { box-shadow: 0 35px 60px -15px rgba(16,185,129,0.5); }
        .consulting-block:nth-child(6):hover { box-shadow: 0 35px 60px -15px rgba(236,72,153,0.5); }

        .consulting-block h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #fff;
          letter-spacing: -0.5px;
          border-left: 6px solid;
          padding-left: 20px;
        }
        .consulting-block:nth-child(1) h2 { border-left-color: #3b82f6; }
        .consulting-block:nth-child(2) h2 { border-left-color: #8b5cf6; }
        .consulting-block:nth-child(3) h2 { border-left-color: #06b6d4; }
        .consulting-block:nth-child(4) h2 { border-left-color: #f97316; }
        .consulting-block:nth-child(5) h2 { border-left-color: #10b981; }
        .consulting-block:nth-child(6) h2 { border-left-color: #ec4899; }

        .consulting-block p {
          font-size: 17px;
          line-height: 1.8;
          color: #e2e8f0;
          margin-bottom: 20px;
        }
        .consulting-list {
          padding-left: 0;
          list-style: none;
        }
        .consulting-list li {
          font-size: 16px;
          color: #e2e8f0;
          margin-bottom: 14px;
          padding-left: 28px;
          position: relative;
        }
        .consulting-list li::before {
          content: "▹";
          font-size: 20px;
          position: absolute;
          left: 0;
          top: -2px;
        }
        .consulting-block:nth-child(2) .consulting-list li::before { color: #8b5cf6; }
        .consulting-block:nth-child(3) .consulting-list li::before { color: #06b6d4; }
        .consulting-block:nth-child(4) .consulting-list li::before { color: #f97316; }
        .consulting-block:nth-child(5) .consulting-list li::before { color: #10b981; }
        .consulting-block:nth-child(6) .consulting-list li::before { color: #ec4899; }

        .consulting-highlight {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          padding: 12px 24px;
          border-radius: 60px;
          display: inline-block;
          border: 1px solid;
        }
        .consulting-block:nth-child(1) .consulting-highlight { background: rgba(59,130,246,0.2); border-color: #3b82f6; color: #3b82f6; }
        .consulting-block:nth-child(2) .consulting-highlight { background: rgba(139,92,246,0.2); border-color: #8b5cf6; color: #8b5cf6; }
        .consulting-block:nth-child(3) .consulting-highlight { background: rgba(6,182,212,0.2); border-color: #06b6d4; color: #06b6d4; }

        .consulting-check {
          list-style: none;
          padding-left: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }
        .consulting-check li {
          font-size: 16px;
          color: #e2e8f0;
          margin-bottom: 0;
          padding: 16px 20px;
          background: rgba(255,255,255,0.05);
          border-radius: 16px;
          border: 1px solid;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }
        .consulting-check li:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(5px);
        }
        .consulting-block:nth-child(4) .consulting-check li { border-color: #f97316; }
        .consulting-block:nth-child(5) .consulting-check li { border-color: #10b981; }
        .consulting-check li::before {
          content: "✓";
          font-weight: 700;
          margin-right: 12px;
          font-size: 18px;
        }
        .consulting-block:nth-child(4) .consulting-check li::before { color: #f97316; }
        .consulting-block:nth-child(5) .consulting-check li::before { color: #10b981; }

        /* Stats grid */
        .stats-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 24px;
          margin: 50px 0;
        }
        .stat-item {
          flex: 1 1 180px;
          background: rgba(15,23,42,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 24px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.4s;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .stat-item:nth-child(1) { animation-delay: 0.2s; }
        .stat-item:nth-child(2) { animation-delay: 0.4s; }
        .stat-item:nth-child(3) { animation-delay: 0.6s; }
        .stat-item:nth-child(4) { animation-delay: 0.8s; }
        .stat-item:hover {
          transform: scale(1.05);
          border-color: #3b82f6;
          box-shadow: 0 0 30px rgba(59,130,246,0.3);
        }
        .stat-number {
          font-size: 42px;
          font-weight: 900;
          color: #3b82f6;
          line-height: 1.2;
        }
        .stat-label {
          font-size: 15px;
          color: #a0aec0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Metrics terminal */
        .metrics-terminal {
          background: #0f172a;
          border-radius: 20px;
          border: 1px solid #3b82f6;
          overflow: hidden;
          margin: 50px 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          animation: glow 4s infinite;
        }
        .terminal-header {
          background: #1e293b;
          padding: 16px 20px;
          display: flex;
          gap: 10px;
          align-items: center;
          border-bottom: 1px solid #334155;
        }
        .terminal-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
        .terminal-title {
          color: #9ca3af;
          font-size: 14px;
          margin-left: 12px;
          font-family: 'Fira Code', monospace;
        }
        .terminal-body {
          padding: 28px;
          font-family: 'Fira Code', monospace;
          color: #b0d4d0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        .metric-line {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .metric-key {
          color: #3b82f6;
          font-size: 15px;
        }
        .metric-value {
          color: #fff;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .metric-unit {
          color: #8b5cf6;
          font-size: 14px;
        }

        /* Back link */
        .consulting-back {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 80px;
          text-align: center;
        }
        .consulting-back a {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 600;
          padding: 14px 32px;
          border: 2px solid #3b82f6;
          border-radius: 50px;
          transition: all 0.3s;
          display: inline-block;
          background: rgba(59,130,246,0.1);
          backdrop-filter: blur(5px);
        }
        .consulting-back a:hover {
          background: #3b82f6;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(59,130,246,0.4);
        }
      `}</style>

      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="business-rain">
        {['STRATEGY', 'SAP', 'CLOUD', 'AI', 'TRANSFORMATION', 'SCALING', 'AGILE', 'INNOVATION', 'ROI', 'EFFICIENCY', 'GROWTH', 'ANALYTICS', 'AUTOMATION', 'GLOBAL', 'DELIVERY'].map((word, i) => (
          <div key={i} className="rain-word" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 15}s`, animationDuration: `${12 + Math.random() * 12}s`, fontSize: `${12 + Math.random() * 12}px`, opacity: 0.07, color: '#3b82f6' }}>
            {word}
          </div>
        ))}
      </div>
      <div className="grid-overlay"></div>
      <div className="particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="particle" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s`, animationDuration: `${5 + Math.random() * 10}s`, background: i % 2 ? '#8b5cf6' : '#3b82f6' }}></div>
        ))}
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="consulting-hero">
        {/* 3D floor */}
        <div className="hero-3d-floor"></div>

        {/* Blurred shapes */}
        <div className="hero-shape hero-shape1"></div>
        <div className="hero-shape hero-shape2"></div>
        <div className="hero-shape hero-shape3"></div>

        {/* Connection lines (SVG) */}
        <div className="connection-lines">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.2" />
            <path d="M0,400 Q400,250 800,400 T1200,400" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.2" />
            <path d="M0,200 Q200,350 500,200 T1200,200" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.2" />
          </svg>
        </div>

        {/* Floating icons */}
        <div className="floating-elements">
          <div className="floating-elem">📊</div>
          <div className="floating-elem">⚙️</div>
          <div className="floating-elem">📈</div>
          <div className="floating-elem">💡</div>
          <div className="floating-elem">🌐</div>
          <div className="floating-elem">📱</div>
          <div className="floating-elem">🔮</div>
          <div className="floating-elem">🚀</div>
        </div>

        <div className="consulting-hero-content">
          <span className="consulting-tag">📄 Case Study</span>
          <h1 className="hero-title">Strategic Staffing</h1>
        </div>
      </div>

      {/* ===== STATS SECTION ===== */}
      <div className="consulting-wrapper" style={{ paddingTop: '40px' }}>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Experts Deployed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Weeks</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Skill Match</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Bench Time</div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT BLOCKS ===== */}
      <div className="consulting-wrapper">

        {/* OVERVIEW */}
        <div className="consulting-block">
          <h2>Overview</h2>
          <p>
            A global system integrator required rapid scaling of its delivery
            capacity for a large SAP transformation program. The engagement
            demanded highly skilled consultants across multiple technologies
            within an aggressive timeline while ensuring project continuity and
            delivery excellence.
          </p>
          <p>Galacticos Network
             enabled the client to deploy <strong>50+ certified SAP and cloud
            experts in just four weeks</strong>, ensuring immediate productivity,
            zero bench time, and seamless integration into global delivery teams.
          </p>
        </div>

        {/* CLIENT CHALLENGE */}
        <div className="consulting-block">
          <h2>Client Challenge</h2>
          <ul className="consulting-list">
            <li>Urgent need for niche SAP and cloud skill sets</li>
            <li>Very limited onboarding timeline</li>
            <li>Risk of program delays due to talent shortage</li>
            <li>Requirement for project-ready resources from day one</li>
            <li>Global delivery alignment across multiple workstreams</li>
          </ul>
        </div>

        {/* APPROACH */}
        <div className="consulting-block">
          <h2>Our Strategic Staffing Approach</h2>
          <p className="consulting-highlight">
            A rapid, scalable, and quality-driven talent deployment model.
          </p>
          <ul className="consulting-list">
            <li>Pre-built talent pool for SAP & cloud technologies</li>
            <li>AI-powered screening and technical validation</li>
            <li>Parallel sourcing to accelerate hiring cycles</li>
            <li>Fast-track interview and onboarding process</li>
            <li>Dedicated deployment governance</li>
          </ul>
        </div>

        {/* DEPLOYMENT MODEL */}
        <div className="consulting-block">
          <h2>Talent Deployment Model</h2>
          <p>
            Each consultant was mapped to a specific program track to ensure
            immediate productivity and business continuity. Our structured
            onboarding enabled seamless collaboration with distributed teams.
          </p>
          <ul className="consulting-check">
            <li>50+ consultants deployed in 4 weeks</li>
            <li>100% skill matrix fulfillment</li>
            <li>Zero bench time</li>
            <li>Immediate project readiness</li>
          </ul>
        </div>

        {/* BUSINESS IMPACT */}
        <div className="consulting-block">
          <h2>Business Impact</h2>
          <ul className="consulting-check">
            <li>60% reduction in hiring cycle time</li>
            <li>Accelerated transformation program delivery</li>
            <li>Improved delivery velocity</li>
            <li>High client satisfaction</li>
            <li>Scalable model for future demand</li>
          </ul>
        </div>

        {/* WHY Galacticos Network */}
        <div className="consulting-block">
          <h2>Why Galacticos Network</h2>
          <p>
            Our strategic staffing capability combines deep technology expertise,
            a global talent network, and a proven rapid deployment framework.
            We help enterprises scale delivery teams on demand while ensuring
            speed, quality, and business continuity.
          </p>
        </div>

        {/* METRICS TERMINAL */}
        <div className="metrics-terminal">
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: '#ff5f56' }} />
            <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <div className="terminal-dot" style={{ background: '#27c93f' }} />
            <span className="terminal-title">deployment-summary.log</span>
          </div>
          <div className="terminal-body">
            <div className="metric-line">
              <span className="metric-key">▶ Experts deployed</span>
              <span className="metric-value">50+ <span className="metric-unit">consultants</span></span>
            </div>
            <div className="metric-line">
              <span className="metric-key">▶ Time to deploy</span>
              <span className="metric-value">4 <span className="metric-unit">weeks</span></span>
            </div>
            <div className="metric-line">
              <span className="metric-key">▶ Skill match rate</span>
              <span className="metric-value">100<span className="metric-unit">%</span></span>
            </div>
            <div className="metric-line">
              <span className="metric-key">▶ Bench time</span>
              <span className="metric-value">0 <span className="metric-unit">days</span></span>
            </div>
            <div className="metric-line">
              <span className="metric-key">▶ Hiring cycle reduction</span>
              <span className="metric-value">60<span className="metric-unit">%</span></span>
            </div>
            <div className="metric-line">
              <span className="metric-key">▶ Client satisfaction</span>
              <span className="metric-value">98<span className="metric-unit">%</span></span>
            </div>
          </div>
        </div>

      </div>

      {/* BACK LINK */}
     
    </div>
  );
}