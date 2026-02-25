"use client";

import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHome() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      detectRetina: true,

      backgroundMask: {
        enable: true,
        cover: {
          color: "#000",
          opacity: 1,
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: 
          {
            enable: true,
            delay: 0.5,
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 50,
            duration: 2,
            opacity: 1,
          },
          push: {
            quantity: 1,
          },
        },
      },

      particles: {
        number: {
          value: 4,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#ffffff",
        },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 5,
          opacity: 0.6,
        },
        move: {
          enable: true,
          speed: 1.5,
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 0.8,
        },
        size: {
          value: 150,
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="timeline-particles"
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
