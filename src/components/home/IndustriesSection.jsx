import React, { useEffect, useRef } from "react";

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // ========== SCROLL REVEAL ==========
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="showcase-section" ref={sectionRef}>
      <style>{`
        /* ========== THEME & VARIABLES ========== */
        :root {
          --bg-dark: #f5f1e8;
          --card-bg: rgba(255,255,255,0.85);
          --text-main: #1a1a1a;
          --text-muted: #4a4a4a;
          --accent-1: #6366f1; /* Indigo */
          --accent-2: #ec4899; /* Pink */
          --accent-3: #10b981; /* Emerald */
        }

        .showcase-section {
          position: relative;
          background: linear-gradient(135deg, #f5f1e8 0%, #ede6d9 25%, #e8dcc9 50%, #f0e9dc 75%, #f5f1e8 100%);
          color: var(--text-main);
          font-family: 'Inter', system-ui, sans-serif;
          overflow: hidden;
          /* Compressed height */
          min-height: auto;
          padding: 60px 5%;
        }
        
        .showcase-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 2;
        }

        /* ========== ANIMATED BACKGROUND ILLUSIONS ========== */
        
        /* Floating orbs */
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: screen;
          opacity: 0.3;
          pointer-events: none;
          z-index: 3;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(99, 102, 241, 0.4);
          top: 10%;
          left: -150px;
          animation: float1 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: rgba(236, 72, 153, 0.3);
          bottom: -100px;
          right: -200px;
          animation: float2 25s ease-in-out infinite;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: rgba(16, 185, 129, 0.25);
          top: 50%;
          right: 5%;
          animation: float3 22s ease-in-out infinite;
        }

        .orb-4 {
          width: 300px;
          height: 300px;
          background: rgba(14, 165, 233, 0.2);
          bottom: 30%;
          left: 10%;
          animation: float1 24s ease-in-out infinite reverse;
        }

        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, 60px) scale(1.15); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes float3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        /* Animated grid pattern */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(0deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: 0 0;
          pointer-events: none;
          z-index: 2;
          animation: gridShift 8s linear infinite;
        }

        @keyframes gridShift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        /* Glow highlights */
        .bg-glow {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }

        .glow-1 {
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15), transparent 70%);
          top: 20%;
          left: 15%;
          animation: pulse1 6s ease-in-out infinite;
        }

        .glow-2 {
          width: 500px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1), transparent 70%);
          bottom: 15%;
          right: 10%;
          animation: pulse2 8s ease-in-out infinite;
        }

        @keyframes pulse1 {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes pulse2 {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.95); }
        }

        /* ========== LAYOUT ========== */
        .showcase-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        /* ========== TYPOGRAPHY (Left Side) ========== */
        .content-col {
          position: sticky;
          top: 20vh;
          padding-right: 40px;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .content-col.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .section-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent-1);
          margin-bottom: 24px;
          border: 1px solid rgba(99, 102, 241, 0.4);
          padding: 6px 12px;
          border-radius: 4px;
        }

        .main-heading {
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 32px 0;
          letter-spacing: -2px;
        }
        .heading-line {
          display: block;
        }
        .heading-highlight {
          color: inherit;
        }

        .main-desc {
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 480px;
          margin-bottom: 40px;
        }

        /* ========== INTERACTIVE CARDS (Right Side) ========== */
        .cards-stack {
          position: relative;
          height: 450px; /* Reduced from 550px */
          perspective: 1000px;
        }

        .stack-card {
          position: absolute;
          width: 100%;
          max-width: 480px;
          height: 280px; /* Reduced from 320px */
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(99, 102, 241, 0.15);
          border-radius: 24px;
          padding: 30px; /* Reduced padding */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        /* Moving background illusion (always visible, very subtle) */
        .stack-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, var(--card-color) 0%, transparent 70%);
          opacity: 0.15;
          border-radius: 24px;
          pointer-events: none;
          z-index: 0;
          animation: moveGlow 8s ease-in-out infinite alternate;
        }

        /* Card-specific animation variations */
        .card-1::before { animation: moveGlow1 10s infinite alternate; }
        .card-2::before { animation: moveGlow2 12s infinite alternate; }
        .card-3::before { animation: moveGlow3 9s infinite alternate; }

        @keyframes moveGlow1 {
          0% { background-position: 0% 0%; opacity: 0.1; }
          100% { background-position: 100% 100%; opacity: 0.25; }
        }

        @keyframes moveGlow2 {
          0% { transform: scale(1) rotate(0deg); opacity: 0.1; }
          100% { transform: scale(1.2) rotate(5deg); opacity: 0.2; }
        }

        @keyframes moveGlow3 {
          0% { background: radial-gradient(circle at 30% 30%, var(--card-color) 0%, transparent 70%); }
          50% { background: radial-gradient(circle at 70% 70%, var(--card-color) 0%, transparent 70%); }
          100% { background: radial-gradient(circle at 30% 30%, var(--card-color) 0%, transparent 70%); }
        }

        /* Card Specific Positions & Colors */
        .card-1 {
          top: 0;
          left: 0;
          z-index: 10;
        }
        .card-2 {
          top: 70px; /* Reduced offset */
          left: 30px;
          z-index: 9;
        }
        .card-3 {
          top: 140px; /* Reduced offset */
          left: 60px;
          z-index: 8;
        }

        /* ========== HOVER INTERACTIONS ========== */
        .stack-card:hover {
          transform: translate(0, 0) scale(1.05);
          z-index: 100;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .cards-stack:hover .stack-card:not(:hover) {
          filter: brightness(0.92);
        }

        .stack-card:not(:hover) {
          transform: translate(0, 0) scale(0.95);
        }
        .card-1 { --card-color: #6366f1; }
        .card-2 { --card-color: #ec4899; }
        .card-3 { --card-color: #10b981; }

        /* ========== ANIMATED SVG ICONS BACKGROUND ========== */
        .card-bg-icons {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.2;
        }

        .card-bg-icons svg {
          position: absolute;
          width: 40px;
          height: 40px;
          fill: var(--card-color);
          opacity: 0.3;
          animation: iconFloat 8s infinite alternate;
        }

        .card-1 .card-bg-icons svg:nth-child(1) { top: 10%; left: 10%; animation: iconFloat1 6s infinite; }
        .card-1 .card-bg-icons svg:nth-child(2) { bottom: 15%; right: 15%; animation: iconFloat2 7s infinite reverse; }
        .card-1 .card-bg-icons svg:nth-child(3) { top: 40%; right: 20%; animation: iconFloat3 5s infinite; }

        .card-2 .card-bg-icons svg:nth-child(1) { top: 15%; left: 20%; animation: iconFloat1 7s infinite; }
        .card-2 .card-bg-icons svg:nth-child(2) { bottom: 20%; right: 10%; animation: iconFloat2 6s infinite reverse; }
        .card-2 .card-bg-icons svg:nth-child(3) { top: 50%; left: 30%; animation: iconFloat3 8s infinite; }

        .card-3 .card-bg-icons svg:nth-child(1) { top: 20%; right: 20%; animation: iconFloat1 5s infinite; }
        .card-3 .card-bg-icons svg:nth-child(2) { bottom: 10%; left: 15%; animation: iconFloat2 9s infinite reverse; }
        .card-3 .card-bg-icons svg:nth-child(3) { top: 60%; right: 30%; animation: iconFloat3 7s infinite; }

        @keyframes iconFloat1 {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-15px) rotate(15deg); }
        }
        @keyframes iconFloat2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10px, -10px) scale(1.1); }
        }
        @keyframes iconFloat3 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(30deg); }
        }

        /* ========== CARD INTERNALS ========== */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }
        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--card-color);
          position: relative;
          z-index: 2;
        }
        .card-icon svg {
          width: 24px;
          height: 24px;
        }
        .card-index {
          font-size: 60px; /* Smaller to fit compressed card */
          font-weight: 800;
          color: rgba(0, 0, 0, 0.05);
          position: absolute;
          right: 15px;
          top: -5px;
          line-height: 1;
          pointer-events: none;
        }

        .card-content h3 {
          font-size: 22px; /* Slightly smaller */
          margin: 0 0 6px 0;
          font-weight: 700;
          position: relative;
          z-index: 2;
          color: #1a1a1a;
        }
        .card-content p {
          font-size: 14px; /* Smaller */
          color: #4a4a4a;
          margin: 0;
          line-height: 1.5;
          position: relative;
          z-index: 2;
        }
        .card-footer {
          margin-top: auto;
          font-size: 12px;
          font-weight: 600;
          color: var(--card-color);
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
          z-index: 2;
        }

        /* ========== FLOATING CARD ANIMATIONS ========== */
        .card-1 {
          animation: float-card-1 4s ease-in-out infinite;
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.15);
        }
        .card-2 {
          animation: float-card-2 5s ease-in-out infinite;
          box-shadow: 0 15px 35px rgba(236, 72, 153, 0.15);
        }
        .card-3 {
          animation: float-card-3 6s ease-in-out infinite;
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.15);
        }

        @keyframes float-card-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-card-2 {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(5px); }
        }
        @keyframes float-card-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        /* Animated border glow on hover */
        .stack-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, var(--card-color), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: background 0.4s ease;
          opacity: 0;
          z-index: 3;
          pointer-events: none;
        }

        @keyframes borderGlow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }

        .stack-card:hover::after {
          animation: borderGlow 0.6s ease-in-out;
          opacity: 0.8;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1024px) {
          .showcase-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .content-col {
            position: relative;
            top: 0;
            text-align: center;
            padding-right: 0;
          }
          .main-desc {
            margin: 0 auto 40px;
          }
          .cards-stack {
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .stack-card {
            position: relative;
            top: 0 !important;
            left: 0 !important;
            width: 100%;
            max-width: 100%;
            height: auto;
            transform: none !important;
          }
          .stack-card:hover {
            transform: scale(1.01) !important;
          }
        }
      `}</style>

      <div className="noise-overlay" />
      
      {/* Animated background illusions */}
      <div className="bg-grid" />
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="bg-orb orb-4" />
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />

      <div className="showcase-container">
        {/* LEFT COLUMN: TYPOGRAPHY */}
        <div className="content-col" ref={contentRef}>
          <span className="section-label">Engagement Models</span>
          <h2 className="main-heading">
            <span className="heading-line">Flexible by</span>
            <span className="heading-line heading-highlight">Design.</span>
          </h2>
          <p className="main-desc">
            We design engagement models tailored to your operating model, risk profile, and long-term transformation roadmap.
          </p>
        </div>

        {/* RIGHT COLUMN: STACKED CARDS */}
        <div className="cards-stack">
          
          {/* CARD 01 */}
          <div className="stack-card card-1">
            <div className="card-bg-icons">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12zM9 10v6l5-3z"/>
              </svg>
            </div>
           
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3>Professional Services</h3>
              <p>Augment your team with top-tier talent. We provide the expertise, you provide the vision. Ideal for scaling fast.</p>
            </div>
            <div className="card-footer">
              Staff Augmentation <span>&rarr;</span>
            </div>
          </div>

          {/* CARD 02 */}
          <div className="stack-card card-2">
            <div className="card-bg-icons">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12zM9 10v6l5-3z"/>
              </svg>
            </div>
            
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3>Managed Services</h3>
              <p>End-to-end ownership. We take responsibility for the roadmap, execution, and quality assurance.</p>
            </div>
            <div className="card-footer">
              Outcome-Based <span>&rarr;</span>
            </div>
          </div>

          {/* CARD 03 */}
          <div className="stack-card card-3">
            <div className="card-bg-icons">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12zM9 10v6l5-3z"/>
              </svg>
            </div>
           
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3>Build Your Own</h3>
              <p>Create a dedicated offshore hub. We set up the infrastructure and culture, you own the team.</p>
            </div>
            <div className="card-footer">
              Dedicated Centers <span>&rarr;</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}