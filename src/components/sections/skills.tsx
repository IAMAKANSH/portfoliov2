"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "languages" | "frontend" | "backend" | "devops";

const SKILLS: Record<TabKey, { name: string; level: number }[]> = {
  languages: [
    { name: "TypeScript", level: 92 },
    { name: "Python", level: 90 },
    { name: "Go", level: 78 },
    { name: "Java", level: 85 },
    { name: "C#", level: 80 },
    { name: "Rust", level: 65 },
    { name: "SQL", level: 88 },
  ],
  frontend: [
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 78 },
    { name: "TypeScript", level: 92 },
    { name: "Expo / RN", level: 72 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: ".NET / ASP.NET", level: 88 },
    { name: "Spring Boot", level: 82 },
    { name: "FastAPI", level: 85 },
    { name: "PostgreSQL", level: 88 },
    { name: "Redis", level: 80 },
    { name: "Kafka", level: 75 },
  ],
  devops: [
    { name: "Azure", level: 90 },
    { name: "AWS", level: 80 },
    { name: "Docker", level: 88 },
    { name: "Kubernetes", level: 78 },
    { name: "GitHub Actions", level: 85 },
    { name: "Terraform", level: 70 },
  ],
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps & Tools" },
];

export const Skills = () => {
  const [tab, setTab] = React.useState<TabKey>("backend");

  return (
    <section id="skills" className="relative py-28 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            Tech
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-white/60 mt-3">
            Technologies and tools I reach for every day
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all border ${
                tab === t.key
                  ? "bg-white text-black border-white shadow-lg shadow-white/10"
                  : "bg-[#1c1528]/60 border-white/10 text-white/70 hover:text-white hover:border-white/20"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {SKILLS[tab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-[#1c1528]/60 border border-white/5 hover:border-purple-500/30 rounded-2xl p-5 transition-colors"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-xs text-white/50">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
