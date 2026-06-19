"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const OWNER = {
  name: "Nicolás Avilés A.",
} as const;

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/credits", label: "Credits" },
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

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 w-full z-50">
      <div
        className="absolute top-0 left-0 w-full h-[140%] backdrop-blur-md bg-black/10 pointer-events-none z-0"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        <Link href="/" aria-label="Home" className="group relative z-20 flex items-center gap-4 transition-all duration-300">
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
        </Link>
        <ul className="relative z-20 flex gap-4 md:gap-14 text-neutral-300 list-none items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="group">
                <motion.div initial="initial" whileHover="hover">
                  <AnimatedHoverText
                    text={label.toUpperCase()}
                    className="text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.25em]"
                  />
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}