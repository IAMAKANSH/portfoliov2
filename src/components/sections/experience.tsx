"use client";

import { motion } from "framer-motion";

type Entry = {
  role: string;
  company: string;
  date: string;
  points: string[];
  tech: string[];
};

const EXPERIENCE: Entry[] = [
  {
    role: "Senior Software Engineer",
    company: "Microsoft",
    date: "2023 — Present",
    points: [
      "Led a team of 5 engineers to redesign the core billing system, reducing processing time by 40%",
      "Architected microservices handling 10K+ requests/sec with 99.9% uptime",
      "Introduced CI/CD pipelines that cut deployment time from 2 hours to 15 minutes",
      "Mentored 3 junior developers through structured code reviews and pair programming",
    ],
    tech: ["C#", ".NET", "Azure", "Kafka", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    date: "2021 — 2023",
    points: [
      "Built a real-time analytics dashboard used by 500+ internal stakeholders",
      "Optimized database queries reducing page load times by 60%",
      "Developed RESTful APIs consumed by 3 client applications",
      "Collaborated with product and design teams in an Agile environment",
    ],
    tech: ["Python", "Django", "React", "Docker", "Redis"],
  },
  {
    role: "Junior Developer",
    company: "First Company",
    date: "2020 — 2021",
    points: [
      "Developed and maintained customer-facing web applications",
      "Wrote unit and integration tests improving code coverage to 85%",
      "Participated in on-call rotations and incident response",
    ],
    tech: ["JavaScript", "Node.js", "MongoDB", "Git"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work Experience
          </h2>
          <p className="text-white/60 mt-3">My professional journey so far</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent -translate-x-1/2" />

          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className="pl-12 md:pl-0 md:pr-8">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-purple-400 ring-4 ring-[#0c0414] -translate-x-1/2 mt-2" />
                <div className="bg-[#1c1528]/70 border border-white/10 hover:border-purple-500/30 transition-colors rounded-2xl p-6 backdrop-blur">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{e.role}</h3>
                      <p className="text-sm text-purple-300">{e.company}</p>
                    </div>
                    <span className="text-xs text-white/50 bg-white/5 rounded-full px-3 py-1">
                      {e.date}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-white/70 leading-relaxed mb-4">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-purple-400 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-current" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
