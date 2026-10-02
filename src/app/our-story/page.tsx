"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import {
  Sparkles,
  Heart,
  Award,
  Users,
  Target,
  ShieldCheck,
  Compass,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  GraduationCap,
  Baby,
  Blocks,
  Rocket,
  HeartHandshake,
  Palette,
} from "lucide-react";

export default function OurStoryPage() {
  const philosophyCards = [
    {
      title: "High Expectations",
      description:
        "At Torch Bearers Academy, we have high expectations of our children and set challenging targets for them. Every child is encouraged to reach their full potential.",
      icon: Baby,
      cardBg: "bg-[#FFF0F3] border-rose-100",
      iconColor: "text-rose-500", 
    },
    {
      title: "Dedicated Staff",
      description:
        "Our staff are dedicated, hardworking and experienced. We provide a safe, calm and caring atmosphere and foster an ethos of hard work based on an enjoyment of learning.",
      icon: Blocks,
      cardBg: "bg-[#F4FCE3] border-lime-200",
      iconColor: "text-lime-600", 
    },
    {
      title: "A Family Friendly School",
      description:
        "We possess excellent links with our diverse community and treasure our reputation as a family friendly school. We recognize that parents play an important role in education.",
      icon: Rocket,
      cardBg: "bg-[#FAF5FF] border-purple-100",
      iconColor: "text-purple-500", 
    },
  ];

  const corePillars = [
    {
      title: "Academic Excellence",
      desc: "Fulfilling academic potential with high rigor and critical thinking.",
      icon: GraduationCap,
    },
    {
      title: "Moral Integrity",
      desc: "Instilling deep positive values and personal responsibility.",
      icon: Award,
    },
    {
      title: "Emotional Intelligence",
      desc: "Empowering social awareness, empathy, and active leadership.",
      icon: Heart,
    },
    {
      title: "Lifelong Curiosity",
      desc: "Fostering an enduring passion for discovery and self-growth.",
      icon: Compass,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans antialiased text-[#0B1B3D]">
      {/* Navigation Header */}
      <Header isDarkText={true} />

      {/* Hero Banner Component */}
      <PageHeaderBanner
        title="Our Story &"
        highlightText="Ethos"
        subtitle="Discover the values, vision, and dedication that define Torch Bearers Academy."
        breadcrumbPage="Our Story"
      />

      {/* Section 1: Lilstep Design Pattern - "Where every child's learning journey begins bright" */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.25] mb-6">
                Welcome to Bethel{" "}
                <span className="relative inline-block px-3 py-1 rounded-xl bg-[#FEF08A] text-[#0B1B3D]">
                  Montessori Academy
                </span>
                
              </h2>

              <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Every child&apos;s learning journey begins bright in a nurturing
                environment where curiosity grows, confidence builds, creativity
                thrives, and caring educators inspire exploration and lifelong
                learning.
              </p>

              {/* Red Pill CTA Button */}
              <div className="mb-10">
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E11D48] text-white font-bold text-sm sm:text-base rounded-full hover:bg-rose-700 transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 group"
                >
                  <span>Enroll Now</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>

              {/* 2 Feature Items with Soft Pastel Icon Boxes */}
              <div className="space-y-6 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 shadow-xs">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mb-1">
                      Safe and nurturing environment
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      A safe and nurturing environment helps children feel secure,
                      build confidence, develop emotionally, and enjoy learning
                      through care, play, and positive guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center shrink-0 shadow-xs">
                    <Palette className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mb-1">
                      Creative exploration every day
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Creative exploration every day inspires imagination,
                      curiosity, confidence, and joyful learning through
                      hands-on activities and playful discovery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Photo Column - Large Rounded Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex justify-center"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero.jpg"
                  alt="Little learner smiling brightly at Bethel Montessori Academy"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Lilstep Design Pattern - "Little learners grow stronger, discover more, and shine brighter in every moment" */}
      <section className="py-20 md:py-28 bg-[#FFFDF8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header Title */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1B3D] tracking-tight leading-[1.25]"
            >
              Our Educational{" "}
              <span className="relative inline-block px-3 py-1 rounded-xl bg-[#D0F2F1] text-[#0F172A] mt-2 sm:mt-0">
                Philosophy
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
            >
              We are built on a foundation of high expectations, dedicated staff, and strong community values.
            </motion.p>
          </div>

          {/* 3 Soft Pastel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className={`${card.cardBg} p-8 sm:p-10 rounded-[2.5rem] border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[360px]`}
                >
                  <div>
                    {/* White Rounded Square Icon Box */}
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xs mb-8">
                      <IconComp className={`w-8 h-8 ${card.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0B1B3D] mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href="/enroll"
                      className="inline-flex items-center gap-2 font-extrabold text-[#0B1B3D] hover:text-[#6c0049] transition-colors text-sm sm:text-base group"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Vision for Every Child */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Aspiration &amp; Growth</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#0B1B3D] tracking-tight mb-6"
            >
              Our Vision for Every Child
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                Our school has developed a set of core values which underpin all
                the work we do. These values have a huge impact as the children
                develop. They help to deepen positive values of the children and
                enable them make appropriate personal and communal choices.
              </p>
              <p>
                We have aspirations for all our children that through their school
                journey they will fulfill their academic potential and become
                successful lifelong learners. In addition, we desire that our
                children will possess high levels of both social and emotional
                intelligence. This will empower them to thrive in the future as
                active and productive members of society.
              </p>
            </motion.div>
          </div>

          {/* 4 Vision Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#FFFDF8] p-6 rounded-3xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center hover:border-[#6c0049] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#6c0049]/10 text-[#6c0049] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#0B1B3D] text-lg mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium leading-normal">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (Have Any Questions?) */}
      <section className="bg-[#E2EAFF] py-20 border-t border-blue-200/60">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="w-14 h-14 rounded-full bg-[#000D2E] text-white mx-auto flex items-center justify-center shadow-lg mb-2">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#000D2E] tracking-tight">
              Have Any Questions?
            </h2>
            <p className="text-base md:text-lg text-[#000D2E]/80 max-w-2xl mx-auto font-medium leading-relaxed">
              We value discussing any aspect of your child&apos;s education and
              general welfare. Please feel free to reach out to us.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#000D2E] text-white text-base font-bold rounded-2xl hover:bg-opacity-90 transition shadow-lg active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
