import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function HedgeFundPlatforms() {
  const navigate = useNavigate();
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            let count = 0;

            const update = () => {
              const inc = target / 50;
              if (count < target) {
                count += inc;
                el.innerText = Math.round(count) + "%";
                requestAnimationFrame(update);
              } else {
                el.innerText = target + "%";
              }
            };

            update();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <section className="healthcare">
      {/* HERO SECTION WITH HOSPITAL ILLUSIONS */}
      <div className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="floating-icons">
            <div className="icon icon-1">🏥</div>
            <div className="icon icon-2">💊</div>
            <div className="icon icon-3">🩺</div>
            <div className="icon icon-4">❤️</div>
            <div className="icon icon-5">🚑</div>
            <div className="icon icon-6">⚕️</div>
            <div className="icon icon-7">🧪</div>
            <div className="icon icon-8">📋</div>
          </div>
          <div className="ecg-line">
            <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path
                d="M0,100 L200,100 L220,20 L240,180 L260,100 L400,100 L420,40 L440,160 L460,100 L600,100 L620,60 L640,140 L660,100 L800,100 L820,80 L840,120 L860,100 L1000,100 L1020,30 L1040,170 L1060,100 L1200,100"
                stroke="#ff4d6d"
                strokeWidth="4"
                fill="none"
                strokeDasharray="1200"
                strokeDashoffset="1200"
              />
            </svg>
          </div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring delay"></div>
        </div>

        <div className="hero-content">
          <h1>
            <span className="highlight">Intelligent Automation</span> for
            Healthcare
          </h1>
          <p>
            Transforming operations, accelerating care delivery, and enabling a
            patient-first digital ecosystem
          </p>
        </div>
      </div>

      <div className="container">
        {/* Paragraphs with enhanced styling */}
        <div className="paragraph-block">
          <p className="fade-up">
            Healthcare organizations are navigating an era defined by rising
            operational costs, regulatory complexity, fragmented systems, and
            increasing expectations for personalized and real-time patient
            services. Intelligent automation provides a strategic foundation to
            modernize this landscape by combining robotic process automation,
            artificial intelligence, and advanced analytics into a unified
            digital workforce. This approach eliminates manual bottlenecks in
            high-volume processes such as claims adjudication, prior
            authorization, provider onboarding, and member lifecycle management,
            enabling healthcare enterprises to shift from reactive operations to
            predictive, insight-driven models that improve both financial
            performance and clinical outcomes.
          </p>
        </div>

        <div className="paragraph-block">
          <p className="fade-up">
            By creating a connected data ecosystem across payers, providers, and
            third-party platforms, automation ensures that critical information
            flows securely and instantly across the healthcare value chain. This
            real-time interoperability empowers care teams with accurate patient
            histories, accelerates decision-making, and significantly reduces
            administrative overhead. At the same time, AI-powered models
            continuously analyze structured and unstructured data to detect fraud,
            recommend medical coding, optimize resource allocation, and forecast
            demand patterns, enabling organizations to deliver faster, more
            accurate, and more cost-efficient services without compromising
            compliance or quality.
          </p>
        </div>

        <div className="paragraph-block">
          <p className="fade-up">
            The transformation extends beyond operational efficiency into a
            human-centered healthcare experience. Intelligent automation removes
            repetitive administrative tasks from clinicians and support teams,
            allowing them to focus on patient engagement, care coordination, and
            outcome-driven treatment. Members benefit from faster approvals,
            transparent communication, and seamless digital interactions across
            web and mobile channels. This shift not only improves satisfaction and
            trust but also strengthens the overall healthcare ecosystem by
            enabling proactive care models, reducing delays in treatment, and
            ensuring that every stakeholder operates with a single source of
            truth.
          </p>
        </div>

        <div className="paragraph-block">
          <p className="fade-up">
            From a technology perspective, the automation framework integrates
            seamlessly with core healthcare platforms such as claims systems,
            electronic health records, financial applications, and analytics
            environments. Scalable cloud infrastructure ensures high availability
            and performance, while built-in governance and audit capabilities
            support strict regulatory standards such as HIPAA and other global
            healthcare compliance mandates. Continuous monitoring and optimization
            mechanisms allow organizations to scale automation across departments,
            measure performance in real time, and rapidly adapt to changing
            business and regulatory requirements.
          </p>
        </div>

        <div className="paragraph-block">
          <p className="fade-up">
            The measurable impact of intelligent automation is transformative:
            significant reductions in processing time and operational costs,
            dramatic improvements in accuracy and compliance, and a digital-first
            healthcare model that is agile, scalable, and future-ready. More
            importantly, it enables healthcare enterprises to redirect their
            investments and human expertise toward innovation, preventive care,
            and value-based service delivery. In an industry where speed,
            precision, and empathy define success, intelligent automation becomes
            the catalyst that bridges operational excellence with superior patient
            outcomes.
          </p>
        </div>

        {/* METRICS */}
        <div className="metrics">
          <div className="metric-card">
            <div
              ref={(el) => (countersRef.current[0] = el)}
              data-target="70"
            >
              0%
            </div>
            <span>Reduction in admin costs</span>
          </div>
          <div className="metric-card">
            <div
              ref={(el) => (countersRef.current[1] = el)}
              data-target="85"
            >
              0%
            </div>
            <span>Faster claims processing</span>
          </div>
          <div className="metric-card">
            <div
              ref={(el) => (countersRef.current[2] = el)}
              data-target="60"
            >
              0%
            </div>
            <span>Less manual data entry</span>
          </div>
          <div className="metric-card">
            <div
              ref={(el) => (countersRef.current[3] = el)}
              data-target="99"
            >
              0%
            </div>
            <span>Accuracy improvement</span>
          </div>
        </div>

        {/* CTA */}
        <div className="cta">
          <h2>Reimagine Healthcare with Intelligent Automation</h2>
          <button onClick={() => navigate("/contact")}>Talk to Our Experts</button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes ecg-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes gentle-pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .healthcare {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          background: #f8fafc;
          overflow-x: hidden;
        }

        /* HERO SECTION */
        .hero {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background: linear-gradient(135deg, #0d4b6e, #0d6e8c, #0d9488);
          overflow: hidden;
          padding: 120px 20px;
          isolation: isolate;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              circle at 20% 30%,
              rgba(255, 255, 255, 0.1) 2px,
              transparent 2px
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(255, 255, 255, 0.1) 2px,
              transparent 2px
            );
          background-size: 50px 50px;
          opacity: 0.5;
        }

        .floating-icons {
          position: absolute;
          inset: 0;
        }

        .icon {
          position: absolute;
          font-size: 2.5rem;
          opacity: 0.25;
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }

        .icon-1 {
          top: 15%;
          left: 10%;
          animation: float 7s infinite;
        }
        .icon-2 {
          top: 60%;
          left: 15%;
          animation: float-reverse 8s infinite;
        }
        .icon-3 {
          top: 20%;
          right: 12%;
          animation: float 9s infinite;
        }
        .icon-4 {
          bottom: 15%;
          right: 15%;
          animation: float-reverse 7.5s infinite;
        }
        .icon-5 {
          top: 40%;
          left: 25%;
          animation: float 8.5s infinite;
        }
        .icon-6 {
          bottom: 25%;
          left: 30%;
          animation: float-reverse 6.5s infinite;
        }
        .icon-7 {
          top: 70%;
          right: 25%;
          animation: float 7.2s infinite;
        }
        .icon-8 {
          bottom: 40%;
          right: 30%;
          animation: float-reverse 8.8s infinite;
        }

        .ecg-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          opacity: 0.3;
        }

        .ecg-line svg {
          width: 100%;
          height: 100%;
        }

        .ecg-line path {
          animation: ecg-draw 2s ease-out forwards;
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: pulse-ring 3s infinite;
        }

        .pulse-ring.delay {
          animation-delay: 1.5s;
        }

        .hero-content {
          max-width: 900px;
          z-index: 2;
          animation: gentle-pulse 4s infinite;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .highlight {
          background: linear-gradient(135deg, #ffe194, #ffb3c6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        /* CONTAINER */
        .container {
          max-width: 1000px;
          margin: auto;
          padding: 80px 20px;
          color: #1e293b;
        }

        /* Paragraph blocks */
        .paragraph-block {
          margin-bottom: 60px;
          position: relative;
          transition: all 0.3s ease;
        }

        .paragraph-block p {
          font-size: 18px;
          line-height: 1.9;
          background: white;
          padding: 30px 35px;
          border-radius: 30px;
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.1);
          border-left: 6px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0; /* hidden until animation */
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .paragraph-block:nth-child(1) p { animation-delay: 0.2s; }
        .paragraph-block:nth-child(2) p { animation-delay: 0.4s; }
        .paragraph-block:nth-child(3) p { animation-delay: 0.6s; }
        .paragraph-block:nth-child(4) p { animation-delay: 0.8s; }
        .paragraph-block:nth-child(5) p { animation-delay: 1s; }

        .paragraph-block p:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 30px 50px -20px rgba(13, 148, 136, 0.4);
          border-left: 6px solid #0d9488;
          background: linear-gradient(to right, #ffffff, #f0fdfa);
        }

        /* Optional: Add a subtle gradient line on left as decoration */
        .paragraph-block::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 20px;
          bottom: 20px;
          width: 4px;
          background: linear-gradient(180deg, #0d9488, #2dd4bf, #a7f3d0);
          border-radius: 4px;
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        .paragraph-block:hover::before {
          opacity: 1;
        }

        /* METRICS */
        .metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 80px;
        }

        .metric-card {
          background: white;
          padding: 30px 20px;
          border-radius: 24px;
          box-shadow: 0 20px 35px -8px rgba(13, 148, 136, 0.15);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 45px -12px rgba(13, 148, 136, 0.3);
        }

        .metric-card div {
          font-size: 42px;
          font-weight: 800;
          color: #0d9488;
          line-height: 1.2;
        }

        .metric-card span {
          display: block;
          font-size: 15px;
          color: #475569;
          margin-top: 10px;
          font-weight: 500;
        }

        /* CTA */
        .cta {
          text-align: center;
          margin-top: 100px;
          background: linear-gradient(135deg, #f0f9ff, #f1f5f9);
          padding: 60px 40px;
          border-radius: 40px;
        }

        .cta h2 {
          font-size: 32px;
          color: #0f172a;
          margin-bottom: 20px;
        }

        button {
          background: #0d9488;
          color: white;
          border: none;
          padding: 16px 48px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 60px;
          cursor: pointer;
          box-shadow: 0 10px 20px -5px rgba(13, 148, 136, 0.4);
          transition: all 0.3s;
        }

        button:hover {
          background: #0b7c72;
          transform: translateY(-3px);
          box-shadow: 0 20px 25px -5px rgba(13, 148, 136, 0.5);
        }

        @media (max-width: 768px) {
          .metrics {
            grid-template-columns: repeat(2, 1fr);
          }
          .cta h2 {
            font-size: 24px;
          }
          .icon {
            font-size: 1.8rem;
          }
          .paragraph-block p {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 100px 20px;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}