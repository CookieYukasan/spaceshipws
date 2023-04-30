import { ForwardArrow } from '@/components/ForwardArrow'
import Link from 'next/link'

export function ViewMoreButton({
  href = '/',
  target = '_parent',
}: {
  href?: string
  target?: string
}) {
  return (
    <Link
      href={href}
      target={target}
      className="mt-4 flex items-center text-sp-green lg:mt-6 lg:text-xl"
    >
      View more
      <div className="ml-2">
        <ForwardArrow />
      </div>
    </Link>
  )
}
