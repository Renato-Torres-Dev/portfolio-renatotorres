"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagneticCard<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  strength = 0.15,
  maxTilt = 8 // graus
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Desativa em mobile
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      // Magnetismo - deslocamento
      gsap.to(el, {
        x: offsetX * strength,
        y: offsetY * strength,
        duration: 0.2,
        ease: "power3.out",
      });

      // Tilt
      const tiltX = (-offsetY / rect.height) * maxTilt;
      const tiltY = (offsetX / rect.width) * maxTilt;

      gsap.to(el, {
        rotateX: tiltX,
        rotateY: tiltY,
        duration: 0.2,
        ease: "power3.out",
      });

      // Glow
      el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    };

    const handleMouseEnter = () => {
      gsap.to(el, { scale: 1.05, duration: 0.2, ease: "power3.out" });
      gsap.to(el, { "--glow-opacity": 1, duration: 0.2, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, duration: 0.3, ease: "power3.out" });
      gsap.to(el, { "--glow-opacity": 0, duration: 0.3, ease: "power2.out" });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength, maxTilt]);
}
