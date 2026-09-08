import SectionHeading from '../ui/SectionHeading'
import { education } from '../../data/education'
import CompetitiveProgramming from './CompetitiveProgramming'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="content-wrap">
        <SectionHeading index="05" title="Education" />

        <div className="flex flex-col justify-between gap-6 rounded-lg border border-border bg-surface p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{education.institution}</p>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <p className="font-mono text-[11px] text-text-muted">DURATION</p>
              <p className="mt-1 text-sm text-text-primary">{education.duration}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-text-muted">CGPA</p>
              <p className="mt-1 font-display text-sm font-semibold text-cyan">
                {education.cgpa}
                <span className="text-text-muted">/{education.cgpaScale}</span>
              </p>
            </div>
          </div>
        </div>

        <CompetitiveProgramming />
      </div>
    </section>
  )
}
