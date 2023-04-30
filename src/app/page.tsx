import { SocialMedia } from '@/components/SocialMedia'
import Image from 'next/image'
import { GoBackButton } from './_components/GoBackButton'
import { OurTeamSwiper } from './_components/OurTeamSwiper'
import { ProjectsMasonryGrid } from './_components/ProjectsMasonryGrid'
import { SectionTitle } from './_components/SectionTitle'
import { ViewMoreButton } from './_components/ViewMoreButton'
import { WhatIsSpaceship } from './_components/WhatIsSpaceship'

export default function Home() {
  return (
    <>
      <header className="mt-8 flex items-center justify-center">
        <Image
          src="/web/images/logo.svg"
          width={281}
          height={57}
          className="w-[200px] lg:w-[380px]"
          alt="Logo Image"
        />
      </header>
      <main className="container mx-auto mt-8 px-4 lg:mt-24">
        <WhatIsSpaceship />
        <section className="mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="col-span-8">
            <SectionTitle className="lg:!w-6/12" title="Nossa missão" />
            <p className="my-4 line-clamp-5 !leading-9 text-sp-gray-100 lg:my-6 lg:line-clamp-none lg:text-xl">
              Nossa missão na Spaceship é oferecer soluções de qualidade em
              desenvolvimento de websites, para ajudar nossos clientes a
              alcançarem seus objetivos de negócio. Investimos em tecnologia e
              nossa equipe é altamente capacitada em design, desenvolvimento web
              e marketing digital. Trabalhamos com ética e transparência,
              buscando a satisfação de nossos clientes.
              <br />
              <br />
              Acreditamos que um site bem desenvolvido é importante para
              empresas de todos os tamanhos e setores. Por isso, oferecemos o
              melhor serviço possível, com qualidade e eficiência. Nossa missão
              é fazer nossos clientes terem sucesso através de soluções
              personalizadas e websites de alto nível.
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
        <section className="mt-20 lg:mt-24">
          <SectionTitle className="lg:!w-6/12" title="Conheça nossa equipe" />
          <p className="my-4 !leading-9 text-sp-gray-100 lg:my-6 lg:text-xl">
            Saiba mais sobre os profissionais talentosos da Spaceship e descubra
            como eles podem ajudá-lo a alcançar seus objetivos no mundo digital.
            Conheça nossa equipe e veja por que somos uma agência de
            desenvolvimento de websites de destaque no mercado.
          </p>
          <OurTeamSwiper />
        </section>
        <section className="mt-20 lg:mt-24">
          <SectionTitle className="lg:hidden" title="Conheça nossos projetos" />
          <ProjectsMasonryGrid />
        </section>
      </main>
      <footer className="mt-24 bg-[#15191F] p-8 lg:mt-[100px]">
        <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
          <SocialMedia />
          <GoBackButton />
        </div>
      </footer>
    </>
  )
}
