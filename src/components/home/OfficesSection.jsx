import { useState, useEffect, useRef } from "react";

const offices = [
  { name: "Dubai, UAE", badge: "WORLDWIDE", icon: "building", location: "Ajman, Dubai", country: "United Arab Emirates", email: "hr@galacticosnetwork.com", accent: "#f59e0b" },
  { name: "Hyderabad, India", badge: "DELIVERY HUB", icon: "laptop", location: "Hi-Tech City", country: "Hyderabad – 500081", email: "hr@galacticosnetwork.com", accent: "#22d3ee" },
  { name: "USA", badge: "WORLDWIDE", icon: "globe", location: "Raleigh", country: "North Carolina - 27526", email: "hr@galacticosnetwork.com", accent: "#a78bfa" },
];

function OfficeIcon({ type, color }) {
  if (type === "building") return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" fill={color} opacity="0.15"/>
      <path d="M7 20V10M12 20V6M17 20V13" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (type === "laptop") return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="13" rx="2" fill={color} opacity="0.12"/>
      <path d="M2 17h20M7 8h10M7 11h7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 19h22" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill={color} opacity="0.1" stroke={color} strokeWidth="1.6"/>
      <path d="M2 12h20M12 3a20 20 0 0 1 0 18M12 3a20 20 0 0 0 0 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.55 + 0.15,
      color: ["#f59e0b","#22d3ee","#a78bfa","#ffffff"][Math.floor(Math.random()*4)],
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2,"0");
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${0.045 * (1 - dist/110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:1 }} />;
}

