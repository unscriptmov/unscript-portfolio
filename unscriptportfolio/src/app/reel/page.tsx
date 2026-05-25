"use client";

import { useState, useCallback } from "react";

// ─── Constants ─────────────────────────────────────────────────────────────────

const REEL_EMBED_URL =
  "https://drive.google.com/file/d/1OFPnMbk6sFN9Z-uGRURiZHah7IfzRuZG/preview";

// ─── Types ──────────────────────────────────────────────────────────────────────

type AuthStatus = "idle" | "loading" | "error";

// ─── Sub-components ────────────────────────────────────────────────────────────

function BackgroundLayers() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm scale-110"
        style={{ backgroundImage: "url('/images/bgaboutcontact.gif')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/90" />
    </>
  );
}

interface PasswordFormProps {
  password: string;
  status: AuthStatus;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

function PasswordForm({ password, status, onChange, onSubmit }: PasswordFormProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="relative z-10 w-full max-w-md text-center">
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
        Private Demo Reel
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
        Enter Password
      </h1>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={status === "loading"}
        aria-label="Demo reel password"
        aria-invalid={status === "error"}
        className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-center outline-none focus:border-white transition-all duration-300 disabled:opacity-50"
      />

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red-400">
          Incorrect password. Try again.
        </p>
      )}

      <button
        onClick={onSubmit}
        disabled={status === "loading" || password.trim() === ""}
        className="mt-6 px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Verifying…" : "Enter"}
      </button>
    </div>
  );
}

function ReelPlayer() {
  return (
    <div className="relative z-10 w-full max-w-6xl">
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
        Demo Reel 2026
      </p>

      <div className="w-full aspect-video min-h-[220px] sm:min-h-[320px] md:min-h-0 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src={REEL_EMBED_URL}
          title="Demo Reel 2026"
          className="w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-0"
          allow="autoplay"
        />
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ReelPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [status, setStatus] = useState<AuthStatus>("idle");

  const handleLogin = useCallback(async () => {
    if (password.trim() === "") return;

    setStatus("loading");

    try {
      const res = await fetch("/api/reel-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.authorized) {
        setAuthorized(true);
      } else {
        setStatus("error");
        setPassword("");
      }
    } catch {
      setStatus("error");
    }
  }, [password]);

  return (
    <main className="relative min-h-screen text-white flex items-center justify-center px-4 md:px-6 overflow-hidden">
      <BackgroundLayers />

      {authorized ? (
        <ReelPlayer />
      ) : (
        <PasswordForm
          password={password}
          status={status}
          onChange={(val) => {
            setPassword(val);
            if (status === "error") setStatus("idle");
          }}
          onSubmit={handleLogin}
        />
      )}
    </main>
  );
}
