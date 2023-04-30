export function SectionTitle({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <div className={`${className} w-10/12 rounded bg-sp-green p-4`}>
      <h1 className="text-xl font-semibold text-black lg:text-5xl">{title}</h1>
    </div>
  )
}
