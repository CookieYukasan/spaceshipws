import Image from 'next/image'
import Link from 'next/link'

const socialMedias = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/company/spaceship-web-solutions',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jns_stunner',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jns_stunner',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/spaceshipws/',
  },
]

export function SocialMedia() {
  return (
    <div className="flex items-center space-x-6">
      {socialMedias.map((socialMedia) => (
        <Link href={socialMedia.url} target="_blank" key={socialMedia.name}>
          <Image
            src={`/web/icons/social-media/${socialMedia.name.toLowerCase()}.svg`}
            width={30}
            height={30}
            alt={socialMedia.name}
          />
        </Link>
      ))}
    </div>
  )
}
