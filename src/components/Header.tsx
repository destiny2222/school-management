"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  onOpenEnroll?: () => void;
  onOpenGallery?: () => void;
  onOpenStory?: () => void;
  onOpenEschool?: () => void;
  onOpenStories?: () => void;
  onOpenLogin?: () => void;
}

export default function Header({
  onOpenEnroll,
  onOpenGallery,
  onOpenStory,
  onOpenEschool,
  onOpenStories,
  onOpenLogin,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full px-6 md:px-10 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 text-gray-800"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo (Left) */}
        <Link className="flex-shrink-0 flex items-center gap-3 group" href="/">
          <Image
            alt="Bethel Montessori Academy Logo"
            width={180}
            height={46}
            className="h-9 sm:h-10 w-auto transition-transform group-hover:scale-105"
            src={scrolled ? "/header-logo.svg" : "/header-logo-white.svg"}
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Centered in Middle) */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-sm font-semibold">
          <Link
            href="/"
            className={`transition-colors relative pb-1 ${
              scrolled ? "text-[#0B286D]" : "text-white"
            }`}
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] block mx-auto mt-0.5"></span>
          </Link>
          <button
            type="button"
            onClick={onOpenEnroll}
            className={`transition-colors cursor-pointer ${
              scrolled ? "text-gray-700 hover:text-[#0B286D]" : "text-white/90 hover:text-white"
            }`}
          >
            Enroll
          </button>
          <button
            type="button"
            onClick={onOpenGallery}
            className={`transition-colors cursor-pointer ${
              scrolled ? "text-gray-700 hover:text-[#0B286D]" : "text-white/90 hover:text-white"
            }`}
          >
            Gallery
          </button>
          <button
            type="button"
            onClick={onOpenEschool}
            className={`transition-colors cursor-pointer ${
              scrolled ? "text-gray-700 hover:text-[#0B286D]" : "text-white/90 hover:text-white"
            }`}
          >
            Academics
          </button>
          <button
            type="button"
            onClick={onOpenStory}
            className={`transition-colors cursor-pointer ${
              scrolled ? "text-gray-700 hover:text-[#0B286D]" : "text-white/90 hover:text-white"
            }`}
          >
            Our Story
          </button>
          <a
            href="#contact"
            className={`transition-colors cursor-pointer ${
              scrolled ? "text-gray-700 hover:text-[#0B286D]" : "text-white/90 hover:text-white"
            }`}
          >
            Contact
          </a>
          <button
            type="button"
            onClick={onOpenStories}
            className={`transition-colors cursor-pointer ${
              scrolled ? "text-gray-700 hover:text-[#0B286D]" : "text-white/90 hover:text-white"
            }`}
          >
            PTA
          </button>
        </div>

        {/* Right Hand Actions: Login, Get Started Pill Button & Search */}
        <div className="hidden md:flex items-center space-x-4"> 
          <button
            type="button"
            onClick={onOpenLogin}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer ${
              scrolled
                ? "bg-[#0B1B3D] hover:bg-[#D90429] text-white"
                : "bg-white hover:bg-[#FACC15] text-[#0B1B3D] hover:text-[#0B1B3D]"
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={onOpenGallery}
            aria-label="Search"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              scrolled
                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                : "bg-[#0B1B3D]/70 hover:bg-[#0B1B3D] text-white backdrop-blur-xs"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenEnroll}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold ${
              scrolled ? "bg-[#0B1B3D] text-white" : "bg-white text-[#0B1B3D]"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${scrolled ? "text-gray-800" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 pb-5 px-5 bg-white rounded-2xl border border-gray-200 shadow-xl animate-slide-up flex flex-col space-y-3 text-sm font-semibold text-gray-800">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0B286D] py-1 border-b border-gray-100 flex items-center justify-between"
          >
            <span>Home</span>
            <span className="w-2 h-2 rounded-full bg-[#FACC15]"></span>
          </Link>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenEnroll?.(); }}
            className="text-left py-1 border-b border-gray-100 hover:text-[#0B286D]"
          >
            Enroll
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenGallery?.(); }}
            className="text-left py-1 border-b border-gray-100 hover:text-[#0B286D]"
          >
            Gallery
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenEschool?.(); }}
            className="text-left py-1 border-b border-gray-100 hover:text-[#0B286D]"
          >
            Academics
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenStory?.(); }}
            className="text-left py-1 border-b border-gray-100 hover:text-[#0B286D]"
          >
            Our Story
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left py-1 border-b border-gray-100 hover:text-[#0B286D]"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenStories?.(); }}
            className="text-left py-1 border-b border-gray-100 hover:text-[#0B286D]"
          >
            PTA
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenLogin?.(); }}
            className="text-left py-1 border-b border-gray-100 text-[#0B286D] font-bold"
          >
            Login to Portal
          </button> 
        </div>
      )}
    </header>
  );
}
