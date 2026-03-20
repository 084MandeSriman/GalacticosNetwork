// import { useNavigate } from "react-router-dom";
// import {
//   FaCloud,
//   FaCogs,
//   FaDatabase,
//   FaMobileAlt,
//   FaCode,
//   FaVial,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const navigate = useNavigate();

//   return (
//     <section id="services" className="services-section">
//       <style>{`
//         .services-section {
//           position: relative;
//           padding: 100px 6%;
//           background:
//             linear-gradient(
//               135deg,
//               rgba(10, 25, 47, 0.92) 0%,
//               rgba(20, 40, 70, 0.88) 50%,
//               rgba(10, 25, 47, 0.92) 100%
//             ),
//             url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80");
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//           color: #fff;
//           overflow: hidden;
//         }

//         .services-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: 
//             radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
//             radial-gradient(circle at 60% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%);
//           pointer-events: none;
//         }

//         .services-title {
//           max-width: 1000px;
//           margin: 0 auto 80px;
//           text-align: center;
//           font-size: 52px;
//           font-weight: 800;
//           line-height: 1.15;
//           letter-spacing: -0.02em;
//           background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #818cf8 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: titleGlow 4s ease-in-out infinite;
//           position: relative;
//           z-index: 1;
//         }

//         @keyframes titleGlow {
//           0%, 100% { filter: drop-shadow(0 0 20px rgba(129, 140, 248, 0.3)); }
//           50% { filter: drop-shadow(0 0 40px rgba(129, 140, 248, 0.5)); }
//         }

//         .services-grid {
//           max-width: 1300px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 28px;
//           perspective: 1200px;
//         }

//         /* Entrance Animation */
//         .flip-card {
//           height: 280px;
//           cursor: pointer;
//           position: relative;
//           opacity: 0;
//           transform: translateY(40px);
//           animation: cardEntrance 0.8s ease forwards;
//         }

//         .flip-card:nth-child(1) { animation-delay: 0.1s; }
//         .flip-card:nth-child(2) { animation-delay: 0.2s; }
//         .flip-card:nth-child(3) { animation-delay: 0.3s; }
//         .flip-card:nth-child(4) { animation-delay: 0.4s; }
//         .flip-card:nth-child(5) { animation-delay: 0.5s; }
//         .flip-card:nth-child(6) { animation-delay: 0.6s; }
//         .flip-card:nth-child(7) { animation-delay: 0.7s; }
//         .flip-card:nth-child(8) { animation-delay: 0.8s; }

//         @keyframes cardEntrance {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .flip-card::before {
//           content: '';
//           position: absolute;
//           inset: -3px;
//           border-radius: 24px;
//           padding: 3px;
//           background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%);
//           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }

//         .flip-card:hover::before {
//           opacity: 1;
//         }

//         .flip-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-style: preserve-3d;
//         }

//         .flip-card:hover .flip-inner {
//           transform: rotateY(180deg) scale(1.02);
//         }

//         .flip-front, .flip-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           border-radius: 20px;
//           padding: 28px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           backface-visibility: hidden;
//           border: 1px solid rgba(255,255,255,0.15);
//           backdrop-filter: blur(20px);
//           box-shadow: 
//             0 20px 40px rgba(0,0,0,0.3),
//             inset 0 1px 0 rgba(255,255,255,0.2),
//             inset 0 -1px 0 rgba(0,0,0,0.1);
//           overflow: hidden;
//           transition: box-shadow 0.4s ease;
//         }

//         .flip-card:hover .flip-front,
//         .flip-card:hover .flip-back {
//           box-shadow: 
//             0 30px 60px rgba(0,0,0,0.4),
//             0 0 40px rgba(129, 140, 248, 0.2),
//             inset 0 1px 0 rgba(255,255,255,0.3);
//         }

//         .flip-front::before {
//           content: '';
//           position: absolute;
//           top: -60%;
//           left: -60%;
//           width: 220%;
//           height: 220%;
//           background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
//           animation: shimmer 4s infinite;
//           pointer-events: none;
//         }

//         @keyframes shimmer {
//           0%, 100% { transform: translate(-30%, -30%) scale(0.8); opacity: 0; }
//           50% { transform: translate(0%, 0%) scale(1); opacity: 1; }
//         }

//         .card-svg-bg {
//           position: absolute;
//           inset: 0;
//           opacity: 0.15;
//           pointer-events: none;
//           overflow: hidden;
//         }

//         .card-svg-bg svg {
//           width: 100%;
//           height: 100%;
//         }

//         @keyframes rotate360 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 0.15; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(1.08); }
//         }

//         @keyframes flowData {
//           0% { stroke-dashoffset: 100; }
//           100% { stroke-dashoffset: 0; }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(-8px) scale(1.05); }
//         }

//         @keyframes iconGlow {
//           0%, 100% { filter: drop-shadow(0 0 8px currentColor); }
//           50% { filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 30px currentColor); }
//         }

//         .flip-front {
//           align-items: center;
//           text-align: center;
//         }

//         .flip-back {
//           transform: rotateY(180deg);
//           justify-content: flex-start;
//           padding-top: 32px;
//         }

//         .flip-back-title {
//           font-size: 14px;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.1em;
//           margin-bottom: 20px;
//           opacity: 0.9;
//           text-align: center;
//         }

//         .service-icon {
//           font-size: 42px;
//           margin-bottom: 16px;
//           animation: float 4s ease-in-out infinite;
//           filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4));
//           position: relative;
//           z-index: 1;
//           transition: all 0.4s ease;
//         }

