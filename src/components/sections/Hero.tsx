import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import Button from '../ui/Button'
import { social } from '../../data/social'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* ambient glow, restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 animate-drift rounded-full opacity-25 blur-[110px]"
        style={{
          background: 'radial-gradient(closest-side, #22D3EE, #8B5CF6 65%, transparent 100%)',
        }}
      />
      {/* faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="content-wrap relative">
        <div className="fade-up flex items-center gap-2 font-mono text-xs text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          <span>AI / ML ENGINEER</span>
        </div>

        <h1
          className="fade-up mt-6 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]"
          style={{ animationDelay: '80ms' }}
        >
          Building intelligent systems that solve real problems.
        </h1>

        <p
          className="fade-up mt-6 max-w-xl text-[15px] leading-relaxed text-text-secondary sm:text-base"
          style={{ animationDelay: '160ms' }}
        >
          I work across machine learning, deep learning, and generative AI — grounded in strong
          software engineering fundamentals and a background in competitive programming and
          data structures &amp; algorithms.
        </p>

        <div className="fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me <ArrowUpRight size={15} />
          </Button>
        </div>

        <div
          className="fade-up mt-10 flex items-center gap-5 border-t border-border/70 pt-6"
          style={{ animationDelay: '320ms' }}
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
