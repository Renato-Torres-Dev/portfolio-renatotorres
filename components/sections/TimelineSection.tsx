"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesBackground from "../ui/ParticlesBackground";

gsap.registerPlugin(ScrollTrigger);

interface TimelineProps {
    dict: any;
}

export default function TimelineSection({ dict }: TimelineProps) {
    const experiences = dict.timeline.experiences;
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
        <section className="relative w-full overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 -z-20">
                <div
                    className="
                        w-full
                        h-full
                        bg-center
                        bg-cover
                        bg-no-repeat
                        bg-fixed
                    "
                    style={{
                        backgroundImage: "url('bg-timeline.png')",
                    }}
                />
            </div>

            <div className="absolute inset-0 bg-[#0B0E14]/80 -z-10" />

            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0B0E14] to-transparent z-10 pointer-events-none"/>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0B0E14] to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto py-24 px-6 relative z-10">
                <h2 className="mb-16 text-4xl font-bold text-white">{dict.timeline.title}</h2>

                <div className="relative ml-4 border-l-2 border-indigo-500">
                    {experiences.map((exp: any, index: number) => (
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