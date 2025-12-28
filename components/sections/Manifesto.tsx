"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !bgRef.current) return;

        gsap.to(bgRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0E14]"
        >
            <div
                ref={bgRef}
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.12),transparent_60%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-sm uppercase trancking-[0.3em] text-indigo-400"
                >
                    Manifesto
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="max-w-4xl text-5xl font-bold leading-tight text-white"
                >
                    Código não é só lógica.
                    <br />
                    É experiência, movimento e intenção.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="mt-10 max-w-3xl text-lg text-white/70"
                >
                    Eu desenvolvo interfaces que vão além do visual. Cada decisão - do 
                    layout à performance - é pensada para criar produtos digitais claros, 
                    intuitivos e memoráveis.
                </motion.p>
            </div>
        </section>
    );
}