import { Hue } from './Hue'
import { SectionTitle } from './SectionTitle'

export function OurProjects() {
  return (
    <section className="mt-20 lg:mt-24">
      <SectionTitle className="lg:hidden" title="Conheça nossos projetos" />
      {/* <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[masonry]"> */}
      <Hue />
      {/* <div className="mt-6 columns-1 gap-6 space-y-6 lg:columns-2">
        {projects.map((project, index) => (
          <div key={project.name}>
            {index === 0 && (
              <SectionTitle
                className="mb-6 hidden lg:block"
                title="Nossos projetos"
              />
            )}
            <ProjectCard {...project} />
          </div>
        ))}
      </div> */}
    </section>
  )
}
