"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MagneticIcon } from "../ui/MagnecticIcon";
import FooterCursor from "../ui/Cursor";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const footerRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !containerRef.current) return;

    gsap.set(containerRef.current, { yPercent: -50 });

    const uncover = gsap.timeline({ paused: true });

    uncover.to(containerRef.current, {
      yPercent: 0,
      ease: "none",
    });

    const trigger = ScrollTrigger.create({
      trigger: ".conclusion-section",
      start: "top top",
      end: "+=75%",
      scrub: true,
      animation: uncover,
    });

    return () => {
      trigger.kill();
      uncover.kill();
    };
  }, []);

  return (
    <>
      <section className="conclusion-section h-screen w-screen bg-[#0B0E14] flex items-center justify-center">
        <h2 className="text-5xl font-bold text-white">Vamos finalizar?</h2>
      </section>

      <footer
        ref={footerRef}
        className="relative h-[75vh] w-screen overflow-hidden"
      >
        <FooterCursor containerRef={footerRef} />
        <div
            ref={bgRef}
            className="pointer-events-none absolute inset-0"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.12),transparent_60%)]" />
        </div>
        <section
          ref={containerRef}
          className="footer-container h-[75vh] w-screen flex flex-col items-center justify-center text-center px-6"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Vamos conversar?</h3>
          <p className="text-white/70 mb-8 max-w-xl">
            Estou disponível para projetos, freelas ou apenas para trocar ideias
          </p>

          <div className="flex gap-6 text-2xl text-white mb-8">
            <MagneticIcon href="/" >
              <FaGithub />
            </MagneticIcon>
            <MagneticIcon href="/" >
              <FaLinkedin />
            </MagneticIcon>
            <MagneticIcon href="/" >
              <FaInstagram />
            </MagneticIcon>
          </div>

          <span className="text-white/50 text-sm">© {new Date().getFullYear()} Renato Torres</span>
        </section>
      </footer>
    </>
  );
}