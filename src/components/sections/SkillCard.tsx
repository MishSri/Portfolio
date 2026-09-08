import Badge from '../ui/Badge'
import type { SkillCategory } from '../../data/skills'

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-cyan/30">
      <h3 className="font-display text-sm font-semibold text-text-primary">{category.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  )
}
