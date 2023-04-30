/* eslint-disable tailwindcss/no-custom-classname */
'use client'

import { useState } from 'react'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const team = [
  {
    name: 'Victor Dias',
    role: 'CEO',
    image: '/web/images/team/victor-dias.jpg',
    description:
      'Como CEO da Spaceship, minha missão é liderar a equipe em direção ao sucesso. Estou comprometido em garantir que nossos clientes recebam o melhor atendimento possível e que nossos projetos sejam entregues dentro do prazo e com a mais alta qualidade.',
  },
  {
    name: 'Vitor Conceição',
    role: 'Head of Design',
    image: '/web/images/team/vitor-conceicao.jpg',
    description:
      'Como Head of Design, estou sempre buscando maneiras de inovar e criar soluções criativas para nossos clientes. Minha paixão é criar designs que sejam ao mesmo tempo esteticamente atraentes e funcionais. Na Spaceship, temos um ambiente de trabalho criativo e colaborativo, que nos permite experimentar e desenvolver ideias que realmente façam a diferença.',
  },
  {
    name: 'Adson Martins',
    role: 'Fullstack Developer',
    image: '/web/images/team/adson-martins.jpg',
    description:
      'Como Fullstack Developer, meu papel é desenvolver soluções de alta qualidade e funcionalidades para nossos clientes. Trabalho com as mais recentes tecnologias e ferramentas de desenvolvimento para garantir que os projetos da Spaceship sejam sempre de alto nível.',
  },
]

export function OurTeamSwiper() {
  const [progressWidthValue, setProgressWidthValue] = useState(0)

  function onSlideChange() {
    const nodeArray = document.querySelectorAll(
      'input[type="checkbox"]:checked',
    )

    if (nodeArray.length) {
      const inputArr = Array.from(nodeArray)
      inputArr.forEach((input: any) => {
        input.checked = false
      })
    }
  }

  function onAutoplayTimeLeft(
    swiper: any,
    timeLeft: number,
    percentage: number,
  ) {
    setProgressWidthValue((1 - percentage) * 100)
  }

  return (
    <Swiper
      className="relative"
      spaceBetween={50}
      modules={[Autoplay, Navigation]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      slidesPerView={1}
      onSlideChange={onSlideChange}
    >
      {team.map((member, index) => (
        <SwiperSlide
          className="lg:relative lg:grid lg:grid-cols-3 lg:gap-6"
          key={member.name}
        >
          <div className="col-span-1">
            <img
              src={member.image}
              alt={`${member.name} Photo`}
              className="w-full rounded object-cover"
            />
            <div className="mt-6 h-[8px] rounded-md bg-[#15191F]">
              <div
                className="h-full rounded-md bg-sp-green"
                style={{
                  width: `${progressWidthValue}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="col-span-2">
            <input
              type="checkbox"
              id={`expand-${index}`}
              className="peer hidden"
            />
            <p className="text-[100px] font-medium text-white">&#10077;</p>
            <p className="-mt-10 line-clamp-5 leading-9 text-white peer-checked:!line-clamp-none lg:line-clamp-none">
              {member.description}
            </p>
            <div className="lg:hidden">
              <label
                htmlFor={`expand-${index}`}
                role="button"
                className="hidden text-sp-green peer-checked:!inline-block"
              >
                Ver menos
              </label>

              <label
                htmlFor={`expand-${index}`}
                role="button"
                className="text-sp-green peer-checked:hidden"
              >
                Ver mais
              </label>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              {member.name}
            </h3>
            <p className="mt-2 text-xl text-sp-gray-300">{member.role}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="z-50 mt-6 flex items-center lg:absolute lg:bottom-14 lg:right-0">
        <IoArrowBackOutline className="swiper-button-prev mr-4 cursor-pointer text-[44px] text-sp-green" />
        <IoArrowForwardOutline className="swiper-button-next cursor-pointer text-[44px] text-sp-green" />
      </div>
    </Swiper>
  )
}
