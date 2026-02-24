import React from 'react';
import { Link } from 'react-router-dom';

export default function HireAITalent() {
  return (
    <section className="hire-ai-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .hire-ai-section {
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          padding: 80px 6%;
          color: #1e293b;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* Subtle background elements */
        .hire-ai-section::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        .hire-ai-section::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        .hire-ai-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Content area with optimized spacing */
        .hire-ai-content {
          text-align: center;
          margin-bottom: 60px;
        }

        /* Compact badge */
        .hire-ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 6px 18px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #4f46e5;
          border: 1px solid #e0e7ff;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.05);
        }

        .badge-icon svg {
          width: 16px;
          height: 16px;
          stroke: #4f46e5;
          stroke-width: 2;
        }

        /* Tight title spacing */
        .hire-ai-title {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.2;
          color: #0f172a;
          letter-spacing: -1px;
        }

        .hire-ai-title .highlight {
          background: linear-gradient(145deg, #4f46e5, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Compact description */
        .hire-ai-description {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          max-width: 600px;
          margin: 0 auto 30px;
          font-weight: 400;
        }

        /* Refined CTA button */
        .hire-ai-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #4f46e5;
          color: #ffffff;
          padding: 14px 36px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -8px rgba(79, 70, 229, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hire-ai-cta:hover {
          background: #4338ca;
          transform: translateY(-2px);
          box-shadow: 0 15px 25px -10px #4f46e5;
        }

        .cta-arrow {
          transition: transform 0.2s ease;
          font-size: 18px;
        }

        .hire-ai-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* Compact Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Streamlined stat items */
        .stat-item {
          background: #ffffff;
          border-radius: 20px;
          padding: 24px 20px;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-item:hover {
          border-color: #6366f1;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px -12px rgba(99, 102, 241, 0.15);
        }

        /* Smaller icon container */
        .stat-icon-box {
          width: 56px;
          height: 56px;
          background: #f8fafc;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: #4f46e5;
          border: 1px solid #e0e7ff;
          transition: all 0.3s ease;
        }

        .stat-item:hover .stat-icon-box {
          background: #ffffff;
          border-color: #6366f1;
          transform: scale(1.05);
        }

        .stat-icon-box svg {
          width: 28px;
          height: 28px;
          stroke: #4f46e5;
          stroke-width: 1.8;
          fill: none;
        }

        /* Compact numbers */
        .stat-number {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 6px;
          color: #0f172a;
          letter-spacing: -1px;
          line-height: 1;
        }

        /* Tighter label */
        .stat-label {
          font-size: 13px;
          line-height: 1.5;
          color: #64748b;
          font-weight: 500;
          max-width: 160px;
          margin: 0;
        }

        /* Responsive - optimized for all screens */
        @media (max-width: 1000px) {
          .stats-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 16px;
          }
          
          .hire-ai-section {
            padding: 60px 5%;
          }
        }

        @media (max-width: 640px) {
          .hire-ai-section { 
            padding: 50px 5%; 
          }
          
          .hire-ai-content {
            margin-bottom: 40px;
          }
          
          .stats-grid { 
            grid-template-columns: 1fr; 
            max-width: 350px;
            margin: 0 auto;
            gap: 16px;
          }
          
          .stat-item { 
            padding: 20px; 
            flex-direction: row;
            text-align: left;
            gap: 16px;
          }
          
          .stat-icon-box {
            margin-bottom: 0;
            width: 48px;
            height: 48px;
          }
          
          .stat-icon-box svg {
            width: 24px;
            height: 24px;
          }
          
          .stat-number {
            font-size: 32px;
          }
          
          .stat-label {
            font-size: 12px;
            max-width: 100%;
          }
          
          .stat-item > div:last-child {
            flex: 1;
          }
          
          .hire-ai-cta { 
            width: 100%; 
            justify-content: center;
            padding: 12px 28px;
            font-size: 15px;
          }
          
          .hire-ai-title {
            font-size: 32px;
          }
          
          .hire-ai-description {
            font-size: 15px;
            margin-bottom: 25px;
          }
        }
      `}</style>

      <div className="hire-ai-container">
        {/* Content section with reduced spacing */}
        <div className="hire-ai-content">
          <div className="hire-ai-badge">
            <span className="badge-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Global Talent Network
          </div>
          
          <h2 className="hire-ai-title">
            Scale with <span className="highlight">Elite Remote</span> <br/>
            AI Engineering Teams
          </h2>
          
          <p className="hire-ai-description">
            We bridge the gap between world-class AI talent and visionary enterprises. 
            Start building with vetted, ready-to-deploy professionals.
          </p>
          
          <Link to="/contact" className="hire-ai-cta">
            Start Hiring Today 
            <span className="cta-arrow">→</span>
          </Link>
        </div>

        {/* Compact Stats Grid */}
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-item">
            <div className="stat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="stat-number">400+</span>
              <p className="stat-label">Vetted AI experts</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat-item">
            <div className="stat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="stat-number">100+</span>
              <p className="stat-label">Countries</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat-item">
            <div className="stat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="stat-number">97%</span>
              <p className="stat-label">Retention rate</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="stat-item">
            <div className="stat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="stat-number">~4 Days</span>
              <p className="stat-label">Quick onboarding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}