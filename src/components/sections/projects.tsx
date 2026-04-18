"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand";

type Project = {
  name: string;
  desc: string;
  image: string;
  tech: string[];
  live?: string;
  code?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Jarvis — AI Assistant",
    desc: "Iron Man-style desktop AI assistant with dual-model routing (NVIDIA NIM + local), voice wake-word, tool use, and a live HUD overlay.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "Next.js", "NVIDIA NIM", "WebSocket"],
    live: "#",
    code: "#",
  },
  {
    name: "Stock Analyzer",
    desc: "Backtesting and signal generation platform with live market feed ingestion, factor analysis, and a visual strategy builder.",
    image:
      "https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "FastAPI", "PostgreSQL", "React"],
    live: "#",
    code: "#",
  },
  {
    name: "UPSC Prep OS",
    desc: "Structured spaced-repetition study system tailored for UPSC aspirants — daily plans, analytics, and adaptive revision.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    tech: ["Expo", "TypeScript", "Supabase"],
    live: "#",
    code: "#",
  },
  {
    name: "DevOps Control Plane",
    desc: "Centralized observability dashboard aggregating logs, metrics and alerts across microservices with custom alert rules.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["Go", "Grafana", "Prometheus", "Docker"],
    live: "#",
    code: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-white/60 mt-3">Things I&apos;ve built that I&apos;m proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.live}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1c1528]/60 hover:border-purple-500/40 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0414] via-[#0c0414]/30 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-200 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
