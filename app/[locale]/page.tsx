import HeroSection from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/getDictionary";
import React from 'react';
import { notFound } from 'next/navigation';

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = React.use(params);
  if (!i18n.locales.includes(locale as any)) {
    notFound();
  }
  const dict = getDictionary(locale as any);
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