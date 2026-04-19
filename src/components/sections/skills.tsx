"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "languages" | "backend" | "telephony" | "azure" | "security" | "devops";

const SKILLS: Record<TabKey, { name: string; level: number }[]> = {
  languages: [
    { name: "Java 8/11", level: 92 },
    { name: "C# / .NET", level: 88 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "SQL", level: 88 },
    { name: "Bash", level: 78 },
  ],
  backend: [
    { name: "Spring Boot", level: 92 },
    { name: "JAX-RS", level: 85 },
    { name: "Node.js (Express)", level: 88 },
    { name: ".NET", level: 85 },
    { name: "JPA / Hibernate", level: 82 },
    { name: "REST APIs", level: 92 },
    { name: "React / Redux", level: 82 },
  ],
  telephony: [
    { name: "ACS Calling SDK", level: 92 },
    { name: "SignalR", level: 88 },
    { name: "WebSocket", level: 88 },
    { name: "SIP", level: 80 },
    { name: "DTMF", level: 85 },
    { name: "STT / Transcription", level: 82 },
  ],
  azure: [
    { name: "App Service", level: 88 },
    { name: "Functions", level: 85 },
    { name: "Logic Apps", level: 82 },
    { name: "Blob / Key Vault", level: 85 },
    { name: "Managed Identity", level: 88 },
    { name: "Cosmos DB", level: 78 },
    { name: "Dataverse / NRD / AMR", level: 80 },
    { name: "Form Recognizer", level: 75 },
  ],
  security: [
    { name: "Keycloak", level: 88 },
    { name: "OAuth2 / OIDC", level: 88 },
    { name: "HashiCorp Vault", level: 80 },
    { name: "Veracode SAST/DAST", level: 85 },
    { name: "Pentest remediation", level: 85 },
    { name: "SonarQube", level: 82 },
  ],
  devops: [
    { name: "Docker", level: 88 },
    { name: "Kubernetes", level: 78 },
    { name: "Jenkins / CI-CD", level: 85 },
    { name: "Git", level: 92 },
    { name: "JUnit 5", level: 88 },
    { name: "Playwright", level: 82 },
    { name: "Selenium", level: 80 },
    { name: "Postman", level: 88 },
  ],
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "backend", label: "Backend & Web" },
  { key: "telephony", label: "Telephony / Real-Time" },
  { key: "azure", label: "Azure" },
  { key: "security", label: "Identity & Security" },
  { key: "devops", label: "DevOps & Testing" },
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
