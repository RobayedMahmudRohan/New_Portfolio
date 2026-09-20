import { useState } from 'react'
import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed
  const hasLinks = Boolean(project.githubUrl || project.demoUrl)

  return (
    <li className="project-card">
      {showImage && (
        <div className="project-card__media">
          <img
            src={project.image}
            alt={`Screenshot of the ${project.name} project`}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        </div>
      )}
      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-card__tech" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {hasLinks && (
          <div className="project-card__links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary button--small"
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
      </div>
    </li>
  )
}

export default ProjectCard
