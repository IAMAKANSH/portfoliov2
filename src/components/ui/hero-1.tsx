"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";

const ROLES = [
  "Distributed Systems",
  "Telephony at Scale",
  "Cloud Services",
  "End-to-End Products",
];

const Hero1 = () => {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      id="hero"
      className="relative min-h-screen bg-[#0c0414] text-white flex flex-col overflow-x-hidden"
    >
      {/* Animated gradient streaks */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] blur-[4rem] skew-[-40deg] opacity-60">
          <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
          <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-purple-300" />
          <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
        </div>
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] blur-[4rem] skew-[-40deg] opacity-40">
          <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-purple-400" />
          <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
          <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-purple-400" />
        </div>
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] blur-[4rem] skew-[-40deg] opacity-40">
          <div className="w-[10rem] h-[30rem] bg-gradient-to-r from-white to-blue-300" />
          <div className="w-[10rem] h-[30rem] bg-gradient-to-r from-white to-purple-300" />
          <div className="w-[10rem] h-[30rem] bg-gradient-to-r from-white to-blue-300" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c0414] to-transparent" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex justify-between items-center p-6 md:px-10"
      >
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center font-bold text-[#0c0414] shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            AS
          </div>
          <div className="font-semibold text-sm tracking-wide">Akansh Srivastava</div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <a
          href="#contact"
          className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-white/20"
        >
          Hire Me
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center py-16">
        <div className="max-w-4xl mx-auto space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="bg-[#1c1528]/80 backdrop-blur border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 w-fit">
              <span className="text-xs flex items-center gap-2">
                <span className="bg-black p-1 rounded-full">
                  <Sparkles className="w-3 h-3 text-purple-300" />
                </span>
                SDE-2 at
                <span className="text-purple-300 font-medium">Microsoft · Dynamics 365</span>
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            I build{" "}
            <span className="relative inline-block">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gradient inline-block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </span>
            <br className="hidden md:block" />
            that ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto"
          >
            SDE-2 with 6+ years building distributed systems in Java, .NET,
            Node.js, and Python. At Microsoft, I scaled Dynamics 365 telephony
            tooling from 2K to 40K concurrent calls and shipped Cadence at
            10M+ calls/week with zero failures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
          >
            <a
              href="#projects"
              className="group bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:shadow-white/10"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="border border-white/15 bg-white/5 hover:bg-white/10 rounded-full px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center justify-center gap-4 pt-4 text-white/50"
          >
            <a href="mailto:akanshsrivastava.srivastava35@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/IAMAKANSH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-10"
          >
            {[
              { n: "6+", l: "Years Experience" },
              { n: "40K", l: "Concurrent Calls Scaled" },
              { n: "10M+", l: "Calls / Week Shipped" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-[#1c1528]/60 backdrop-blur border border-white/5 rounded-2xl px-4 py-5"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export { Hero1 };
