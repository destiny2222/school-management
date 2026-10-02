"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Active hover card state ('left' | 'center' | 'right') - defaults to 'center'
  const [activeCard, setActiveCard] = useState<"left" | "center" | "right">(
    "center"
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout animation (screen width >= 768px)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsWrapperRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 1.2,
          },
        });

        // Left card starts perfectly behind center card (xPercent: 100 + gap offset 2rem)
        tl.fromTo(
          leftCardRef.current,
          {
            xPercent: 100,
            x: "2rem",
            rotate: -5,
            scale: 0.92,
            opacity: 0,
          },
          {
            xPercent: 0,
            x: "0rem",
            rotate: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          0
        );

        // Right card starts perfectly behind center card (xPercent: -100 - gap offset 2rem)
        tl.fromTo(
          rightCardRef.current,
          {
            xPercent: -100,
            x: "-2rem",
            rotate: 5,
            scale: 0.92,
            opacity: 0,
          },
          {
            xPercent: 0,
            x: "0rem",
            rotate: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          0
        );

        // Center card subtle scale elevation
        tl.fromTo(
          centerCardRef.current,
          { scale: 0.96 },
          { scale: 1, ease: "power2.out" },
          0
        );
      });

      // Mobile layout animation (screen width < 768px)
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsWrapperRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });

        tl.fromTo(
          leftCardRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
          0
        );

        tl.fromTo(
          rightCardRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
          0.15
        );
      });

      // Stats stagger entrance
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
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
      className="relative bg-[#FAFAFC] py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-14 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FEF9C3] text-[#854D0E] font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full mb-5 shadow-xs border border-[#FEF08A]">
            <svg
              className="w-4 h-4 text-[#EAB308]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <span>About us</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#261A66] tracking-tight leading-[1.2] max-w-4xl">
            Little learners grow stronger, discover more,{" "}
            <span className="relative inline-block px-2.5 py-0.5 rounded-md bg-[#EF5F18] text-white font-black">
              and shine brighter
            </span>{" "}
            in every moment
          </h2>
        </div>

        {/* 3 Cards Container */}
        <div
          ref={cardsWrapperRef}
          onMouseLeave={() => setActiveCard("center")}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Left Card - Growing Little Minds */}
          <div
            ref={leftCardRef}
            onMouseEnter={() => setActiveCard("left")}
            className={`relative z-10 rounded-3xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px] ${
              activeCard === "left"
                ? "bg-[#FFF3EC] border-[#FFE2D1] shadow-xl shadow-orange-500/10"
                : "bg-white border-gray-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl"
            }`}
          >
            {/* Top Left Orange Spark Accent on Hover */}
            <div
              className={`absolute -top-3 -left-3 text-[#EF5F18] transition-all duration-300 ${
                activeCard === "left"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 pointer-events-none"
              }`}
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M4 12L2 9" />
                <path d="M7 7L4 4" />
                <path d="M12 4L9 2" />
              </svg>
            </div>

            {/* Top Icon */}
            <div className="pt-2 pb-6">
              <svg
                className="w-20 h-20 text-[#EF5F18]"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Bear Head & Ears */}
                <circle cx="24" cy="22" r="10" />
                <circle cx="16" cy="14" r="3.5" fill="#FFE2D1" />
                <circle cx="32" cy="14" r="3.5" fill="#FFE2D1" />
                <circle cx="21" cy="20" r="1" fill="currentColor" />
                <circle cx="27" cy="20" r="1" fill="currentColor" />
                <path d="M22 24c.8.6 3.2.6 4 0" />
                {/* Bear Body */}
                <path d="M16 38c0-6 3.6-10 8-10s8 4 8 10v6H16v-6z" />
                <path d="M14 30c-2 2-3 5-2 8" />
                <path d="M34 30c2 2 3 5 2 8" />
                {/* Blocks */}
                <rect x="42" y="32" width="13" height="13" rx="2" fill="#FFE2D1" />
                <path d="M46 36h5M48.5 33.5v5" />
                <rect x="47" y="17" width="13" height="13" rx="2" fill="#FFE2D1" />
                <circle cx="53.5" cy="23.5" r="2.5" />
              </svg>
            </div>

            {/* Inner Orange Box */}
            <div
              className={`rounded-2xl p-6 transition-all duration-300 ${
                activeCard === "left"
                  ? "bg-white border-2 border-dashed border-[#EF5F18]/60 shadow-sm"
                  : "bg-[#FFF3EC] border border-[#FFE2D1]"
              }`}
            >
              <h3 className="text-[#261A66] font-extrabold text-xl mb-2">
                Growing little minds
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Inspiring young learners to grow confidently every single day
              </p>
            </div>
          </div>

          {/* Center Card - Bright Young Explorers */}
          <div
            ref={centerCardRef}
            onMouseEnter={() => setActiveCard("center")}
            className={`relative z-20 rounded-3xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px] ${
              activeCard === "center"
                ? "bg-[#F0EDFF] border-[#D8CEFF] shadow-xl shadow-purple-900/10"
                : "bg-white border-gray-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl"
            }`}
          >
            {/* Top Right Royal Purple Spark Accent */}
            <div
              className={`absolute -top-3 -right-3 text-[#261A66] transition-all duration-300 ${
                activeCard === "center"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 pointer-events-none"
              }`}
            >
              <svg
                className="w-8 h-8"
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

            {/* Top Icon */}
            <div className="pt-2 pb-6">
              <svg
                className="w-20 h-20 text-[#261A66]"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Top angled lego block */}
                <rect
                  x="22"
                  y="10"
                  width="22"
                  height="14"
                  rx="2"
                  transform="rotate(-15 33 17)"
                  fill="#F0EDFF"
                />
                <ellipse cx="28" cy="10" rx="2" ry="1.5" />
                <ellipse cx="38" cy="7" rx="2" ry="1.5" />
                {/* Bottom left block */}
                <rect x="10" y="30" width="22" height="16" rx="2" fill="#F0EDFF" />
                <ellipse cx="16" cy="28" rx="2.5" ry="1.5" />
                <ellipse cx="26" cy="28" rx="2.5" ry="1.5" />
                {/* Bottom right block */}
                <rect x="34" y="30" width="22" height="16" rx="2" fill="#F0EDFF" />
                <ellipse cx="40" cy="28" rx="2.5" ry="1.5" />
                <ellipse cx="50" cy="28" rx="2.5" ry="1.5" />
              </svg>
            </div>

            {/* Inner Purple Box */}
            <div
              className={`rounded-2xl p-6 transition-all duration-300 ${
                activeCard === "center"
                  ? "bg-white border-2 border-dashed border-[#261A66]/60 shadow-sm"
                  : "bg-[#F0EDFF] border border-[#D8CEFF]"
              }`}
            >
              <h3 className="text-[#261A66] font-extrabold text-xl mb-2">
                Bright young explorers
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Encouraging young explorers to learn, grow, and shine daily
              </p>
            </div>
          </div>

          {/* Right Card - Curious Minds Blooming */}
          <div
            ref={rightCardRef}
            onMouseEnter={() => setActiveCard("right")}
            className={`relative z-10 rounded-3xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px] ${
              activeCard === "right"
                ? "bg-[#FFF7ED] border-[#FFEDD5] shadow-xl shadow-amber-500/10"
                : "bg-white border-gray-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl"
            }`}
          >
            {/* Top Right Orange Spark Accent */}
            <div
              className={`absolute -top-3 -right-3 text-[#EF5F18] transition-all duration-300 ${
                activeCard === "right"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 pointer-events-none"
              }`}
            >
              <svg
                className="w-8 h-8"
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

            {/* Top Icon */}
            <div className="pt-2 pb-6">
              <svg
                className="w-20 h-20 text-[#EF5F18]"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Rocket body */}
                <path
                  d="M42 12c-8 0-18 6-22 18l12 12c12-4 18-14 18-22 0-5-3-8-8-8z"
                  fill="#FFF7ED"
                />
                <circle cx="36" cy="24" r="3.5" fill="currentColor" />
                {/* Fins */}
                <path d="M20 30l-8 8 6 4 6-2" fill="#FFF7ED" />
                <path d="M34 44l8-8 4 6-2 6" fill="#FFF7ED" />
                {/* Flame exhaust */}
                <path d="M16 44c-3 3-5 8-4 12 4 1 9-1 12-4" />
              </svg>
            </div>

            {/* Inner Orange Box */}
            <div
              className={`rounded-2xl p-6 transition-all duration-300 ${
                activeCard === "right"
                  ? "bg-white border-2 border-dashed border-[#EF5F18]/60 shadow-sm"
                  : "bg-[#FFF7ED] border border-[#FFEDD5]"
              }`}
            >
              <h3 className="text-[#261A66] font-extrabold text-xl mb-2">
                Curious minds blooming
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Helping curious minds explore new ideas with joyful confidence
              </p>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}
