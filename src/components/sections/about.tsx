"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Languages as LangIcon } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block bg-[#1c1528] border border-white/10 rounded-full px-3 py-1 text-xs text-purple-300 mb-4">
            About
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The developer behind the code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[380px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#1c1528]">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                alt="Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0414] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#1c1528] border border-white/10 rounded-2xl px-4 py-3 shadow-xl backdrop-blur">
              <div className="text-xs text-white/50">Currently at</div>
              <div className="text-sm font-semibold">Microsoft · Redmond</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-white/75 leading-relaxed"
          >
            <p>
              I&apos;m a <strong className="text-white">Backend Developer</strong>{" "}
              who loves turning complex problems into elegant, efficient solutions.
              My core strength is building scalable server-side systems — but I&apos;m
              equally comfortable jumping into frontend work to deliver complete,
              polished products.
            </p>
            <p>
              Across startups and enterprises, I&apos;ve shipped features used by
              thousands, improved system performance, mentored junior developers,
              and driven technical decisions that shape product direction.
            </p>
            <p>
              I believe great software is built at the intersection of{" "}
              <span className="text-purple-300">clean code</span>,{" "}
              <span className="text-blue-300">user empathy</span>, and{" "}
              <span className="text-white">relentless curiosity</span>.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              {[
                { icon: MapPin, label: "Location", value: "Redmond, WA" },
                { icon: GraduationCap, label: "Education", value: "B.Tech, CS" },
                { icon: LangIcon, label: "Languages", value: "English, Hindi" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#1c1528]/60 border border-white/5 rounded-2xl p-4"
                >
                  <Icon className="w-4 h-4 text-purple-300 mb-2" />
                  <div className="text-xs text-white/50">{label}</div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
