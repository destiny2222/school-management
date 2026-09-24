"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onOpenEnroll?: () => void;
  onOpenEschool?: () => void;
  onOpenStory?: () => void;
  onOpenStories?: () => void;
  onOpenGallery?: () => void;
  onOpenLogin?: () => void;
}

export default function Footer({
  onOpenEnroll,
  onOpenEschool,
  onOpenStory,
  onOpenStories,
  onOpenGallery,
  onOpenLogin,
}: FooterProps) {
  return (
    <footer id="contact" className="bg-[#0B1B3D] text-white">
      
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
                  className="h-9 w-auto"
                  src="/header-logo.svg"
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
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#D90429] transition-colors"
                >
                  <Image alt="Facebook icon" width={20} height={20} src="/facebook.svg" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#D90429] transition-colors"
                >
                  <Image alt="X icon" width={20} height={20} src="/twitter.svg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#D90429] transition-colors"
                >
                  <Image alt="Instagram icon" width={20} height={20} src="/instagram.svg" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#D90429] transition-colors"
                >
                  <Image alt="TikTok icon" width={20} height={20} src="/titok.svg" />
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
                  <button
                    type="button"
                    onClick={onOpenEnroll}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Summer School Registration
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenEnroll}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Enrollment Portal
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenEschool}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Montessori Curriculum
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenStory}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Our Story & Values
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
                Community & Portals
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={onOpenStories}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    PTA Association
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenGallery}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Photo Gallery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenLogin}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Parent Portal Login
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenLogin}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Student Portal Login
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenLogin}
                    className="text-white/75 hover:text-white transition cursor-pointer text-left"
                  >
                    Staff / Admin Portal
                  </button>
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
