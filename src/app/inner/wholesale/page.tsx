"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// =========================================
// SVG ICONS
// =========================================

const IconCheck = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconCar = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M2 12h12" />
  </svg>
);

const IconFile = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconGauge = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4" />
    <path d="m16.2 7.8 2.9-2.9" />
    <path d="M18 12h4" />
    <path d="m16.2 16.2 2.9 2.9" />
    <path d="M12 18v4" />
    <path d="m4.9 19.1 2.9-2.9" />
    <path d="M2 12h4" />
    <path d="m4.9 4.9 2.9 2.9" />
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12 7.5 16.5" />
  </svg>
);

const IconAward = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const IconWallet = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

// =========================================
// ANIMATION
// =========================================

const FadeIn = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) => {
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 50 : 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay } },
  };
  return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={variants}>{children}</motion.div>;
};

// =========================================
// MAIN PAGE
// =========================================

const WholesalePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    dealership: "", legalEntity: "", lcmt: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const features = [
    { icon: <IconCar className="uka-icon uka-icon--md" />, title: "High Quality Japanese Imports", desc: "Premium vehicles sourced directly from Japan" },
    { icon: <IconWallet className="uka-icon uka-icon--md" />, title: "Custom Financing", desc: "Easy and flexible financing options tailored" },
    { icon: <IconGauge className="uka-icon uka-icon--md" />, title: "Auction Sheet Verified", desc: "Japanese auction sheet for odometer accuracy" },
    { icon: <IconFile className="uka-icon uka-icon--md" />, title: "Export Certificate", desc: "Complete documentation and export certificates" },
    { icon: <IconAward className="uka-icon uka-icon--md" />, title: "Industry Leader", desc: "25+ years of wholesale experience in Australia" },
  ];

  return (
    <main className="uka-wholesale">
      {/* =========================================
          HERO
          ========================================= */}
      <section style={{ background: "#0F0F1B", padding: "140px 0 100px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <FadeIn direction="left">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32, padding: "10px 20px", background: "rgba(245, 184, 24, 0.08)", borderRadius: 10, border: "1px solid rgba(245, 184, 24, 0.2)" }}>
                  <IconAward style={{ width: 18, height: 18, color: "#F5B818" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 1.5 }}>Wholesale Division</span>
                </div>

                <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, textTransform: "uppercase", marginBottom: 28, letterSpacing: -2 }}>
                  Wholesale <span style={{ color: "#F5B818" }}>Used Cars</span>
                </h1>

                <p style={{ fontSize: 18, color: "#A1A1AA", lineHeight: 1.8, maxWidth: 540, marginBottom: 36 }}>
                  Buy wholesale Japanese used cars in Melbourne at competitive prices. 
                  Over 25 years of experience in importing quality vehicles to Australia.
                </p>

               <Link 
  href="#enquiry" 
  className="thm-btn"
  style={{ 
    position: "relative", 
    display: "inline-flex", 
    alignItems: "center", 
    gap: 10, 
    padding: "16px 36px", 
    background: "#F5B818", 
    color: "#0F0F1B", 
    fontSize: 15, 
    fontWeight: 600, 
    textDecoration: "none", 
    borderRadius: 8,
    transition: "all 0.3s ease",
    zIndex: 1,
    overflow: "hidden",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#0F0F1B";
    e.currentTarget.style.color = "#FFFFFF";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#F5B818";
    e.currentTarget.style.color = "#0F0F1B";
    e.currentTarget.style.borderColor = "transparent";
  }}
>
  Register Interest
  <span className="fas fa-arrow-right" style={{ transition: "transform 0.3s ease" }}></span>
</Link>
              </FadeIn>
            </div>

            <div className="col-xl-5 d-none d-lg-block">
              <FadeIn direction="right" delay={0.3}>
                <div style={{ background: "linear-gradient(135deg, rgba(245,184,24,0.05) 0%, rgba(255,255,255,0.02) 100%)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.06)", height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 80, fontWeight: 800, color: "#F5B818", lineHeight: 1, marginBottom: 12 }}>25+</div>
                    <div style={{ fontSize: 16, color: "#A1A1AA", textTransform: "uppercase", letterSpacing: 2 }}>Years Experience</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FORM + WHY CHOOSE US (2 column)
          ========================================= */}
      <section id="enquiry" style={{ background: "#F5F0E6", padding: "100px 0" }}>
        <div className="container">
          <div className="row g-5">
            {/* Left — Form */}
            <div className="col-xl-5">
              <FadeIn direction="left">
                <div style={{ background: "#FFFFFF", borderRadius: 24, padding: 48, border: "1px solid #E8E4DB", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Get Started</span>
                  </div>
                  <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F0F1B", marginBottom: 32, textTransform: "uppercase", lineHeight: 1.2 }}>Wholesale Enquiry</h2>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {[
                      { name: "firstName", label: "First Name", required: true },
                      { name: "lastName", label: "Last Name", required: true },
                      { name: "phone", label: "Phone", type: "tel", required: true },
                      { name: "email", label: "Email", type: "email", required: true },
                      { name: "dealership", label: "Dealership Name", required: true },
                      { name: "legalEntity", label: "Legal Entity Name" },
                      { name: "lcmt", label: "LCMT Number" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F0F1B", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
                          {field.label}
                          {field.required && <span style={{ color: "#F5B818" }}>*</span>}
                        </label>
                        <input
                          type={field.type || "text"}
                          required={field.required}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: 10,
                            border: "1px solid #E5E0D5",
                            fontSize: 15,
                            color: "#0F0F1B",
                            background: "#FAFAFA",
                            outline: "none",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#F5B818"; e.currentTarget.style.background = "#FFFFFF"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E0D5"; e.currentTarget.style.background = "#FAFAFA"; }}
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F0F1B", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Your Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          borderRadius: 10,
                          border: "1px solid #E5E0D5",
                          fontSize: 15,
                          color: "#0F0F1B",
                          background: "#FAFAFA",
                          outline: "none",
                          resize: "vertical",
                          transition: "all 0.3s ease",
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#F5B818"; e.currentTarget.style.background = "#FFFFFF"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E0D5"; e.currentTarget.style.background = "#FAFAFA"; }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="thm-btn"
                      style={{
                        width: "100%",
                        padding: "18px",
                        background: "#F5B818",
                        color: "#0F0F1B",
                        fontSize: 15,
                        fontWeight: 700,
                        border: "none",
                        borderRadius: 10,
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginTop: 8,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#0F0F1B"; e.currentTarget.style.color = "#FFFFFF"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#F5B818"; e.currentTarget.style.color = "#0F0F1B"; }}
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Right — Why Choose Us */}
            <div className="col-xl-7 ps-xl-5">
              <FadeIn direction="right" delay={0.2}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Why Us</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "#0F0F1B", marginBottom: 20, textTransform: "uppercase", lineHeight: 1.2 }}>
                  Why Choose Us for<br />Wholesale Used Cars?
                </h2>
                <p style={{ fontSize: 17, color: "#555", lineHeight: 1.8, marginBottom: 40 }}>
                  A lot of dealers charge hidden fees and provide compromised quality. 
                  We keep transparent prices and communication so you can confirm 
                  the quality and price of every Japanese import.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 20,
                        padding: "24px 28px",
                        background: "#FFFFFF",
                        borderRadius: 16,
                        border: "1px solid #E8E4DB",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F5B818"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8E4DB"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div style={{
                        width: 52,
                        height: 52,
                        background: "rgba(245, 184, 24, 0.08)",
                        borderRadius: 14,
                        color: "#F5B818",
                        border: "1px solid rgba(245, 184, 24, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        {f.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 17, fontWeight: 600, color: "#0F0F1B", marginBottom: 6, marginTop: 0 }}>{f.title}</h4>
                        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <section style={{ background: "#0F0F1B", padding: "80px 0", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", marginBottom: 16, letterSpacing: -0.5 }}>
            Register <span style={{ color: "#F5B818" }}>Now!</span>
          </h2>
          <p style={{ fontSize: 17, color: "#8B8FA3", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Have exclusive access to wholesale used car sales in Melbourne. 
            Join our network of trusted dealers.
          </p>
      <Link 
  href="#enquiry" 
  style={{ 
    position: "relative",
    display: "inline-flex", 
    alignItems: "center", 
    gap: 10, 
    padding: "16px 36px", 
    background: "#F5B818", 
    color: "#0F0F1B", 
    fontSize: 15, 
    fontWeight: 600, 
    textDecoration: "none", 
    borderRadius: 8,
    border: "2px solid #F5B818",
    overflow: "hidden",
    transition: "all 0.4s ease",
    zIndex: 1,
  }}
  onMouseEnter={(e) => {
    const target = e.currentTarget;
    target.style.background = "#0F0F1B";
    target.style.color = "#F5B818";
    target.style.borderColor = "#F5B818";
  }}
  onMouseLeave={(e) => {
    const target = e.currentTarget;
    target.style.background = "#F5B818";
    target.style.color = "#0F0F1B";
    target.style.borderColor = "#F5B818";
  }}
>
  Get Started
  <span className="fas fa-arrow-right" style={{ transition: "transform 0.3s ease" }}></span>
</Link>
        </FadeIn>
      </section>
    </main>
  );
};

export default WholesalePage;