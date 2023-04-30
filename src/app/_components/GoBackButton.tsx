'use client'

import { IoArrowUpOutline } from 'react-icons/io5'

export function GoBackButton() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className="mt-8 flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-[#0D0E11] lg:mx-auto lg:mt-0"
      onClick={handleScrollToTop}
    >
      <IoArrowUpOutline size={24} className="text-sp-green" />
    </div>
  )
}
