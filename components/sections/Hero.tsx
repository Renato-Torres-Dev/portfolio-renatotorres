"use client";

import ParticlesHome from "../ui/ParticlesHome";
import SmoothScrollLink from "../ui/SmoothScrollLink";
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#0B0E14]">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10"/>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_60%)]"/>
            </motion.div>
            <ParticlesHome />

            <div className="relative z-10 flex h-full items-center">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-[72px] font-bold leading-none tracking-tight text-white"
                    >
                        Renato Torres
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-6 max-w-2xl text-xl text-white/70"
                    >
                        Front-End Developer focado em criar experiências digitais modernas 
                        performáticas e memoráveis.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-10 flex gap-6"
                    >
                        <SmoothScrollLink
                            href="#projects"
                            className="rounded-full bg-indigo-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400"
                        >
                            Ver Projetos
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#contact"
                            className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-indigo-500/30"
                        >
                            Entrar em Contato
                        </SmoothScrollLink>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-white/60">
                    <span className="text-xs tracking-widest">SCROLL</span>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-6 w-[2px] bg-white/60"
                    />
                </div>
            </motion.div>
        </section>
    );
}