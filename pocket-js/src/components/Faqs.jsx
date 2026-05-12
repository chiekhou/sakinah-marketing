import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Sakinah est-il gratuit ?',
      answer:
        'Oui, Sakinah est entièrement gratuit. Toutes les fonctionnalités — assistant IA, baromètre d\'humeur, articles, témoignages — sont accessibles sans abonnement ni publicité.',
    },
    {
      question: 'À partir de quel âge peut-on utiliser Sakinah ?',
      answer:
        'Sakinah est conçu pour les jeunes à partir de 12 ans. Les mineurs bénéficient d\'une protection renforcée et d\'un espace parent permettant à leurs tuteurs de suivre leur bien-être.',
    },
    {
      question: 'Mes données sont-elles en sécurité ?',
      answer:
        'Absolument. Toutes tes données sont chiffrées et ne sont jamais vendues à des tiers. Tu peux témoigner de manière anonyme, et supprimer ton compte à tout moment.',
    },
  ],
  [
    {
      question: 'L\'assistant IA remplace-t-il un psychologue ?',
      answer:
        'Non. L\'assistant IA est un outil de soutien émotionnel, pas un substitut aux professionnels de santé. Si tu traverses une crise sérieuse, nous t\'encourageons à contacter un professionnel ou une ligne d\'urgence.',
    },
    {
      question: 'Comment fonctionne le contrôle parental ?',
      answer:
        'Les parents peuvent créer un Espace Parent lié au compte de leur enfant. Ils peuvent consulter le baromètre d\'humeur, activer ou désactiver les publications communautaires, et recevoir des alertes en cas de baisse significative du bien-être.',
    },
    {
      question: 'Puis-je utiliser Sakinah sans créer de compte ?',
      answer:
        'Oui, une navigation anonyme est possible pour consulter les articles et certains contenus. Mais pour accéder à l\'assistant IA, au baromètre d\'humeur et aux témoignages, un compte est nécessaire.',
    },
  ],
  [
    {
      question: 'Que faire si je me sens en danger ?',
      answer:
        'Si tu es en danger immédiat, appelle le 15 (SAMU) ou le 3114 (numéro national de prévention du suicide). Sakinah intègre également des liens vers ces ressources directement dans l\'application.',
    },
    {
      question: 'Comment signaler un contenu inapproprié ?',
      answer:
        'Chaque témoignage et commentaire dispose d\'un bouton de signalement. Notre équipe de modération examine tous les signalements et agit rapidement pour maintenir un espace sûr et bienveillant.',
    },
    {
      question: 'Sakinah est-il disponible sur iOS et Android ?',
      answer:
        'Oui, Sakinah est disponible sur l\'App Store (iOS) et Google Play (Android). L\'application est optimisée pour tous les types d\'écrans, des smartphones aux tablettes.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Questions fréquentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Tu as d'autres questions ?{' '}
            <a
              href="mailto:st.services92@gmail.com"
              className="text-gray-900 underline"
            >
              Contacte-nous
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
