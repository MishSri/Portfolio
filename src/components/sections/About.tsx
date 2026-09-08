import SectionHeading from '../ui/SectionHeading'
import { quickFacts } from '../../data/education'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="content-wrap">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-text-secondary sm:text-base">
            <p>
              I'm a Computer Engineering student at IIIT Bhubaneswar, focused on building
              practical, intelligent systems rather than chasing trends. My work sits at the
              intersection of machine learning, deep learning, and software engineering — with a
              mathematical foundation that keeps the systems I build grounded and explainable.
            </p>
            <p>
              I care about problem solving as a discipline: it's the throughline between
              competitive programming, algorithm design, and the way I approach ML systems —
              break the problem down, reason about the constraints, then build.
            </p>
            <p>
              Outside of coursework, I'm drawn to applied, hands-on projects — from edge-based
              computer vision to sensor-driven embedded systems — and to work that has a
              tangible, real-world use.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="bg-surface px-5 py-6">
                <dt className="font-mono text-[11px] text-text-muted">{fact.label}</dt>
                <dd className="mt-2 font-display text-lg font-semibold text-text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
