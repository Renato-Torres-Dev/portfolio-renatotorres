"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
    dict: any;
}

export default function ProjectsSection({ dict }: ProjectsProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sections = containerRef.current.querySelectorAll<HTMLElement>(".project-card");

        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <section id="projects" className="relative z-10 px-6 py-32 bg-[#0B0E14]" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <h2 className="mb-16 text-4xl font-bold text-white">{dict.projects.title}</h2>

                <div className="flex flex-col gap-32">
                    {dict.projects.description.map((project: any, index: number) => (
                        <div
                            key={project.id}
                            className={`project-card flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-20 ${
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                        >
                            <motion.img 
                                src={project.image}
                                alt={project.title}
                                className="w-full max-w-lg rounded-2xl shadow-2xl lg:shadow-none"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />

                            <motion.div
                                className="max-w-xl"
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2}}
                            >
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-white/70 mb-4">{project.description}</p>
                                <p className="mb-4">
                                    {project.technologies.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="mr-2 rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </p>
                                <a
                                    href={project.link}
                                    className="inline-block rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-indigo-500/30"
                                    target="_blank"
                                >
                                    Ver Projeto
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}