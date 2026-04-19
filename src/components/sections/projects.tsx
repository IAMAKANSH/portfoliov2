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
    name: "Agent Emorch — Virtual-Agent Harness",
    desc: "Virtual-agent UI on the ACS Calling SDK supporting startCall / endCall / mute / DTMF / audio. 99.9% reliability; standard harness for RoadRunner synthetic runs and RTA scale squads across Dynamics teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "Playwright", "ACS SDK"],
    live: "#",
    code: "#",
  },
  {
    name: "CSW Adapter — Real-Agent Simulation",
    desc: "Java Spring Boot service that simulates real-agent behavior on Dynamics 365 CSW over SignalR/WebSocket. Handles OC invites, CCaaS accept for ACS and Teams, and auto-rotates refresh tokens for multi-hour runs. 99.99% reliability.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tech: ["Java", "Spring Boot", "SignalR", "WebSocket"],
    live: "#",
    code: "#",
  },
  {
    name: "ACS Stub — Signaling Emulator at Scale",
    desc: "Python + Redis service emulating ACS signaling at scale — cut ACS cost ~70% and unblocked the 40K concurrent-call milestone for Dynamics 365 Customer Service Workspace.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "Redis", "Azure", "ACS"],
    live: "#",
    code: "#",
  },
  {
    name: "Microsoft Cadence — Calling App",
    desc: "Multi-call calling app built on ACS SDK with acsResource / SIP-header / Call-ID routing, call history, and CFV flow. Shipped 10M+ calls across 7 days with zero failures.",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "ACS SDK", "Redis/AMR"],
    live: "#",
    code: "#",
  },
  {
    name: "MsOneCall — Shared Calling Tool",
    desc: "Java Spring Boot + ACS SDK tool offering inbound/outbound calling with DTMF, speak, STT, end-to-end transcription, and BYO-service. Adopted by E2E and multiple internal Dynamics teams.",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80",
    tech: ["Java", "Spring Boot", "ACS SDK", "STT"],
    live: "#",
    code: "#",
  },
  {
    name: "Jarvis — AI Voice Assistant",
    desc: "Iron Man-style desktop AI assistant with dual-model routing (NVIDIA NIM + local), Whisper STT, tool-calling, and wake-word. Full mic → STT → LLM → TTS pipeline.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "NVIDIA NIM", "Whisper", "TTS"],
    live: "#",
    code: "https://github.com/IAMAKANSH",
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
