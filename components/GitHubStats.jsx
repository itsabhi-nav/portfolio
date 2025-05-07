'use client'

import { useEffect, useState } from 'react'
import { fetchGitHubStats } from '../utils/fetchGitHubStats'
import { Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function GitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGitHubStats('itsabhi-nav').then((data) => {
      setStats(data)
      setLoading(false)
    })
  }, [])

  if (loading || !stats) {
    return (
      <div className="text-center py-24 text-muted-foreground animate-pulse text-lg">
        Fetching GitHub data...
      </div>
    )
  }

  return (
    <section className="px-6 py-28 bg-gradient-to-b from-muted/10 to-background text-foreground">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-2 mb-4">
          <Github className="w-6 h-6 text-primary" />
          GitHub Highlights
        </h2>
        <span className="block h-1 w-16 bg-primary mx-auto rounded mb-6" />

        <Image
          src={stats.avatarUrl}
          alt="GitHub Avatar"
          width={90}
          height={90}
          className="rounded-full mx-auto border shadow-lg ring-2 ring-primary"
        />
        <h3 className="text-xl font-semibold mt-4">{stats.name}</h3>
        <Link
          href={stats.htmlUrl}
          target="_blank"
          className="text-sm text-primary underline hover:text-primary/80 transition"
        >
          Visit GitHub Profile
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { label: 'Repos', value: stats.publicRepos },
          { label: 'Followers', value: stats.followers },
          { label: 'Following', value: stats.following }
        ].map((item, i) => (
          <Card
            key={i}
            className="transition-all hover:scale-[1.03] hover:shadow-md border-border"
          >
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Starred Repos */}
      {stats.topRepos.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">⭐ Top Starred Repositories</h3>
          <div className="grid gap-6">
            {stats.topRepos.map((repo, idx) => (
              <Card
                key={idx}
                className="transition-all hover:shadow-md hover:border-primary border-border"
              >
                <CardContent className="p-5 space-y-2">
                  <Link
                    href={repo.html_url}
                    className="text-lg font-medium text-primary underline hover:opacity-90"
                    target="_blank"
                  >
                    {repo.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {repo.description || 'No description'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ⭐ {repo.stars} &nbsp;|&nbsp; {repo.language || 'Unknown'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
