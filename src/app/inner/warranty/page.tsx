"use client";
import WarrantyServices from '@/sections/service/WarrantyServices';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// =========================================
// SVG ICONS (Thin Stroke, Consistent)
// =========================================

const IconShieldCheck = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconShieldOutline = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconWrench = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconGlobe = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconClock = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconScale = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 3.5 1.5 3.5 3.5S7 14 5 14H3V7Zm18 0h-2c-2 0-3.5 1.5-3.5 3.5S17 14 19 14h2V7Z" />
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

const IconPhone = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconArrowRight = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconCheck = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconAlert = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const IconGavel = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 10" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>
);

const IconMapPin = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// =========================================
// ANIMATION WRAPPER
// =========================================

const UkaFadeIn = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// =========================================
// SECTION TITLE COMPONENT
// =========================================

const UkaSectionTitle = ({
  tagline,
  title,
  align = "center",
  light = false,
}: {
  tagline: string;
  title: string;
  align?: "center" | "left";
  light?: boolean;
}) => (
  <div className={`uka-section-title uka-section-title--${align}`}>
    <div className="uka-section-title__tagline-wrapper">
      <span className="uka-section-title__line" />
      <span className="uka-section-title__tagline">{tagline}</span>
      {align === "center" && <span className="uka-section-title__line" />}
    </div>
    <h2 className={`uka-section-title__heading ${light ? "uka-section-title__heading--light" : ""}`}>
      {title}
    </h2>
  </div>
);

// =========================================
// WARRANTY CARD COMPONENT
// =========================================

const UkaWarrantyCard = ({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    viewport={{ once: true, amount: 0.2 }}
    className="uka-warranty-card"
  >
    <span className="uka-warranty-card__number">{number}</span>
    <div className="uka-warranty-card__icon">{icon}</div>
    <h3 className="uka-warranty-card__title">{title}</h3>
    <p className="uka-warranty-card__text">{description}</p>
  </motion.div>
);

// =========================================
// FEATURE ROW COMPONENT
// =========================================

const UkaFeatureRow = ({
  title,
  text,
  index,
  icon,
}: {
  title: string;
  text: string;
  index: number;
  icon: React.ReactNode;
}) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    viewport={{ once: true, amount: 0.3 }}
    className={`uka-feature-row ${index % 2 !== 0 ? "uka-feature-row--alt" : ""}`}
  >
    <div className="uka-feature-row__icon-box">{icon}</div>
    <div className="uka-feature-row__content">
      <h4 className="uka-feature-row__title">{title}</h4>
      <p className="uka-feature-row__text">{text}</p>
    </div>
  </motion.div>
);

// =========================================
// PRICING CARD COMPONENT
// =========================================

