"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface GalleryMarqueeSectionProps {
  onGalleryClick?: () => void;
}

export default function GalleryMarqueeSection({
  onGalleryClick,
}: GalleryMarqueeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Learning through joyful play & discovery",
      category: "Montessori",
      image: "/images/exploration.jpg",
    },
    {
      id: 2,
      title: "Creative growth & artistic expression",
      category: "Creative Arts",
      image: "/images/excellence.jpg",
    },
    {
      id: 3,
      title: "Collaborative teamwork & joyful moments",
      category: "Community",
      image: "/images/expression.jpg",
    },
    {
      id: 4,
      title: "Summer camp & athletic milestone celebrations",
      category: "Sports & Camp",
      image: "/images/celebration.jpg",
    },
    {
      id: 5,
      title: "Modern science, robotics & digital learning",
      category: "Academics",
      image: "/images/hero.jpg",
    },
    {
      id: 6,
      title: "Happy parents & student success stories",
      category: "Milestones",
      image: "/images/parent-testimonial.jpg",
    },
  ];

  // Duplicate items for seamless continuous looping
  const duplicatedItems = [...galleryItems, ...galleryItems];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (trackRef.current) {
        // Infinite seamless linear slide animation
        const tween = gsap.to(trackRef.current, {
          x: "-50%",
          duration: 30,
          ease: "none",
          repeat: -1,
        });

        // Pause auto-slide on hover, resume on leave
        const track = trackRef.current;
        const handleMouseEnter = () => tween.pause();
        const handleMouseLeave = () => tween.play();

        track.addEventListener("mouseenter", handleMouseEnter);
        track.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          track.removeEventListener("mouseenter", handleMouseEnter);
          track.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAFC] py-20 md:py-28 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 md:mb-16">
        {/* Header Section */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FEF9C3] text-[#854D0E] font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full mb-4 shadow-xs border border-[#FEF08A]">
            <svg
              className="w-4 h-4 text-[#EAB308]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <span>Photo Gallery</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#261A66] tracking-tight leading-[1.2]">
            Bright minds and joyful hearts{" "}
            <span className="relative inline-block px-2.5 py-0.5 rounded-md bg-[#EF5F18] text-white font-black">
              shine through
            </span>{" "}
            every captured image
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            A glimpse into daily moments of curiosity, play, discovery, and
            growth at Bethel Montessori Academy.
          </p>
        </div>
      </div>

      {/* Auto-sliding Marquee Track */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 px-4 sm:px-8 w-max cursor-grab active:cursor-grabbing"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={onGalleryClick}
              className="w-[280px] sm:w-[340px] md:w-[380px] aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-gray-100 group cursor-pointer flex-shrink-0 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-2 border border-white/30">
                  {item.category}
                </span>
                <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
