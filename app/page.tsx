import HeroSection from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Manifesto />
      <TimelineSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}