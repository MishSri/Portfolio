import { ArrowUpRight, Github } from 'lucide-react'
import Badge from '../ui/Badge'
import type { Project } from '../../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-surfaceHover">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
          <p className="mt-1 text-sm text-cyan/90">{project.tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <Github size={17} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">{project.description}</p>

      <div className="mt-4 rounded-md border border-border/70 bg-bg/40 px-4 py-3">
        <p className="font-mono text-[11px] text-text-muted">PROBLEM</p>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">{project.problem}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t} tone="violet">
            {t}
          </Badge>
        ))}
      </div>

      {project.status && (
        <p className="mt-5 pt-4 border-t border-border/70 font-mono text-[11px] text-text-muted">
          {project.status}
        </p>
      )}
    </article>
  )
}
