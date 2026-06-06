"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// =========================================
// ICONS
// =========================================

const IconCheck = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconWallet = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
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

const IconSliders = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M7 12h10" />
    <path d="M10 18h4" />
  </svg>
);

const IconTrendingUp = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconShield = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconFileText = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const IconBriefcase = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconCalculator = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="14" />
    <path d="m8 18 2 2 2-2" />
    <path d="m8 14 2-2 2 2" />
  </svg>
);

const IconArrowRight = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
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

const FinancePage: React.FC = () => {
  const benefits = [
    { icon: <IconWallet className="uka-icon uka-icon--md" />, title: "Budget-friendly payments", desc: "Pay monthly instead of waiting years to save" },
    { icon: <IconCar className="uka-icon uka-icon--md" />, title: "Quality Japanese imports", desc: "Access to premium used vehicles from Japan" },
    { icon: <IconSliders className="uka-icon uka-icon--md" />, title: "Financial flexibility", desc: "Tailored plans customized to your budget" },
    { icon: <IconTrendingUp className="uka-icon uka-icon--md" />, title: "Build credit history", desc: "Regular payments improve your credit score" },
    { icon: <IconShield className="uka-icon uka-icon--md" />, title: "Warranty + insurance", desc: "Combined coverage for great value" },
  ];

  const documents = [
    { icon: <IconFileText className="uka-icon uka-icon--md" />, title: "Proof of Income", desc: "Recent payslips or bank statements" },
    { icon: <IconBriefcase className="uka-icon uka-icon--md" />, title: "Employment Status", desc: "Current employer details" },
    { icon: <IconTrendingUp className="uka-icon uka-icon--md" />, title: "Credit History", desc: "Previous loan repayment record" },
  ];

  const steps = [
    {
      number: "01",
      title: "Quick Finance Enquiry",
      desc: "Provide your name, contact number, email, and the used car finance amount you're looking for. This helps us quickly understand your needs.",
      action: "Apply Now",
      icon: <IconArrowRight className="uka-icon uka-icon--sm" />,
    },
    {
      number: "02",
      title: "Detailed Application",
      desc: "Fill out the full used car finance application, including your income, employment details, and any additional information for accurate assessment.",
      action: "Apply Now",
      icon: <IconArrowRight className="uka-icon uka-icon--sm" />,
    },
    {
      number: "03",
      title: "Finance Calculator",
      desc: "Use our simple repayment calculator to estimate your weekly, fortnightly, or monthly repayments with ease, accuracy, and complete confidence.",
      action: "Calculate",
      icon: <IconCalculator className="uka-icon uka-icon--sm" />,
    },
  ];

  return (
    <main className="uka-finance">
      {/* =========================================
          HERO
          ========================================= */}
      <section style={{ background: "#0F0F1B", padding: "140px 0 100px" }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32, padding: "10px 20px", background: "rgba(245, 184, 24, 0.08)", borderRadius: 10, border: "1px solid rgba(245, 184, 24, 0.2)" }}>
              <IconWallet style={{ width: 18, height: 18, color: "#F5B818" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 1.5 }}>Financing Made Simple</span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, textTransform: "uppercase", marginBottom: 28, letterSpacing: -2 }}>
              Apply For <span style={{ color: "#F5B818" }}>Finance</span>
            </h1>

            <p style={{ fontSize: 18, color: "#A1A1AA", lineHeight: 1.8, maxWidth: 640, marginBottom: 36 }}>
              Quick approvals, competitive interest rates, and tailored plans to suit your budget. 
              We advocate for you to secure the lowest rates possible for used car finance.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="#apply" className="thm-btn" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "#F5B818", color: "#0F0F1B", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 8 }}>
                Apply Now
                <span className="fas fa-arrow-right"></span>
              </Link>
              <Link href="#calculator" className="thm-btn" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "transparent", color: "#FFFFFF", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)" }}>
                <IconCalculator style={{ width: 18, height: 18 }} />
                Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          BENEFITS + DOCUMENTS (2 column)
          ========================================= */}
      <section style={{ background: "#F5F0E6", padding: "100px 0" }}>
        <div className="container">
          <div className="row g-5">
            {/* Left — Why Choose Us */}
            <div className="col-xl-7">
              <FadeIn direction="left">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Why Finance With Us</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "#0F0F1B", marginBottom: 20, textTransform: "uppercase", lineHeight: 1.2 }}>
                  Why Choose Used Car<br />Financing With Us?
                </h2>
                <p style={{ fontSize: 17, color: "#555", lineHeight: 1.8, marginBottom: 36 }}>
                  Used car finance options make it easier to buy your dream car sooner. 
                  Pay monthly instead of saving for years.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 18,
                        padding: "20px 24px",
                        background: "#FFFFFF",
                        borderRadius: 14,
                        border: "1px solid #E8E4DB",
                      }}
                    >
                      <div style={{ width: 48, height: 48, background: "rgba(245, 184, 24, 0.08)", borderRadius: 12, color: "#F5B818", border: "1px solid rgba(245, 184, 24, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {b.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, color: "#0F0F1B", margin: 0 }}>{b.title}</h4>
                        <p style={{ fontSize: 14, color: "#777", margin: "4px 0 0", lineHeight: 1.5 }}>{b.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — Documents Required */}
            <div className="col-xl-5">
              <FadeIn direction="right" delay={0.2}>
                <div style={{ background: "#0F0F1B", borderRadius: 24, padding: 44, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: 200, height: 200, background: "radial-gradient(circle, rgba(245,184,24,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Required</span>
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", marginBottom: 28, textTransform: "uppercase", lineHeight: 1.2 }}>
                    Documents Required
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {documents.map((d, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                        <div style={{ width: 44, height: 44, background: "rgba(245, 184, 24, 0.1)", borderRadius: 12, color: "#F5B818", border: "1px solid rgba(245, 184, 24, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {d.icon}
                        </div>
                        <div>
                          <h4 style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", margin: "0 0 4px" }}>{d.title}</h4>
                          <p style={{ fontSize: 14, color: "#8B8FA3", margin: 0, lineHeight: 1.5 }}>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <p style={{ fontSize: 13, color: "#6B6B7F", lineHeight: 1.6, margin: 0 }}>
                      Requirements vary by lender. Contact us for specific documentation needed for your application.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3 STEPS
          ========================================= */}
      <section id="apply" style={{ background: "#FFFFFF", padding: "100px 0" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>How It Works</span>
                <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "#0F0F1B", textTransform: "uppercase", lineHeight: 1.2, margin: 0 }}>
                Apply For Finance In 3 Steps
              </h2>
            </div>
          </FadeIn>

          <div className="row g-4">
            {steps.map((step, i) => (
              <div className="col-xl-4 col-md-4" key={i}>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    background: "#FAFAF8",
                    borderRadius: 20,
                    padding: "40px 32px",
                    border: "1px solid #F0EDE6",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F5B818"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#F0EDE6"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#F5B818", textTransform: "uppercase", letterSpacing: 1.5 }}>Step {step.number}</span>
                    <div style={{ width: 40, height: 40, background: "rgba(245, 184, 24, 0.08)", borderRadius: 10, color: "#F5B818", border: "1px solid rgba(245, 184, 24, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0F0F1B", marginBottom: 12, lineHeight: 1.3 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, margin: "0 0 24px" }}>{step.desc}</p>

                  <Link href="#" className="thm-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#F5B818", color: "#0F0F1B", fontSize: 14, fontWeight: 600, textDecoration: "none", borderRadius: 8 }}>
                    {step.action}
                    <IconArrowRight style={{ width: 16, height: 16 }} />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <section style={{ background: "#0F0F1B", padding: "80px 0", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", marginBottom: 16, letterSpacing: -0.5 }}>
            Ready To <span style={{ color: "#F5B818" }}>Get Started?</span>
          </h2>
          <p style={{ fontSize: 17, color: "#8B8FA3", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Apply now and get pre-approved for your dream car today. 
            Our team will guide you every step of the way.
          </p>
          <Link href="#apply" className="thm-btn" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "#F5B818", color: "#0F0F1B", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 8 }}>
            Start Application
            <span className="fas fa-arrow-right"></span>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
};

export default FinancePage;