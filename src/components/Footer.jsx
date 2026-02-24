import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .footer-wrapper {
          background: linear-gradient(135deg, #ffffff 0%, #f9fafc 100%);
          padding: 70px 6% 30px;
          color: #1e293b;
          font-family: 'Inter', 'Plus Jakarta Sans', sans-serif;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          position: relative;
          overflow: hidden;
        }

        /* Enhanced background effects */
        .footer-wrapper::before {
          content: '';
          position: absolute;
          top: -150px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(14, 165, 233, 0.03) 50%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          animation: gentleFloat 15s infinite alternate ease-in-out;
        }

        .footer-wrapper::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -50px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, rgba(99, 102, 241, 0.02) 60%, transparent 80%);
          border-radius: 50%;
          z-index: 1;
          animation: gentleFloatReverse 18s infinite alternate ease-in-out;
        }

        @keyframes gentleFloat {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-30px, 30px) scale(1.05); }
        }

        @keyframes gentleFloatReverse {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, -20px) scale(1.1); }
        }

        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1.2fr 1fr;
          gap: 50px;
          position: relative;
          z-index: 2;
        }

        /* Enhanced brand section without logo */
        .footer-brand-wrap {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .footer-brand-info h3 {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 12px;
          background: linear-gradient(145deg, #4f46e5 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.3px;
        }

        .footer-brand-info p {
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
          margin: 0 0 20px;
          max-width: 280px;
        }

        /* Elegant section titles with underline animation */
        .footer-col-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #334155;
          margin-bottom: 25px;
          position: relative;
          display: inline-block;
        }

        /* Underline that animates on hover of the parent column */
        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* When hovering any div (the column), expand the underline to full width */
        div:hover > .footer-col-title::after {
          width: 100%;
        }

        /* Enhanced navigation links */
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-link {
          color: #475569;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: block;
          padding: 8px 0;
          position: relative;
          border-bottom: 1px solid transparent;
        }

        .footer-nav-link:hover {
          color: #4f46e5;
          transform: translateX(8px);
          font-weight: 600;
        }

        /* ENHANCED FOCUS AREA SECTION - Grid Layout */
        .footer-services-section {
          display: flex;
          flex-direction: column;
        }

        .footer-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 5px;
        }

        .service-tag {
          font-size: 13px;
          color: #4f46e5;
          text-decoration: none;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          border: 1px solid rgba(99, 102, 241, 0.15);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          font-weight: 600;
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.02);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          white-space: nowrap;
        }

        .service-tag:hover {
          background: linear-gradient(145deg, #6366f1, #4f46e5);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.25);
          transform: translateY(-3px) scale(1.02);
        }

        /* Service icons styling */
        .service-icon {
          font-size: 16px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        /* Responsive adjustments for services grid */
        @media (max-width: 1100px) {
          .service-tag {
            padding: 8px 12px;
            font-size: 12px;
            white-space: normal;
            text-align: left;
          }
        }

        @media (max-width: 900px) {
          .footer-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-services-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 400px;
            margin: 0 auto;
          }
          
          .service-tag {
            justify-content: center;
          }
        }

        /* Enhanced social icons */
        .social-group {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.02);
        }

        .social-icon:hover {
          background: linear-gradient(145deg, #6366f1, #4f46e5);
          color: #ffffff;
          border-color: transparent;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
        }

        /* Enhanced CTA button */
        .cta-button {
          display: inline-block;
          background: linear-gradient(145deg, #6366f1, #4f46e5);
          color: #ffffff !important;
          padding: 14px 28px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          letter-spacing: 0.3px;
        }

        .cta-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 30px -5px rgba(99, 102, 241, 0.4);
          background: linear-gradient(145deg, #4f46e5, #4338ca);
        }

        /* Enhanced footer bottom */
        .footer-bottom {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #64748b;
          position: relative;
          z-index: 2;
        }

        .legal-links { 
          display: flex; 
          gap: 30px; 
        }

        .legal-link { 
          color: #64748b; 
          text-decoration: none; 
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
        }

        .legal-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .legal-link:hover {
          color: #4f46e5;
        }

        .legal-link:hover::after {
          width: 100%;
        }

        /* Newsletter section enhancement */
        .newsletter-text {
          font-size: 13px;
          color: #475569;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        /* Responsive design */
        @media (max-width: 1100px) {
          .footer-container { 
            grid-template-columns: 1.2fr 0.8fr 1fr 1fr; 
            gap: 30px; 
          }
        }

        @media (max-width: 900px) {
          .footer-container { 
            grid-template-columns: 1fr 1fr; 
            gap: 40px; 
          }
          
          .footer-brand-wrap {
            grid-column: span 2;
            justify-content: center;
            text-align: center;
          }
          
          .footer-brand-info p {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .footer-container { 
            grid-template-columns: 1fr; 
            gap: 40px; 
            text-align: center;
          }
          
          .footer-brand-wrap {
            grid-column: span 1;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .footer-brand-info p {
            margin-left: auto;
            margin-right: auto;
          }
          
          .social-group { 
            justify-content: center; 
          }
          
          .footer-bottom { 
            flex-direction: column; 
            gap: 20px; 
            text-align: center;
          }
          
          .legal-links { 
            justify-content: center; 
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .footer-col-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Enhanced Brand Section - Logo removed */}
        <div className="footer-brand-wrap">
          <div className="footer-brand-info">
            <h3>Galacticos Network</h3>
            <p>global technology consulting and digital solutions partner delivering cloud, data, enterprise applications, and intelligent automation services through our offshore delivery excellence.</p>
            <div className="social-group">
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Links Section with underline animation on whole column */}
        <div>
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-nav-list">
            <li><Link to="/about-us" className="footer-nav-link">About Us</Link></li>
            <li><Link to="/investors" className="footer-nav-link">Investors</Link></li>
            <li><Link to="/contact" className="footer-nav-link">Contact</Link></li>
            <li><Link to="/careers" className="footer-nav-link">Careers</Link></li>
          </ul>
        </div>

        {/* ENHANCED FOCUS AREA SECTION with underline animation on whole column */}
        <div className="footer-services-section">
          <h4 className="footer-col-title">Focus Area</h4>
          <div className="footer-services-grid">
            <Link to="/services/cloud" className="service-tag">
              <span className="service-icon">☁️</span>
              <span>Cloud</span>
            </Link>
            <Link to="/services/devops" className="service-tag">
              <span className="service-icon">⚙️</span>
              <span>DevOps</span>
            </Link>
            <Link to="/services/data-engineering" className="service-tag">
              <span className="service-icon">🤖</span>
              <span>AI & Data</span>
            </Link>
            <Link to="/services/ui-ux" className="service-tag">
              <span className="service-icon">🎨</span>
              <span>UX Design</span>
            </Link>
            <Link to="/services/blockchain" className="service-tag">
              <span className="service-icon">🔗</span>
              <span>Blockchain</span>
            </Link>
            <Link to="/services/security" className="service-tag">
              <span className="service-icon">🛡️</span>
              <span>Security</span>
            </Link>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div>
          <h4 className="footer-col-title">Scale Up</h4>
          <p className="newsletter-text">
            Accelerate your digital transformation with our certified experts and offshore delivery model.
          </p>
          <Link to="/contact" className="cta-button">
            Talk to Our Experts →
          </Link>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '20px' }}>
            Join 500+ companies
          </p>
        </div>
      </div>

      {/* Enhanced Footer Bottom */}
      <div className="footer-bottom">
        <div>© {currentYear} Galacticos Network. All rights reserved.</div>
        <div className="legal-links">
          <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
          <Link to="/terms" className="legal-link">Terms of Service</Link>
          <Link to="/cookies" className="legal-link">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}