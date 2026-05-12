import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Sakinah',
  description:
    "Application de bien-être mental pour les jeunes. Assistant IA bienveillant, baromètre d'humeur, témoignages anonymes et contrôle parental.",
  operatingSystem: 'iOS, Android',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
  url: 'https://apps.apple.com/fr/app/sakinah/id6759040044',
  inLanguage: 'fr',
  author: {
    '@type': 'Organization',
    name: 'Sakinah',
    email: 'st.services92@gmail.com',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      {/* <Reviews /> */}
      {/* <Pricing /> */}
      <Faqs />
    </>
  )
}
