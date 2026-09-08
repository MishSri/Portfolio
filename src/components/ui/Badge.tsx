interface BadgeProps {
  children: string
  tone?: 'default' | 'cyan' | 'violet'
}

export default function Badge({ children, tone = 'default' }: BadgeProps) {
  const tones = {
    default: 'border-border text-text-secondary',
    cyan: 'border-cyan/30 text-cyan',
    violet: 'border-violet/30 text-violet',
  }

  return (
    <span
      className={`inline-flex items-center rounded border bg-surface/60 px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
