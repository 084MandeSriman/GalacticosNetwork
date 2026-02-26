import React, { useState, useEffect } from "react";

const styles = `
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(30px); }
  }
  
  @keyframes expandLine {
    from { width: 0; }
    to { width: 100px; }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { background-color: rgba(0, 198, 255, 0.6); }
    50% { background-color: rgba(0, 198, 255, 0.2); }
  }

  @keyframes sapFlip {
    0% {
      background: linear-gradient(135deg, #1b9db7, #167a8d);
    }
    25% {
      background: linear-gradient(225deg, #1b9db7, #167a8d);
    }
    50% {
      background: linear-gradient(315deg, #1b9db7, #167a8d);
    }
    75% {
      background: linear-gradient(45deg, #1b9db7, #167a8d);
    }
    100% {
      background: linear-gradient(135deg, #1b9db7, #167a8d);
    }
  }

  @keyframes oracleFlip {
    0% {
      background: linear-gradient(135deg, #e07b39, #d4642e);
    }
    25% {
      background: linear-gradient(225deg, #e07b39, #d4642e);
    }
    50% {
      background: linear-gradient(315deg, #e07b39, #d4642e);
    }
    75% {
      background: linear-gradient(45deg, #e07b39, #d4642e);
    }
    100% {
      background: linear-gradient(135deg, #e07b39, #d4642e);
    }
  }

  @keyframes workdayFlip {
    0% {
      background: linear-gradient(135deg, #21a366, #1a8a56);
    }
    25% {
      background: linear-gradient(225deg, #21a366, #1a8a56);
    }
    50% {
      background: linear-gradient(315deg, #21a366, #1a8a56);
    }
    75% {
      background: linear-gradient(45deg, #21a366, #1a8a56);
    }
    100% {
      background: linear-gradient(135deg, #21a366, #1a8a56);
    }
  }

  @keyframes gridPulse {
    0% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.2; transform: scale(1.05); }
    100% { opacity: 0.1; transform: scale(1); }
  }

  @keyframes dataFlow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes cubeRotate {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }
`;

