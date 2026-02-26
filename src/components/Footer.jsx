import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ══════════════════════════════════
           ROOT – Dark Navy Sea Theme
        ══════════════════════════════════ */
        .footer-wrapper {
          position: relative;
          background: linear-gradient(145deg, #0b1f3a 0%, #0a172e 100%);
          padding: 80px 6% 0;
          color: #ffffff;
          font-family: 'Inter', 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Deep ocean glow ── */
        .footer-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 40%, rgba(0,180,255,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 70%, rgba(0,100,200,0.06) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Animated wave layers ── */
        .wave-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          background-repeat: repeat-x;
          background-size: 200px 120px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.5;
        }

        .wave1 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,60 Q25,30 50,60 T100,60 T150,60 T200,60 L200,120 L0,120 Z' fill='%230066aa' opacity='0.3'/%3E%3C/svg%3E");
          animation: waveMove 12s linear infinite;
          bottom: 0;
        }

        .wave2 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,70 Q30,40 60,70 T120,70 T180,70 L200,70 L200,120 L0,120 Z' fill='%230099cc' opacity='0.3'/%3E%3C/svg%3E");
          animation: waveMove 18s linear infinite reverse;
          bottom: 10px;
          opacity: 0.4;
        }

        .wave3 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,50 Q20,20 40,50 T80,50 T120,50 T160,50 T200,50 L200,120 L0,120 Z' fill='%230077bb' opacity='0.25'/%3E%3C/svg%3E");
          animation: waveMove 24s linear infinite;
          bottom: 20px;
        }

        @keyframes waveMove {
          0% { background-position: 0 0; }
          100% { background-position: 200px 0; }
        }

        /* ── Mesh gradient overlay ── */
        .footer-wrapper::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");
          background-size: 160px 160px;
          z-index: 0; pointer-events: none; opacity: 0.4;
        }

        /* ── Decorative top beam ── */
        .footer-topbeam {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(0,150,255,0.5) 30%, rgba(0,200,255,0.6) 60%, transparent 100%);
          z-index: 2;
        }

        /* ── Floating orbs ── */
        .footer-orb1 {
          position: absolute; width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,150,255,0.12) 0%, transparent 70%);
          top: -160px; right: -120px; z-index: 0; pointer-events: none;
          animation: orbfloat1 14s ease-in-out infinite alternate;
        }
        .footer-orb2 {
          position: absolute; width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,200,255,0.1) 0%, transparent 70%);
          bottom: -80px; left: -80px; z-index: 0; pointer-events: none;
          animation: orbfloat2 18s ease-in-out infinite alternate;
        }
        @keyframes orbfloat1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-30px,30px) scale(1.06); }
        }
        @keyframes orbfloat2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(40px,-20px) scale(1.1); }
        }

        /* ══════════════════════════════════
           MAIN GRID (unchanged)
        ══════════════════════════════════ */
        .footer-container {
          position: relative; z-index: 2;
          max-width: 1300px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1.2fr 1fr;
          gap: 56px;
          padding-bottom: 64px;
        }

        /* ══════════════════════════════════
           BRAND COLUMN (unchanged)
        ══════════════════════════════════ */
        .footer-brand-wrap {
          display: flex; align-items: flex-start; gap: 20px;
        }
        .footer-brand-info h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 22px; font-weight: 800; margin: 0 0 14px;
          background: linear-gradient(145deg, #4f46e5 0%, #0891b2 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: -0.3px;
        }
        .footer-brand-info p {
          color: #ffffff; font-size: 14px; line-height: 1.75;
          margin: 0 0 22px; max-width: 280px;
        }

        /* Social icons */
        .social-group { display: flex; gap: 10px; margin-top: 20px; }

        .social-icon {
          width: 38px; height: 38px; border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          transition: all 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .social-icon:hover {
          background: linear-gradient(145deg, #6366f1, #4f46e5);
          color: #ffffff; border-color: transparent;
          transform: scale(1.12) rotate(5deg);
          box-shadow: 0 8px 20px rgba(99,102,241,0.3);
        }

        /* ══════════════════════════════════
           COLUMN TITLES (centered for company & focus area)
        ══════════════════════════════════ */
        .footer-col-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2.5px;
          color: #ffffff; margin: 0 0 28px;
          position: relative; display: inline-block;
        }
        .footer-col-title::after {
          content: '';
          position: absolute; bottom: -8px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        div:hover > .footer-col-title::after { width: 100%; }

        /* Center alignment for company and focus area columns */
        .company-column, .focus-column {
          text-align: center;
        }
        .company-column .footer-col-title, .focus-column .footer-col-title {
          margin-left: auto;
          margin-right: auto;
        }
        /* For centering the underline under centered title */
        .company-column .footer-col-title::after,
        .focus-column .footer-col-title::after {
          left: 50%;
          transform: translateX(-50%);
        }

        /* ══════════════════════════════════
           NAV LINKS (centered)
        ══════════════════════════════════ */
        .company-column .footer-nav-list,
        .focus-column .footer-nav-list {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .company-column .footer-nav-link,
        .focus-column .footer-nav-link {
          color: #ffffff; text-decoration: none;
          font-size: 14px; font-weight: 500;
          display: inline-block; /* to center under parent */
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: all 0.25s ease;
          position: relative; overflow: hidden;
          text-align: center;
        }
        .company-column .footer-nav-link::before,
        .focus-column .footer-nav-link::before {
          content: '';
          position: absolute; left: -4px; top: 50%; transform: translateY(-50%);
          width: 0; height: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          opacity: 0;
          transition: all 0.25s ease;
        }
        .company-column .footer-nav-link:hover,
        .focus-column .footer-nav-link:hover {
          color: #818cf8; padding-left: 14px; font-weight: 600;
        }
        .company-column .footer-nav-link:hover::before,
        .focus-column .footer-nav-link:hover::before {
          width: 6px; height: 6px; opacity: 1; left: 0;
        }

        /* ══════════════════════════════════
           FOCUS AREA SERVICES GRID (single column)
        ══════════════════════════════════ */
        .focus-column .footer-services-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .focus-column .service-tag {
          font-size: 13px; color: #ffffff; text-decoration: none;
          padding: 10px 14px;
          background: rgba(255,255,255,0.06);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          font-weight: 600;
          backdrop-filter: blur(6px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          display: inline-flex; align-items: center; gap: 8px;
          white-space: nowrap;
          position: relative; overflow: hidden;
          width: auto; /* fit content */
        }
        .focus-column .service-tag::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(145deg, #6366f1, #4f46e5);
          opacity: 0; transition: opacity 0.28s ease;
          border-radius: 12px;
        }
        .focus-column .service-tag:hover::after { opacity: 1; }
        .focus-column .service-tag:hover {
          color: #ffffff; border-color: transparent;
          box-shadow: 0 8px 20px rgba(99,102,241,0.25);
          transform: translateY(-3px) scale(1.02);
        }
        .focus-column .service-tag > * { position: relative; z-index: 1; }
        .focus-column .service-icon { font-size: 15px; }

        /* ══════════════════════════════════
           CTA COLUMN (unchanged)
        ══════════════════════════════════ */
        .newsletter-text {
          font-size: 14px; color: #ffffff; margin-bottom: 20px; line-height: 1.7;
        }

        .cta-button {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(145deg, #6366f1, #4f46e5);
          color: #ffffff !important; padding: 14px 28px;
          border-radius: 40px; text-decoration: none;
          font-weight: 600; font-size: 14px; letter-spacing: 0.2px;
          box-shadow: 0 8px 24px -4px rgba(99,102,241,0.35);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none; position: relative; overflow: hidden;
        }
        .cta-button::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(145deg, #818cf8, #6366f1);
          opacity: 0; transition: opacity 0.3s ease; border-radius: 40px;
        }
        .cta-button:hover::before { opacity: 1; }
        .cta-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 32px -4px rgba(99,102,241,0.45);
        }
        .cta-button > span { position: relative; z-index: 1; }

        /* ══════════════════════════════════
           DIVIDER (unchanged)
        ══════════════════════════════════ */
        .footer-divider {
          position: relative; z-index: 2;
          max-width: 1300px; margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.3) 30%, rgba(14,165,233,0.3) 70%, transparent);
        }

        /* ══════════════════════════════════
           BOTTOM BAR (unchanged)
        ══════════════════════════════════ */
        .footer-bottom {
          position: relative; z-index: 2;
          max-width: 1300px; margin: 0 auto;
          padding: 28px 0 32px;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 13px; color: #ffffff;
        }

        .footer-bottom-copy {
          display: flex; align-items: center; gap: 8px;
        }
        .footer-bottom-copy span {
          width: 4px; height: 4px; border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          display: inline-block;
        }

        .legal-links { display: flex; gap: 28px; }
        .legal-link {
          color: #ffffff; text-decoration: none;
          font-weight: 500; position: relative;
          transition: color 0.25s ease;
        }
        .legal-link::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9);
          transition: width 0.3s ease; border-radius: 2px;
        }
        .legal-link:hover { color: #818cf8; }
        .legal-link:hover::after { width: 100%; }

        /* ══════════════════════════════════
           RESPONSIVE (unchanged)
        ══════════════════════════════════ */
        @media (max-width: 1100px) {
          .footer-container { grid-template-columns: 1.2fr 0.8fr 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 900px) {
          .footer-container { grid-template-columns: 1fr 1fr; gap: 44px; }
          .footer-brand-wrap { grid-column: span 2; }
          .footer-brand-info p { max-width: 100%; }
          .footer-services-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .footer-wrapper { padding: 60px 5% 0; }
          .footer-container { grid-template-columns: 1fr; gap: 40px; text-align: center; padding-bottom: 48px; }
          .footer-brand-wrap { grid-column: span 1; flex-direction: column; align-items: center; }
          .footer-brand-info p { margin-left: auto; margin-right: auto; }
          .social-group { justify-content: center; }
          .footer-col-title::after { left: 50%; transform: translateX(-50%); }
          .footer-nav-link:hover { padding-left: 0; }
          .footer-nav-link:hover::before { display: none; }
          .footer-services-grid { grid-template-columns: repeat(2, 1fr); }
          .service-tag { justify-content: center; }
          .footer-bottom { flex-direction: column; gap: 18px; text-align: center; padding: 24px 0 28px; }
          .legal-links { justify-content: center; flex-wrap: wrap; gap: 18px; }
        }
      `}</style>

      {/* Top beam */}
      <div className="footer-topbeam" />

      {/* Floating orbs */}
      <div className="footer-orb1" />
      <div className="footer-orb2" />

      {/* Wave layers */}
      <div className="wave-layer wave1"></div>
      <div className="wave-layer wave2"></div>
      <div className="wave-layer wave3"></div>

      <div className="footer-container">

        {/* ── Brand ── */}
        <div className="footer-brand-wrap">
          <div className="footer-brand-info">
            <h3>Galacticos Network</h3>
            <p>global technology consulting and digital solutions partner delivering cloud, data, enterprise applications, and intelligent automation services through our offshore delivery excellence.</p>
            <div className="social-group">
              <a href="https://twitter.com/galacticosnetwork" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://facebook.com/galacticosnetwork" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/galacticos-network/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Company (centered) ── */}
        <div className="company-column">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-nav-list">
            <li><Link to="/about-us"  className="footer-nav-link">About Us</Link></li>
            <li><Link to="/investors" className="footer-nav-link">Investors</Link></li>
            <li><Link to="/contact"   className="footer-nav-link">Contact</Link></li>
            <li><Link to="/careers"   className="footer-nav-link">Careers</Link></li>
          </ul>
        </div>

        {/* ── Focus Area (centered, single column) ── */}
        <div className="focus-column">
          <h4 className="footer-col-title">Focus Area</h4>
          <div className="footer-services-grid">
            <Link to="/services/cloud"            className="service-tag"><span className="service-icon">☁️</span><span>Cloud</span></Link>
            <Link to="/services/devops"           className="service-tag"><span className="service-icon">⚙️</span><span>DevOps</span></Link>
            <Link to="/services/data-engineering" className="service-tag"><span className="service-icon">🤖</span><span>AI & Data</span></Link>
            <Link to="/services/ui-ux"            className="service-tag"><span className="service-icon">🎨</span><span>UX Design</span></Link>
          </div>
        </div>

        {/* ── Scale Up ── */}
        <div>
          <h4 className="footer-col-title">Scale Up</h4>
          <p className="newsletter-text">
            Accelerate your digital transformation with our certified experts and offshore delivery model.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Talk to Our Experts →</span>
          </Link>
          <p style={{ fontSize: '12px', color: '#ffffff', marginTop: '20px' }}></p>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-copy">
          <span />
          © {currentYear} Galacticos Network. All rights reserved.
        </div>
        <div className="legal-links">
          <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
          <Link to="/terms"          className="legal-link">Terms of Service</Link>
          <Link to="/cookies"        className="legal-link">Cookie Policy</Link>
        </div>
      </div>

    </footer>
  );
}