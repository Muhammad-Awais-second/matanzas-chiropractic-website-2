'use client';

import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  FileText,
  Award,
  Activity,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Car,
  HeartHandshake,
  UserCheck,
  Waves,
  ArrowDown,
  Camera,
  Star,
} from 'lucide-react';

/**
 * Faithful SVG representation of the Matanzas Chiropractic Logo:
 * A flowing wave (white swoosh with aqua-blue #3DB7DC and fresh green #5DC48B ribbons
 * over a deep navy #1B3A8A base) above "MATANZAS CHIROPRACTIC" in classic serif small caps.
 */
function MatanzasLogo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';
  return (
    <div className="inline-flex flex-col items-start select-none">
      <div
        className={`flex items-center ${
          isDark ? 'bg-white px-3.5 py-2 rounded-xl shadow-xs' : ''
        }`}
      >
        <img
          src="https://matanzaschiropractic.com/wp-content/smush-webp/2025/02/logo-5.png.webp"
          alt="Matanzas Chiropractic and Spine Injury Center"
          referrerPolicy="no-referrer"
          className="h-12 sm:h-14 w-auto object-contain shrink-0"
        />
      </div>
    </div>
  );
}

/**
 * Elegant Architectural Photo Placeholder Block as specified:
 * No stock spine X-rays, no cheesy stock models.
 * Clearly labeled "Photo: Dr. Hornocker", "Photo: clinic interior", "Photo: treatment room".
 */
function PhotoPlaceholder({
  label,
  sublabel,
  aspectClass = 'aspect-[4/3]',
  dark = false,
}: {
  label: 'Photo: clinic interior' | 'Photo: treatment room' | 'Photo: Dr. Hornocker';
  sublabel: string;
  aspectClass?: string;
  dark?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-2xl border ${
        dark
          ? 'bg-[#0F2557] border-[#3DB7DC]/30 text-white'
          : 'bg-[#F4FAFC] border-[#1B3A8A]/15 text-[#0F2557]'
      } ${aspectClass} flex flex-col justify-between p-6 sm:p-8 shadow-sm`}
    >
      {/* Subtle Architectural Wave Watermark Geometry */}
      <svg
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
        viewBox="0 0 600 450"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-40 330 C130 240, 290 390, 640 260 L640 460 L-40 460 Z"
          fill="#3DB7DC"
          fillOpacity="0.28"
        />
        <path
          d="M-40 375 C180 300, 350 420, 640 320 L640 460 L-40 460 Z"
          fill="#5DC48B"
          fillOpacity="0.25"
        />
        <circle cx="490" cy="110" r="85" stroke="#3DB7DC" strokeWidth="1.5" strokeDasharray="6 6" />
        <line x1="0" y1="90" x2="600" y2="90" stroke="currentColor" strokeOpacity="0.08" />
        <line x1="90" y1="0" x2="90" y2="450" stroke="currentColor" strokeOpacity="0.08" />
      </svg>

      {/* Top framing header */}
      <div className="relative z-10 flex items-center justify-between gap-2 text-sm font-medium">
        <span
          className={`inline-flex items-center gap-2.5 font-semibold tracking-wide ${
            dark ? 'text-[#3DB7DC]' : 'text-[#1B3A8A]'
          }`}
        >
          <Camera className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Clinic Photography Frame</span>
        </span>
        <span className={dark ? 'text-white/75' : 'text-[#344054]'}>St. Augustine, FL</span>
      </div>

      {/* Center Prominent Photo Label */}
      <div className="relative z-10 my-auto py-8 flex flex-col items-center text-center">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border ${
            dark
              ? 'bg-[#1B3A8A]/70 border-[#3DB7DC]/40 text-[#5DC48B]'
              : 'bg-white border-[#1B3A8A]/20 text-[#1B3A8A]'
          } shadow-xs`}
        >
          <Camera className="w-7 h-7" aria-hidden="true" />
        </div>
        <p
          className={`font-serif-display text-2xl sm:text-3xl font-bold tracking-tight ${
            dark ? 'text-white' : 'text-[#0F2557]'
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-2 text-base sm:text-lg max-w-md ${
            dark ? 'text-[#F4FAFC]/85' : 'text-[#344054]'
          }`}
        >
          {sublabel}
        </p>
      </div>

      {/* Bottom architectural caption */}
      <div
        className={`relative z-10 pt-4 border-t flex items-center justify-between text-sm ${
          dark
            ? 'border-white/15 text-[#F4FAFC]/80'
            : 'border-[#1B3A8A]/10 text-[#344054]'
        }`}
      >
        <span>Matanzas Chiropractic and Spine Injury Center</span>
        <span className="font-mono text-xs">RESERVED ASSET SLOT</span>
      </div>
    </div>
  );
}

/**
 * Reusable Section Call-to-Action Bar repeated after major sections
 */
