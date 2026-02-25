import React from "react";

export default function OfficesSection() {
  const offices = [
    {
      name: "Dubai, UAE",
      badge: "WORLDWIDE",
      icon: "building",
      location: "Ajman, Dubai",
      country: "United Arab Emirates",
      email: "hr@galacticosnetwork.com",
      color: "#ec4899"
    },
    {
      name: "Hyderabad, India",
      badge: "DELIVERY HUB",
      icon: "laptop",
      location: "Hi-Tech City",
      country: "Hyderabad – 500081",
      email: "hr@galacticosnetwork.com",
      color: "#10b981"
    },
    {
      name: "USA",
      badge: "WORLDWIDE",
      icon: "globe",
      location: "Raleigh",
      country: "North Carolina - 27526",
      email: "hr@galacticosnetwork.com",
      color: "#3b82f6"
    }
  ];

  const renderIcon = (key, color) => {
    const base = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
    if (key === 'building') {
      return (
        <svg {...base} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" fill={color} opacity="0.12" />
          <path d="M7 20V10" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20V6" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 20V13" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (key === 'laptop') {
      return (
        <svg {...base} aria-hidden="true">
          <rect x="2" y="5" width="20" height="12" rx="2" fill={color} opacity="0.10" />
          <path d="M3 7h18" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 17h6" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 19h20" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    }
    return (
      <svg {...base} aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.4" fill={color} opacity="0.08" />
        <path d="M2 12h20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 2a20 20 0 0 1 0 20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <section id="offices" className="offices-section">
      <style>{`
        .offices-section {
          position: relative;
          padding: 80px 6%;
          color: #0f1724;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-image: linear-gradient(rgba(255,255,255,0.7), rgba(250,250,255,0.65)), url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1800&q=80');
          background-size: cover;
          background-position: center;
          backdrop-filter: blur(8px);
        }

        .offices-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .offices-title {
          font-size: clamp(28px, 5vw, 36px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .offices-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .office-card {
          position: relative;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          padding: 40px 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .office-card:hover { transform: translateY(-8px); }

        .office-card::before {
          content: '';
          position: absolute;
          left: 0; top: 40px; bottom: 40px;
          width: 5px;
          border-radius: 0 4px 4px 0;
          background: var(--glow-color);
        }

        .office-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .office-icon {
          width: 52px;
          height: 52px;
          background: var(--icon-bg);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .office-badge {
          background: rgba(15, 23, 42, 0.06);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 800;
          color: #475569;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .office-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #0f172a;
        }

        .office-info {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 35px;
          flex-grow: 1;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 15px;
          color: #475569;
          line-height: 1.4;
          max-width: 260px;
          margin: 0 auto;
          width: 100%;
        }

        .info-icon-wrapper {
          color: var(--glow-color);
          opacity: 0.8;
          margin-top: 2px;
        }

        /* EFFECTIVE EMAIL SECTION */
        .email-wrapper {
          width: 100%;
          margin-top: auto;
        }

        .email-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          color: #1e293b;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .email-link:hover {
          background: white;
          border-color: var(--glow-color);
          color: var(--glow-color);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transform: scale(1.02);
        }

        .email-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: var(--icon-bg);
          border-radius: 8px;
          color: var(--glow-color);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .offices-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .offices-section {
            padding: 60px 4%;
          }

          .offices-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .office-card {
            padding: 30px 16px 24px;
          }

          .office-header {
            gap: 10px;
            margin-bottom: 16px;
          }

          .office-icon {
            width: 44px;
            height: 44px;
          }

          .office-badge {
            padding: 6px 12px;
            font-size: 11px;
          }

          .office-name {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .office-info {
            gap: 12px;
            margin-bottom: 28px;
          }

          .info-item {
            font-size: 14px;
            gap: 12px;
          }

          .email-link {
            padding: 12px;
            font-size: 13px;
          }

          .email-icon-box {
            width: 26px;
            height: 26px;
          }

          .office-card::before {
            top: 30px;
            bottom: 30px;
          }
        }
      `}</style>

      <div className="offices-header">
        <h2 className="offices-title">Our Global Presence</h2>
        <p style={{ fontSize: '16px', color: '#64748b', marginTop: '10px' }}>Strategic delivery centers designed for seamless collaboration</p>
      </div>

      <div className="offices-grid">
        {offices.map((office) => (
          <div
            className="office-card"
            key={office.name}
            style={{
              '--glow-color': office.color,
              '--icon-bg': office.color + '15',
            }}
          >
            <div className="office-header">
              <div className="office-icon">{renderIcon(office.icon, office.color)}</div>
              <div className="office-badge">{office.badge}</div>
            </div>
            
            <h3 className="office-name">{office.name}</h3>

            <div className="office-info">
              <div className="info-item">
                <span className="info-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>{office.location}</span>
              </div>
              <div className="info-item">
                <span className="info-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                <span>{office.country}</span>
              </div>
              <div className="info-item">
               
                <span>{office.detail}</span>
              </div>
            </div>

            <div className="email-wrapper">
              <a href={`mailto:${office.email}`} className="email-link">
                <div className="email-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                {office.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}