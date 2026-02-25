import React from 'react';

export default function TermsAndConditions() {
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

        .terms-container ul {
          list-style-type: disc;
          padding-left: 25px;
          margin: 20px 0 30px;
        }

        .terms-container li {
          font-size: 16px;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 12px;
        }

        .terms-container strong {
          color: #4f46e5;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .terms-container {
            padding: 30px 25px;
          }
          .terms-container h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern <strong>Galacticos Network</strong>'s relationship with you in relation to this website.
        </p>
        <p>
          The term <strong>Galacticos Network</strong> or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.
        </p>
        <p>The use of this website is subject to the following terms of use:</p>
        <ul>
          <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
          <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
          <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
          <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
          <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
          <li>You may not create a link to this website from another website or document without Galacticos Network prior written consent.</li>
          <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.</li>
        </ul>
      </div>
    </div>
  );
}