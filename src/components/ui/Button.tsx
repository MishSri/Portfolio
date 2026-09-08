import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export default function Button({ children, href, variant = 'primary', external = false }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-text-primary text-bg hover:bg-cyan',
    secondary:
      'border border-border text-text-primary hover:border-cyan/60 hover:text-cyan bg-transparent',
  }

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
