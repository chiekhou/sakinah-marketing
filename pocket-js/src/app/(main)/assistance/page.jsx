export const metadata = {
  title: 'Assistance',
  description:
    'Centre d\'assistance Sakinah — réponses aux questions fréquentes et contact support.',
}

const sections = [
  {
    title: 'Compte et connexion',
    faqs: [
      {
        question: 'Comment créer un compte ?',
        answer:
          "Ouvre l'application et appuie sur \"S'inscrire\". Remplis ton pseudo, ton email et un mot de passe. Un email de vérification te sera envoyé pour activer ton compte.",
      },
      {
        question: "J'ai oublié mon mot de passe, que faire ?",
        answer:
          'Sur l\'écran de connexion, appuie sur "Mot de passe oublié ?". Entre ton adresse email et tu recevras un lien pour le réinitialiser.',
      },
      {
        question: "Je ne reçois pas l'email de vérification",
        answer:
          "Vérifie ton dossier spam ou courrier indésirable. Si tu ne trouves toujours pas l'email après quelques minutes, contacte-nous à l'adresse ci-dessous.",
      },
    ],
  },
  {
    title: 'Compte mineur et consentement parental',
    faqs: [
      {
        question: "Mon enfant a moins de 15 ans, comment l'inscrire ?",
        answer:
          "Lors de l'inscription, si l'enfant indique une tranche d'âge inférieure à 15 ans, un email de consentement sera automatiquement envoyé à l'adresse du parent renseignée. Le parent doit valider via le lien reçu pour activer le compte.",
      },
      {
        question: "Comment accéder à l'espace parent ?",
        answer:
          "Une fois le consentement validé, connecte-toi avec ton email parent et le mot de passe que tu as créé lors de la confirmation. L'espace parent te permet de consulter l'activité de ton enfant.",
      },
      {
        question: 'Comment supprimer le compte de mon enfant ?',
        answer:
          'Connecte-toi à ton espace parent, va dans "Gestion du compte" puis appuie sur "Supprimer le compte de mon enfant". Cette action est irréversible.',
      },
    ],
  },
  {
    title: "Utilisation de l'application",
    faqs: [
      {
        question: "Comment fonctionne le baromètre d'humeur ?",
        answer:
          "Chaque jour, tu peux noter ton humeur sur une échelle de 1 à 7 et ajouter une note personnelle. Ces entrées sont privées et visibles uniquement par toi (et ton parent si tu as moins de 15 ans).",
      },
      {
        question: 'Mes témoignages sont-ils anonymes ?',
        answer:
          "Oui, par défaut les témoignages sont publiés de façon anonyme. Tu peux choisir d'afficher ton pseudo lors de la rédaction. Tous les témoignages sont modérés avant publication.",
      },
      {
        question: 'Comment désactiver les notifications ?',
        answer:
          "Va dans les réglages de ton téléphone → Applications → Sakinah → Notifications, puis désactive-les. Tu peux également les gérer depuis l'application dans ton profil.",
      },
    ],
  },
  {
    title: 'Suppression et données',
    faqs: [
      {
        question: 'Comment supprimer mon compte ?',
        answer:
          'Va dans ton profil → "Supprimer mon compte". Toutes tes données (humeurs, témoignages, commentaires) seront définitivement supprimées.',
      },
      {
        question: 'Quelles données collectez-vous ?',
        answer:
          "Nous collectons uniquement les données nécessaires au fonctionnement de l'application : email, pseudo, entrées d'humeur et témoignages. Consulte notre politique de confidentialité pour plus de détails.",
      },
    ],
  },
]

export default function Assistance() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="text-4xl">💚</span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Assistance Sakinah
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Bienvenue sur la page d'assistance. Retrouvez ci-dessous les réponses
            aux questions les plus fréquentes.
          </p>
        </div>

        {/* FAQ sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border-l-4 border-cyan-500 bg-gray-50 px-5 py-4 open:bg-cyan-50 transition-colors"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-gray-800 group-open:text-cyan-700">
                      <div className="flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <svg
                          className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180 group-open:text-cyan-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact box */}
        <div className="mt-16 rounded-2xl bg-cyan-50 px-8 py-8">
          <span className="inline-block rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white">
            Contact
          </span>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="mt-2 text-gray-600">
            Notre équipe est disponible pour vous aider. Écrivez-nous à :
          </p>
          <a
            href="mailto:st.services92@gmail.com"
            className="mt-2 inline-block text-lg font-semibold text-cyan-600 hover:underline"
          >
            st.services92@gmail.com
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Nous répondons généralement sous 48h.
          </p>
        </div>

      </div>
    </div>
  )
}
