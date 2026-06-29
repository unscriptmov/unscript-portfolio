"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";

const OWNER = {
  name: "NICOLÁS AVILÉS A.",
  title: "2D Animator",
  email: "avilesarayan@gmail.com",
} as const;

const SOCIAL_LINKS = [
  { href: "https://vimeo.com/unscriptedream", label: "Vimeo", rel: "noopener noreferrer" },
  { href: "https://www.linkedin.com/in/unscriptedream/", label: "LinkedIn", rel: "noopener noreferrer" },
  { href: "https://instagram.com/unscriptedream", label: "Instagram", rel: "noopener noreferrer" },
] as const;

interface CreditItem {
  title: string;
  studio: string;
  format: string;
  role: string;
  year: string;
  image: string | null;
  isProtected: boolean;
}

const CREDITS_LIST: readonly CreditItem[] = [
  { title: "Confidential Project", studio: "Bombillo Amarillo", format: "Feature Film", role: "2D Animator", year: "2026", image: null, isProtected: true },
  { title: "Confidential Project", studio: "Bombillo Amarillo", format: "TV Series", role: "2D Animator", year: "2026", image: null, isProtected: true },
  { title: "Confidential Project", studio: "Team Toon Studio", format: "Webseries", role: "2D Animator", year: "2025", image: null, isProtected: true },
  { title: "Confidential Project", studio: "Valpollywood", format: "Feature Film", role: "2D Animator", year: "2025", image: null, isProtected: true },
  { title: "Ormhildur the Brave (Season 1)", studio: "Mako Animation Studio", format: "TV Series", role: "2D Animator & Compositing", year: "2025", image: "/images/orm.png", isProtected: false },
  { title: "Rick and Morty (Season 8)", studio: "Gasolina Studios / Adult Swim", format: "TV Series", role: "2D Animator", year: "2024-2025", image: "/images/ram8.png", isProtected: false },
  { title: "VeeFriends", studio: "Zeppelin Creative Studio", format: "Webseries", role: "2D Animator", year: "2024", image: "/images/veefriends.png", isProtected: false },
  { title: "Thready Bear", studio: "Maneki Studio", format: "Miniseries", role: "2D Animator", year: "2024", image: "/images/thready.png", isProtected: false },
  { title: "Doggy World (Season 2)", studio: "Zumbastico Studios", format: "TV Series", role: "2D Animator", year: "2023-2024", image: "/images/doggyworld.png", isProtected: false },
  { title: "Locos lab (Season 2)", studio: "Dinogorila Creative Lab", format: "TV Series", role: "2D Animator", year: "2023", image: "/images/locoslab2.png", isProtected: false },
  { title: "Las aventuras de la brujita Tatty", studio: "Maneki Studio", format: "Webseries", role: "2D Animator", year: "2022-2023", image: "/images/tatty.png", isProtected: false },
  { title: "Polinópolis (Season 1)", studio: "Maneki Studio", format: "TV Series", role: "2D Animator", year: "2021-2022", image: "/images/polinopolis.png", isProtected: false },
  { title: "Las aventuras de Pancha, Rina y Zac", studio: "Niebla Producciones", format: "Miniseries", role: "2D Animator & Rigger", year: "2021", image: "/images/niebla.png", isProtected: false },
] as const;

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

function CompactFooter() {
  return (
    <footer className="relative z-10 px-6 md:px-10 mt-24 md:mt-40">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
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

export default function Credits() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <main className="relative min-h-screen pt-28 md:pt-40 pb-16 bg-black text-white font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer-move {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        .animate-shimmer {
          animation: shimmer-move 2.5s infinite ease-in-out;
        }
      `}} />

      <div className="fixed inset-0 z-0">
        <img src="/images/bgaboutcontact.gif" alt="Background Animation" className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-12">
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
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
        </div>

        <div className="flex flex-col gap-8 md:gap-16">
          {CREDITS_LIST.map((credit, index) => {
            const isEven = index % 2 === 0;
            const isProtected = credit.isProtected;

            return (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center group ${isProtected ? "opacity-80" : ""}`}>
                <div className={`relative w-full ${isProtected ? "h-20 md:h-24" : "h-40 md:h-48"} bg-neutral-900/60 rounded-lg md:rounded-xl overflow-hidden border border-neutral-800/60 transition-all duration-300 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  {isProtected || !credit.image ? (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900/40">
                      <span className="text-neutral-500 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium border border-neutral-800 px-2 py-0.5 md:px-3 md:py-1">NDA Protected</span>
                    </div>
                  ) : (
                    <img src={credit.image} alt={credit.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  )}
                </div>

                <div className={`flex flex-col justify-center w-full ${isEven ? "md:order-2 md:pl-4" : "md:order-1 md:items-end md:pr-4"}`}>
                  <div className={`flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-neutral-500 mb-1 md:mb-2 ${!isEven && "md:flex-row-reverse"}`}>
                    <span className="font-semibold text-neutral-400">{credit.year}</span>
                    <span className="text-neutral-700">•</span>
                    <span className="uppercase text-[9px] md:text-[11px] font-light tracking-wider">{credit.format}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {isProtected ? <span className="opacity-50 font-medium italic">Confidential Project</span> : credit.title}
                  </h2>
                  <div className={`mt-1 md:mt-2 flex gap-2 md:gap-3 text-[11px] md:text-sm text-neutral-400 ${!isEven && "md:flex-row-reverse"}`}>
                    <span className="font-medium text-neutral-300">{credit.role}</span>
                    <span className="text-neutral-700 hidden md:block">|</span>
                    <span className="font-light">{credit.studio}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CompactFooter />
    </main>
  );
}