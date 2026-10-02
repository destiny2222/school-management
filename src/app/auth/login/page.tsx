"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { login as loginApi, forgotPassword as forgotPasswordApi } from "@/services/auth.service";
import { saveTokens } from "@/lib/auth";
import logo from "@/assets/image/logo/logo.png";

type RoleType = "parent" | "staff" | "student";

interface RoleConfig {
  id: RoleType;
  label: string;
  fieldLabel: string;
  fieldPlaceholder: string;
  bannerBg: string;
  themeColorHex: string;
  hoverBgHex: string;
  lightBgHex: string;
  borderColorHex: string;
  tagline: string;
}

const ROLE_CONFIGS: Record<RoleType, RoleConfig> = {
  parent: {
    id: "parent",
    label: "Parent",
    fieldLabel: "Email Address",
    fieldPlaceholder: "e.g. parent@example.com",
    bannerBg: "bg-[#0075FF]",
    themeColorHex: "#0075FF",
    hoverBgHex: "#0062D6",
    lightBgHex: "#EEF4FF",
    borderColorHex: "#BFDBFE",
    tagline: "Nurturing tomorrow's leaders, today.",
  },
  staff: {
    id: "staff",
    label: "Staff",
    fieldLabel: "Email Address",
    fieldPlaceholder: "e.g. staff@example.com",
    bannerBg: "bg-[#002166]",
    themeColorHex: "#002166",
    hoverBgHex: "#001647",
    lightBgHex: "#EEF4FF",
    borderColorHex: "#93C5FD",
    tagline: "Inspiring excellence in education.",
  },
  student: {
    id: "student",
    label: "Student",
    fieldLabel: "Student ID",
    fieldPlaceholder: "e.g. 1234567890 or student email",
    bannerBg: "bg-[#C20056]",
    themeColorHex: "#C20056",
    hoverBgHex: "#A00047",
    lightBgHex: "#FDEEFA",
    borderColorHex: "#FBCFE8",
    tagline: "Discover, grow, and lead the future.",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [activeRole, setActiveRole] = useState<RoleType>("parent");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState<boolean>(false);
  const [forgotEmail, setForgotEmail] = useState<string>("");
  const [forgotSent, setForgotSent] = useState<boolean>(false);
  const [forgotLoading, setForgotLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const activeConfig = ROLE_CONFIGS[activeRole];

  // Switch Role handler
  const handleRoleChange = (role: RoleType) => {
    setActiveRole(role);
    setErrorMessage("");
  };

  // Login handler — calls the real backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage(`Please enter your ${activeConfig.fieldLabel.toLowerCase()}`);
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password");
      return;
    }

    setIsLoading(true);

    try {
      const result = await loginApi(email.trim(), password);

      // Validate that the backend role matches the selected tab
      const backendRole = result.user.role.name.toLowerCase();
      if (backendRole !== activeRole) {
        setErrorMessage(
          `This account is not registered as a ${activeConfig.label.toLowerCase()} account.`
        );
        return;
      }

      // Persist tokens in cookies
      saveTokens(result.tokens);

      // Redirect to the matching portal
      switch (activeRole) {
        case "parent":
          router.push("/parents_portal/dashboard");
          break;
        case "staff":
          router.push("/teacher_portal/dashboard");
          break;
        case "student":
          router.push("/student_portal/dashboard");
          break;
      }
    } catch (err: unknown) {
      // The axios interceptor already toasts generic errors, but we also
      // display inline so the user sees feedback inside the form.
      const axiosErr = err as { response?: { data?: { message?: string } } };
      const msg =
        axiosErr?.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // Forgot password handler — calls the real backend
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;

    setForgotLoading(true);
    try {
      await forgotPasswordApi(forgotEmail.trim());
      setForgotSent(true);
    } catch {
      // Axios interceptor handles the toast
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#F2F5F9] dark:bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans transition-colors duration-300">
      {/* Background Decor Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{ backgroundColor: activeConfig.themeColorHex }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{ backgroundColor: activeConfig.themeColorHex }}
        />
      </div>

      {/* Main Floating Card Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-slate-300/50 dark:shadow-slate-950/50 overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[560px] lg:min-h-[580px] border border-slate-100 dark:border-slate-700/60 z-10 transition-all duration-500">
        
        {/* ================= LEFT BANNER ================= */}
        <div
          className={`relative p-8 sm:p-10 flex flex-col justify-between overflow-hidden text-white transition-colors duration-500 ease-in-out ${activeConfig.bannerBg}`}
          style={{ backgroundColor: activeConfig.themeColorHex }}
        >
          {/* Top Branding Section */}
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white/90">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>School Management Portal</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Bethel Montessori Academy
            </h1>
            
            <p className="text-white/90 text-sm sm:text-base font-medium max-w-xs leading-relaxed transition-all duration-300">
              {activeConfig.tagline}
            </p>
          </div>

          {/* Role Status Badge (Bottom Left) */}
          <div className="relative z-10 mt-auto pt-12">
            
            <p className="mt-3 text-xs text-white/70">
              © {new Date().getFullYear()} Bethel Montessori Academy. All rights reserved.
            </p>
          </div>

          
        </div>

        {/* ================= RIGHT FORM PANEL ================= */}
        <div className="p-8 sm:p-10 flex flex-col justify-center items-center bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <div className="w-full max-w-sm mx-auto flex flex-col items-center">
            
            {/* Top School Crest Logo */}
            <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
              <Image src={logo} alt=" Logo" width={100} height={100} className="w-20 h-20 sm:w-22 sm:h-22 drop-shadow-md" />
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center text-slate-900 dark:text-white">
              Welcome Back!
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-6 text-center">
              Please login to your account.
            </p>

            {/* ================= ROLE SEGMENTED SWITCHER ================= */}
            <div className="w-full bg-[#EAEFEF]/70 dark:bg-slate-700/60 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-600/60 mb-6 grid grid-cols-3 gap-1">
              {(["parent", "staff", "student"] as RoleType[]).map((roleKey) => {
                const isSelected = activeRole === roleKey;
                const roleObj = ROLE_CONFIGS[roleKey];
                return (
                  <button
                    key={roleKey}
                    type="button"
                    onClick={() => handleRoleChange(roleKey)}
                    className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center ${
                      isSelected
                        ? "text-white shadow-md transform scale-[1.02]"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-600/40"
                    }`}
                    style={
                      isSelected
                        ? { backgroundColor: roleObj.themeColorHex }
                        : undefined
                    }
                  >
                    {roleObj.label}
                  </button>
                );
              })}
            </div>

            {/* Error Feedback Banner */}
            {errorMessage && (
              <div className="w-full mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/50 flex items-center gap-2.5 text-xs text-rose-700 dark:text-rose-300 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* ================= LOGIN FORM ================= */}
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              
              {/* Dynamic Identifier Field (Email / Student ID) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 tracking-wide">
                  {activeConfig.fieldLabel}
                </label>
                <div className="relative rounded-xl overflow-hidden">
                  <input
                    type={activeRole === "student" ? "text" : "email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={activeConfig.fieldPlaceholder}
                    required
                    className="w-full py-3 px-4 bg-[#EEF4FF] dark:bg-slate-700/60 border border-transparent focus:border-slate-300 dark:focus:border-slate-500 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "#EEF4FF",
                    }}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 tracking-wide">
                  Password
                </label>
                <div className="relative rounded-xl overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full py-3 pl-4 pr-11 bg-[#EEF4FF] dark:bg-slate-700/60 border border-transparent focus:border-slate-300 dark:focus:border-slate-500 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "#EEF4FF",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 transition-colors"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Forgot Password Link */}
                <div className="pt-1 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setForgotEmail(email);
                      setForgotSent(false);
                      setIsForgotModalOpen(true);
                    }}
                    className="font-medium hover:underline transition-colors focus:outline-none"
                    style={{ color: activeConfig.themeColorHex }}
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Submit Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 mt-2 rounded-xl text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: activeConfig.themeColorHex,
                }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Login</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Link back to Homepage */}
            <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
              Need help?{" "}
              <Link href="/" className="font-semibold text-slate-700 dark:text-slate-200 hover:underline">
                Return to Homepage
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* ================= FORGOT PASSWORD MODAL ================= */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-700 animate-slide-up relative">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Reset Your Password
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
              Enter your registered {activeConfig.fieldLabel.toLowerCase()} and we&apos;ll send you instructions to reset your account password.
            </p>

            {forgotSent ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
                  Reset Link Sent!
                </h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">
                  We have dispatched password recovery instructions to <span className="font-semibold">{forgotEmail}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsForgotModalOpen(false)}
                  className="mt-3 w-full py-2 px-4 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {activeConfig.fieldLabel}
                  </label>
                  <input
                    type="text"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder={activeConfig.fieldPlaceholder}
                    required
                    className="w-full py-2.5 px-3.5 bg-slate-100 dark:bg-slate-700/70 rounded-xl text-sm border border-slate-200 dark:border-slate-600 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(false)}
                    className="py-2 px-4 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="py-2 px-4 rounded-xl text-xs font-semibold text-white transition-colors disabled:opacity-60"
                    style={{ backgroundColor: activeConfig.themeColorHex }}
                  >
                    {forgotLoading ? "Sending..." : "Send Reset Link"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
