import React, { useEffect, useRef } from "react";

export default function FinancialServicesModernization() {
  const animatedRef = useRef([]);
  // Canvas and mouse refs for hero animation
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Hero canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = 100;
    let animationFrame;

    const resize = () => {
      const hero = document.querySelector(".hero");
      if (hero) {
        width = hero.offsetWidth;
        height = hero.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 3 + 1.5,
          color: `hsl(${260 + Math.random() * 60}, 80%, 65%)`, // purple-blue range
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Mouse interaction
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - dist) / 1500;
          p.x += Math.cos(angle) * force * 15;
          p.y += Math.sin(angle) * force * 15;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(180, 130, 255, 0.7)";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = "rgba(200, 180, 255, 0.15)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const init = () => {
      resize();
      createParticles();
      drawParticles();
    };

    init();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="epm-modernization">
      {/* Animated background elements */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="grid-pattern"></div>
      <div className="floating-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
          }}></div>
        ))}
      </div>

      {/* HERO with canvas */}
      <div className="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <h1 className="hero-title">Oracle Hyperion EPM Modernization</h1>
          <p className="hero-subtitle">Transform finance into a real-time, insight-driven powerhouse</p>
        </div>
        <div className="hero-scroll">
          <span></span>
        </div>
      </div>

      <div className="container">
        {/* OVERVIEW - each paragraph gets its own animation */}
        <div className="overview">
          <h2 className="section-title">Strategic Overview</h2>
          <p className="para para1" ref={(el) => (animatedRef.current[0] = el)}>
            Modern finance organizations require a unified, intelligent, and scalable performance management platform that delivers real-time insights across planning, consolidation, reporting, and analytics. Oracle Hyperion EPM modernization enables enterprises to transition from fragmented, on-premise systems to a cloud-native environment that supports dynamic forecasting, automated financial close, and data-driven decision-making.
          </p>
          <p className="para para2" ref={(el) => (animatedRef.current[1] = el)}>
            By moving to Oracle EPM Cloud, organizations eliminate infrastructure complexity, reduce operational costs, and establish a standardized data model that improves governance and transparency. Finance teams gain the ability to run scenario simulations, collaborate in real time, and align strategic planning with actual business performance.
          </p>
          <p className="para para3" ref={(el) => (animatedRef.current[2] = el)}>
            This transformation empowers CFOs to shift from reactive reporting to proactive strategy by leveraging predictive insights, AI-driven analytics, and self-service dashboards that accelerate enterprise-wide planning cycles.
          </p>
        </div>

        {/* WHY MODERNIZE */}
        <div className="grid fade-up" ref={(el) => (animatedRef.current[3] = el)}>
          {[
            "Real-time planning & forecasting",
            "Faster financial close cycles",
            "Unified enterprise data model",
            "Lower total cost of ownership"
          ].map((item, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{["📈", "⏱️", "🗂️", "💰"][i]}</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>

        {/* ROADMAP TABLE */}
        <div className="fade-up" ref={(el) => (animatedRef.current[4] = el)}>
          <h2 className="section-title">EPM Transformation Roadmap</h2>
          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Key Activities</th>
                  <th>Business Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Assess</td><td>System audit, data quality analysis</td><td>Clear modernization strategy</td></tr>
                <tr><td>Design</td><td>Future-state planning models</td><td>Standardized processes</td></tr>
                <tr><td>Migrate</td><td>Cloud deployment & validation</td><td>Scalable architecture</td></tr>
                <tr><td>Optimize</td><td>Automation & analytics enablement</td><td>Continuous performance improvement</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CAPABILITIES TABLE */}
        <div className="fade-up" ref={(el) => (animatedRef.current[5] = el)}>
          <h2 className="section-title">Our EPM Capabilities</h2>
          <div className="capabilities-grid">
            <div className="cap-card">
              <div className="cap-icon">📊</div>
              <h3>Planning & Budgeting</h3>
              <p>Driver-based and rolling forecasts</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon">🔄</div>
              <h3>Financial Consolidation</h3>
              <p>Automated close & compliance</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon">📉</div>
              <h3>Profitability & Cost Management</h3>
              <p>Granular financial visibility</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon">📈</div>
              <h3>Analytics & Reporting</h3>
              <p>Real-time executive dashboards</p>
            </div>
          </div>
        </div>

        {/* BUSINESS IMPACT */}
        <div className="impact fade-up" ref={(el) => (animatedRef.current[6] = el)}>
          <h2 className="section-title">Business Impact</h2>
          <p className="impact-text">
            Organizations that modernize their Hyperion landscape experience accelerated close cycles, improved forecast accuracy, and significantly enhanced collaboration between finance and business functions. The unified EPM platform becomes a single source of truth that enables faster strategic decisions and drives measurable enterprise value.
          </p>
          <div className="metrics">
            <div className="metric"><span className="metric-value">50%</span> Faster Close</div>
            <div className="metric"><span className="metric-value">40%</span> Cost Reduction</div>
            <div className="metric"><span className="metric-value">3×</span> Planning Speed</div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta fade-up" ref={(el) => (animatedRef.current[7] = el)}>
          <h2>Modernize Your EPM Landscape</h2>
          <button className="cta-button">Talk to Our EPM Experts</button>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .epm-modernization {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(145deg, #0a0f1e 0%, #1a1f35 50%, #1e2a44 100%);
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* ========== BACKGROUND ILLUSIONS ========== */
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 1;
          animation: orbFloat 30s infinite alternate ease-in-out;
        }
        .orb1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ff7e5f, #feb47b);
          top: -200px;
          left: -200px;
        }
        .orb2 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #6a11cb, #2575fc);
          bottom: -300px;
          right: -200px;
          animation-delay: -10s;
        }
        .orb3 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #f093fb, #f5576c);
          top: 40%;
          right: 10%;
          animation-delay: -20s;
        }
        @keyframes orbFloat {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, -80px) scale(1.2); }
        }

        .grid-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 2;
        }

        .floating-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }
        .particle {
          position: absolute;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          animation: particleFloat 15s infinite linear;
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-200px) translateX(100px); opacity: 0; }
        }

        /* ========== HERO SECTION ========== */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          z-index: 10;
          overflow: hidden;
          background: linear-gradient(135deg, #0b0f20 0%, #1e2a5a 100%); /* New deeper gradient */
        }
        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; /* Allow mouse events to pass through to the underlying mouse handler? Actually we need mouse move on canvas, but canvas is pointer-events: none? We want mouse to interact with particles, so canvas should capture mouse. But then the scroll indicator and content would be blocked. Better to set pointer-events: none on canvas and still track mouse on window? The current implementation uses window mousemove, so it's fine. */
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 900px;
          padding: 40px;
        }
        .hero-title {
          font-size: clamp(40px, 8vw, 72px);
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5);
          animation: titleGlow 3s infinite alternate, slideDown 1s ease-out;
        }
        .hero-subtitle {
          font-size: clamp(18px, 3vw, 26px);
          opacity: 0.9;
          max-width: 700px;
          padding: 0 20px;
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2.5s infinite;
          z-index: 5;
        }
        .hero-scroll span {
          display: block;
          width: 26px;
          height: 42px;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 13px;
          position: relative;
        }
        .hero-scroll span::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          width: 4px;
          height: 10px;
          background: white;
          border-radius: 2px;
          transform: translateX(-50%);
          animation: scrollMove 2s infinite;
        }
        @keyframes scrollMove {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(15px); opacity: 0.3; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-15px); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes titleGlow {
          0% { text-shadow: 0 0 30px rgba(106,17,203,0.5); }
          100% { text-shadow: 0 0 60px rgba(37,117,252,0.8); }
        }

        /* ========== CONTAINER & SECTIONS ========== */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          position: relative;
          z-index: 20;
        }

        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #f0f4ff;
          margin-bottom: 40px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
          position: relative;
        }
        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #f093fb, #f5576c);
          margin: 15px auto 0;
          border-radius: 2px;
        }

        /* ========== OVERVIEW PARAGRAPHS ========== */
        .overview {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          padding: 50px;
          margin-bottom: 60px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .para {
          font-size: 18px;
          line-height: 1.8;
          color: #d1d5db;
          margin-bottom: 30px;
          opacity: 0;
          transform-origin: left;
        }
        .para.visible {
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
        .para1.visible { animation-name: slideInLeft; }
        .para2.visible { animation-name: scaleIn; animation-delay: 0.1s; }
        .para3.visible { animation-name: rotateIn; animation-delay: 0.2s; }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes rotateIn {
          0% { opacity: 0; transform: rotate(-5deg) translateY(20px); }
          100% { opacity: 1; transform: rotate(0) translateY(0); }
        }

        /* ========== GRID CARDS ========== */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 60px 0;
        }
        .card {
          background: rgba(30, 40, 60, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 28px;
          padding: 35px 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s ease;
          animation: cardPop 0.6s ease-out backwards;
        }
        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }
        .card:nth-child(4) { animation-delay: 0.4s; }
        @keyframes cardPop {
          0% { opacity: 0; transform: scale(0.7) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #f093fb;
          box-shadow: 0 20px 40px -12px #f093fb;
        }
        .card-icon {
          font-size: 48px;
          margin-bottom: 15px;
          animation: iconWobble 3s infinite;
        }
        @keyframes iconWobble {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(10deg) scale(1.1); }
          66% { transform: rotate(-10deg) scale(1.1); }
        }
        .card h3 {
          font-size: 18px;
          color: #f0f4ff;
          font-weight: 600;
        }

        /* ========== TABLES ========== */
        .table-wrapper {
          overflow-x: auto;
          margin: 30px 0 60px;
          border-radius: 24px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          padding: 20px;
        }
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          color: #e0e7ff;
        }
        .styled-table th {
          background: rgba(0,0,0,0.3);
          padding: 18px 16px;
          font-weight: 700;
          font-size: 18px;
          color: #f0f4ff;
          border-bottom: 2px solid #f093fb;
        }
        .styled-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: background 0.3s;
        }
        .styled-table tr:hover td {
          background: rgba(240,147,251,0.1);
        }

        /* ========== CAPABILITIES GRID ========== */
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 40px 0;
        }
        .cap-card {
          background: rgba(20, 30, 50, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 28px;
          padding: 35px 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s ease;
          animation: capFlip 0.7s ease-out backwards;
        }
        .cap-card:nth-child(1) { animation-delay: 0.1s; }
        .cap-card:nth-child(2) { animation-delay: 0.2s; }
        .cap-card:nth-child(3) { animation-delay: 0.3s; }
        .cap-card:nth-child(4) { animation-delay: 0.4s; }
        @keyframes capFlip {
          0% { opacity: 0; transform: rotateY(90deg); }
          100% { opacity: 1; transform: rotateY(0); }
        }
        .cap-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #6a11cb;
          box-shadow: 0 20px 40px -12px #6a11cb;
        }
        .cap-icon {
          font-size: 48px;
          margin-bottom: 15px;
          animation: iconPulse 2s infinite;
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .cap-card h3 {
          font-size: 20px;
          color: #f0f4ff;
          margin-bottom: 10px;
        }
        .cap-card p {
          font-size: 14px;
          color: #a0aec0;
          line-height: 1.6;
        }

        /* ========== IMPACT SECTION ========== */
        .impact {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          padding: 50px;
          margin: 60px 0;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .impact-text {
          font-size: 18px;
          line-height: 1.8;
          color: #d1d5db;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 40px;
        }
        .metrics {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }
        .metric {
          background: linear-gradient(145deg, #ff7e5f, #feb47b);
          padding: 25px 40px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 20px;
          box-shadow: 0 15px 30px -10px #feb47b;
          animation: metricFloat 3s ease-in-out infinite;
        }
        .metric:nth-child(2) { animation-delay: 0.2s; background: linear-gradient(145deg, #6a11cb, #2575fc); }
        .metric:nth-child(3) { animation-delay: 0.4s; background: linear-gradient(145deg, #f093fb, #f5576c); }
        @keyframes metricFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .metric-value {
          font-size: 32px;
          font-weight: 800;
          display: block;
          margin-bottom: 5px;
        }

        /* ========== CTA ========== */
        .cta {
          text-align: center;
          background: linear-gradient(145deg, #0f172a, #1e293b);
          border-radius: 60px;
          padding: 70px 40px;
          margin-top: 80px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }
        .cta h2 {
          color: white;
          font-size: 42px;
          margin-bottom: 30px;
          animation: ctaGlow 2s infinite alternate;
        }
        @keyframes ctaGlow {
          from { text-shadow: 0 0 20px #f093fb; }
          to { text-shadow: 0 0 40px #f5576c; }
        }
        .cta-button {
          background: linear-gradient(145deg, #f093fb, #f5576c);
          color: white;
          border: none;
          padding: 18px 50px;
          border-radius: 60px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 15px 30px -8px #f5576c;
          animation: buttonPop 0.8s ease-out;
        }
        .cta-button:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 25px 40px -8px #f093fb;
        }
        @keyframes buttonPop {
          0% { opacity: 0; transform: scale(0.5); }
          80% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* ========== FADE-UP BASE ========== */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 900px) {
          .grid, .capabilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .grid, .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .hero-title { font-size: 40px; }
          .section-title { font-size: 32px; }
          .metrics { gap: 20px; }
          .metric { padding: 15px 25px; font-size: 16px; }
          .metric-value { font-size: 24px; }
          .cta { padding: 50px 20px; }
          .cta h2 { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}