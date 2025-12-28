"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CursorProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export default function FooterCursor({ containerRef }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !containerRef.current) return;

    const container = containerRef.current;

    const trailCount = 5;
    trailRefs.current = [];

    for (let i = 0; i < trailCount; i++) {
      const div = document.createElement("div");
      div.className =
        "cursor-trail fixed w-3 h-3 bg-indigo-400 rounded-full pointer-events-none z-[9998]";
      document.body.appendChild(div);
      trailRefs.current.push(div);
    }

    let mouseX = 0;
    let mouseY = 0;
    let positions: { x: number; y: number }[] = trailRefs.current.map(() => ({ x: 0, y: 0 }));

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      // Verifica se o mouse está dentro do footer
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        cursor.style.display = "block";
        mouseX = e.clientX;
        mouseY = e.clientY;
      } else {
        cursor.style.display = "none"; // esconde fora do footer
      }
    };

    const tick = () => {
      if (cursor.style.display === "none") return;

      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.15, ease: "power3.out" });
      trailRefs.current.forEach((t, i) => {
        positions[i].x += (i === 0 ? mouseX : positions[i - 1].x) - positions[i].x * 0.2;
        positions[i].y += (i === 0 ? mouseY : positions[i - 1].y) - positions[i].y * 0.2;
        gsap.to(t, { x: positions[i].x, y: positions[i].y, duration: 0.15, ease: "power3.out" });
      });
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", move);

    // Eventos magnéticos (opcional)
    const handleHoverEnter = () => {
      trailRefs.current.forEach(t => gsap.to(t, { backgroundColor: "#ffffff", duration: 0.3 }));
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power3.out" });
    };

    const handleHoverLeave = () => {
      trailRefs.current.forEach(t => gsap.to(t, { backgroundColor: "#6366F1", duration: 0.3 }));
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
    };

    window.addEventListener("cursor:enter", handleHoverEnter);
    window.addEventListener("cursor:leave", handleHoverLeave);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor:enter", handleHoverEnter);
      window.removeEventListener("cursor:leave", handleHoverLeave);
      trailRefs.current.forEach(t => t.remove());
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 mix-blend-difference hidden"
    />
  );
}
