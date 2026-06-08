"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const OWNER = {
  name: "Nicolás Avilés A.",
  title: "2D Animator",
  email: "avilesarayan@gmail.com",
} as const;

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/credits", label: "Credits" },
] as const;

const CREDITS_LIST = [
  { title: "Confidential Project", studio: "Bombillo Amarillo", format: "Feature Film", role: "2D Animator", year: "2026", image: null, isProtected: true },
  { title: "Confidential Project", studio: "Bombillo Amarillo", format: "TV Series", role: "2D Animator", year: "2026", image: null, isProtected: true },
  { title: "Confidential Project", studio: "Team Toon Studio", format: "Webseries", role: "2D Animator", year: "2025", image: null, isProtected: true },
  { title: "Confidential Project", studio: "Valpollywood", format: "Feature Film", role: "2D Animator", year: "2025", image: null, isProtected: true },
  { title: "Ormhildur the Brave (Season 1)", studio: "Mako Animation Studio", format: "TV Series", role: "2D Animator & Compositing", year: "2025", image: "/images/orm.png", isProtected: false },
  { title: "Rick and Morty (Season 8)", studio: "Gasolina Studios / Adult Swim", format: "TV Series", role: "2D Animator", year: "2024", image: "/images/ram8.png", isProtected: false },
  { title: "VeeFriends", studio: "Zeppelin Creative Studio", format: "Webseries", role: "2D Animator", year: "2024", image: "/images/veefriends.png", isProtected: false },
  { title: "Thready Bear", studio: "Maneki Studio", format: "Miniseries", role: "2D Animator", year: "2024", image: "/images/thready.png", isProtected: false },
  { title: "Doggy World (Season 2)", studio: "Zumbastico Studios", format: "TV Series", role: "2D Animator", year: "2024", image: "/images/doggyworld.png", isProtected: false },
  { title: "Locos lab (Season 2)", studio: "Dinogorila Creative Lab", format: "TV Series", role: "2D Animator", year: "2023", image: "/images/locoslab2.png", isProtected: false },
  { title: "Las aventuras de la brujita Tatty", studio: "Maneki Studio", format: "Webseries", role: "2D Animator", year: "2022-2023", image: "/images/tatty.png", isProtected: false },
  { title: "Polinópolis (Season 1)", studio: "Maneki Studio", format: "TV Series", role: "2D Animator", year: "2022", image: "/images/polinopolis.png", isProtected: false },
  { title: "Las aventuras de Pancha, Rina y Zac", studio: "Niebla Producciones", format: "Miniseries", role: "2D Animator & Rigger", year: "2021", image: "/images/niebla.png", isProtected: false },
] as const;

function AnimatedHoverText({ href, text, className = "" }: { href: string; text: string; className?: string }) {
  return (
    <motion.a href={href} initial="initial" whileHover="hover" className={`relative flex overflow-hidden whitespace-nowrap cursor-pointer ${className}`}>
      <div className="flex">
        {text.split("").map((letter, i) => <motion.span key={i} variants={{ initial: { y: 0 }, hover: { y: "-100%" } }} transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }} className="inline-block">{letter === " " ? "\u00A0" : letter}</motion.span>)}
      </div>
      <div className="absolute inset-0 flex text-white">
        {text.split("").map((letter, i) => <motion.span key={i} variants={{ initial: { y: "100%" }, hover: { y: 0 } }} transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }} className="inline-block">{letter === " " ? "\u00A0" : letter}</motion.span>)}
      </div>
    </motion.a>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="absolute top-0 left-0 w-full h-[140%] backdrop-blur-md bg-black/10 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="/" className="group flex items-center gap-4">
          <img src="/images/logo2.png" alt="Logo" className="h-14 md:h-16 w-auto opacity-80" />
          <div className="flex flex-col justify-center leading-normal gap-1.5">
            <span className="text-white text-sm md:text-base font-medium tracking-[0.25em] uppercase">{OWNER.name}</span>
            <span className="text-neutral-400 text-[9px] md:text-xs font-light tracking-[0.2em] uppercase">2D Animation Artist</span>
          </div>
        </a>
        <ul className="flex gap-8 md:gap-14 text-neutral-300 list-none items-center">
          {NAV_LINKS.map(({ href, label }) => <li key={href}><AnimatedHoverText href={href} text={label.toUpperCase()} className="text-xs md:text-sm font-medium tracking-[0.25em]" /></li>)}
        </ul>
      </div>
    </nav>
  );
}

export default function Credits() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen pt-40 pb-16 bg-black">
      <div className="fixed inset-0 z-0">
        <img src="/images/bgaboutcontact.gif" alt="Background Animation" className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Botón de acceso al Reel */}
        <div className="mb-20 flex flex-col items-center text-center">
          <a 
            href="https://unscriptedream.com/reel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-neutral-900 border border-neutral-700 hover:border-white transition-all duration-300 rounded-full"
          >
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-white group-hover:tracking-[0.25em] transition-all duration-300">
              NDA DEMO REEL
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {CREDITS_LIST.map((credit, index) => {
            const isEven = index % 2 === 0;
            const isProtected = (credit as any).isProtected;

            return (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-4 items-center group ${isProtected ? "opacity-80" : ""}`}>
                <div className={`relative w-full ${isProtected ? "h-24" : "h-44 md:h-48"} bg-neutral-900/60 rounded-xl overflow-hidden border border-neutral-800/60 transition-all duration-300 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  {isProtected ? (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900/40">
                      <span className="text-neutral-500 text-[9px] uppercase tracking-[0.3em] font-medium border border-neutral-800 px-3 py-1">NDA Protected</span>
                    </div>
                  ) : (
                    <img src={(credit as any).image} alt={credit.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>

                <div className={`flex flex-col justify-center w-full ${isEven ? "md:order-2 md:pl-4" : "md:order-1 md:items-end md:pr-4"}`}>
                  <div className={`flex items-center gap-3 text-xs text-neutral-500 mb-2 ${!isEven && "md:flex-row-reverse"}`}>
                    <span className="font-semibold text-neutral-400">{credit.year}</span>
                    <span className="text-neutral-700">•</span>
                    <span className="uppercase text-[11px]">{credit.format}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white leading-tight">
                    {isProtected ? <span className="opacity-50 italic">Confidential Project</span> : credit.title}
                  </h2>
                  <div className={`mt-2 flex gap-3 text-sm text-neutral-400 ${!isEven && "md:flex-row-reverse"}`}>
                    <span className="font-medium text-neutral-300">{credit.role}</span>
                    <span className="text-neutral-700">|</span>
                    <span className="font-light">{credit.studio}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-light tracking-wider">
          <span>© 2026 {OWNER.name}</span>
          <p>Reel password upon request at: <a href={`mailto:${OWNER.email}`} className="text-neutral-400 hover:text-white underline">{OWNER.email}</a></p>
        </div>
      </div>
    </main>
  );
}