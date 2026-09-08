import { Github, Linkedin } from 'lucide-react'
import { social } from '../../data/social'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="content-wrap flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm text-text-secondary">© 2026 Srijan Mishra</p>
          <p className="mt-1 font-mono text-xs text-text-muted">AI/ML · GenAI · Software Engineering</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-text-secondary transition-colors hover:text-cyan"
          >
            <Github size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-secondary transition-colors hover:text-cyan"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
