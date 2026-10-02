"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import bookIcon from "../assets/image/book_lilstep-hero-backround-icon.svg";
import cIcon from "../assets/image/c_lilstep-hero-backround-icon.svg";
import cookIcon from "../assets/image/cook_lilstep-hero-backround-icon.svg";
import lIcon from "../assets/image/l_lilstep-hero-backround-icon.svg";
import sparkIcon from "../assets/image/_lilstep-team-hero-link-icon.svg";
import starIcon from "../assets/image/Lilstep Icon.svg";

interface PageHeaderBannerProps {
  title: string;
  highlightText?: string;
  subtitle?: string;
  breadcrumbPage: string;
}

export default function PageHeaderBanner({
  title,
  highlightText,
  subtitle,
  breadcrumbPage,
}: PageHeaderBannerProps) {
  return (
    <div className="relative bg-[#FFFDF0] pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#F5F0D6] flex flex-col items-center justify-center text-center">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#0B1B3D_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      {/* Floating Hand-Drawn Motion SVG Doodles */}

      {/* Top Center Star Icon */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <Image
          src={starIcon}
          alt="Lilstep Star Icon"
          width={32}
          height={32}
          className="w-7 h-7 sm:w-8 sm:h-8 opacity-80"
        />
      </motion.div>

      {/* Left Top Floating Book SVG */}
      <motion.div
        animate={{ y: [-10, 12, -10], rotate: [-15, -8, -15] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="hidden md:block absolute left-10 lg:left-20 top-24 cursor-pointer"
      >
        <Image
          src={bookIcon}
          alt="Book background icon"
          width={75}
          height={75}
          className="w-14 h-14 sm:w-16 sm:h-16 opacity-75"
        />
      </motion.div>

      {/* Left Bottom Floating L / Ruler SVG */}
      <motion.div
        animate={{ y: [10, -12, 10], rotate: [10, 18, 10] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="hidden md:block absolute left-16 lg:left-32 bottom-8 cursor-pointer"
      >
        <Image
          src={lIcon}
          alt="Ruler background icon"
          width={70}
          height={70}
          className="w-14 h-14 sm:w-16 sm:h-16 opacity-75"
        />
      </motion.div>

      {/* Right Top Floating C / Protractor SVG */}
      <motion.div
        animate={{ y: [-12, 10, -12], rotate: [14, 6, 14] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="hidden md:block absolute right-12 lg:right-24 top-20 cursor-pointer"
      >
        <Image
          src={cIcon}
          alt="Protractor background icon"
          width={75}
          height={75}
          className="w-14 h-14 sm:w-16 sm:h-16 opacity-75"
        />
      </motion.div>

      {/* Right Bottom Floating Cook / Clock SVG */}
      <motion.div
        animate={{ y: [12, -10, 12], rotate: [-14, -6, -14] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="hidden md:block absolute right-16 lg:right-28 bottom-8 cursor-pointer"
      >
        <Image
          src={cookIcon}
          alt="Clock background icon"
          width={75}
          height={75}
          className="w-14 h-14 sm:w-16 sm:h-16 opacity-75"
        />
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* Breadcrumb Trail Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-200/90 shadow-xs mb-6 text-xs sm:text-sm font-semibold text-gray-700 hover:shadow-md transition-shadow"
        >
          <Link href="/" className="hover:text-[#EF5F18] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#261A66] font-extrabold">{breadcrumbPage}</span>
        </motion.div>

        {/* Heading with Left Spark Ray SVG */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative block"
        >
          {/* Orange Spark Rays SVG on left of heading */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-7 -top-4 sm:-left-9 sm:-top-5 pointer-events-none"
          >
            <Image
              src={sparkIcon}
              alt="Spark Ray Accent"
              width={36}
              height={36}
              className="w-7 h-7 sm:w-9 sm:h-9"
            />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#261A66] tracking-tight leading-[1.25]">
            {title}{" "}
            {highlightText && (
              <span className="relative inline-block px-3 py-0.5 rounded-xl bg-[#EF5F18] text-white">
                {highlightText}
              </span>
            )}
          </h1>
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
