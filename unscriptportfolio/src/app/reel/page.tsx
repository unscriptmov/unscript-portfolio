"use client";

import { useState, useCallback } from "react";

// ─── Constants ─────────────────────────────────────────────────────────────────

const REEL_EMBED_URL =
  "https://res.cloudinary.com/dp2y2sz6l/video/upload/v1781279925/DemoReel_2026-Nicolas_Aviles-S1-web_rmdfbq.mp4";

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
    <div className="relative z-10 w-full max-w-xl text-center flex flex-col items-center px-4">
      {/* Título con mejor peso y tracking escalado */}
      <h1 className="text-sm md:text-lg font-semibold uppercase tracking-[0.4em] text-neutral-300 mb-12 select-none">
        NDA Demo Reel
      </h1>

      {/* Contenedor del input con ancho óptimo para escritorio */}
      <div className="w-full max-w-[320px]">
        <input
          type="password"
          placeholder={status === "loading" ? "Verifying…" : "Password"}
          value={password}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={status === "loading"}
          aria-label="Demo reel password"
          aria-invalid={status === "error"}
          className="w-full bg-transparent border-b-2 border-white/20 py-3 text-center outline-none focus:border-white transition-all duration-300 disabled:opacity-50 text-base md:text-xl tracking-[0.25em] placeholder:tracking-[0.15em] placeholder:text-neutral-600"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 text-xs md:text-sm tracking-widest text-red-400 uppercase font-light">
          Incorrect password. Try again.
        </p>
      )}

      {/* Sección inferior más visible y limpia */}
      <p className="mt-16 text-neutral-500 text-[11px] md:text-xs tracking-[0.25em] uppercase font-light leading-relaxed">
        Request password at:<br />
        <a 
          href="mailto:avilesarayan@gmail.com" 
          className="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors duration-300 inline-block mt-2 tracking-wide lowercase font-normal text-xs md:text-sm"
        >
          avilesarayan@gmail.com
        </a>
      </p>
    </div>
  );
}

function ReelPlayer() {
  const handleVideoPlay = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "video_start", {
        event_category: 'Engagement',
        event_label: 'Reel de Animacion 2026'
      });
    }
  };

  return (
    <div className="relative z-10 w-full max-w-6xl">
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
        NDA Demo Reel 2026
      </p>

      <div className="w-full aspect-video min-h-[220px] sm:min-h-[320px] md:min-h-0 rounded-2xl overflow-hidden border border-white/10">
        <video
          src={REEL_EMBED_URL}
          title="Demo Reel 2026"
          className="w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-0"
          controls
          autoPlay
          playsInline
          onPlay={handleVideoPlay}
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
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "reel_unlocked", {
            event_category: 'Access',
            event_label: 'Password Correcto'
          });
        }
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