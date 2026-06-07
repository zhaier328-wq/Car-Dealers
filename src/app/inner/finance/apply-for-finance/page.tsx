"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// =========================================
// ICONS (Consistent 24px base, scaled via CSS)
// =========================================

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

const IconCheck = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconPercent = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" x2="5" y1="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const IconClock = ({ className = "uka-icon" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
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
    { icon: <IconWallet />, title: "Budget-friendly payments", desc: "Pay monthly instead of waiting years to save" },
    { icon: <IconCar />, title: "Quality Japanese imports", desc: "Access to premium used vehicles from Japan" },
    { icon: <IconSliders />, title: "Financial flexibility", desc: "Tailored plans customized to your budget" },
    { icon: <IconTrendingUp />, title: "Build credit history", desc: "Regular payments improve your credit score" },
    { icon: <IconShield />, title: "Warranty + insurance", desc: "Combined coverage for great value" },
  ];

  const documents = [
    { icon: <IconFileText />, title: "Proof of Income", desc: "Recent payslips or bank statements" },
    { icon: <IconBriefcase />, title: "Employment Status", desc: "Current employer details" },
    { icon: <IconTrendingUp />, title: "Credit History", desc: "Previous loan repayment record" },
  ];

  const steps = [
    {
      number: "01",
      title: "Quick Finance Enquiry",
      desc: "Provide your name, contact number, email, and the used car finance amount you're looking for. This helps us quickly understand your needs.",
      action: "Apply Now",
      icon: <IconArrowRight />,
    },
    {
      number: "02",
      title: "Detailed Application",
      desc: "Fill out the full used car finance application, including your income, employment details, and any additional information for accurate assessment.",
      action: "Apply Now",
      icon: <IconArrowRight />,
    },
    {
      number: "03",
      title: "Finance Calculator",
      desc: "Use our simple repayment calculator to estimate your weekly, fortnightly, or monthly repayments with ease, accuracy, and complete confidence.",
      action: "Calculate",
      icon: <IconCalculator />,
    },
  ];

  const stats = [
    { value: "5.9%", label: "From APR", icon: <IconPercent /> },
    { value: "24hrs", label: "Approval Time", icon: <IconClock /> },
    { value: "98%", label: "Approval Rate", icon: <IconCheck /> },
  ];

  return (
    <main className="uka-finance">
      <style jsx global>{`
        .uka-finance {
          --uka-gold: #F5B818;
          --uka-navy: #0F0F1B;
          --uka-navy-light: #16162A;
          --uka-cream: #F5F0E6;
          --uka-white: #FFFFFF;
          --uka-text: #111111;
          --uka-text-secondary: #555555;
          --uka-text-muted: #8B8FA3;
          --uka-radius-sm: 10px;
          --uka-radius-md: 14px;
          --uka-radius-lg: 20px;
          --uka-radius-xl: 24px;
        }

        .uka-icon {
          width: 24px;
          height: 24px;
          display: block;
          flex-shrink: 0;
        }

        /* HERO */
        .uka-hero {
          background: var(--uka-navy);
          padding: 140px 0 100px;
          position: relative;
          overflow: hidden;
        }
        .uka-hero__glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .uka-hero__glow--1 {
          top: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245, 184, 24, 0.06) 0%, transparent 70%);
        }
        .uka-hero__glow--2 {
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(245, 184, 24, 0.04) 0%, transparent 70%);
        }
        .uka-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          padding: 8px 16px;
          background: rgba(245, 184, 24, 0.08);
          border-radius: 30px;
          border: 1px solid rgba(245, 184, 24, 0.15);
        }
        .uka-hero__badge-icon {
          width: 16px;
          height: 16px;
          color: var(--uka-gold);
        }
        .uka-hero__badge-text {
          font-size: 12px;
          font-weight: 600;
          color: var(--uka-gold);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .uka-hero__title {
          font-size: clamp(38px, 5.5vw, 72px);
          font-weight: 800;
          color: var(--uka-white);
          line-height: 1.05;
          text-transform: uppercase;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }
        .uka-hero__title-accent {
          color: var(--uka-gold);
        }
        .uka-hero__desc {
          font-size: 18px;
          color: #A1A1AA;
          line-height: 1.8;
          max-width: 600px;
          margin-bottom: 36px;
        }
        .uka-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
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
        .uka-btn--sm {
          padding: 12px 24px;
          font-size: 14px;
        }

        /* STATS BAR */
        .uka-stats {
          background: var(--uka-navy-light);
          padding: 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .uka-stats__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .uka-stats__item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
        }
        .uka-stats__item:last-child {
          border-right: none;
        }
        .uka-stats__icon {
          width: 48px;
          height: 48px;
          background: rgba(245, 184, 24, 0.08);
          border-radius: var(--uka-radius-sm);
          color: var(--uka-gold);
          border: 1px solid rgba(245, 184, 24, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .uka-stats__icon svg {
          width: 22px;
          height: 22px;
        }
        .uka-stats__value {
          font-size: 28px;
          font-weight: 800;
          color: var(--uka-white);
          line-height: 1;
          margin-bottom: 4px;
        }
        .uka-stats__label {
          font-size: 14px;
          color: var(--uka-text-muted);
        }

        /* BENEFITS SECTION */
        .uka-benefits {
          background: var(--uka-cream);
          padding: 100px 0;
        }
        .uka-section-header {
          margin-bottom: 48px;
        }
        .uka-section-header--center {
          text-align: center;
        }
        .uka-section-header__tagline {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .uka-section-header__line {
          width: 40px;
          height: 2px;
          background: var(--uka-gold);
          border-radius: 2px;
        }
        .uka-section-header__tagline-text {
          font-size: 13px;
          font-weight: 600;
          color: var(--uka-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .uka-section-header__title {
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 700;
          color: var(--uka-text);
          text-transform: uppercase;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .uka-section-header__desc {
          font-size: 17px;
          color: var(--uka-text-secondary);
          line-height: 1.8;
          margin-top: 16px;
          max-width: 520px;
        }

        .uka-benefits__grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .uka-benefit-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
          background: var(--uka-white);
          border-radius: var(--uka-radius-md);
          border: 1px solid #E8E4DB;
          transition: all 0.3s ease;
        }
        .uka-benefit-card:hover {
          border-color: var(--uka-gold);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          transform: translateX(6px);
        }
        .uka-benefit-card__icon {
          width: 52px;
          height: 52px;
          background: rgba(245, 184, 24, 0.08);
          border-radius: var(--uka-radius-sm);
          color: var(--uka-gold);
          border: 1px solid rgba(245, 184, 24, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .uka-benefit-card__icon svg {
          width: 24px;
          height: 24px;
        }
        .uka-benefit-card__content {
          flex: 1;
        }
        .uka-benefit-card__title {
          font-size: 17px;
          font-weight: 600;
          color: var(--uka-text);
          margin: 0 0 4px;
        }
        .uka-benefit-card__desc {
          font-size: 14px;
          color: #777;
          margin: 0;
          line-height: 1.5;
        }

        /* DOCUMENTS PANEL */
        .uka-docs {
          background: var(--uka-navy);
          border-radius: var(--uka-radius-xl);
          padding: 44px;
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .uka-docs__glow {
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(245, 184, 24, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .uka-docs__header {
          position: relative;
          margin-bottom: 32px;
        }
        .uka-docs__tagline {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .uka-docs__tagline-text {
          font-size: 13px;
          font-weight: 600;
          color: var(--uka-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .uka-docs__title {
          font-size: 24px;
          font-weight: 700;
          color: var(--uka-white);
          text-transform: uppercase;
          line-height: 1.2;
          margin: 0;
        }
        .uka-docs__list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }
        .uka-doc-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .uka-doc-item__icon {
          width: 44px;
          height: 44px;
          background: rgba(245, 184, 24, 0.1);
          border-radius: var(--uka-radius-sm);
          color: var(--uka-gold);
          border: 1px solid rgba(245, 184, 24, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .uka-doc-item__icon svg {
          width: 20px;
          height: 20px;
        }
        .uka-doc-item__title {
          font-size: 15px;
          font-weight: 600;
          color: var(--uka-white);
          margin: 0 0 4px;
        }
        .uka-doc-item__desc {
          font-size: 14px;
          color: var(--uka-text-muted);
          margin: 0;
          line-height: 1.5;
        }
        .uka-docs__footer {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .uka-docs__footer-text {
          font-size: 13px;
          color: #6B6B7F;
          line-height: 1.6;
          margin: 0;
        }

        /* STEPS SECTION */
        .uka-steps {
          background: var(--uka-white);
          padding: 100px 0;
        }
        .uka-steps__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .uka-step-card {
          background: #FAFAF8;
          border-radius: var(--uka-radius-lg);
          padding: 40px 32px;
          border: 1px solid #F0EDE6;
          position: relative;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .uka-step-card:hover {
          border-color: var(--uka-gold);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }
        .uka-step-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .uka-step-card__number {
          font-size: 13px;
          font-weight: 700;
          color: var(--uka-gold);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .uka-step-card__icon {
          width: 40px;
          height: 40px;
          background: rgba(245, 184, 24, 0.08);
          border-radius: var(--uka-radius-sm);
          color: var(--uka-gold);
          border: 1px solid rgba(245, 184, 24, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .uka-step-card__icon svg {
          width: 18px;
          height: 18px;
        }
        .uka-step-card__title {
          font-size: 20px;
          font-weight: 700;
          color: var(--uka-text);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .uka-step-card__desc {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          margin: 0 0 24px;
          flex: 1;
        }

        /* CTA SECTION */
        .uka-cta {
          background: var(--uka-navy);
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .uka-cta__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(245, 184, 24, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .uka-cta__title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--uka-white);
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
          position: relative;
        }
        .uka-cta__title-accent {
          color: var(--uka-gold);
        }
        .uka-cta__desc {
          font-size: 17px;
          color: var(--uka-text-muted);
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.7;
          position: relative;
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .uka-hero {
            padding: 100px 0 80px;
          }
          .uka-hero__title {
            font-size: 36px;
            letter-spacing: -1px;
          }
          .uka-stats__grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .uka-stats__item {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding-bottom: 24px;
          }
          .uka-stats__item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .uka-steps__grid {
            grid-template-columns: 1fr;
          }
          .uka-docs {
            margin-top: 40px;
          }
        }
        @media (max-width: 767px) {
          .uka-hero__title {
            font-size: 32px;
          }
          .uka-benefits {
            padding: 60px 0;
          }
          .uka-steps {
            padding: 60px 0;
          }
          .uka-cta {
            padding: 60px 0;
          }
          .uka-docs {
            padding: 32px 24px;
          }
          .uka-benefit-card {
            padding: 20px;
          }
          .uka-step-card {
            padding: 32px 24px;
          }
        }
      `}</style>

      {/* =========================================
          HERO
          ========================================= */}
      <section className="uka-hero">
        <div className="uka-hero__glow uka-hero__glow--1" />
        <div className="uka-hero__glow uka-hero__glow--2" />
        <div className="container">
          <FadeIn>
            <div className="uka-hero__badge">
              <IconWallet className="uka-hero__badge-icon" />
              <span className="uka-hero__badge-text">Financing Made Simple</span>
            </div>

            <h1 className="uka-hero__title">
              Apply For <span className="uka-hero__title-accent">Finance</span>
            </h1>

            <p className="uka-hero__desc">
              Quick approvals, competitive interest rates, and tailored plans to suit your budget. 
              We advocate for you to secure the lowest rates possible for used car finance.
            </p>

            <div className="uka-hero__actions">
              <Link href="#apply" className="uka-btn uka-btn--primary">
                Apply Now
                <IconArrowRight className="uka-icon" style={{ width: 18, height: 18 }} />
              </Link>
              <Link href="#calculator" className="uka-btn uka-btn--outline">
                <IconCalculator style={{ width: 18, height: 18 }} />
                Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          STATS BAR
          ========================================= */}
      <section className="uka-stats">
        <div className="container">
          <div className="uka-stats__grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="uka-stats__item"
              >
                <div className="uka-stats__icon">{stat.icon}</div>
                <div>
                  <div className="uka-stats__value">{stat.value}</div>
                  <div className="uka-stats__label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BENEFITS + DOCUMENTS
          ========================================= */}
      <section className="uka-benefits">
        <div className="container">
          <div className="row g-5">
            {/* Left — Benefits */}
            <div className="col-xl-7">
              <FadeIn direction="left">
                <div className="uka-section-header">
                  <div className="uka-section-header__tagline">
                    <span className="uka-section-header__line" />
                    <span className="uka-section-header__tagline-text">Why Finance With Us</span>
                  </div>
                  <h2 className="uka-section-header__title">
                    Why Choose Used Car<br />Financing With Us?
                  </h2>
                  <p className="uka-section-header__desc">
                    Used car finance options make it easier to buy your dream car sooner. 
                    Pay monthly instead of saving for years.
                  </p>
                </div>

                <div className="uka-benefits__grid">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="uka-benefit-card"
                    >
                      <div className="uka-benefit-card__icon">{b.icon}</div>
                      <div className="uka-benefit-card__content">
                        <h4 className="uka-benefit-card__title">{b.title}</h4>
                        <p className="uka-benefit-card__desc">{b.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — Documents */}
            <div className="col-xl-5">
              <FadeIn direction="right" delay={0.2}>
                <div className="uka-docs">
                  <div className="uka-docs__glow" />
                  <div className="uka-docs__header">
                    <div className="uka-docs__tagline">
                      <span className="uka-section-header__line" />
                      <span className="uka-docs__tagline-text">Required</span>
                    </div>
                    <h3 className="uka-docs__title">Documents Required</h3>
                  </div>

                  <div className="uka-docs__list">
                    {documents.map((d, i) => (
                      <div key={i} className="uka-doc-item">
                        <div className="uka-doc-item__icon">{d.icon}</div>
                        <div>
                          <h4 className="uka-doc-item__title">{d.title}</h4>
                          <p className="uka-doc-item__desc">{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="uka-docs__footer">
                    <p className="uka-docs__footer-text">
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
      <section className="uka-steps" id="apply">
        <div className="container">
          <FadeIn>
            <div className="uka-section-header uka-section-header--center" style={{ marginBottom: 56 }}>
              <div className="uka-section-header__tagline" style={{ justifyContent: "center" }}>
                <span className="uka-section-header__line" />
                <span className="uka-section-header__tagline-text">How It Works</span>
                <span className="uka-section-header__line" />
              </div>
              <h2 className="uka-section-header__title">Apply For Finance In 3 Steps</h2>
            </div>
          </FadeIn>

          <div className="uka-steps__grid">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="uka-step-card"
              >
                <div className="uka-step-card__header">
                  <span className="uka-step-card__number">Step {step.number}</span>
                  <div className="uka-step-card__icon">{step.icon}</div>
                </div>

                <h3 className="uka-step-card__title">{step.title}</h3>
                <p className="uka-step-card__desc">{step.desc}</p>

                <Link href="#" className="uka-btn uka-btn--primary uka-btn--sm">
                  {step.action}
                  <IconArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <section className="uka-cta">
        <div className="uka-cta__glow" />
        <div className="container">
          <FadeIn>
            <h2 className="uka-cta__title">
              Ready To <span className="uka-cta__title-accent">Get Started?</span>
            </h2>
            <p className="uka-cta__desc">
              Apply now and get pre-approved for your dream car today. 
              Our team will guide you every step of the way.
            </p>
            <Link href="#apply" className="uka-btn uka-btn--primary">
              Start Application
              <IconArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default FinancePage; 