import axios from "axios";
import { encryptPayloadHybrid } from "./encryption"; // import your encryption function
import { toast } from "react-toastify"; 
import { getAccessToken } from "./auth";


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🧠 Intercept every request before sending
api.interceptors.request.use(async (config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const pinSecret = sessionStorage.getItem("pinSecret");
  if (pinSecret) {
    config.headers["x-pin-secret"] = pinSecret;
  }

  // 🔒 Encrypt only POST request payloads
  // Skip FormData (multipart file uploads) — encrypting a FormData object
  // destroys its fields before the server can parse them.
  if (config.method?.toLowerCase() === "post" && config.data && !(config.data instanceof FormData)) {
    try {
      const serverPublicKeyPem = (process.env.NEXT_PUBLIC_SERVER_PUBLIC_KEY || "").replace(/\\n/g, "\n").trim();

      // Encrypt the payload
      const encryptedPayload = await encryptPayloadHybrid(config.data, serverPublicKeyPem);

      // Replace data with encrypted payload
      config.data = encryptedPayload;
    } catch (error) {
      // console.error("❌ Encryption failed:", error);
      throw error;
    }
  }

  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status;

      if (status === 495) {
        sessionStorage.clear();
        localStorage.clear();
        document.cookie.split(";").forEach((c) => {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });         
      } else if (status === 401 || status === 403) {
        sessionStorage.clear();
        localStorage.clear();
        document.cookie.split(";").forEach((c) => {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        
        const message = (error.response.data)?.message || "Access denied. Please log in again.";
        toast.error(message);
        
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
      }
      else {
        const message =
          (error.response.data)?.message ||
          "A problem was encountered";

        toast.error(message); // or custom Alert/modal
      }
    } else {
      toast.error("A problem was encountered");
    }

    // keep promise rejected so callers can decide what to do
    return Promise.reject(error);
  }
);



export default api;