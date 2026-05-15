"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-1 backdrop-blur-md bg-black/5 border-neutral-900">

  <div className="max-w-5xl mx-auto flex items-center justify-between">

    <img
      src="/images/logo2.png"
      alt="logo"
      className="h-20 w-auto opacity-99"
    />

    <div className="flex gap-16 text-sm text-neutral-300">

      <a
        href="#about"
        className="hover:text-white transition-colors duration-300"
      >
        About
      </a>

      <a
        href="#contact"
        className="hover:text-white transition-colors duration-300"
      >
        Contact
      </a>

    </div>

  </div>

</nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/bg-loop.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >

          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-neutral-200">
            Portfolio 2026
          </p>

          <h1 className="text-7xl md:text-9xl font-bold leading-none">
            Nicolás Avilés A.
          </h1>

          <p className="mt-6 text-neutral-200 max-w-md mx-auto">
            2D Animator
          </p>

          <a
            href="/reel"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
            > View Demo Reel →
          </a>

        </motion.div>

      </section>

      {/* ABOUT + CONTACT WRAPPER */}
      <section className="relative overflow-hidden">

        {/* SHARED BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-10 scale-110 opacity-30"
          style={{
            backgroundImage: "url('/images/bgaboutcontact.gif')"
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* ABOUT */}
        <section
          id="about"
          className="relative z-10 px-12 pt-32 pb-32"
        >

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-16">
              About
            </p>

            <div className="grid md:grid-cols-[320px_1fr] gap-24 items-center">

              <div className="flex justify-center md:justify-start">

                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-80 h-80 object-cover rounded-2xl grayscale hover:grayscale-50 transition duration-500"
                />

              </div>

              <div className="max-w-2xl">

                <h2 className="text-3xl leading-tight font-semibold mb-10">
                  2D Animator | 6+ Years Exp. | International & National Projects
                </h2>

                <p className="text-neutral-300 text-xl leading-relaxed">
                  I specialize in traditional 2D animation and cut-out techniques.
                  <br />
                  I’ve had the opportunity to be part of the animation teams for series such as Rick and Morty (Season 8) and Doggy World (Season 2),
                  in addition to a selection of upcoming, unannounced productions.

                  <br />
                  <br />

                  I consider myself a detail-oriented professional who values teamwork.
                  My goal is to be a positive asset to the team.
                </p>

              </div>

            </div>

          </motion.div>

        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="relative z-10 px-10 py-12"
        >

          <div className="max-w-6xl mx-auto">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
              Contact
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold leading-none">
              Let’s create
              <br />
              something together.
            </h2>

            <div className="mt-16 flex flex-col md:flex-row items-end gap-10">

              {/* EMAIL */}
              <div className="min-w-[220px] text-neutral-400">

                <a
                  href="mailto:avilesarayan@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  avilesarayan@gmail.com
                </a>

              </div>

              {/* LINE */}
              <div className="hidden md:block flex-1 border-b border-neutral-700 mb-2"></div>

              {/* SOCIALS */}
              <div className="flex gap-10 text-neutral-400">

                <a
                  href="https://vimeo.com/nicolasavilesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Vimeo
                </a>

                <a
                  href="https://linkedin.com/in/nicolasavilesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

        </footer>

      </section>

    </main>
  );
}