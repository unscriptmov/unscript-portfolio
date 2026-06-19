"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";

const OWNER = {
  name: "Nicolás Avilés A.",
  title: "2D Animator",
  email: "avilesarayan@gmail.com",
  bio: [
    "I'm a Chilean animation artist with over 5 years of industry experience, ranging from short films and TV series to feature films.",
    <>I've had the opportunity to be part of the animation teams for series such as <em>Rick and Morty</em> «Season 8» and <em>Doggy World</em> «Season 2», in addition to a selection of upcoming, unannounced productions.</>,
    "I consider myself a detail-oriented professional who values teamwork, and my goal is to always be a positive asset to the team.",
  ] as React.ReactNode[],
  headline: "2D Animator | International & National Projects",
} as const;

const SOCIAL_LINKS = [
  { href: "https://vimeo.com/unscriptedream", label: "Vimeo", rel: "noopener noreferrer" },
  { href: "https://www.linkedin.com/in/unscriptedream/", label: "LinkedIn", rel: "noopener noreferrer" },
  { href: "https://instagram.com/unscriptedream", label: "Instagram", rel: "noopener noreferrer" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
} as const;

const fadeUpOnView = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
} as const;

function AnimatedHoverText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap cursor-pointer ${className}`}>
      <div className="flex">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{ initial: { y: 0 }, hover: { y: "-100%" } }}
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
            variants={{ initial: { y: "100%" }, hover: { y: 0 } }}
            transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-30 select-none pointer-events-none">
      <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-light">Scroll</span>
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          animate={{ scale: [0.6, 1.4], opacity: [0.8, 0] }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1], repeat: Infinity }}
          className="absolute w-3 h-3 border border-white rotate-45"
        />
        <div className="w-1 h-1 bg-white rotate-45 rounded-[1px]" />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section aria-label="Hero" className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="/videos/bg-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
      
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-30 text-center px-4">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer-move {
            0% { transform: translateX(-150%) skewX(-15deg); }
            100% { transform: translateX(150%) skewX(-15deg); }
          }
          .animate-shimmer {
            animation: shimmer-move 2.5s infinite ease-in-out;
          }
        `}} />

        <Link
          href="/reel"
          className="relative inline-flex items-center gap-4 px-8 py-4 border border-white/10 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] overflow-hidden group bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-white/30"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none" />
          
          <span className="relative z-10 text-neutral-300 group-hover:text-white transition-colors duration-300">
            Play NDA Demo Reel
          </span>
          
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        </Link>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}

function AboutSection() {
  return (
    <div aria-labelledby="about-heading" className="relative z-10 px-6 md:px-12">
      <motion.div variants={fadeUpOnView} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <p id="about-heading" className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-8 md:mb-16">About</p>
        <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-24 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/profile.jpg"
              alt={`Portrait of ${OWNER.name}`}
              className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-xl md:text-3xl leading-tight font-semibold mb-6 md:mb-10">{OWNER.headline}</h2>
            <div className="text-neutral-300 text-sm md:text-xl leading-relaxed space-y-4">
              {OWNER.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
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
        <p id="contact-heading" className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-8">Contact</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-none tracking-tight">
          Let&apos;s create<br />something together.
        </h2>
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-end gap-8">
          <address className="not-italic min-w-min text-neutral-400 text-sm md:text-base">
            <a href={`mailto:${OWNER.email}`} className="hover:text-white transition-colors duration-300">{OWNER.email}</a>
          </address>
          <div className="hidden md:block flex-1 border-b border-neutral-700 mb-2" aria-hidden="true" />
          <nav aria-label="Social media links">
            <ul className="flex gap-6 md:gap-10 text-neutral-400 list-none items-center">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group">
                    <motion.div initial="initial" whileHover="hover">
                      <AnimatedHoverText text={label.toUpperCase()} className="text-[10px] md:text-sm font-light tracking-[0.25em]" />
                    </motion.div>
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

function SharedBackground({ children }: { children: React.ReactNode }) {
  return (
    <section id="about" className="relative overflow-hidden pt-16 md:pt-32 pb-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center blur-10 scale-110 opacity-30"
        style={{ backgroundImage: "url('/images/bgaboutcontact.gif')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />
      <div className="flex flex-col gap-12 md:gap-20">{children}</div>
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
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-black text-white font-sans">
      <HeroSection />
      <SharedBackground>
        <AboutSection />
        <ContactFooter />
      </SharedBackground>
    </main>
  );
}