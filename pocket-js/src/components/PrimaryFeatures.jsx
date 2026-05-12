'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

const MotionAppScreenHeader = motion.create(AppScreen.Header)
const MotionAppScreenBody = motion.create(AppScreen.Body)

const features = [
  {
    name: 'Assistant IA bienveillant',
    description:
      'Pose tes questions sur le stress, le harcèlement ou tes émotions. Notre IA est disponible 24h/24 et répond avec bienveillance, sans jamais te juger.',
    icon: ChatIcon,
    screen: ChatScreen,
  },
  {
    name: 'Baromètre d\'humeur',
    description:
      'Suis ton bien-être au quotidien grâce à une échelle visuelle de 1 à 7. Visualise ton évolution dans le temps et comprends mieux tes émotions.',
    icon: HumeurIcon,
    screen: HumeurScreen,
  },
  {
    name: 'Espace témoignages',
    description:
      'Lis les expériences d\'autres jeunes et partage les tiennes. Tu n\'es pas seul(e). La communauté Sakinah est là pour t\'écouter et te soutenir.',
    icon: CommunityIcon,
    screen: TestimonialsScreen,
  },
]

function ChatIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
      <path
        d="M10 10h12M10 14h8M10 18h10"
        stroke="#171717"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

function HumeurIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4 4 0 01-4 4H9a4 4 0 01-4-4V4zm4-2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 22a5 5 0 100-10 5 5 0 000 10zm-2-5a2 2 0 114 0 2 2 0 01-4 0z"
        fill="#171717"
      />
      <path d="M12 26h8" stroke="#737373" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

function CommunityIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={21} cy={14} r={2} fill="#171717" />
      <circle cx={16} cy={20} r={2} fill="#171717" />
      <path
        d="M11 16v1a5 5 0 0010 0v-1"
        stroke="#737373"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

function ChatScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Assistant IA</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-white">En ligne</span> — toujours là pour toi
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-4 space-y-3">
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm text-gray-800 max-w-[80%]">
              Bonjour ! Comment te sens-tu aujourd'hui ?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-sm bg-cyan-500 px-4 py-3 text-sm text-white max-w-[80%]">
              Je me sens un peu stressé par l'école...
            </div>
          </div>
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm text-gray-800 max-w-[80%]">
              Je comprends. Le stress scolaire est très courant. Qu'est-ce qui te pèse le plus en ce moment ?
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
            Écrire un message
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function HumeurScreen(props) {
  const moodData = [
    { emoji: '😢', label: 'Très mal', level: 1 },
    { emoji: '😔', label: 'Mal', level: 2 },
    { emoji: '😕', label: 'Pas top', level: 3 },
    { emoji: '😐', label: 'Neutre', level: 4 },
    { emoji: '🙂', label: 'Bien', level: 5 },
    { emoji: '😊', label: 'Très bien', level: 6 },
    { emoji: '😄', label: 'Excellent', level: 7, selected: true },
  ]

  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Mon humeur</AppScreen.Title>
        <AppScreen.Subtitle>Comment tu te sens aujourd'hui ?</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-4">
          <div className="grid grid-cols-4 gap-2">
            {moodData.map((mood) => (
              <div
                key={mood.level}
                className={clsx(
                  'flex flex-col items-center rounded-xl p-2 text-center',
                  mood.selected
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-50 text-gray-700',
                )}
              >
                <span className="text-xl">{mood.emoji}</span>
                <span className="mt-1 text-xs font-medium leading-tight">
                  {mood.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
            Valider mon humeur
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function TestimonialsScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Témoignages</AppScreen.Title>
        <AppScreen.Subtitle>Tu n'es pas seul(e)</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="divide-y divide-gray-100">
          {[
            {
              author: 'Anonyme',
              text: 'Grâce à Sakinah, j\'ai pu parler de mon harcèlement sans avoir peur du jugement.',
              emoji: '💪',
            },
            {
              author: 'Anonyme',
              text: 'L\'assistant IA m\'a vraiment aidé à gérer mon anxiété avant les examens.',
              emoji: '😊',
            },
            {
              author: 'Anonyme',
              text: 'Je me sens moins seul depuis que j\'utilise Sakinah chaque jour.',
              emoji: '🤝',
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 px-4 py-3">
              <div className="text-xl">{item.emoji}</div>
              <div>
                <div className="text-xs font-semibold text-gray-900">{item.author}</div>
                <div className="mt-0.5 text-xs text-gray-600 leading-relaxed">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef(undefined)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#2ECC71" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <TabPanels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-32 data-selected:not-data-focus:outline-hidden"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </PhoneFrame>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              if (ref) {
                slideRefs.current[featureIndex] = ref
              }
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#2ECC71"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur-sm sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Aller à la diapositive ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Fonctionnalités principales de Sakinah"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Tout ce dont tu as besoin pour prendre soin de toi.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Sakinah a été conçu pour les jeunes qui traversent des moments
            difficiles. Un espace sûr, bienveillant, et toujours disponible.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
