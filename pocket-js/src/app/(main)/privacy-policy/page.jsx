export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité de l\'application Sakinah — vos données, vos droits, notre engagement.',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Politique de confidentialité
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Dernière mise à jour : <strong>29 mars 2026</strong>
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700">

          {/* 1. Présentation */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              1. Présentation
            </h2>
            <p className="mt-4">
              Sakinah est une application mobile dédiée au bien-être mental et à la lutte
              contre le harcèlement. Elle s'adresse à des utilisateurs de tout âge, y compris
              des mineurs, avec le consentement obligatoire d'un parent ou tuteur légal pour
              les utilisateurs de moins de 15 ans.
            </p>
            <div className="mt-4 rounded-xl bg-gray-50 px-6 py-4 text-sm">
              <p><strong>Responsable du traitement :</strong></p>
              <p className="mt-1">
                Email de contact :{' '}
                <a href="mailto:st.services92@gmail.com" className="text-cyan-600 font-medium hover:underline">
                  st.services92@gmail.com
                </a>
              </p>
              <p>Pays : France</p>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              2. Données collectées
            </h2>
            <p className="mt-4 font-medium text-gray-900">Lors de l'inscription :</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li>Adresse email</li>
              <li>Pseudo (nom d'affichage)</li>
              <li>Tranche d'âge</li>
              <li>Mot de passe (stocké chiffré, jamais accessible en clair)</li>
            </ul>
            <p className="mt-4 font-medium text-gray-900">Lors de l'utilisation :</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li>Entrées d'humeur : niveau d'humeur et notes personnelles</li>
              <li>Témoignages : textes partagés volontairement (anonymes ou non selon le choix de l'utilisateur)</li>
              <li>Commentaires et likes sur les témoignages</li>
              <li>Tokens FCM : identifiants de l'appareil pour l'envoi de notifications push</li>
            </ul>
            <p className="mt-4 font-medium text-gray-900">Pour les comptes mineurs :</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li>Email du parent ou tuteur légal</li>
              <li>Consentement parental horodaté</li>
            </ul>
          </section>

          {/* 3. Finalité */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              3. Finalité du traitement
            </h2>
            <p className="mt-4">Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li>Fournir les fonctionnalités de l'application (suivi d'humeur, témoignages, chat)</li>
              <li>Envoyer des notifications push (rappels bien-être, interactions communautaires)</li>
              <li>Modérer les contenus publiés</li>
              <li>Permettre au parent de suivre l'activité de son enfant</li>
              <li>Améliorer l'application</li>
            </ul>
            <p className="mt-4 rounded-xl bg-cyan-50 px-5 py-3 text-sm font-medium text-cyan-800">
              Vos données ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.
            </p>
          </section>

          {/* 4. Mineurs */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              4. Mineurs et consentement parental
            </h2>
            <p className="mt-4">
              Conformément au RGPD et à la loi française, l'inscription d'un utilisateur de
              moins de 15 ans requiert le consentement explicite d'un parent ou tuteur légal.
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li>Le parent reçoit un email de confirmation et doit valider le compte</li>
              <li>Le parent dispose d'un espace dédié pour consulter l'activité de son enfant</li>
              <li>Le parent peut supprimer le compte de son enfant à tout moment depuis l'application</li>
            </ul>
          </section>

          {/* 5. Notifications */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              5. Notifications push
            </h2>
            <p className="mt-4">
              L'application utilise <strong>Firebase Cloud Messaging (FCM)</strong> de Google pour
              envoyer des notifications push. Les tokens d'appareils sont stockés sur nos serveurs
              et supprimés automatiquement s'ils deviennent invalides. Vous pouvez désactiver les
              notifications à tout moment depuis les paramètres de votre appareil.
            </p>
          </section>

          {/* 6. Durée de conservation */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              6. Durée de conservation
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cyan-50">
                    <th className="px-4 py-3 text-left font-semibold text-cyan-700">Donnée</th>
                    <th className="px-4 py-3 text-left font-semibold text-cyan-700">Durée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Compte utilisateur', 'Jusqu\'à suppression du compte'],
                    ['Entrées d\'humeur', 'Jusqu\'à suppression du compte'],
                    ['Témoignages', 'Jusqu\'à suppression manuelle ou du compte'],
                    ['Tokens FCM', 'Jusqu\'à déconnexion ou invalidation'],
                    ['Logs serveur', '30 jours maximum'],
                  ].map(([donnee, duree]) => (
                    <tr key={donnee} className="bg-white">
                      <td className="px-4 py-3 text-gray-900">{donnee}</td>
                      <td className="px-4 py-3 text-gray-600">{duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Droits RGPD */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              7. Vos droits (RGPD)
            </h2>
            <p className="mt-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ['Droit d\'accès', 'Obtenir une copie de vos données'],
                ['Droit de rectification', 'Corriger vos données'],
                ['Droit à l\'effacement', 'Supprimer votre compte et toutes vos données'],
                ['Droit d\'opposition', 'Vous opposer à certains traitements'],
                ['Droit à la portabilité', 'Recevoir vos données dans un format lisible'],
              ].map(([droit, desc]) => (
                <li key={droit} className="flex gap-2">
                  <span className="font-semibold text-gray-900 shrink-0">{droit} :</span>
                  <span className="text-gray-600">{desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:st.services92@gmail.com" className="text-cyan-600 font-medium hover:underline">
                st.services92@gmail.com
              </a>
              <br />
              Vous pouvez également supprimer votre compte directement depuis l'application dans{' '}
              <strong>Profil → Supprimer mon compte</strong>.
            </p>

            {/* Encadré suppression */}
            <div className="mt-6 rounded-xl border-l-4 border-orange-400 bg-orange-50 px-6 py-5">
              <p className="font-semibold text-orange-800">
                Demander la suppression de votre compte et de vos données
              </p>
              <p className="mt-2 text-sm text-orange-700">
                Si vous souhaitez que nous supprimions votre compte et toutes les données associées
                (humeurs, témoignages, commentaires), envoyez-nous un email avec l'objet{' '}
                <strong>&ldquo;Suppression de compte&rdquo;</strong> en précisant l'adresse email
                liée à votre compte.
              </p>
              <a
                href={`mailto:st.services92@gmail.com?subject=Suppression%20de%20compte&body=Bonjour%2C%0A%0AJe%20souhaite%20supprimer%20mon%20compte%20Sakinah%20et%20toutes%20les%20donn%C3%A9es%20associ%C3%A9es.%0A%0AEmail%20du%20compte%20%3A%20%5BVOTRE%20EMAIL%5D%0A%0AMerci.`}
                className="mt-4 inline-block rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Demander la suppression par email
              </a>
              <p className="mt-3 text-xs text-orange-600">
                Nous traitons les demandes dans un délai de <strong>30 jours</strong> conformément au RGPD.
              </p>
            </div>
          </section>

          {/* 8. Sécurité */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              8. Sécurité
            </h2>
            <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
              <li>Les mots de passe sont chiffrés avec <strong>bcrypt</strong></li>
              <li>Les communications sont chiffrées via <strong>HTTPS/TLS</strong></li>
              <li>L'accès aux données est restreint aux seuls administrateurs autorisés</li>
              <li>Les tokens d'authentification (JWT) expirent automatiquement</li>
            </ul>
          </section>

          {/* 9. Hébergement */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              9. Hébergement
            </h2>
            <p className="mt-4">L'application et ses données sont hébergées sur :</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li><strong>Render</strong> (serveur backend) — États-Unis</li>
              <li><strong>Brevo</strong> (envoi d'emails) — Union Européenne</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              Ces prestataires respectent le RGPD et disposent des certifications adéquates.
            </p>
          </section>

          {/* 10. Modifications */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              10. Modifications
            </h2>
            <p className="mt-4">
              Nous nous réservons le droit de modifier cette politique. En cas de changement
              significatif, vous serez notifié par email ou via l'application.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b-2 border-cyan-50 pb-2">
              11. Contact
            </h2>
            <div className="mt-4 rounded-xl bg-cyan-50 px-6 py-5">
              <p className="text-sm">
                <strong>Email :</strong>{' '}
                <a href="mailto:st.services92@gmail.com" className="text-cyan-600 font-medium hover:underline">
                  st.services92@gmail.com
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Pour toute réclamation, vous pouvez également contacter la{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-medium">
                  CNIL
                </a>.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
