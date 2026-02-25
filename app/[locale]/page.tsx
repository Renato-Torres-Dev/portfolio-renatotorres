import HeroSection from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/getDictionary";
import React from 'react';

export default function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = React.use(params);
  const dict = getDictionary(locale);
  return (
    <>
      <HeroSection dict={dict} />
      <Manifesto dict={dict}/>
      <TimelineSection dict={dict}/>
      <ProjectsSection dict={dict}/>
      <SkillsSection />
      <ContactSection dict={dict}/>
      <FooterSection />
    </>
  )
}