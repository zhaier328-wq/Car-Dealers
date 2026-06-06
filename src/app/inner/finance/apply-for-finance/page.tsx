"use client";
import TestimonianInner from '@/sections/about/TestimonianInner';
import WhychooseOne from '@/sections/home-one/WhychooseOne';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// =========================================
// ICONS
// =========================================
const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconCar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M2 12h12" />
  </svg>
);

const IconWallet = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconCalculator = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="14" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconAward = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

// =========================================
// ANIMATION
// =========================================
const FadeIn = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) => {
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? -40 : direction === "right" ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay } },
  };
  return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={variants}>{children}</motion.div>;
};

// =========================================
// CALCULATOR LOGIC
// =========================================
const calculateRepayment = (loanAmount: number, interestRate: number, months: number) => {
  const r = interestRate / 100 / 12;
  const n = months;
  if (r === 0) return { monthly: loanAmount / n, weekly: (loanAmount / n) * 12 / 52 };
  const monthlyPayment = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const weeklyPayment = monthlyPayment * 12 / 52;
  return { monthly: monthlyPayment, weekly: weeklyPayment };
};

// =========================================
// MAIN PAGE
// =========================================
const FinancePage: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(57383);
  const [interestRate, setInterestRate] = useState(2.5);
  const [loanTerm, setLoanTerm] = useState(84);
  const [repayment, setRepayment] = useState({ monthly: 745.36, weekly: 171.88 });

  const terms = [12, 24, 36, 48, 60, 72, 84];

  useEffect(() => {
    const result = calculateRepayment(loanAmount, interestRate, loanTerm);
    setRepayment({ monthly: result.monthly, weekly: result.weekly });
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <main className="uka-finance-page">
      {/* =========================================
          HERO — Redesigned with trust bar & visual balance
          ========================================= */}
      <section style={{ 
        background: "linear-gradient(135deg, #0a0a14 0%, #12121f 50%, #0a0a14 100%)", 
        padding: "140px 0 100px", 
        position: "relative", 
        overflow: "hidden" 
      }}>
        {/* Background glows */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(245,184,24,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(245,184,24,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-7">
              <FadeIn direction="left">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, padding: "8px 16px", background: "rgba(245,184,24,0.08)", borderRadius: 50, border: "1px solid rgba(245,184,24,0.2)" }}>
                  <IconAward />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Melbourne's #1 JDM Dealer</span>
                </div>

                <h1 style={{ 
                  fontSize: "clamp(38px, 5vw, 64px)", 
                  fontWeight: 800, 
                  color: "#FFFFFF", 
                  lineHeight: 1.05, 
                  textTransform: "uppercase", 
                  marginBottom: 24, 
                  letterSpacing: -2 
                }}>
                  Drive Your Dream<br />
                  <span style={{ color: "#F5B818" }}>Japanese Import</span>
                </h1>

                <p style={{ 
                  fontSize: 17, 
                  color: "#9ca3af", 
                  lineHeight: 1.8, 
                  maxWidth: 540, 
                  marginBottom: 32 
                }}>
                  Over 25 years importing high-quality JDM cars directly from Japan. No middlemen. Competitive prices. Full transparency with every vehicle.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48 }}>
                  <Link href="#calculator" style={{ 
                    display: "inline-flex", alignItems: "center", gap: 10, 
                    padding: "16px 32px", 
                    background: "#F5B818", 
                    color: "#0a0a14", 
                    fontSize: 14, 
                    fontWeight: 700, 
                    textDecoration: "none", 
                    borderRadius: 10,
                    boxShadow: "0 10px 30px rgba(245,184,24,0.25)"
                  }}>
                    <IconCalculator />
                    Finance Calculator
                  </Link>
                  <Link href="#about" style={{ 
                    display: "inline-flex", alignItems: "center", gap: 10, 
                    padding: "16px 32px", 
                    background: "transparent", 
                    color: "#FFFFFF", 
                    fontSize: 14, 
                    fontWeight: 600, 
                    textDecoration: "none", 
                    borderRadius: 10, 
                    border: "1px solid rgba(255,255,255,0.15)" 
                  }}>
                    Learn More
                  </Link>
                </div>

                {/* Trust Bar */}
                <div style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  gap: 32, 
                  padding: "20px 0", 
                  borderTop: "1px solid rgba(255,255,255,0.08)" 
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,184,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5B818" }}>
                      <IconStar />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>5.0 Rating</div>
                      <div style={{ fontSize: 12, color: "#6b7280" }}>172 Google Reviews</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,184,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5B818" }}>
                      <IconUsers />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>25+ Years</div>
                      <div style={{ fontSize: 12, color: "#6b7280" }}>Industry Experience</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,184,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5B818" }}>
                      <IconCar />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>Direct Import</div>
                      <div style={{ fontSize: 12, color: "#6b7280" }}>No Third Parties</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual */}
            <div className="col-lg-5 d-none d-lg-block">
              <FadeIn direction="right" delay={0.2}>
                <div style={{ position: "relative" }}>
                  {/* Main card */}
                  <div style={{ 
                    background: "linear-gradient(135deg, rgba(245,184,24,0.08) 0%, rgba(255,255,255,0.02) 100%)", 
                    borderRadius: 24, 
                    border: "1px solid rgba(255,255,255,0.08)", 
                    padding: 40,
                    backdropFilter: "blur(10px)",
                    position: "relative",
                    zIndex: 2
                  }}>
                    <div style={{ 
                      height: 280, 
                      background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1b 100%)", 
                      borderRadius: 16, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.05)",
                      marginBottom: 20
                    }}>
                      <IconCar />
                      <span style={{ marginLeft: 12, color: "#6b7280", fontSize: 16, fontWeight: 500 }}>Featured Vehicle</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", marginBottom: 4 }}>Toyota Crown</div>
                        <div style={{ fontSize: 13, color: "#6b7280" }}>2015 • 45,000 KM • Grade 4.5</div>
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#F5B818" }}>$28,990</div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div style={{ 
                    position: "absolute", 
                    bottom: -20, 
                    left: -20, 
                    background: "#F5B818", 
                    padding: "16px 24px", 
                    borderRadius: 14, 
                    boxShadow: "0 15px 40px rgba(245,184,24,0.25)",
                    zIndex: 3
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "#0a0a14", lineHeight: 1 }}>$0 Deposit</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#0a0a14", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>Finance Available</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

         {/* =========================================
          ABOUT — Redesigned with premium feature grid
          ========================================= */}
      <section id="about" style={{ background: "#F5F0E6", padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "radial-gradient(circle, rgba(245,184,24,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <FadeIn direction="right">
                <div style={{ position: "relative", padding: "0 0 40px 40px" }}>
                  <div style={{ 
                    background: "linear-gradient(135deg, #E8E4DB 0%, #D4CFC4 100%)", 
                    borderRadius: 24, 
                    height: 480, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.08)"
                  }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ width: 100, height: 100, borderRadius: 24, background: "rgba(245,184,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#B8A882" }}>
                        <IconCar />
                      </div>
                      <div style={{ fontSize: 20, color: "#666", fontWeight: 600 }}>Showroom</div>
                      <div style={{ fontSize: 14, color: "#999", marginTop: 6 }}>Mordialloc / Brisbane</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    background: "#0a0a14", 
                    padding: "24px 32px", 
                    borderRadius: 20, 
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(245,184,24,0.2)"
                  }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: "#F5B818", lineHeight: 1 }}>25+</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", marginTop: 6, textTransform: "uppercase", letterSpacing: 1 }}>Years Experience</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="col-lg-6 order-lg-1">
              <FadeIn direction="left">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 3, background: "#F5B818", borderRadius: 2 }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Why Choose Us</span>
                </div>
                
                <h2 style={{ 
                  fontSize: "clamp(28px, 3.5vw, 42px)", 
                  fontWeight: 800, 
                  color: "#0a0a14", 
                  marginBottom: 28, 
                  textTransform: "uppercase", 
                  lineHeight: 1.1,
                  letterSpacing: -1
                }}>
                  Direct From Japan.<br />No Middlemen.
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A5A", margin: 0 }}>
                    We handle high-volume shipping and Australian compliance in-house. That means <strong style={{ color: "#0a0a14" }}>better prices</strong> and full transparency on every vehicle.
                  </p>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A5A", margin: 0 }}>
                    Whether you're after a budget import under <strong style={{ color: "#0a0a14" }}>$15,000</strong> or a premium vehicle under <strong style={{ color: "#0a0a14" }}>$50,000</strong>, we have the stock and finance options to match.
                  </p>
                </div>

                {/* PREMIUM FEATURE GRID */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
                  {[
                    { 
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, 
                      title: "Export Certificate", 
                      desc: "Full documentation" 
                    },
                    { 
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>, 
                      title: "Auction Sheet", 
                      desc: "Verified condition" 
                    },
                    { 
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, 
                      title: "Trade-in Options", 
                      desc: "Easy upgrades" 
                    },
                    { 
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>, 
                      title: "Flexible Finance", 
                      desc: "$0 deposit" 
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.06)" }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        padding: "20px",
                        background: "#FFFFFF",
                        borderRadius: 16,
                        border: "1px solid #E8E4DB",
                        cursor: "default",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <div style={{ 
                        width: 44, 
                        height: 44, 
                        borderRadius: 12, 
                        background: "linear-gradient(135deg, rgba(245,184,24,0.12) 0%, rgba(245,184,24,0.04) 100%)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        color: "#F5B818",
                        flexShrink: 0,
                        border: "1px solid rgba(245,184,24,0.15)"
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#0a0a14", marginBottom: 4, lineHeight: 1.3 }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: 13, color: "#8B8FA3", fontWeight: 500, lineHeight: 1.4 }}>
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


 <WhychooseOne />
    
            {/* =========================================
          CALCULATOR — Professional Redesign
          ========================================= */}
      <section id="calculator" style={{ 
        background: "linear-gradient(180deg, #0a0a14 0%, #12121f 50%, #0a0a14 100%)", 
        padding: "120px 0", 
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Ambient background glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          background: "radial-gradient(circle, rgba(245,184,24,0.04) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Section Header */}
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20, padding: "8px 20px", background: "rgba(245,184,24,0.08)", borderRadius: 50, border: "1px solid rgba(245,184,24,0.15)" }}>
                <IconCalculator />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Finance Calculator</span>
              </div>
              <h2 style={{ 
                fontSize: "clamp(32px, 4.5vw, 52px)", 
                fontWeight: 800, 
                color: "#FFFFFF", 
                textTransform: "uppercase", 
                lineHeight: 1.1, 
                margin: "0 auto 16px",
                letterSpacing: -1,
                maxWidth: 600
              }}>
                Calculate Your <span style={{ color: "#F5B818" }}>Repayments</span>
              </h2>
              <p style={{ fontSize: 17, color: "#9ca3af", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
                Adjust the sliders below to estimate your weekly and monthly repayments instantly.
              </p>
            </div>
          </FadeIn>

          <div className="row g-4 justify-content-center">
            {/* INPUTS PANEL */}
            <div className="col-xl-5 col-lg-6">
              <FadeIn direction="left">
                <div style={{ 
                  background: "rgba(255,255,255,0.02)", 
                  borderRadius: 28, 
                  border: "1px solid rgba(255,255,255,0.06)", 
                  padding: 44,
                  backdropFilter: "blur(10px)",
                  height: "100%"
                }}>
                  {/* Loan Amount */}
                  <div style={{ marginBottom: 36 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Loan Amount</label>
                      <div style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: 6, 
                        padding: "8px 16px", 
                        background: "rgba(245,184,24,0.1)", 
                        borderRadius: 10, 
                        border: "1px solid rgba(245,184,24,0.2)" 
                      }}>
                        <span style={{ fontSize: 18, fontWeight: 800, color: "#F5B818" }}>${loanAmount.toLocaleString()}</span>
                        <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 600 }}>AUD</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="500"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      style={{ 
                        width: "100%", 
                        height: 6, 
                        appearance: "none",
                        background: `linear-gradient(to right, #F5B818 0%, #F5B818 ${(loanAmount - 5000) / (100000 - 5000) * 100}%, rgba(255,255,255,0.1) ${(loanAmount - 5000) / (100000 - 5000) * 100}%, rgba(255,255,255,0.1) 100%)`,
                        borderRadius: 10,
                        outline: "none",
                        cursor: "pointer",
                        marginBottom: 10
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280", fontWeight: 500 }}>
                      <span>$5,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div style={{ marginBottom: 36 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: "#F5B818", textTransform: "uppercase", letterSpacing: 2 }}>Interest Rate</label>
                      <div style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: 6, 
                        padding: "8px 16px", 
                        background: "rgba(245,184,24,0.1)", 
                        borderRadius: 10, 
                        border: "1px solid rgba(245,184,24,0.2)" 
                      }}>
                        <span style={{ fontSize: 18, fontWeight: 800, color: "#F5B818" }}>{interestRate.toFixed(1)}%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="15"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      style={{ 
                        width: "100%", 
                        height: 6, 
                        appearance: "none",
                        background: `linear-gradient(to right, #F5B818 0%, #F5B818 ${(interestRate - 0.1) / (15 - 0.1) * 100}%, rgba(255,255,255,0.1) ${(interestRate - 0.1) / (15 - 0.1) * 100}%, rgba(255,255,255,0.1) 100%)`,
                        borderRadius: 10,
                        outline: "none",
                        cursor: "pointer",
                        marginBottom: 10
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280", fontWeight: 500 }}>
                      <span>0.1%</span>
                      <span>15.0%</span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#F5B818", marginBottom: 16, textTransform: "uppercase", letterSpacing: 2 }}>Loan Term</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {terms.map((term) => {
                        const isActive = loanTerm === term;
                        return (
                          <motion.button
                            key={term}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setLoanTerm(term)}
                            style={{
                              padding: "14px 0",
                              width: "calc(14.28% - 9px)",
                              minWidth: 60,
                              borderRadius: 12,
                              border: "1.5px solid",
                              borderColor: isActive ? "#F5B818" : "rgba(255,255,255,0.1)",
                              background: isActive ? "#F5B818" : "rgba(255,255,255,0.03)",
                              color: isActive ? "#0a0a14" : "#9ca3af",
                              fontSize: 14,
                              fontWeight: 700,
                              cursor: "pointer",
                              transition: "all 0.25s ease",
                              boxShadow: isActive ? "0 4px 20px rgba(245,184,24,0.25)" : "none",
                              position: "relative",
                              overflow: "hidden"
                            }}
                          >
                            <div style={{ fontSize: 16, fontWeight: 800 }}>{term}</div>
                            <div style={{ fontSize: 10, fontWeight: 600, opacity: 0.7, marginTop: 2 }}>mo</div>
                          </motion.button>
                        );
                      })}
                    </div>
                    <div style={{ marginTop: 16, padding: "14px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 13, color: "#6b7280" }}>Selected Term</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>{(loanTerm / 12).toFixed(1)} Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* RESULTS PANEL */}
            <div className="col-xl-5 col-lg-6">
              <FadeIn direction="right" delay={0.15}>
                <div style={{ 
                  background: "linear-gradient(145deg, #F5B818 0%, #E5A810 100%)", 
                  borderRadius: 28, 
                  padding: 48, 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 40px 80px rgba(245,184,24,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Decorative circle */}
                  <div style={{ position: "absolute", top: "-50%", right: "-30%", width: 400, height: 400, background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IconWallet />
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 800, color: "rgba(0,0,0,0.5)", textTransform: "uppercase", letterSpacing: 2 }}>Estimated Repayment</div>
                      </div>
                    </div>

                    {/* Weekly */}
                    <div style={{ marginBottom: 28 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(0,0,0,0.45)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Per Week</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, color: "#0a0a14", lineHeight: 1, letterSpacing: -2 }}>
                          ${repayment.weekly.toFixed(2)}
                        </span>
                        <span style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.4)" }}>AUD</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: "100%", height: 1, background: "rgba(0,0,0,0.1)", marginBottom: 28 }} />

                    {/* Monthly */}
                    <div style={{ marginBottom: 32 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(0,0,0,0.45)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Per Month</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, color: "#0a0a14", lineHeight: 1, letterSpacing: -2 }}>
                          ${repayment.monthly.toFixed(2)}
                        </span>
                        <span style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.4)" }}>AUD</span>
                      </div>
                    </div>

                    {/* Summary Box */}
                    <div style={{ background: "rgba(0,0,0,0.08)", borderRadius: 18, padding: 24, marginBottom: 8 }}>
                      {[
                        { label: "Principal Amount", value: `$${loanAmount.toLocaleString()}` },
                        { label: "Interest Rate", value: `${interestRate.toFixed(2)}% p.a.` },
                        { label: "Total Term", value: `${loanTerm} months` },
                        { label: "Total Repayable", value: `$${(repayment.monthly * loanTerm).toLocaleString(undefined, {maximumFractionDigits: 0})}` }
                      ].map((item, i) => (
                        <div key={i} style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          padding: i > 0 ? "12px 0 0" : "0 0 12px",
                          borderTop: i > 0 ? "1px solid rgba(0,0,0,0.06)" : "none"
                        }}>
                          <span style={{ fontSize: 14, color: "rgba(0,0,0,0.5)", fontWeight: 500 }}>{item.label}</span>
                          <span style={{ fontSize: 15, fontWeight: 700, color: "#0a0a14" }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="#enquiry" style={{
                    display: "block",
                    textAlign: "center",
                    padding: "20px 24px",
                    background: "#0a0a14",
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 800,
                    textDecoration: "none",
                    borderRadius: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    position: "relative",
                    zIndex: 2,
                    marginTop: 16
                  }}>
                    Apply for Finance
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Disclaimer */}
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <p style={{ fontSize: 12, color: "#4b5563", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                *This calculator provides an estimate only. Actual repayments may vary based on credit assessment, lender fees, and other factors. Subject to approval.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
       <TestimonianInner />
    </main>
  );
};

export default FinancePage;