export default function OfficesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="offices-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ══════════════════════════════════════
           SECTION
        ══════════════════════════════════════ */
        .offices-root {
          position: relative;
          padding: 40px 6%;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          background: radial-gradient(ellipse 120% 80% at 50% 0%, #0f0826 0%, #060d1f 40%, #03080f 70%, #0a0415 100%);
        }

        /* ── Star field ── */
        .stars-layer {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 8%,  rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 58% 22%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 74% 5%,  rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 88% 30%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 21% 55%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 47% 70%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 63% 85%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 91% 60%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 5% 90%,  rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 79% 92%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 42% 42%, rgba(167,139,250,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 67% 15%, rgba(34,211,238,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 18% 75%, rgba(245,158,11,0.6) 0%, transparent 100%);
          animation: startwinkle 4s ease-in-out infinite alternate;
        }
        @keyframes startwinkle {
          0%   { opacity: 0.6; }
          50%  { opacity: 1; }
          100% { opacity: 0.7; }
        }

        /* ── Nebula clouds ── */
        .nebula1 {
          position: absolute; width: 900px; height: 600px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(245,158,11,0.13) 0%, rgba(167,139,250,0.08) 35%, rgba(34,211,238,0.04) 60%, transparent 80%);
          top: -200px; left: -200px; pointer-events: none; z-index: 0; filter: blur(60px);
          animation: nebula1drift 20s ease-in-out infinite alternate;
        }
        @keyframes nebula1drift {
          0%   { transform: translate(0,0) rotate(0deg) scale(1); }
          33%  { transform: translate(80px,60px) rotate(5deg) scale(1.08); }
          66%  { transform: translate(30px,120px) rotate(-3deg) scale(0.95); }
          100% { transform: translate(100px,40px) rotate(8deg) scale(1.05); }
        }

        .nebula2 {
          position: absolute; width: 800px; height: 700px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(34,211,238,0.14) 0%, rgba(167,139,250,0.09) 40%, rgba(245,158,11,0.03) 65%, transparent 80%);
          bottom: -250px; right: -180px; pointer-events: none; z-index: 0; filter: blur(55px);
          animation: nebula2drift 24s ease-in-out infinite alternate;
        }
        @keyframes nebula2drift {
          0%   { transform: translate(0,0) scale(1); opacity: 0.8; }
          40%  { transform: translate(-90px,-70px) scale(1.1); opacity: 1; }
          100% { transform: translate(-40px,-120px) scale(0.9); opacity: 0.7; }
        }

        .nebula3 {
          position: absolute; width: 600px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(167,139,250,0.16) 0%, rgba(34,211,238,0.07) 45%, transparent 75%);
          top: 30%; left: 35%; pointer-events: none; z-index: 0; filter: blur(50px);
          animation: nebula3drift 16s ease-in-out infinite alternate;
        }
        @keyframes nebula3drift {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
          50%  { transform: translate(-45%,-55%) scale(1.15); opacity: 1; }
          100% { transform: translate(-55%,-45%) scale(0.88); opacity: 0.5; }
        }

        /* ── Aurora wave bands ── */
        .aurora-band {
          position: absolute; left: -20%; width: 140%; pointer-events: none; z-index: 0; border-radius: 50%;
        }
        .aurora1 {
          height: 180px; top: 5%;
          background: linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.07) 20%, rgba(167,139,250,0.12) 50%, rgba(34,211,238,0.08) 80%, transparent 100%);
          filter: blur(28px);
          animation: aurorawave 8s ease-in-out infinite alternate;
        }
        .aurora2 {
          height: 140px; bottom: 10%;
          background: linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.09) 25%, rgba(167,139,250,0.1) 55%, rgba(245,158,11,0.07) 80%, transparent 100%);
          filter: blur(24px);
          animation: aurorawave 11s ease-in-out infinite alternate-reverse;
        }
        @keyframes aurorawave {
          0%   { transform: translateX(0) scaleY(1); opacity: 0.6; }
          30%  { transform: translateX(3%) scaleY(1.3); opacity: 1; }
          60%  { transform: translateX(-2%) scaleY(0.8); opacity: 0.7; }
          100% { transform: translateX(4%) scaleY(1.2); opacity: 0.9; }
        }

        /* ── Rotating hex grid ── */
        .hexgrid {
          position: absolute; inset: -20%; pointer-events: none; z-index: 0;
          background-image:
            repeating-linear-gradient(60deg,  rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(120deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(0deg,   rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px);
          animation: hexrotate 60s linear infinite;
        }
        @keyframes hexrotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

       
        /* ── Sweeping beams ── */
        .beam {
          position: absolute; width: 3px; height: 140%; top: -20%;
          background: linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.18) 25%, rgba(34,211,238,0.25) 50%, rgba(245,158,11,0.15) 75%, transparent 100%);
          filter: blur(8px); pointer-events: none; z-index: 0;
          animation: beamsweep 12s linear infinite;
        }
        @keyframes beamsweep { 0% { left:-5%;opacity:0; } 4% { opacity:1; } 94% { opacity:1; } 100% { left:106%;opacity:0; } }

        .beam2 {
          position: absolute; width: 2px; height: 140%; top: -20%;
          background: linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.2) 35%, rgba(167,139,250,0.18) 65%, transparent 100%);
          filter: blur(5px); pointer-events: none; z-index: 0;
          animation: beamsweep2 18s linear infinite; animation-delay: 6s;
        }
        @keyframes beamsweep2 { 0% { left:-5%;opacity:0; } 4% { opacity:1; } 94% { opacity:1; } 100% { left:106%;opacity:0; } }

        .beam3 {
          position: absolute; width: 1px; height: 140%; top: -20%;
          background: linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.22) 40%, rgba(245,158,11,0.16) 60%, transparent 100%);
          filter: blur(4px); pointer-events: none; z-index: 0;
          animation: beamsweep3 15s linear infinite; animation-delay: 10s;
        }
        @keyframes beamsweep3 { 0% { left:-5%;opacity:0; } 4% { opacity:1; } 94% { opacity:1; } 100% { left:106%;opacity:0; } }

        /* ── Pulsing rings ── */
        .ring { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
        .ring1  { width:400px; height:400px; top:-60px; right:-60px; border:1px solid rgba(167,139,250,0.12); box-shadow:inset 0 0 40px rgba(167,139,250,0.05); animation:ringpulse1 7s ease-in-out infinite; }
        .ring1b { width:560px; height:560px; top:-140px; right:-140px; border:1px solid rgba(167,139,250,0.06); animation:ringpulse1 7s ease-in-out infinite; animation-delay:1.5s; }
        .ring2  { width:300px; height:300px; bottom:-50px; left:-50px; border:1px solid rgba(34,211,238,0.1); box-shadow:inset 0 0 30px rgba(34,211,238,0.04); animation:ringpulse2 9s ease-in-out infinite; }
        .ring2b { width:460px; height:460px; bottom:-130px; left:-130px; border:1px solid rgba(34,211,238,0.05); animation:ringpulse2 9s ease-in-out infinite; animation-delay:2s; }
        .ring3  { width:200px; height:200px; top:45%; left:50%; transform:translate(-50%,-50%); border:1px solid rgba(245,158,11,0.1); animation:ringpulse3 5s ease-in-out infinite; }
        @keyframes ringpulse1 { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.06);opacity:1} }
        @keyframes ringpulse2 { 0%,100%{transform:scale(1);opacity:0.4} 50%{transform:scale(1.08);opacity:0.9} }
        @keyframes ringpulse3 { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.3} 50%{transform:translate(-50%,-50%) scale(1.12);opacity:0.8} }

        /* ══════════════════════════════════════
           HEADER
        ══════════════════════════════════════ */
        .offices-header { position: relative; z-index: 2; text-align: center; margin-bottom: 0; }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase; color: #f59e0b; margin-bottom: 18px;
        }
        .eyebrow-line { width: 32px; height: 1px; background: #f59e0b; opacity: 0.6; }

        .title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 5vw, 52px); font-weight: 800;
          color: #ffffff; letter-spacing: -1px; line-height: 1.2; margin-bottom: 16px;
        }
        .title-accent {
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sub {
          font-family: 'Inter', sans-serif; font-size: 16px; color: #ffffff; font-weight: 400; opacity: 0.72; letter-spacing: 0; line-height: 1.6; max-width: 600px; margin: 0 auto;
        }

        /* ══════════════════════════════════════
           GRID – even spacing (30px gap)
        ══════════════════════════════════════ */
        .grid {
          position: relative; z-index: 2; max-width: 1200px; margin: 48px auto 0;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px;
        }

        /* ══════════════════════════════════════
           CARD
        ══════════════════════════════════════ */
        .card {
          position: relative; border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          padding: 32px 24px 24px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          overflow: hidden; cursor: default;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, background 0.35s, border-color 0.35s;
        }
        .card.active {
          transform: translateY(-7px); background: rgba(255,255,255,0.09); border-color: var(--a);
        }

        .topbar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--a), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .card.active .topbar { opacity: 1; }

        .card-head {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          margin-bottom: 18px; width: 100%;
        }

        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 11px; border-radius: 50px;
          border: 1px solid var(--a);
          font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--a);
          background: var(--af); white-space: nowrap;
        }
        .dot {
          width: 5px; height: 5px; border-radius: 50%; background: var(--a);
          animation: pd 2s infinite; flex-shrink: 0;
        }
        @keyframes pd { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }

        .icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s;
        }
        .card.active .icon-wrap { background: var(--af); border-color: var(--a); }

        .card-name {
          font-family: 'Inter', sans-serif; font-size: 19px; font-weight: 700;
          color: #ffffff; letter-spacing: -0.02em; margin-bottom: 18px;
        }

        .divider { width: 100%; height: 1px; background: rgba(255,255,255,0.1); margin-bottom: 18px; }

        .info-list {
          display: flex; flex-direction: column; gap: 11px;
          margin-bottom: 22px; flex-grow: 1; width: 100%; align-items: center;
        }
        .info-row {
          display: flex; align-items: center; justify-content: flex-start; gap: 9px;
          font-size: 13px; color: #ffffff; font-weight: 400; width: 180px;
        }
        .info-row svg { flex-shrink: 0; color: var(--a); opacity: 0.85; }

        .email-btn {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          padding: 12px 16px; border-radius: 11px;
          border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.06);
          text-decoration: none; color: #ffffff; font-size: 12.5px; font-weight: 500;
          transition: all 0.28s; margin-top: auto; width: 100%;
        }
        .email-btn:hover { background: var(--af); border-color: var(--a); color: var(--a); }

        .email-icon-box {
          display: flex; align-items: center; justify-content: center;
          width: 25px; height: 25px; border-radius: 7px;
          background: var(--af); border: 1px solid var(--a); color: var(--a); flex-shrink: 0;
        }

        @media(max-width:900px){ .grid{ grid-template-columns:1fr 1fr; gap: 24px; } }
        @media(max-width:580px){ .grid{ grid-template-columns:1fr; gap: 18px; } .offices-root{ padding:40px 5%; } }
      `}</style>

      {/* ── Animated background ── */}
      <div className="stars-layer" />
      <div className="nebula1" />
      <div className="nebula2" />
      <div className="nebula3" />
      <div className="hexgrid" />
      <div className="aurora-band aurora1" />
      <div className="aurora-band aurora2" />
      <div className="shoot shoot1" />
      <div className="shoot shoot2" />
      <div className="shoot shoot3" />
      <div className="shoot shoot4" />
      <div className="beam" />
      <div className="beam2" />
      <div className="beam3" />
      <div className="ring ring1" />
      <div className="ring ring1b" />
      <div className="ring ring2" />
      <div className="ring ring2b" />
      <div className="ring ring3" />
      <ParticleCanvas />

      {/* ── Header ── */}
      <div className="offices-header">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          Global Network
          <span className="eyebrow-line" />
        </div>
        <h2 className="title">Our <span className="title-accent">Global</span> Presence</h2>
        <p className="sub">Strategic delivery centers designed for seamless collaboration</p>
      </div>

      {/* ── Cards with even spacing ── */}
      <div className="grid">
        {offices.map((o) => (
          <div
            key={o.name}
            className={`card${hovered === o.name ? " active" : ""}`}
            style={{
              "--a": o.accent,
              "--af": o.accent + "18",
              boxShadow: hovered === o.name
                ? `0 0 0 1px ${o.accent}, 0 28px 50px rgba(0,0,0,0.5), 0 0 70px ${o.accent}22`
                : "0 4px 28px rgba(0,0,0,0.35)"
            }}
            onMouseEnter={() => setHovered(o.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="topbar" />

            <div className="card-head">
              <div className="icon-wrap">
                <OfficeIcon type={o.icon} color={o.accent} />
              </div>
              <span className="badge"><span className="dot" />{o.badge}</span>
            </div>

            <h3 className="card-name">{o.name}</h3>
            <div className="divider" />

            <div className="info-list">
              <div className="info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {o.location}
              </div>
              <div className="info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {o.country}
              </div>
            </div>

            <a href={`mailto:${o.email}`} className="email-btn">
              <span className="email-icon-box">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              {o.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}