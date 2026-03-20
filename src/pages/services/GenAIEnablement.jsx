import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function GenAIEnablement() {
  const navigate = useNavigate();
  const countersRef = useRef([]);
  const animatedRef = useRef([]);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Scroll animation observer for fade-up and other animations
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

  // Counter animation observer
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            let count = 0;
            const update = () => {
              const inc = target / 50;
              if (count < target) {
                count += inc;
                el.innerText = Math.round(count) + "%";
                requestAnimationFrame(update);
              } else {
                el.innerText = target + "%";
              }
            };
            update();
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => el && counterObserver.observe(el));
  }, []);

  // Hero canvas animation (interactive particles)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = 120;
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
          color: `hsl(${280 + Math.random() * 60}, 80%, 65%)`, // pink-purple range
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
        ctx.shadowColor = "rgba(200, 130, 255, 0.7)";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = "rgba(220, 180, 255, 0.15)";
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
    <section className="genai-forecasting">
      {/* Background Illusions */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="grid-pattern"></div>
      <div className="floating-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
          ></div>
        ))}
      </div>

      {/* HERO with canvas */}
      <div className="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <h1 className="hero-title">AI-Powered Demand Forecasting</h1>
          <p className="hero-subtitle">
            Predict demand with precision, optimize inventory, and unlock real-time supply chain intelligence
          </p>
        </div>
        <div className="hero-scroll">
          <span></span>
        </div>
      </div>

      <div className="container">
        {/* PARAGRAPH 1 */}
        <div
          className="content-block fade-up"
          ref={(el) => (animatedRef.current[0] = el)}
        >
          <p className="para para1">
            AI-powered demand forecasting enables retail and supply chain organizations to move beyond traditional planning models and adopt a predictive, data-driven approach to inventory and replenishment. By combining machine learning algorithms with real-time data from point-of-sale systems, promotions, seasonal trends, weather patterns, and customer behavior, enterprises gain highly accurate SKU-level forecasts across locations and channels. This intelligence eliminates stockouts, reduces excess inventory, and ensures optimal product availability while significantly improving working capital efficiency and operational agility in highly competitive markets.
          </p>
        </div>

        {/* PARAGRAPH 2 */}
        <div
          className="content-block fade-up"
          ref={(el) => (animatedRef.current[1] = el)}
        >
          <p className="para para2">
            The forecasting platform creates a connected ecosystem where insights flow seamlessly into ERP, warehouse management, and store systems, enabling automated replenishment, smarter allocation, and proactive decision-making. Advanced analytics dashboards empower planners with scenario simulations, demand sensing, and exception-based alerts, allowing organizations to respond instantly to market changes. This transformation not only enhances revenue and margin performance but also delivers a superior customer experience by ensuring the right product is available at the right place and time.
          </p>
        </div>

        {/* BULLET SECTION */}
        <div
          className="content-block fade-up"
          ref={(el) => (animatedRef.current[2] = el)}
        >
          <h2 className="section-title">Key Business Capabilities</h2>
          <ul className="animated-list">
            <li>SKU-level demand prediction across stores and digital channels</li>
            <li>Real-time demand sensing using external and internal data signals</li>
            <li>Automated replenishment and allocation planning</li>
            <li>Promotion and seasonal impact forecasting</li>
            <li>Exception-based planning with AI-driven alerts</li>
          </ul>
        </div>

        {/* TABLE SECTION */}
        <div
          className="content-block fade-up"
          ref={(el) => (animatedRef.current[3] = el)}
        >
          <h2 className="section-title">AI Forecasting Value Matrix</h2>
          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Technology Used</th>
                  <th>Business Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Demand Prediction</td>
                  <td>ML (XGBoost, LSTM)</td>
                  <td>Higher forecast accuracy</td>
                </tr>
                <tr>
                  <td>Data Integration</td>
                  <td>Cloud Data Lake</td>
                  <td>Unified planning view</td>
                </tr>
                <tr>
                  <td>Scenario Simulation</td>
                  <td>Advanced Analytics</td>
                  <td>Better decision making</td>
                </tr>
                <tr>
                  <td>Automated Replenishment</td>
                  <td>API Integration</td>
                  <td>Reduced stockouts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* METRICS */}
        <div
          className="metrics-container fade-up"
          ref={(el) => (animatedRef.current[4] = el)}
        >
          <h2 className="section-title">Business Impact</h2>
          <div className="metrics">
            <div className="metric-card">
              <div
                className="metric-value"
                ref={(el) => (countersRef.current[0] = el)}
                data-target="25"
              >
                0%
              </div>
              <div className="metric-label">Forecast Accuracy Improvement</div>
            </div>
            <div className="metric-card">
              <div
                className="metric-value"
                ref={(el) => (countersRef.current[1] = el)}
                data-target="60"
              >
                0%
              </div>
              <div className="metric-label">Inventory Reduction</div>
            </div>
            <div className="metric-card">
              <div
                className="metric-value"
                ref={(el) => (countersRef.current[2] = el)}
                data-target="99"
              >
                0%
              </div>
              <div className="metric-label">Order Fulfillment Rate</div>
            </div>
            <div className="metric-card">
              <div
                className="metric-value"
                ref={(el) => (countersRef.current[3] = el)}
                data-target="30"
              >
                0%
              </div>
              <div className="metric-label">Working Capital Efficiency</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="cta fade-up"
          ref={(el) => (animatedRef.current[5] = el)}
        >
          <h2>Turn Demand Signals into Business Growth</h2>
          <button className="cta-button" onClick={() => navigate("/contact")}>Talk to Our AI Experts</button>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .genai-forecasting {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(145deg, #0d0b1a 0%, #1a1035 50%, #2d1b4a 100%);
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #f0f0ff;
        }

        /* ========== BACKGROUND ILLUSIONS ========== */
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          z-index: 1;
          animation: orbFloat 40s infinite alternate ease-in-out;
        }
        .orb1 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #ff7b9c, #ff2e7d);
          top: -300px;
          left: -200px;
        }
        .orb2 {
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, #8a6de9, #4a2fbd);
          bottom: -400px;
          right: -300px;
          animation-delay: -15s;
        }
        .orb3 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #56ccf2, #2f80ed);
          top: 40%;
          left: 30%;
          animation-delay: -25s;
        }
        @keyframes orbFloat {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(150px, -120px) scale(1.3); }
        }

        .grid-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
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
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          animation: particleFloat 25s infinite linear;
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-300px) translateX(150px); opacity: 0; }
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
          background: linear-gradient(135deg, #1a0b2e 0%, #2f1b4e 100%);
        }
        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
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
          max-width: 800px;
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
          0% { text-shadow: 0 0 30px rgba(255,123,156,0.5); }
          100% { text-shadow: 0 0 60px rgba(138,109,233,0.8); }
        }

        /* ========== CONTAINER ========== */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 24px;
          position: relative;
          z-index: 20;
        }

        .section-title {
          font-size: 38px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 30px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: relative;
        }
        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ff7b9c, #8a6de9);
          margin: 15px auto 0;
          border-radius: 2px;
        }

        /* ========== CONTENT BLOCKS ========== */
        .content-block {
          margin-bottom: 60px;
        }

        /* Paragraph animations */
        .para {
          font-size: 18px;
          line-height: 1.9;
          color: #e0e0ff;
          margin-bottom: 30px;
          opacity: 0;
          transform-origin: left;
        }
        .fade-up.visible .para1 {
          animation: slideInLeft 1s ease forwards;
        }
        .fade-up.visible .para2 {
          animation: scaleIn 1s ease 0.1s forwards;
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Animated list */
        .animated-list {
          list-style: none;
          padding: 0;
        }
        .animated-list li {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          margin-bottom: 16px;
          padding: 18px 24px;
          border-radius: 40px;
          font-size: 17px;
          color: #f0f0ff;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-30px);
          animation: listItemPop 0.6s ease forwards;
          animation-play-state: paused;
        }
        .fade-up.visible .animated-list li {
          animation-play-state: running;
        }
        .animated-list li:nth-child(1) { animation-delay: 0.1s; }
        .animated-list li:nth-child(2) { animation-delay: 0.2s; }
        .animated-list li:nth-child(3) { animation-delay: 0.3s; }
        .animated-list li:nth-child(4) { animation-delay: 0.4s; }
        .animated-list li:nth-child(5) { animation-delay: 0.5s; }
        @keyframes listItemPop {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animated-list li:hover {
          transform: translateX(10px) scale(1.02);
          border-color: #ff7b9c;
          background: rgba(255,123,156,0.1);
        }

        /* Table styling */
        .table-wrapper {
          overflow-x: auto;
          border-radius: 24px;
          background: rgba(20, 10, 30, 0.6);
          backdrop-filter: blur(10px);
          padding: 20px;
          margin-top: 30px;
        }
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          color: #f0f0ff;
        }
        .styled-table th {
          background: rgba(0,0,0,0.4);
          padding: 18px 16px;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          border-bottom: 2px solid #8a6de9;
        }
        .styled-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: background 0.3s;
        }
        .styled-table tr {
          opacity: 0;
          transform: translateY(20px);
          animation: tableRowFade 0.5s ease forwards;
          animation-play-state: paused;
        }
        .fade-up.visible .styled-table tr {
          animation-play-state: running;
        }
        .styled-table tr:nth-child(1) { animation-delay: 0.1s; }
        .styled-table tr:nth-child(2) { animation-delay: 0.2s; }
        .styled-table tr:nth-child(3) { animation-delay: 0.3s; }
        .styled-table tr:nth-child(4) { animation-delay: 0.4s; }
        @keyframes tableRowFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .styled-table tr:hover td {
          background: rgba(138,109,233,0.15);
        }

        /* Metrics cards */
        .metrics-container {
          margin: 60px 0;
        }
        .metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 30px;
        }
        .metric-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          border-radius: 32px;
          padding: 30px 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s ease;
          animation: cardFloat 4s ease-in-out infinite;
        }
        .metric-card:nth-child(2) { animation-delay: 0.2s; }
        .metric-card:nth-child(3) { animation-delay: 0.4s; }
        .metric-card:nth-child(4) { animation-delay: 0.6s; }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .metric-card:hover {
          transform: scale(1.05) translateY(-10px);
          border-color: #8a6de9;
          box-shadow: 0 20px 30px -10px #8a6de9;
        }
        .metric-value {
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(145deg, #ff7b9c, #8a6de9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .metric-label {
          font-size: 16px;
          color: #d0d0ff;
          font-weight: 500;
        }

        /* CTA */
        .cta {
          text-align: center;
          padding: 60px 20px;
          margin-top: 40px;
        }
        .cta h2 {
          color: white;
          font-size: 42px;
          margin-bottom: 30px;
          animation: ctaGlow 2s infinite alternate;
        }
        @keyframes ctaGlow {
          from { text-shadow: 0 0 20px #ff7b9c; }
          to { text-shadow: 0 0 40px #8a6de9; }
        }
        .cta-button {
          background: linear-gradient(145deg, #ff7b9c, #8a6de9);
          color: white;
          border: none;
          padding: 18px 50px;
          border-radius: 60px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 15px 30px -8px #8a6de9;
          animation: buttonPop 0.8s ease-out;
        }
        .cta-button:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 25px 40px -8px #ff7b9c;
        }
        @keyframes buttonPop {
          0% { opacity: 0; transform: scale(0.5); }
          80% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Fade-up base */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .metrics {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .metrics {
            grid-template-columns: 1fr;
          }
          .hero-title { font-size: 40px; }
          .section-title { font-size: 32px; }
          .cta h2 { font-size: 32px; }
          .cta-button { padding: 16px 40px; font-size: 18px; }
        }
      `}</style>
    </section>
  );
}