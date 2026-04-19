"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, BookOpen, Star, ShieldCheck } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    title: "2K → 40K Concurrent Calls",
    desc: "Scaled Dynamics 365 synthetic call runs 20x — from 2K to 40K concurrent calls with 20K agents — onboarding enterprise customers to Omnichannel.",
    color: "from-green-300 to-emerald-500",
  },
  {
    icon: Trophy,
    title: "10M+ Calls, Zero Failures",
    desc: "Shipped Microsoft Cadence Calling App at 10M+ calls across 7 days with zero failures — multi-call, ACS SDK, Redis/AMR.",
    color: "from-yellow-300 to-amber-500",
  },
  {
    icon: Star,
    title: "~70% ACS Cost Reduction",
    desc: "Built a Python + Redis ACS signaling stub that cut ACS cost by ~70% and unblocked the 40K-CC milestone.",
    color: "from-pink-300 to-rose-500",
  },
  {
    icon: Users,
    title: "Promoted to SDE-2",
    desc: "Promoted from SDE to SDE-2 at Microsoft (Mar 2025) for impact across D365 CSW telephony and E2E tooling.",
    color: "from-purple-300 to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Security Remediation DRI",
    desc: "DRI on live ICM incidents and S360 security-vulnerability remediation for ACS and Dynamics 365; resolved critical Pentest / Veracode SAST & DAST findings at Nuance.",
    color: "from-teal-300 to-sky-500",
  },
  {
    icon: BookOpen,
    title: "Publication & Certs",
    desc: "IJABAS #00238 — Password Security via Mutation. AZ-900 Azure Fundamentals and AWS SysOps. Infosys Star Performer (Jan 2021).",
    color: "from-blue-300 to-cyan-500",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Achievements & Impact
          </h2>
          <p className="text-white/60 mt-3">Milestones that define my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1c1528]/60 p-6 hover:border-purple-500/30 transition-all"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-[#0c0414]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{a.desc}</p>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
