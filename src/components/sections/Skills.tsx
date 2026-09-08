import SectionHeading from '../ui/SectionHeading'
import SkillCard from './SkillCard'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="content-wrap">
        <SectionHeading
          index="02"
          title="Skills"
          description="Grouped by how I actually use them — from core programming to applied AI and GenAI systems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
