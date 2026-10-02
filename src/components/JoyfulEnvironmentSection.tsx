"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface JoyfulEnvironmentSectionProps {
  onEnrollClick?: () => void;
}

export default function JoyfulEnvironmentSection({
  onEnrollClick,
}: JoyfulEnvironmentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Columns staggered entrance
      const cols = [col1Ref.current, col2Ref.current, col3Ref.current].filter(
        Boolean
      );
      if (cols.length > 0) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 md:py-24 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="mb-12 md:mb-16 max-w-3xl">
          {/* Top Spark Accent */}
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-7 h-7 text-[#84CC16]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M12 4L15 2" />
              <path d="M17 7L20 4" />
              <path d="M20 12L22 9" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1B3D] tracking-tight leading-[1.2]">
            Joyful environment{" "}
            <span className="relative inline-block px-2.5 py-0.5 rounded-md bg-[#BAE6FD] text-[#0F172A] font-black">
              where children learn
            </span>{" "}
            confidently
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            A welcoming space nurtures confidence, curiosity, and creativity as
            children learn, explore, and grow together.
          </p>
        </div>

        {/* 3 Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Column 1: Left Image Container with Dashed Purple Frame */}
          <div
            ref={col1Ref}
            className="bg-white rounded-3xl p-3.5 border-2 border-dashed border-[#D8B4FE] shadow-xl shadow-purple-50/60 flex flex-col min-h-[420px] group transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/images/exploration.jpg"
                alt="Young child engaging in creative Montessori play"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Column 2: Center Feature Card with Floating Overlay */}
          <div
            ref={col2Ref}
            className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 min-h-[420px] flex flex-col justify-end p-5 sm:p-6 group transition-all duration-300 hover:shadow-2xl"
          >
            {/* Background Image */}
            <Image
              src="/images/excellence.jpg"
              alt="Confident student learning in a bright classroom"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            {/* Floating White Overlay Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#F43F5E] mb-3">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[#0B1B3D] font-black text-xl mb-1">
                Confident learning
              </h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Empowering children to learn boldly in a joyful environment
              </p>
            </div>
          </div>

          {/* Column 3: Right Sky-Blue Block with 15+ Stat & Red CTA */}
          <div
            ref={col3Ref}
            className="bg-[#E0F2FE] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-sky-100/80 min-h-[420px] border border-sky-100"
          >
            {/* Top Stat Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-sky-100/70 mb-6">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] border border-[#E0F2FE] flex items-center justify-center text-[#0284C7] mb-3">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              {/* Stat Number */}
              <div className="text-4xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
                15+
              </div>
              <div className="text-gray-600 font-semibold text-sm sm:text-base mt-1">
                Years of trusted learning
              </div>
            </div>

            {/* Bottom Section: Subtext & Red CTA */}
            <div>
              <p className="text-[#0369A1] font-medium text-xs sm:text-sm mb-5 leading-relaxed">
                Building a foundation of curiosity, safety, and academic
                success for over a decade.
              </p>

              <button
                onClick={onEnrollClick}
                className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-extrabold py-3.5 px-6 rounded-full inline-flex items-center justify-between shadow-lg shadow-rose-200/80 cursor-pointer transition-all duration-300 group"
              >
                <span className="text-sm sm:text-base tracking-wide">
                  Discover more
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#E11D48] transition-all duration-300">
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
