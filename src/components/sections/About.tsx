"use client";

import { motion } from "framer-motion";
import { education, skills } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-surface-secondary/50">
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
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Introduction - left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-3 space-y-5 text-muted leading-relaxed"
          >
            <p className="text-foreground text-lg">
              AI/ML 분야에서 연구부터 프로덕션까지 아우르는 풀스택 경험을 갖춘
              엔지니어입니다.
            </p>
            <p>
              도쿄대학교에서 강화학습과 Game AI를 연구한 것을 시작으로,
              의료 AI 스타트업 VUNO에서 뇌 MRI 기반 알츠하이머 진단 모델을
              개발하고 임상시험을 지원했습니다.
            </p>
            <p>
              이후 NAVER에서 검색 랭킹 최적화를 위한 온라인 ML 파이프라인을
              처음부터 구축하며, 강화학습과 Contextual Bandit을 대규모 서비스에
              적용했습니다.
            </p>
            <p>
              현재 Weights &amp; Biases에서 한국 AI 시장의 엔터프라이즈 고객을
              대상으로 AI 솔루션을 설계하고, 한국 대표 LLM 리더보드인 호랑이
              리더보드를 설립/운영하고 있습니다.
            </p>

            {/* Research Interests */}
            <div className="pt-4">
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-3">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.spoken.map((s) => (
                  <div key={s.lang} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{s.flag}</span>
                    <span className="text-foreground font-medium">
                      {s.lang}
                    </span>
                    <span className="text-muted">({s.level})</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education - right column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                variants={fadeUp}
                custom={i + 2}
                className="relative p-5 rounded-xl bg-surface border border-foreground/5 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {edu.degree}
                  </span>
                  <span className="text-xs text-muted">{edu.period}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {edu.school}
                </h4>
                <p className="text-sm text-muted mb-3">{edu.field}</p>
                <div className="space-y-2 text-xs text-muted">
                  <div>
                    <span className="text-foreground/60 font-medium">
                      Thesis:{" "}
                    </span>
                    {edu.thesis}
                  </div>
                  <div>
                    <span className="text-foreground/60 font-medium">
                      Lab:{" "}
                    </span>
                    {edu.lab}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
