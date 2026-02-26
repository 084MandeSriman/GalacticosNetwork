import React, { useEffect, useRef } from "react";

export default function DigitalTransformation() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = 120; // increased for richness
    let animationFrame;
    let hue = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 3 + 1.5,
          hue: Math.random() * 360,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Slowly shift hue for color cycle
      hue = (hue + 0.2) % 360;

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

        // Draw particle with shifting color
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${(p.hue + hue) % 360}, 80%, 65%)`;
        ctx.shadowColor = `hsl(${(p.hue + hue) % 360}, 80%, 65%)`;
        ctx.shadowBlur = 15;
        ctx.fill();
      });

      // Draw connections with subtle lines
      ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.15)`;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
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
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    createParticles();
    drawParticles();

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
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <canvas ref={canvasRef} className="hero-canvas" />
        {/* optional background image overlay */}
        <div className="hero-background" />

        {/* Animated background orbs with enhanced colors */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="hero-content">
          <h1 className="glitch" data-text="Cloud Cost Optimization">Cloud Cost Optimization</h1>
          <h2 className="hero-subtitle">Secure, scalable and smart cloud migration for enterprise-grade savings</h2>
          <p>Accelerate migration. Optimize cost. Maximize performance.</p>
          <button className="hero-cta">Get a Free Assessment</button>
          <div className="hero-scroll-indicator">
            <span></span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="content">
        {/* GROUP: STRATEGIC OVERVIEW */}
        <div className="section-group">
          <div className="group-header">
            <h2>Strategic Overview</h2>
            <img
              src="https://via.placeholder.com/1200x400?text=Cloud+Strategy+Illustration"
              alt="Cloud strategy illustration"
              className="group-image"
            />
          </div>

          {/* OVERVIEW SECTION */}
          <div className="section overview-section">
            <div className="section-header">
              <h2>Overview</h2>
              <div className="header-line"></div>
            </div>
            <p>
              Transform your infrastructure with a secure and scalable cloud migration strategy while gaining complete visibility and control over your cloud spend. Our comprehensive approach combines strategic planning, expert execution, and continuous optimization to maximize ROI on your cloud investments.
            </p>
            <div className="highlights">
              <div className="highlight-box">
                <span className="highlight-number">40%</span>
                <span className="highlight-label">Average Cost Reduction</span>
              </div>
              <div className="highlight-box">
                <span className="highlight-number">99.9%</span>
                <span className="highlight-label">System Uptime SLA</span>
              </div>
              <div className="highlight-box">
                <span className="highlight-number">6+ Months</span>
                <span className="highlight-label">Payback Period</span>
              </div>
            </div>
          </div>

          {/* BUSINESS CHALLENGES SECTION */}
          <div className="section challenges-section">
            <div className="section-header">
              <h2>Business Challenges</h2>
              <div className="header-line"></div>
            </div>
            <img
              src="https://via.placeholder.com/800x300?text=Challenges"
              alt="Business challenges"
              className="section-image"
            />
            <div className="challenges-grid">
              <div className="challenge-card">
                <div className="challenge-icon">📊</div>
                <h3>High Infrastructure Costs</h3>
                <p>On-premise infrastructure maintenance and scaling is expensive and inflexible in today's dynamic market.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon">💰</div>
                <h3>Unpredictable Billing</h3>
                <p>Lack of visibility into cloud consumption leads to billing surprises and budget overruns.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon">⚙️</div>
                <h3>Legacy Complexity</h3>
                <p>Monolithic applications and outdated systems make cloud adoption and modernization challenging.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon">⏱️</div>
                <h3>Migration Risks</h3>
                <p>Downtime risks and business continuity concerns during large-scale infrastructure transitions.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon">🔑</div>
                <h3>Governance Gaps</h3>
                <p>Lack of cost governance policies and controls across multi-cloud environments.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon">👥</div>
                <h3>Skill Gaps</h3>
                <p>Limited internal expertise in cloud architecture and optimization best practices.</p>
              </div>
            </div>
          </div>
        </div>


        {/* GROUP: IMPLEMENTATION & TECHNOLOGY */}
        <div className="section-group">
          <div className="group-header">
            <h2>Implementation & Technology</h2>
            <img
              src="https://via.placeholder.com/1200x400?text=Implementation+Flow"
              alt="Implementation flow"
              className="group-image"
            />
          </div>

          {/* COST OPTIMIZATION SECTION */}
          <div className="section optimization-section">
            <img
              src="https://via.placeholder.com/900x300?text=Optimization"
              alt="Cost optimization visual"
              className="section-image"
            />
          <div className="section-header">
            <h2>Cost Optimization Framework</h2>
            <div className="header-line"></div>
          </div>
          <p className="section-intro">Our six‑step framework ensures every dollar spent in the cloud is accounted for and optimized through automation, analytics, and best‑in‑class engineering.</p>
          <div className="optimization-grid">
            <div className="optimization-card">
              <div className="optimization-number">1</div>
              <h3>Resource Right-Sizing</h3>
              <p>Analyze workload patterns and adjust instance types, storage, and memory allocations to match actual usage requirements.</p>
              <span className="potential-saving">Up to 30% savings</span>
            </div>
            <div className="optimization-card">
              <div className="optimization-number">2</div>
              <h3>Auto-Scaling Intelligence</h3>
              <p>Implement intelligent auto-scaling policies that respond to demand patterns, ensuring optimal resource utilization.</p>
              <span className="potential-saving">Up to 25% savings</span>
            </div>
            <div className="optimization-card">
              <div className="optimization-number">3</div>
              <h3>Reserved Instances</h3>
              <p>Strategic purchase of reserved instances for predictable workloads with long-term commitment discounts.</p>
              <span className="potential-saving">Up to 60% savings</span>
            </div>
            <div className="optimization-card">
              <div className="optimization-number">4</div>
              <h3>Idle Resource Removal</h3>
              <p>Identify and eliminate unused compute, storage, and database resources that drain budgets without delivering value.</p>
              <span className="potential-saving">Up to 15% savings</span>
            </div>
            <div className="optimization-card">
              <div className="optimization-number">5</div>
              <h3>Cost Monitoring</h3>
              <p>Real-time dashboards and alerts for cost tracking, anomaly detection, and budget compliance across all platforms.</p>
              <span className="potential-saving">Up to 20% savings</span>
            </div>
            <div className="optimization-card">
              <div className="optimization-number">6</div>
              <h3>Containerization</h3>
              <p>Modernize applications with containerization and orchestration for higher density and efficient resource consumption.</p>
              <span className="potential-saving">Up to 35% savings</span>
            </div>
          </div>
        </div>

        {/* PLATFORMS SECTION */}
        <div className="section platforms-section">
          <img
            src="https://via.placeholder.com/900x300?text=Cloud+Platforms"
            alt="Cloud platforms"
            className="section-image"
          />
          <div className="section-header">
            <h2>Cloud Platforms & Technologies</h2>
            <div className="header-line"></div>
          </div>
          <p className="section-intro">Leveraging a broad technology stack, we architect solutions that are cloud‑agnostic yet optimized for vendor‑specific capabilities.</p>
          <div className="platforms-grid">
            <div className="platform-card">
              <h3>AWS</h3>
              <p>EC2, RDS, S3, Lambda, CloudFront, VPC, IAM, Cost Explorer & more</p>
            </div>
            <div className="platform-card">
              <h3>Microsoft Azure</h3>
              <p>Virtual Machines, App Services, SQL Database, Cosmos DB, AKS & more</p>
            </div>
            <div className="platform-card">
              <h3>Google Cloud</h3>
              <p>Compute Engine, Cloud SQL, BigQuery, Cloud Run, GKE & more</p>
            </div>
            <div className="platform-card">
              <h3>Hybrid & Multi-Cloud</h3>
              <p>On-premise integration, edge computing, and multi-cloud orchestration</p>
            </div>
          </div>
        </div>

        {/* OUTCOMES SECTION */}
        <div className="section outcomes-section">
          <img
            src="https://via.placeholder.com/900x300?text=Business+Outcomes"
            alt="Business outcomes"
            className="section-image"
          />
          <div className="section-header">
            <h2>Business Outcomes & Why Choose Us</h2>
            <div className="header-line"></div>
          </div>
          <p className="section-intro">Our clients consistently cite transformative results; below are the outcomes they measure and the reasons they keep partnering with us.</p>
          <div className="outcomes-grid">
            <div className="outcome-card success">
              <h3>💚 Up to 40% Cost Reduction</h3>
              <p>Proven methodologies delivering significant infrastructure and operational cost savings within 6-12 months.</p>
            </div>
            <div className="outcome-card">
              <h3>⚡ High Availability & Scalability</h3>
              <p>Auto-scaling, multi-region deployment, and failover strategies ensure 99.9%+ uptime and seamless growth.</p>
            </div>
            <div className="outcome-card">
              <h3>🏆 Certified Cloud Experts</h3>
              <p>Team of AWS, Azure, and GCP certified architects with 15+ years of enterprise transformation experience.</p>
            </div>
            <div className="outcome-card">
              <h3>🔒 24×7 Managed Services</h3>
              <p>Dedicated support, proactive monitoring, security patching, and continuous optimization around the clock.</p>
            </div>
          </div>
        </div>
        </div>  {/* end implementation group */}

       

      </section>

      <style>{`
        * {
          scroll-behavior: smooth;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* ========== CLOUD AND RAIN BACKGROUND ========== */
        body {
          background: linear-gradient(145deg, #0b0f1a 0%, #1a1f30 50%, #2a1f3a 100%);
          position: relative;
          overflow-x: hidden;
          color: #f0f0ff;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 180, 150, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(150, 180, 255, 0.15) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        /* Animated clouds */
        .cloud {
          position: fixed;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1000px;
          filter: blur(40px);
          opacity: 0.3;
          z-index: 1;
          animation: cloudMove 60s linear infinite;
          pointer-events: none;
        }

        .cloud1 {
          top: 10%;
          left: -20%;
          width: 600px;
          height: 180px;
          background: linear-gradient(90deg, rgba(180, 200, 255, 0.3), rgba(220, 180, 255, 0.2));
          animation-duration: 70s;
        }

        .cloud2 {
          top: 40%;
          left: -30%;
          width: 800px;
          height: 220px;
          background: linear-gradient(90deg, rgba(200, 170, 250, 0.3), rgba(160, 210, 255, 0.2));
          animation-duration: 80s;
          animation-delay: -20s;
        }

        .cloud3 {
          bottom: 15%;
          right: -20%;
          width: 700px;
          height: 200px;
          background: linear-gradient(90deg, rgba(210, 160, 255, 0.3), rgba(190, 220, 255, 0.2));
          animation-duration: 75s;
          animation-direction: reverse;
        }

        @keyframes cloudMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(130vw); }
        }

        /* Gentle rain effect */
        .rain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .rain-drop {
          position: absolute;
          width: 1px;
          height: 40px;
          background: linear-gradient(transparent, rgba(180, 200, 255, 0.2));
          animation: rainFall 2.5s linear infinite;
        }

        @keyframes rainFall {
          0% { transform: translateY(-100px) translateX(0); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateY(100vh) translateX(30px); opacity: 0; }
        }

        /* ========== HERO SECTION ========== */
        .hero-section {
          position: relative;
          height: 100vh;
          background: linear-gradient(135deg, #1a0b2e 0%, #2f1b4e 50%, #4a2a6a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/images/hero-clouds.jpg') center/cover no-repeat;
          opacity: 0.3;
          z-index: 1;
        }
        .hero-subtitle {
          font-size: clamp(24px, 4vw, 32px);
          margin-top: 10px;
          font-weight: 500;
          color: #e0e0ff;
          text-shadow: 0 0 15px rgba(0,0,0,0.5);
        }
        .hero-cta {
          margin-top: 20px;
          padding: 14px 50px;
          font-size: 16px;
          background: linear-gradient(145deg, #ff7e5f, #feb47b);
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .hero-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 28px rgba(0,0,0,0.3);
        }
        .section-image {
          display: block;
          max-width: 100%;
          margin: 20px auto;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .section-intro {
          font-size: 18px;
          color: #d0d0ff;
          margin-bottom: 30px;
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .group-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .group-image {
          max-width: 100%;
          margin-top: 20px;
          border-radius: 20px;
        }
        .section-group {
          margin-bottom: 120px;
        }

        .hero-section h1 {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(255,255,255,0.5);
          animation: glitch 3s infinite;
          position: relative;
        }

        .hero-section h1::before,
        .hero-section h1::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-section h1::before {
          animation: glitchTop 3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }

        .hero-section h1::after {
          animation: glitchBottom 3s infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        }

        @keyframes glitch {
          2%, 64% { transform: skew(0deg, 0deg); }
          4%, 60% { transform: skew(0deg, 0deg); }
          62% { transform: skew(0deg, 0deg) translate(5px, -3px); }
        }
        @keyframes glitchTop {
          2%, 64% { transform: translate(2px, -2px); }
          4%, 60% { transform: translate(-2px, 2px); }
          62% { transform: translate(13px, -1px) skew(0deg, 1deg); }
        }
        @keyframes glitchBottom {
          2%, 64% { transform: translate(-2px, 2px); }
          4%, 60% { transform: translate(2px, -2px); }
          62% { transform: translate(-13px, 1px) skew(0deg, -1deg); }
        }

        .hero-section p {
          font-size: clamp(18px, 3vw, 26px);
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          animation: slideFade 1s ease-out 0.2s both;
        }

        @keyframes slideFade {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2.5s infinite;
        }

        .hero-scroll-indicator span {
          display: block;
          width: 28px;
          height: 44px;
          border: 3px solid rgba(255, 255, 255, 0.7);
          border-radius: 14px;
          position: relative;
        }

        .hero-scroll-indicator span::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          width: 6px;
          height: 12px;
          background: white;
          border-radius: 3px;
          transform: translateX(-50%);
          animation: scrollWiggle 2s infinite;
        }

        @keyframes scrollWiggle {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(15px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-15px); }
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 900px;
          padding: 40px;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          animation: orbDrift 40s infinite alternate ease-in-out;
          z-index: 2;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ff7e5f, #feb47b);
          top: -200px;
          left: -200px;
        }

        .orb-2 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #6a11cb, #2575fc);
          bottom: -300px;
          right: -200px;
          animation-delay: -10s;
        }

        .orb-3 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #f093fb, #f5576c);
          top: 30%;
          right: 10%;
          animation-delay: -20s;
        }

        @keyframes orbDrift {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, -80px) scale(1.3); }
        }

        /* ========== CONTENT SECTIONS ========== */
        .content {
          padding: 120px 5%;
          position: relative;
          min-height: 100vh;
          z-index: 10;
        }

        .section {
          max-width: 1200px;
          margin: 0 auto 100px;
          padding: 70px 50px;
          background: rgba(20, 15, 30, 0.7);
          backdrop-filter: blur(15px);
          border-radius: 60px;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
          position: relative;
          z-index: 10;
          animation: sectionEntrance 1s ease-out both;
        }

        @keyframes sectionEntrance {
          0% { opacity: 0; transform: translateY(60px) rotateX(10deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }

        .section:hover {
          transform: translateY(-10px) scale(1.01);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .section:nth-child(1) { animation-delay: 0.1s; }
        .section:nth-child(2) { animation-delay: 0.2s; }
        .section:nth-child(3) { animation-delay: 0.3s; }
        .section:nth-child(4) { animation-delay: 0.4s; }
        .section:nth-child(5) { animation-delay: 0.5s; }
        .section:nth-child(6) { animation-delay: 0.6s; }
        .section:nth-child(7) { animation-delay: 0.7s; }

        .section-header {
          margin-bottom: 60px;
          position: relative;
          text-align: center;
        }

        .section h2 {
          color: #fff;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 800;
          margin: 0 0 15px 0;
          letter-spacing: -0.5px;
          text-shadow: 0 0 20px rgba(255,255,255,0.3);
          animation: titlePulse 4s infinite;
        }

        @keyframes titlePulse {
          0%, 100% { text-shadow: 0 0 20px #ff7e5f; }
          50% { text-shadow: 0 0 40px #feb47b; }
        }

        .header-line {
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #ff7e5f, #feb47b, #f093fb);
          border-radius: 5px;
          margin: 0 auto;
          animation: linePulse 3s infinite;
        }

        @keyframes linePulse {
          0%, 100% { width: 100px; opacity: 0.8; }
          50% { width: 150px; opacity: 1; }
        }

        /* ========== OVERVIEW SECTION ========== */
        .overview-section {
          background: linear-gradient(145deg, rgba(50, 30, 60, 0.7), rgba(30, 40, 70, 0.7));
        }

        .overview-section p {
          font-size: 19px;
          color: #e0e0ff;
          line-height: 1.8;
          margin-bottom: 50px;
          text-align: center;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 500;
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .highlight-box {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          padding: 35px;
          border-radius: 36px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
          animation: floatCard 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .highlight-box:nth-child(2) { animation-delay: 0.5s; }
        .highlight-box:nth-child(3) { animation-delay: 1s; }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-15px) rotateX(5deg); }
        }

        .highlight-box:hover {
          transform: scale(1.05) translateY(-10px) rotateX(0deg);
          border-color: #f093fb;
          box-shadow: 0 0 30px #f093fb;
        }

        .highlight-number {
          display: block;
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(145deg, #ff7e5f, #feb47b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          animation: countPop 2s ease-out;
        }

        @keyframes countPop {
          0% { transform: scale(0) rotate(-20deg); }
          80% { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0); }
        }

        .highlight-label {
          display: block;
          font-size: 16px;
          color: #d0d0ff;
          font-weight: 600;
        }

        /* ========== CHALLENGES SECTION ========== */
        .challenges-section {
          background: linear-gradient(145deg, rgba(40, 30, 60, 0.7), rgba(30, 50, 70, 0.7));
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .challenge-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(5px);
          padding: 40px 30px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
          animation: cardSlide 0.8s ease-out backwards;
        }

        .challenge-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }

        .challenge-card:hover::before {
          left: 100%;
        }

        .challenge-card:nth-child(1) { animation-delay: 0.1s; }
        .challenge-card:nth-child(2) { animation-delay: 0.2s; }
        .challenge-card:nth-child(3) { animation-delay: 0.3s; }
        .challenge-card:nth-child(4) { animation-delay: 0.4s; }
        .challenge-card:nth-child(5) { animation-delay: 0.5s; }
        .challenge-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes cardSlide {
          from { opacity: 0; transform: translateX(-50px) rotateY(-15deg); }
          to { opacity: 1; transform: translateX(0) rotateY(0); }
        }

        .challenge-card:hover {
          border-color: #6a11cb;
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 0 40px #6a11cb;
        }

        .challenge-icon {
          font-size: 44px;
          margin-bottom: 20px;
          display: block;
          animation: iconWiggle 3s infinite;
        }

        @keyframes iconWiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(10deg) scale(1.1); }
          66% { transform: rotate(-10deg) scale(1.1); }
        }

        .challenge-card h3 {
          font-size: 22px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .challenge-card p {
          font-size: 15px;
          color: #c0c0e0;
          line-height: 1.6;
          margin: 0;
        }

        /* ========== APPROACH SECTION ========== */
        .approach-section {
          background: linear-gradient(145deg, rgba(50, 40, 70, 0.7), rgba(40, 30, 80, 0.7));
        }

        .approach-timeline {
          position: relative;
          padding: 40px 0;
        }

        .approach-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #ff7e5f, #feb47b, #f093fb);
          transform: translateX(-50%);
          animation: timelineGrow 3s ease-out forwards;
          border-radius: 2px;
        }

        @keyframes timelineGrow {
          0% { height: 0; }
          100% { height: 100%; }
        }

        .timeline-step {
          margin-bottom: 60px;
          width: 48%;
          padding: 35px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(5px);
          border-radius: 32px;
          transition: all 0.5s ease;
          position: relative;
          animation: stepFlip 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-step:nth-child(1) { animation-delay: 0.1s; }
        .timeline-step:nth-child(3) { animation-delay: 0.2s; }
        .timeline-step:nth-child(5) { animation-delay: 0.3s; }
        .timeline-step:nth-child(7) { animation-delay: 0.4s; }
        .timeline-step:nth-child(9) { animation-delay: 0.5s; }

        @keyframes stepFlip {
          from { opacity: 0; transform: rotateY(90deg) scale(0.8); }
          to { opacity: 1; transform: rotateY(0) scale(1); }
        }

        .timeline-step:hover {
          transform: translateY(-15px) scale(1.02) rotateY(5deg);
          border-color: #f093fb;
          box-shadow: 0 0 40px #f093fb;
        }

        .timeline-step:nth-child(3n+3) {
          margin-left: auto;
        }

        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(145deg, #ff7e5f, #feb47b);
          color: white;
          border-radius: 50%;
          font-weight: 800;
          font-size: 28px;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(255,126,95,0.3);
          animation: numberBounce 2.5s infinite;
        }

        @keyframes numberBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.15); }
        }

        .timeline-step h3 {
          font-size: 24px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .timeline-step p {
          font-size: 16px;
          color: #c0c0e0;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .approach-timeline::before { left: 25px; }
          .timeline-step { width: 100%; margin-left: 60px !important; }
        }

        /* ========== OPTIMIZATION SECTION ========== */
        .optimization-section {
          background: linear-gradient(145deg, rgba(40, 50, 70, 0.7), rgba(30, 60, 80, 0.7));
        }

        .optimization-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 35px;
        }

        .optimization-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(5px);
          padding: 40px 30px;
          border-radius: 36px;
          transition: all 0.5s ease;
          border-top: 5px solid #4c9f70;
          position: relative;
          overflow: hidden;
          animation: cardRise 0.8s ease-out backwards;
        }

        .optimization-card:nth-child(1) { animation-delay: 0.1s; }
        .optimization-card:nth-child(2) { animation-delay: 0.2s; }
        .optimization-card:nth-child(3) { animation-delay: 0.3s; }
        .optimization-card:nth-child(4) { animation-delay: 0.4s; }
        .optimization-card:nth-child(5) { animation-delay: 0.5s; }
        .optimization-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes cardRise {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .optimization-card:hover {
          transform: translateY(-20px) scale(1.03);
          border-top-color: #f093fb;
          box-shadow: 0 0 50px #f093fb;
        }

        .optimization-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          background: linear-gradient(145deg, #4c9f70, #2e7d5e);
          color: white;
          border-radius: 50%;
          font-weight: 800;
          font-size: 24px;
          margin-bottom: 20px;
          box-shadow: 0 6px 16px rgba(46,125,94,0.3);
          animation: numberSpin 6s linear infinite;
        }

        @keyframes numberSpin {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .optimization-card h3 {
          font-size: 22px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .optimization-card p {
          font-size: 15px;
          color: #c0c0e0;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .potential-saving {
          display: inline-block;
          background: linear-gradient(145deg, #4c9f70, #2e7d5e);
          color: white;
          padding: 10px 20px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: badgePulse 2s infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76,159,112,0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 20px 5px rgba(76,159,112,0.4); }
        }

        /* ========== PLATFORMS SECTION ========== */
        .platforms-section {
          background: linear-gradient(145deg, rgba(50, 40, 80, 0.7), rgba(40, 50, 90, 0.7));
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .platform-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(5px);
          padding: 40px 25px;
          border-radius: 32px;
          text-align: center;
          transition: all 0.5s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: platformSlide 0.8s ease-out backwards;
        }

        .platform-card:nth-child(1) { animation-delay: 0.1s; }
        .platform-card:nth-child(2) { animation-delay: 0.2s; }
        .platform-card:nth-child(3) { animation-delay: 0.3s; }
        .platform-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes platformSlide {
          from { opacity: 0; transform: translateX(50px) rotate(5deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }

        .platform-card:hover {
          border-color: #6a4e9b;
          transform: translateY(-15px) scale(1.05) rotate(2deg);
          box-shadow: 0 0 40px #a06ab3;
        }

        .platform-card h3 {
          font-size: 22px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .platform-card p {
          font-size: 14px;
          color: #c0c0e0;
          line-height: 1.6;
          margin: 0;
        }

        /* ========== OUTCOMES SECTION ========== */
        .outcomes-section {
          background: linear-gradient(145deg, rgba(60, 40, 70, 0.7), rgba(50, 30, 80, 0.7));
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .outcome-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(5px);
          padding: 40px 30px;
          border-radius: 32px;
          transition: all 0.5s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: outcomeFlip 0.9s ease-out backwards;
        }

        .outcome-card:nth-child(1) { animation-delay: 0.1s; }
        .outcome-card:nth-child(2) { animation-delay: 0.2s; }
        .outcome-card:nth-child(3) { animation-delay: 0.3s; }
        .outcome-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes outcomeFlip {
          from { opacity: 0; transform: rotateX(-90deg); }
          to { opacity: 1; transform: rotateX(0); }
        }

        .outcome-card.success {
          border-color: #4c9f70;
        }

        .outcome-card:hover {
          border-color: #f093fb;
          transform: translateY(-15px) scale(1.02) rotateX(5deg);
          box-shadow: 0 0 50px #f093fb;
        }

        .outcome-card h3 {
          font-size: 22px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .outcome-card p {
          font-size: 15px;
          color: #c0c0e0;
          line-height: 1.6;
          margin: 0;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          background: linear-gradient(145deg, #1a0b2e, #2f1b4e, #4a2a6a);
          color: white;
          padding: 90px 50px;
          border-radius: 60px;
          text-align: center;
          box-shadow: 0 30px 60px -15px #000;
          margin-bottom: 0 !important;
          position: relative;
          overflow: hidden;
          animation: ctaPop 1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        @keyframes ctaPop {
          0% { opacity: 0; transform: scale(0.7) rotate(-5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
          border-radius: 50%;
          animation: ctaSpin 15s linear infinite;
        }

        @keyframes ctaSpin {
          from { transform: translate(0, 0) rotate(0deg); }
          to { transform: translate(40px, 40px) rotate(360deg); }
        }

        .cta-section h2 {
          color: white;
          font-size: 48px;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
          text-shadow: 0 0 30px #f093fb;
          animation: textGlow 3s infinite alternate;
        }

        @keyframes textGlow {
          from { text-shadow: 0 0 20px #f093fb; }
          to { text-shadow: 0 0 60px #ff7e5f; }
        }

        .cta-section p {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 40px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 2;
        }

        .cta-button {
          background: linear-gradient(145deg, #ff7e5f, #feb47b);
          color: white;
          border: none;
          padding: 18px 56px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          z-index: 2;
          animation: buttonGlow 2s infinite alternate;
        }

        @keyframes buttonGlow {
          from { box-shadow: 0 10px 30px rgba(255,126,95,0.3); }
          to { box-shadow: 0 15px 40px rgba(240,147,251,0.5); }
        }

        .cta-button:hover {
          transform: scale(1.1) translateY(-5px);
          background: linear-gradient(145deg, #feb47b, #ff7e5f);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 768px) {
          .content { padding: 60px 4%; }
          .section { padding: 50px 30px; margin-bottom: 60px; }
          .section h2 { font-size: 32px; }
          .cta-section h2 { font-size: 36px; }
          .cta-section { padding: 60px 30px; }
        }

        @media (max-width: 480px) {
          .hero-section h1 { font-size: 40px; }
          .hero-section p { font-size: 16px; }
          .section { padding: 40px 20px; }
          .highlight-number { font-size: 36px; }
        }
      `}</style>

      {/* CLOUDS AND RAIN ELEMENTS */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
      <div className="rain">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              height: `${20 + Math.random() * 30}px`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}