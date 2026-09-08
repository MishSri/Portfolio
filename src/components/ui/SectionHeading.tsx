interface SectionHeadingProps {
  index: string
  title: string
  description?: string
}

export default function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-start gap-4 sm:mb-16">
      <span className="mt-1.5 font-mono text-xs text-text-muted">{index}</span>
      <div>
        <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