//         .flip-card:hover .service-icon {
//           animation: iconGlow 2s ease-in-out infinite;
//           transform: scale(1.1);
//         }

//         .flip-front h3 {
//           font-size: 18px;
//           font-weight: 700;
//           line-height: 1.35;
//           position: relative;
//           z-index: 1;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.3);
//           letter-spacing: -0.01em;
//         }

//         .flip-front .hover-hint {
//           position: absolute;
//           bottom: 20px;
//           font-size: 11px;
//           text-transform: uppercase;
//           letter-spacing: 0.15em;
//           opacity: 0;
//           transform: translateY(10px);
//           transition: all 0.3s ease;
//         }

//         .flip-card:hover .hover-hint {
//           opacity: 0.7;
//           transform: translateY(0);
//         }

//         .flip-back ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           font-size: 14px;
//           line-height: 1.7;
//         }

//         .flip-back ul li {
//           padding: 12px 16px;
//           cursor: pointer;
//           transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//           border-radius: 10px;
//           margin-bottom: 6px;
//           background: rgba(255,255,255,0.08);
//           backdrop-filter: blur(10px);
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           border: 1px solid transparent;
//         }

//         .flip-back ul li:hover {
//           transform: translateX(10px) scale(1.02);
//           background: rgba(255,255,255,0.18);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.2);
//           border-color: rgba(255,255,255,0.2);
//         }

//         .flip-back ul li::before {
//           content: "→";
//           margin-right: 12px;
//           font-weight: bold;
//           transition: transform 0.3s;
//           display: inline-block;
//           width: 16px;
//         }

//         .flip-back ul li:hover::before {
//           transform: translateX(6px);
//         }

//         .flip-back ul li .arrow {
//           opacity: 0;
//           transform: translateX(-10px);
//           transition: all 0.3s ease;
//           font-size: 12px;
//         }

//         .flip-back ul li:hover .arrow {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         /* Enhanced Vibrant Gradients */
//         .card1 { 
//           background: linear-gradient(135deg, rgba(79, 70, 229, 0.75) 0%, rgba(99, 102, 241, 0.65) 50%, rgba(139, 92, 246, 0.65) 100%);
//         }
//         .card2 { 
//           background: linear-gradient(135deg, rgba(6, 182, 212, 0.75) 0%, rgba(20, 184, 166, 0.65) 50%, rgba(16, 185, 129, 0.65) 100%);
//         }
//         .card3 { 
//           background: linear-gradient(135deg, rgba(236, 72, 153, 0.75) 0%, rgba(168, 85, 247, 0.65) 50%, rgba(139, 92, 246, 0.65) 100%);
//         }
//         .card4 { 
//           background: linear-gradient(135deg, rgba(249, 115, 22, 0.75) 0%, rgba(234, 179, 8, 0.65) 50%, rgba(132, 204, 22, 0.65) 100%);
//         }
//         .card5 { 
//           background: linear-gradient(135deg, rgba(14, 165, 233, 0.75) 0%, rgba(59, 130, 246, 0.65) 50%, rgba(99, 102, 241, 0.65) 100%);
//         }
//         .card6 { 
//           background: linear-gradient(135deg, rgba(20, 184, 166, 0.75) 0%, rgba(6, 182, 212, 0.65) 50%, rgba(16, 185, 129, 0.65) 100%);
//         }
//         .card7 { 
//           background: linear-gradient(135deg, rgba(168, 85, 247, 0.75) 0%, rgba(236, 72, 153, 0.65) 50%, rgba(244, 114, 182, 0.65) 100%);
//         }
//         .card8 { 
//           background: linear-gradient(135deg, rgba(71, 85, 105, 0.75) 0%, rgba(30, 41, 59, 0.65) 50%, rgba(59, 130, 246, 0.65) 100%);
//         }

//         /* RESPONSIVE */
//         @media (max-width: 1200px) {
//           .services-section {
//             padding: 80px 5%;
//           }
//           .services-title {
//             font-size: 44px;
//             margin-bottom: 60px;
//           }
//           .services-grid {
//             gap: 22px;
//           }
//           .flip-card {
//             height: 260px;
//           }
//         }

//         @media (max-width: 1024px) {
//           .services-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 20px;
//           }
//           .services-section {
//             padding: 70px 4%;
//           }
//           .services-title {
//             font-size: 38px;
//             margin-bottom: 50px;
//           }
//           .flip-card {
//             height: 250px;
//           }
//         }

//         @media (max-width: 768px) {
//           .services-section {
//             padding: 60px 4%;
//           }
//           .services-title {
//             font-size: 32px;
//             margin-bottom: 40px;
//           }
//           .services-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 16px;
//           }
//           .flip-card {
//             height: 220px;
//           }
//           .flip-front, .flip-back {
//             padding: 20px;
//             border-radius: 16px;
//           }
//           .service-icon {
//             font-size: 32px;
//             margin-bottom: 10px;
//           }
//           .flip-front h3 {
//             font-size: 15px;
//           }
//           .flip-back ul {
//             font-size: 13px;
//             line-height: 1.5;
//           }
//           .flip-back ul li {
//             padding: 10px 12px;
//             margin-bottom: 4px;
//           }
//         }

//         @media (max-width: 640px) {
//           .services-section {
//             padding: 50px 3%;
//           }
//           .services-title {
//             font-size: 26px;
//             margin-bottom: 35px;
//           }
//           .services-grid {
//             grid-template-columns: 1fr;
//             gap: 14px;
//           }
//           .flip-card {
//             height: 200px;
//           }
//           .flip-front, .flip-back {
//             padding: 16px;
//           }
//           .service-icon {
//             font-size: 28px;
//           }
//           .flip-back-title {
//             font-size: 12px;
//             margin-bottom: 14px;
//           }
//         }

