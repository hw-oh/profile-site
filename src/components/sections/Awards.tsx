"use client";

import { motion } from "framer-motion";
import { awards, activities } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 bg-surface-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Awards &amp; Activities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Beyond Work</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column: Awards */}
          <div className="space-y-6">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
              className="text-sm font-semibold uppercase tracking-wider text-foreground flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Honors &amp; Awards
            </motion.h3>

            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 2}
                className="p-5 rounded-xl bg-surface border border-foreground/5 hover:border-amber-500/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {award.title}
                    </h4>
                    <p className="text-sm text-muted mt-1">
                      {award.organization}
                      <span className="mx-2 text-foreground/15">|</span>
                      {award.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Associations */}
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={4}
              className="text-sm font-semibold uppercase tracking-wider text-foreground flex items-center gap-2 pt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Student Associations
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={5}
              className="p-5 rounded-xl bg-surface border border-foreground/5"
            >
              <div className="space-y-3">
                {activities.associations.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <div className="flex items-start gap-2 min-w-0">
                      <span
                        className={`shrink-0 mt-0.5 text-xs font-medium px-2 py-0.5 rounded ${
                          a.role === "Representative"
                            ? "bg-sky-400/10 text-sky-400"
                            : "bg-surface-secondary text-muted"
                        }`}
                      >
                        {a.role}
                      </span>
                      <span className="text-muted truncate">{a.org}</span>
                    </div>
                    <span className="text-xs text-muted/60 whitespace-nowrap shrink-0">
                      {a.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column: Football */}
          <div className="space-y-6">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
              className="text-sm font-semibold uppercase tracking-wider text-foreground flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 9.17 4.24-4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m9.17 14.83-4.24 4.24" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              Football
            </motion.h3>

            <div className="space-y-4">
              {activities.football.map((f, i) => (
                <motion.div
                  key={f.team}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i + 2}
                  className="p-5 rounded-xl bg-surface border border-foreground/5 hover:border-emerald-400/20 transition-colors group"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-400/20 transition-colors text-sm font-bold">
                        {f.team.charAt(0) === "F"
                          ? "FC"
                          : f.team.charAt(0)}
                      </div>
                      <span className="font-medium text-foreground text-sm">
                        {f.team}
                      </span>
                    </div>
                    <span className="text-xs text-muted whitespace-nowrap">
                      {f.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
