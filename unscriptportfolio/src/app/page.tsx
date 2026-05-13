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
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">

  <div className="max-w-7xl mx-auto flex items-center justify-between">

    <h1 className="text-sm tracking-[0.3em] uppercase">
      UNSCRIPT
    </h1>

    <div className="flex gap-8 text-sm text-neutral-400">

      <a
        href="#"
        className="hover:text-white transition-colors duration-300"
      >
        About
      </a>

      <a
        href="#"
        className="hover:text-white transition-colors duration-300"
      >
        Work
      </a>

      <a
        href="#"
        className="hover:text-white transition-colors duration-300"
      >
        Contact
      </a>

    </div>

  </div>

</nav>
      {/* HERO */}
      <section className="h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-neutral-400">
            Portfolio 2026
          </p>

          <h1 className="text-7xl md:text-9xl font-bold leading-none">
            UNSCRIPT
          </h1>

          <p className="mt-6 text-neutral-400 max-w-md mx-auto">
            Creative developer & visual designer crafting cinematic digital
            experiences.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="min-h-screen px-6 py-32 border-t border-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-10">
            About
          </p>

          <h2 className="text-4xl md:text-7xl leading-tight font-semibold max-w-4xl">
            Designing immersive digital experiences through motion,
            typography, and interaction.
          </h2>

          <p className="mt-12 text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Focused on creating modern interfaces inspired by cinematic
            storytelling, motion design, and experimental web experiences.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-16">
            Selected Work
          </p>

          <div className="space-y-32">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="group"
              >

                <div className="overflow-hidden rounded-3xl">

                  <img
                    src={`/images/project${index + 1}.jpg`}
                    alt={project.title}
                    className="w-full h-[70vh] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                </div>

                <div className="flex items-center justify-between mt-8">

                  <div>
                    <h3 className="text-4xl md:text-6xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-neutral-400">
                      {project.category}
                    </p>
                  </div>

                  <div className="hidden md:flex w-24 h-24 rounded-full border border-neutral-700 items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    →
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
{/* FOOTER */}
<footer className="border-t border-neutral-900 px-6 py-24">

  <div className="max-w-7xl mx-auto">

    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
      Contact
    </p>

    <h2 className="text-5xl md:text-8xl font-semibold leading-none">
      Let’s create
      <br />
      something iconic.
    </h2>

    <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      <div className="text-neutral-400">
        yourmail@email.com
      </div>

      <div className="flex gap-8 text-neutral-400">

        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>

        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Behance
        </a>

        <a
          href="#"
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