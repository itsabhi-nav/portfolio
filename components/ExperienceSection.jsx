'use client'

import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ExperienceSection() {
  const experiences = [
    {
      org: 'Argenbright Innovation Labs',
      role: 'Software Engineer Intern · On-site',
      period: 'Feb 2025 – Present',
      summary: 'Building scalable mobile apps using React Native for real-time operations and logistics.'
    },
    // {
    //   org: 'Smart Antenna Systems & Measurements Lab, RVCE',
    //   role: 'Full Stack Developer · Remote',
    //   period: 'Apr 2025 – Present',
    //   summary: 'Developed a modern Next.js-based lab website to showcase research, publications, and infrastructure.'
    // },
    {
      org: 'IEEE APS & MTT-S Bangalore Joint Chapter',
      role: 'Full Stack Developer · Remote',
      period: 'Mar 2025 – Present',
      summary: 'Maintained and optimized the official chapter site with structured navigation, galleries, and event updates.'
    },
    {
      org: 'MR Consultants',
      role: 'Full Stack Developer · Remote',
      period: 'Feb 2025 – Apr 2025',
      summary: 'Delivered a property management platform with Firebase, PostgreSQL, SSR, Cloudinary, and real-time UI/UX.'
    },
    {
      org: 'Wirin Labs',
      role: 'Software Engineer Intern · Hybrid',
      period: 'Oct 2023 – Jan 2024',
      summary: 'Contributed to Next.js projects with modular structure, reusable components, and dynamic API integration.'
    }
  ]

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-foreground tracking-tight ">
        💼 Work Experience
        <span className="block h-1 w-16 bg-primary mx-auto mt-2 rounded" />
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-primary w-6 h-6" />
              <h3 className="text-lg font-semibold text-foreground">{exp.org}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{exp.role}</p>
            <p className="text-sm text-muted-foreground italic">{exp.period}</p>
            <p className="text-sm text-muted-foreground mt-3">{exp.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
