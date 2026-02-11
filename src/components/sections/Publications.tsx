"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications, awards } from "@/data/resume";

type Filter = "all" | "journal" | "workshop";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const paperItem = {
  hidden: { opacity: 0, height: 0, marginBottom: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    marginBottom: 16,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    marginBottom: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

interface Paper {
  authors: string;
  title: string;
  venue: string;
  year: number;
  note?: string;
  link?: string;
}

function PaperCard({
  paper,
  type,
}: {
  paper: Paper;
  type: "journal" | "workshop";
}) {
  return (
    <motion.div
      layout
      variants={paperItem}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-5 rounded-xl bg-surface border border-foreground/5 hover:border-primary/20 transition-colors group"
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            type === "journal"
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-amber-500/10 text-amber-500"
          }`}
        >
          {type === "journal" ? "Journal" : "Workshop"}
        </span>
        <span className="text-xs text-muted">{paper.year}</span>
        {paper.note && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
            {paper.note}
          </span>
        )}
      </div>

      <h4 className="font-semibold text-foreground text-sm md:text-base leading-snug mb-2 group-hover:text-primary transition-colors">
        {paper.title}
      </h4>

      <p
        className="text-xs text-muted mb-1.5 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: paper.authors }}
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted/70 italic">{paper.venue}</p>
        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-light transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Paper
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const [filter, setFilter] = useState<Filter>("all");

  const rsnaAward = awards.find((a) => a.organization === "RSNA 2021");

  const journalPapers = publications.journal;
  const workshopPapers = publications.workshop;

  const filteredPapers: { paper: Paper; type: "journal" | "workshop" }[] = [];
  if (filter === "all" || filter === "journal") {
    journalPapers.forEach((p) => filteredPapers.push({ paper: p, type: "journal" }));
  }
  if (filter === "all" || filter === "workshop") {
    workshopPapers.forEach((p) => filteredPapers.push({ paper: p, type: "workshop" }));
  }
  filteredPapers.sort((a, b) => b.paper.year - a.paper.year);

  const filters: { label: string; value: Filter; count: number }[] = [
    {
      label: "All",
      value: "all",
      count: journalPapers.length + workshopPapers.length,
    },
    { label: "Journal", value: "journal", count: journalPapers.length },
    { label: "Workshop", value: "workshop", count: workshopPapers.length },
  ];

  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="mb-10"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Research Papers</h2>
        </motion.div>

        {/* RSNA Award highlight */}
        {rsnaAward && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="mb-10 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20"
          >
            <a
              href={(rsnaAward as { link?: string }).link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {rsnaAward.title}
                </p>
                <p className="text-xs text-muted">
                  {rsnaAward.organization}, {rsnaAward.year}
              </p>
              </div>
            </a>
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={2}
          className="flex gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f.value
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface-secondary text-muted hover:text-foreground"
              }`}
            >
              {f.label}
              <span
                className={`ml-1.5 text-xs ${
                  filter === f.value ? "text-white/70" : "text-muted/60"
                }`}
              >
                {f.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Papers list */}
        <AnimatePresence mode="popLayout">
          {filteredPapers.map(({ paper, type }) => (
            <PaperCard
              key={paper.title}
              paper={paper}
              type={type}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
