import Image from 'next/image'
import clsx from 'clsx'

import sakinahLogo from '@/images/logos/sakinah.svg'

export function Logomark({ className }) {
  return (
    <Image
      src={sakinahLogo}
      alt="Sakinah"
      className={clsx('rounded-xl object-contain', className)}
      unoptimized
    />
  )
}

export function Logo({ className, ...props }) {
  return (
    <div className={clsx('flex items-center gap-3', className)} {...props}>
      <Logomark className="h-10 w-10 flex-none" />
      <span className="text-xl font-bold tracking-tight text-gray-900">
        Sakinah
      </span>
    </div>
  )
}
