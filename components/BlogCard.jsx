'use client'

import Link from 'next/link'
import { formatDate } from '../utils/formatDate'
import { cn } from '@/lib/utils'

export default function BlogCard({ title, description, date, slug }) {
  return (
    <Link
      href={`/blog/${slug}`}
      role="article"
      aria-label={`Read blog: ${title}`}
      className={cn(
        'group block rounded-xl border border-border p-6 sm:p-7 backdrop-blur-lg bg-background/80 shadow-sm transition-all',
        'hover:shadow-lg hover:border-primary hover:-translate-y-1 hover:scale-[1.015]'
      )}
    >
      {/* Date */}
      <div className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
        📅 <span>{formatDate(date)}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 transition-colors group-hover:text-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
        {description || 'No description available.'}
      </p>
    </Link>
  )
}
