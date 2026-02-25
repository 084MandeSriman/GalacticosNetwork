import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="terms-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .terms-wrapper {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafc 100%);
          min-height: 100vh;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          color: #1e293b;
        }
        .terms-container {
          max-width: 900px;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 32px;
          padding: 50px 60px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        .terms-container h1 {
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 20px;
          background: linear-gradient(145deg, #4f46e5 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
          border-bottom: 2px solid rgba(99, 102, 241, 0.2);
          padding-bottom: 20px;
        }
        .terms-container p {
          font-size: 16px;
          line-height: 1.7;
          color: #334155;
          margin: 0 0 20px;
        }
        @media (max-width: 768px) {
          .terms-container { padding: 30px 25px; }
          .terms-container h1 { font-size: 32px; }
        }
      `}</style>
      <div className="terms-container">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website.</p>
        <p>We may collect personal information such as your name, email address, and browsing behavior to improve your experience and for analytics purposes. We do not sell or share your data with third parties except as required by law.</p>
        <p>By using our website, you consent to our privacy practices. If you have any questions, please contact us.</p>
        {/* Add full privacy policy text as needed */}
      </div>
    </div>
  );
}