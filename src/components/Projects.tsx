import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Section from './Section'

function Projects() {
  return (
    <Section id="projects" title="Projects" hint="Selected works">
      <ul className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
