import React from "react";

export default function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <style>{`

        .trusted-companies {
          padding: 60px 6%;
          background: #fff;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .trusted-container {
          max-width: 1500px;
          margin: auto;
        }

        .trusted-title {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 50px;
        }

        .logos-marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeMove 38s linear infinite;
        }

        @keyframes marqueeMove {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }

        .logos-marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        /* ⭐ REDUCED DESKTOP GAP */
        .logo-item {
          flex: 0 0 auto;
          padding: 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-item img {
          max-width: 170px;
          max-height: 90px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logo-item:hover img {
          transform: scale(1.1);
        }

        /* ===== TABLET ===== */
        @media (max-width: 1024px) {
          .marquee-track { animation-duration: 28s; }
          .logo-item { padding: 0 26px; }
          .logo-item img {
            max-width: 130px;
            max-height: 70px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {

          .trusted-companies {
            padding: 30px 4%;
          }

          .trusted-title {
            font-size: 24px;
            margin-bottom: 24px;
          }

          .marquee-track { animation-duration: 18s; }

          .logo-item { padding: 0 18px; }

          .logo-item img {
            max-width: 95px;
            max-height: 45px;
          }
        }

      `}</style>

      <div className="trusted-container">
        <h2 className="trusted-title">Trusted by Global Enterprises</h2>

        <div className="logos-marquee">
          <div className="marquee-track">

            {/* SET 1 */}
            <div className="logo-item"><img src="https://i.pinimg.com/736x/c1/ce/19/c1ce199e61e5987447ff4331141abec0.jpg" alt="" /></div>
            <div className="logo-item"><img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="" /></div>
            <div className="logo-item"><img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="" /></div>
            <div className="logo-item"><img src="https://bhavnacorp.com/images/logo.png" alt="" /></div>
            <div className="logo-item"><img src="https://res.cloudinary.com/hyld/image/upload/f_auto,q_auto/TCS_NewLogo_Final_CMYK_Black_new" alt="" /></div>
            <div className="logo-item"><img src="https://www.happiestminds.com/wp-content/uploads/2026/01/happiest-minds-latest-logo.png" alt="" /></div>
            

            {/* SET 2 */}
            <div className="logo-item"><img src="https://i.pinimg.com/736x/c1/ce/19/c1ce199e61e5987447ff4331141abec0.jpg" alt="" /></div>
            <div className="logo-item"><img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="" /></div>
            <div className="logo-item"><img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="" /></div>
            <div className="logo-item"><img src="https://bhavnacorp.com/images/logo.png" alt="" /></div>
            <div className="logo-item"><img src="https://res.cloudinary.com/hyld/image/upload/f_auto,q_auto/TCS_NewLogo_Final_CMYK_Black_new" alt="" /></div>
            <div className="logo-item"><img src="https://www.happiestminds.com/wp-content/uploads/2026/01/happiest-minds-latest-logo.png" alt="" /></div>
             

          </div>
        </div>
      </div>
    </section>
  );
}