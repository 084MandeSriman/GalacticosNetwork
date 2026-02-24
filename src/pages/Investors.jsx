import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Target, Shield, Zap, ChevronRight, ArrowRight } from 'lucide-react';

export default function Investors() {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #020617 0%, #1e1b4b 100%)",
        color: "white",
        padding: "120px 6%",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Background SVG */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: "-30%", right: "-10%", opacity: 0.15, pointerEvents: "none" }}
        >
          <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6366f1" d="M45.7,-76.3C58.9,-69.3,69.5,-55.5,77.5,-40.5C85.5,-25.5,91,-9.3,88.7,6.1C86.4,21.5,76.3,36.1,65.2,49.1C54.1,62.1,42.1,73.5,27.5,80.4C12.9,87.2,-4.3,89.5,-20.5,85.6C-36.8,81.7,-52.1,71.6,-63.9,58.7C-75.7,45.8,-84,30.1,-87.3,13.6C-90.5,-2.9,-88.7,-20.2,-80.6,-34.5C-72.5,-48.8,-58.1,-60.1,-43.5,-66.6C-28.9,-73.1,-14.4,-74.8,1.4,-77.1C17.3,-79.4,34.6,-82.3,45.7,-76.3Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#a5b4fc",
              marginBottom: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>
              Investor Relations
            </span>
            <h1 style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: "800",
              marginBottom: "24px",
              lineHeight: "1.1",
              letterSpacing: "-1px"
            }}>
              Invest in the Future of <br />
              <span style={{ background: "linear-gradient(to right, #4f46e5, #a5b4fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Enterprise Innovation</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#cbd5e1", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
              Galacticos Network partners with global enterprises to deliver SAP transformation, cloud modernization, and data-driven innovation. We are building a high-growth, future-ready digital services organization with strong long-term value creation.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section style={{ padding: "0 6%", marginTop: "-60px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}
          >
            {[
              { label: "Enterprise Clients Served", value: "150+", icon: <TrendingUp size={24} color="#6366f1" /> },
              { label: "Global Delivery Locations", value: "3+", icon: <Globe size={24} color="#6366f1" /> },
              { label: "Consultants & Experts", value: "500+", icon: <Users size={24} color="#6366f1" /> },
              { label: "Customer Retention", value: "95%+", icon: <Zap size={24} color="#6366f1" /> }
            ].map((metric, idx) => (
              <motion.div key={idx} variants={fadeIn} style={{
                background: "white",
                padding: "32px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}>
                <div style={{ background: "#e0e7ff", padding: "12px", borderRadius: "14px", marginBottom: "20px" }}>
                  {metric.icon}
                </div>
                <h3 style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", marginBottom: "8px", letterSpacing: "-1px" }}>{metric.value}</h3>
                <p style={{ color: "#64748b", fontWeight: "500", fontSize: "15px" }}>{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section style={{ padding: "100px 6%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "16px", letterSpacing: "-1px" }}>Why Invest in Galacticos?</h2>
            <p style={{ fontSize: "18px", color: "#64748b", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
              We are strategically positioned at the intersection of enterprise resource planning, artificial intelligence integration, and high-performance cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}
          >
            {[
              {
                title: "Market Leadership",
                desc: "A trusted partner for SAP S/4HANA, cloud, and data transformation programs, delivering measurable outcomes for global enterprises.",
                icon: <Target size={32} color="#fff" />,
                gradient: "linear-gradient(135deg, #4f46e5 0%, #312e81 100%)"
              },
              {
                title: "Robust Revenue Model",
                desc: "Sustainable growth driven by long-term client engagements, strategic transformation programs, and managed services partnerships.",
                icon: <Shield size={32} color="#fff" />,
                gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)"
              },
              {
                title: "Unmatched Talent Pool",
                desc: "A rapidly growing team of certified consultants across global delivery locations, enabling scalable and high-quality program execution.",
                icon: <Users size={32} color="#fff" />,
                gradient: "linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                style={{
                  background: "white",
                  padding: "40px 32px",
                  borderRadius: "24px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(226, 232, 240, 0.6)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{
                  background: item.gradient,
                  width: "68px",
                  height: "68px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>{item.title}</h3>
                <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "16px" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Governance & Stock Info */}
      <section style={{ padding: "80px 6%", background: "white", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: "800", color: "#0f172a", marginBottom: "24px", letterSpacing: "-1px" }}>Commitment to Transparency & Growth</h2>
            <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "32px", lineHeight: "1.7" }}>
              At Galacticos Network, we uphold the highest standards of corporate governance. We believe that transparent operations build continuous trust and drive long-term shareholder value.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Leadership & Governance Framework", "Financial Performance Overview", "Strategic Growth Roadmap", "Risk & Compliance Practices"].map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", color: "#334155", fontWeight: "600", fontSize: "16px", cursor: "pointer" }}>
                  <div style={{ background: "#f1f5f9", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ChevronRight size={18} color="#4f46e5" />
                  </div>
                  <span style={{ transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "#4f46e5"} onMouseOut={(e) => e.target.style.color = "#334155"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ flex: "1 1 400px", background: "#f8fafc", padding: "40px", borderRadius: "32px", border: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
            <svg width="100%" height="200" viewBox="0 0 400 200" style={{ overflow: "visible" }}>
              {/* Decorative animated chart */}
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                viewport={{ once: true }}
                d="M 0,160 C 50,160 100,70 150,90 C 200,110 250,40 300,60 C 350,80 380,20 400,10"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                viewport={{ once: true }}
                d="M 0,160 C 50,160 100,70 150,90 C 200,110 250,40 300,60 C 350,80 380,20 400,10 L 400,200 L 0,200 Z"
                fill="url(#chartGradient)"
              />
              <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.1 }} viewport={{ once: true }} cx="400" cy="10" r="6" fill="#4f46e5" stroke="white" strokeWidth="2" />
              <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }} cx="150" cy="90" r="5" fill="#4f46e5" stroke="white" strokeWidth="2" />
              <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.6 }} viewport={{ once: true }} cx="300" cy="60" r="5" fill="#4f46e5" stroke="white" strokeWidth="2" />
            </svg>
            <div style={{ marginTop: "40px", textAlign: "center", position: "relative", zIndex: 2 }}>
              <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#64748b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Investment Highlights</h4>
              <p style={{ fontSize: "48px", fontWeight: "800", color: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", letterSpacing: "-1px" }}>
                 <span style={{ color: "#10b981", display: "flex", alignItems: "center" }}><TrendingUp size={32} /></span>
              </p>
              <p style={{ color: "#10b981", fontSize: "16px", fontWeight: "600", marginTop: "8px", background: "rgba(16, 185, 129, 0.1)", display: "inline-block", padding: "4px 12px", borderRadius: "20px" }}>High-growth digital transformation market  
Strong enterprise client portfolio  
Scalable global delivery model  
Experienced leadership team</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep CTA Section */}
      <section style={{ padding: "100px 6%" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)",
            borderRadius: "32px",
            padding: "80px 40px",
            textAlign: "center",
            color: "white",
            maxWidth: "1100px",
            margin: "0 auto",
            boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative rings */}
          <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "500px", height: "500px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: "-50%", right: "-10%", width: "600px", height: "600px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "800", marginBottom: "24px", letterSpacing: "-1px" }}>Ready to partner with us?</h2>
            <p style={{ fontSize: "20px", color: "#c7d2fe", maxWidth: "600px", margin: "0 auto 48px auto", lineHeight: "1.6" }}>
             Connect with our leadership team to explore strategic partnerships and long-term investment opportunities in our high-growth digital transformation journey.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              style={{ background: "white", color: "#4f46e5", border: "none", padding: "20px 48px", borderRadius: "16px", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
            >
              Contact Investor Relations
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}