//         @media (max-width: 480px) {
//           .services-section {
//             padding: 40px 3%;
//           }
//           .services-title {
//             font-size: 22px;
//             margin-bottom: 28px;
//             font-weight: 700;
//           }
//           .services-grid {
//             grid-template-columns: 1fr;
//             gap: 12px;
//           }
//           .flip-card {
//             height: 180px;
//           }
//           .flip-front, .flip-back {
//             padding: 14px;
//             border-radius: 14px;
//           }
//           .service-icon {
//             font-size: 24px;
//             margin-bottom: 8px;
//           }
//           .flip-front h3 {
//             font-size: 14px;
//           }
//           .flip-back ul {
//             font-size: 12px;
//             line-height: 1.4;
//           }
//           .flip-back ul li {
//             padding: 8px 10px;
//           }
//         }

//         @media (max-width: 360px) {
//           .services-section {
//             padding: 35px 3%;
//           }
//           .services-title {
//             font-size: 20px;
//             margin-bottom: 24px;
//           }
//           .services-grid {
//             gap: 10px;
//           }
//           .flip-card {
//             height: 165px;
//           }
//           .flip-front, .flip-back {
//             padding: 12px;
//           }
//           .service-icon {
//             font-size: 22px;
//           }
//           .flip-front h3 {
//             font-size: 13px;
//           }
//         }
//       `}</style>

//       <h2 className="services-title">
//         Delivering Technology Transformation And Cost Optimization
//       </h2>

//       <div className="services-grid">

