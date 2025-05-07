'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const timeline = [
  {
    title: 'Frontend Operations Analyst Intern – Licious',
    date: 'Jan 2025 – Present',
    logo: 'https://imgs.search.brave.com/bwMMXvGcmRZOwOn3_NNpMPGYdPWTptR3zEcM1dsV2uo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldGlt/Zy5ldGIyYmltZy5j/b20vcGhvdG8vOTE5/ODE0MzQuY21z',
    description: 'Optimized SLA performance and crate tracking workflows. Designed analytics dashboards for real-time visibility.',
    details: 'Led a team of 3 to streamline operations, reducing latency by 20%.',
  },
  {
    title: 'Firmware Engineer Intern – Western Digital',
    date: 'Aug 2024 – Nov 2024',
    logo: 'https://imgs.search.brave.com/pRO2dOnAY6pFt5RoYYCUEgDi8XBcwW403M9IQn-0sKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJiL1dlc3Rlcm5f/RGlnaXRhbF9sb2dv/LnN2Zw',
    description: 'Worked on NAND flash firmware reliability and system-level validation using UART, UFS protocols, and C.',
    details: 'Improved firmware stability by 15% through rigorous testing.',
  },
  {
    title: 'B.E. in Electronics & Communication – RVCE',
    date: '2021 – 2025',
    logo: 'https://imgs.search.brave.com/hjTWDnAAscv_ZVJB0KgiJ23dsp5qJCVZJJkSQdK8c7A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y29sbGVnZXByYXZl/c2guY29tLzIwMTYv/MDYvUlZDRS1Mb2dv/LnBuZw',
    description: 'Specialized in Embedded Systems, RISC-V, and Microcontroller-based applications. Final-year project: Smart Stick for Visually Impaired.',
    details: 'Achieved a CGPA of 9.2/10 with multiple academic awards.',
  },
]

export default function ResumePage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section className="px-4 sm:px-6 py-24 sm:py-32 max-w-4xl mx-auto bg-background min-h-screen text-foreground">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
        >
          🧾 Resume & Timeline
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          A journey through my internships, academics, and milestones in tech and engineering.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary  mx-auto mt-6 rounded-full"
        />
      </header>

      {/* Timeline */}
      <div className="relative border-l-2 border-border pl-8 ml-4 space-y-14">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Dot */}
            <motion.div
              className="absolute -left-[1.15rem] top-5 w-5 h-5 bg-blue-500 rounded-full border-[6px] border-background shadow-md group-hover:scale-110 transition-transform"
            />

            {/* Content */}
            <div className="flex items-start gap-5 bg-muted/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="w-12 h-12 rounded-lg object-contain border border-border bg-background shadow-sm"
                loading="lazy"
              />
              <div className="flex-1 relative">
                <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
                <p className="text-sm text-muted-foreground italic mt-1">{item.date}</p>
                <p className="mt-3 text-muted-foreground text-base leading-relaxed">{item.description}</p>

                {/* Floating Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 text-sm rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                  {item.details}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resume Button */}
      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          aria-label="Download full resume"
        >
          📄 Download Full Resume
        </a>
      </motion.div>
    </section>
  )
}
