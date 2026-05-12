import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">Sakinah</p>
                <p className="mt-1 text-sm text-gray-500">
                  Ton espace de bien-être mental.
                </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href="https://apps.apple.com/fr/app/sakinah/id6759040044"
              target="_blank"
              rel="noopener noreferrer"
              color="cyan"
            >
              Télécharger sur App Store
            </Button>
            <Button href="#" variant="outline" color="gray">
              Bientôt sur Google Play
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-700">
              Politique de confidentialité
            </Link>
            <Link href="/assistance" className="hover:text-gray-700">
              Assistance
            </Link>
            <a
              href="mailto:st.services92@gmail.com"
              className="hover:text-gray-700"
            >
              Nous contacter
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Sakinah. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  )
}
