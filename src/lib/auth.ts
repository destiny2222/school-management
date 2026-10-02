import type { AuthTokens } from "@/types/auth";

const TOKEN_COOKIE = "token";
const REFRESH_COOKIE = "refreshToken";

// Cookie max-age in seconds (7 days — matches backend refresh token expiry)
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60;

/* ── Token persistence (cookies only) ───────────────────────────────── */

/**
 * Persist auth tokens as cookies so the Next.js middleware (proxy.ts) can
 * detect authentication, and the axios interceptor can read the access token.
 *
 * No user data is stored on the client — use `/api/v1/auth/me` to fetch
 * the current user when needed.
 */
export function saveTokens(tokens: AuthTokens): void {
  document.cookie = `${TOKEN_COOKIE}=${tokens.accessToken}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  document.cookie = `${REFRESH_COOKIE}=${tokens.refreshToken}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function getAccessToken(): string | null {
  if (typeof document === "undefined") return null;
  return getCookie(TOKEN_COOKIE);
}

export function getRefreshToken(): string | null {
  if (typeof document === "undefined") return null;
  return getCookie(REFRESH_COOKIE);
}

/* ── Logout / clear ────────────────────────────── */

export function clearAuth(): void {
  // Expire both cookies
  document.cookie = `${TOKEN_COOKIE}=; path=/; max-age=0`;
  document.cookie = `${REFRESH_COOKIE}=; path=/; max-age=0`;
}


/* ── Cookie helper ──────────────────────────────────────────────────── */

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}
