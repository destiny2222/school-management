"use client";

import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer id="contact" className="bg-[#261A66] text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* School Summary */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link className="inline-flex items-center gap-3" href="/">
              <div className="bg-white p-2 rounded-lg">
                <Image
                  alt="Bethel Montessori Academy Logo"
                  width={180}
                  height={45}
                  className="h-20 w-auto"
                  src="/logo.png"
                />
              </div>
            </Link>
            <p className="text-white/75 text-base leading-relaxed max-w-md pt-2">
              Bethel Montessori Academy is an educational institution devoted to grooming Africa&apos;s brightest through authentic Montessori principles, moral excellence, and global standards.
            </p>
            
            <div className="pt-4">
              <div className="text-xs text-white/50 uppercase tracking-widest mb-3 font-bold">
                Connect With Us
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#EF5F18] transition-colors text-white inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#EF5F18] transition-colors text-white inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#EF5F18] transition-colors text-white inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#EF5F18] transition-colors text-white inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.58a6.35 6.35 0 0 0-5.11 6.25 6.34 6.34 0 0 0 10.84 4.49A6.32 6.32 0 0 0 15.8 14V8.37a8.27 8.27 0 0 0 4.79 1.52V6.44a4.84 4.84 0 0 1-1-.25z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links Columns */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-blue-300 font-semibold hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/enrollment"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Summer School Registration
                  </Link>
                </li>
                <li>
                  <Link href="/enrollment"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Enrollment Portal
                  </Link>
                </li>
                <li>
                  <Link href="/curriculum"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Montessori Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/our-story"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Our Story & Values
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
                Community & Portals
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/pta"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    PTA Association
                  </Link>
                </li>
                <li>
                  <Link href="/gallery"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/login"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Parent Portal Login
                  </Link>
                </li>
                <li>
                  <Link href="/login"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Student Portal Login
                  </Link>
                </li>
                <li>
                  <Link href="/login"
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Staff / Admin Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Bethel Montessori Academy, 19 Akenzua Road Benin City. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Admission</span>
            <span className="hover:text-white cursor-pointer">Accreditation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
