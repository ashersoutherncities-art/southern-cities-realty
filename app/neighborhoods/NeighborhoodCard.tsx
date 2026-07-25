import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { Neighborhood } from './data'

export function NeighborhoodCard({ n }: { n: Neighborhood }) {
  return (
    <Link
      href={`/neighborhoods/${n.slug}`}
      className="group relative block aspect-[5/4] overflow-hidden rounded-2xl border border-slate-200/70 bg-navy-950 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(15,23,42,0.22)]"
    >
      {n.image ? (
        <img
          src={n.image}
          alt={`${n.name}, North Carolina`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.07]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0e1b3d]">
          <MapPin className="absolute right-4 top-4 h-6 w-6 text-brand-400/70" />
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, #fa8c41 0, transparent 42%), radial-gradient(circle at 80% 15%, #fa8c41 0, transparent 38%)',
            }}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-display text-xl leading-tight text-white">{n.name}</h3>
        <p className="mt-0.5 text-xs font-medium text-white/70">{n.subtitle}</p>
      </div>
    </Link>
  )
}
