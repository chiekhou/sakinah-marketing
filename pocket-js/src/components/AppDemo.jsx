'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'

const moods = [4, 3, 4, 5, 5, 6, 5, 4, 5, 6, 7, 6, 5, 6, 7, 7, 6, 7, 6, 7, 7, 6, 7, 7, 6, 7, 7, 7, 6, 7, 7, 7, 7]
const maxMood = 7
const minMood = 1

const moodEmojis = { 1: '😢', 2: '😔', 3: '😕', 4: '😐', 5: '🙂', 6: '😊', 7: '😄' }
const moodLabels = { 1: 'Très mal', 2: 'Mal', 3: 'Pas top', 4: 'Neutre', 5: 'Bien', 6: 'Très bien', 7: 'Excellent' }

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef(null)
  let pathRef = useRef(null)
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < moods.length; index++) {
    let x = paddingX + (index / (moods.length - 1)) * width
    let y =
      paddingY +
      (1 - (moods[index] - minMood) / (maxMood - minMood)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex = null
              let closestDistance = Infinity
              for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2ECC71" />
          <stop offset="100%" stopColor="#2ECC71" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#2ECC71', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          if (pathRef.current && typeof pathLength === 'number') {
            pathWidth.set(
              pathRef.current.getPointAtLength(
                pathLength * pathRef.current.getTotalLength(),
              ).x,
            )
          }
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#2ECC71"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#2ECC71"
          />
        </>
      )}
    </svg>
  )
}

export function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activeMoodIndex = activePointIndex ?? moods.length - 1
  let activeValue = moods[activeMoodIndex]
  let previousValue = moods[activeMoodIndex - 1]
  let change = activeMoodIndex === 0 ? null : activeValue - previousValue

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="text-xs/6 text-gray-500">Mon bien-être</div>
            <div className="ml-auto text-lg">{moodEmojis[activeValue]}</div>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl tracking-tight text-gray-900 tabular-nums">
                {activeValue}/7
              </div>
              <div className="text-sm text-gray-500">{moodLabels[activeValue]}</div>
              {change !== null && (
                <div
                  className={clsx(
                    'ml-auto text-sm tracking-tight tabular-nums font-medium',
                    change >= 0 ? 'text-cyan-500' : 'text-gray-500',
                  )}
                >
                  {change >= 0 ? `+${change}` : change} aujourd'hui
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-gray-500">
              <div>7J</div>
              <div className="font-semibold text-cyan-600">1M</div>
              <div>3M</div>
              <div>1An</div>
            </div>
            <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-black/5 ring-inset">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white">
              Partager mon humeur
            </div>
            <div className="mt-3 divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Meilleur jour</div>
                <div className="font-medium text-gray-900">😄 Excellent</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Moyenne</div>
                <div className="font-medium text-gray-900">6.1 / 7</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Entrées ce mois</div>
                <div className="font-medium text-gray-900">33 jours</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
