import { useState } from 'react'
import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed
  const hasLinks = Boolean(project.githubUrl || project.demoUrl)

  return (
    <li className="card project-card">
      {showImage && (
        <img
          className="project-card__img"
          src={project.image}
          alt={`Screenshot of the ${project.name} project`}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      )}
      <h3>
        {project.name}
        {project.isNew && <span className="badge">New</span>}
      </h3>
      <p className="card__meta">{project.tech.join(' • ')}</p>
      <p>{project.description}</p>
      {project.tags && (
        <ul className="tags" aria-label="Highlights">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
      {hasLinks && (
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--small"
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary button--small"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </li>
  )
}

export default ProjectCard