function SectionCallPrompt({
  promptText,
  dark = false,
}: {
  promptText: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-10 sm:mt-12 rounded-2xl p-6 sm:p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
        dark
          ? 'bg-[#0F2557]/90 border-[#3DB7DC]/35 text-white'
          : 'bg-[#F4FAFC] border-[#1B3A8A]/15 text-[#101828]'
      }`}
    >
      <div>
        <p
          className={`font-serif-display text-2xl sm:text-3xl font-bold ${
            dark ? 'text-white' : 'text-[#0F2557]'
          }`}
        >
          {promptText}
        </p>
        <p
          className={`mt-1 text-lg ${
            dark ? 'text-[#F4FAFC]/90' : 'text-[#344054]'
          }`}
        >
          Speak directly with our St. Augustine office at{' '}
          <strong className="font-semibold tabular-nums">(904) 679-1963</strong>.
        </p>
      </div>
      <a
        href="tel:+19046791963"
        className="w-full md:w-auto min-h-[52px] px-7 py-3.5 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-semibold text-lg inline-flex items-center justify-center gap-3 shadow-sm transition-colors shrink-0 whitespace-nowrap"
      >
        <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="tabular-nums">Call (904) 679-1963</span>
      </a>
    </div>
  );
}

const CONDITIONS = [
  {
    name: 'Back pain',
    category: 'Spine Care',
    description:
      'Targeted chiropractic evaluation and conservative care for lower, mid, and upper back pain.',
    icon: Activity,
  },
  {
    name: 'Neck pain',
    category: 'Cervical Spine',
    description:
      'Gentle assessment and care for cervical stiffness, strain, and restricted neck mobility.',
    icon: UserCheck,
  },
  {
    name: 'Sciatica',
    category: 'Nerve & Spine',
    description:
      'Focused spine care addressing radiating leg discomfort and sciatic nerve irritation.',
    icon: Waves,
  },
  {
    name: 'Whiplash',
    category: 'Auto & Trauma',
    description:
      'Trauma-trained evaluation and care for sudden neck and upper spine acceleration injuries.',
    icon: Car,
  },
  {
    name: 'Bulging disc',
    category: 'Disc Care',
    description:
      'Primary spine care and MRI interpretation qualified assessment for spinal disc concerns.',
    icon: ShieldCheck,
  },
  {
    name: 'Carpal tunnel',
    category: 'Wrist & Hand',
    description:
      'Conservative extremity care addressing wrist, hand, and median nerve discomfort.',
    icon: Sparkles,
  },
  {
    name: 'Shoulder pain',
    category: 'Upper Extremity',
    description:
      'Care for restricted shoulder motion, rotator cuff strain, and calcific shoulder tendinopathy.',
    icon: Award,
  },
  {
    name: 'Elbow pain',
    category: 'Tendon & Joint',
    description:
      'Targeted support for elbow discomfort, including tennis elbow and persistent tendon strain.',
    icon: CheckCircle2,
  },
  {
    name: 'Foot pain',
    category: 'Lower Extremity',
    description:
      'Non-invasive care for heel and arch discomfort, including plantar fasciitis and Achilles tendinopathy.',
    icon: HeartHandshake,
  },
];

const SHOCKWAVE_CONDITIONS = [
  {
    title: 'Plantar fasciitis',
    detail: 'Persistent heel and arch tendon pain that lingers despite stretching or orthotics.',
  },
  {
    title: 'Tennis elbow',
    detail: 'Lateral elbow tendon discomfort affecting grip strength and daily tasks.',
  },
  {
    title: 'Achilles tendinopathy',
    detail: 'Lower calf and heel cord tendon stiffness or pain during walking and activity.',
  },
  {
    title: "Patellar tendinopathy (jumper's knee)",
    detail: 'Front-of-knee tendon pain below the kneecap during stairs, standing, or movement.',
  },
  {
    title: 'Calcific shoulder tendinopathy',
    detail: 'Chronic shoulder tendon discomfort and restricted overhead reach.',
  },
];

const FAQS = [
  {
    question: 'How much does care cost, and what is Shockwave Therapy pricing?',
    answer:
      'Shockwave Therapy (ESWT) is transparently priced at $125 for 1 joint and $150 for 2 joints, with your evaluation included and no packages required. For chiropractic care, cold laser therapy, or massage pricing, please call our office at (904) 679-1963 so we can give you clear details based on your needs.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Please call our office at (904) 679-1963 to verify insurance. Our team will gladly check your coverage and explain your options over the phone before your appointment.',
  },
  {
    question: 'How does VA Community Care work at your clinic?',
    answer:
      'VA Community Care patients are welcome at Matanzas Chiropractic and Spine Injury Center. Call our office at (904) 679-1963 and we will help you understand the referral and authorization process.',
  },
  {
    question: 'What should I know after an auto accident regarding Florida PIP?',
    answer:
      'Florida PIP generally requires initial accident-related care within 14 days. Dr. Hornocker is trauma-trained, MRI interpretation qualified, and primary spine care certified, providing thorough evaluation and documentation for auto injury and whiplash patients.',
  },
  {
    question: 'Does Shockwave Therapy (ESWT) hurt?',
    answer:
      'Shockwave Therapy (ESWT) uses non-invasive acoustic pressure waves that may help reduce pain and improve function. It is designed for people whose symptoms persist after conservative care such as stretching, physical therapy, orthotics, and activity modification. Dr. Hornocker evaluates your affected joint first and communicates with you throughout the procedure.',
  },
  {
    question: 'What can I expect at my first visit?',
    answer:
      'Your visit begins with a focused conversation and clinical evaluation with Dr. John Hornocker to understand your symptoms and health history. Depending on your needs, care options at our clinic include chiropractic care, Shockwave Therapy (ESWT), cold laser therapy, and massage.',
  },
];

export default function MatanzasHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101828] pb-20 lg:pb-0">
      {/* =====================================================================
          1. HEADER
          Logo, Nav (Services, Shockwave Therapy, Auto Accident Care,
          VA Community Care, About, Contact), Phone + Call Button
          ===================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#1B3A8A]/12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="focus-visible:outline-2 focus-visible:outline-[#1B3A8A] rounded-lg py-1 shrink-0"
            aria-label="Matanzas Chiropractic and Spine Injury Center Home"
          >
            <MatanzasLogo variant="light" />
          </a>

          {/* Primary Navigation (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6 text-[17px] font-medium text-[#0F2557]"
          >
            <a
              href="#services"
              className="min-h-[44px] inline-flex items-center hover:text-[#1B3A8A] hover:underline underline-offset-8 decoration-2 decoration-[#3DB7DC] transition-colors whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#shockwave"
              className="min-h-[44px] inline-flex items-center hover:text-[#1B3A8A] hover:underline underline-offset-8 decoration-2 decoration-[#3DB7DC] transition-colors whitespace-nowrap"
            >
              Shockwave Therapy
            </a>
            <a
              href="#auto-accident"
              className="min-h-[44px] inline-flex items-center hover:text-[#1B3A8A] hover:underline underline-offset-8 decoration-2 decoration-[#3DB7DC] transition-colors whitespace-nowrap"
            >
              Auto Accident Care
            </a>
            <a
              href="#va-care"
              className="min-h-[44px] inline-flex items-center hover:text-[#1B3A8A] hover:underline underline-offset-8 decoration-2 decoration-[#3DB7DC] transition-colors whitespace-nowrap"
            >
              VA Community Care
            </a>
            <a
              href="#about"
              className="min-h-[44px] inline-flex items-center hover:text-[#1B3A8A] hover:underline underline-offset-8 decoration-2 decoration-[#3DB7DC] transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#contact"
              className="min-h-[44px] inline-flex items-center hover:text-[#1B3A8A] hover:underline underline-offset-8 decoration-2 decoration-[#3DB7DC] transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Phone Number + Call for an Appointment Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="tel:+19046791963"
              className="min-h-[44px] px-2 inline-flex items-center gap-2 text-lg font-bold text-[#0F2557] hover:text-[#1B3A8A] tabular-nums whitespace-nowrap"
            >
              <Phone className="w-5 h-5 text-[#1B7F46] shrink-0" aria-hidden="true" />
              <span>(904) 679-1963</span>
            </a>
            <a
              href="tel:+19046791963"
              className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-semibold text-base lg:text-[17px] inline-flex items-center justify-center gap-2.5 shadow-xs transition-colors whitespace-nowrap"
            >
              <span>Call for an Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (48x48px tap target) */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="tel:+19046791963"
              className="md:hidden min-h-[44px] px-3.5 py-2 rounded-xl bg-[#1B7F46] text-white font-semibold text-sm inline-flex items-center gap-1.5 whitespace-nowrap"
              aria-label="Call (904) 679-1963"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="min-w-[48px] min-h-[48px] rounded-xl border border-[#1B3A8A]/20 text-[#0F2557] inline-flex items-center justify-center hover:bg-[#F4FAFC] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="xl:hidden bg-white border-b border-[#1B3A8A]/15 px-4 pt-3 pb-6 shadow-lg"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Shockwave Therapy', href: '#shockwave' },
                { label: 'Auto Accident Care', href: '#auto-accident' },
                { label: 'VA Community Care', href: '#va-care' },
                { label: 'About Dr. Hornocker', href: '#about' },
                { label: 'Contact & Hours', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] px-4 py-2.5 rounded-xl text-lg font-semibold text-[#0F2557] hover:bg-[#F4FAFC] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-[#1B3A8A]/10 flex flex-col gap-3">
              <a
                href="tel:+19046791963"
                className="w-full min-h-[52px] px-5 py-3 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-semibold text-lg inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span className="tabular-nums">Call (904) 679-1963</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* ===================================================================
            2. HERO SECTION
            H1: "St. Augustine Chiropractic Care for Back Pain, Auto Injuries & Persistent Tendon Pain"
            Subhead: trauma-trained care, shockwave therapy, massage, and VA Community Care support.
            Primary CTA: Call button. Secondary CTA: "See Shockwave Pricing".
            Layered flowing wave SVG in the background.
            =================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F4FAFC] via-[#FFFFFF] to-[#F4FAFC] pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
          {/* Signature Layered Flowing Wave SVG Background */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden select-none"
            aria-hidden="true"
          >
            <svg
              className="w-[106%] -ml-[3%] h-32 sm:h-48 lg:h-64 animate-wave-drift"
              viewBox="0 0 1440 320"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heroWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1B3A8A" stopOpacity="0.10" />
                  <stop offset="55%" stopColor="#3DB7DC" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#5DC48B" stopOpacity="0.14" />
                </linearGradient>
                <linearGradient id="heroWaveGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1B3A8A" stopOpacity="0.14" />
                  <stop offset="50%" stopColor="#3DB7DC" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#5DC48B" stopOpacity="0.10" />
                </linearGradient>
              </defs>
              <path
                d="M0,160 C320,260 580,60 920,170 C1180,250 1320,140 1440,110 L1440,320 L0,320 Z"
                fill="url(#heroWaveGrad1)"
              />
              <path
                d="M0,220 C360,120 680,280 1040,180 C1240,125 1360,190 1440,210 L1440,320 L0,320 Z"
                fill="url(#heroWaveGrad2)"
              />
              {/* Crisp 3-ribbon accent wave echoing the logo */}
              <path
                d="M0,265 C380,190 720,295 1120,215 C1290,180 1380,210 1440,225"
                stroke="#3DB7DC"
                strokeWidth="3"
                strokeOpacity="0.45"
                fill="none"
              />
              <path
                d="M0,280 C400,215 740,305 1140,235 C1300,205 1390,225 1440,240"
                stroke="#5DC48B"
                strokeWidth="2.5"
                strokeOpacity="0.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Copy & Conversion CTAs */}
              <div className="lg:col-span-7 animate-fade-up">
                <p className="text-base sm:text-lg font-semibold text-[#1B3A8A] tracking-wide mb-3">
                  Matanzas Chiropractic and Spine Injury Center · St. Augustine, FL
                </p>

                <h1
                  className="font-serif-display text-[2.35rem] sm:text-5xl lg:text-[3.5rem] font-bold text-[#0F2557] leading-[1.12] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  St. Augustine Chiropractic Care for Back Pain, Auto Injuries &amp; Persistent Tendon Pain
                </h1>

                <p className="mt-6 text-xl sm:text-[22px] text-[#101828] leading-[1.6] max-w-2xl font-normal">
                  Trauma-trained chiropractic care, non-invasive Shockwave Therapy (ESWT), cold laser therapy, massage, and respectful VA Community Care support with Dr. John Hornocker.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="tel:+19046791963"
                    className="min-h-[56px] px-8 py-4 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-bold text-lg sm:text-xl inline-flex items-center justify-center gap-3 shadow-md transition-all whitespace-nowrap"
                  >
                    <Phone className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">Call (904) 679-1963</span>
                  </a>

                  <a
                    href="#shockwave"
                    className="min-h-[56px] px-7 py-4 rounded-xl bg-[#1B3A8A] hover:bg-[#0F2557] text-white font-semibold text-lg inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap"
                  >
                    <span>See Shockwave Pricing</span>
                    <ArrowDown className="w-5 h-5 shrink-0" aria-hidden="true" />
                  </a>
                </div>

                {/* Direct Address & Hours Micro-Summary */}
                <div className="mt-8 pt-6 border-t border-[#1B3A8A]/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-base sm:text-[17px] text-[#344054]">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#1B3A8A] shrink-0" aria-hidden="true" />
                    <span>2825 Lewis Speedway #101, St. Augustine, FL 32084</span>
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline text-[#1B3A8A]/40">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-2 tabular-nums">
                    <Clock className="w-5 h-5 text-[#1B3A8A] shrink-0" aria-hidden="true" />
                    <span>Mon 10–5 · Tue–Thu 8:30–5 · Fri 8–12</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Clinic Interior Photo Placeholder */}
              <div className="lg:col-span-5">
                <PhotoPlaceholder
                  label="Photo: clinic interior"
                  sublabel="Calm, welcoming reception and patient care area at 2825 Lewis Speedway #101 in St. Augustine."
                  aspectClass="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. TRUST STRIP
            The three credentials ("trauma-trained", "MRI interpretation qualified",
            "primary spine care certified"), "VA Community Care welcome",
            "Call to verify insurance", plus a clearly marked placeholder slot
            for Google rating (do not invent a rating).
            =================================================================== */}
        <section
          aria-label="Clinic Credentials and Patient Information"
          className="bg-[#0F2557] text-white py-10 sm:py-12 border-y border-[#3DB7DC]/25"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-4">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[#3DB7DC]">
                Dr. John Hornocker · Clinical Qualifications &amp; Patient Access
              </p>
              <p className="text-sm sm:text-base text-white/85">
                Direct phone scheduling:{' '}
                <a
                  href="tel:+19046791963"
                  className="font-bold text-white underline underline-offset-4 hover:text-[#5DC48B] tabular-nums"
                >
                  (904) 679-1963
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {/* Credential 1 */}
              <div className="rounded-xl bg-[#1B3A8A]/60 border border-white/15 p-5 flex items-start gap-4">
                <ShieldCheck className="w-7 h-7 text-[#5DC48B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    Trauma-trained
                  </h2>
                  <p className="text-base text-white/85 mt-1">
                    Clinical evaluation and care for spine and auto injury trauma.
                  </p>
                </div>
              </div>

              {/* Credential 2 */}
              <div className="rounded-xl bg-[#1B3A8A]/60 border border-white/15 p-5 flex items-start gap-4">
                <FileText className="w-7 h-7 text-[#3DB7DC] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    MRI interpretation qualified
                  </h2>
                  <p className="text-base text-white/85 mt-1">
                    Qualified review of spinal MRI findings to guide appropriate care.
                  </p>
                </div>
              </div>

              {/* Credential 3 */}
              <div className="rounded-xl bg-[#1B3A8A]/60 border border-white/15 p-5 flex items-start gap-4">
                <Award className="w-7 h-7 text-[#5DC48B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    Primary spine care certified
                  </h2>
                  <p className="text-base text-white/85 mt-1">
                    Evidence-informed conservative spine and joint management.
                  </p>
                </div>
              </div>

              {/* Trust item 4: VA Community Care welcome */}
              <div className="rounded-xl bg-[#1B3A8A]/40 border border-white/15 p-5 flex items-start gap-4">
                <HeartHandshake className="w-7 h-7 text-[#3DB7DC] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    VA Community Care welcome
                  </h2>
                  <p className="text-base text-white/85 mt-1">
                    Supporting St. Augustine veterans with authorized VA referrals.
                  </p>
                </div>
              </div>

              {/* Trust item 5: Call to verify insurance */}
              <div className="rounded-xl bg-[#1B3A8A]/40 border border-white/15 p-5 flex items-start gap-4">
                <Phone className="w-7 h-7 text-[#5DC48B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    Call to verify insurance
                  </h2>
                  <p className="text-base text-white/85 mt-1">
                    Call{' '}
                    <a
                      href="tel:+19046791963"
                      className="underline underline-offset-4 font-semibold text-white hover:text-[#3DB7DC] tabular-nums"
                    >
                      (904) 679-1963
                    </a>{' '}
                    and our staff will check your coverage.
                  </p>
                </div>
              </div>

              {/* Trust item 6: Clearly marked placeholder slot for Google rating */}
              <div
                className="rounded-xl bg-white/5 border-2 border-dashed border-[#3DB7DC]/50 p-5 flex items-start gap-4"
                aria-label="Google Rating Placeholder Slot"
              >
                <Star className="w-7 h-7 text-[#3DB7DC] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    Google Rating Placeholder
                  </h2>
                  <p className="text-base text-white/85 mt-1">
                    Reserved slot for live verified Google rating &amp; review count.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. "WHAT WE HELP WITH" (Services & Conditions Grid)
            Condition grid with line icons: back pain, neck pain, sciatica,
            whiplash, bulging disc, carpal tunnel, shoulder, elbow, foot pain.
            Plus clinic services: chiropractic care, cold laser therapy, massage,
            VA Community Care patients.
            =================================================================== */}
        <section id="services" className="py-16 sm:py-24 bg-white scroll-mt-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-base font-semibold text-[#1B3A8A] tracking-wide uppercase">
                Spine, Joint &amp; Extremity Care
              </p>
              <h2
                className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                What We Help With
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-[#344054] leading-relaxed">
                At Matanzas Chiropractic and Spine Injury Center, Dr. John Hornocker provides{' '}
                <strong className="font-semibold text-[#101828]">chiropractic care</strong>,{' '}
                <strong className="font-semibold text-[#101828]">Shockwave Therapy (ESWT)</strong>,{' '}
                <strong className="font-semibold text-[#101828]">cold laser therapy</strong>, and{' '}
                <strong className="font-semibold text-[#101828]">massage</strong> for spine, nerve, and joint conditions.
              </p>
            </div>

            {/* 9-Condition Grid with Line Icons */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONDITIONS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl bg-[#F4FAFC] border border-[#1B3A8A]/12 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#1B3A8A]/15 text-[#1B3A8A] flex items-center justify-center shrink-0">
                          <IconComponent className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-medium text-[#344054]">{item.category}</span>
                      </div>
                      <h3 className="font-serif-display text-2xl sm:text-[26px] font-bold text-[#0F2557]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-lg text-[#344054] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clinic Therapeutic Modalities Bar */}
            <div className="mt-10 rounded-2xl bg-white border border-[#1B3A8A]/15 p-6 sm:p-8">
              <h3 className="font-serif-display text-2xl font-bold text-[#0F2557]">
                Available Clinic Services &amp; Therapies
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium text-[#101828]">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4FAFC]">
                  <CheckCircle2 className="w-5 h-5 text-[#1B7F46] shrink-0" aria-hidden="true" />
                  <span>Chiropractic care</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4FAFC]">
                  <CheckCircle2 className="w-5 h-5 text-[#1B7F46] shrink-0" aria-hidden="true" />
                  <span>Shockwave Therapy (ESWT)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4FAFC]">
                  <CheckCircle2 className="w-5 h-5 text-[#1B7F46] shrink-0" aria-hidden="true" />
                  <span>Cold laser therapy</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4FAFC]">
                  <CheckCircle2 className="w-5 h-5 text-[#1B7F46] shrink-0" aria-hidden="true" />
                  <span>Massage therapy</span>
                </div>
              </div>
            </div>

            {/* Repeat Call CTA */}
            <SectionCallPrompt promptText="Have questions about back pain, neck pain, sciatica, or joint care?" />
          </div>
        </section>

        {/* ===================================================================
            5. SHOCKWAVE FEATURE BLOCK (Most Visually Striking Section)
            - 5 conditions: plantar fasciitis, tennis elbow, Achilles tendinopathy,
              patellar tendinopathy (jumper's knee), calcific shoulder tendinopathy.
            - Wording: "non-invasive acoustic pressure waves that may help reduce pain and improve function."
            - For people whose symptoms persist after conservative care (stretching,
              physical therapy, orthotics, activity modification).
            - Two price cards: $125 for 1 joint, $150 for 2 joints, evaluation included. No packages.
            - Do not say whether $125/$150 is per session or the full course.
            =================================================================== */}
        <section
          id="shockwave"
          className="relative overflow-hidden bg-gradient-to-br from-[#0F2557] via-[#1B3A8A] to-[#0F2557] text-white py-20 sm:py-28 scroll-mt-20"
        >
          {/* Top Signature Wave Divider */}
          <div className="absolute top-0 inset-x-0 pointer-events-none select-none" aria-hidden="true">
            <svg className="w-full h-10 sm:h-16" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
              <path d="M0,0 L1440,0 L1440,25 C1080,80 520,-10 0,55 Z" fill="#FFFFFF" />
              <path
                d="M0,58 C520,-6 1080,82 1440,28"
                stroke="#3DB7DC"
                strokeWidth="3"
                strokeOpacity="0.6"
                fill="none"
              />
            </svg>
          </div>

          {/* Ambient Wave Ribbon Geometry */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none opacity-25 select-none"
            aria-hidden="true"
          >
            <svg className="w-full h-56" viewBox="0 0 1440 240" fill="none" preserveAspectRatio="none">
              <path
                d="M0,140 C380,40 820,220 1440,90 L1440,240 L0,240 Z"
                fill="#3DB7DC"
                fillOpacity="0.3"
              />
              <path
                d="M0,185 C460,100 920,240 1440,140 L1440,240 L0,240 Z"
                fill="#5DC48B"
                fillOpacity="0.25"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            {/* Section Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#5DC48B] font-semibold tracking-wider uppercase text-sm sm:text-base">
                <Waves className="w-5 h-5" aria-hidden="true" />
                <span>Featured Non-Invasive Tendon &amp; Joint Care</span>
              </div>
              <h2
                className="mt-3 font-serif-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Shockwave Therapy (ESWT) for Persistent Tendon Pain
              </h2>
              <p className="mt-5 text-xl sm:text-2xl text-[#F4FAFC] leading-relaxed font-normal">
                Extracorporeal Shockwave Therapy (ESWT) uses{' '}
                <strong className="font-semibold text-white underline decoration-[#3DB7DC] decoration-2 underline-offset-4">
                  non-invasive acoustic pressure waves that may help reduce pain and improve function
                </strong>
                .
              </p>
              <p className="mt-4 text-lg sm:text-xl text-[#F4FAFC]/90 leading-relaxed">
                Designed for people whose symptoms persist after conservative care — including{' '}
                <span className="text-white font-medium">
                  stretching, physical therapy, orthotics, and activity modification
                </span>
                .
              </p>
            </div>

            {/* Middle Split: 5 Conditions List + Treatment Room Photo Placeholder */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* 5 Conditions Covered by Shockwave Therapy */}
              <div className="lg:col-span-7 rounded-2xl bg-white/8 backdrop-blur-xs border border-white/20 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                    5 Tendon &amp; Joint Conditions We Address with Shockwave Therapy
                  </h3>
                  <p className="mt-2 text-lg text-[#F4FAFC]/85">
                    If rest, stretching, physical therapy, orthotics, or activity modification have not resolved your tendon discomfort, ask Dr. Hornocker about ESWT for:
                  </p>

                  <ul className="mt-6 space-y-4">
                    {SHOCKWAVE_CONDITIONS.map((item, index) => (
                      <li
                        key={item.title}
                        className="rounded-xl bg-[#0F2557]/80 border border-[#3DB7DC]/30 p-4 sm:p-5 flex items-start gap-4"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#3DB7DC]/20 border border-[#3DB7DC]/50 text-[#5DC48B] font-mono font-bold text-base flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                          0{index + 1}
                        </span>
                        <div>
                          <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-base sm:text-lg text-[#F4FAFC]/85">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Treatment Room Photo Placeholder */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <PhotoPlaceholder
                  label="Photo: treatment room"
                  sublabel="Private Shockwave Therapy (ESWT) and spinal care treatment suite at Matanzas Chiropractic."
                  aspectClass="aspect-[4/3] lg:h-full"
                  dark={true}
                />
              </div>
            </div>

            {/* Pricing Block: Two Price Cards ($125 1 Joint, $150 2 Joints, Evaluation Included, No Packages) */}
            <div id="shockwave-pricing" className="mt-12 sm:mt-16 scroll-mt-24">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#5DC48B]">
                  Straightforward Pricing · Evaluation Included · No Packages
                </p>
                <h3 className="mt-2 font-serif-display text-3xl sm:text-4xl font-bold text-white">
                  Transparent Shockwave Therapy Pricing
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {/* Price Card 1: $125 for 1 Joint */}
                <div className="rounded-2xl bg-white text-[#101828] p-7 sm:p-9 border-2 border-[#3DB7DC] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#1B3A8A]/12">
                      <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0F2557]">
                        1 Joint
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[#1B3A8A]">
                        Single Area
                      </span>
                    </div>

                    <div className="my-6 flex items-baseline gap-3">
                      <span className="font-serif-display text-5xl sm:text-6xl font-bold text-[#0F2557] tabular-nums">
                        $125
                      </span>
                      <span className="text-lg font-medium text-[#344054]">for 1 joint</span>
                    </div>

                    <ul className="space-y-3 text-lg text-[#101828]">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0" aria-hidden="true" />
                        <span className="font-semibold">Evaluation included</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0" aria-hidden="true" />
                        <span>No packages</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0" aria-hidden="true" />
                        <span>Non-invasive acoustic pressure wave care</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:+19046791963"
                    className="mt-8 w-full min-h-[54px] px-6 py-3.5 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-bold text-lg inline-flex items-center justify-center gap-3 transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">Call (904) 679-1963</span>
                  </a>
                </div>

                {/* Price Card 2: $150 for 2 Joints */}
                <div className="rounded-2xl bg-white text-[#101828] p-7 sm:p-9 border-2 border-[#5DC48B] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#1B3A8A]/12">
                      <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0F2557]">
                        2 Joints
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[#1B7F46]">
                        Two Areas
                      </span>
                    </div>

                    <div className="my-6 flex items-baseline gap-3">
                      <span className="font-serif-display text-5xl sm:text-6xl font-bold text-[#0F2557] tabular-nums">
                        $150
                      </span>
                      <span className="text-lg font-medium text-[#344054]">for 2 joints</span>
                    </div>

                    <ul className="space-y-3 text-lg text-[#101828]">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0" aria-hidden="true" />
                        <span className="font-semibold">Evaluation included</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0" aria-hidden="true" />
                        <span>No packages</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0" aria-hidden="true" />
                        <span>Address two affected tendon or joint areas</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:+19046791963"
                    className="mt-8 w-full min-h-[54px] px-6 py-3.5 rounded-xl bg-[#1B3A8A] hover:bg-[#0F2557] text-white font-bold text-lg inline-flex items-center justify-center gap-3 transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">Call (904) 679-1963</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. AUTO ACCIDENT BLOCK
            - Exact message: "Florida PIP generally requires initial accident-related care within 14 days."
            - Evaluation and documentation focus
            - Call CTA
            =================================================================== */}
        <section id="auto-accident" className="py-16 sm:py-24 bg-[#F4FAFC] scroll-mt-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-[#1B3A8A]/15 p-7 sm:p-12 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-[#1B3A8A] font-semibold uppercase tracking-wider text-sm sm:text-base">
                    <Car className="w-5 h-5" aria-hidden="true" />
                    <span>Auto Accident &amp; Whiplash Evaluation</span>
                  </div>
                  <h2
                    className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557] tracking-tight"
                    style={{ textWrap: 'balance' }}
                  >
                    Post-Accident Spine &amp; Injury Care in St. Augustine
                  </h2>

                  {/* Mandatory 14-Day PIP Notice Box */}
                  <div className="mt-6 rounded-2xl bg-[#0F2557] text-white p-6 sm:p-7 border border-[#3DB7DC]/40">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#3DB7DC]">
                      Important Florida PIP Timeframe Notice
                    </p>
                    <p className="mt-2 font-serif-display text-2xl sm:text-3xl font-bold leading-snug">
                      &ldquo;Florida PIP generally requires initial accident-related care within 14 days.&rdquo;
                    </p>
                  </div>

                  <p className="mt-6 text-lg sm:text-xl text-[#344054] leading-relaxed">
                    After a motor vehicle collision, neck pain, whiplash, back pain, or disc symptoms require attentive evaluation and clear clinical documentation. Dr. John Hornocker is{' '}
                    <strong className="font-semibold text-[#101828]">trauma-trained</strong>,{' '}
                    <strong className="font-semibold text-[#101828]">MRI interpretation qualified</strong>, and{' '}
                    <strong className="font-semibold text-[#101828]">primary spine care certified</strong>.
                  </p>
                </div>

                {/* Right Column: Evaluation & Documentation Checklist */}
                <div className="lg:col-span-5 rounded-2xl bg-[#F4FAFC] border border-[#1B3A8A]/15 p-6 sm:p-8">
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0F2557]">
                    Evaluation &amp; Documentation Focus
                  </h3>
                  <ul className="mt-5 space-y-4 text-lg text-[#101828]">
                    <li className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        <strong>Trauma-trained evaluation</strong> for whiplash, neck pain, back pain, sciatica, and bulging disc injuries
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        <strong>MRI interpretation qualified</strong> clinical assessment when imaging is part of your injury evaluation
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-6 h-6 text-[#1B7F46] shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        <strong>Thorough clinical documentation</strong> of injury findings and conservative treatment progress
                      </span>
                    </li>
                  </ul>

                  <a
                    href="tel:+19046791963"
                    className="mt-8 w-full min-h-[54px] px-6 py-4 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-bold text-lg inline-flex items-center justify-center gap-3 shadow-xs transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">Call (904) 679-1963 for Evaluation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. VA COMMUNITY CARE BLOCK
            - Respectful welcome
            - Exact wording: "Call our office and we'll help you understand the referral and authorization process."
            =================================================================== */}
        <section id="va-care" className="py-16 sm:py-24 bg-white scroll-mt-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#0F2557] to-[#1B3A8A] text-white p-8 sm:p-12 lg:p-14 border border-[#3DB7DC]/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 text-[#5DC48B] font-semibold uppercase tracking-wider text-sm sm:text-base">
                    <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                    <span>Honoring St. Augustine Veterans</span>
                  </div>
                  <h2
                    className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                    style={{ textWrap: 'balance' }}
                  >
                    VA Community Care Patients Welcome
                  </h2>
                  <p className="mt-4 text-xl sm:text-2xl text-[#F4FAFC] leading-relaxed font-medium">
                    Call our office and we&apos;ll help you understand the referral and authorization process.
                  </p>
                  <p className="mt-4 text-lg text-[#F4FAFC]/85 leading-relaxed max-w-2xl">
                    Matanzas Chiropractic and Spine Injury Center proudly welcomes veterans through VA Community Care for chiropractic care and conservative spine and joint support in St. Augustine.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
                  <div className="w-full rounded-2xl bg-white/10 border border-white/20 p-6 text-center">
                    <p className="text-base text-[#F4FAFC]/90 mb-2">
                      Speak with our St. Augustine office:
                    </p>
                    <p className="font-serif-display text-3xl font-bold text-white tabular-nums mb-5">
                      (904) 679-1963
                    </p>
                    <a
                      href="tel:+19046791963"
                      className="w-full min-h-[54px] px-6 py-3.5 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-bold text-lg inline-flex items-center justify-center gap-3 shadow-md transition-colors"
                    >
                      <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                      <span>Call Our Office</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. MEET DR. HORNOCKER
            - Photo placeholder ("Photo: Dr. Hornocker")
            - Short bio using ONLY the client facts provided
            - Never write "board-certified"
            =================================================================== */}
        <section id="about" className="py-16 sm:py-24 bg-[#F4FAFC] scroll-mt-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Photo: Dr. Hornocker */}
              <div className="lg:col-span-5">
                <PhotoPlaceholder
                  label="Photo: Dr. Hornocker"
                  sublabel="Portrait of Dr. John Hornocker at Matanzas Chiropractic and Spine Injury Center."
                  aspectClass="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/4]"
                />
              </div>

              {/* Right Column: Strict Client-Facts Bio */}
              <div className="lg:col-span-7">
                <p className="text-base font-semibold text-[#1B3A8A] uppercase tracking-wider">
                  Meet the Doctor
                </p>
                <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557] tracking-tight">
                  Dr. John Hornocker
                </h2>
                <p className="mt-2 text-lg font-semibold text-[#1B3A8A]">
                  Trauma-Trained · MRI Interpretation Qualified · Primary Spine Care Certified
                </p>

                <div className="mt-6 space-y-4 text-lg sm:text-xl text-[#101828] leading-relaxed">
                  <p>
                    Dr. John Hornocker cares for patients at{' '}
                    <strong>Matanzas Chiropractic and Spine Injury Center</strong> in St. Augustine, Florida. He is{' '}
                    <strong>trauma-trained</strong>, <strong>MRI interpretation qualified</strong>, and{' '}
                    <strong>primary spine care certified</strong>.
                  </p>
                  <p>
                    His clinical practice focuses on conservative care for back pain, neck pain, sciatica, whiplash, bulging disc, carpal tunnel, shoulder pain, elbow pain, and foot pain — offering chiropractic care, Shockwave Therapy (ESWT), cold laser therapy, and massage, as well as caring for VA Community Care patients.
                  </p>
                </div>

                {/* 3 Credential Highlights */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white border border-[#1B3A8A]/15 p-4">
                    <p className="font-serif-display text-xl font-bold text-[#0F2557]">
                      Trauma-trained
                    </p>
                    <p className="text-base text-[#344054] mt-1">
                      Focused evaluation for spine &amp; injury care.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-[#1B3A8A]/15 p-4">
                    <p className="font-serif-display text-xl font-bold text-[#0F2557]">
                      MRI interpretation qualified
                    </p>
                    <p className="text-base text-[#344054] mt-1">
                      Qualified assessment of spinal MRI studies.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-[#1B3A8A]/15 p-4">
                    <p className="font-serif-display text-xl font-bold text-[#0F2557]">
                      Primary spine care certified
                    </p>
                    <p className="text-base text-[#344054] mt-1">
                      Dedicated conservative spine care credentials.
                    </p>
                  </div>
                </div>

                <SectionCallPrompt promptText="Schedule your evaluation with Dr. John Hornocker" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. REVIEWS SECTION
            - Placeholder cards only, clearly labeled "Real patient reviews go here".
            - No fake reviews or testimonials, no invented ratings.
            =================================================================== */}
        <section id="reviews" className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-base font-semibold text-[#1B3A8A] uppercase tracking-wider">
                Patient Feedback
              </p>
              <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557] tracking-tight">
                Patient Reviews
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-[#344054]">
                Reserved display slots for verified patient reviews from Matanzas Chiropractic and Spine Injury Center.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((slot) => (
                <div
                  key={slot}
                  className="rounded-2xl bg-[#F4FAFC] border-2 border-dashed border-[#1B3A8A]/25 p-7 sm:p-8 flex flex-col justify-between min-h-[240px]"
                >
                  <div>
                    <div className="flex items-center justify-between text-sm font-medium text-[#344054] pb-4 border-b border-[#1B3A8A]/10">
                      <span>Verified Review Slot #{slot}</span>
                      <span className="font-mono text-xs text-[#1B3A8A]">PLACEHOLDER</span>
                    </div>
                    <p className="mt-6 font-serif-display text-2xl font-bold text-[#0F2557]">
                      Real patient reviews go here
                    </p>
                    <p className="mt-2 text-base sm:text-lg text-[#344054]">
                      This card is reserved exclusively for an authentic, verified patient review prior to launch.
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-medium text-[#1B3A8A]">
                    Matanzas Chiropractic and Spine Injury Center · St. Augustine, FL
                  </p>
                </div>
              ))}
            </div>

            <SectionCallPrompt promptText="Ready to speak with our office about your spine or joint concern?" />
          </div>
        </section>

        {/* ===================================================================
            10. FAQ ACCORDION
            Topics: cost, insurance, VA, PIP, does shockwave hurt,
            what to expect at first visit.
            =================================================================== */}
        <section id="faq" className="py-16 sm:py-24 bg-[#F4FAFC] scroll-mt-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-base font-semibold text-[#1B3A8A] uppercase tracking-wider">
                Common Questions
              </p>
              <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-[#344054]">
                Clear answers about pricing, insurance verification, VA Community Care, Florida PIP, Shockwave Therapy (ESWT), and your first visit.
              </p>
            </div>

            <div className="mt-10 space-y-4 max-w-4xl">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-white border border-[#1B3A8A]/15 overflow-hidden"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="w-full min-h-[64px] px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F4FAFC]/60 transition-colors"
                      >
                        <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#0F2557]">
                          {faq.question}
                        </span>
                        <span
                          className={`w-10 h-10 rounded-xl border border-[#1B3A8A]/20 flex items-center justify-center shrink-0 text-[#1B3A8A] transition-transform duration-150 ${
                            isOpen ? 'rotate-180 bg-[#F4FAFC]' : 'bg-white'
                          }`}
                          aria-hidden="true"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-lg text-[#101828] leading-relaxed border-t border-[#1B3A8A]/10">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <SectionCallPrompt promptText="Still have a question? Call our St. Augustine office directly." />
          </div>
        </section>

        {/* ===================================================================
            11. LOCATION AND HOURS
            Map placeholder, address, hours, email, call button.
            =================================================================== */}
        <section id="contact" className="py-16 sm:py-24 bg-white scroll-mt-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="text-base font-semibold text-[#1B3A8A] uppercase tracking-wider">
                Visit Our St. Augustine Clinic
              </p>
              <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557] tracking-tight">
                Location &amp; Office Hours
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Address, Phone, Email, Hours */}
              <div className="lg:col-span-6 rounded-2xl bg-[#F4FAFC] border border-[#1B3A8A]/15 p-6 sm:p-9 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0F2557]">
                      Matanzas Chiropractic and Spine Injury Center
                    </h3>
                    <p className="text-lg text-[#344054] mt-1">Dr. John Hornocker</p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-[#1B3A8A]/12 text-lg">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-6 h-6 text-[#1B3A8A] shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-[#0F2557]">Clinic Address</p>
                        <p className="text-[#101828]">
                          2825 Lewis Speedway #101, St. Augustine, FL 32084
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone className="w-6 h-6 text-[#1B7F46] shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-[#0F2557]">Phone</p>
                        <a
                          href="tel:+19046791963"
                          className="text-xl font-bold text-[#1B3A8A] hover:underline tabular-nums"
                        >
                          (904) 679-1963
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail className="w-6 h-6 text-[#1B3A8A] shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-[#0F2557]">Email</p>
                        <a
                          href="mailto:staugchiro@matanzaschiro.com"
                          className="text-[#1B3A8A] hover:underline break-all"
                        >
                          staugchiro@matanzaschiro.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Hours Table */}
                  <div className="pt-4 border-t border-[#1B3A8A]/12">
                    <div className="flex items-center gap-2.5 mb-3">
                      <Clock className="w-6 h-6 text-[#1B3A8A]" aria-hidden="true" />
                      <h4 className="font-serif-display text-2xl font-bold text-[#0F2557]">
                        Office Hours
                      </h4>
                    </div>
                    <dl className="divide-y divide-[#1B3A8A]/10 text-lg tabular-nums">
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="font-medium text-[#101828]">Monday</dt>
                        <dd className="font-semibold text-[#0F2557]">10:00 AM – 5:00 PM</dd>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="font-medium text-[#101828]">Tuesday – Thursday</dt>
                        <dd className="font-semibold text-[#0F2557]">8:30 AM – 5:00 PM</dd>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="font-medium text-[#101828]">Friday</dt>
                        <dd className="font-semibold text-[#0F2557]">8:00 AM – 12:00 PM</dd>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="font-medium text-[#344054]">Saturday / Sunday</dt>
                        <dd className="font-medium text-[#344054]">Closed</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <a
                  href="tel:+19046791963"
                  className="mt-8 w-full min-h-[56px] px-7 py-4 rounded-xl bg-[#1B7F46] hover:bg-[#146336] text-white font-bold text-lg sm:text-xl inline-flex items-center justify-center gap-3 shadow-sm transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">Call (904) 679-1963</span>
                </a>
              </div>

              {/* Right Column: Architectural Map Placeholder */}
              <div
                className="lg:col-span-6 rounded-2xl bg-[#F4FAFC] border border-[#1B3A8A]/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]"
                role="region"
                aria-label="Map Placeholder for 2825 Lewis Speedway #101, St. Augustine, FL 32084"
              >
                {/* Stylized Road Grid SVG Background */}
                <svg
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-25"
                  viewBox="0 0 600 500"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <rect width="600" height="500" fill="#E6F4F9" />
                  <path d="M-20 120 L620 260" stroke="#1B3A8A" strokeWidth="10" strokeOpacity="0.25" />
                  <path d="M140 -20 L260 520" stroke="#1B3A8A" strokeWidth="8" strokeOpacity="0.2" />
                  <path d="M440 -20 L390 520" stroke="#3DB7DC" strokeWidth="6" strokeOpacity="0.35" />
                  <path d="M-20 380 C180 340, 390 410, 620 330" stroke="#5DC48B" strokeWidth="5" strokeOpacity="0.4" />
                </svg>

                <div className="relative z-10 flex items-center justify-between text-sm font-semibold text-[#0F2557]">
                  <span>ST. AUGUSTINE, FLORIDA · 32084</span>
                  <span className="font-mono text-xs text-[#1B3A8A]">MAP PLACEHOLDER</span>
                </div>

                <div className="relative z-10 my-auto py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B3A8A] text-white flex items-center justify-center shadow-md mb-4">
                    <MapPin className="w-8 h-8 text-[#5DC48B]" aria-hidden="true" />
                  </div>
                  <p className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0F2557]">
                    Map Placeholder
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#101828]">
                    2825 Lewis Speedway #101
                  </p>
                  <p className="text-lg text-[#344054]">St. Augustine, FL 32084</p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#1B3A8A]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-[#344054]">
                  <span>Conveniently located on Lewis Speedway in St. Augustine</span>
                  <span className="font-semibold text-[#0F2557] tabular-nums">(904) 679-1963</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12A. FINAL BIG CALL CTA
            =================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#1B3A8A] via-[#0F2557] to-[#1B3A8A] text-white py-16 sm:py-24">
          <div
            className="absolute inset-x-0 top-0 pointer-events-none opacity-30 select-none"
            aria-hidden="true"
          >
            <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <path
                d="M0,40 C480,100 960,-20 1440,50"
                stroke="#3DB7DC"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,65 C480,115 960,5 1440,75"
                stroke="#5DC48B"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base sm:text-lg font-semibold uppercase tracking-widest text-[#5DC48B]">
              Matanzas Chiropractic and Spine Injury Center
            </p>
            <h2
              className="mt-3 font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Call Today to Schedule Your Appointment
            </h2>
            <p className="mt-4 text-xl sm:text-2xl text-[#F4FAFC]/90 max-w-2xl mx-auto">
              Speak directly with our St. Augustine office for chiropractic care, Shockwave Therapy (ESWT), auto accident evaluation, or VA Community Care assistance.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19046791963"
                className="w-full sm:w-auto min-h-[60px] px-10 py-4 rounded-2xl bg-[#1B7F46] hover:bg-[#146336] text-white font-bold text-xl sm:text-2xl inline-flex items-center justify-center gap-3.5 shadow-lg transition-colors tabular-nums"
              >
                <Phone className="w-6 h-6 shrink-0" aria-hidden="true" />
                <span>Call (904) 679-1963</span>
              </a>
            </div>

            <p className="mt-6 text-base sm:text-lg text-[#F4FAFC]/85 tabular-nums">
              2825 Lewis Speedway #101, St. Augustine, FL 32084 · Mon 10–5, Tue–Thu 8:30–5, Fri 8–12
            </p>
          </div>
        </section>
      </main>

      {/* =====================================================================
          12B. FOOTER
          Logo, name, address, phone, email, hours, nav links.
          ===================================================================== */}
      <footer className="bg-[#0F2557] text-white border-t border-white/15 pt-14 pb-24 lg:pb-14">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
            {/* Column 1: Logo & Clinic Overview */}
            <div className="lg:col-span-5 space-y-4">
              <MatanzasLogo variant="dark" />
              <p className="text-base sm:text-lg text-[#F4FAFC]/85 max-w-md pt-2">
                Matanzas Chiropractic and Spine Injury Center · Dr. John Hornocker (trauma-trained, MRI interpretation qualified, primary spine care certified).
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-3">
              <h3 className="font-serif-display text-xl font-bold text-white mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-base sm:text-lg text-[#F4FAFC]/90">
                <li>
                  <a href="#services" className="hover:text-[#3DB7DC] transition-colors">
                    Services &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#shockwave" className="hover:text-[#3DB7DC] transition-colors">
                    Shockwave Therapy (ESWT)
                  </a>
                </li>
                <li>
                  <a href="#auto-accident" className="hover:text-[#3DB7DC] transition-colors">
                    Auto Accident Care
                  </a>
                </li>
                <li>
                  <a href="#va-care" className="hover:text-[#3DB7DC] transition-colors">
                    VA Community Care
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#3DB7DC] transition-colors">
                    Meet Dr. Hornocker
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#3DB7DC] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#3DB7DC] transition-colors">
                    Location &amp; Hours
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Hours */}
            <div className="lg:col-span-4 space-y-3 text-base sm:text-lg text-[#F4FAFC]/90">
              <h3 className="font-serif-display text-xl font-bold text-white mb-4">
                Contact &amp; Hours
              </h3>
              <p>2825 Lewis Speedway #101, St. Augustine, FL 32084</p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+19046791963"
                  className="font-bold text-white underline underline-offset-4 hover:text-[#5DC48B] tabular-nums"
                >
                  (904) 679-1963
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:staugchiro@matanzaschiro.com"
                  className="underline underline-offset-4 hover:text-[#3DB7DC]"
                >
                  staugchiro@matanzaschiro.com
                </a>
              </p>
              <div className="pt-2 text-base text-[#F4FAFC]/85 tabular-nums">
                <p className="font-semibold text-white">Hours:</p>
                <p>Mon 10–5 · Tue–Thu 8:30–5 · Fri 8–12 · Sat/Sun closed</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#F4FAFC]/75">
            <p>© {new Date().getFullYear()} Matanzas Chiropractic and Spine Injury Center. All rights reserved.</p>
            <p>2825 Lewis Speedway #101, St. Augustine, FL 32084 · (904) 679-1963</p>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MOBILE STICKY BOTTOM BAR
          "Call Now (904) 679-1963" always visible on mobile viewports
          ===================================================================== */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#0F2557] border-t border-[#3DB7DC]/40 px-3 py-2 shadow-2xl">
        <a
          href="tel:+19046791963"
          className="w-full min-h-[48px] rounded-xl bg-[#1B7F46] active:bg-[#146336] text-white font-bold text-lg flex items-center justify-center gap-2.5 shadow-sm tabular-nums"
        >
          <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span>Call Now (904) 679-1963</span>
        </a>
      </div>
    </div>
  );
}
