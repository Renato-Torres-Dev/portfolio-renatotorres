"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useMagneticCard } from "@/hooks/useMagneticCard";
import ParticlesConnect from "../ui/ParticlesConnect";

interface SkillsProps {
  dict: any;
}


interface SkillCardProps {
  skill: any;
  delay: number;
}

export default function SkillsSection({ dict }: SkillsProps) {
  const skills = dict.skills.items;
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
      >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10"/>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_60%)]"/>
      </motion.div>
      <ParticlesConnect />
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-white">{dict.skills.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill: any, index: number) => (
            <SkillCard key={index} skill={skill} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useMagneticCard(ref, 0.15, 8);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="skill-card relative z-30 rounded-2xl p-8 text-center border border-white/10 cursor-pointer bg-white/5"
    >
      <span className="block text-xl font-semibold text-white mb-2">{skill.title}</span>
      <div className="h-2 w-16 mx-auto rounded-full" style={{ backgroundColor: skill.color }} />
    </motion.div>
  );
}
