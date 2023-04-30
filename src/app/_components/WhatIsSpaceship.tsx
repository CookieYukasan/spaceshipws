import { SocialMedia } from '@/components/SocialMedia'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { SectionTitle } from './SectionTitle'
import { ViewMoreButton } from './ViewMoreButton'

export function WhatIsSpaceship() {
  return (
    <section className="lg:flex lg:flex-row-reverse lg:justify-between">
      <Image
        src="/web/images/hero-illustration.svg"
        width={182}
        height={194}
        className="mx-auto w-[200px] lg:mx-0 lg:w-[500px]"
        alt="Hero Illustration"
      />
      <div className="mt-8 lg:w-1/2">
        <SectionTitle className="lg:!w-10/12" title="O que é a Spaceship?" />
        <div className="lg:hidden">
          <p className="my-4 !leading-9 text-sp-gray-100 lg:my-6 lg:text-xl">
            Spaceship é uma agência de desenvolvimento de websites que oferece
            soluções personalizadas e de qualidade. Com equipe especializada em
            tecnologia e design, cria sites modernos e funcionais, além de
            otimizar o posicionamento nos motores de busca. Oferece também
            serviços de hospedagem, manutenção e suporte técnico. A Spaceship é
            referência no mercado e pode ajudar sua empresa a alcançar novos
            patamares. Entre em contato e conheça nossos serviços.
          </p>
        </div>
        <div className="hidden lg:block">
          <p className="my-6 text-xl !leading-9 text-sp-gray-100">
            <Balancer ratio={1.5}>
              Spaceship é uma agência de desenvolvimento de websites que oferece
              soluções personalizadas e de qualidade. Com equipe especializada
              em tecnologia e design, cria sites modernos e funcionais, além de
              otimizar o posicionamento nos motores de busca. Oferece também
              serviços de hospedagem, manutenção e suporte técnico. A Spaceship
              é referência no mercado e pode ajudar sua empresa a alcançar novos
              patamares. Entre em contato e conheça nossos serviços.
            </Balancer>
          </p>
        </div>
        <SocialMedia />
        <ViewMoreButton />
      </div>
    </section>
  )
}
