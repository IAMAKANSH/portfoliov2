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
    role: "Software Engineer 2 (SDE-2)",
    company: "Microsoft · Dynamics 365 CSW — Telephony & Agent Automation",
    date: "Mar 2025 — Present",
    points: [
      "Contributor across 5+ production repos in the D365 telephony stack — agent automation, calling tools, and ACS simulation.",
      "Built Agent Emorch (React + Node.js + Playwright): virtual-agent UI on ACS Calling SDK with startCall/endCall/mute/DTMF/audio; 99.9% reliability; standard harness for RoadRunner and RTA squads.",
      "Designed CSW Adapter (Java Spring Boot) — real-agent simulation over SignalR/WebSocket with OC invites, CCaaS accept for ACS + Teams, and auto-rotating refresh tokens; 99.99% reliability.",
      "Scaled concurrent-call synthetic runs from 2K to 40K with 20K agents; onboarded enterprise customers to Omnichannel.",
      "Built ACS Stub (Python + Redis) emulating ACS signaling at scale — cut ACS cost ~70% and unblocked the 40K-CC milestone.",
      "Delivered MsOneCall (Java Spring Boot + ACS SDK) shared calling tool with DTMF, speak, STT, transcription, and BYO-service; adopted across Dynamics teams.",
      "Contributed to an LLM-driven Eval Platform (.NET) for C1-C2 flow regression; DRI on live ICM incidents; drove S360 security remediation to closure.",
    ],
    tech: ["Java", "Spring Boot", ".NET", "Node.js", "React", "Python", "Redis", "ACS SDK", "SignalR", "Playwright"],
  },
  {
    role: "Software Engineer (SDE)",
    company: "Microsoft · Dynamics 365 Customer Service",
    date: "Aug 2023 — Mar 2025",
    points: [
      "Led APIs migration from Core Services to CSW on .NET.",
      "Built Microsoft Cadence Calling App (React + Node.js + ACS SDK + Redis/AMR) — multi-call, acsResource / SIP-header / Call-ID, call history, CFV flow.",
      "Shipped Cadence at 10M+ calls across 7 days with zero failures.",
      "Promoted to SDE-2 in Mar 2025.",
    ],
    tech: [".NET", "React", "Node.js", "ACS SDK", "Redis"],
  },
  {
    role: "Software Engineer",
    company: "Nuance Communications (a Microsoft company) — NEAM",
    date: "Nov 2022 — Jul 2023",
    points: [
      "Built APIs on Java JAX-RS + React for centralized role, attribute-key, and organization management; Keycloak orchestration for user lifecycle, roles, token expiry, and email integration.",
      "Delivered org-partnership UI + APIs for inter-org role federation via Keycloak; owned User CRUD APIs.",
      "Authored JavaScript regression suite and Selenium (Chrome) UI automation.",
      "Integrated Azure Managed Identity into DB + Keycloak; authored shell-script rotation for DB and refresh tokens — avoided a risky Keycloak major-version upgrade.",
      "Resolved critical findings across Pentest, Veracode SAST, and Veracode DAST; unblocked consumer onboarding.",
    ],
    tech: ["Java", "JAX-RS", "React", "Keycloak", "Azure Managed Identity", "Selenium"],
  },
  {
    role: "Specialist Programmer / System Engineer Specialist",
    company: "Infosys — Helix Platform & Allstate",
    date: "Jul 2019 — Oct 2022",
    points: [
      "Helix (B2B Healthcare) + Azure prior-auth workflow: Spring Boot backend with JUnit 5 TDD, PostgreSQL, Elasticsearch, YAML config; Azure Logic Apps, Blob, Functions, Form Recognizer.",
      "Allstate: 3-layer REST APIs, HashiCorp Vault integration, Spring Framework 2.3 → 2.5.6 migration.",
      "Remediated CVE-2021-44228 (Log4Shell) and CVE-113; lifted code coverage from 65% to 92%; set up Datadog monitoring.",
      "Infosys Star Performer (Jan 2021).",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Elasticsearch", "Azure", "HashiCorp Vault", "Datadog"],
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
