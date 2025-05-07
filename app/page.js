

import HeroSection from '../components/HeroSection'

import AboutSection from '../components/AboutSection'
import StatsCounter from '../components/StatsCounter'
import TechStackSection from '../components/TechStackSection'
import TerminalIntro from '../components/TerminalIntro'
import GitHubStats from '../components/GitHubStats'
import ProjectHighlights from '../components/ProjectHighlights'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import CallToActionBanner from '../components/CallToActionBanner'
import AIChatBot from '../components/AIChatBot'
import ScrollProgress from '../components/ScrollProgress'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <TechStackSection />
      <EducationSection />
      <ExperienceSection />
      <TerminalIntro />
      <GitHubStats />
      <ProjectHighlights />
      <TestimonialsCarousel />

      <CallToActionBanner />
      <AIChatBot />
    </>
  )
}
