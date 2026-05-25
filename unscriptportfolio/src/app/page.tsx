"use client";

import { motion } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────

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

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
} as const;

const fadeUpOnView = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
} as const;

// ─── Sub-components ────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-1 backdrop-blur-md bg-black/5 border-neutral-900"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <img
          src="/images/logo2.png"
          alt={`${OWNER.name} logo`}
          className="h-16 md:h-20 w-auto opacity-99"
        />

        <ul className="flex gap-8 md:gap-16 text-sm text-neutral-300 list-none">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-white transition-colors duration-300"
              >
                {label}
              </a>
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
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
          View Demo Reel →
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
      <div className="max-w-6xl mx-auto">
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
            <ul className="flex gap-8 md:gap-10 text-neutral-400 list-none">
              {SOCIAL_LINKS.map(({ href, label, rel }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel={rel}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// ─── Shared background wrapper ─────────────────────────────────────────────────

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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
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
