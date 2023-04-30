import { SocialMedia } from '@/components/SocialMedia'
import Image from 'next/image'
import { GoBackButton } from './_components/GoBackButton'
import { OurMission } from './_components/OurMission'
import { OurProjects } from './_components/OurProjects'
import { OurTeam } from './_components/OurTeam'
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
        <OurMission />
        <OurTeam />
        <OurProjects />
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
