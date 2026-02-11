"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
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
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Where I&apos;ve Worked</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={lineGrow}
            className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: i * 0.15,
                    }}
                    className="relative"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border-2 border-primary/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    {/* Pulse ring for current job */}
                    {i === 0 && (
                      <div className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/30 animate-ping" />
                    )}
                  </motion.div>
                </div>

                {/* Card */}
                <div className="group p-6 rounded-xl bg-surface border border-foreground/5 hover:border-primary/20 transition-all hover:shadow-lg hover:shadow-primary/5">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role */}
                  <p className="text-sm font-semibold text-foreground/80 mb-2">
                    {exp.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <svg
                          className="w-4 h-4 mt-0.5 text-primary/60 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
