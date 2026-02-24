import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap, Award, Globe, MessageSquare } from 'lucide-react';

export default function AboutUs() {
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
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        color: "white",
        padding: "120px 6%",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none"
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none"
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
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
              Our Story
            </span>
            <h1 style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: "800",
              marginBottom: "24px",
              lineHeight: "1.1",
              letterSpacing: "-1px"
            }}>
              Engineering transformation <br />
              <span style={{ background: "linear-gradient(to right, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>for global enterprises</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#cbd5e1", maxWidth: "750px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
              Galacticos Network enables organizations to accelerate business outcomes
through deep expertise in SAP, cloud, data, AI, and strategic talent deployment.
Our global delivery model ensures speed, scalability, and measurable value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: "100px 6%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ flex: "1 1 500px", position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
              borderRadius: "32px",
              padding: "40px",
              border: "1px solid white",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
            }}>
              <svg viewBox="0 0 200 200" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <motion.circle
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  cx="100" cy="100" r="80" fill="none" stroke="url(#globeGrad)" strokeWidth="1" strokeDasharray="10 5"
                />
                <motion.circle
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  cx="100" cy="100" r="60" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="20 10" opacity="0.5"
                />
                <motion.path
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  d="M 100 40 L 115 85 L 160 100 L 115 115 L 100 160 L 85 115 L 40 100 L 85 85 Z"
                  fill="url(#globeGrad)"
                />
              </svg>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "white",
                padding: "16px 24px",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #f1f5f9"
              }}
            >
              <div style={{ background: "#e0e7ff", padding: "10px", borderRadius: "10px" }}><Award size={24} color="#4f46e5" /></div>
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>Global Delivery</h4>
                <p style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "20px", letterSpacing: "-1px" }}>Our Delivery Model</h2>
            <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "24px", lineHeight: "1.7" }}>
              We help enterprises modernize core platforms, scale global capability centers, and accelerate digital transformation through an outcome-driven delivery approach.
            </p>
            <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "32px", lineHeight: "1.7" }}>
              By combining a curated global talent network with deep technology expertise, we ensure rapid execution, seamless integration, and long-term business value for our clients.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Target size={24} color="#4f46e5" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Precision</h4>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.5" }}>Data-driven methodologies ensuring flawless execution.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Rocket size={24} color="#4f46e5" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Innovation</h4>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.5" }}>Pioneering solutions with bleeding-edge technologies.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "100px 6%", background: "white", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "16px", letterSpacing: "-1px" }}>The Galacticos DNA</h2>
            <p style={{ fontSize: "18px", color: "#64748b", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
              These core principles guide our every interaction, commit us to excellence, and ensure we consistently deliver transformative outcomes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}
          >
            {[
              { title: "Client Centricity", desc: "We align our delivery model to your business goals, ensuring measurable outcomes and long-term partnership value.", icon: <Users size={28} color="#4f46e5" /> },
              { title: "Global Perspective", desc: "Our distributed delivery model enables 24/7 execution, access to niche skills, and scalable transformation programs.", icon: <Globe size={28} color="#8b5cf6" /> },
              { title: "Agile Execution", desc: "We combine speed, governance, and quality to accelerate transformation without operational disruption.", icon: <Zap size={28} color="#0ea5e9" /> }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                style={{
                  background: "#f8fafc",
                  padding: "40px 32px",
                  borderRadius: "24px",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{
                  background: "white",
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginBottom: "12px" }}>{value.title}</h3>
                <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "16px" }}>{value.desc}</p>
              </motion.div>
            ))}
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
            background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
            borderRadius: "32px",
            padding: "80px 40px",
            textAlign: "center",
            color: "white",
            maxWidth: "1100px",
            margin: "0 auto",
            boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative rings */}
          <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "500px", height: "500px", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: "-50%", left: "-10%", width: "600px", height: "600px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "800", marginBottom: "24px", letterSpacing: "-1px" }}>Let's Build the Future Together</h2>
            <p style={{ fontSize: "20px", color: "#bfdbfe", maxWidth: "600px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
              Whether you're looking to modernize legacy systems, migrate to the cloud, or innovate with AI, our experts are ready to assist.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              style={{ background: "white", color: "#1e40af", border: "none", padding: "18px 40px", borderRadius: "16px", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "10px" }}
            >
              <MessageSquare size={20} /> Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}