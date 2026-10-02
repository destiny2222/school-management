"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import JoyfulEnvironmentSection from "@/components/JoyfulEnvironmentSection";
import {
  Calculator,
  BookOpen,
  FlaskConical,
  Globe,
  Palette,
  Laptop,
  Activity,
  MessageSquare,
  Lightbulb,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  Quote,
} from "lucide-react";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const programs = [
    {
      id: "early-years",
      title: "Early Years Foundation",
      ageRange: "Ages 2-5",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      accentBg: "from-[#6c0049] to-[#8c0060]",
      description:
        "Building strong foundations through play-based learning, creativity, and social development in a nurturing environment.",
      highlights: [
        "Play-based Learning",
        "Creative Arts",
        "Social Skills",
        "Basic Literacy & Numeracy",
      ],
      image: "/images/exploration.jpg",
    },
    {
      id: "grade-school",
      title: "Grade School",
      ageRange: "Ages 5-10",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      accentBg: "from-[#000D2E] to-[#1E3A8A]",
      description:
        "Comprehensive curriculum focusing on core subjects while fostering critical thinking and problem-solving skills.",
      highlights: [
        "Core Subjects",
        "STEM Education",
        "Creative Arts",
        "Physical Education",
      ],
      image: "/images/excellence.jpg",
    },
    {
      id: "high-school",
      title: "Middle | High School",
      ageRange: "Ages 10-16",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      accentBg: "from-[#4A5568] to-[#2D3748]",
      description:
        "Advanced academic preparation with specialized subjects, leadership opportunities, and university readiness programs.",
      highlights: [
        "Advanced Academics",
        "Leadership Training",
        "University Prep",
        "Career Guidance",
      ],
      image: "/images/expression.jpg",
    },
  ];

  const subjectAreas = [
    {
      title: "Mathematics",
      description: "Building logical thinking and problem-solving skills",
      icon: Calculator,
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "English Language",
      description: "Developing communication and literacy skills",
      icon: BookOpen,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      title: "Sciences",
      description: "Exploring the natural world through hands-on experiments",
      icon: FlaskConical,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
    {
      title: "Social Studies",
      description: "Understanding society, culture, and global citizenship",
      icon: Globe,
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
    },
    {
      title: "Creative Arts",
      description: "Expressing creativity through visual and performing arts",
      icon: Palette,
      color: "bg-pink-500/10 text-pink-600 border-pink-200",
    },
    {
      title: "Technology",
      description: "Preparing for the digital future with modern skills",
      icon: Laptop,
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    },
    {
      title: "Physical Education",
      description: "Promoting health, fitness, and teamwork",
      icon: Activity,
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
    {
      title: "Languages",
      description: "Building multilingual communication abilities",
      icon: MessageSquare,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
  ];

  const learningApproaches = [
    {
      title: "Innovative Teaching Methods",
      description:
        "We employ modern pedagogical approaches that make learning engaging, interactive, and effective for every student.",
      icon: Lightbulb,
      bg: "bg-[#6c0049]",
    },
    {
      title: "Global Perspective",
      description:
        "Our curriculum incorporates international standards and perspectives, preparing students for a globalized world.",
      icon: Compass,
      bg: "bg-[#000D2E]",
    },
    {
      title: "Holistic Development",
      description:
        "We focus on developing the whole child - academically, socially, emotionally, and physically.",
      icon: HeartHandshake,
      bg: "bg-[#4A5568]",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Grade 11 Student",
      quote:
        "The teachers here really care about each student's success. I've grown so much academically and personally.",
      image: "/images/parent-testimonial.jpg",
    },
    {
      name: "Michael Chen",
      role: "Grade 9 Student",
      quote:
        "The science labs are amazing! I love conducting experiments and learning through hands-on activities.",
      image: "/images/celebration.jpg",
    },
    {
      name: "Aisha Okafor",
      role: "Grade 12 Student",
      quote:
        "Torch Bearers Academy has prepared me well for university. I feel confident about my future!",
      image: "/images/hero.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans antialiased text-[#0B1B3D]">
      {/* Light Header for white/light page bg */}
      <Header isDarkText={true} />

      {/* Hero Banner Component */}
      <PageHeaderBanner
        title="Academic"
        highlightText="Excellence"
        subtitle="Empowering students through an innovative curriculum, dedicated educators, and a lifelong passion for learning."
        breadcrumbPage="Academics"
      />

      {/* Hero Quick CTA Bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6c0049]/10 text-[#6c0049] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#0B1B3D] text-sm sm:text-base">
                Discover Our Comprehensive Curriculum
              </p>
              <p className="text-xs text-gray-500">
                Early Years • Primary Grade School • Secondary / High School
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/enroll"
              className="px-6 py-2.5 bg-[#6c0049] text-white text-sm font-semibold rounded-full hover:bg-opacity-90 transition shadow-sm flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border-2 border-[#0B1B3D] text-[#0B1B3D] text-sm font-semibold rounded-full hover:bg-[#0B1B3D] hover:text-white transition"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Our Academic Programs */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D0F2F1] text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Educational Pathways</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#0B1B3D] tracking-tight"
            >
              Our Academic Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base md:text-lg text-gray-600 font-medium"
            >
              Comprehensive educational pathways designed to nurture every
              student&apos;s potential from early years through graduation.
            </motion.p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-[#FFFDF8] rounded-3xl border border-gray-200/90 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${program.accentBg} opacity-60 mix-blend-multiply`}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full border shadow-sm ${program.badgeColor}`}
                      >
                        {program.ageRange}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[#0B1B3D] mb-3 group-hover:text-[#6c0049] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                      {program.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 pt-4 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Key Learning Highlights
                      </p>
                      {program.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm font-semibold text-gray-700"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#6c0049]/10 text-[#6c0049] flex items-center justify-center mr-3 shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/enroll"
                    className="w-full py-3 bg-[#0B1B3D] hover:bg-[#6c0049] text-white font-semibold text-sm rounded-2xl flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    <span>Enroll in {program.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Subject Areas Grid */}
      <section className="py-16 md:py-24 bg-[#FFFDF0] border-y border-[#F5F0D6] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Core Disciplines</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#0B1B3D] tracking-tight"
            >
              Subject Areas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base md:text-lg text-gray-600 font-medium"
            >
              A comprehensive curriculum covering all essential subjects to
              prepare students for success in higher education and beyond.
            </motion.p>
          </div>

          {/* 8 Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectAreas.map((subj, idx) => {
              const IconComp = subj.icon;
              return (
                <motion.div
                  key={subj.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#6c0049] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border ${subj.color}`}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1B3D] mb-2">
                      {subj.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      {subj.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Learning Approach */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column Text & Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6c0049]/10 text-[#6c0049] text-xs font-bold uppercase tracking-wider mb-4 border border-[#6c0049]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pedagogical Excellence</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0B1B3D] tracking-tight mb-8 leading-tight">
                Our Learning Approach
              </h2>

              <div className="space-y-6">
                {learningApproaches.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="flex items-start gap-5 p-5 rounded-2xl bg-[#FFFDF8] border border-gray-100 hover:border-gray-200 hover:shadow-md transition"
                    >
                      <div
                        className={`shrink-0 w-12 h-12 ${item.bg} text-white rounded-2xl flex items-center justify-center shadow-md`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0B1B3D] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column Visual Media Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src="/images/hero.jpg"
                  alt="Students engaged in learning at Torch Bearers Academy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#6c0049] text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                    Hands-On STEM & Arts
                  </span>
                  <h4 className="text-xl font-bold">
                    Interactive Knowledge Discovery
                  </h4>
                  <p className="text-xs text-white/80 mt-1">
                    Fostering curiosity through guided inquiry and lab research.
                  </p>
                </div>
              </div>

              {/* Floating Badge Accent */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#6c0049] text-white rounded-full flex flex-col items-center justify-center p-3 shadow-xl border-4 border-white text-center"
              >
                <GraduationCap className="w-8 h-8 mb-0.5" />
                <span className="text-[10px] font-black uppercase tracking-tight leading-none">
                  Global Standards
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: What Our Students Say (Testimonials) */}
      <section className="py-16 md:py-24 bg-[#FFFDF8] border-t border-gray-200/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-200"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Student Voices</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#0B1B3D] tracking-tight"
            >
              What Our Students Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base md:text-lg text-gray-600 font-medium"
            >
              Hear from our students about their academic journey and
              experiences at Torch Bearers Academy.
            </motion.p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
              >
                <div>
                  <Quote className="w-10 h-10 text-[#6c0049]/20 mb-4" />
                  <p className="text-gray-700 italic text-base leading-relaxed font-medium mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#6c0049] shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1B3D] text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#6c0049]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pre-Footer CTA */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#FFFDF0] to-[#F5F0D6]/40 border border-[#F5F0D6] shadow-sm relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#6c0049] tracking-tight">
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
              Join our community of learners and discover your potential at
              Torch Bearers Academy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enroll"
                className="px-8 py-4 bg-[#6c0049] text-white text-base font-bold rounded-2xl hover:bg-opacity-90 transition shadow-md flex items-center justify-center gap-2"
              >
                <span>Start Application</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#6c0049] text-[#6c0049] text-base font-bold rounded-2xl hover:bg-[#6c0049] hover:text-white transition flex items-center justify-center"
              >
                Contact Admissions
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
