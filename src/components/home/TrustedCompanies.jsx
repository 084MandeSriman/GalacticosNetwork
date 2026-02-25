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
            
            <div className="logo-item"><img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="" /></div>
            <div className="logo-item"><img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="" /></div>
            <div className="logo-item"><img src="https://bhavnacorp.com/wp-content/uploads/2025/08/logo.png" alt="" /></div>
            <div className="logo-item"><img src="https://www.kpipartners.com/hubfs/KPI-Partners-2021/Icons/KPI%20Logo%20(1).svg" alt="" /></div>
            <div className="logo-item"><img src="https://levitateconsulting.tech/home/wp-content/uploads/2020/01/headerlogo.png" alt="" /></div>
            <div className="logo-item"><img src="https://pyxismcg.com/images/logo.png" alt="" /></div>
            <div className="logo-item"><img src="https://kanerika.com/wp-content/uploads/2025/05/Kanerika-Full-logo.svg" alt="" /></div>
            

            {/* SET 2 */}
            
            <div className="logo-item"><img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="" /></div>
            <div className="logo-item"><img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="" /></div>
            <div className="logo-item"><img src="https://bhavnacorp.com/wp-content/uploads/2025/08/logo.png" alt="" /></div>
            <div className="logo-item"><img src="https://www.kpipartners.com/hubfs/KPI-Partners-2021/Icons/KPI%20Logo%20(1).svg" alt="" /></div>
            <div className="logo-item"><img src="https://levitateconsulting.tech/home/wp-content/uploads/2020/01/headerlogo.png" alt="" /></div>
            <div className="logo-item"><img src="https://pyxismcg.com/images/logo.png" alt="" /></div>
            <div className="logo-item"><img src="https://kanerika.com/wp-content/uploads/2025/05/Kanerika-Full-logo.svg" alt="" /></div>
             

          </div>
        </div>
      </div>
    </section>
  );
}