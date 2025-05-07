'use client'

import { useState } from 'react'
import BlogCard from '../../components/BlogCard'

const blogPosts = [
  {
    title: 'Building a Smart Indoor Tracker with React Native',
    description: 'Learn how I used accelerometers, Google Maps SDK, and React Native to build airport wheelchair routing.',
    date: '2025-04-15',
    slug: 'smart-indoor-tracker'
  },
  {
    title: 'Optimizing API Costs with Google Maps & Places',
    description: 'Cost optimization strategies when using Google’s APIs at scale.',
    date: '2025-03-22',
    slug: 'google-maps-api-costs'
  },
  {
    title: 'Directus vs Strapi vs Sanity – What’s Best for You?',
    description: 'A real-world comparison while building the backend of DailyScoop.',
    date: '2025-03-10',
    slug: 'directus-vs-strapi-vs-sanity'
  }
]

export default function BlogPage() {
  const [search, setSearch] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="px-4 sm:px-6 py-24 sm:py-32 max-w-4xl mx-auto scroll-mt-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
          📝 Read My Thoughts
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          From building smart apps to optimizing APIs — here's what I’ve learned & explored.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full animate-pulse" />
      </header>

      <div className="mb-14">
        <input
          type="text"
          placeholder="Search articles by title or topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-md border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base transition-all bg-background"
        />
      </div>

      <div className="flex flex-col gap-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))
        ) : (
          <p className="text-center text-muted-foreground text-sm sm:text-base mt-10">
            😕 No blog posts match your search. Try a different keyword.
          </p>
        )}
      </div>
    </section>
  )
}
