"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Nebula",
    category: "Motion Design",
  },
  {
    title: "Eclipse",
    category: "Creative Development",
  },
  {
    title: "Obsidian",
    category: "Brand Experience",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

{/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-1 backdrop-blur-md bg-black/5 border-neutral-900">

  <div className="max-w-5xl mx-auto flex items-center justify-between">

      <img
        src="/images/logo.png"
        alt="logo"
        className="h-20 w-auto"
      />

    <div className="flex gap-30 text-sm text-neutral-300">

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

  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  >
    <source src="/videos/bg-loop.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/0" />

  {/* CONTENT */}
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
  href="https://vimeo.com/869134295"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 mt-10 px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
>
  View Demo Reel →
</a>

  </motion.div>

</section>

{/* ABOUT */}
<section
  id="about"
  className="relative px-12 pt-12 pb-32 overflow-hidden"
>

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-80"
    style={{
      backgroundImage: "url('/images/bgabout.jpg')"
    }}
  />

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-6xl mx-auto"
  >

    {/* ABOUT LABEL */}
    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-16">
      About
    </p>

    {/* MAIN GRID */}
    <div className="grid md:grid-cols-[320px_1fr] gap-24 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center md:justify-start">

        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-80 h-80 object-cover rounded-2xl grayscale hover:grayscale-50 transition duration-500"
        />

      </div>

      {/* RIGHT TEXT */}
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
  className="border-t border-neutral-900 px-6 py-24"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
      Contact
    </p>

    <h2 className="text-5xl md:text-8xl font-semibold leading-none">
      Let’s create
      <br />
      something together.
    </h2>

    <div className="mt-16 flex flex-col md:flex-row items-start md:items-end gap-10">

      {/* EMAIL */}
      <div className="min-w-[220px] text-neutral-400">
        <a
          href="mailto:avilesarayan@gmail.com"
          className="hover:text-white transition-colors duration-300"
        >
          avilesarayan@gmail.com
        </a>
      </div>

      {/* LINEA CENTRAL */}
      <div className="hidden md:block flex-1 border-b border-neutral-800 mb-2"></div>

      {/* REDES */}
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

    </main>
  );
}