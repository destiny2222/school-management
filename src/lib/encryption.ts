/**
 * Hybrid encryption utility.
 *
 * When a server RSA public key is provided, POST payloads are encrypted with
 * a random AES-256-GCM key which is itself RSA-OAEP wrapped. When no key is
 * configured (development), the payload is returned as-is.
 */

export async function encryptPayloadHybrid(
  data: unknown,
  serverPublicKeyPem: string
): Promise<unknown> {
  // Skip encryption when no server public key is configured (dev mode)
  if (!serverPublicKeyPem) {
    return data;
  }

  try {
    // Import the RSA public key
    const binaryDer = pemToArrayBuffer(serverPublicKeyPem);
    const publicKey = await crypto.subtle.importKey(
      "spki",
      binaryDer,
      { name: "RSA-OAEP", hash: "SHA-256" },
      false,
      ["encrypt"]
    );

    // Generate a random AES-256-GCM key
    const aesKey = await crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt"]
    );

    // Encrypt the payload with AES-GCM
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const plaintext = new TextEncoder().encode(JSON.stringify(data));
    const ciphertext = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      aesKey,
      plaintext
    );

    // Wrap the AES key with RSA-OAEP
    const rawAesKey = await crypto.subtle.exportKey("raw", aesKey);
    const encryptedKey = await crypto.subtle.encrypt(
      { name: "RSA-OAEP" },
      publicKey,
      rawAesKey
    );

    return {
      encryptedKey: arrayBufferToBase64(encryptedKey),
      iv: arrayBufferToBase64(iv),
      ciphertext: arrayBufferToBase64(ciphertext),
    };
  } catch {
    // If encryption fails (bad key, unsupported algorithm, etc.), fall through
    // in development so the app remains usable.
    if (process.env.NODE_ENV === "development") {
      console.warn("[encryption] Encryption failed — sending plaintext in dev mode");
      return data;
    }
    throw new Error("Payload encryption failed");
  }
}

/* ── helpers ─────────────────────────────────────────────────────────── */

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace(/-----BEGIN PUBLIC KEY-----/g, "")
    .replace(/-----END PUBLIC KEY-----/g, "")
    .replace(/\s/g, "");
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function arrayBufferToBase64(buffer: ArrayBuffer | ArrayBufferView): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array('buffer' in buffer ? buffer.buffer : buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
