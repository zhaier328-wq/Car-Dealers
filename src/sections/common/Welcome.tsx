"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// =========================================
// ICONS
// =========================================

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconFileCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const IconAward = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// =========================================
// HIGHLIGHT CARD
// =========================================

const HighlightCard = ({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "16px 20px",
      background: "#fff",
      borderRadius: "12px",
      border: "1px solid #eee",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    }}
  >
    <span style={{ color: "#F5B818" }}>{icon}</span>
    <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e" }}>{title}</span>
  </motion.div>
);

// =========================================
// MAIN COMPONENT
// =========================================

const WelcomeSection: React.FC = () => {
  return (
    <section style={{ background: "#f8f7f4", padding: "80px 0" }}>
      <div className="container">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          
          {/* Header Block */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {/* Tagline */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                padding: "6px 16px",
                background: "rgba(245, 184, 24, 0.1)",
                borderRadius: "20px",
                border: "1px solid rgba(245, 184, 24, 0.2)",
              }}
            >
              <span style={{ width: "6px", height: "6px", background: "#F5B818", borderRadius: "50%" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#F5B818", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: "#1a1a2e",
                textTransform: "uppercase",
                letterSpacing: "-0.5px",
                marginBottom: "12px",
                marginTop: 0,
                lineHeight: 1.2,
              }}
            >
              Welcome to <span style={{ color: "#F5B818" }}>UKA Japan Motors</span>
            </h2>

            {/* Subheading */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#555",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              Most Trusted Dealer for Japanese Import Cars in Melbourne, Australia
            </p>

            {/* Decorative Line */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <div style={{ width: "60px", height: "2px", background: "#ddd" }} />
              <div style={{ width: "8px", height: "8px", background: "#F5B818", borderRadius: "50%", transform: "rotate(45deg)" }} />
              <div style={{ width: "60px", height: "2px", background: "#ddd" }} />
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <HighlightCard icon={<IconShield />} title="25+ Years Experience" delay={0.1} />
            <HighlightCard icon={<IconFileCheck />} title="Export Certified" delay={0.2} />
            <HighlightCard icon={<IconAward />} title="Auction Sheet Verified" delay={0.3} />
          </div>

          {/* Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid #eee",
              boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", margin: 0 }}>
                Are you searching for reliable Japanese import cars in Australia? UKA Japan Motors has you sorted. With over 25 years in the industry, we specialise in importing high-quality JDM cars directly from Japan. As direct importers, we handle high-volume shipping from Japan and processing in Australia, which means no intermediate third party and more competitive prices.
              </p>

              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", margin: 0 }}>
                Our used car dealership in Australia offers credible wholesale deals, easy trade-ins, and a trusted range of Japanese used cars Melbourne, Australia that suit every budget. You also get access to flexible used car finance options and solid warranty coverage, which provide you assurance for the long run.We sell both low and high budget imports. UKA Japan Motors has a range of used cars under $15000. For drivers interested in premium used cars, we also have quality used cars under $50,000.
              </p>

              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", margin: 0 }}>
                Our imports are compliant with Australian law and come with an Export Certificate as well as a Japanese Auction Sheet to verify maintenance records and kilometres travelled. To make buying and selling Japanese import cars easier, we also offer a car trade-in option. For this, first we'll evaluate your used car and then offer the pricing for the vehicle. After that, you can decide to exchange your vehicle for a similarly priced Japanese used car Melbourne. When you visit our Japanese import car dealership in Melbourne, Australia, our team provides complete guidance and freedom to inspect the vehicle properly. We also provide assistance about arranging relevant documentation and car financing options to buy your dream car.
              </p>

              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", margin: 0 }}>
                To explore current stock or discover our latest offers, visit our Brisbane or Mordialloc used car dealership in Australia today.
              </p>
            </div>

            {/* CTA */}
            <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid #eee" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <p style={{ fontSize: "13px", color: "#888", margin: "0 0 4px" }}>Ready to find your car?</p>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", margin: 0 }}>Browse Our Latest Stock</p>
                </div>
                <Link
                  href="/stock"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    background: "#F5B818",
                    color: "#1a1a2e",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: "10px",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1a1a2e";
                    e.currentTarget.style.color = "#F5B818";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F5B818";
                    e.currentTarget.style.color = "#1a1a2e";
                  }}
                >
                  View Stock
                  <IconArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
