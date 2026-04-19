"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Send, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import * as React from "react";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "akanshsrivastava.srivastava35@gmail.com",
    href: "mailto:akanshsrivastava.srivastava35@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 82181 52572",
    href: "tel:+918218152572",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/akansh-srivastava",
    href: "#",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/IAMAKANSH",
    href: "https://github.com/IAMAKANSH",
  },
  {
    icon: FileText,
    label: "Medium",
    value: "medium.com/@akansh",
    href: "#",
  },
];

export const Contact = () => {
  const [sent, setSent] = React.useState(false);

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build something together
          </h2>
          <p className="text-white/60 mt-3">
            Always open to distributed-systems problems, telephony / real-time
            tooling, and senior engineering roles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-3 content-start"
          >
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="group bg-[#1c1528]/60 border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all">
                    <Icon className="w-4 h-4 text-purple-300" />
                  </div>
                  <div className="text-xs text-white/50">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </a>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="bg-[#1c1528]/60 border border-white/10 rounded-3xl p-6 space-y-3"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                required
                placeholder="Your name"
                className="bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
            <input
              required
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            />
            <textarea
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm outline-none resize-none transition-colors"
            />
            <button
              type="submit"
              className="group w-full bg-white text-black hover:bg-gray-100 font-semibold rounded-xl px-5 py-3 text-sm flex items-center justify-center gap-2 transition-all"
            >
              {sent ? (
                "Message sent!"
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