export default function ERP() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleCardMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // SAP DNA/Grid Pattern
  const SAPPattern = () => (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.35,
        pointerEvents: "none",
      }}
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Grid background */}
      {[20, 60, 100, 140, 180, 220, 260].map((x) => (
        <line key={`vline-${x}`} x1={x} y1="0" x2={x} y2="300" stroke="rgba(27, 157, 183, 0.25)" strokeWidth="1" />
      ))}
      {[20, 60, 100, 140, 180, 220, 260].map((y) => (
        <line key={`hline-${y}`} x1="0" y1={y} x2="300" y2={y} stroke="rgba(27, 157, 183, 0.25)" strokeWidth="1" />
      ))}
      {/* Data flow lines */}
      <path d="M 50 50 L 250 250" stroke="rgba(27, 157, 183, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M 250 50 L 50 250" stroke="rgba(27, 157, 183, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
      {/* SAP Logo-like */}
      <text x="120" y="160" fill="rgba(27, 157, 183, 0.4)" fontSize="40" fontWeight="bold" fontFamily="Arial">SAP</text>
    </svg>
  );

  // Oracle Cloud/Database Pattern
  const OraclePattern = () => (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.35,
        pointerEvents: "none",
      }}
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Database cylinders */}
      {[80, 150, 220].map((x, i) => (
        <g key={`db-${i}`}>
          <ellipse cx={x} cy="100" rx="25" ry="8" fill="rgba(224, 123, 57, 0.3)" />
          <rect x={x-25} y="100" width="50" height="80" fill="none" stroke="rgba(224, 123, 57, 0.3)" strokeWidth="2" rx="10" />
          <ellipse cx={x} cy="180" rx="25" ry="8" fill="rgba(224, 123, 57, 0.3)" />
        </g>
      ))}
      {/* Cloud shape */}
      <path d="M 80 200 Q 100 180 140 190 T 200 180 T 250 200" stroke="rgba(224, 123, 57, 0.3)" strokeWidth="2" fill="none" strokeDasharray="4,4" />
      <circle cx="200" cy="190" r="15" fill="none" stroke="rgba(224, 123, 57, 0.3)" strokeWidth="2" />
    </svg>
  );

  // Workday People/Calendar Pattern
  const WorkdayPattern = () => (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.35,
        pointerEvents: "none",
      }}
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* People icons */}
      {[60, 150, 240].map((x, i) => (
        <g key={`person-${i}`}>
          <circle cx={x} cy="100" r="12" stroke="rgba(33, 163, 102, 0.4)" strokeWidth="2" fill="none" />
          <line x1={x-10} y1="130" x2={x+10} y2="130" stroke="rgba(33, 163, 102, 0.4)" strokeWidth="2" />
          <path d={`M ${x-12} 160 Q ${x} 180 ${x+12} 160`} stroke="rgba(33, 163, 102, 0.4)" strokeWidth="2" fill="none" />
        </g>
      ))}
      {/* Calendar grid */}
      {[40, 80, 120, 160, 200, 240].map((y) => (
        <line key={`hline-${y}`} x1="30" y1={y} x2="270" y2={y} stroke="rgba(33, 163, 102, 0.2)" strokeWidth="1" />
      ))}
      {[30, 70, 110, 150, 190, 230, 270].map((x) => (
        <line key={`vline-${x}`} x1={x} y1="40" x2={x} y2="260" stroke="rgba(33, 163, 102, 0.2)" strokeWidth="1" />
      ))}
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", color: "#1a1a1a", backgroundColor: "#fafafa" }}>
      <style>{styles}</style>

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          padding: "60px 5%",
          color: "#fff",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(135deg, rgba(30,20,50,0.9), rgba(20,50,90,0.85)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Floating Glow Background */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
            top: "-150px",
            right: "-150px",
            borderRadius: "50%",
            animation: "floatSlow 18s ease-in-out infinite",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
            width: "100%",
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ animation: "slideInLeft 0.8s ease-out" }}>
            <div
              style={{
                display: "inline-block",
                padding: "10px 24px",
                borderRadius: "30px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                fontSize: "13px",
                letterSpacing: "2px",
                marginBottom: "25px",
                fontWeight: "600",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Enterprise Resource Planning
            </div>

            <h1
              style={{
                fontSize: "calc(2.5rem + 2vw)",
                fontWeight: "800",
                maxWidth: "600px",
                lineHeight: 1.15,
                marginBottom: "25px",
                letterSpacing: "-1px",
              }}
            >
              Transform your core with next‑gen ERP
            </h1>

            <p
              style={{
                fontSize: "18px",
                maxWidth: "550px",
                lineHeight: "1.7",
                marginBottom: "30px",
                opacity: 0.95,
                fontWeight: "300",
              }}
            >
              Unify finance, supply chain, HR, and operations on a single intelligent platform — SAP, Oracle, and Workday expertise to accelerate your digital core.
            </p>

            {/* Accent Line */}
            <div
              style={{
                width: "80px",
                height: "4px",
                marginBottom: "30px",
                background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                borderRadius: "10px",
                animation: "expandLine 1.5s ease",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                border: "none",
                color: "#fff",
                padding: "14px 40px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "50px",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(0, 114, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0, 114, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 114, 255, 0.3)";
              }}
            >
              Explore ERP Solutions →
            </button>
          </div>

          {/* RIGHT SVG ANIMATION */}
          <div style={{ textAlign: "center", animation: "slideInUp 0.8s ease-out 0.2s both" }}>
            <svg
              width="340"
              height="340"
              viewBox="0 0 300 300"
              style={{ maxWidth: "100%", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))" }}
            >
              {/* Abstract ERP cubes */}
              <g transform="translate(100, 100)">
                <rect x="-30" y="-30" width="60" height="60" rx="8" fill="rgba(255,255,255,0.1)" stroke="#fff" strokeWidth="2" />
                <rect x="10" y="-20" width="60" height="60" rx="8" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="2" />
                <rect x="-20" y="10" width="60" height="60" rx="8" fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="2" />
              </g>
              {/* Connecting lines */}
              <line x1="100" y1="100" x2="170" y2="100" stroke="#00c6ff" strokeWidth="2" strokeDasharray="4,4" />
              <line x1="130" y1="130" x2="100" y2="170" stroke="#00c6ff" strokeWidth="2" strokeDasharray="4,4" />
              <line x1="170" y1="100" x2="150" y2="150" stroke="#00c6ff" strokeWidth="2" strokeDasharray="4,4" />
              {/* Animated dots */}
              <circle cx="100" cy="100" r="6" fill="#00c6ff">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="170" cy="100" r="6" fill="#0072ff">
                <animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy="130" r="6" fill="#00c6ff">
                <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section style={{ padding: "90px 5%", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            animation: "slideInUp 0.8s ease-out",
          }}
        >
          <h2
            style={{
              color: "#0a5ca8",
              fontSize: "calc(1.8rem + 1vw)",
              marginBottom: "12px",
              fontWeight: "800",
            }}
          >
            Intelligent. Integrated. Innovative.
          </h2>
          <h3
            style={{
              fontSize: "24px",
              marginBottom: "25px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            Power your business with a future‑ready digital core.
          </h3>
          <div style={{ height: "3px", width: "60px", background: "linear-gradient(90deg, #00c6ff, #0072ff)", borderRadius: "2px", marginBottom: "30px" }} />
          <p
            style={{
              lineHeight: "1.8",
              maxWidth: "900px",
              fontSize: "16px",
              color: "#555",
              fontWeight: "400",
            }}
          >
            Modern ERP is the backbone of digital transformation. We help you modernize, extend, and optimize your SAP, Oracle, and Workday environments — from cloud migration and system integration to process automation and analytics. Drive real‑time insights, agility, and efficiency across your enterprise.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section
        style={{
          padding: "80px 5%",
          background: "linear-gradient(135deg, rgba(10,60,120,0.08), rgba(0,198,255,0.06))",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            animation: "slideInUp 0.8s ease-out",
          }}
        >
          <h2
            style={{
              fontSize: "calc(1.8rem + 1vw)",
              marginBottom: "15px",
              fontWeight: "800",
              color: "#1a1a1a",
            }}
          >
            Overview
          </h2>
          <div style={{ height: "3px", width: "60px", background: "linear-gradient(90deg, #00c6ff, #0072ff)", borderRadius: "2px", marginBottom: "25px" }} />
          <p
            style={{
              lineHeight: "1.8",
              maxWidth: "900px",
              fontSize: "16px",
              color: "#555",
            }}
          >
            We deliver end‑to‑end ERP transformation — from strategy and implementation to managed services. Whether you are migrating to the cloud, adopting S/4HANA, implementing Oracle Cloud ERP, or extending Workday, our certified consultants ensure seamless delivery and maximum ROI.
          </p>
        </div>
      </section>

      {/* ================= PLATFORM CARDS SECTION ================= */}
      <section style={{ padding: "90px 5%", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "calc(1.8rem + 1vw)",
              fontWeight: "800",
              color: "#1a1a1a",
            }}
          >
            Leading ERP Platforms
          </h2>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "60px",
              fontSize: "calc(1.8rem + 1vw)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #00c6ff, #0072ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We Speak Your Language
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "35px",
            }}
          >
            {/* SAP Card */}
            <div
              style={{
                position: "relative",
                padding: "50px 30px",
                minHeight: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "linear-gradient(135deg, rgba(20, 40, 60, 0.95), rgba(10, 30, 50, 0.95))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredCard === "sap"
                    ? "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(27, 157, 183, 0.15)"
                    : "0 15px 40px rgba(0, 0, 0, 0.3)",
                transform:
                  hoveredCard === "sap"
                    ? `scale(1.04) perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredCard("sap")}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleCardMouseMove(e, "sap")}
            >
              <SAPPattern />
              
              {/* Dark Overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(8, 25, 35, 0.6), rgba(5, 20, 30, 0.5))",
                  zIndex: 1,
                }}
              />

              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>📊</div>
                <h3 style={{ fontSize: "26px", marginBottom: "15px", fontWeight: 700, color: "#fff" }}>
                  SAP
                </h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9, color: "rgba(255,255,255,0.85)" }}>
                  Drive digital transformation with SAP S/4HANA, cloud migration, and intelligent suite extensions. We optimize finance, supply chain, and customer experience.
                </p>
              </div>
            </div>

            {/* Oracle Card */}
            <div
              style={{
                position: "relative",
                padding: "50px 30px",
                minHeight: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "linear-gradient(135deg, rgba(50, 30, 20, 0.95), rgba(40, 25, 15, 0.95))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredCard === "oracle"
                    ? "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(224, 123, 57, 0.15)"
                    : "0 15px 40px rgba(0, 0, 0, 0.3)",
                transform:
                  hoveredCard === "oracle"
                    ? `scale(1.04) perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredCard("oracle")}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleCardMouseMove(e, "oracle")}
            >
              <OraclePattern />
              
              {/* Dark Overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(30, 15, 8, 0.6), rgba(20, 10, 5, 0.5))",
                  zIndex: 1,
                }}
              />

              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>☁️</div>
                <h3 style={{ fontSize: "26px", marginBottom: "15px", fontWeight: 700, color: "#fff" }}>
                  Oracle
                </h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9, color: "rgba(255,255,255,0.85)" }}>
                  Modernize with Oracle Cloud ERP, EPM, and SCM. We deliver seamless implementations, integrations, and analytics to unify your financial and operational data.
                </p>
              </div>
            </div>

            {/* Workday Card */}
            <div
              style={{
                position: "relative",
                padding: "50px 30px",
                minHeight: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "linear-gradient(135deg, rgba(20, 50, 30, 0.95), rgba(10, 40, 20, 0.95))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredCard === "workday"
                    ? "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(33, 163, 102, 0.15)"
                    : "0 15px 40px rgba(0, 0, 0, 0.3)",
                transform:
                  hoveredCard === "workday"
                    ? `scale(1.04) perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredCard("workday")}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleCardMouseMove(e, "workday")}
            >
              <WorkdayPattern />
              
              {/* Dark Overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(8, 30, 15, 0.6), rgba(5, 25, 10, 0.5))",
                  zIndex: 1,
                }}
              />

              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>👥</div>
                <h3 style={{ fontSize: "26px", marginBottom: "15px", fontWeight: 700, color: "#fff" }}>
                  Workday
                </h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9, color: "rgba(255,255,255,0.85)" }}>
                  Empower your workforce with Workday Financial Management, HCM, and Planning. We help you streamline HR, finance, and analytics in a single cloud platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(30,20,50,0.92), rgba(20,50,90,0.92)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 5%",
          color: "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "calc(1.8rem + 1vw)",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Ready to modernize your ERP?
            </h2>
            <p style={{ fontSize: "18px", opacity: 0.9 }}>
              Partner with our certified ERP experts to accelerate your journey to the cloud and beyond.
            </p>
          </div>

          {/* Service Options */}
          <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <button
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.25)";
                e.target.style.borderColor = "#fff";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
                e.target.style.borderColor = "rgba(255,255,255,0.3)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Advisory & Strategy
            </button>

            <button
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.25)";
                e.target.style.borderColor = "#fff";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
                e.target.style.borderColor = "rgba(255,255,255,0.3)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Implementation & Migration
            </button>

            <button
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                border: "none",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(0, 114, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0, 114, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 114, 255, 0.3)";
              }}
            >
              CONNECT NOW →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}