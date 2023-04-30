import { ViewMoreButton } from './ViewMoreButton'

type ProjectCardProps = {
  name: string
  image: string
  description: string
  redirectTo: string
}

export function ProjectCard({
  name,
  image,
  description,
  redirectTo,
}: ProjectCardProps) {
  return (
    <div className="rounded bg-[#15191F]">
      <img
        src={image}
        alt={`${name} Banner`}
        className="aspect-video max-h-[300px] w-full rounded-t object-cover"
      />
      <div className="px-4 py-6 lg:p-8">
        <h1 className="text-xl font-bold text-white">{name}</h1>
        <p className="mb-6 mt-4 text-sp-gray-200">{description}</p>
        <ViewMoreButton href={redirectTo} target="_blank" />
      </div>
    </div>
  )
}
