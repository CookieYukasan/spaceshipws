import { SectionTitle } from './SectionTitle'
import { ViewMoreButton } from './ViewMoreButton'

export function OurMission() {
  return (
    <section className="mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-5">
      <div className="col-span-8">
        <SectionTitle className="lg:!w-6/12" title="Nossa missão" />
        <p className="my-4 line-clamp-5 !leading-9 text-sp-gray-100 lg:my-6 lg:line-clamp-none lg:text-xl">
          Nossa missão na Spaceship é oferecer soluções de qualidade em
          desenvolvimento de websites, para ajudar nossos clientes a alcançarem
          seus objetivos de negócio. Investimos em tecnologia e nossa equipe é
          altamente capacitada em design, desenvolvimento web e marketing
          digital. Trabalhamos com ética e transparência, buscando a satisfação
          de nossos clientes.
          <br />
          <br />
          Acreditamos que um site bem desenvolvido é importante para empresas de
          todos os tamanhos e setores. Por isso, oferecemos o melhor serviço
          possível, com qualidade e eficiência. Nossa missão é fazer nossos
          clientes terem sucesso através de soluções personalizadas e websites
          de alto nível.
        </p>
        <ViewMoreButton />
      </div>
      <div className="col-span-4 mt-6 grid grid-cols-2 gap-6 justify-self-start lg:row-[1] lg:mt-0">
        <img
          className="row-span-2 h-[235px] w-[180px] self-center justify-self-end rounded object-cover lg:h-[306px] lg:w-[230px]"
          src="https://images.unsplash.com/photo-1586893079397-c2f22f915414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="image"
        />
        <img
          className="h-[235px] w-[180px] rounded object-cover lg:h-[306px] lg:w-[230px]"
          src="https://images.unsplash.com/photo-1594652634010-275456c808d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="image"
        />
        <img
          className="h-[235px] w-[180px] rounded object-cover lg:h-[306px] lg:w-[230px]"
          src="https://images.unsplash.com/photo-1587099062441-95c27d50cd96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="image"
        />
      </div>
    </section>
  )
}