const UkaPricingCard = ({
  icon,
  title,
  description,
  recommended = false,
  accentColor = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  recommended?: boolean;
  accentColor?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className={`uka-pricing-card ${recommended ? "uka-pricing-card--recommended" : ""}`}
  >
    {recommended && <span className="uka-pricing-card__badge">Recommended</span>}
    <div className={`uka-pricing-card__icon ${accentColor ? "uka-pricing-card__icon--accent" : ""}`}>
      {icon}
    </div>
    <h3 className={`uka-pricing-card__title ${accentColor ? "uka-pricing-card__title--accent" : ""}`}>
      {title}
    </h3>
    <p className="uka-pricing-card__text">{description}</p>
  </motion.div>
);

// =========================================
// MAIN PAGE COMPONENT
// =========================================

const WarrantyPage: React.FC = () => {
  return (
    <main className="uka-warranty-page">
      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="uka-hero">
        <div className="uka-hero__glow uka-hero__glow--left" />
        <div className="uka-hero__glow uka-hero__glow--right" />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              <UkaFadeIn direction="left">
                <div className="uka-hero__badge">
                  <IconShieldCheck className="uka-icon uka-icon--sm" />
                  <span className="uka-hero__badge-text">
                    UKA Japan Motors Protection
                  </span>
                </div>

                <h1 className="uka-hero__title">
                  Warranty & <span className="uka-hero__title-accent">Guarantees</span>
                  <br />
                  On Japanese Imports
                </h1>

                <p className="uka-hero__desc">
                  Buy with absolute confidence. Our comprehensive warranty coverage
                  protects your investment and saves you from unexpected repair
                  costs across Melbourne and Brisbane.
                </p>

               <div className="main-slider__btn-box ">
  <Link href="#coverage" className="thm-btn "  >
    View Coverage
    <span className="fas fa-arrow-right"></span>
  </Link>
  
  <Link 
    href="#locations" 
    style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      
      padding: "18px 36px",
      background: "transparent",
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: 600,
      textDecoration: "none",
      borderRadius: 8,
      border: "1px solid rgba(255, 255, 255, 0.15)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginLeft:20,
   
    }}
  >
    Service Locations
  </Link>
</div>
                
              </UkaFadeIn>
            </div>

            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <UkaFadeIn direction="right" delay={0.3}>
                <div className="uka-hero__graphic">
                  <IconShieldOutline className="uka-icon uka-icon--xxl" />
                  <IconCheck className="uka-icon uka-icon--lg uka-hero__graphic-check" />

                 
                </div>
              </UkaFadeIn>
            </div>
          </div>
        </div>
        
      </section>


      {/* =========================================
          WARRANTY CARDS
          ========================================= */}
          <WarrantyServices sectionClass='services-one' />
        

      {/* =========================================
          SERVICE LOCATIONS (YOUR UPLOADED DESIGN)
          ========================================= */}
      <section className="uka-locations" id="locations">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-5 mb-xl-0">
              <UkaFadeIn direction="left">
                <div className="uka-locations__visual">
                  <div className="uka-locations__map">
                    <div className="uka-locations__map-inner">
                      <div className="uka-locations__map-icon">
                        <IconMapPin className="uka-icon uka-icon--xl" />
                      </div>
                      <div className="uka-locations__map-label">Service Location Map</div>
                    </div>
                  </div>

                  {/* Experience-style badge */}
                  <div className="uka-locations__badge">
                    <span className="uka-locations__badge-number">2</span>
                    <span className="uka-locations__badge-text">
                      Authorised<br />Locations
                    </span>
                  </div>
                </div>
              </UkaFadeIn>
            </div>

            <div className="col-xl-6 ps-xl-5">
              <UkaFadeIn direction="right" delay={0.2}>
                <UkaSectionTitle
                  tagline="Service Locations"
                  title="Warranty Support Across Australia"
                  align="left"
                />

                <p className="uka-locations__intro">
                  UKA Japan Motors operates from <strong>Victoria</strong>, with an additional
                  branch in <strong>Brisbane, Queensland</strong>. All warranty inspections,
                  assessments, and repairs are carried out at our authorised workshop
                  locations in these states.
                </p>

                <div className="uka-locations__features">
                  <UkaFeatureRow
                    index={0}
                    title="Victoria Workshop"
                    text="Primary service location for all warranty assessments, inspections, and authorised repairs."
                    icon={<IconMapPin className="uka-icon uka-icon--sm" />}
                  />
                  <UkaFeatureRow
                    index={1}
                    title="Brisbane Workshop"
                    text="Queensland branch offering full warranty support and repair services for local customers."
                    icon={<IconMapPin className="uka-icon uka-icon--sm" />}
                  />
                  <UkaFeatureRow
                    index={2}
                    title="Outside Coverage Areas"
                    text="Customers outside VIC/QLD may need to return vehicles to authorised locations unless otherwise agreed in writing."
                    icon={<IconAlert className="uka-icon uka-icon--sm" />}
                  />
                </div>

                <div className="uka-locations__notice">
                  <p className="uka-locations__notice-text">
                    <strong>Note:</strong> In some cases, UKA Japan Motors may assist in
                    arranging repairs through an approved third-party workshop; however,
                    this must be authorised by us in advance.
                  </p>
                </div>
              </UkaFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          EXTENDED WARRANTY
          ========================================= */}
      <section className="uka-pricing">
        <div className="container">
          <UkaSectionTitle
            tagline="Extended Protection"
            title="Recommended For Interstate Use"
            light
          />

          <p className="uka-pricing__intro">
            If you plan to use or relocate your vehicle outside Victoria or Brisbane, we
            strongly recommend considering our extended warranty options for added
            convenience and broader support.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <UkaPricingCard
                icon={<IconCar className="icon-car-1" />}
                title="Standard Warranty"
                description="Included with every eligible import. Covers authorised workshop repairs in Victoria and Brisbane."
              />
            </div>
            <div className="col-xl-4 col-lg-6">
              <UkaPricingCard
                icon={<IconShieldCheck className="icon-car-1" />}
                title="Extended Warranty"
                description="Access a wider network of approved repairers. Reduces the need to return the vehicle to our authorised locations. Optional add-on."
                recommended
                accentColor
              />
            </div>
            <div className="col-xl-4 col-lg-6">
              <UkaPricingCard
                icon={<IconGavel className="icon-car-1" />}
                title="Australian Consumer Law"
                description="Our vehicles come with guarantees that cannot be excluded. Your ACL rights remain protected regardless of warranty selected."
              />
            </div>
          </div>
        </div>
      </section>

    <section className="uka-legal" style={{ background: "#F5F0E6", padding: "120px 0" }}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-11">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.15 }}
          style={{
            background: "#FFFFFF",
            borderRadius: 32,
            border: "1px solid #E5E0D5",
            padding: "80px 72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top gold accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 72,
              width: 80,
              height: 5,
              background: "#F5B818",
              borderRadius: "0 0 6px 6px",
            }}
          />

          {/* Subtle decorative corner */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: 60,
              width: 120,
              height: 120,
              background: "radial-gradient(circle, rgba(245,184,24,0.04) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div className="row align-items-start g-5">
            {/* Left Content — Larger, bolder */}
            <div className="col-lg-8">
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 36,
                  padding: "10px 22px",
                  background: "#FDF8EC",
                  borderRadius: 10,
                  border: "1px solid #F0E6D0",
                }}
              >
                <IconGavel
                  className="uka-icon"
                  style={{ width: 22, height: 22, color: "#D4A843" }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#9A8540",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  Legal Notice
                </span>
              </div>

              {/* Heading — Much larger */}
              <h3
                style={{
                  fontSize: "clamp(30px, 3.5vw, 42px)",
                  fontWeight: 800,
                  color: "#0F0F1B",
                  lineHeight: 1.15,
                  marginBottom: 32,
                  marginTop: 0,
                  letterSpacing: "-1px",
                  textTransform: "uppercase",
                }}
              >
                Australian Consumer<br />
                <span style={{ color: "#F5B818" }}>Law Guarantee</span>
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: 60,
                  height: 4,
                  background: "#F5B818",
                  borderRadius: 4,
                  marginBottom: 32,
                }}
              />

              {/* Body text — Larger, more breathing room */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.85,
                    color: "#3D3D4E",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  Our vehicles come with guarantees that{" "}
                  <strong style={{ color: "#0F0F1B", fontWeight: 700 }}>
                    cannot be excluded
                  </strong>{" "}
                  under the Australian Consumer Law. Nothing in this warranty policy excludes
                  or limits your rights under the Australian Consumer Law.
                </p>

                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.85,
                    color: "#3D3D4E",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  Extended warranties are optional and are offered{" "}
                  <strong style={{ color: "#0F0F1B", fontWeight: 700 }}>
                    in addition to
                  </strong>{" "}
                  your rights under the Australian Consumer Law. You are entitled to a
                  replacement or refund for a major failure and compensation for any other
                  reasonably foreseeable loss or damage.
                </p>
              </div>

              {/* Trust bar — prominent */}
              <div
                style={{
                  marginTop: 44,
                  padding: "24px 28px",
                  background: "#FAF7F0",
                  borderRadius: 16,
                  border: "1px solid #F0EBE0",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#F5B818",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <IconCheck
                    className="uka-icon"
                    style={{ width: 22, height: 22, color: "#0F0F1B" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#0F0F1B",
                      margin: "0 0 4px",
                    }}
                  >
                    Statutory Rights Protected
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#7A7A8A",
                      margin: 0,
                    }}
                  >
                    Competition and Consumer Act 2010 (Cth)
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Bold statement card */}
            <div className="col-lg-4">
              <div
                style={{
                  background: "#0F0F1B",
                  borderRadius: 24,
                  padding: "52px 40px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 200,
                    height: 200,
                    background: "radial-gradient(circle, rgba(245,184,24,0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    width: 100,
                    height: 100,
                    margin: "0 auto 28px",
                    background: "rgba(245, 184, 24, 0.1)",
                    borderRadius: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(245, 184, 24, 0.2)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <IconScale
                    className="uka-icon"
                    style={{ width: 44, height: 44, color: "#F5B818" }}
                  />
                </div>

                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#F5B818",
                    textTransform: "uppercase",
                    letterSpacing: 2.5,
                    margin: "0 0 12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  ACL Protected
                </p>

                <p
                  style={{
                    fontSize: 16,
                    color: "#9A9AAF",
                    lineHeight: 1.6,
                    margin: "0 0 24px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Your rights under the<br />
                  Competition and Consumer<br />
                  Act 2010
                </p>

                {/* Divider */}
                <div
                  style={{
                    width: 40,
                    height: 3,
                    background: "rgba(245, 184, 24, 0.4)",
                    borderRadius: 4,
                    margin: "0 auto 24px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                <p
                  style={{
                    fontSize: 13,
                    color: "#6B6B7F",
                    lineHeight: 1.7,
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Nothing in this policy limits<br />
                  your statutory consumer rights
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* =========================================
          CTA SECTION
          ========================================= */}
      <section className="uka-cta">
        <div className="container text-center">
          <UkaFadeIn>
            <h2 className="uka-cta__title">
              Need Warranty <span className="uka-cta__title-accent">Assistance?</span>
            </h2>

            <p className="uka-cta__desc">
              Contact our team for warranty claims, workshop locations, or extended
              coverage enquiries. We are here to help.
            </p>

            <div className="uka-cta__actions">
              <Link href="tel:1800006256" className="uka-btn uka-btn--primary">
                <IconPhone className="uka-icon uka-icon--sm" />
                +1 800 006 256
              </Link>
              <Link href="/contact" className="uka-btn uka-btn--outline">
                Contact Us
                <IconArrowRight className="uka-icon uka-icon--sm" />
              </Link>
            </div>
          </UkaFadeIn>
        </div>
      </section>

      {/* =========================================
          STYLES
          ========================================= */}
      <style jsx global>{`
        /* =========================================
           BASE VARIABLES
           ========================================= */
        .uka-warranty-page {
          --uka-gold: #F5B818;
          --uka-gold-light: rgba(245, 184, 24, 0.08);
          --uka-gold-medium: rgba(245, 184, 24, 0.15);
          --uka-navy: #0F0F1B;
          --uka-navy-light: #16162A;
          --uka-navy-card: #1A1A2E;
          --uka-cream: #F5F0E6;
          --uka-cream-dark: #F0EBE0;
          --uka-white: #FFFFFF;
          --uka-text-primary: #111111;
          --uka-text-secondary: #555555;
          --uka-text-muted: #8B8FA3;
          --uka-text-light: #A1A1AA;
          --uka-border: rgba(255, 255, 255, 0.06);
          --uka-border-gold: rgba(245, 184, 24, 0.15);
          --uka-radius-sm: 10px;
          --uka-radius-md: 14px;
          --uka-radius-lg: 16px;
          --uka-radius-xl: 20px;
          --uka-radius-2xl: 24px;
        }

        /* =========================================
           ICONS
           ========================================= */
        .uka-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        .uka-icon--xs { width: 16px; height: 16px; }
        .uka-icon--sm { width: 20px; height: 20px; }
        .uka-icon--md { width: 28px; height: 28px; }
        .uka-icon--lg { width: 36px; height: 36px; }
        .uka-icon--xl { width: 48px; height: 48px; }
        .uka-icon--xxl { width: 200px; height: 200px; }

        /* =========================================
           BUTTONS
           ========================================= */
        .uka-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: var(--uka-radius-md);
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .uka-btn--primary {
          background: var(--uka-gold);
          color: var(--uka-navy);
        }
        .uka-btn--primary:hover {
          background: #e0a800;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(245, 184, 24, 0.25);
        }
        .uka-btn--outline {
          background: transparent;
          color: var(--uka-white);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .uka-btn--outline:hover {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        /* =========================================
           SECTION TITLE
           ========================================= */
        .uka-section-title {
          margin-bottom: 32px;
        }
        .uka-section-title--left {
          text-align: left;
        }
        .uka-section-title--center {
          text-align: center;
        }
        .uka-section-title__tagline-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .uka-section-title--center .uka-section-title__tagline-wrapper {
          justify-content: center;
        }
        .uka-section-title__line {
          width: 40px;
          height: 2px;
          background: var(--uka-gold);
          border-radius: 2px;
        }
        .uka-section-title__tagline {
          color: var(--uka-gold);
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2.5px;
        }
        .uka-section-title__heading {
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--uka-text-primary);
          line-height: 1.25;
          margin-top: 16px;
          letter-spacing: -0.5px;
          margin-bottom: 0;
        }
        .uka-section-title__heading--light {
          color: var(--uka-white);
        }

        /* =========================================
           HERO SECTION
           ========================================= */
        .uka-hero {
          position: relative;
          min-height: 85vh;
          background: var(--uka-navy);
          padding-top: 140px;
          padding-bottom: 120px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .uka-hero__glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .uka-hero__glow--left {
          top: 5%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245, 184, 24, 0.06) 0%, transparent 70%);
        }
        .uka-hero__glow--right {
          bottom: 0%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(245, 184, 24, 0.04) 0%, transparent 70%);
        }
        .uka-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 40px;
          padding: 14px 20px;
          background: rgba(245, 184, 24, 0.08);
          border-radius: var(--uka-radius-lg);
          color: var(--uka-gold);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: 1px solid rgba(245, 184, 24, 0.2);
        }
        .uka-hero__badge-text {
          line-height: 1.5;
        }
        .uka-hero__title {
          font-size: clamp(38px, 5.5vw, 72px);
          font-weight: 800;
          color: var(--uka-white);
          line-height: 1.05;
          text-transform: uppercase;
          margin-bottom: 32px;
          letter-spacing: -2px;
          margin-top: 0;
        }
        .uka-hero__title-accent {
          color: var(--uka-gold);
        }
        .uka-hero__desc {
          font-size: 17px;
          color: var(--uka-text-light);
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 40px;
          margin-top: 0;
        }
        .uka-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .uka-hero__graphic {
          position: relative;
          width: 100%;
          height: 480px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border-radius: var(--uka-radius-2xl);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .uka-hero__graphic .uka-icon--xxl {
          color: rgba(255, 255, 255, 0.12);
        }
        .uka-hero__graphic-check {
          position: absolute;
          color: rgba(245, 184, 24, 0.4);
        }
        .uka-hero__graphic-badge {
          position: absolute;
          bottom: 40px;
          left: -10px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--uka-gold);
          color: var(--uka-navy);
          padding: 14px 24px;
          border-radius: var(--uka-radius-md);
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 20px 40px rgba(245, 184, 24, 0.2);
        }

        /* =========================================
           WARRANTY CARDS SECTION
           ========================================= */
        .uka-cards-section {
          background: var(--uka-cream);
          margin-top: -80px;
          padding-bottom: 120px;
          position: relative;
          z-index: 2;
        }

        /* =========================================
           WARRANTY CARD
           ========================================= */
        .uka-warranty-card {
          position: relative;
          height: 100%;
          background: var(--uka-navy-card);
          border-radius: var(--uka-radius-xl);
          border-bottom: 3px solid var(--uka-gold);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 40px 32px 36px;
          display: flex;
          flex-direction: column;
        }
        .uka-warranty-card__number {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 44px;
          height: 44px;
          background: var(--uka-white);
          border-radius: var(--uka-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          color: var(--uka-navy-card);
          font-family: monospace;
          letter-spacing: -0.5px;
        }
        .uka-warranty-card__icon {
          width: 60px;
          height: 60px;
          background: rgba(245, 184, 24, 0.06);
          border-radius: var(--uka-radius-md);
          color: var(--uka-gold);
          border: 1px solid var(--uka-border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }
        .uka-warranty-card__title {
          font-size: 19px;
          font-weight: 600;
          color: var(--uka-gold);
          line-height: 1.3;
          margin-bottom: 14px;
          margin-top: 0;
        }
        .uka-warranty-card__text {
          color: var(--uka-text-muted);
          font-size: 15px;
          line-height: 1.75;
          margin: 0;
        }

        /* =========================================
           LOCATIONS SECTION (YOUR DESIGN)
           ========================================= */
        .uka-locations {
          background: var(--uka-white);
          padding: 100px 0;
        }
        .uka-locations__visual {
          position: relative;
        }
        .uka-locations__map {
          background: #F5F5F5;
          border-radius: 20px;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .uka-locations__map-inner {
          text-align: center;
        }
        .uka-locations__map-icon {
          width: 80px;
          height: 80px;
          background: rgba(245, 184, 24, 0.08);
          border-radius: 20px;
          color: var(--uka-gold);
          border: 1px solid rgba(245, 184, 24, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .uka-locations__map-label {
          color: #999;
          font-size: 20px;
          font-weight: 500;
        }
        .uka-locations__badge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: var(--uka-gold);
          padding: 24px 32px;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(245, 184, 24, 0.25);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .uka-locations__badge-number {
          font-size: 40px;
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1;
        }
        .uka-locations__badge-text {
          color: #1A1A2E;
          font-weight: 600;
          font-size: 14px;
          line-height: 1.4;
        }
        .uka-locations__intro {
          color: var(--uka-text-secondary);
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 28px;
          margin-top: 0;
        }
        .uka-locations__features {
          margin-bottom: 24px;
        }
        .uka-locations__notice {
          background: #1A1A2E;
          border-radius: 12px;
          border-left: 4px solid var(--uka-gold);
          padding: 20px 24px;
        }
        .uka-locations__notice-text {
          color: var(--uka-text-muted);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }
        .uka-locations__notice-text strong {
          color: var(--uka-gold);
        }

        /* =========================================
           FEATURE ROW
           ========================================= */
        .uka-feature-row {
          display: flex;
          align-items: flex-start;
          background: var(--uka-white);
          border-radius: 14px;
          padding: 22px 20px;
          margin-bottom: 14px;
          border: 1px solid #F0EDE6;
          transition: all 0.3s ease;
        }
        .uka-feature-row:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transform: translateX(4px);
        }
        .uka-feature-row--alt {
          background: #F8F6F1;
        }
        .uka-feature-row__icon-box {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: var(--uka-gold);
          border-radius: 12px;
          color: #1A1A2E;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 18px;
        }
        .uka-feature-row__content {
          flex: 1;
        }
        .uka-feature-row__title {
          font-size: 16px;
          font-weight: 600;
          color: var(--uka-text-primary);
          margin-bottom: 6px;
          line-height: 1.3;
          margin-top: 0;
        }
        .uka-feature-row__text {
          color: var(--uka-text-secondary);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* =========================================
           PRICING SECTION
           ========================================= */
        .uka-pricing {
          background: var(--uka-navy);
          padding: 120px 0;
        }
        .uka-pricing__intro {
          text-align: center;
          color: var(--uka-text-muted);
          max-width: 640px;
          line-height: 1.8;
          font-size: 17px;
          margin: 0 auto 64px;
        }

        /* =========================================
           PRICING CARD
           ========================================= */
        .uka-pricing-card {
          position: relative;
          height: 100%;
          padding: 48px 36px;
          text-align: center;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--uka-radius-2xl);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s ease;
        }
        .uka-pricing-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .uka-pricing-card--recommended {
          background: rgba(245, 184, 24, 0.03);
          border: 2px solid var(--uka-gold);
        }
        .uka-pricing-card__badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--uka-gold);
          color: var(--uka-navy);
          padding: 5px 18px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .uka-pricing-card__icon {
          width: 68px;
          height: 68px;
          border-radius: var(--uka-radius-md);
          color: var(--uka-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        .uka-pricing-card__icon--accent {
        
          border-color: rgba(245, 184, 24, 0.2);
        }
        .uka-pricing-card__title {
          color: var(--uka-white);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 16px;
          margin-top: 0;
        }
        .uka-pricing-card__title--accent {
          color: var(--uka-gold);
        }
        .uka-pricing-card__text {
          color: var(--uka-text-muted);
          font-size: 15px;
          line-height: 1.75;
          margin: 0;
          flex: 1;
        }

        /* =========================================
           LEGAL SECTION
           ========================================= */
        .uka-legal {
          background: var(--uka-cream);
          padding: 100px 0;
        }
        .uka-legal__card {
          position: relative;
          background: var(--uka-white);
          border-radius: var(--uka-radius-2xl);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.04);
          border: 1px solid #EDE8DF;
          padding: 56px 48px;
          overflow: hidden;
        }
        .uka-legal__dot {
          position: absolute;
          top: 24px;
          left: 24px;
          width: 10px;
          height: 10px;
          background: var(--uka-gold);
          border-radius: 50%;
        }
        .uka-legal__badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding: 10px 20px;
          background: #FDF8EC;
          border-radius: 40px;
          color: var(--uka-gold);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border: 1px solid rgba(245, 184, 24, 0.15);
        }
        .uka-legal__title {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          color: var(--uka-text-primary);
          margin-bottom: 24px;
          text-transform: uppercase;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-top: 0;
        }
        .uka-legal__text {
          color: var(--uka-text-secondary);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 16px;
          margin-top: 0;
        }
        .uka-legal__text:last-of-type {
          margin-bottom: 0;
        }
        .uka-legal__icon-circle {
          width: 110px;
          height: 110px;
          background: var(--uka-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(245, 184, 24, 0.25);
        }
        .uka-legal__icon-circle .uka-icon {
          color: #8B8FA3;
        }
        .uka-legal__icon-label {
          color: #999;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 20px;
          margin-bottom: 0;
        }

        /* =========================================
           CTA SECTION
           ========================================= */
        .uka-cta {
          background: var(--uka-navy);
          padding: 100px 0;
        }
        .uka-cta__title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--uka-white);
          text-transform: uppercase;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          margin-top: 0;
        }
        .uka-cta__title-accent {
          color: var(--uka-gold);
        }
        .uka-cta__desc {
          color: #71717A;
          max-width: 560px;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 auto 40px;
        }
        .uka-cta__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        /* =========================================
           RESPONSIVE
           ========================================= */
        @media (max-width: 991px) {
          .uka-hero {
            padding-top: 100px;
            padding-bottom: 80px;
            min-height: auto;
          }
          .uka-hero__title {
            font-size: 36px;
          }
          .uka-section-title__heading {
            font-size: 28px;
          }
          .uka-locations__map {
            height: 400px;
          }
          .uka-legal__card {
            padding: 40px 28px;
          }
        }

        @media (max-width: 767px) {
          .uka-hero__title {
            font-size: 32px;
            letter-spacing: -1px;
          }
          .uka-warranty-card {
            padding: 32px 24px 28px;
          }
          .uka-pricing-card {
            padding: 36px 24px;
          }
          .uka-legal__card {
            padding: 32px 20px;
          }
          .uka-section-title {
            margin-bottom: 40px;
          }
          .uka-locations {
            padding: 60px 0;
          }
          .uka-locations__map {
            height: 350px;
          }
          .uka-locations__badge {
            padding: 18px 24px;
            bottom: 20px;
            left: 20px;
          }
          .uka-locations__badge-number {
            font-size: 32px;
          }
        }
      `}</style>
    </main>
  );
};

export default WarrantyPage;