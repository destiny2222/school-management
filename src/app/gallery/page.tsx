"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeaderBanner from "../../components/PageHeaderBanner";
import JoyfulEnvironmentSection from "../../components/JoyfulEnvironmentSection";

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const galleryItems = [
    {
      id: 1,
      title: "Montessori Art Studio & Creative Painting",
      image: "/images/exploration.jpg",
      description:
        "Students discovering color blending and self-expression through hands-on easel painting.",
    },
    {
      id: 2,
      title: "Academic Honors & Prize Giving Ceremony",
      image: "/images/excellence.jpg",
      description:
        "Celebrating academic excellence, moral leadership, and outstanding termly achievements.",
    },
    {
      id: 3,
      title: "School Assembly & Group Expression",
      image: "/images/expression.jpg",
      description:
        "Morning assembly routines building public speaking confidence and community spirit.",
    },
    {
      id: 4,
      title: "Summer Camp & Athletic Sports Competitions",
      image: "/images/celebration.jpg",
      description:
        "Team sports, track events, and summer outdoor recreational milestone activities.",
    },
    {
      id: 5,
      title: "Modern Robotics & Science Lab Experiments",
      image: "/images/hero.jpg",
      description:
        "Interactive STEM learning, coding, and hands-on scientific experimentation.",
    },
    {
      id: 6,
      title: "Happy Parents & Student Milestone Stories",
      image: "/images/parent-testimonial.jpg",
      description:
        "PTA engagement, open day exhibitions, and parent-teacher community events.",
    },
  ];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? galleryItems.length - 1
          : selectedImageIndex - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === galleryItems.length - 1
          ? 0
          : selectedImageIndex + 1
      );
    }
  };

  return (
    <main className="bg-[#FAFAFC] min-h-screen text-[#0B1B3D] font-sans flex flex-col justify-between">
      <Header isDarkText />

      {/* Page Header Banner */}
      <PageHeaderBanner
        title="Captured moments of"
        highlightText="joy & discovery"
        subtitle="Explore daily campus life, Montessori art, sports, science labs, and student milestone celebrations at Bethel Montessori Academy."
        breadcrumbPage="Gallery"
      />

      {/* Main Pure Photo Grid Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImageIndex(index)}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/70 border border-gray-100 group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Hover Overlay with Zoom Icon & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                {/* Top Zoom Icon */}
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs text-[#0B1B3D] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs font-medium line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal (Clean Full Image View) */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Modal Image Wrapper */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer border border-white/20"
              >
                ✕
              </button>

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-[#0B1B3D] flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer font-black text-lg"
              >
                ‹
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-[#0B1B3D] flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer font-black text-lg"
              >
                ›
              </button>

              {/* Full Image */}
              <Image
                src={galleryItems[selectedImageIndex].image}
                alt={galleryItems[selectedImageIndex].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pre-Footer CTA Section */}
      <JoyfulEnvironmentSection
        onEnrollClick={() => (window.location.href = "/enroll")}
      />

      <Footer />
    </main>
  );
}
