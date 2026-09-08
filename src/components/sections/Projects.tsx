import SectionHeading from '../ui/SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="content-wrap">
        <SectionHeading
          index="03"
          title="Projects"
          description="Applied work spanning computer vision, embedded systems, and AI-oriented monitoring."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
