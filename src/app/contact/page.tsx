"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans antialiased text-[#0B1B3D]">
      {/* Navigation Header */}
      <Header isDarkText={true} />

      {/* Hero Banner Component */}
      <PageHeaderBanner
        title="Get in"
        highlightText="Touch"
        subtitle="We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can."
        breadcrumbPage="Contact"
      />

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6c0049]/10 text-[#6c0049] text-xs font-bold uppercase tracking-wider mb-4 border border-[#6c0049]/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reach Out</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
                  Contact Information
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                  Find us at our location, give us a call, or send us an email.
                  Our team is always happy to assist you.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF0] border border-[#F5F0D6] hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-2xl bg-[#E2EAFF] text-[#001F6C] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3D]">
                      Our Address
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed mt-1">
                      Beside NNPC Medical Centre, Along Benoni Rd, GRA, Benin
                      City, Edo State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF0] border border-[#F5F0D6] hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-2xl bg-[#E2EAFF] text-[#001F6C] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3D]">Email Us</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed mt-1">
                      contact@bethelmontessori.com / info@bethelmontessori.com
                    </p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF0] border border-[#F5F0D6] hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-2xl bg-[#E2EAFF] text-[#001F6C] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3D]">Call Us</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed mt-1">
                      09060090756 / +234 906 009 0756
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF0] border border-[#F5F0D6] hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-2xl bg-[#E2EAFF] text-[#001F6C] flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3D]">
                      School Office Hours
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed mt-1">
                      Monday – Friday: 7:30 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-gray-200/90 relative">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">
                    Send a Message
                  </h2>
                  <p className="text-gray-500 text-sm font-medium mt-1">
                    Fill out the form below and our admissions team will get back to you promptly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B1B3D]">
                        Thank You, {formData.fullName}!
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto text-sm font-medium">
                        Your message has been received successfully. We will get back to you shortly at{" "}
                        <span className="font-bold text-[#0B1B3D]">{formData.email}</span>.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: "",
                            email: "",
                            subject: "General Inquiry",
                            message: "",
                          });
                        }}
                        className="mt-6 px-6 py-2.5 bg-[#0B1B3D] text-white font-bold text-sm rounded-full hover:bg-opacity-90 transition"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full px-4 py-3.5 bg-[#FFFDF8] border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#001F6C] focus:border-[#001F6C] text-gray-900 text-sm font-medium transition outline-none"
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-gray-700 mb-2"
                          >
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3.5 bg-[#FFFDF8] border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#001F6C] focus:border-[#001F6C] text-gray-900 text-sm font-medium transition outline-none"
                            placeholder="you@example.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-bold text-gray-700 mb-2"
                          >
                            Inquiry Type
                          </label>
                          <select
                            id="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            className="w-full px-4 py-3.5 bg-[#FFFDF8] border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#001F6C] focus:border-[#001F6C] text-gray-900 text-sm font-medium transition outline-none"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Admissions & Enrollment">
                              Admissions &amp; Enrollment
                            </option>
                            <option value="Campus Visit Tour">
                              Campus Visit Tour
                            </option>
                            <option value="PTA & Parent Relations">
                              PTA &amp; Parent Relations
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3.5 bg-[#FFFDF8] border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#001F6C] focus:border-[#001F6C] text-gray-900 text-sm font-medium transition outline-none resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-[#001F6C] hover:bg-[#6c0049] text-white font-bold text-base rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Submit Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Location Preview Section */}
      <section className="py-16 bg-[#FFFDF0] border-t border-[#F5F0D6]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">
              Visit Our Campus
            </h3>
            <p className="text-gray-600 text-sm font-medium mt-2">
              Beside NNPC Medical Centre, Along Benoni Rd, GRA, Benin City, Edo State
            </p>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl relative bg-gray-200">
            <iframe
              title="Bethel Montessori Academy Location"
              src="https://maps.google.com/maps?q=Benoni+Road+GRA+Benin+City+Edo+State+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
