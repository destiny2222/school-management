"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutCardsSection from "../components/AboutCardsSection";
import JoyfulEnvironmentSection from "../components/JoyfulEnvironmentSection";
import GalleryMarqueeSection from "../components/GalleryMarqueeSection";
import NurturingPlaceSection from "../components/NurturingPlaceSection";

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
      <Header />
      <HeroSection
        onEnrollClick={() => setIsEnrollModalOpen(true)}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />

      <AboutCardsSection />

      <JoyfulEnvironmentSection onEnrollClick={() => setIsEnrollModalOpen(true)} />

      <NurturingPlaceSection onDiscoverClick={() => setIsEnrollModalOpen(true)} />
 
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
        </div>
      </section>

      <GalleryMarqueeSection onGalleryClick={() => setIsGalleryModalOpen(true)} />

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

      {/* ───── FOOTER  ────────────── */}
      <Footer />
    </main>
  );
}
