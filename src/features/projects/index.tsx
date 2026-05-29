import { ProjectCard } from './ProjectCard'
import { projects } from '@/content/data'

export function Projects() {
  return (
    <section id="work" className="px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="section-heading">Selected Work</p>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
