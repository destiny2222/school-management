"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

interface HeroSectionProps {
  onEnrollClick: () => void;
  onLoginClick?: () => void;
}

export default function HeroSection({ onEnrollClick, onLoginClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const titleLine3Ref = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const statsStripRef = useRef<HTMLDivElement>(null);

  // Floating elements refs for mouse move parallax & continuous floating
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const floatCard3Ref = useRef<HTMLDivElement>(null);
  const floatBadgeRef = useRef<HTMLDivElement>(null);
  const lightGlow1Ref = useRef<HTMLDivElement>(null);
  const lightGlow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Master Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background scale reveal
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1.15, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
          0
        );
      }

      // Soft overlay fade in
      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          0.2
        );
      }

      // Eyebrow tag animation
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { y: -30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          0.4
        );
      }

      // Staggered Title Lines Reveal
      const titleLines = [
        titleLine1Ref.current,
        titleLine2Ref.current,
        titleLine3Ref.current,
      ].filter(Boolean);

      if (titleLines.length > 0) {
        tl.fromTo(
          titleLines,
          { y: 50, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.18,
            ease: "power4.out",
          },
          0.6
        );
      }

      // Description reveal
      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          1.1
        );
      }

      // CTA Buttons reveal
      if (ctaContainerRef.current) {
        tl.fromTo(
          ctaContainerRef.current.children,
          { y: 25, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          1.3
        );
      }

      // Stats Strip reveal
      if (statsStripRef.current) {
        tl.fromTo(
          statsStripRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          1.5
        );
      }

      // Floating Glass Cards Entrance
      const floatCards = [
        floatCard1Ref.current,
        floatCard2Ref.current,
        floatCard3Ref.current,
        floatBadgeRef.current,
      ].filter(Boolean);

      if (floatCards.length > 0) {
        tl.fromTo(
          floatCards,
          { scale: 0.7, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.6)",
          },
          1.2
        );
      }

      // 2. Continuous Floating Bobbing Animation (2026 Physics)
      if (floatCard1Ref.current) {
        gsap.to(floatCard1Ref.current, {
          y: "-=14",
          rotation: 1.5,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (floatCard2Ref.current) {
        gsap.to(floatCard2Ref.current, {
          y: "+=16",
          rotation: -2,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      }

      if (floatCard3Ref.current) {
        gsap.to(floatCard3Ref.current, {
          y: "-=12",
          rotation: 1,
          duration: 4.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }

      if (floatBadgeRef.current) {
        gsap.to(floatBadgeRef.current, {
          y: "+=10",
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.2,
        });
      }

      // Subtle pulse on background light glows
      if (lightGlow1Ref.current) {
        gsap.to(lightGlow1Ref.current, {
          scale: 1.2,
          opacity: 0.6,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (lightGlow2Ref.current) {
        gsap.to(lightGlow2Ref.current, {
          scale: 1.3,
          opacity: 0.5,
          duration: 5.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });
      }

      // 3. Interactive Mouse Parallax (2026 Fluidity)
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const moveX = (clientX / innerWidth - 0.5) * 30;
        const moveY = (clientY / innerHeight - 0.5) * 30;

        // Shift background slightly opposite to mouse
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            x: -moveX * 0.4,
            y: -moveY * 0.4,
            duration: 1.2,
            ease: "power2.out",
          });
        }

        // Shift floating cards with different depth levels
        if (floatCard1Ref.current) {
          gsap.to(floatCard1Ref.current, {
            x: moveX * 0.8,
            y: moveY * 0.8,
            rotateY: moveX * 0.2,
            rotateX: -moveY * 0.2,
            duration: 1,
            ease: "power2.out",
          });
        }

        if (floatCard2Ref.current) {
          gsap.to(floatCard2Ref.current, {
            x: moveX * 1.2,
            y: moveY * 1.2,
            rotateY: moveX * 0.3,
            rotateX: -moveY * 0.3,
            duration: 1,
            ease: "power2.out",
          });
        }

        if (floatCard3Ref.current) {
          gsap.to(floatCard3Ref.current, {
            x: moveX * 0.6,
            y: moveY * 0.6,
            duration: 1,
            ease: "power2.out",
          });
        }
      };

      const currentContainer = containerRef.current;
      if (currentContainer) {
        currentContainer.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        if (currentContainer) {
          currentContainer.removeEventListener("mousemove", handleMouseMove);
        }
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#262262]"
      style={{ perspective: "1000px" }}
    >
      {/* ────────────────────────────────────────────────────────
          1. HERO BACKGROUND IMAGE 
      ──────────────────────────────────────────────────────── */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="Bethel Montessori Academy Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105"
        />
      </div>

      {/* Multi-layered Soft Dark Vignette Overlay for High Image Visibility */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-[#262262]/90 via-[#1b1848]/65 to-black/40"
      />

      {/* Subtle radial spotlight overlay for focus */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(38,34,98,0.35),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_75%_65%,rgba(241,102,35,0.2),transparent_50%)]" />

      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0 opacity-25" />

      {/* Ambient Animated Light Orbs */}
      <div
        ref={lightGlow1Ref}
        className="absolute top-1/4 left-10 w-96 h-96 bg-[#262262]/30 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <div
        ref={lightGlow2Ref}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#f16623]/25 blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* ────────────────────────────────────────────────────────
          2. MAIN CONTENT CONTAINER
      ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: HERO TEXT CONTENT */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">



            {/* Staggered Modern Headline */}
            <div className="space-y-1 sm:space-y-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              <h1
                ref={titleLine1Ref}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]"
              >
                Nurturing Minds
              </h1>
              <h1
                ref={titleLine2Ref}
                className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-[#f16623] via-[#ff7c3c] to-[#f16623]"
              >
                Building Leaders
              </h1>
              <h1
                ref={titleLine3Ref}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white/95 uppercase tracking-tight leading-[1.05]"
              >
                For The Future
              </h1>
            </div>

            {/* Description Subtitle */}
            <p
              ref={descriptionRef}
              className="text-base sm:text-xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Empowering children with holistic Montessori education, innovative STEM programs, and moral discipline in a safe, inspiring environment.
            </p>

            {/* Action Buttons Container */}
            <div
              ref={ctaContainerRef}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              {/* Primary CTA */}
              <Link
                href={'/enroll'}
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff7c3c] via-[#f16623] to-[#d85210] text-white font-extrabold text-base tracking-wide shadow-[0_10px_30px_rgba(241,102,35,0.4)] hover:shadow-[0_15px_40px_rgba(241,102,35,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3 cursor-pointer overflow-hidden border border-white/20"
              >
                <span className="relative z-10">Enroll Your Child Now</span>
                <svg
                  className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              {/* Secondary CTA */}
                <Link
                  href={'/login'} 
                  className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 text-white font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2.5 cursor-pointer shadow-lg"
                >
                  <svg
                    className="w-5 h-5 text-[#f16623]" 
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Parent Portal Login</span>
                </Link> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
