"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface NurturingPlaceSectionProps {
  onDiscoverClick?: () => void;
}

export default function NurturingPlaceSection({
  onDiscoverClick,
}: NurturingPlaceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, x: 40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
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
      className="relative bg-[#F8FAF9] py-16 md:py-24 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols on lg) */}
          <div ref={leftColRef} className="lg:col-span-7 flex flex-col">
            {/* Header Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#261A66] tracking-tight leading-[1.2]">
                A nurturing place where little learners{" "}
                <span className="relative inline-block px-3.5 py-1 rounded-full bg-[#EF5F18] text-white font-black shadow-xs">
                  thrive and shine
                </span>
              </h2>

              <p className="mt-5 text-gray-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                A caring environment where children feel safe, confident,
                curious, and joyful while learning and growing daily.
              </p>

              {/* Discover More Red Pill CTA Button */}
              <div className="mt-8">
                <button
                  onClick={onDiscoverClick}
                  className="bg-[#EF5F18] hover:bg-[#D44E0E] text-white font-extrabold py-3.5 px-6 rounded-full inline-flex items-center gap-3 shadow-lg shadow-orange-500/30 cursor-pointer transition-all duration-300 group"
                >
                  <span className="text-base tracking-wide">Discover more</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#EF5F18] transition-all duration-300">
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

            {/* Horizontal Divider */}
            <div className="my-8 md:my-10 border-t border-gray-200/80" />

            {/* Lower 2-Column Sub-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Sub-Card 1: Peek into our fun-filled days */}
              <div className="flex flex-col">
                <h3 className="text-[#261A66] font-extrabold text-lg mb-3 leading-snug">
                  Peek into our fun-filled days and colorful memories
                </h3>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer">
                  <Image
                    src="/images/exploration.jpg"
                    alt="Children enjoying colorful Montessori crafts and play"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Sub-Card 2: 15+ Years Metric Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-[190px]">
                <div className="w-11 h-11 rounded-xl bg-[#F0EDFF] flex items-center justify-center text-[#261A66]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#261A66] tracking-tight">
                    15+
                  </div>
                  <div className="text-gray-600 font-semibold text-sm mt-1">
                    Years of trusted learning
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols on lg) - Large Hero Feature Image */}
          <div ref={rightColRef} className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src="/images/excellence.jpg"
                alt="Smiling child thriving at Bethel Montessori Academy"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
