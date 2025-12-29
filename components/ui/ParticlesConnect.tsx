"use client";
import Particles from "@tsparticles/react";
import { MoveDirection, RecursivePartial } from "tsparticles-engine";

const ParticlesConnect = () => {
  const options: RecursivePartial<any> = {
    autoPlay: true,
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false, zIndex: 0 },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 400 },
      },
    },
    particles: {
      number: { value: 100, density: { enable: true, width: 1920, height: 1080 } },
      color: { value: "rgba(99,102,241,0.15)" },
      shape: { type: "circle" },
      opacity: { value: { min: 0.1, max: 0.3 }, animation: { enable: true, speed: 3 } },
      size: { value: { min: 1, max: 10 }, animation: { enable: true, speed: 20 } },
      move: { enable: true, speed: 2, direction: "none" as MoveDirection, outModes: "out" },
      links: { enable: true, distance: 30, color: "rgba(99,102,241,0.1)", opacity: 0.01, width: 0.1 },
    },
  };

  return <Particles options={options} className="absolute inset-0 -z-10" />;
};

export default ParticlesConnect;
