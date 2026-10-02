"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeaderBanner from "../../components/PageHeaderBanner";

export default function EnrollPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedBranch, setSelectedBranch] = useState<"gra" | "aduwawa">("gra");
  const [selectedProgram, setSelectedProgram] = useState<
    "nursery" | "primary" | "secondary"
  >("primary");
  const [formSubTab, setFormSubTab] = useState<"student" | "academic" | "parent">("student");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState("");
  const stepContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (stepContentRef.current) {
      gsap.fromTo(
        stepContentRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentStep]);

  useEffect(() => {
    if (stepContentRef.current) {
      gsap.fromTo(
        ".tab-content-animate",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [formSubTab]);

  const [formData, setFormData] = useState({
    // Student Bio-data
    surname: "",
    firstName: "",
    middleName: "",
    gender: "Male",
    dob: "",
    placeOfBirth: "",
    address: "",
    stateOfOrigin: "",
    lga: "",
    religion: "Christianity",

    // Academic & Health
    previousSchool: "",
    lastClassPassed: "",
    bloodGroup: "O+",
    genotype: "AA",
    medicalConditions: "",
    allergies: "",

    // Parent Info
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    occupation: "",
    relationship: "Father",
    parentAddress: "",
  });

  const programFees = {
    nursery: {
      name: "Early Years (Nursery & Kindergarten)",
      age: "Ages 2 - 5 Years",
      fee: "₦15,567.04",
      amount: 15567.04,
    },
    primary: {
      name: "Grade School (Primary 1 - 6)",
      age: "Ages 6 - 11 Years",
      fee: "₦15,567.04",
      amount: 15567.04,
    },
    secondary: {
      name: "High School (JSS1 - SSS3)",
      age: "Ages 12 - 17 Years",
      fee: "₦20,721.69",
      amount: 20721.69,
    },
  };

  const branches = {
    gra: {
      name: "GRA Campus (Main Campus)",
      address: "19 Akenzua Road, GRA, Benin City",
      phone: "+234 803 123 4567",
      features: ["Montessori Art Studio", "Science & Robotics Lab", "Air-conditioned Classrooms"],
    },
    aduwawa: {
      name: "Aduwawa Extension Campus",
      address: "Upper Mission Extension, Aduwawa, Benin City",
      phone: "+234 805 987 6543",
      features: ["Spacious Sports Complex", "Digital ICT Hub", "Expansive Outdoor Playground"],
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `BMA/2026/${Math.floor(10000 + Math.random() * 90000)}`;
    setApplicationRef(randomRef);
    setFormSubmitted(true);
    setCurrentStep(4);
  };

  return (
    <main className="bg-[#FAFAFC] min-h-screen text-[#0B1B3D] font-sans flex flex-col justify-between">
      <Header isDarkText />

      {/* Page Header Banner */}
      <PageHeaderBanner
        title="Simple plans for little"
        highlightText="learners"
        subtitle="Complete the online application below to secure a place for your ward for the upcoming session."
        breadcrumbPage="Enroll"
      />

      {/* Stepper Progress Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Step 1 Node */}
            <div
              onClick={() => currentStep < 4 && setCurrentStep(1)}
              className={`flex items-center gap-3 cursor-pointer ${
                currentStep >= 1 ? "text-[#0B286D]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  currentStep === 1
                    ? "bg-[#0B286D] text-white shadow-md shadow-blue-900/20"
                    : currentStep > 1
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-500 border border-gray-300"
                }`}
              >
                {currentStep > 1 ? "✓" : "1"}
              </div>
              <span className="hidden sm:inline font-bold text-sm">
                1. Select Campus
              </span>
            </div>

            <div className="flex-1 h-0.5 mx-3 sm:mx-6 bg-gray-200">
              <div
                className="h-full bg-[#0B286D] transition-all duration-300"
                style={{
                  width:
                    currentStep === 1
                      ? "0%"
                      : currentStep === 2
                      ? "50%"
                      : "100%",
                }}
              />
            </div>

            {/* Step 2 Node */}
            <div
              onClick={() => currentStep > 1 && currentStep < 4 && setCurrentStep(2)}
              className={`flex items-center gap-3 ${
                currentStep > 1 ? "cursor-pointer" : "cursor-not-allowed"
              } ${currentStep >= 2 ? "text-[#0B286D]" : "text-gray-400"}`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  currentStep === 2
                    ? "bg-[#0B286D] text-white shadow-md shadow-blue-900/20"
                    : currentStep > 2
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-500 border border-gray-300"
                }`}
              >
                {currentStep > 2 ? "✓" : "2"}
              </div>
              <span className="hidden sm:inline font-bold text-sm">
                2. Program & Fee
              </span>
            </div>

            <div className="flex-1 h-0.5 mx-3 sm:mx-6 bg-gray-200">
              <div
                className="h-full bg-[#0B286D] transition-all duration-300"
                style={{
                  width: currentStep <= 2 ? "0%" : "100%",
                }}
              />
            </div>

            {/* Step 3 Node */}
            <div
              onClick={() => currentStep > 2 && currentStep < 4 && setCurrentStep(3)}
              className={`flex items-center gap-3 ${
                currentStep > 2 ? "cursor-pointer" : "cursor-not-allowed"
              } ${currentStep >= 3 ? "text-[#0B286D]" : "text-gray-400"}`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  currentStep === 3
                    ? "bg-[#0B286D] text-white shadow-md shadow-blue-900/20"
                    : currentStep === 4
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-500 border border-gray-300"
                }`}
              >
                {currentStep === 4 ? "✓" : "3"}
              </div>
              <span className="hidden sm:inline font-bold text-sm">
                3. Application Form
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Wizard Content Area */}
      <section ref={stepContentRef} className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* STEP 1: CHOOSE BRANCH */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B286D] bg-blue-50 px-3 py-1 rounded-md">
                Step 1 of 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] mt-2">
                Choose Campus Location
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Select your preferred Bethel Montessori Academy branch for attendance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GRA Campus Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedBranch("gra")}
                className={`rounded-2xl p-7 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                  selectedBranch === "gra"
                    ? "bg-white border-[#0B286D] shadow-xl shadow-blue-950/10 ring-2 ring-[#0B286D]/20"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-xs"
                }`}
              >
                {selectedBranch === "gra" && (
                  <div className="absolute top-4 right-4 bg-[#0B286D] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    ✓
                  </div>
                )}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B286D] flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 21h18M3 7v14M21 7v14M6 7l6-4 6 4M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-[#0B1B3D] mb-1">
                    {branches.gra.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-4">
                    📍 {branches.gra.address}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {branches.gra.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <span className="text-emerald-600">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B286D]">
                  <span>Phone: {branches.gra.phone}</span>
                  <span className="underline">Selected Branch →</span>
                </div>
              </motion.div>

              {/* Aduwawa Campus Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedBranch("aduwawa")}
                className={`rounded-2xl p-7 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                  selectedBranch === "aduwawa"
                    ? "bg-white border-[#0B286D] shadow-xl shadow-blue-950/10 ring-2 ring-[#0B286D]/20"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-xs"
                }`}
              >
                {selectedBranch === "aduwawa" && (
                  <div className="absolute top-4 right-4 bg-[#0B286D] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    ✓
                  </div>
                )}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-[#0B1B3D] mb-1">
                    {branches.aduwawa.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-4">
                    📍 {branches.aduwawa.address}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {branches.aduwawa.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <span className="text-emerald-600">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B286D]">
                  <span>Phone: {branches.aduwawa.phone}</span>
                  <span className="underline">Selected Branch →</span>
                </div>
              </motion.div>
            </div>

            {/* Step 1 Actions */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="bg-[#0B286D] hover:bg-[#071B49] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Continue to Program Selection</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT PROGRAM & APPLICATION FEE */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B286D] bg-blue-50 px-3 py-1 rounded-md">
                Step 2 of 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] mt-2">
                Select Program & View Application Fee
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Selected Campus: <strong className="text-[#0B286D]">{branches[selectedBranch].name}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Nursery */}
              <div
                onClick={() => setSelectedProgram("nursery")}
                className={`rounded-2xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                  selectedProgram === "nursery"
                    ? "bg-white border-[#6B0036] shadow-xl shadow-rose-950/10 ring-2 ring-[#6B0036]/20"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-xs"
                }`}
              >
                {selectedProgram === "nursery" && (
                  <div className="absolute top-4 right-4 bg-[#6B0036] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                    ✓
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6B0036] bg-rose-50 px-2.5 py-1 rounded-md">
                    {programFees.nursery.age}
                  </span>
                  <h3 className="text-lg font-black text-[#0B1B3D] mt-3 mb-1">
                    Early Years (Nursery)
                  </h3>
                  <p className="text-gray-600 text-xs font-medium leading-relaxed">
                    Montessori sensory activities, phonics, practical life skills, and motor development.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 font-semibold">Application Fee</div>
                  <div className="text-2xl font-black text-[#6B0036]">
                    {programFees.nursery.fee}
                  </div>
                </div>
              </div>

              {/* Primary */}
              <div
                onClick={() => setSelectedProgram("primary")}
                className={`rounded-2xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                  selectedProgram === "primary"
                    ? "bg-white border-[#6B0036] shadow-xl shadow-rose-950/10 ring-2 ring-[#6B0036]/20"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-xs"
                }`}
              >
                {selectedProgram === "primary" && (
                  <div className="absolute top-4 right-4 bg-[#6B0036] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                    ✓
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6B0036] bg-rose-50 px-2.5 py-1 rounded-md">
                    {programFees.primary.age}
                  </span>
                  <h3 className="text-lg font-black text-[#0B1B3D] mt-3 mb-1">
                    Grade School (Primary)
                  </h3>
                  <p className="text-gray-600 text-xs font-medium leading-relaxed">
                    British-Nigerian hybrid curriculum, STEM, creative arts, and leadership building.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 font-semibold">Application Fee</div>
                  <div className="text-2xl font-black text-[#6B0036]">
                    {programFees.primary.fee}
                  </div>
                </div>
              </div>

              {/* Secondary */}
              <div
                onClick={() => setSelectedProgram("secondary")}
                className={`rounded-2xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                  selectedProgram === "secondary"
                    ? "bg-white border-[#6B0036] shadow-xl shadow-rose-950/10 ring-2 ring-[#6B0036]/20"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-xs"
                }`}
              >
                {selectedProgram === "secondary" && (
                  <div className="absolute top-4 right-4 bg-[#6B0036] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                    ✓
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6B0036] bg-rose-50 px-2.5 py-1 rounded-md">
                    {programFees.secondary.age}
                  </span>
                  <h3 className="text-lg font-black text-[#0B1B3D] mt-3 mb-1">
                    High School (Secondary)
                  </h3>
                  <p className="text-gray-600 text-xs font-medium leading-relaxed">
                    WAEC, NECO, IGCSE preparation, robotics lab, public speaking, and sports clubs.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 font-semibold">Application Fee</div>
                  <div className="text-2xl font-black text-[#6B0036]">
                    {programFees.secondary.fee}
                  </div>
                </div>
              </div>
            </div>

            {/* Selection Summary Box */}
            <div className="bg-blue-50/70 rounded-2xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-[#0B1B3D] text-base">
                  Selected Application Package Summary
                </h4>
                <p className="text-gray-600 text-xs font-medium mt-1">
                  Campus: <strong>{branches[selectedBranch].name}</strong> | Program: <strong>{programFees[selectedProgram].name}</strong>
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500 font-bold block">Application Fee Payable</span>
                <span className="text-2xl font-black text-[#0B286D]">{programFees[selectedProgram].fee}</span>
              </div>
            </div>

            {/* Step 2 Actions */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 cursor-pointer"
              >
                ← Back to Campuses
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="bg-[#0B286D] hover:bg-[#071B49] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Proceed to Application Form</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: MULTI-SECTION APPLICATION FORM */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B286D] bg-blue-50 px-3 py-1 rounded-md">
                Step 3 of 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] mt-2">
                Complete Student Application Form
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Fill in the applicant bio-data, academic history, and parent details carefully.
              </p>
            </div>

            {/* Form Sub-Tabs Header */}
            <div className="flex border-b border-gray-200">
              <button
                type="button"
                onClick={() => setFormSubTab("student")}
                className={`py-3 px-6 font-bold text-sm border-b-2 cursor-pointer transition-colors ${
                  formSubTab === "student"
                    ? "border-[#0B286D] text-[#0B286D]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                1. Student Bio-data
              </button>
              <button
                type="button"
                onClick={() => setFormSubTab("academic")}
                className={`py-3 px-6 font-bold text-sm border-b-2 cursor-pointer transition-colors ${
                  formSubTab === "academic"
                    ? "border-[#0B286D] text-[#0B286D]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                2. Academic & Medical
              </button>
              <button
                type="button"
                onClick={() => setFormSubTab("parent")}
                className={`py-3 px-6 font-bold text-sm border-b-2 cursor-pointer transition-colors ${
                  formSubTab === "parent"
                    ? "border-[#0B286D] text-[#0B286D]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                3. Parent / Guardian Info
              </button>
            </div>

            {/* Actual Form */}
            <form onSubmit={handleFinalSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 space-y-6">
              {/* SUBTAB 1: STUDENT BIODATA */}
              {formSubTab === "student" && (
                <div className="space-y-6 tab-content-animate">
                  <h3 className="font-extrabold text-[#0B1B3D] text-lg border-b pb-2">
                    Personal Bio-data of Applicant
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Surname *
                      </label>
                      <input
                        type="text"
                        name="surname"
                        required
                        value={formData.surname}
                        onChange={handleInputChange}
                        placeholder="e.g. Osagie"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="e.g. Divine"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                        placeholder="e.g. Osaro"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Place of Birth
                      </label>
                      <input
                        type="text"
                        name="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={handleInputChange}
                        placeholder="e.g. Benin City"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        State of Origin *
                      </label>
                      <input
                        type="text"
                        name="stateOfOrigin"
                        required
                        value={formData.stateOfOrigin}
                        onChange={handleInputChange}
                        placeholder="e.g. Edo State"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        L.G.A of Origin
                      </label>
                      <input
                        type="text"
                        name="lga"
                        value={formData.lga}
                        onChange={handleInputChange}
                        placeholder="e.g. Oredo LGA"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Residential Home Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={2}
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. 15 Ihama Road, GRA, Benin City"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setFormSubTab("academic")}
                      className="bg-[#0B286D] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-[#071B49]"
                    >
                      Next: Academic & Health →
                    </button>
                  </div>
                </div>
              )}

              {/* SUBTAB 2: ACADEMIC & MEDICAL */}
              {formSubTab === "academic" && (
                <div className="space-y-6 tab-content-animate">
                  <h3 className="font-extrabold text-[#0B1B3D] text-lg border-b pb-2">
                    Academic Background & Health Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Previous School Attended
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                        placeholder="e.g. Grace International Nursery School"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Last Class Passed
                      </label>
                      <input
                        type="text"
                        name="lastClassPassed"
                        value={formData.lastClassPassed}
                        onChange={handleInputChange}
                        placeholder="e.g. Primary 3"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Blood Group
                      </label>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      >
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Genotype
                      </label>
                      <select
                        name="genotype"
                        value={formData.genotype}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      >
                        <option value="AA">AA</option>
                        <option value="AS">AS</option>
                        <option value="AC">AC</option>
                        <option value="SS">SS</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Known Medical Conditions or Allergies (If Any)
                    </label>
                    <textarea
                      name="allergies"
                      rows={2}
                      value={formData.allergies}
                      onChange={handleInputChange}
                      placeholder="e.g. Asthma, Peanut allergy, or None"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setFormSubTab("student")}
                      className="px-5 py-2.5 border border-gray-300 font-bold rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      ← Back to Bio-data
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormSubTab("parent")}
                      className="bg-[#0B286D] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-[#071B49]"
                    >
                      Next: Parent Details →
                    </button>
                  </div>
                </div>
              )}

              {/* SUBTAB 3: PARENT / GUARDIAN INFO */}
              {formSubTab === "parent" && (
                <div className="space-y-6 tab-content-animate">
                  <h3 className="font-extrabold text-[#0B1B3D] text-lg border-b pb-2">
                    Parent / Guardian Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Parent Full Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Emmanuel Osagie"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Relationship to Applicant *
                      </label>
                      <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      >
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Legal Guardian">Legal Guardian</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Active Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        required
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="e.g. +234 803 111 2233"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        required
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Occupation / Business Address
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      placeholder="e.g. Civil Engineer, Airport Road, Benin City"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B286D] focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setFormSubTab("academic")}
                      className="px-5 py-2.5 border border-gray-300 font-bold rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      ← Back to Academic
                    </button>

                    <button
                      type="submit"
                      className="bg-[#0B286D] hover:bg-[#071B49] text-white font-extrabold px-8 py-4 rounded-xl shadow-xl cursor-pointer text-base inline-flex items-center gap-2 transition-transform hover:scale-[1.01]"
                    >
                      <span>Submit Application & Proceed</span>
                      <span>✓</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* STEP 4: APPLICATION CONFIRMATION SLIP */}
        {currentStep === 4 && (
          <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
            {/* Success Banner */}
            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200 text-center shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl shadow-md">
                ✓
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-emerald-900">
                Application Successfully Filed!
              </h2>
              <p className="text-emerald-700 text-sm mt-2 max-w-lg mx-auto">
                Thank you for applying to Bethel Montessori Academy. Your application reference code has been generated below.
              </p>

              <div className="mt-6 inline-block bg-white px-6 py-3 rounded-xl border border-emerald-300 shadow-sm">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                  Application Reference Number
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#0B286D] tracking-wider">
                  {applicationRef}
                </span>
              </div>
            </div>

            {/* Slip Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-extrabold text-[#0B1B3D] text-lg">
                    Applicant Summary Slip
                  </h3>
                  <p className="text-gray-500 text-xs font-medium">
                    Bethel Montessori Academy Admission Portal 2026/2027
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Status: Pending Assessment
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 font-medium block text-xs">Student Full Name:</span>
                  <span className="font-bold text-[#0B1B3D]">
                    {formData.surname} {formData.firstName} {formData.middleName}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block text-xs">Assigned Campus:</span>
                  <span className="font-bold text-[#0B1B3D]">
                    {branches[selectedBranch].name}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block text-xs">Enrolled Program:</span>
                  <span className="font-bold text-[#0B1B3D]">
                    {programFees[selectedProgram].name}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block text-xs">Parent Contact:</span>
                  <span className="font-bold text-[#0B1B3D]">
                    {formData.parentName} ({formData.parentPhone})
                  </span>
                </div>
              </div>

              {/* Next Steps Box */}
              <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100 space-y-2">
                <h4 className="font-bold text-[#0B286D] text-sm flex items-center gap-2">
                  <span>📌 Next Steps for Admission:</span>
                </h4>
                <ul className="text-xs text-gray-700 space-y-1.5 list-disc list-inside font-medium">
                  <li>Visit <strong>{branches[selectedBranch].address}</strong> with a printed copy of this slip.</li>
                  <li>Present student birth certificate and 2 passport photographs.</li>
                  <li>Schedule student diagnostic placement assessment at the school admin desk.</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-[#0B286D] hover:bg-[#071B49] text-white font-bold rounded-xl text-sm shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <span>🖨 Print Application Slip</span>
                </button>

                <Link
                  href="/"
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors"
                >
                  Return to Home Page
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
