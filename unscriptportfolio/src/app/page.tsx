"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const OWNER = {
  name: "Nicolás Avilés A.",
  title: "2D Animator",
  email: "avilesarayan@gmail.com",
  bio: [
    "I specialize in traditional 2D animation and cut-out techniques.",
    "I've had the opportunity to be part of the animation teams for series such as Rick and Morty (Season 8) and Doggy World (Season 2), in addition to a selection of upcoming, unannounced productions.",
    "I consider myself a detail-oriented professional who values teamwork. My goal is to be a positive asset to the team.",
  ],
  headline: "2D Animator | 6+ Years Exp. | International & National Projects",
} as const;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://vimeo.com/nicolasavilesa",
    label: "Vimeo",
    rel: "noopener noreferrer",
  },
  {
    href: "https://linkedin.com/in/nicolasavilesa",
    label: "LinkedIn",
    rel: "noopener noreferrer",
  },
  {
    href: "https://instagram.com/unscriptedream",
    label: "Instagram",
    rel: "noopener noreferrer",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
} as const;

const fadeUpOnView = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
} as const;

function AnimatedHoverText({ href, text, className = "" }: { href: string, text: string, className?: string }) {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      className={`relative flex overflow-hidden whitespace-nowrap cursor-pointer ${className}`}
    >
      <div className="flex">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex text-white">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}

function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50"
    >
      <div 
        className="absolute top-0 left-0 w-full h-[130%] backdrop-blur-md bg-black/10 pointer-events-none"
        style={{ 
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-2">
        <a href="/" aria-label="Home" className="inline-block">
          <img
            src="/images/logo2.png"
            alt={`${OWNER.name} logo`}
            className="h-16 md:h-20 w-auto opacity-70 transition-all duration-300 ease-out hover:opacity-100 hover:animate-pulse active:scale-95 cursor-pointer"
          />
        </a>

        <ul className="flex gap-8 md:gap-16 text-neutral-300 list-none items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <AnimatedHoverText 
                href={href} 
                text={label.toUpperCase()} 
                className="text-xs md:text-sm font-light tracking-[0.25em]"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/bg-loop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/0" aria-hidden="true" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-30 text-center px-4 flex flex-col items-center"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
          {OWNER.name}
        </h1>

        <p className="mt-6 text-sm md:text-base text-neutral-200 max-w-md mx-auto">
          {OWNER.title}
        </p>

        <a
          href="/reel"
          className="inline-flex items-center gap-3 mt-10 px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
        >
          VIEW DEMO REEL →
        </a>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 px-6 md:px-12 pt-24 md:pt-32 pb-24 md:pb-32"
    >
      <motion.div
        variants={fadeUpOnView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <p
          id="about-heading"
          className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-12 md:mb-16"
        >
          About
        </p>

        <div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-24 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/profile.jpg"
              alt={`Portrait of ${OWNER.name}`}
              className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-50 transition duration-500"
            />
          </div>

          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-8 md:mb-10">
              {OWNER.headline}
            </h2>

            <div className="text-neutral-300 text-base md:text-xl leading-relaxed space-y-4">
              {OWNER.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 px-6 md:px-10 py-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p
          id="contact-heading"
          className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8"
        >
          Contact
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-none">
          Let&apos;s create
          <br />
          something together.
        </h2>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-end gap-10">
          <address className="not-italic min-w-[220px] text-neutral-400">
            <a
              href={`mailto:${OWNER.email}`}
              className="hover:text-white transition-colors duration-300"
            >
              {OWNER.email}
            </a>
          </address>

          <div
            className="hidden md:block flex-1 border-b border-neutral-700 mb-2"
            aria-hidden="true"
          />

          <nav aria-label="Social media links">
            <ul className="flex gap-8 md:gap-10 text-neutral-400 list-none items-center">
              {SOCIAL_LINKS.map(({ href, label, rel }) => (
                <li key={href}>
                   <AnimatedHoverText 
                     href={href} 
                     text={label.toUpperCase()} 
                     className="text-xs md:text-sm font-light tracking-[0.25em]"
                   />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function SharedBackground({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center blur-10 scale-110 opacity-30"
        style={{ backgroundImage: "url('/images/bgaboutcontact.gif')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />
      {children}
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <SharedBackground>
        <AboutSection />
        <ContactFooter />
      </SharedBackground>
    </main>
  );
}