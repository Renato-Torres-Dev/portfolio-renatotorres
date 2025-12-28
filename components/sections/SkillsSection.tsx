"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useMagneticCard } from "@/hooks/useMagneticCard";

interface Skill {
  name: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  delay: number;
}


const skills: Skill[] = [
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Framer Motion", color: "#f000b8" },
  { name: "GSAP", color: "#88ce02" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "UI/UX", color: "#facc15" },
  { name: "Acessibilidade", color: "#e879f9" },
];

export default function SkillsSection() {
  return (
    <section className="relative z-10 px-6 py-32 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
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
      transition={{ duration: 0.4, delay }} // aceleramos a animação
      className="skill-card rounded-2xl p-8 text-center border border-white/10 cursor-pointer bg-white/5"
    >
      <span className="block text-xl font-semibold text-white mb-2">{skill.name}</span>
      <div className="h-2 w-16 mx-auto rounded-full" style={{ backgroundColor: skill.color }} />
    </motion.div>
  );
}
