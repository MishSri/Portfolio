import SectionHeading from '../ui/SectionHeading'
import { timeline } from '../../data/timeline'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="content-wrap">
        <SectionHeading
          index="04"
          title="Experience"
          description="A technical journey, not a corporate resume — the milestones that shaped how I build."
        />

        <ol className="relative ml-1 space-y-10 border-l border-border pl-8">
          {timeline.map((entry) => (
            <li key={entry.id} className="relative">
              <span className="absolute -left-[2.31rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-bg bg-cyan" />
              <p className="font-mono text-[11px] text-text-muted">{entry.period}</p>
              <h3 className="mt-1.5 font-display text-base font-semibold text-text-primary">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-text-secondary">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
