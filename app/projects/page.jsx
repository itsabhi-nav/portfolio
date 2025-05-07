'use client'

import ProjectCard from '../../components/ProjectCard'

const projectList = [
  {
    title: 'Smart Wheelchair Tracker',
    description: 'Indoor navigation for airports using React Native, Google Maps SDK, and accelerometers.',
    tech: ['React Native', 'Google Maps', 'AI'],
    github: 'https://github.com/ashutosh/wheelchair-tracker',
    live: 'https://wheelchair-tracker.vercel.app/'
  },
  {
    title: 'PadPal',
    description: 'Sanitary pad vending machine integrated with Android and embedded protocols.',
    tech: ['Embedded C', 'Bluetooth', 'Kotlin'],
    github: 'https://github.com/ashutosh/padpal',
    live: '#'
  },
  {
    title: 'DailyScoop News',
    description: 'AI-curated news aggregator using Directus, Supabase, and LangChain.',
    tech: ['Next.js', 'Supabase', 'LangChain'],
    github: 'https://github.com/ashutosh/dailyscoop',
    live: '#'
  }
]

export default function ProjectsPage() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4 animate-fade-in-up">
          🚀 Featured Projects
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-pulse" />
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          A showcase of the products, platforms, and tools I've passionately built.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in">
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}
