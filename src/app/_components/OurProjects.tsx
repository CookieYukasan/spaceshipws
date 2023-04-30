import { ProjectCard } from './ProjectCard'
import { SectionTitle } from './SectionTitle'

const projects = [
  {
    name: 'Migxs',
    image: '/web/images/migxs-banner.jpg',
    description:
      'Migxs é uma plataforma brasileira que oferece uma experiência segura e personalizada para criadores e consumidores de conteúdo adulto. Com a mesma proposta do OnlyFans, Migxs permite que os criadores de conteúdo vendam acesso exclusivo ao seu material, enquanto os consumidores desfrutam de conteúdo autêntico e de alta qualidade.',
    redirectTo: 'https://migxs.com',
  },
  {
    name: 'Beenzart',
    image: '/web/images/beenzart-banner.jpg',
    description:
      'Beenzart é uma plataforma de marketplace de NFT totalmente brasileira, que permite que artistas e criadores vendam seus trabalhos digitais de forma exclusiva e autêntica. Com uma tecnologia segura e confiável, garantindo a autenticidade e a propriedade dos NFTs, oferecendo um ambiente seguro e protegido para artistas e colecionadores.',
    redirectTo: 'https://beenzart.com',
  },
  {
    name: 'JNS Gaming',
    image: '/web/images/jnsgaming-banner.jpg',
    description:
      'JNS Gaming é um time de eSports brasileiro que se especializa em Valorant. Composto por jogadores talentosos e dedicados, o time é conhecido por seu estilo de jogo agressivo e estratégico. Nossa equipe treina incansavelmente para se manter na vanguarda das competições de eSports, sempre buscando novas estratégias e táticas para superar nossos adversários.',
    redirectTo: 'https://jnsgaming.com',
  },
  {
    name: 'Reality Kingdom',
    image: '/web/images/realitykingdom-banner.jpg',
    description: 'Entendi nada desse projeto fica pra depois a descrição',
    redirectTo: 'https://realitykingdom.xyz',
  },
]

export function OurProjects() {
  return (
    <section className="mt-20 lg:mt-24">
      <SectionTitle className="lg:hidden" title="Conheça nossos projetos" />
      <div className="mt-6 columns-1 space-y-6 lg:columns-2">
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
      </div>
    </section>
  )
}
