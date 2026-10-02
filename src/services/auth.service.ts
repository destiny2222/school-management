import api from "@/lib/axios";
import type { ApiResponse, LoginResponse, ForgotPasswordResponse } from "@/types/auth";

/* ── Login ───────────────────────────────────────────────────────────── */

export async function login(
  identifier: string,
  password: string
): Promise<LoginResponse> {
  const res = await api.post<ApiResponse<LoginResponse>>("/auth/login", {
    identifier,
    password,
  });
  return res.data.data;
}

/* ── Forgot Password ─────────────────────────────────────────────────── */

export async function forgotPassword(
  email: string
): Promise<ForgotPasswordResponse> {
  const res = await api.post<ApiResponse<ForgotPasswordResponse>>(
    "/auth/forgot-password",
    { email }
  );
  return res.data.data;
}

/* ── Reset Password ──────────────────────────────────────────────────── */

export async function resetPassword(
  token: string,
  newPassword: string
): Promise<{ message: string }> {
  const res = await api.post<ApiResponse<{ message: string }>>(
    "/auth/reset-password",
    { token, newPassword }
  );
  return res.data.data;
}

/* ── Refresh Token ───────────────────────────────────────────────────── */

export async function refreshToken(
  token: string
): Promise<{ accessToken: string }> {
  const res = await api.post<ApiResponse<{ accessToken: string }>>(
    "/auth/refresh",
    { refreshToken: token }
  );
  return res.data.data;
}

/* ── Logout ──────────────────────────────────────────────────────────── */

export async function logout(refreshTokenValue?: string): Promise<void> {
  await api.post("/auth/logout", {
    refreshToken: refreshTokenValue,
  });
}

/* ── Profile ─────────────────────────────────────────────────────────── */

export async function getProfile() {
  const res = await api.get<ApiResponse>("/auth/me");
  return res.data.data;
}
