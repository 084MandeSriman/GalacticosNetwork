import React, { useEffect, useRef } from "react";

export default function LifeSciencesInnovation() {
  // ========== REFS FOR SCROLL ANIMATIONS ==========
  const animatedElements = useRef([]);
  const countersRef = useRef([]);

  // ========== HERO CANVAS ANIMATION (ENHANCED) ==========
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = 100; // Increased for richness
    let animationFrame;
    let mouseX = 0, mouseY = 0; // For interactive effect

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
          radius: Math.random() * 4 + 1.5,
          baseY: Math.random() * height,
          phase: Math.random() * Math.PI * 2,
          color: `hsl(${200 + Math.random() * 100}, 80%, 60%)`, // Cool blues/cyans
        });
      }
    };
    

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Interactive wave: mouse influence
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }

        // Wave motion
        p.y = p.baseY + Math.sin(Date.now() * 0.002 + p.phase) * 20;
        p.x += p.vx;
        p.y += p.vy;

        // Boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(0, 200, 255, 0.7)";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connection lines between nearby particles
        particles.forEach((p2) => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
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

  // ========== SCROLL ANIMATION OBSERVER ==========
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Start counters if it's a result number
            if (entry.target.classList.contains("result-number")) {
              const counter = entry.target;
              const target = +counter.getAttribute("data-target");
              let count = 0;
              const updateCount = () => {
                const increment = target / 50;
                if (count < target) {
                  count = Math.min(count + increment, target);
                  counter.innerText =
                    Math.round(count) +
                    (counter.classList.contains("percent") ? "%" : "+");
                  requestAnimationFrame(updateCount);
                } else {
                  counter.innerText =
                    target + (counter.classList.contains("percent") ? "%" : "+");
                }
              };
              updateCount();
              observer.unobserve(counter);
            } else {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    animatedElements.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ========== CASE STUDY DATA (FRESH CONTENT) ==========
  const caseData = {
    client: "EuroTech Industries",
    industry: "Industrial Manufacturing & High-Tech",
    location: "Germany, France, China, USA",
    scope: "SAP ECC 6.0 to S/4HANA 2023, 12 modules, 8TB data",
    timeline: "12 months",
    challenge: [
      "Fragmented legacy systems with 15+ years of custom ABAP code – high maintenance burden",
      "Monthly closing took 10 days due to batch processing and manual interventions",
      "Limited real‑time visibility across global supply chain",
      "Growing compliance pressure (GDPR, SOX) required robust audit trails",
    ],
    solutionSteps: [
      {
        title: "Blueprint & Assessment",
        desc: "Analyzed 1,200+ custom objects, defined target architecture, and prepared data migration strategy.",
      },
      {
        title: "S/4HANA Conversion",
        desc: "Brownfield conversion using SAP DMO – 8TB database migrated with <2 hours downtime.",
      },
      {
        title: "Fiori & UX Transformation",
        desc: "Deployed 80+ role‑based Fiori apps for finance, procurement, logistics, and HR.",
      },
      {
        title: "Integration & Extensions",
        desc: "Connected to 20+ non‑SAP systems (MES, CRM, TMS) via SAP BTP and CPI.",
      },
    ],
    results: [
      { value: 50, label: "Faster closing (10 days → 5 days)", suffix: "%" },
      { value: 99.98, label: "System availability", suffix: "%" },
      { value: 35, label: "Reduction in TCO", suffix: "%" },
      { value: 300, label: "Manual processes automated", suffix: "+" },
    ],
    testimonial: {
      quote:
        "Galacticos' team brought deep SAP expertise and a structured methodology that made our S/4HANA journey surprisingly smooth. We now have a future‑ready platform with real‑time insights across our entire value chain.",
      author: "VP of IT, EuroTech Industries",
    },
    techStack: [
      { name: "SAP S/4HANA 2023", icon: "sap" },
      { name: "SAP Fiori 6.0", icon: "fiori" },
      { name: "SAP BTP", icon: "btp" },
      { name: "SAP DMO", icon: "dmo" },
      { name: "SAP CPI", icon: "integration" },
      { name: "SAP Analytics Cloud", icon: "analytics" },
    ],
    journey: [
      { phase: "Discovery & Planning", duration: "3 months", desc: "System analysis, custom code remediation planning, stakeholder workshops." },
      { phase: "Sandbox & Prototype", duration: "2 months", desc: "S/4HANA sandbox setup, Fiori prototype for key users." },
      { phase: "Conversion Execution", duration: "1 month", desc: "Technical conversion with DMO, near‑zero downtime." },
      { phase: "Fiori Rollout", duration: "4 months", desc: "Phased rollout of 80+ Fiori apps across 8 countries." },
      { phase: "Integration & Optimization", duration: "2 months", desc: "Integration with non‑SAP systems, performance tuning." },
    ],
    benefits: [
      { title: "80% Faster Reporting", desc: "Real‑time operational reports on S/4HANA." },
      { title: "Zero Security Incidents", desc: "Granular access controls and audit logs." },
      { title: "30% Code Reduction", desc: "Simplified custom code, eliminated redundancies." },
      { title: "150+ Users Trained", desc: "On Fiori and new processes." },
    ],
    relatedCaseStudies: [
      { title: "Cloud Migration for Global Bank", industry: "Financial Services", link: "#" },
      { title: "Hyperion EPM Modernization", industry: "Financial Services", link: "#" },
      { title: "AI‑Driven Demand Forecasting", industry: "Retail", link: "#" },
    ],
  };

  // Helper to render tech icons (simplified)
  const renderIcon = (icon) => {
    switch (icon) {
      case "sap":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
            <path d="M8 8h8v8H8z" strokeWidth="1.5" />
          </svg>
        );
      case "fiori":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
            <path d="M12 8v8M8 12h8" strokeWidth="1.5" />
          </svg>
        );
      case "btp":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="6" r="3" strokeWidth="1.5" />
            <circle cx="6" cy="18" r="3" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="3" strokeWidth="1.5" />
            <line x1="9" y1="8" x2="9" y2="16" strokeWidth="1.5" />
            <line x1="15" y1="8" x2="15" y2="16" strokeWidth="1.5" />
          </svg>
        );
      case "dmo":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16v16H4z" strokeWidth="1.5" />
            <path d="M8 8l8 8M16 8l-8 8" strokeWidth="1.5" />
          </svg>
        );
      case "integration":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="6" cy="6" r="3" strokeWidth="1.5" />
            <circle cx="18" cy="12" r="3" strokeWidth="1.5" />
            <circle cx="6" cy="18" r="3" strokeWidth="1.5" />
            <line x1="9" y1="7" x2="15" y2="11" strokeWidth="1.5" />
            <line x1="9" y1="17" x2="15" y2="13" strokeWidth="1.5" />
          </svg>
        );
      case "analytics":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" strokeWidth="1.5" />
            <path d="M15 4l5 5-5 5" strokeWidth="1.5" />
            <line x1="3" y1="20" x2="21" y2="20" strokeWidth="1.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="case-study">
      <style>{`
        /* ---------------------------------------------
           GLOBAL & DARK THEME WITH COSMIC ILLUSIONS
        --------------------------------------------- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .case-study {
          position: relative;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          background: #0a0f1e; /* Deep space blue-black */
          color: #e0e7ff;
          overflow-x: hidden;
        }

        /* Animated gradient background */
        .case-study::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
          z-index: 1;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Floating orbs */
        .floating-orb {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at 30% 30%, rgba(0, 150, 255, 0.2), transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 1;
          animation: floatOrb 30s infinite alternate ease-in-out;
        }
        .orb1 { top: 10%; left: 5%; }
        .orb2 { bottom: 10%; right: 5%; width: 400px; height: 400px; background: radial-gradient(circle at 70% 70%, rgba(150, 0, 255, 0.2), transparent 70%); animation-duration: 40s; }
        .orb3 { top: 50%; left: 50%; transform: translate(-50%, -50%); width: 500px; height: 500px; background: radial-gradient(circle, rgba(0, 200, 255, 0.1), transparent 70%); animation: floatOrb2 25s infinite; }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, 100px) scale(1.2); }
        }
        @keyframes floatOrb2 {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          100% { transform: translate(-30%, -30%) scale(1.5); opacity: 0.6; }
        }

        /* Content wrapper */
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          position: relative;
          z-index: 10;
        }

        /* Fade-up animation on scroll */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.9, 0.3, 1), transform 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- HERO SECTION (ENHANCED) ---------- */
        .hero {
          position: relative;
          height: 600px;
          margin: 24px 24px 80px;
          border-radius: 48px;
          overflow: hidden;
          background: linear-gradient(135deg, #0b1120 0%, #1a1f35 100%);
          box-shadow: 0 30px 50px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05);
          isolation: isolate;
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
          position: absolute;
          bottom: 80px;
          left: 80px;
          color: white;
          z-index: 3;
          max-width: 800px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .hero-tag {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          text-transform: uppercase;
          animation: fadeInUp 0.8s ease;
        }
        .hero-title {
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 20px;
          background: linear-gradient(to right, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeInUp 0.8s ease 0.1s both;
        }
        .hero-subtitle {
          font-size: 24px;
          opacity: 0.9;
          font-weight: 400;
          animation: fadeInUp 0.8s ease 0.2s both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Scroll down indicator */
        .scroll-down {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          color: white;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0.6;
          transition: opacity 0.3s;
          animation: bounce 2.5s infinite;
        }
        .scroll-down:hover { opacity: 1; }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-15px); }
          60% { transform: translateX(-50%) translateY(-7px); }
        }

        /* Section headers */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #f0f4ff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .section-title span {
          background: linear-gradient(145deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-divider {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* ---------- CLIENT OVERVIEW CARD (GLASS) ---------- */
        .client-card {
          background: rgba(20, 30, 50, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 48px;
          margin-bottom: 80px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 40px -15px rgba(0,0,0,0.5);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .client-item {
          text-align: center;
        }
        .client-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #94a3b8;
          margin-bottom: 10px;
        }
        .client-value {
          font-size: 22px;
          font-weight: 700;
          color: #f0f4ff;
        }

        /* ---------- CHALLENGES ---------- */
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 80px;
        }
        .challenge-card {
          background: rgba(20, 30, 50, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 28px;
          padding: 32px;
          display: flex;
          gap: 24px;
          align-items: flex-start;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
          box-shadow: 0 10px 25px -10px rgba(0,0,0,0.3);
        }
        .challenge-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #3b82f6;
          box-shadow: 0 25px 35px -12px rgba(59,130,246,0.3);
          background: rgba(30, 40, 70, 0.7);
        }
        .challenge-icon {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          background: rgba(59,130,246,0.2);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 28px;
        }
        .challenge-text {
          font-size: 16px;
          line-height: 1.7;
          color: #cbd5e1;
        }

        /* ---------- SOLUTION TIMELINE ---------- */
        .timeline {
          display: flex;
          justify-content: space-between;
          margin: 60px 0 80px;
          position: relative;
          gap: 20px;
          flex-wrap: wrap;
        }
        .timeline-step {
          position: relative;
          z-index: 2;
          background: rgba(30, 40, 60, 0.7);
          backdrop-filter: blur(10px);
          width: 240px;
          padding: 28px 24px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.4s ease;
          box-shadow: 0 15px 30px -10px rgba(0,0,0,0.5);
        }
        .timeline-step:hover {
          transform: scale(1.05) translateY(-8px);
          border-color: #8b5cf6;
          box-shadow: 0 25px 35px -10px rgba(139,92,246,0.3);
        }
        .step-number {
          width: 56px;
          height: 56px;
          background: linear-gradient(145deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .step-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #f0f4ff;
        }
        .step-desc {
          font-size: 14px;
          color: #a0aec0;
          line-height: 1.6;
        }

        /* ---------- ARCHITECTURE HIGHLIGHT ---------- */
        .architecture {
          background: rgba(20, 30, 50, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 48px;
          padding: 60px 40px;
          margin-bottom: 80px;
          border: 1px solid rgba(255,255,255,0.1);
          text-align: center;
        }
        .arch-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin: 40px 0 20px;
        }
        .arch-item {
          width: 120px;
          height: 120px;
          background: rgba(10, 20, 30, 0.8);
          backdrop-filter: blur(4px);
          border-radius: 36px;
          box-shadow: 0 15px 30px -12px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .arch-item:hover {
          transform: translateY(-10px) rotate(2deg);
          border-color: #3b82f6;
          box-shadow: 0 25px 35px -12px rgba(59,130,246,0.3);
        }
        .arch-item svg {
          width: 48px;
          height: 48px;
          margin-bottom: 10px;
          stroke: #3b82f6;
        }
        .arch-item span {
          color: #e0e7ff;
          font-size: 14px;
          font-weight: 600;
        }
        .arch-connector {
          font-size: 32px;
          color: #3b82f6;
          font-weight: 300;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.6; transform: scale(1); }
        }

        /* ---------- TECHNOLOGY STACK ---------- */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 25px;
          margin: 40px 0 80px;
        }
        .tech-card {
          background: rgba(30, 40, 60, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 24px 16px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: #8b5cf6;
          box-shadow: 0 20px 30px -12px rgba(139,92,246,0.2);
        }
        .tech-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          color: #3b82f6;
        }
        .tech-name {
          font-weight: 600;
          color: #f0f4ff;
          font-size: 15px;
        }

        /* ---------- JOURNEY TIMELINE (VERTICAL) ---------- */
        .journey {
          background: rgba(20, 30, 50, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 36px;
          padding: 48px;
          margin-bottom: 80px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .journey-step {
          display: flex;
          gap: 30px;
          padding: 24px 0;
          border-bottom: 1px dashed rgba(255,255,255,0.1);
          transition: background 0.3s;
        }
        .journey-step:hover {
          background: rgba(59,130,246,0.1);
          border-radius: 20px;
          padding-left: 20px;
        }
        .journey-step:last-child { border-bottom: none; }
        .journey-phase {
          width: 160px;
          font-weight: 700;
          color: #3b82f6;
          font-size: 18px;
        }
        .journey-duration {
          width: 110px;
          color: #94a3b8;
          font-size: 15px;
        }
        .journey-desc {
          flex: 1;
          color: #cbd5e1;
          line-height: 1.6;
        }

        /* ---------- KEY BENEFITS ---------- */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 40px 0 80px;
        }
        .benefit-card {
          background: rgba(30, 40, 60, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 28px;
          padding: 36px 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-6px);
          border-color: #3b82f6;
          box-shadow: 0 25px 35px -12px rgba(59,130,246,0.2);
        }
        .benefit-number {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(145deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 12px;
        }
        .benefit-desc {
          font-size: 15px;
          color: #a0aec0;
        }

        /* ---------- RESULTS ---------- */
        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin: 50px 0 80px;
        }
        .result-card {
          background: rgba(30, 40, 60, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 36px 24px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.3s ease;
        }
        .result-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #8b5cf6;
          box-shadow: 0 25px 40px -15px rgba(139,92,246,0.3);
        }
        .result-number {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(145deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 12px;
          line-height: 1;
        }
        .result-label {
          font-size: 18px;
          color: #cbd5e1;
        }

        /* ---------- TESTIMONIAL ---------- */
        .testimonial {
          background: linear-gradient(145deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15));
          backdrop-filter: blur(8px);
          border-left: 6px solid #3b82f6;
          padding: 48px 60px;
          border-radius: 36px;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .testimonial:hover {
          transform: scale(1.01);
          box-shadow: 0 20px 30px -12px rgba(59,130,246,0.3);
        }
        .testimonial::before {
          content: "“";
          position: absolute;
          top: -30px;
          left: 20px;
          font-size: 200px;
          font-family: serif;
          color: rgba(59,130,246,0.2);
          pointer-events: none;
        }
        .testimonial-quote {
          font-size: 24px;
          line-height: 1.5;
          color: #f0f4ff;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }
        .testimonial-author {
          font-size: 18px;
          font-weight: 600;
          color: #8b5cf6;
        }

        /* ---------- RELATED CASE STUDIES ---------- */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin: 40px 0 60px;
        }
        .related-card {
          background: rgba(30, 40, 60, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 28px;
          padding: 36px 30px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .related-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #3b82f6;
          box-shadow: 0 25px 35px -15px rgba(59,130,246,0.2);
        }
        .related-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #f0f4ff;
        }
        .related-industry {
          font-size: 15px;
          color: #94a3b8;
          margin-bottom: 20px;
        }
        .related-link {
          font-weight: 600;
          color: #3b82f6;
        }

        /* ---------- CTA ---------- */
        .cta-section {
          background: linear-gradient(145deg, #1e3a8a, #5b21b6);
          border-radius: 48px;
          padding: 80px 40px;
          text-align: center;
          color: white;
          margin-bottom: 80px;
          box-shadow: 0 30px 40px -20px rgba(0,0,0,0.6);
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
          animation: rotate 20s linear infinite;
          z-index: -1;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .cta-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .cta-desc {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 36px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-button {
          display: inline-block;
          background: white;
          color: #1e3a8a;
          font-weight: 700;
          padding: 18px 48px;
          border-radius: 60px;
          text-decoration: none;
          font-size: 20px;
          box-shadow: 0 20px 30px -10px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 0 30px 40px -8px rgba(0,0,0,0.4);
          background: #f0f4ff;
        }

        /* ---------- BACK LINK ---------- */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #94a3b8;
          text-decoration: none;
          padding: 14px 32px;
          background: rgba(30, 40, 60, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .back-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateX(-8px);
          border-color: transparent;
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 1100px) {
          .client-card { grid-template-columns: repeat(3, 1fr); }
          .timeline { justify-content: center; }
          .results-grid { grid-template-columns: repeat(2, 1fr); }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-title { font-size: 56px; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px; }
          .hero-content { left: 30px; bottom: 40px; }
          .client-card { grid-template-columns: repeat(2, 1fr); padding: 30px; }
          .challenges-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
          .benefits-grid { grid-template-columns: 1fr; }
          .testimonial-quote { font-size: 20px; }
          .section-title { font-size: 32px; }
          .journey-step { flex-direction: column; gap: 10px; }
          .journey-phase, .journey-duration { width: auto; }
          .cta-title { font-size: 32px; }
        }
        @media (max-width: 520px) {
          .hero-title { font-size: 32px; }
          .hero { height: 500px; margin: 16px; }
          .client-card { grid-template-columns: 1fr; }
          .results-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------- FLOATING ORBS (BACKGROUND ILLUSIONS) ---------- */}
      <div className="floating-orb orb1"></div>
      <div className="floating-orb orb2"></div>
      <div className="floating-orb orb3"></div>

      {/* ---------- HERO WITH ENHANCED CANVAS ---------- */}
      <div className="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <span className="hero-tag">CASE STUDY</span>
          <h1 className="hero-title">SAP S/4HANA Transformation</h1>
          <p className="hero-subtitle">for EuroTech Industries</p>
        </div>
        <div className="scroll-down">
          <span>Explore</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>

      <div className="content-wrapper">
        {/* ---------- CLIENT OVERVIEW ---------- */}
        <div
          className="client-card fade-up"
          ref={(el) => (animatedElements.current[0] = el)}
        >
          <div className="client-item">
            <div className="client-label">Client</div>
            <div className="client-value">{caseData.client}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Industry</div>
            <div className="client-value">{caseData.industry}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Location</div>
            <div className="client-value">{caseData.location}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Scope</div>
            <div className="client-value">{caseData.scope}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Timeline</div>
            <div className="client-value">{caseData.timeline}</div>
          </div>
        </div>

        {/* ---------- CHALLENGES ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[1] = el)}>
          <h2 className="section-title">The <span>Challenge</span></h2>
          <div className="section-divider" />
        </div>
        <div className="challenges-grid">
          {caseData.challenge.map((item, idx) => (
            <div
              className="challenge-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[2 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="challenge-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="challenge-text">{item}</div>
            </div>
          ))}
        </div>

        {/* ---------- SOLUTION TIMELINE ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[6] = el)}>
          <h2 className="section-title">Our <span>Solution</span></h2>
          <div className="section-divider" />
        </div>
        <div className="timeline">
          {caseData.solutionSteps.map((step, idx) => (
            <div
              className="timeline-step fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[7 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="step-number">{idx + 1}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- ARCHITECTURE HIGHLIGHT ---------- */}
        <div className="architecture fade-up" ref={(el) => (animatedElements.current[11] = el)}>
          <h3 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '20px', color: '#f0f4ff' }}>SAP S/4HANA Landscape</h3>
          <div className="arch-diagram">
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>ECC 6.0</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>S/4HANA</span>
            </div>
            <span className="arch-connector">+</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
              <span>Fiori</span>
            </div>
            <span className="arch-connector">⚙️</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
              <span>BTP</span>
            </div>
          </div>
          <p style={{ color: '#94a3b8', marginTop: '30px', fontSize: '18px' }}>Brownfield conversion with SAP DMO, 80+ Fiori apps, integrated via BTP.</p>
        </div>

        {/* ---------- TECHNOLOGY STACK ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[12] = el)}>
          <h2 className="section-title">Technology <span>Stack</span></h2>
          <div className="section-divider" />
        </div>
        <div className="tech-grid">
          {caseData.techStack.map((tech, idx) => (
            <div
              className="tech-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[13 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="tech-icon">{renderIcon(tech.icon)}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>

        {/* ---------- MIGRATION JOURNEY ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[19] = el)}>
          <h2 className="section-title">Migration <span>Journey</span></h2>
          <div className="section-divider" />
        </div>
        <div className="journey fade-up" ref={(el) => (animatedElements.current[20] = el)}>
          {caseData.journey.map((step, idx) => (
            <div className="journey-step" key={idx}>
              <div className="journey-phase">{step.phase}</div>
              <div className="journey-duration">{step.duration}</div>
              <div className="journey-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- KEY BENEFITS ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[21] = el)}>
          <h2 className="section-title">Key <span>Benefits</span></h2>
          <div className="section-divider" />
        </div>
        <div className="benefits-grid">
          {caseData.benefits.map((benefit, idx) => (
            <div
              className="benefit-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[22 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="benefit-number">{benefit.title}</div>
              <div className="benefit-desc">{benefit.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- RESULTS ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[26] = el)}>
          <h2 className="section-title">Key <span>Outcomes</span></h2>
          <div className="section-divider" />
        </div>
        <div className="results-grid">
          {caseData.results.map((result, idx) => (
            <div
              className="result-card fade-up"
              key={idx}
              ref={(el) => {
                animatedElements.current[27 + idx] = el;
                countersRef.current[idx] = el;
              }}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div
                className="result-number"
                data-target={result.value}
              >
                0{result.suffix}
              </div>
              <div className="result-label">{result.label}</div>
            </div>
          ))}
        </div>

        {/* ---------- TESTIMONIAL ---------- */}
        <div className="testimonial fade-up" ref={(el) => (animatedElements.current[31] = el)}>
          <div className="testimonial-quote">{caseData.testimonial.quote}</div>
          <div className="testimonial-author">— {caseData.testimonial.author}</div>
        </div>

        

        {/* ---------- CALL TO ACTION ---------- */}
        <div className="cta-section fade-up" ref={(el) => (animatedElements.current[36] = el)}>
          <h2 className="cta-title">Ready to modernize your SAP landscape?</h2>
          <p className="cta-desc">Let's discuss how we can help you achieve similar results with a tailored S/4HANA strategy.</p>
          <a href="/contact" className="cta-button">Talk to an expert</a>
        </div>

        {/* ---------- BACK LINK ---------- */}
        <div style={{ textAlign: 'center' }}>
          <a href="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}