"use client";

import { useRef } from "react";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
}

export default function SkillCard({ title, icon }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useMagneticGlow(ref, 0.15);

  return (
    <div
      ref={ref}
      className="skill-card bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-40 h-40 flex flex-col items-center justify-center cursor-pointer"
    >
      {icon}
      <span className="mt-3 font-semibold">{title}</span>
    </div>
  );
}
