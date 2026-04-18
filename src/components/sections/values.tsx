"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    n: "01",
    title: "Ownership Mindset",
    desc: "I don't just write code — I take end-to-end ownership from design to deployment to monitoring.",
  },
  {
    n: "02",
    title: "System Thinking",
    desc: "I understand how components fit together. I design for scale, reliability, and maintainability from day one.",
  },
  {
    n: "03",
    title: "Rapid Learner",
    desc: "I've picked up new tech stacks in weeks to meet project needs — driven by curiosity and a love for learning.",
  },
  {
    n: "04",
    title: "Collaborative Spirit",
    desc: "I elevate the team through code reviews, knowledge sharing, mentorship, and clear communication.",
  },
];

export const Values = () => {
  return (
    <section className="relative py-28 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            Principles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I bring to your team
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#1c1528]/60 border border-white/10 hover:border-purple-500/30 transition-colors rounded-2xl p-6 relative"
            >
              <div className="text-5xl font-bold text-gradient opacity-80 mb-3">
                {v.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
