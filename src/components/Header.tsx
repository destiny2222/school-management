"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from '@/assets/image/logo/logo.jpg'

interface HeaderProps {
  isDarkText?: boolean;
}

export default function Header({ isDarkText = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = scrolled || isDarkText;

  return (
    <header
      className={`fixed top-0 w-full px-6 md:px-10 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 text-gray-800"
          : isDarkText
          ? "bg-[#FFFDF0]/80 backdrop-blur-xs py-4 text-[#261A66]"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo (Left) */}
        <Link className="flex-shrink-0 flex items-center gap-3 group" href="/">
          <Image
            alt="Bethel Montessori Academy Logo"
            width={200}
            height={106}
            className="h-16 sm:h-15 w-auto transition-transform group-hover:scale-105"
            src={logo}
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Centered in Middle) */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-sm font-semibold">
          <Link
            href="/"
            className={`transition-colors relative pb-1 ${
              isDark ? "text-[#261A66] font-bold" : "text-white font-bold"
            }`}
          >
            <span>Home</span>
          </Link>
          <Link
            href="/enroll"
            className={`transition-colors cursor-pointer font-semibold ${
              isDark
                ? "text-gray-800 hover:text-[#261A66]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Enroll
          </Link>
          <Link
            href="/gallery"
            className={`transition-colors cursor-pointer font-semibold ${
              isDark
                ? "text-gray-800 hover:text-[#261A66]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/academics"
            className={`transition-colors cursor-pointer font-semibold ${
              isDark
                ? "text-gray-800 hover:text-[#261A66]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Academics
          </Link>
          <Link
            href="/our-story"
            className={`transition-colors cursor-pointer font-semibold ${
              isDark
                ? "text-gray-800 hover:text-[#261A66]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            className={`transition-colors cursor-pointer font-semibold ${
              isDark
                ? "text-gray-800 hover:text-[#261A66]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/auth/login"
            className={`transition-colors cursor-pointer font-semibold ${
              isDark
                ? "text-gray-800 hover:text-[#261A66]"
                : "text-white/90 hover:text-white"
            }`}
          >
            PTA
          </Link>
        </div>

        {/* Right Hand Actions: Login & Search */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/auth/login"
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer ${
              isDark
                ? "bg-[#261A66] hover:bg-[#EF5F18] text-white"
                : "bg-[#EF5F18] hover:bg-white text-white hover:text-[#261A66]"
            }`}
          >
            Log In
          </Link>
          <Link
            href="/gallery"
            aria-label="Search"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isDark
                ? "bg-gray-100 hover:bg-gray-200 text-[#261A66]"
                : "bg-[#261A66]/70 hover:bg-[#261A66] text-white backdrop-blur-xs"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/auth/login"
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold ${
              isDark ? "bg-[#261A66] text-white" : "bg-white text-[#261A66]"
            }`}
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "text-[#261A66] hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#261A66] text-white rounded-2xl mt-3 p-6 shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3 font-semibold text-base">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              Home
            </Link>
            <Link
              href="/enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              Enroll
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              Gallery
            </Link>
            <Link
              href="/academics"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              Academics
            </Link>
            <Link
              href="/our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              Our Story
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              Contact
            </Link>
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EF5F18]"
            >
              PTA
            </Link>
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#EF5F18] text-white font-bold"
            >
              Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
