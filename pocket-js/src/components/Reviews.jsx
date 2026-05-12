'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Enfin un espace sûr.',
    body: 'Depuis que j\'utilise Sakinah, je me sens moins seul face à mes angoisses. L\'assistant répond toujours avec bienveillance.',
    author: 'Lucas_17ans',
    rating: 5,
  },
  {
    title: 'L\'appli qui m\'a aidé à parler.',
    body: 'Je n\'osais parler à personne de mon harcèlement. Sakinah m\'a donné le courage d\'en parler à ma famille.',
    author: 'Anonyme',
    rating: 5,
  },
  {
    title: 'Le baromètre d\'humeur, c\'est top !',
    body: 'J\'adore voir l\'évolution de mon bien-être semaine après semaine. Ça m\'aide à comprendre ce qui influence mon humeur.',
    author: 'Nadia_15ans',
    rating: 5,
  },
  {
    title: 'Mon fils va mieux.',
    body: 'En tant que parent, le tableau de bord me permet de suivre son humeur sans être intrusif. Un outil formidable.',
    author: 'Maman_de_Thomas',
    rating: 5,
  },
  {
    title: 'Les articles sont super utiles.',
    body: 'Les conseils sur la gestion du stress scolaire m\'ont vraiment aidé avant mes examens. Simple et efficace.',
    author: 'Aya_Terminale',
    rating: 5,
  },
  {
    title: 'Je me sens compris(e).',
    body: 'L\'IA ne juge jamais. Elle écoute et propose des pistes. C\'est exactement ce dont j\'avais besoin.',
    author: 'Anonyme',
    rating: 5,
  },
  {
    title: 'Les témoignages m\'ont sauvé.',
    body: 'Lire les expériences d\'autres jeunes m\'a fait réaliser que je n\'étais pas seul à vivre ça. Merci Sakinah.',
    author: 'Karim_16ans',
    rating: 5,
  },
  {
    title: 'Recommandé par ma psy !',
    body: 'Ma psychologue m\'a conseillé Sakinah comme complément à nos séances. Ça m\'aide vraiment entre les rendez-vous.',
    author: 'Léa_18ans',
    rating: 5,
  },
  {
    title: 'Gratuit et sans pub !',
    body: 'J\'ai téléchargé beaucoup d\'applis bien-être, mais aucune n\'est aussi complète et respectueuse que Sakinah.',
    author: 'Romain_14ans',
    rating: 5,
  },
  {
    title: 'Mon espace à moi.',
    body: 'J\'aime que personne ne sache ce que j\'écris. L\'anonymat me donne la liberté de vraiment m\'exprimer.',
    author: 'Anonyme',
    rating: 5,
  },
  {
    title: 'Les scénarios m\'ont préparé.',
    body: 'Grâce aux mises en situation, j\'ai su quoi faire et quoi dire la prochaine fois qu\'on m\'a harcelé.',
    author: 'Yusuf_15ans',
    rating: 5,
  },
  {
    title: 'Progrès visibles !',
    body: 'En deux mois, mon humeur moyenne est passée de 4 à 6 sur 7. Je vois enfin mes efforts payer.',
    author: 'Inès_Collège',
    rating: 5,
  },
  {
    title: 'Simple et efficace.',
    body: 'L\'interface est claire, rien de compliqué. Même les soirs où je me sens au plus bas, je peux l\'utiliser.',
    author: 'Anonyme',
    rating: 5,
  },
  {
    title: 'Merci à toute l\'équipe.',
    body: 'Une application conçue avec amour pour les jeunes. On sent que les créateurs comprennent vraiment nos besoins.',
    author: 'Fatou_17ans',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let [animationDelay] = useState(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  })

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold">
          &ldquo;{title}&rdquo;
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        &mdash; {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length && 'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Des milliers de jeunes prennent déjà soin d'eux avec Sakinah.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Voici ce qu'ils disent de leur expérience.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
