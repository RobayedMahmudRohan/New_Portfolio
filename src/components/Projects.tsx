import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
