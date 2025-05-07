'use client'

import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EducationSection() {
  const educations = [
    {
      title: 'RV College of Engineering',
      degree: 'B.Tech in Computer Science & Engineering',
      period: 'Dec 2021 – Sep 2025',
      skills: 'C++, SQL, React, Firebase, Next.js'
    },
    {
      title: 'ALLEN Career Institute, Kota',
      degree: 'TOV1 (Leader\'s Star Batch) – IIT-JEE Prep',
      period: 'May 2017 – Sep 2020',
      skills: 'Focused on Physics, Chemistry, Mathematics'
    }
  ]

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-foreground tracking-tight ">
        🎓 My Education
        <span className="block h-1 w-16 bg-primary mx-auto mt-2 rounded" />
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {educations.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="text-primary w-6 h-6" />
              <h3 className="text-lg font-semibold text-foreground">{edu.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{edu.degree}</p>
            <p className="text-sm text-muted-foreground italic">{edu.period}</p>
            <p className="text-sm text-muted-foreground mt-3">{edu.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
