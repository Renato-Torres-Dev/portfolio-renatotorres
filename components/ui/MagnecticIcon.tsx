"use client";

import { useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticIconProps {
  children: React.ReactNode;
  href: string;
}

export function MagneticIcon({ children, href }: MagneticIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useMagnetic(ref, 0.35);

  const onEnter = () => {
    window.dispatchEvent(new Event("cursor:enter"));
  };

  const onLeave = () => {
    window.dispatchEvent(new Event("cursor:leave"));
  };




  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="
        magnetic-glow
        flex h-14 w-14 items-center justify-center
        rounded-full border border-white/20
        text-white text-2xl
        transition-colors hover:text-indigo-400
      "
    >
      {children}
    </a>
  );
}
