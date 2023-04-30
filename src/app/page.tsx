import Image from 'next/image'
import { OurMission } from './_components/OurMission'
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
      </main>
    </>
  )
}
