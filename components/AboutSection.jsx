'use client'

import { Separator } from '@/components/ui/separator'

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 max-w-3xl mx-auto text-center scroll-mt-16">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-14 leading-tight tracking-tight">
        👋 About Me
        <span className="block h-1 w-12 sm:w-16 bg-primary mx-auto mt-3 rounded-full" />
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed sm:leading-8">
        I’m <span className="font-semibold text-foreground">Abhinav Dubey</span>, a full stack developer and software engineer intern,
        blending creativity with precision to build intuitive and scalable digital products.
      </p>

      <Separator className="my-6 sm:my-8 w-20 sm:w-24 mx-auto" />


      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed sm:leading-8 mt-5">
        Currently, I'm interning at <strong className="text-foreground">ArgenBright Innovation Labs</strong>.
        I've also contributed to <strong className="text-foreground">IEEE APS-MTTS</strong> and
        <strong className="text-foreground"> Smart Antenna Systems Lab (RVCE)</strong>, delivering high-performance
        web apps with real-time data flow and seamless user experiences.
      </p>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed sm:leading-8 mt-5">
        I thrive in fast-paced teams, solve complex problems with curiosity, and care deeply about writing
        clean, scalable, and maintainable code.
      </p>

      <div className="mt-10 text-xs sm:text-sm text-muted-foreground tracking-wide">
        <p>📍 Based in Bangalore &nbsp;&nbsp;|&nbsp;&nbsp;🤝 Open to meaningful collaborations</p>
      </div>
    </section>
  )
}
