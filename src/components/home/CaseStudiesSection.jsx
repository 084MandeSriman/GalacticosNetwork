import { useEffect, useRef, useState } from "react";

// ─── Illusion Components ───────────────────────────────────────────────────────

function CloudIllusion() {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="skyGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#0e3a6e" />
          <stop offset="100%" stopColor="#020917" />
        </radialGradient>
        <filter id="cloudBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <linearGradient id="auroraH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00c6ff" stopOpacity="0" />
          <stop offset="40%" stopColor="#00c6ff" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#skyGrad)" />
      {/* Aurora bands */}
      <ellipse cx="200" cy="90" rx="220" ry="18" fill="url(#auroraH)" opacity="0.7">
        <animate attributeName="ry" values="18;28;18" dur="5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="90;80;90" dur="7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="160" cy="120" rx="180" ry="10" fill="#34d399" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="6s" repeatCount="indefinite" />
      </ellipse>
      {/* Cloud shapes */}
      {[
        { cx: 80, cy: 170, rx: 60, ry: 20, delay: "0s" },
        { cx: 220, cy: 150, rx: 90, ry: 25, delay: "1.5s" },
        { cx: 340, cy: 180, rx: 55, ry: 16, delay: "0.8s" },
      ].map((c, i) => (
        <ellipse key={i} cx={c.cx} cy={c.cy} rx={c.rx} ry={c.ry}
          fill="white" opacity="0.06" filter="url(#cloudBlur)">
          <animateTransform attributeName="transform" type="translate"
            values="0,0; 12,-5; 0,0" dur={`${8 + i * 2}s`} begin={c.delay} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.06;0.14;0.06" dur={`${6 + i}s`} repeatCount="indefinite" />
        </ellipse>
      ))}
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={(i * 71 + 13) % 390} cy={(i * 37 + 20) % 130} r="1"
          fill="white" opacity="0.4">
          <animate attributeName="opacity" values="0.4;1;0.4"
            dur={`${2 + (i % 4)}s`} begin={`${(i * 0.3) % 3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SAPIllusion() {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="sapBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0d1a0d" />
          <stop offset="100%" stopColor="#010903" />
        </radialGradient>
        <filter id="sapGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="260" fill="url(#sapBg)" />
      {/* Hexagonal grid */}
      {[...Array(12)].map((_, i) => {
        const col = i % 4; const row = Math.floor(i / 4);
        const x = 60 + col * 90 + (row % 2 === 1 ? 45 : 0);
        const y = 50 + row * 75;
        return (
          <polygon key={i}
            points={[0,1,2,3,4,5].map(j => {
              const a = (j * 60 - 90) * Math.PI / 180;
              return `${x + 28 * Math.cos(a)},${y + 28 * Math.sin(a)}`;
            }).join(" ")}
            fill="none" stroke="#00d084" strokeWidth="0.8" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.5;0.2"
              dur={`${3 + (i % 3)}s`} begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </polygon>
        );
      })}
      {/* Central data sphere */}
      <circle cx="200" cy="130" r="40" fill="none" stroke="#00d084" strokeWidth="1.5" opacity="0.6" filter="url(#sapGlow)">
        <animate attributeName="r" values="40;46;40" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="130" r="20" fill="#00d084" opacity="0.15">
        <animate attributeName="r" values="20;26;20" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="130" r="6" fill="#00d084" filter="url(#sapGlow)" />
      {/* Orbiting particles */}
      {[0, 120, 240].map((deg, i) => (
        <circle key={i} cx="200" cy="130" r="3" fill="#00ff9d" opacity="0.9" filter="url(#sapGlow)">
          <animateTransform attributeName="transform" type="rotate"
            from={`${deg} 200 130`} to={`${deg + 360} 200 130`}
            dur={`${4 + i}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" additive="sum"
            values={`0,0; ${40 * Math.cos(deg * Math.PI / 180)},${40 * Math.sin(deg * Math.PI / 180)}; 0,0`}
            dur="0.01s" />
        </circle>
      ))}
      {[0, 120, 240].map((startDeg, i) => (
        <g key={`orbit-${i}`}>
          <animateTransform attributeName="transform" type="rotate"
            from={`${startDeg} 200 130`} to={`${startDeg + 360} 200 130`}
            dur={`${4 + i}s`} repeatCount="indefinite" />
          <circle cx={200 + 50} cy={130} r="4" fill="#00ff9d" opacity="0.9" filter="url(#sapGlow)">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function HyperionIllusion() {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="hypBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a0a00" />
          <stop offset="100%" stopColor="#050200" />
        </radialGradient>
        <filter id="hypGlow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect width="400" height="260" fill="url(#hypBg)" />
      {/* Isometric cube wireframe */}
      {/* Top face */}
      <polygon points="200,60 270,100 200,140 130,100" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </polygon>
      {/* Left face */}
      <polygon points="130,100 200,140 200,200 130,160" fill="#f59e0b" opacity="0.05">
        <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" />
      </polygon>
      <polygon points="130,100 200,140 200,200 130,160" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
      {/* Right face */}
      <polygon points="270,100 200,140 200,200 270,160" fill="#f97316" opacity="0.08">
        <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2.5s" repeatCount="indefinite" />
      </polygon>
      <polygon points="270,100 200,140 200,200 270,160" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.5" />
      {/* Glow core */}
      <ellipse cx="200" cy="140" rx="30" ry="15" fill="#f59e0b" filter="url(#hypGlow)" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </ellipse>
      {/* Data flow lines */}
      {[20, 60, 100, 140, 180].map((x, i) => (
        <line key={i} x1={x * 2} y1="0" x2={x * 2 - 30} y2="260"
          stroke="#f59e0b" strokeWidth="0.5" opacity="0.08">
          <animate attributeName="opacity" values="0.08;0.2;0.08"
            dur={`${2 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}
      {/* Floating numbers (financial data feel) */}
      {["99.9%", "$4.2B", "6d", "Δ+32%"].map((t, i) => (
        <text key={i} x={40 + i * 90} y={220} fontSize="9" fill="#f59e0b" opacity="0.4"
          fontFamily="monospace" textAnchor="middle">
          {t}
          <animate attributeName="opacity" values="0.4;0.8;0.4"
            dur={`${2 + i * 0.5}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </text>
      ))}
    </svg>
  );
}

function AutomationIllusion() {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="autoBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#001a15" />
          <stop offset="100%" stopColor="#00050a" />
        </radialGradient>
        <filter id="autoGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="260" fill="url(#autoBg)" />
      {/* Circuit paths */}
      <polyline points="40,80 90,80 90,130 160,130 160,80 240,80 240,160 310,160 310,100 370,100"
        fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.35" strokeDasharray="6 4">
        <animate attributeName="strokeDashoffset" from="0" to="-40" dur="1.5s" repeatCount="indefinite" />
      </polyline>
      <polyline points="40,180 100,180 100,140 180,140 180,200 270,200 270,140 360,140"
        fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.25" strokeDasharray="6 4">
        <animate attributeName="strokeDashoffset" from="0" to="-40" dur="2s" repeatCount="indefinite" />
      </polyline>
      {/* Nodes */}
      {[[90,80],[160,80],[240,80],[90,130],[160,130],[310,100],[270,200]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="#10b981" filter="url(#autoGlow)">
          <animate attributeName="r" values="5;7;5" dur={`${1+i*0.3}s`} begin={`${i*0.2}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.4;1" dur={`${1.5+i*0.2}s`} begin={`${i*0.15}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Center bot icon */}
      <rect x="175" y="105" width="50" height="50" rx="8" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.8" filter="url(#autoGlow)" />
      <circle cx="200" cy="130" r="12" fill="#10b981" opacity="0.2" />
      <circle cx="200" cy="130" r="4" fill="#10b981" filter="url(#autoGlow)" />
      <line x1="192" y1="118" x2="192" y2="142" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
      <line x1="208" y1="118" x2="208" y2="142" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
      {/* Scan line */}
      <rect x="0" y="0" width="400" height="3" fill="#10b981" opacity="0.15">
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 0,260; 0,0" dur="3s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function AIIllusion() {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="aiBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#07001e" />
          <stop offset="100%" stopColor="#020012" />
        </radialGradient>
        <filter id="aiGlow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="260" fill="url(#aiBg)" />
      {/* Neural network nodes */}
      {[
        { x: 60, y: 80, layer: 0 }, { x: 60, y: 130, layer: 0 }, { x: 60, y: 180, layer: 0 },
        { x: 150, y: 60, layer: 1 }, { x: 150, y: 110, layer: 1 }, { x: 150, y: 160, layer: 1 }, { x: 150, y: 210, layer: 1 },
        { x: 240, y: 90, layer: 2 }, { x: 240, y: 150, layer: 2 }, { x: 240, y: 200, layer: 2 },
        { x: 330, y: 110, layer: 3 }, { x: 330, y: 160, layer: 3 },
      ].map(({ x, y, layer }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="#7c3aed" opacity="0.15" />
          <circle cx={x} cy={y} r="5" fill={["#a78bfa","#60a5fa","#f472b6","#34d399"][layer]} filter="url(#aiGlow)">
            <animate attributeName="opacity" values="0.8;1;0.8" dur={`${1.5+i*0.2}s`} begin={`${i*0.1}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
      {/* Connections */}
      {[
        [[60,80],[150,60]],[[60,80],[150,110]],[[60,80],[150,160]],
        [[60,130],[150,110]],[[60,130],[150,160]],[[60,180],[150,160]],[[60,180],[150,210]],
        [[150,60],[240,90]],[[150,110],[240,90]],[[150,110],[240,150]],
        [[150,160],[240,150]],[[150,160],[240,200]],[[150,210],[240,200]],
        [[240,90],[330,110]],[[240,150],[330,110]],[[240,150],[330,160]],[[240,200],[330,160]],
      ].map(([[x1,y1],[x2,y2]], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#a78bfa" strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3">
          <animate attributeName="opacity" values="0.15;0.4;0.15"
            dur={`${2+i*0.15}s`} begin={`${i*0.05}s`} repeatCount="indefinite" />
        </line>
      ))}
      {/* Data pulse traveling along connections */}
      <circle r="3" fill="#f472b6" filter="url(#aiGlow)">
        <animateMotion path="M60,130 L150,110 L240,150 L330,110" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#60a5fa" filter="url(#aiGlow)">
        <animateMotion path="M60,80 L150,160 L240,90 L330,160" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function TalentIllusion() {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="talBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a1100" />
          <stop offset="100%" stopColor="#060400" />
        </radialGradient>
        <filter id="talGlow">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="400" height="260" fill="url(#talBg)" />
      {/* People constellation */}
      {[
        {cx:200, cy:110, r:10, main:true},
        {cx:120, cy:170, r:7, main:false},
        {cx:280, cy:170, r:7, main:false},
        {cx:80, cy:90, r:6, main:false},
        {cx:320, cy:90, r:6, main:false},
        {cx:160, cy:200, r:6, main:false},
        {cx:240, cy:200, r:6, main:false},
        {cx:60, cy:150, r:5, main:false},
        {cx:340, cy:150, r:5, main:false},
      ].map((n, i) => (
        <g key={i}>
          {/* Connection lines from center */}
          {!n.main && <line x1="200" y1="110" x2={n.cx} y2={n.cy}
            stroke="#f59e0b" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4">
            <animate attributeName="opacity" values="0.2;0.5;0.2"
              dur={`${2+i*0.3}s`} begin={`${i*0.2}s`} repeatCount="indefinite"/>
          </line>}
          <circle cx={n.cx} cy={n.cy} r={n.r * 2.5} fill="#f59e0b" opacity="0.05"/>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="#f59e0b" filter="url(#talGlow)"
            opacity={n.main ? "1" : "0.7"}>
            <animate attributeName="r" values={`${n.r};${n.r*1.3};${n.r}`}
              dur={`${1.5+i*0.25}s`} begin={`${i*0.15}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
      {/* Orbiting ring around central node */}
      <circle cx="200" cy="110" r="30" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="5 3" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate"
          from="0 200 110" to="360 200 110" dur="6s" repeatCount="indefinite"/>
      </circle>
      <text x="200" y="240" textAnchor="middle" fontSize="10" fill="#f59e0b" opacity="0.4" fontFamily="monospace">
        50+ CERTIFIED EXPERTS DEPLOYED
      </text>
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export default function CaseStudiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const illusionMap = {
    Cloud: <CloudIllusion />,
    SAP: <SAPIllusion />,
    Hyperion: <HyperionIllusion />,
    Automation: <AutomationIllusion />,
    "AI / ML": <AIIllusion />,
    Talent: <TalentIllusion />,
  };

  const accentMap = {
    Cloud: { color: "#60a5fa", bg: "rgba(96,165,250,0.12)", glow: "rgba(96,165,250,0.4)" },
    SAP: { color: "#00d084", bg: "rgba(0,208,132,0.12)", glow: "rgba(0,208,132,0.4)" },
    Hyperion: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", glow: "rgba(245,158,11,0.4)" },
    Automation: { color: "#10b981", bg: "rgba(16,185,129,0.12)", glow: "rgba(16,185,129,0.4)" },
    "AI / ML": { color: "#a78bfa", bg: "rgba(167,139,250,0.12)", glow: "rgba(167,139,250,0.4)" },
    Talent: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", glow: "rgba(245,158,11,0.4)" },
  };

  const caseStudies = [
    {
      title: "Cloud Migration & Cost Optimization",
      category: "Cloud",
      metric: "40% cost reduction",
      desc: "Migrated 200+ legacy apps to AWS/Azure for a global bank. Reduced infrastructure costs by 40% and improved scalability for peak trading hours.",
      link: "/case-study/digital-transformation",
      tag: "200+ Apps",
    },
    {
      title: "SAP S/4HANA Transformation",
      category: "SAP",
      metric: "99.9% uptime achieved",
      desc: "End-to-end SAP S/4HANA implementation for a multinational manufacturer. Real-time supply chain visibility and 99.9% system availability.",
      link: "/case-study/life-sciences-innovation",
      tag: "Enterprise",
    },
    {
      title: "Oracle Hyperion EPM Modernization",
      category: "Hyperion",
      metric: "Close time halved",
      desc: "Consolidated financial close and planning for a Fortune 500 retail group. Cut close time from 12 days to 6 and enabled driver-based forecasting.",
      link: "/case-study/financial-services-modernization",
      tag: "Fortune 500",
    },
    {
      title: "Intelligent Automation for Healthcare",
      category: "Automation",
      metric: "$2M saved annually",
      desc: "Deployed UiPath bots for a healthcare payer. Automated 70% of claims processing, reduced manual errors by 85%, and saved $2M annually.",
      link: "/case-study/hedge-fund-platforms",
      tag: "70% Automated",
    },
    {
      title: "AI-Powered Demand Forecasting",
      category: "AI / ML",
      metric: "25% forecast accuracy",
      desc: "Built a predictive analytics platform for a leading retail chain. Improved forecast accuracy by 25% and reduced stockouts by 60%.",
      link: "/case-study/genai-enablement",
      tag: "Retail AI",
    },
    {
      title: "Strategic Staffing – 50+ Experts",
      category: "Talent",
      metric: "Deployed in 4 weeks",
      desc: "Rapidly sourced and onboarded 50+ certified SAP and cloud professionals for a global SI. Zero bench time, full client satisfaction.",
      link: "/case-study/smarter-business-solutions",
      tag: "50+ Experts",
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="cs-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cs-root {
          font-family: 'DM Sans', sans-serif;
          background: #060810;
          padding: 140px 32px;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Layered background ── */
        .cs-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 20% 20%, rgba(30,10,60,0.6) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(5,30,20,0.7) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 60% 10%, rgba(40,20,5,0.5) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }

        /* Animated grain texture */
        .cs-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          z-index: 0;
          pointer-events: none;
          opacity: 0.5;
        }

        /* ── Header ── */
        .cs-header {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 100px;
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #7a6a4a;
          margin-bottom: 24px;
          padding: 8px 20px;
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 2px;
          background: rgba(245,158,11,0.04);
        }

        .cs-eyebrow::before,
        .cs-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #7a6a4a;
        }

        .cs-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(48px, 7vw, 84px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #f0ece4;
          margin-bottom: 4px;
        }

        .cs-title-accent {
          display: block;
          background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 40%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-rule {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, transparent);
          margin: 32px auto;
        }

        .cs-subtitle {
          font-size: 16px;
          color: #5a6070;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 300;
        }

        /* ── Grid ── */
        .cs-grid {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        /* ── Card ── */
        .cs-card {
          background: #0b0e18;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          animation: cardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: background 0.4s ease, z-index 0s;
        }

        .cs-card:nth-child(1) { animation-delay: 0.05s; }
        .cs-card:nth-child(2) { animation-delay: 0.12s; }
        .cs-card:nth-child(3) { animation-delay: 0.19s; }
        .cs-card:nth-child(4) { animation-delay: 0.26s; }
        .cs-card:nth-child(5) { animation-delay: 0.33s; }
        .cs-card:nth-child(6) { animation-delay: 0.40s; }

        @keyframes cardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .cs-card:hover {
          background: #0e1220;
          z-index: 20;
        }

        /* Subtle corner accent */
        .cs-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 0 0 0 0;
          border-color: transparent transparent transparent transparent;
          transition: border-width 0.4s ease, border-color 0.4s ease;
          z-index: 30;
        }

        .cs-card:hover::after {
          border-width: 40px 40px 0 0;
          border-color: var(--card-accent) transparent transparent transparent;
        }

        /* ── Visual ── */
        .cs-visual {
          height: 240px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #141824;
        }

        .cs-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, #0b0e18 100%);
          z-index: 5;
          transition: background 0.4s ease;
          pointer-events: none;
        }

        .cs-card:hover .cs-visual-overlay {
          background: linear-gradient(to bottom, transparent 50%, #0e1220 100%);
        }

        /* ── Tag ── */
        .cs-tag {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 20;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 1px;
          border: 1px solid var(--card-accent);
          color: var(--card-accent);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .cs-card:hover .cs-tag {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Category line ── */
        .cs-category-bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 0;
          height: 2px;
          background: var(--card-accent);
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 10;
        }

        .cs-card:hover .cs-category-bar { width: 100%; }

        /* ── Content ── */
        .cs-content {
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
          z-index: 10;
          border-top: 0;
        }

        .cs-cat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--card-accent);
          margin-bottom: 12px;
          opacity: 0.7;
        }

        .cs-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: #d4cfc7;
          line-height: 1.35;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .cs-card:hover .cs-card-title { color: #f0ece4; }

        .cs-metric {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--card-accent);
          margin-bottom: 12px;
          letter-spacing: -0.03em;
          line-height: 1;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .cs-card:hover .cs-metric { opacity: 1; }

        .cs-desc {
          font-size: 13.5px;
          color: #3a4050;
          line-height: 1.75;
          flex-grow: 1;
          margin-bottom: 24px;
          transition: color 0.3s ease;
        }

        .cs-card:hover .cs-desc { color: #5a6878; }

        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--card-accent);
          text-decoration: none;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s, color 0.2s;
          width: fit-content;
        }

        .cs-card:hover .cs-cta {
          opacity: 0.8;
          transform: translateX(0);
        }

        .cs-cta:hover { opacity: 1 !important; }

        .cs-cta-arrow {
          width: 24px;
          height: 1px;
          background: var(--card-accent);
          position: relative;
          transition: width 0.3s ease;
        }

        .cs-cta-arrow::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          width: 6px; height: 6px;
          border-right: 1px solid var(--card-accent);
          border-top: 1px solid var(--card-accent);
          transform: rotate(45deg);
        }

        .cs-cta:hover .cs-cta-arrow { width: 40px; }

        /* ── Bottom badge strip ── */
        .cs-footer {
          position: relative;
          z-index: 10;
          margin-top: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .cs-stat {
          text-align: center;
        }

        .cs-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #3a4050;
          margin-top: 4px;
        }

        .cs-divider {
          width: 1px;
          height: 40px;
          background: #1a1e28;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .cs-grid { grid-template-columns: 1fr; }
          .cs-title { font-size: 48px; }
          .cs-root { padding: 80px 20px; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="cs-header">
        <div className="cs-eyebrow">Client Outcomes</div>
        <h2 className="cs-title">
          Success<br />
          <span className="cs-title-accent">Stories</span>
        </h2>
        <div className="cs-rule" />
        <p className="cs-subtitle">
          Real transformations delivered across cloud, ERP, automation, AI, and talent — enabled by certified experts and offshore delivery excellence.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="cs-grid">
        {caseStudies.map((item, i) => {
          const accent = accentMap[item.category];
          return (
            <div
              key={item.title}
              className="cs-card"
              style={{ "--card-accent": accent.color }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Visual */}
              <div className="cs-visual">
                {illusionMap[item.category]}
                <div className="cs-visual-overlay" />
                <span className="cs-tag">{item.tag}</span>
                <div className="cs-category-bar" />
              </div>

              {/* Content */}
              <div className="cs-content">
                <div className="cs-cat-label">{item.category}</div>
                <h3 className="cs-card-title">{item.title}</h3>
                <div className="cs-metric">{item.metric}</div>
                <p className="cs-desc">{item.desc}</p>
                <a href={item.link} className="cs-cta">
                  Read case study
                  <span className="cs-cta-arrow" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer stats ── */}
      <div className="cs-footer">
        {[
          { num: "40%", label: "Cost Reduction" },
          { num: "$2M+", label: "Annual Savings" },
          { num: "50+", label: "Experts Deployed" },
          { num: "99.9%", label: "System Uptime" },
        ].map((s, i, arr) => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <div className="cs-stat">
              <div className="cs-stat-num">{s.num}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
            {i < arr.length - 1 && <div className="cs-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}