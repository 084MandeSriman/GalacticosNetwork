import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cpu, Activity, Globe, Shield, Database } from "lucide-react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  ComposedChart, PieChart, Pie, Cell,
  ResponsiveContainer
} from "recharts";

// Data generator for the live-moving effect
const generateData = () => 
  Array.from({ length: 15 }, (_, i) => ({ 
    name: i, 
    val: Math.floor(Math.random() * 400) + 200,
    val2: Math.floor(Math.random() * 200) + 150 
  }));

export default function PremiumVanguardHero() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [data, setData] = useState(generateData());

  // Real-time data movement
  useEffect(() => {
    const jitter = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        val: Math.max(100, item.val + (Math.random() * 80 - 40)),
        val2: Math.max(50, item.val2 + (Math.random() * 50 - 25))
      })));
    }, 1800);
    return () => clearInterval(jitter);
  }, []);

  const slides = useMemo(() => [
    {
      title: "NEURAL NETWORK",
      subtitle: "Edge-computing nodes processing petabytes of telemetry via AI nodes.",
      label: "AI_NODE_ACTIVE",
      icon: <Cpu size={18} />,
      color: "#00d2ff",
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <AreaChart data={d}>
          <defs>
            <linearGradient id="c1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d2ff" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#00d2ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="val" stroke="#00d2ff" strokeWidth={3} fill="url(#c1)" />
        </AreaChart>
      )
    },
    {
      title: "MARKET VELOCITY",
      subtitle: "High-frequency analysis across global crypto and equity exchanges.",
      label: "MARKET_SYNC_04",
      icon: <Activity size={18} />,
      color: "#ff0080",
      bg: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <BarChart data={d}>
          <Bar dataKey="val" fill="#ff0080" radius={[2, 2, 0, 0]} />
          <Bar dataKey="val2" fill="rgba(255,255,255,0.15)" radius={[2, 2, 0, 0]} />
        </BarChart>
      )
    },
    {
      title: "GLOBAL MESH",
      subtitle: "Zero-latency peering across 12 availability zones world-wide.",
      label: "NETWORK_HEALTH_99",
      icon: <Globe size={18} />,
      color: "#39ff14",
      bg: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <LineChart data={d}>
          <Line type="stepAfter" dataKey="val" stroke="#39ff14" strokeWidth={3} dot={false} />
          <Line type="stepAfter" dataKey="val2" stroke="rgba(255,255,255,0.2)" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        </LineChart>
      )
    },
    {
      title: "CLOUD SHIELD",
      subtitle: "Advanced DDoS mitigation and neural-firewall protection suites.",
      label: "FIREWALL_ARMED",
      icon: <Shield size={18} />,
      color: "#7000ff",
      bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <ComposedChart data={d}>
          <Area type="monotone" dataKey="val" fill="rgba(112, 0, 255, 0.25)" stroke="#7000ff" strokeWidth={3} />
          <Line type="monotone" dataKey="val2" stroke="#fff" strokeWidth={2} dot={{ r: 4, fill: '#7000ff' }} />
        </ComposedChart>
      )
    },
    {
      title: "DATA VAULT",
      subtitle: "256-bit quantum-ready encryption for enterprise cold storage.",
      label: "ENCRYPTION_SAFE",
      icon: <Database size={18} />,
      color: "#faff00",
      bg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <PieChart>
          <Pie data={d} dataKey="val" innerRadius="65%" outerRadius="85%" paddingAngle={6}>
            {d.map((_, i) => <Cell key={i} fill={i % 3 === 0 ? "#faff00" : "rgba(255,255,255,0.05)"} />)}
          </Pie>
        </PieChart>
      )
    }
  ], []);

  const next = useCallback(() => setActive(p => (p + 1) % slides.length), [slides.length]);
  const prev = () => setActive(p => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .h-root {
          position: relative;
          height: 100vh;
          width: 100%;
          background: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          color: white;
        }

        .h-bg-canvas {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: background-image 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .h-bg-canvas::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.4), #000 95%);
        }

        .h-dashboard {
          position: absolute;
          top: 50%; 
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw; 
          height: 80vh;
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(40px) saturate(1.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 48px;
          z-index: 10;
          display: flex;
          overflow: hidden;
          box-shadow: 0 80px 150px -40px rgba(0,0,0,0.9);
        }

        .h-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 0 8%;
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
          pointer-events: none;
        }

        .h-slide.active { 
          opacity: 1; 
          pointer-events: all; 
        }

        .h-text-col { 
          flex: 1.2; 
          z-index: 20; 
        }

        .h-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }

        .h-text-col h1 {
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 800;
          line-height: 0.9;
          margin-bottom: 20px;
          letter-spacing: -3px;
        }

        .h-text-col p {
          color: #aaa;
          font-size: 1.25rem;
          max-width: 480px;
          margin-bottom: 40px;
        }

        .h-viz-col {
          flex: 1;
          height: 55%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .h-btn {
          padding: 18px 45px;
          border-radius: 100px;
          border: none;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: 0.3s;
          text-transform: uppercase;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .h-btn:hover { 
          transform: translateY(-3px) scale(1.05); 
        }

        .h-nav-dots {
          position: absolute;
          bottom: 48px; 
          left: 8%;
          display: flex; 
          gap: 12px;
          z-index: 30;
        }

        .h-dot {
          width: 30px; 
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          cursor: pointer;
          transition: 0.4s;
        }

        .h-dot.active { 
          background: #fff; 
          width: 60px; 
          box-shadow: 0 0 15px rgba(255,255,255,0.5); 
        }

        .h-side-arrows {
          position: absolute;
          bottom: 40px; 
          right: 48px;
          display: flex; 
          gap: 15px;
          z-index: 30;
        }

        .h-arrow-btn {
          width: 56px; 
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          cursor: pointer; 
          transition: 0.3s;
          display: flex; 
          align-items: center; 
          justify-content: center;
        }

        .h-arrow-btn:hover { 
          background: #fff; 
          color: #000; 
        }

        /* Desktop Large */
        @media (max-width: 1400px) {
          .h-text-col h1 {
            font-size: 5rem;
          }
          .h-text-col p {
            font-size: 1.15rem;
          }
        }

        /* Desktop Medium */
        @media (max-width: 1200px) {
          .h-text-col h1 {
            font-size: 4.5rem;
            letter-spacing: -2px;
          }
          .h-text-col p {
            font-size: 1.1rem;
          }
        }

        /* Tablet Landscape */
        @media (max-width: 992px) {
          .h-dashboard { 
            width: 92vw; 
            height: 85vh; 
            border-radius: 40px; 
          }
          .h-text-col h1 {
            font-size: 3.8rem;
          }
          .h-text-col p {
            font-size: 1rem;
          }
          .h-btn {
            padding: 16px 40px;
            font-size: 0.85rem;
          }
        }

        /* Tablet Portrait */
        @media (max-width: 768px) {
          .h-dashboard { 
            flex-direction: column; 
            width: 94vw; 
            height: 75vh; /* Compressed from 90vh */
            border-radius: 32px; 
          }
          .h-slide { 
            flex-direction: column; 
            justify-content: flex-start;
            text-align: center; 
            padding: 30px 20px; /* Reduced padding */
            gap: 15px; /* Reduced gap */
          }
          .h-text-col { 
            flex: none;
            width: 100%;
            margin-top: 15px; /* Reduced margin */
          }
          .h-text-col h1 { 
            font-size: 2.8rem; /* Smaller font */
            letter-spacing: -1.5px;
            max-width: 500px; /* Reduced width */
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 12px; /* Reduced margin */
          }
          .h-text-col p {
            font-size: 0.95rem !important;
            max-width: 450px; /* Reduced width */
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 25px; /* Reduced margin */
            line-height: 1.4;
          }
          .h-viz-col { 
            flex: none;
            width: 100%; 
            height: 28%; /* Compressed from 30% */
            margin-top: 8px; /* Reduced margin */
          }
          .h-btn { 
            padding: 14px 32px; /* Slightly smaller */
            font-size: 0.8rem;
          }
          .h-label {
            font-size: 0.65rem;
            padding: 5px 12px; /* Smaller padding */
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 12px; /* Reduced margin */
          }
          .h-nav-dots { 
            left: 50%; 
            transform: translateX(-50%); 
            bottom: 65px; /* Adjusted position */
          }
          .h-side-arrows { 
            right: 50%; 
            transform: translateX(50%); 
            bottom: 15px; /* Adjusted position */
          }
        }

        /* Mobile Large */
        @media (max-width: 640px) {
          .h-dashboard { 
            width: 95vw; 
            height: 72vh; /* Further compressed */
            border-radius: 28px;
          }
          .h-slide { 
            padding: 25px 16px; /* Reduced padding */
            gap: 12px;
          }
          .h-text-col h1 { 
            font-size: 2rem; 
            line-height: 1;
            margin-bottom: 10px;
            letter-spacing: -1px;
          }
          .h-text-col p {
            font-size: 0.85rem !important;
            margin-bottom: 20px;
            line-height: 1.4;
          }
          .h-btn { 
            padding: 12px 28px; 
            font-size: 0.75rem;
          }
          .h-label {
            font-size: 0.6rem;
            padding: 5px 10px;
            margin-bottom: 10px;
          }
          .h-viz-col { 
            height: 25%; 
          }
          .h-nav-dots { 
            bottom: 55px; 
            gap: 8px; 
          }
          .h-dot { 
            width: 24px; 
            height: 3px; 
          }
          .h-dot.active { 
            width: 48px; 
          }
          .h-side-arrows { 
            bottom: 12px; 
            gap: 10px; 
          }
          .h-arrow-btn { 
            width: 48px; 
            height: 48px; 
          }
        }

        /* Mobile Medium */
        @media (max-width: 480px) {
          .h-dashboard { 
            width: 96vw; 
            height: 70vh; /* Compressed */
            border-radius: 24px;
          }
          .h-slide { 
            padding: 22px 12px;
            gap: 10px;
          }
          .h-text-col h1 { 
            font-size: 1.7rem; 
            margin-bottom: 10px;
            letter-spacing: -0.8px;
          }
          .h-text-col p {
            font-size: 0.8rem !important;
            margin-bottom: 18px;
            line-height: 1.35;
          }
          .h-btn { 
            padding: 11px 24px; 
            font-size: 0.7rem;
          }
          .h-label {
            font-size: 0.55rem;
            padding: 4px 9px;
            gap: 5px;
            margin-bottom: 10px;
          }
          .h-viz-col { 
            height: 23%; 
          }
          .h-nav-dots { 
            bottom: 50px; 
            gap: 6px; 
          }
          .h-dot { 
            width: 20px; 
            height: 2.5px; 
          }
          .h-dot.active { 
            width: 40px; 
          }
          .h-side-arrows { 
            bottom: 10px; 
            gap: 8px; 
          }
          .h-arrow-btn { 
            width: 42px; 
            height: 42px; 
          }
        }

        /* Mobile Small */
        @media (max-width: 375px) {
          .h-dashboard { 
            width: 97vw; 
            height: 68vh; /* Compressed */
            border-radius: 20px;
          }
          .h-slide { 
            padding: 18px 10px;
            gap: 8px;
          }
          .h-text-col h1 { 
            font-size: 1.4rem; 
            margin-bottom: 8px;
            letter-spacing: -0.4px;
          }
          .h-text-col p {
            font-size: 0.75rem !important;
            margin-bottom: 15px;
            line-height: 1.3;
          }
          .h-btn { 
            padding: 10px 20px; 
            font-size: 0.65rem;
          }
          .h-label {
            font-size: 0.5rem;
            padding: 4px 7px;
            gap: 4px;
            margin-bottom: 8px;
          }
          .h-viz-col { 
            height: 21%; 
          }
          .h-nav-dots { 
            bottom: 45px; 
            gap: 4px; 
          }
          .h-dot { 
            width: 16px; 
            height: 2px; 
          }
          .h-dot.active { 
            width: 32px; 
          }
          .h-side-arrows { 
            bottom: 8px; 
            gap: 6px; 
          }
          .h-arrow-btn { 
            width: 36px; 
            height: 36px; 
          }
        }

        /* Extra Small Devices */
        @media (max-width: 320px) {
          .h-dashboard { 
            width: 98vw; 
            height: 66vh; /* Most compressed */
            border-radius: 16px;
          }
          .h-slide { 
            padding: 15px 8px;
          }
          .h-text-col h1 { 
            font-size: 1.2rem; 
            margin-bottom: 6px;
          }
          .h-text-col p {
            font-size: 0.7rem !important;
            margin-bottom: 12px;
          }
          .h-btn { 
            padding: 8px 18px; 
            font-size: 0.6rem;
          }
          .h-label {
            font-size: 0.45rem;
            padding: 3px 6px;
            margin-bottom: 6px;
          }
          .h-viz-col { 
            height: 20%; 
          }
          .h-nav-dots { 
            bottom: 40px; 
            gap: 3px; 
          }
          .h-dot { 
            width: 14px; 
            height: 2px; 
          }
          .h-dot.active { 
            width: 28px; 
          }
          .h-side-arrows { 
            bottom: 6px; 
            gap: 4px; 
          }
          .h-arrow-btn { 
            width: 32px; 
            height: 32px; 
          }
        }

        /* Landscape Mode for Mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .h-dashboard {
            height: 80vh; /* Less compression in landscape */
          }
          .h-slide {
            padding: 20px 5%;
          }
          .h-text-col h1 {
            font-size: 1.8rem;
            margin-bottom: 8px;
          }
          .h-text-col p {
            font-size: 0.85rem !important;
            margin-bottom: 12px;
          }
          .h-viz-col {
            height: 32%;
          }
          .h-nav-dots {
            bottom: 25px;
          }
          .h-side-arrows {
            bottom: 15px;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .h-dot {
            min-height: 8px;
            min-width: 40px;
          }
          .h-dot.active {
            min-width: 70px;
          }
          .h-arrow-btn {
            min-width: 50px;
            min-height: 50px;
          }
          .h-btn {
            min-height: 50px;
          }
        }
      `}</style>

      <div className="h-root">
        {/* ANIMATED BACKGROUND */}
        <div className="h-bg-canvas" style={{ backgroundImage: `url(${slides[active].bg})` }} />
        
        <div className="h-dashboard">
          {slides.map((slide, i) => (
            <div key={i} className={`h-slide ${i === active ? 'active' : ''}`}>
              <div className="h-text-col">
                <div className="h-label" style={{ color: slide.color }}>
                  {slide.icon} {slide.label}
                </div>
                <h1>{slide.title}</h1>
                <p>
                  {slide.subtitle}
                </p>
                <button 
                  className="h-btn" 
                  style={{ background: slide.color, color: '#000' }} 
                  onClick={() => navigate('/contact')}
                >
                  EXPLORE PLATFORM
                </button>
              </div>

              <div className="h-viz-col">
                <ResponsiveContainer width="100%" height="100%">
                  {slide.chart(data)}
                </ResponsiveContainer>
              </div>
            </div>
          ))}

          {/* DASHBOARD NAVIGATION */}
          <div className="h-nav-dots">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-dot ${i === active ? 'active' : ''}`} 
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="h-side-arrows">
            <button 
              className="h-arrow-btn" 
              onClick={prev}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="h-arrow-btn" 
              onClick={next}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
