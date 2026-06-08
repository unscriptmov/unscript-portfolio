"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const OWNER = {
  name: "Nicolás Avilés A.",
  title: "2D Animator",
  email: "avilesarayan@gmail.com",
  bio: [
    "I'm a Chilean animation artist with 5+ years of industry experience, ranging from short films and TV series to feature films.",
    "I've had the opportunity to be part of the animation teams for series such as Rick and Morty (Season 8) and Doggy World (Season 2), in addition to a selection of upcoming, unannounced productions.",
    "I consider myself a detail-oriented professional who values teamwork. My goal is to be a positive asset to the team.",
  ],
  headline: "2D Animator | International & National Projects",
} as const;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "/credits", label: "Credits" },
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

function AnimatedHoverText({ href, text, className = "" }: { href: string; text: string; className?: string }) {
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
    <nav aria-label="Main navigation" className="fixed top-0 left-0 w-full z-50">
      <div
        className="absolute top-0 left-0 w-full h-[140%] backdrop-blur-md bg-black/10 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        <a href="/" aria-label="Home" className="group flex items-center gap-4 transition-all duration-300">
          <img
            src="/images/logo2.png"
            alt={`${OWNER.name} logo`}
            className="h-10 md:h-16 w-auto opacity-80 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:animate-pulse active:scale-95 cursor-pointer"
          />
          <div className="flex flex-col justify-center select-none leading-normal gap-1.5">
            <span className="text-white text-[10px] md:text-base font-medium tracking-[0.2em] md:tracking-[0.25em] uppercase transition-colors duration-300 group-hover:text-neutral-300">
              {OWNER.name}
            </span>
            <span className="text-neutral-400 text-[8px] md:text-xs font-light tracking-[0.15em] md:tracking-[0.2em] uppercase opacity-90">
              2D Animation Artist
            </span>
          </div>
        </a>

        <ul className="flex gap-4 md:gap-14 text-neutral-300 list-none items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <AnimatedHoverText
                href={href}
                text={label.toUpperCase()}
                className="text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.25em]"
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
    <section aria-label="Hero" className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
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
        <a
          href="/reel"
          className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-full text-[10px] md:text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 bg-black/10 backdrop-blur-sm"
        >
          VIEW DEMO REEL →
        </a>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <div aria-labelledby="about-heading" className="relative z-10 px-6 md:px-12">
      <motion.div
        variants={fadeUpOnView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <p id="about-heading" className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-8 md:mb-16">
          About
        </p>

        <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-24 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/profile.jpg"
              alt={`Portrait of ${OWNER.name}`}
              className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-50 transition duration-500"
            />
          </div>

          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-xl md:text-3xl leading-tight font-semibold mb-6 md:mb-10">
              {OWNER.headline}
            </h2>

            <div className="text-neutral-300 text-sm md:text-xl leading-relaxed space-y-4">
              {OWNER.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <p className="pt-2 text-neutral-300 text-[13px] md:text-base">
                Reel password upon request at:{" "}
                <a
                  href={`mailto:${OWNER.email}`}
                  className="text-white font-semibold underline underline-offset-4 decoration-white/60 hover:decoration-white transition-colors duration-300 inline-block"
                >
                  {OWNER.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ContactFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="relative z-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto w-full">
        <p id="contact-heading" className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-8">
          Contact
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-none tracking-tight">
          Let&apos;s create
          <br />
          something together.
        </h2>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-end gap-8">
          <address className="not-italic min-w-min text-neutral-400 text-sm md:text-base">
            <a href={`mailto:${OWNER.email}`} className="hover:text-white transition-colors duration-300">
              {OWNER.email}
            </a>
          </address>

          <div className="hidden md:block flex-1 border-b border-neutral-700 mb-2" aria-hidden="true" />

          <nav aria-label="Social media links">
            <ul className="flex gap-6 md:gap-10 text-neutral-400 list-none items-center">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <AnimatedHoverText
                    href={href}
                    text={label.toUpperCase()}
                    className="text-[10px] md:text-sm font-light tracking-[0.25em]"
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
    <section id="about" className="relative overflow-hidden pt-16 md:pt-32 pb-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center blur-10 scale-110 opacity-30"
        style={{ backgroundImage: "url('/images/bgaboutcontact.gif')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />
      <div className="flex flex-col gap-12 md:gap-20">
        {children}
      </div>
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