import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  hint: string
  className?: string
  children: ReactNode
}

function Section({ id, title, hint, className, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      className={`section-card ${className ?? ''}`}
      aria-labelledby={headingId}
    >
      <div className="section-title">
        <h2 id={headingId}>{title}</h2>
        <span className="section-title__hint">{hint}</span>
      </div>
      {children}
    </section>
  )
}

export default Section