//         {[
//           {
//             title: "Application Engineering",
//             icon: <FaCode />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad1"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><circle cx="100" cy="100" r="70" fill="none" stroke="url(#grad1)" strokeWidth="2"/><circle cx="100" cy="100" r="50" fill="none" stroke="url(#grad1)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite'}}/><circle cx="100" cy="100" r="30" fill="none" stroke="url(#grad1)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite 0.5s'}}/><line x1="30" y1="100" x2="170" y2="100" stroke="url(#grad1)" strokeWidth="2"/><line x1="100" y1="30" x2="100" y2="170" stroke="url(#grad1)" strokeWidth="2"/><circle cx="30" cy="100" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="170" cy="100" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.5s'}}/><circle cx="100" cy="30" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1s'}}/><circle cx="100" cy="170" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.5s'}}/><path d="M30 100 Q65 70 100 100 T170 100" fill="none" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" style={{animation: 'flowData 3s linear infinite'}}/></svg>,
//             subServices: [
//               { name: "Transformations", path: "/services/application-engineering/transformations" },
//               { name: "Modern Development", path: "/services/application-engineering/modern-development" },
//               { name: "Lifecycle Management", path: "/services/application-engineering/lifecycle-management" }
//             ],
//             className: "card1"
//           },
//           {
//             title: "Cloud SaaS",
//             icon: <FaCloud />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad2"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><path d="M40 110 Q40 70 70 70 Q70 40 100 40 Q130 40 130 70 Q160 70 160 110 Q160 140 130 140 L50 140 Q40 140 40 110" fill="white" fillOpacity="0.1" stroke="url(#grad2)" strokeWidth="2" style={{animation: 'pulse 4s ease-in-out infinite'}}/><path d="M60 120 Q60 90 85 90 Q85 65 110 65 Q135 65 135 90 Q150 90 150 120 Q150 145 135 145 L65 145 Q60 145 60 120" fill="white" fillOpacity="0.15" stroke="url(#grad2)" strokeWidth="1.5" style={{animation: 'pulse 4s ease-in-out infinite 0.5s'}}/><circle cx="70" cy="95" r="5" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="100" cy="105" r="5" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.7s'}}/><circle cx="130" cy="100" r="5" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.4s'}}/><path d="M100 150 L100 170 M95 165 L100 170 L105 165" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" style={{animation: 'pulse 2s ease-in-out infinite'}}/></svg>,
//             subServices: [
//               { name: "Veeva", path: "/services/cloud-saas/veeva" },
//               { name: "Workday", path: "/services/cloud-saas/workday" },
//               { name: "Salesforce", path: "/services/cloud-saas/salesforce" }
//             ],
//             className: "card2"
//           },
//           {
//             title: "Cloud",
//             icon: <FaCloud />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad3"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><rect x="50" y="70" width="100" height="70" rx="10" fill="white" fillOpacity="0.1" stroke="url(#grad3)" strokeWidth="2"/><rect x="60" y="80" width="80" height="50" rx="6" fill="white" fillOpacity="0.15" stroke="url(#grad3)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><path d="M100 60 L100 35 M85 50 L100 35 L115 50" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="100" cy="30" r="8" fill="white" opacity="0.6" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="70" cy="95" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.3s'}}/><circle cx="90" cy="105" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.6s'}}/><circle cx="110" cy="95" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.9s'}}/><circle cx="130" cy="105" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.2s'}}/></svg>,
//             subServices: [
//               { name: "AWS", path: "/services/cloud/aws" },
//               { name: "Azure", path: "/services/cloud/azure" },
//               { name: "GCP", path: "/services/cloud/gcp" },
//               { name: "Migration", path: "/services/cloud/migration" }
//             ],
//             className: "card3"
//           },
//           {
//             title: "Quality Engineering",
//             icon: <FaVial />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad4"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad4)" strokeWidth="2.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><circle cx="100" cy="100" r="40" fill="none" stroke="url(#grad4)" strokeWidth="2" opacity="0.6"/><path d="M65 100 L85 120 L135 70" stroke="white" strokeWidth="4" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="120" strokeDashoffset="120" style={{animation: 'flowData 2s ease-in-out infinite'}}/><circle cx="100" cy="100" r="20" fill="white" fillOpacity="0.1" style={{animation: 'pulse 2s ease-in-out infinite 0.5s'}}/><path d="M100 50 L100 70 M100 130 L100 150 M50 100 L70 100 M130 100 L150 100" stroke="url(#grad4)" strokeWidth="2" opacity="0.4" strokeLinecap="round"/></svg>,
//             subServices: [
//               { name: "Automation Testing", path: "/services/quality-engineering/automation" },
//               { name: "Continuous Testing", path: "/services/quality-engineering/continuous-testing" },
//               { name: "Performance Testing", path: "/services/quality-engineering/performance" }
//             ],
//             className: "card4"
//           },
//           {
//             title: "Data Engineering",
//             icon: <FaDatabase />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad5"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><ellipse cx="100" cy="70" rx="60" ry="18" fill="white" fillOpacity="0.1" stroke="url(#grad5)" strokeWidth="2"/><ellipse cx="100" cy="95" rx="60" ry="18" fill="white" fillOpacity="0.12" stroke="url(#grad5)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite'}}/><ellipse cx="100" cy="120" rx="60" ry="18" fill="white" fillOpacity="0.15" stroke="url(#grad5)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite 0.5s'}}/><line x1="40" y1="70" x2="40" y2="120" stroke="url(#grad5)" strokeWidth="2"/><line x1="160" y1="70" x2="160" y2="120" stroke="url(#grad5)" strokeWidth="2"/><circle cx="100" cy="70" r="6" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="100" cy="95" r="6" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.7s'}}/><circle cx="100" cy="120" r="6" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.4s'}}/><path d="M70 140 L100 155 L130 140" stroke="url(#grad5)" strokeWidth="2" fill="none" opacity="0.4"/></svg>,
//             subServices: [
//               { name: "ETL", path: "/services/data-engineering/etl" },
//               { name: "Data Lakes", path: "/services/data-engineering/data-lakes" },
//               { name: "Warehousing", path: "/services/data-engineering/warehousing" },
//               { name: "Analytics", path: "/services/data-engineering/analytics" }
//             ],
//             className: "card5"
//           },
//           {
//             title: "DevOps",
//             icon: <FaCogs />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad6"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><g style={{animation: 'rotate360 10s linear infinite', transformOrigin: '60px 100px'}}><circle cx="60" cy="100" r="25" fill="none" stroke="url(#grad6)" strokeWidth="2"/><path d="M60 80 L60 90 M50 85 L60 80 L70 85" stroke="white" strokeWidth="2" opacity="0.5"/><path d="M60 110 L60 120 M50 115 L60 120 L70 115" stroke="white" strokeWidth="2" opacity="0.5"/></g><g style={{animation: 'rotate360 8s linear infinite reverse', transformOrigin: '100px 100px'}}><circle cx="100" cy="100" r="25" fill="none" stroke="url(#grad6)" strokeWidth="2"/><path d="M100 80 L100 90 M90 85 L100 80 L110 85" stroke="white" strokeWidth="2" opacity="0.5"/><path d="M100 110 L100 120 M90 115 L100 120 L110 115" stroke="white" strokeWidth="2" opacity="0.5"/></g><g style={{animation: 'rotate360 10s linear infinite', transformOrigin: '140px 100px'}}><circle cx="140" cy="100" r="25" fill="none" stroke="url(#grad6)" strokeWidth="2"/><path d="M140 80 L140 90 M130 85 L140 80 L150 85" stroke="white" strokeWidth="2" opacity="0.5"/><path d="M140 110 L140 120 M130 115 L140 120 L150 115" stroke="white" strokeWidth="2" opacity="0.5"/></g><path d="M85 100 L75 100" stroke="url(#grad6)" strokeWidth="2" opacity="0.4"/><path d="M125 100 L115 100" stroke="url(#grad6)" strokeWidth="2" opacity="0.4"/></svg>,
//             subServices: [
//               { name: "CI/CD", path: "/services/devops/cicd" },
//               { name: "Kubernetes", path: "/services/devops/kubernetes" },
//               { name: "Infrastructure as Code", path: "/services/devops/iac" },
//               { name: "Monitoring", path: "/services/devops/monitoring" }
//             ],
//             className: "card6"
//           },
//           {
//             title: "UX / UI",
//             icon: <FaCode />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad7"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><rect x="40" y="50" width="120" height="100" rx="10" fill="white" fillOpacity="0.08" stroke="url(#grad7)" strokeWidth="2"/><rect x="50" y="65" width="45" height="30" rx="6" fill="white" fillOpacity="0.2" stroke="url(#grad7)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><rect x="105" y="65" width="45" height="30" rx="6" fill="white" fillOpacity="0.2" stroke="url(#grad7)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite 0.5s'}}/><line x1="50" y1="110" x2="150" y2="110" stroke="url(#grad7)" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/><line x1="50" y1="125" x2="130" y2="125" stroke="url(#grad7)" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/><line x1="50" y1="140" x2="110" y2="140" stroke="url(#grad7)" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/><circle cx="70" cy="80" r="8" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="125" cy="80" r="8" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite 0.5s'}}/></svg>,
//             subServices: [
//               { name: "UX Strategy", path: "/services/ui-ux/ux-strategy" },
//               { name: "Frontend Engineering", path: "/services/ui-ux/frontend" },
//               { name: "Design Systems", path: "/services/ui-ux/design-systems" }
//             ],
//             className: "card7"
//           },
//           {
//             title: "Mobility",
//             icon: <FaMobileAlt />,
//             svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad8"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><rect x="65" y="30" width="70" height="140" rx="12" fill="white" fillOpacity="0.08" stroke="url(#grad8)" strokeWidth="2.5"/><rect x="75" y="50" width="50" height="95" rx="6" fill="white" fillOpacity="0.15" stroke="url(#grad8)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><circle cx="100" cy="155" r="8" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><rect x="85" y="38" width="30" height="5" rx="2.5" fill="white" opacity="0.4"/><circle cx="115" cy="40" r="3" fill="white" opacity="0.4"/><rect x="85" y="65" width="30" height="3" rx="1.5" fill="white" opacity="0.3"/><rect x="85" y="75" width="30" height="3" rx="1.5" fill="white" opacity="0.3"/><rect x="85" y="85" width="20" height="3" rx="1.5" fill="white" opacity="0.3"/><circle cx="90" cy="105" r="6" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite 0.3s'}}/><circle cx="110" cy="105" r="6" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite 0.6s'}}/></svg>,
//             subServices: [
//               { name: "Native Apps", path: "/services/mobility/native" },
//               { name: "Cross Platform", path: "/services/mobility/cross-platform" },
//               { name: "Enterprise Mobility", path: "/services/mobility/enterprise" }
//             ],
//             className: "card8"
//           }
//         ].map((service, index) => (
//           <div key={index} className="flip-card">
//             <div className="flip-inner">
//               <div className={`flip-front ${service.className}`}>
//                 <div className="card-svg-bg">{service.svg}</div>
//                 <div className="service-icon">{service.icon}</div>
//                 <h3>{service.title}</h3>
//                 <div className="hover-hint">Hover to explore</div>
//               </div>
//               <div className={`flip-back ${service.className}`}>
//                 <div className="flip-back-title">Our Services</div>
//                 <ul>
//                   {service.subServices.map((sub, i) => (
//                     <li key={i} onClick={(e) => { e.stopPropagation(); navigate(sub.path); }}>
//                       {sub.name}
//                       <span className="arrow">→</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaCogs,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaVial,
  FaTimes,
} from "react-icons/fa";

