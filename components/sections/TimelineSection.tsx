"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
}

const experiences: Experience[] = [
    {
        year: "2023 - Present",
        role: "FrontEnd Developer",
        company: "Grupo Moura",
        description: "Responsável pela manutenção e atualização dos sites institucionais da empresa."
    },
    {
        year: "2023 - 2024",
        role: "Frontend Developer",
        company: "Recife Centro",
        description: "Desenvolvimento do site com integrações via API e redes sociais."
    },
    {
        year: "2025",
        role: "FrontEnd Developer",
        company: "PAD Saúde",
        description: "Criação do site e aplicação interna do sistema completo da clínica."
    }
];

export default function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!containerRef.current) return;

        const items = containerRef.current.querySelectorAll<HTMLElement>(".timeline-item");

        items.forEach((item) => {
            gsap.fromTo(
                item,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "top 60%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <section className="relative z-10 px-6 py-32 bg-[#0B0E14]" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <h2 className="mb-16 text-4xl font-bold text-white">Timeline Profissional</h2>

                <div className="relative ml-4 border-l-2 border-indigo-500">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item mb-16 relative pl-8">
                            <span className="absolute -left-5 top-1 h-4 w-4 rounded-full bg-indigo-500" />
                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                            <p className="text-sm text-indigo-400 mb-1">{exp.year} - {exp.company}</p>
                            <p className="text-white/70">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}