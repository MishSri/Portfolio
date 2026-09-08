import { Mail, Github, Linkedin } from 'lucide-react'
import { social } from '../../data/social'

const contactLinks = [
  { id: 'email', label: 'Email', value: social.email, href: `mailto:${social.email}`, Icon: Mail },
  { id: 'github', label: 'GitHub', value: 'View profile', href: social.github, Icon: Github },
  { id: 'linkedin', label: 'LinkedIn', value: 'View profile', href: social.linkedin, Icon: Linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="content-wrap">
        <div className="rounded-xl border border-border bg-surface px-8 py-14 sm:px-14">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
              Let's build something intelligent.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
              I'm open to conversations with recruiters, engineers, and collaborators — about
              internships, projects, or anything at the intersection of AI and software
              engineering.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactLinks.map(({ id, label, value, href, Icon }) => (
              <a
                key={id}
                href={href}
                target={id === 'email' ? undefined : '_blank'}
                rel={id === 'email' ? undefined : 'noopener noreferrer'}
                className="group flex items-center gap-3 rounded-lg border border-border bg-bg/40 px-5 py-4 transition-colors duration-200 hover:border-cyan/40"
              >
                <Icon size={18} className="text-cyan" />
                <div>
                  <p className="font-mono text-[11px] text-text-muted">{label}</p>
                  <p className="mt-0.5 truncate text-sm text-text-primary">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
