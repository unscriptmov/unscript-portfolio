"use client";

import { useState } from "react";

export default function ReelPage() {

  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const correctPassword = "REEL2026";

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (

    <main className="relative min-h-screen text-white flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm scale-110"
        style={{
          backgroundImage: "url('/images/bgaboutcontact.gif')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {!authorized ? (

        <div className="relative z-10 w-full max-w-md text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Private Demo Reel
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-10">
            Enter Password
          </h1>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-center outline-none focus:border-white transition-all duration-300"
          />

          <button
            onClick={handleLogin}
            className="mt-6 px-8 py-4 border border-white/20 rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Enter
          </button>

        </div>

      ) : (

        <div className="relative z-10 w-full max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Demo Reel 2026
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">

            <iframe
              src="https://drive.google.com/file/d/1OFPnMbk6sFN9Z-uGRURiZHah7IfzRuZG/preview"
              className="w-full h-full"
              allow="autoplay"
            ></iframe>

          </div>

        </div>

      )}

    </main>
  );
}