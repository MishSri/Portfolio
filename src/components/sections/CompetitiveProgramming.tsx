import Badge from '../ui/Badge'
import { cpPlatforms, cpFocus } from '../../data/competitiveProgramming'

export default function CompetitiveProgramming() {
  return (
    <div className="mt-6">
      <p className="font-mono text-[11px] text-text-muted">COMPETITIVE PROGRAMMING &amp; DSA</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {cpFocus.map((item) => (
          <Badge key={item} tone="cyan">
            {item}
          </Badge>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {cpPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="rounded-lg border border-dashed border-border bg-surface/60 px-5 py-4"
          >
            <p className="text-sm font-medium text-text-primary">{platform.name}</p>
            <p className="mt-1 text-xs text-text-muted">{platform.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
