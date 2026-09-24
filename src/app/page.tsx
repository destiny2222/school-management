"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isStoriesModalOpen, setIsStoriesModalOpen] = useState(false);
  const [isEschoolModalOpen, setIsEschoolModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<"all" | "academics" | "arts" | "sports">("all");
  const [activeEschoolTab, setActiveEschoolTab] = useState<"grades" | "fees" | "attendance" | "timetable">("grades");

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    gradeLevel: "primary",
    programType: "regular",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsEnrollModalOpen(false);
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        studentName: "",
        gradeLevel: "primary",
        programType: "regular",
        message: "",
      });
    }, 2800);
  };

  const galleryItems = [
    { title: "Academic Honors & Prize Giving", category: "academics", image: "/images/excellence.jpg" },
    { title: "Montessori Art Studio & Creative Painting", category: "arts", image: "/images/exploration.jpg" },
    { title: "School Assembly & Celebrations", category: "sports", image: "/images/expression.jpg" },
    { title: "Summer Holiday Camp & Sports Activities", category: "sports", image: "/images/celebration.jpg" },
    { title: "Modern Science & Robotics Lab", category: "academics", image: "/images/hero.jpg" },
    { title: "Happy Parents & Ward Milestones", category: "academics", image: "/images/parent-testimonial.jpg" },
  ];

  const filteredGallery = activeGalleryTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryTab);

  return (
    <main className="bg-white min-h-screen text-[#0B1B3D] relative font-sans">
      {/* ────────────────────────────────────────────────────────
          MODULAR HEADER COMPONENT
      ──────────────────────────────────────────────────────── */}
      <Header
        onOpenEnroll={() => setIsEnrollModalOpen(true)}
        onOpenGallery={() => setIsGalleryModalOpen(true)}
        onOpenStory={() => setIsStoryModalOpen(true)}
        onOpenEschool={() => setIsEschoolModalOpen(true)}
        onOpenStories={() => setIsStoriesModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* ────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION 
      ──────────────────────────────────────────────────────── */}
      {/* ────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION (KIDDOLEARN DESIGN REPLICATION)
      ──────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#1E88E5] via-[#1976D2] to-[#0284C7] pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24">
        {/* Subtle geometric graph-paper grid pattern matching KiddoLearn */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        {/* Soft floating background clouds and sunshine glow */}
        <div className="absolute top-1/4 -left-20 w-80 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-60 bg-sky-200/25 blur-3xl rounded-full pointer-events-none" />

        {/* Decorative corner doodle marks */}
        <div className="hidden lg:block absolute bottom-12 left-10 text-[#FACC15] select-none pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="8" y1="20" x2="20" y2="20" />
            <line x1="12" y1="12" x2="20" y2="20" />
            <line x1="12" y1="28" x2="20" y2="20" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* ──────────────── LEFT COLUMN: TYPOGRAPHY & CTAs ──────────────── */}
            <div className="lg:col-span-7 text-left">
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
                <span className="text-white/85 text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase">
                  ONLINE SCHOOL FOR BRIGHT MINDS
                </span>
              </div>

              {/* Bold 4-Line Punchy Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[78px] font-black text-white uppercase tracking-tight leading-[1.02]">
                LEARNING<br />
                TODAY{" "}
                <span className="inline-block relative text-[#FACC15] -rotate-6 translate-y-[-4px] align-middle">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FACC15] inline-block ml-1" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                    <line x1="14" y1="2" x2="14" y2="7" />
                    <line x1="5.5" y1="5.5" x2="9.5" y2="9.5" />
                    <line x1="22.5" y1="5.5" x2="18.5" y2="9.5" />
                  </svg>
                </span>
                <br />
                <span className="text-[#FACC15]">
                  A BRIGHTER<br />
                  TOMORROW
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base sm:text-lg text-white/90 max-w-xl leading-relaxed font-medium">
                Fun, flexible, and effective education for curious kids. Help your child explore, learn, and grow from anywhere at <strong>Bethel Montessori Academy</strong>, Benin City.
              </p>

              {/* Action Buttons: Get Started + Watch Video */}
              <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
                <button
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#0B1B3D] hover:bg-[#D90429] text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Login</span>
                  <span className="text-base">→</span>
                </button>
              </div>

              {/* Social Proof Trust Stack */}
              <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-white">
                    <Image src="/hero-background.jpg" width={36} height={36} className="object-cover w-full h-full object-top" alt="Parent" />
                  </span>
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-white">
                    <Image src="/images/parent-testimonial.jpg" width={36} height={36} className="object-cover w-full h-full" alt="Parent" />
                  </span>
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-white">
                    <Image src="/images/excellence.jpg" width={36} height={36} className="object-cover w-full h-full" alt="Student" />
                  </span>
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-white">
                    <Image src="/images/celebration.jpg" width={36} height={36} className="object-cover w-full h-full" alt="Student" />
                  </span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  <span className="text-[#FACC15]">★★★★★</span> Trusted by 50,000+ happy parents
                </div>
              </div>
            </div>

            {/* ──────────────── RIGHT COLUMN: THE STUDENTS IMAGE & DOODLES ──────────────── */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              {/* Paper Airplane Flying Doodle with Dashed Loop Trail */}
              <div className="absolute -top-12 sm:-top-16 right-4 sm:right-10 pointer-events-none z-20">
                <svg width="140" height="90" viewBox="0 0 140 90" fill="none" className="text-white/80">
                  {/* Dashed wind trail */}
                  <path
                    d="M10 70 C 35 85, 60 70, 70 50 C 80 30, 95 35, 110 25"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                    fill="none"
                  />
                  {/* Paper airplane */}
                  <g transform="translate(105, 10) rotate(-15)">
                    <path
                      d="M0 0 L32 10 L8 18 L0 0 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 18 L16 12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>

              {/* Angled Yellow Post-it Card matching KiddoLearn */}
              <div className="absolute -right-3 sm:-right-8 top-1/4 z-20 bg-[#FACC15] text-[#0B1B3D] px-5 py-4 rounded-2xl shadow-2xl rotate-6 border-2 border-white max-w-[170px] select-none">
                <p className="font-extrabold text-sm sm:text-base leading-tight">
                  Smaller<br />
                  Lessons<br />
                  <span className="text-lg">Bigger</span><br />
                  Futures
                </p>
                <div className="text-xl font-bold mt-1 text-[#0B1B3D]">:)</div>
              </div>

              {/* Blue hand-drawn doodle accent on right */}
              <div className="absolute top-1/2 -right-8 text-[#0B1B3D] pointer-events-none select-none z-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M18 6 L6 18 M12 6 L18 6 L18 12" />
                </svg>
              </div>

              {/* Students Photo Card */}
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/4.3] rounded-3xl sm:rounded-[38px] overflow-hidden shadow-2xl border-4 border-white bg-sky-100 z-10 group">
                <Image
                  src="/images/hero.jpg"
                  alt="Bethel Montessori Academy Students"
                  fill
                  priority
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle soft bottom gradient to keep frame clean */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Campus Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/80 flex items-center justify-between text-xs font-bold text-[#0B1B3D]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span>19 Akenzua Rd, Benin City</span>
                  </div>
                  <span className="text-[#0B286D] uppercase tracking-wide">Crèche to SSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft bottom wave / transition into Section 2 */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <svg className="w-full h-8 sm:h-12 text-white fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path d="M0,0 C320,40 420,48 720,48 C1020,48 1120,40 1440,0 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 2: THE 3 PILLARS (Excellence, Exploration, Expression)
      ──────────────────────────────────────────────────────── */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          {/* Background Watermark Open Book */}
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 w-[550px] h-[550px] opacity-10">
            <Image
              src="/section2-logo.svg"
              alt="Bethel Montessori Academy background logo"
              width={550}
              height={550}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Section Header */}
          <div className="mb-12 text-center md:text-left">
            <span className="text-[#0B286D] font-extrabold text-sm tracking-widest uppercase bg-[#EBF2FE] px-3 py-1 rounded-md">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1B3D] mt-3">
              Built on Three Pillars of Foundation
            </h2>
          </div>

          {/* 3 Pillars Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Excellence */}
            <div className="relative aspect-[3/4] group overflow-hidden rounded-xl shadow-lg border border-black/5 bg-[#0B286D]">
              <Image
                alt="Excellence: An exemplary student with academic achievement"
                src="/images/excellence.jpg"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-500"></div>

              {/* Vertical Text - Default state */}
              <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                <h3 className="text-white text-4xl font-bold vertical-text">
                  Excellence
                </h3>
              </div>

              {/* Hover Overlay with Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B286D]/95 via-[#0B286D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F59E0B] text-sm font-bold tracking-wider uppercase mb-1">
                    Pillar One
                  </span>
                  <h3 className="text-white text-4xl font-extrabold mb-4">
                    Excellence
                  </h3>
                  <p className="text-white/95 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    We nurture and cultivate a spirit of excellence in every child, pushing boundaries and setting new standards in academics, morals, and character.
                  </p>
                  <button
                    onClick={() => setIsEschoolModalOpen(true)}
                    className="mt-4 inline-flex items-center text-xs font-bold text-[#F59E0B] hover:underline"
                  >
                    Explore Academic Standards →
                  </button>
                </div>
              </div>
            </div>

            {/* Pillar 2: Exploration */}
            <div className="relative aspect-[3/4] group overflow-hidden rounded-xl shadow-lg border border-black/5 bg-[#0B286D]">
              <Image
                alt="Exploration: A young student paints and discovers art"
                src="/images/exploration.jpg"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-500"></div>

              {/* Vertical Text - Default state */}
              <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                <h3 className="text-white text-4xl font-bold vertical-text">
                  Exploration
                </h3>
              </div>

              {/* Hover Overlay with Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B286D]/95 via-[#0B286D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F59E0B] text-sm font-bold tracking-wider uppercase mb-1">
                    Pillar Two
                  </span>
                  <h3 className="text-white text-4xl font-extrabold mb-4">
                    Exploration
                  </h3>
                  <p className="text-white/95 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    Through Montessori self-directed exploration, we encourage children to explore their interests, ask questions, conduct experiments, and unlock their hidden talents.
                  </p>
                  <button
                    onClick={() => setIsGalleryModalOpen(true)}
                    className="mt-4 inline-flex items-center text-xs font-bold text-[#F59E0B] hover:underline"
                  >
                    View Student Creative Work →
                  </button>
                </div>
              </div>
            </div>

            {/* Pillar 3: Expression */}
            <div className="relative aspect-[3/4] group overflow-hidden rounded-xl shadow-lg border border-black/5 bg-[#0B286D]">
              <Image
                alt="Expression: A large group of happy, smiling students"
                src="/images/expression.jpg"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-500"></div>

              {/* Vertical Text - Default state */}
              <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                <h3 className="text-white text-4xl font-bold vertical-text">
                  Express<span className="text-[#F59E0B]">i</span>on
                </h3>
              </div>

              {/* Hover Overlay with Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B286D]/95 via-[#0B286D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F59E0B] text-sm font-bold tracking-wider uppercase mb-1">
                    Pillar Three
                  </span>
                  <h3 className="text-white text-4xl font-extrabold mb-4">
                    Express<span className="text-[#F59E0B]">i</span>on
                  </h3>
                  <p className="text-white/95 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    We create a safe space for children to freely express themselves, develop their unique voices, public speaking confidence, and leadership abilities.
                  </p>
                  <button
                    onClick={() => setIsEnrollModalOpen(true)}
                    className="mt-4 inline-flex items-center text-xs font-bold text-[#F59E0B] hover:underline"
                  >
                    Join Our Community →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 3: ADMISSIONS CALLOUT (Royal Blue #0B286D with Gold & Red)
      ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0B286D] text-white overflow-hidden py-16 md:py-24">
        {/* Crest Watermark */}
        <div className="absolute top-0 right-0 h-full w-2/3 md:w-1/2 opacity-15 pointer-events-none flex items-center justify-end">
          <Image
            src="/section3-logo.svg"
            alt="Bethel Montessori Academy crest watermark"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[#F59E0B] font-bold text-sm uppercase tracking-wider mb-2">
              HURRY!!! It&apos;s Summer & Next Session Time
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              The best education you can possibly give your wards
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
              We&apos;re currently open for registration! Visit us at <strong>19 Akenzua Road, Benin City</strong> or enroll online. Operating hours: <strong>8AM - 3PM Monday to Friday</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsEnrollModalOpen(true)}
                className="btn-enroll-red text-white text-base font-extrabold px-8 py-3.5 rounded-md uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
              >
                <span>Check Admission Portal</span>
                <span>→</span>
              </button>
              <button
                onClick={() => setIsStoriesModalOpen(true)}
                className="px-6 py-3.5 border-2 border-white/50 hover:border-white text-white font-bold rounded-md transition-colors cursor-pointer"
              >
                Parent Testimonials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 4: TESTIMONIAL & eSCHOOL PLATFORM (#EBF2FE)
      ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EBF2FE] text-[#0B1B3D] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 md:space-y-32">
          
          {/* Row 1: Parent Testimonial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 items-center">
            {/* Quote Block */}
            <div className="relative order-2 md:order-1 pt-4">
              <span className="absolute -top-10 -left-4 text-8xl md:text-9xl font-serif font-bold text-[#0B286D]/20 select-none">
                “
              </span>
              <blockquote className="relative z-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#0B1B3D]">
                  I didn&apos;t need a seer to see that my child&apos;s remarkable progress at Bethel Montessori Academy is already setting her on the path to a brilliant future.
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-1 bg-[#D90429]"></div>
                  <div>
                    <div className="text-xl font-bold text-[#0B286D]">Mrs Amaka O.</div>
                    <div className="text-sm font-semibold text-[#0B1B3D]/70">Parent of Grade 5 Pupil • Benin City</div>
                  </div>
                </footer>
              </blockquote>
              <button
                onClick={() => setIsStoriesModalOpen(true)}
                className="inline-block mt-8 text-lg font-bold text-[#0B286D] hover:text-[#D90429] hover:underline transition-all cursor-pointer"
              >
                See more stories from Parents →
              </button>
            </div>

            {/* Parent Photo */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative p-3 sm:p-4 bg-white rounded-2xl shadow-xl border border-blue-100">
                <Image
                  alt="Smiling parent Mrs Amaka and daughter at Bethel Montessori Academy"
                  src="/images/parent-testimonial.jpg"
                  width={380}
                  height={380}
                  className="rounded-xl object-cover aspect-square shadow-sm"
                />
                <div className="absolute -bottom-3 -left-3 bg-[#0B286D] text-white px-4 py-2 rounded-lg text-xs font-extrabold shadow-lg flex items-center gap-1.5 border border-[#F59E0B]">
                  <span className="text-[#F59E0B]">★</span>
                  <span>Verified Bethel PTA Parent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: eSchool App Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Tablet Mockup */}
            <div className="flex justify-center group cursor-pointer" onClick={() => setIsEschoolModalOpen(true)}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border border-[#0B286D]/15 bg-white">
                <Image
                  alt="Screenshot of the Bethel Montessori eSchool learning platform"
                  src="/images/eschool-platform.jpg"
                  width={540}
                  height={420}
                  className="rounded-2xl object-contain"
                />
                <div className="absolute inset-0 bg-[#0B286D]/0 group-hover:bg-[#0B286D]/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#0B286D] px-5 py-2.5 rounded-full font-bold text-sm shadow-xl">
                    Click to Open Interactive Demo
                  </span>
                </div>
              </div>
            </div>

            {/* App Details */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#0B286D] text-white text-xs font-bold uppercase rounded-md mb-3 tracking-wider">
                Digital Campus Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#0B1B3D]">
                eSchool app for parents and students
              </h2>
              <p className="mt-5 text-lg text-[#0B1B3D]/80 leading-relaxed font-normal">
                Get our comprehensive Bethel Montessori eSchool application on Android, iOS and directly in modern web browsers.
              </p>
              <p className="mt-4 text-lg text-[#0B1B3D]/80 leading-relaxed font-normal">
                Check wards performance, pay school fees securely, monitor real-time attendance, and view termly report sheets. Students can also access learning materials and practice assignments with ease.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsEschoolModalOpen(true)}
                  className="px-8 py-3.5 bg-[#0B286D] hover:bg-[#071B49] text-white font-bold rounded-md transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Launch eSchool Preview</span>
                  <span className="text-[#F59E0B]">📱</span>
                </button>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-6 py-3.5 border-2 border-[#0B286D] text-[#0B286D] font-bold rounded-md hover:bg-[#0B286D] hover:text-white transition-all cursor-pointer"
                >
                  Portal Login
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 5: THE JOURNEY TO EXCELLENCE BANNER
      ──────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] w-full flex items-center justify-center text-center overflow-hidden">
        <Image
          alt="Bethel Montessori children dancing and celebrating excellence"
          src="/images/celebration.jpg"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1B3D]/75"></div>

        <div className="relative z-20 px-6 max-w-4xl text-white">
          <span className="inline-block text-[#F59E0B] text-sm md:text-base font-bold tracking-widest uppercase mb-3">
            Start Today
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight drop-shadow-md">
            The journey to excellence begins here.
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Give your child the gift of world-class Montessori foundation, moral grounding, and lifelong confidence at Bethel Montessori Academy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block px-10 py-3.5 bg-white text-[#0B286D] font-extrabold rounded-lg shadow-xl hover:bg-gray-100 hover:scale-105 transition-all uppercase tracking-wider text-sm"
            >
              Contact us for more inquiries
            </a>
            <button
              onClick={() => setIsEnrollModalOpen(true)}
              className="btn-enroll-red text-white font-extrabold px-8 py-3.5 rounded-lg shadow-xl cursor-pointer uppercase tracking-wider text-sm"
            >
              Apply Online Now
            </button>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          MODULAR FOOTER COMPONENT
      ──────────────────────────────────────────────────────── */}
      <Footer
        onOpenEnroll={() => setIsEnrollModalOpen(true)}
        onOpenEschool={() => setIsEschoolModalOpen(true)}
        onOpenStory={() => setIsStoryModalOpen(true)}
        onOpenStories={() => setIsStoriesModalOpen(true)}
        onOpenGallery={() => setIsGalleryModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* ────────────────────────────────────────────────────────
          IMPROVEMENT MODAL 1: INTERACTIVE ENROLLMENT DRAWER
      ──────────────────────────────────────────────────────── */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up border border-gray-100 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="bg-[#0B286D] text-white p-6 relative">
              <button
                onClick={() => setIsEnrollModalOpen(false)}
                className="absolute top-5 right-5 text-white/80 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>
              <div className="flex items-center gap-3">
                <Image src="/brand-icon.svg" width={42} height={42} alt="Crest" />
                <div>
                  <h3 className="text-2xl font-bold">Admission & Registration</h3>
                  <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider">
                    Bethel Montessori Academy • 19 Akenzua Rd Benin City
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B1B3D]">Application Submitted!</h4>
                  <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.parentName}</span>. Your application for <span className="font-semibold">{formData.studentName}</span> has been received. Our admission officer will call you at <span className="font-semibold">{formData.phone}</span> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Program of Interest *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`p-3 rounded-lg border text-xs font-bold cursor-pointer text-center ${formData.programType === "regular" ? "border-[#0B286D] bg-[#EBF2FE] text-[#0B286D]" : "border-gray-200 text-gray-700"}`}>
                        <input
                          type="radio"
                          name="programType"
                          value="regular"
                          checked={formData.programType === "regular"}
                          onChange={() => setFormData({ ...formData, programType: "regular" })}
                          className="sr-only"
                        />
                        🎓 Regular School Admission
                      </label>
                      <label className={`p-3 rounded-lg border text-xs font-bold cursor-pointer text-center ${formData.programType === "summer" ? "border-[#D90429] bg-red-50 text-[#D90429]" : "border-gray-200 text-gray-700"}`}>
                        <input
                          type="radio"
                          name="programType"
                          value="summer"
                          checked={formData.programType === "summer"}
                          onChange={() => setFormData({ ...formData, programType: "summer" })}
                          className="sr-only"
                        />
                        ☀️ Summer Holiday School
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Mrs. Amaka Okonkwo"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0B286D] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. 08052087011"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0B286D] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. amaka@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0B286D] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Child&apos;s Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Chidera Okonkwo"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0B286D] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Target Class Level *
                    </label>
                    <select
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0B286D] focus:border-transparent outline-none bg-white"
                    >
                      <option value="creche">Montessori Creche & Toddler (Ages 1 - 2)</option>
                      <option value="nursery">Montessori Nursery / Kindergarten (Ages 3 - 5)</option>
                      <option value="primary">Primary 1 - 6 (Ages 6 - 11)</option>
                      <option value="jss">Junior Secondary (JSS 1 - 3)</option>
                      <option value="sss_science">Senior Secondary (SSS 1 - 3 Science)</option>
                      <option value="sss_arts">Senior Secondary (SSS 1 - 3 Arts & Social Sc.)</option>
                      <option value="sss_comm">Senior Secondary (SSS 1 - 3 Commercial)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Special Notes or Inquiries (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your child or any special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0B286D] focus:border-transparent outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 btn-enroll-red text-white font-extrabold rounded-lg shadow-lg text-base cursor-pointer uppercase tracking-wider"
                    >
                      Submit Registration
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-2 font-medium">
                      Address: 19 Akenzua Road Benin City • Call: 08052087011 | 08116652915
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          IMPROVEMENT MODAL 2: INTERACTIVE eSCHOOL LIVE DEMO
      ──────────────────────────────────────────────────────── */}
      {isEschoolModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="bg-[#0B286D] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B] text-[#0B1B3D] flex items-center justify-center font-black text-lg">
                  📖
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bethel Montessori eSchool Portal</h3>
                  <p className="text-blue-200 text-xs">Live Interactive System Preview • 19 Akenzua Rd</p>
                </div>
              </div>
              <button
                onClick={() => setIsEschoolModalOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50 px-6 gap-6 text-sm font-semibold text-gray-600 overflow-x-auto">
              <button
                onClick={() => setActiveEschoolTab("grades")}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                  activeEschoolTab === "grades" ? "border-[#0B286D] text-[#0B286D] font-bold" : "border-transparent"
                }`}
              >
                📊 Termly Report Card
              </button>
              <button
                onClick={() => setActiveEschoolTab("fees")}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                  activeEschoolTab === "fees" ? "border-[#0B286D] text-[#0B286D] font-bold" : "border-transparent"
                }`}
              >
                💳 Fees & Payment
              </button>
              <button
                onClick={() => setActiveEschoolTab("attendance")}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                  activeEschoolTab === "attendance" ? "border-[#0B286D] text-[#0B286D] font-bold" : "border-transparent"
                }`}
              >
                📅 Attendance Record
              </button>
              <button
                onClick={() => setActiveEschoolTab("timetable")}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                  activeEschoolTab === "timetable" ? "border-[#0B286D] text-[#0B286D] font-bold" : "border-transparent"
                }`}
              >
                📚 Class Timetable
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 overflow-y-auto">
              {activeEschoolTab === "grades" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#EBF2FE] rounded-xl border border-blue-200">
                    <div>
                      <div className="text-sm font-bold text-[#0B286D]">Student: Chidera Okonkwo (Grade 5 Alpha)</div>
                      <div className="text-xl font-black text-[#0B1B3D]">Overall Term Average: 94.2% (Grade A+)</div>
                    </div>
                    <div className="px-4 py-2 bg-[#0B286D] text-[#F59E0B] text-xs font-black rounded-lg self-start sm:self-auto border border-[#F59E0B]">
                      1st in Class Position
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold">
                        <tr>
                          <th className="p-3">Subject</th>
                          <th className="p-3">CA (40%)</th>
                          <th className="p-3">Exam (60%)</th>
                          <th className="p-3">Total (100%)</th>
                          <th className="p-3">Grade</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-800">
                        <tr>
                          <td className="p-3 font-semibold">Mathematics</td>
                          <td className="p-3">38</td>
                          <td className="p-3">58</td>
                          <td className="p-3 font-bold text-green-700">96%</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded font-bold">A+</span></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">English Language & Phonics</td>
                          <td className="p-3">36</td>
                          <td className="p-3">56</td>
                          <td className="p-3 font-bold text-green-700">92%</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded font-bold">A</span></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Basic Science & Technology</td>
                          <td className="p-3">39</td>
                          <td className="p-3">59</td>
                          <td className="p-3 font-bold text-green-700">98%</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded font-bold">A+</span></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Creative Arts & Crafts</td>
                          <td className="p-3">37</td>
                          <td className="p-3">55</td>
                          <td className="p-3 font-bold text-green-700">92%</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded font-bold">A</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeEschoolTab === "fees" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="text-xs font-bold text-green-800 uppercase">Current Term</div>
                      <div className="text-2xl font-bold text-green-700 mt-1">Paid in Full ✓</div>
                      <div className="text-xs text-green-600 mt-1">Receipt #BMA-2026-8941</div>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <div className="text-xs font-bold text-gray-600 uppercase">Next Term Deposit</div>
                      <div className="text-2xl font-bold text-gray-800 mt-1">₦0 Outstanding</div>
                      <div className="text-xs text-gray-500 mt-1">Due before next session</div>
                    </div>
                    <div className="p-4 bg-[#EBF2FE] border border-blue-200 rounded-xl">
                      <div className="text-xs font-bold text-[#0B286D] uppercase">Payment Methods</div>
                      <div className="text-base font-bold text-[#0B1B3D] mt-1">Cards, Transfer, Bank</div>
                      <div className="text-xs text-[#0B286D] mt-1">Instant SMS & Email Receipts</div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-bold text-[#0B1B3D]">Download Term 1 Clearance Slip</div>
                      <div className="text-xs text-gray-500">Official signed PDF for parent records</div>
                    </div>
                    <button
                      onClick={() => alert("Simulating download: Official Bethel Montessori Academy eClearance PDF generated successfully.")}
                      className="px-4 py-2 bg-[#0B286D] text-white font-semibold text-xs rounded-lg hover:bg-[#071B49] transition-colors"
                    >
                      Download Receipt PDF
                    </button>
                  </div>
                </div>
              )}

              {activeEschoolTab === "attendance" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-xl font-bold text-green-700">
                      98%
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Term Attendance Record</div>
                      <div className="text-sm text-gray-600">Present: 64 days • Absent: 1 day (Excused medical)</div>
                      <div className="text-xs text-green-600 font-semibold mt-1">Excellent punctuality badge awarded!</div>
                    </div>
                  </div>
                </div>
              )}

              {activeEschoolTab === "timetable" && (
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-gray-700">Grade 5 Weekly Schedule (8:00 AM – 3:00 PM)</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <div className="font-bold text-blue-900">8:00 - 8:45 AM</div>
                      <div className="text-gray-700 mt-1">Devotional & Morning Assembly</div>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                      <div className="font-bold text-amber-900">8:45 - 9:45 AM</div>
                      <div className="text-gray-700 mt-1">Mathematics & Mental Drill</div>
                    </div>
                    <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                      <div className="font-bold text-emerald-900">10:00 - 11:00 AM</div>
                      <div className="text-gray-700 mt-1">Montessori Practical Phonics</div>
                    </div>
                    <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
                      <div className="font-bold text-indigo-900">11:30 - 1:00 PM</div>
                      <div className="text-gray-700 mt-1">Science Laboratory / ICT Coding</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-gray-500">
                Available on Google Play Store, Apple App Store, and Web Browser.
              </span>
              <button
                onClick={() => { setIsEschoolModalOpen(false); setIsLoginModalOpen(true); }}
                className="px-6 py-2.5 bg-[#0B286D] text-white font-semibold text-sm rounded-lg hover:bg-[#071B49] transition-colors"
              >
                Login with Student ID
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          IMPROVEMENT MODAL 3: CAMPUS GALLERY LIGHTBOX
      ──────────────────────────────────────────────────────── */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[92vh] flex flex-col">
            <div className="bg-[#0B286D] text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Bethel Montessori Academy Campus Gallery</h3>
                <p className="text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
                  19 Akenzua Road, Benin City • Campus Life & Student Activities
                </p>
              </div>
              <button
                onClick={() => setIsGalleryModalOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50 px-6 py-3 gap-3 text-xs font-bold uppercase tracking-wider overflow-x-auto">
              <button
                onClick={() => setActiveGalleryTab("all")}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeGalleryTab === "all" ? "bg-[#0B286D] text-white font-bold" : "bg-gray-200 text-gray-700"
                }`}
              >
                All Moments
              </button>
              <button
                onClick={() => setActiveGalleryTab("academics")}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeGalleryTab === "academics" ? "bg-[#0B286D] text-white font-bold" : "bg-gray-200 text-gray-700"
                }`}
              >
                Academics & Science
              </button>
              <button
                onClick={() => setActiveGalleryTab("arts")}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeGalleryTab === "arts" ? "bg-[#0B286D] text-white font-bold" : "bg-gray-200 text-gray-700"
                }`}
              >
                Art & Creative Lab
              </button>
              <button
                onClick={() => setActiveGalleryTab("sports")}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeGalleryTab === "sports" ? "bg-[#0B286D] text-white font-bold" : "bg-gray-200 text-gray-700"
                }`}
              >
                Sports & Summer School
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredGallery.map((item, index) => (
                <div key={index} className="group relative rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-semibold leading-snug">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          IMPROVEMENT MODAL 4: PARENT STORIES MODAL
      ──────────────────────────────────────────────────────── */}
      {isStoriesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[90vh] flex flex-col">
            <div className="bg-[#0B286D] text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Parent & Guardian Stories</h3>
                <p className="text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
                  Bethel Montessori Parent Teacher Association (PTA)
                </p>
              </div>
              <button
                onClick={() => setIsStoriesModalOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                <div className="flex items-center gap-1 text-[#F59E0B] text-sm">★★★★★</div>
                <p className="text-gray-800 text-sm leading-relaxed italic">
                  &ldquo;Enrolling my twins at Bethel Montessori Academy on Akenzua Road is the greatest investment our family has made. Their reading fluency, Montessori practical life independence, and moral discipline improved remarkably within their very first term.&rdquo;
                </p>
                <div className="text-xs font-bold text-[#0B286D]">— Dr. Osaze E., Parent of JSS2 Students</div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                <div className="flex items-center gap-1 text-[#F59E0B] text-sm">★★★★★</div>
                <p className="text-gray-800 text-sm leading-relaxed italic">
                  &ldquo;The eSchool mobile app makes life so stress-free. I track exam results, monitor fee receipts, and communicate directly with teachers right from my office.&rdquo;
                </p>
                <div className="text-xs font-bold text-[#0B286D]">— Barrister (Mrs) Nkechi B., PTA Executive Member</div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                <div className="flex items-center gap-1 text-[#F59E0B] text-sm">★★★★★</div>
                <p className="text-gray-800 text-sm leading-relaxed italic">
                  &ldquo;Bethel Montessori Academy taught me confidence, integrity, and godly values. Today I am studying Medicine at University, all thanks to the teachers who believed in me.&rdquo;
                </p>
                <div className="text-xs font-bold text-[#0B286D]">— Stephanie I., Alumna (Class of 2023)</div>
              </div>

              <button
                onClick={() => { setIsStoriesModalOpen(false); setIsEnrollModalOpen(true); }}
                className="w-full py-3.5 btn-enroll-red text-white font-extrabold rounded-lg uppercase tracking-wider text-sm cursor-pointer"
              >
                Join Our Family — Start Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          IMPROVEMENT MODAL 5: LOGIN / PORTAL ACCESS SELECTOR
      ──────────────────────────────────────────────────────── */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            <div className="bg-[#0B1B3D] text-white p-6 text-center relative">
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold"
              >
                ✕
              </button>
              <div className="w-14 h-14 bg-white p-1 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <Image src="/brand-icon.svg" width={48} height={48} alt="Logo" />
              </div>
              <h3 className="text-xl font-bold">Portal Access Gateway</h3>
              <p className="text-[#F59E0B] text-xs font-bold mt-1">Bethel Montessori Academy</p>
            </div>

            <div className="p-6 space-y-3">
              <Link
                href="/parents_portal"
                className="w-full p-4 rounded-xl border border-gray-200 hover:border-[#0B286D] hover:bg-[#EBF2FE]/60 transition-all flex items-center gap-4 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B286D] text-white flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">
                  👨‍👩‍👧
                </div>
                <div>
                  <div className="font-bold text-[#0B1B3D] text-sm group-hover:text-[#0B286D]">Parent Portal</div>
                  <div className="text-xs text-gray-500">Track wards results, fees, and attendance</div>
                </div>
              </Link>

              <Link
                href="/student_portal"
                className="w-full p-4 rounded-xl border border-gray-200 hover:border-[#0B286D] hover:bg-[#EBF2FE]/60 transition-all flex items-center gap-4 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B] text-[#0B1B3D] flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">
                  🎒
                </div>
                <div>
                  <div className="font-bold text-[#0B1B3D] text-sm group-hover:text-[#0B286D]">Student Portal</div>
                  <div className="text-xs text-gray-500">Access assignments, timetable, and study notes</div>
                </div>
              </Link>

              <Link
                href="/admin_portal"
                className="w-full p-4 rounded-xl border border-gray-200 hover:border-[#0B286D] hover:bg-[#EBF2FE]/60 transition-all flex items-center gap-4 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D90429] text-white flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">
                  🔐
                </div>
                <div>
                  <div className="font-bold text-[#0B1B3D] text-sm group-hover:text-[#0B286D]">Staff / Admin Portal</div>
                  <div className="text-xs text-gray-500">Grading, attendance registers, and academic administration</div>
                </div>
              </Link>

              <div className="pt-2 text-center">
                <button
                  onClick={() => { setIsLoginModalOpen(false); setIsEnrollModalOpen(true); }}
                  className="text-xs text-[#0B286D] hover:underline font-bold"
                >
                  Need new enrollment login credentials? Apply here
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          IMPROVEMENT MODAL 6: OUR STORY & VALUES MODAL
      ──────────────────────────────────────────────────────── */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[90vh] flex flex-col">
            <div className="bg-[#0B286D] text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Our Story & Mission</h3>
                <p className="text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
                  Bethel Montessori Academy • 19 Akenzua Road
                </p>
              </div>
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>Bethel Montessori Academy</strong> is located at <strong>19 Akenzua Road, Benin City, Edo State, Nigeria</strong>. The school was founded with a dedicated mandate: to raise a generation of leaders equipped with uncompromising integrity, superior intellect, and compassionate hearts.
              </p>
              <p>
                From our foundational Montessori Crèche and Nursery through Primary and Secondary curricula, our methodology merges authentic Montessori hands-on principles with the Nigerian National Curriculum and modern STEM computing.
              </p>
              <div className="p-4 bg-[#EBF2FE] rounded-xl border border-blue-200">
                <h4 className="font-bold text-[#0B286D] text-base mb-1">Our Operating Schedule</h4>
                <p className="text-xs text-[#0B1B3D] font-medium">
                  <strong>8:00 AM – 3:00 PM, Monday to Friday</strong>. For direct inquiries, call <strong>08052087011</strong> or <strong>08116652915</strong>.
                </p>
              </div>
              <p>
                Our campus features safe, child-centered Montessori environments, specialized learning materials, interactive classrooms, science and computer laboratories, and vibrant sports facilities.
              </p>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="px-6 py-2 bg-[#0B286D] text-white font-bold text-sm rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