export default function ServicesSection() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // Service content for each subsection
  const serviceContent = {
    "Application Engineering": {
      ".NET": {
        title: ".NET Development",
        description: "Build robust enterprise applications with our expert .NET development services. We deliver scalable, secure, and high-performance solutions using the latest .NET framework technologies.",
        features: ["ASP.NET Core MVC & Web API", "Enterprise Application Development", "Microservices Architecture", "Azure Cloud Solutions", "Legacy Modernization"],
        benefits: "Our .NET expertise helps Fortune 500 companies accelerate digital transformation with maintainable, future-ready applications."
      },
      "NodeJS": {
        title: "Node.js Development",
        description: "Leverage the power of JavaScript with our Node.js development services for building fast, scalable network applications and real-time solutions.",
        features: ["RESTful API Development", "Express.js & Fastify", "Real-time Applications (Socket.io)", "Serverless Architecture", "Microservices"],
        benefits: "Build high-performance, event-driven applications with our expert Node.js development team."
      },
      "Python": {
        title: "Python Development",
        description: "Harness the versatility of Python for data science, machine learning, web development, and automation solutions.",
        features: ["Django & Flask Web Apps", "Machine Learning & AI", "Data Analysis & Visualization", "Automation & Scripting", "API Development"],
        benefits: "From startups to enterprises, our Python solutions drive innovation across industries."
      },
      "React / Angular": {
        title: "Frontend Development",
        description: "Create stunning, responsive user interfaces with our expert frontend development services using React and Angular.",
        features: ["React.js & Next.js", "Angular Development", "TypeScript Integration", "Progressive Web Apps", "UI/UX Implementation"],
        benefits: "Deliver exceptional user experiences with modern, performant frontend applications."
      }
    },
    "Cloud SaaS": {
      "Salesforce": {
        title: "Salesforce Solutions",
        description: "Transform your customer relationships with our comprehensive Salesforce implementation and customization services.",
        features: ["Sales Cloud & Service Cloud", "Lightning Platform", "Custom Apex Development", "Integration Solutions", "Marketing Cloud"],
        benefits: "Drive sales growth and customer satisfaction with tailored Salesforce solutions."
      },
      "MS Dynamics 365": {
        title: "Microsoft Dynamics 365",
        description: "Empower your business with integrated CRM and ERP capabilities through Microsoft Dynamics 365 implementation.",
        features: ["Dynamics 365 Sales & Service", "Finance & Operations", "Power Platform Integration", "Custom Solutions", "Cloud Migration"],
        benefits: "Unify your business processes with Microsoft's powerful enterprise platform."
      },
      "ServiceNow": {
        title: "ServiceNow Implementation",
        description: "Streamline your enterprise workflows with expert ServiceNow platform implementation and development.",
        features: ["IT Service Management", "IT Operations Management", "Custom Workflows", "Integration Hub", "Performance Analytics"],
        benefits: "Automate and optimize your service delivery with ServiceNow."
      },
      "MuleSoft": {
        title: "MuleSoft Integration",
        description: "Connect your applications, data, and devices with MuleSoft Anypoint Platform for seamless integration.",
        features: ["API-Led Connectivity", "Integration Templates", "CloudHub Deployment", "MuleSoft Composer", "Legacy Modernization"],
        benefits: "Enable digital transformation with unified, connected enterprise systems."
      }
    },
    "Cloud Infrastructure": {
      "AWS": {
        title: "Amazon Web Services",
        description: "Leverage the full power of AWS cloud infrastructure for scalable, secure, and cost-effective solutions.",
        features: ["EC2 & Lambda", "S3 & Glacier", "RDS & DynamoDB", "VPC Networking", "CloudFront CDN"],
        benefits: "Build and deploy enterprise-grade applications on the world's leading cloud platform."
      },
      "Azure": {
        title: "Microsoft Azure",
        description: "Accelerate your cloud journey with comprehensive Azure infrastructure and development services.",
        features: ["Virtual Machines & AKS", "Azure Functions", "SQL Database", "Azure Active Directory", "DevOps Solutions"],
        benefits: "Transform your business with Microsoft's enterprise-ready cloud solutions."
      },
      "GCP": {
        title: "Google Cloud Platform",
        description: "Harness Google's cutting-edge infrastructure for data analytics, ML, and cloud-native applications.",
        features: ["Compute Engine & GKE", "BigQuery Analytics", "Cloud Functions", "Machine Learning APIs", "Firebase"],
        benefits: "Leverage Google's global infrastructure for innovative cloud solutions."
      },
      "Cloud Migration": {
        title: "Cloud Migration Services",
        description: "Seamlessly migrate your workloads to the cloud with our proven migration methodology.",
        features: ["Assessment & Planning", "Lift-and-Shift", "Re-architecting", "Hybrid Cloud Solutions", "Post-Migration Support"],
        benefits: "Minimize downtime and maximize ROI during your cloud transformation journey."
      }
    },
    "Quality Engineering": {
      "Selenium": {
        title: "Selenium Automation",
        description: "Build robust test automation frameworks with Selenium for comprehensive quality assurance.",
        features: ["Test Framework Design", "Cross-Browser Testing", "Page Object Model", "CI/CD Integration", "Automated Reporting"],
        benefits: "Reduce testing time by 70% with intelligent Selenium automation."
      },
      "Playwright": {
        title: "Playwright Testing",
        description: "Modern end-to-end testing with Playwright for reliable web application validation.",
        features: ["Fast Test Execution", "Multi-Browser Support", "Mobile Testing", "API Testing", "Visual Testing"],
        benefits: "Achieve reliable, flake-free test automation with Playwright."
      },
      "Automation Testing": {
        title: "Test Automation Strategy",
        description: "Transform your QA process with comprehensive test automation strategies and implementation.",
        features: ["Test Strategy Design", "Tool Selection", "Framework Development", "Maintenance & Support", "Performance Testing"],
        benefits: "Accelerate release cycles with enterprise-grade test automation."
      },
      "Performance Testing": {
        title: "Performance Testing",
        description: "Ensure your applications meet performance requirements under load with JMeter and Gatling.",
        features: ["Load Testing", "Stress Testing", "Endurance Testing", "Scalability Testing", "Monitoring"],
        benefits: "Identify bottlenecks before production and deliver optimal user experiences."
      }
    },
    "Data Engineering": {
      "ETL / Data Lakes": {
        title: "ETL & Data Lakes",
        description: "Build scalable data pipelines and lakehouse architectures for comprehensive data management.",
        features: ["Apache Spark", "Delta Lake", "Snowflake", "Data Pipeline Design", "Real-time Streaming"],
        benefits: "Unlock insights from your data with modern ETL and lakehouse solutions."
      },
      "Data Warehousing": {
        title: "Data Warehousing",
        description: "Design and implement enterprise data warehouses for actionable business intelligence.",
        features: ["Star & Snowflake Schemas", "dbt Transformations", "ETL/ELT Pipelines", "BI Integration", "Data Governance"],
        benefits: "Enable data-driven decisions with optimized analytical platforms."
      },
      "Apache Airflow": {
        title: "Apache Airflow",
        description: "Orchestrate complex data workflows with Apache Airflow for reliable data pipelines.",
        features: ["DAG Development", "Custom Operators", "Scheduling & Triggers", "Monitoring & Alerts", "Cloud Composer"],
        benefits: "Automate and monitor data workflows with enterprise-grade orchestration."
      },
      "Kafka": {
        title: "Apache Kafka",
        description: "Build real-time streaming data platforms with Apache Kafka for event-driven architectures.",
        features: ["Event Streaming", "Kafka Connect", "ksqlDB", "Schema Registry", "Cluster Management"],
        benefits: "Enable real-time data processing at scale with Kafka."
      }
    },
    "DevOps": {
      "CI/CD Pipelines": {
        title: "CI/CD Pipelines",
        description: "Accelerate software delivery with automated continuous integration and deployment pipelines.",
        features: ["Jenkins & GitHub Actions", "GitLab CI", "Pipeline as Code", "Artifact Management", "Deployment Strategies"],
        benefits: "Deploy faster and more reliably with automated CI/CD."
      },
      "Docker & Kubernetes": {
        title: "Container Orchestration",
        description: "Containerize and orchestrate applications with Docker and Kubernetes for cloud-native deployments.",
        features: ["Container Design", "K8s Cluster Management", "Helm Charts", "Service Mesh", "Auto-scaling"],
        benefits: "Achieve portability and scalability with container orchestration."
      },
      "Terraform / Ansible": {
        title: "Infrastructure as Code",
        description: "Manage infrastructure programmatically with Terraform and Ansible for consistent, repeatable deployments.",
        features: ["Terraform Modules", "Ansible Playbooks", "State Management", "Policy as Code", "Multi-Cloud"],
        benefits: "Eliminate manual configuration with infrastructure as code."
      },
      "Azure DevOps": {
        title: "Azure DevOps",
        description: "Transform your development lifecycle with Azure DevOps for enterprise-grade CI/CD and project management.",
        features: ["Azure Pipelines", "Azure Boards", "Artifact Management", "Test Plans", "Security Scanning"],
        benefits: "Accelerate delivery with Microsoft's comprehensive DevOps platform."
      }
    },
    "UX / UI": {
      "UX Strategy": {
        title: "UX Strategy",
        description: "Define user-centered design strategies that align business goals with user needs.",
        features: ["User Research", "Persona Development", "Journey Mapping", "Information Architecture", "Usability Testing"],
        benefits: "Create meaningful user experiences that drive business value."
      },
      "Frontend Engineering": {
        title: "Frontend Engineering",
        description: "Build high-performance web applications with modern frontend technologies and best practices.",
        features: ["React & Vue.js", "TypeScript", "Performance Optimization", "Accessibility (WCAG)", "Responsive Design"],
        benefits: "Deliver pixel-perfect, performant interfaces users love."
      },
      "Design Systems": {
        title: "Design Systems",
        description: "Create and implement scalable design systems for consistent brand experiences across products.",
        features: ["Component Libraries", "Style Guides", "Token Management", "Documentation", "Governance"],
        benefits: "Scale design and development with consistent, reusable components."
      },
      "Accessibility": {
        title: "Accessibility",
        description: "Ensure digital inclusivity with WCAG-compliant accessible designs and implementations.",
        features: ["WCAG 2.1 AA/AAA", "Screen Reader Testing", "Keyboard Navigation", "ARIA Implementation", "Audit & Remediation"],
        benefits: "Reach all users with accessible, inclusive digital experiences."
      }
    },
    "Mobility": {
      "Native Apps (Kotlin/Swift)": {
        title: "Native App Development",
        description: "Build high-performance native mobile applications for iOS and Android platforms.",
        features: ["iOS (Swift)", "Android (Kotlin)", "Platform-Specific Features", "Performance Optimization", "App Store Deployment"],
        benefits: "Deliver native performance and user experience on both platforms."
      },
      "Cross Platform": {
        title: "Cross-Platform Development",
        description: "Build once, deploy everywhere with React Native and Flutter for cost-effective mobile solutions.",
        features: ["React Native", "Flutter", "Shared Codebase", "Native Modules", "App Store & Play Store"],
        benefits: "Maximize reach while minimizing development costs."
      },
      "Enterprise Mobility": {
        title: "Enterprise Mobility",
        description: "Transform enterprise operations with secure, scalable mobile solutions for business workflows.",
        features: ["MDM Integration", "BYOD Security", "Offline Capabilities", "Enterprise APIs", "Custom Business Apps"],
        benefits: "Empower your workforce with secure enterprise mobile solutions."
      },
      "Mobile UI/UX": {
        title: "Mobile UI/UX Design",
        description: "Create intuitive, engaging mobile experiences that users love.",
        features: ["Mobile-First Design", "Interaction Design", "Prototyping", "Design Systems", "User Testing"],
        benefits: "Deliver mobile experiences that delight users and drive engagement."
      }
    }
  };

  const handleServiceClick = (serviceName, subServiceName) => {
    setSelectedService({ service: serviceName, subService: subServiceName });
  };

  const closeContent = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="services-section">
      <style>{`
        .services-section {
          position: relative;
          padding: 100px 6%;
          background:
            linear-gradient(
              135deg,
              rgba(10, 25, 47, 0.92) 0%,
              rgba(20, 40, 70, 0.88) 50%,
              rgba(10, 25, 47, 0.92) 100%
            ),
            url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #fff;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%);
          pointer-events: none;
        }

        .services-title {
          max-width: 1000px;
          margin: 0 auto 80px;
          text-align: center;
          font-size: 52px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: titleGlow 4s ease-in-out infinite;
          position: relative;
          z-index: 1;
        }

        @keyframes titleGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(129, 140, 248, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(129, 140, 248, 0.5)); }
        }

        .services-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          perspective: 1200px;
        }

        .flip-card {
          height: 320px;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          animation: cardEntrance 0.8s ease forwards;
        }

        .flip-card:nth-child(1) { animation-delay: 0.1s; }
        .flip-card:nth-child(2) { animation-delay: 0.2s; }
        .flip-card:nth-child(3) { animation-delay: 0.3s; }
        .flip-card:nth-child(4) { animation-delay: 0.4s; }
        .flip-card:nth-child(5) { animation-delay: 0.5s; }
        .flip-card:nth-child(6) { animation-delay: 0.6s; }
        .flip-card:nth-child(7) { animation-delay: 0.7s; }
        .flip-card:nth-child(8) { animation-delay: 0.8s; }

        @keyframes cardEntrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flip-card::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 24px;
          padding: 3px;
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .flip-card:hover::before { opacity: 1; }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg) scale(1.02);
        }

        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          backface-visibility: hidden;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          overflow: hidden;
        }

        .flip-front { align-items: center; text-align: center; justify-content: center; }
        .flip-back { transform: rotateY(180deg); justify-content: flex-start; }

        .flip-back-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 15px;
          opacity: 0.8;
          text-align: center;
        }

        .service-icon {
          font-size: 42px;
          margin-bottom: 16px;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4));
          z-index: 1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .flip-front h3 {
          font-size: 19px;
          font-weight: 700;
          z-index: 1;
        }

        .flip-back ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .flip-back ul li {
          padding: 10px 14px;
          margin-bottom: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 8px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .flip-back ul li:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.2);
        }

        .card-svg-bg {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          pointer-events: none;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        /* Card Gradients */
        .card1 { background: linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(139, 92, 246, 0.7)); }
        .card2 { background: linear-gradient(135deg, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.7)); }
        .card3 { background: linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.7)); }
        .card4 { background: linear-gradient(135deg, rgba(249, 115, 22, 0.8), rgba(132, 204, 22, 0.7)); }
        .card5 { background: linear-gradient(135deg, rgba(14, 165, 233, 0.8), rgba(99, 102, 241, 0.7)); }
        .card6 { background: linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(6, 182, 212, 0.7)); }
        .card7 { background: linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.7)); }
        .card8 { background: linear-gradient(135deg, rgba(71, 85, 105, 0.8), rgba(59, 130, 246, 0.7)); }

        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr; } .services-title { font-size: 32px; } }
      `}</style>

      <h2 className="services-title">
        Delivering Technology Transformation And Cost Optimization
      </h2>

      <div className="services-grid">
        {[
          {
            title: "Application Engineering",
            icon: <FaCode />,
            className: "card1",
            subServices: [
              { name: ".NET", path: "/services/app-eng/dotnet" },
              { name: "NodeJS", path: "/services/app-eng/nodejs" },
              { name: "Python", path: "/services/app-eng/python" },
              { name: "React / Angular", path: "/services/app-eng/frontend" }
            ],
            svg: <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "Cloud SaaS",
            icon: <FaCloud />,
            className: "card2",
            subServices: [
              { name: "Salesforce", path: "/services/saas/salesforce" },
              { name: "MS Dynamics 365", path: "/services/saas/dynamics" },
              { name: "ServiceNow", path: "/services/saas/servicenow" },
              { name: "MuleSoft", path: "/services/saas/mulesoft" }
            ],
            svg: <svg viewBox="0 0 200 200"><path d="M40 110 Q40 70 70 70 Q100 40 130 70 Q160 70 160 110" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "Cloud Infrastructure",
            icon: <FaCloud />,
            className: "card3",
            subServices: [
              { name: "AWS", path: "/services/cloud/aws" },
              { name: "Azure", path: "/services/cloud/azure" },
              { name: "GCP", path: "/services/cloud/gcp" },
              { name: "Cloud Migration", path: "/services/cloud/migration" }
            ],
            svg: <svg viewBox="0 0 200 200"><rect x="50" y="70" width="100" height="60" rx="10" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "Quality Engineering",
            icon: <FaVial />,
            className: "card4",
            subServices: [
              { name: "Selenium", path: "/services/qa/selenium" },
              { name: "Playwright", path: "/services/qa/playwright" },
              { name: "Automation Testing", path: "/services/qa/automation" },
              { name: "Performance Testing", path: "/services/qa/performance" }
            ],
            svg: <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "Data Engineering",
            icon: <FaDatabase />,
            className: "card5",
            subServices: [
              { name: "ETL / Data Lakes", path: "/services/data/etl" },
              { name: "Data Warehousing", path: "/services/data/warehousing" },
              { name: "Apache Airflow", path: "/services/data/airflow" },
              { name: "Kafka", path: "/services/data/kafka" }
            ],
            svg: <svg viewBox="0 0 200 200"><ellipse cx="100" cy="70" rx="60" ry="20" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "DevOps",
            icon: <FaCogs />,
            className: "card6",
            subServices: [
              { name: "CI/CD Pipelines", path: "/services/devops/cicd" },
              { name: "Docker & Kubernetes", path: "/services/devops/k8s" },
              { name: "Terraform / Ansible", path: "/services/devops/iac" },
              { name: "Azure DevOps", path: "/services/devops/azure" }
            ],
            svg: <svg viewBox="0 0 200 200"><circle cx="70" cy="100" r="30" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/><circle cx="130" cy="100" r="30" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "UX / UI",
            icon: <FaCode />,
            className: "card7",
            subServices: [
              { name: "UX Strategy", path: "/services/ux/strategy" },
              { name: "Frontend Engineering", path: "/services/ux/frontend" },
              { name: "Design Systems", path: "/services/ux/systems" },
              { name: "Accessibility", path: "/services/ux/accessibility" }
            ],
            svg: <svg viewBox="0 0 200 200"><rect x="40" y="50" width="120" height="100" rx="10" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          },
          {
            title: "Mobility",
            icon: <FaMobileAlt />,
            className: "card8",
            subServices: [
              { name: "Native Apps (Kotlin/Swift)", path: "/services/mobility/native" },
              { name: "Cross Platform", path: "/services/mobility/cross" },
              { name: "Enterprise Mobility", path: "/services/mobility/enterprise" },
              { name: "Mobile UI/UX", path: "/services/mobility/ui" }
            ],
            svg: <svg viewBox="0 0 200 200"><rect x="70" y="30" width="60" height="140" rx="10" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/></svg>
          }
        ].map((service, index) => (
          <div key={index} className="flip-card">
            <div className="flip-inner">
              <div className={`flip-front ${service.className}`}>
                <div className="card-svg-bg">{service.svg}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <div style={{fontSize: '11px', marginTop: '10px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px'}}>Hover to explore</div>
              </div>
              <div className={`flip-back ${service.className}`}>
                <div className="flip-back-title">Core Expertise</div>
                <ul>
                  {service.subServices.map((sub, i) => (
                    <li key={i} onClick={(e) => { e.stopPropagation(); navigate(sub.path); }}>
                      {sub.name}
                      <span className="arrow">→</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}