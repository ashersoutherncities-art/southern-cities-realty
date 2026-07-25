'use client'

import { useState } from 'react'

export function Headshot({
  src,
  name,
  initials,
}: {
  src: string
  name: string
  initials: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-navy-950 font-display text-5xl font-semibold text-brand-300">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  )
}
