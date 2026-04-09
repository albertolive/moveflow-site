'use client'

import { useRef, useCallback, useState, useEffect, MouseEvent as ReactMouseEvent } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react'
import {
  Brain,
  Timer,
  Flame,
  Sun,
  Calendar,
  Battery,
  Shield,
  Download,
  ChevronDown,
  Monitor,
  Eye,
  Lock,
  Activity,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

/* Section wrapper */
function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* Spotlight Card — cursor-tracking glow */
function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouse = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  )
}

/* macOS Menu Bar Mockup */
function MenuBarMockup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="relative w-full max-w-[340px] lg:max-w-[380px] shrink-0"
    >
      {/* Glow behind */}
      <div className="absolute -inset-16 rounded-3xl bg-accent/10 blur-[80px]" />

      <div className="relative">
        {/* macOS Menu Bar */}
        <div className="rounded-t-xl bg-[#1c1c1f]/95 backdrop-blur-xl border border-white/[0.1] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] text-white/50 font-medium">
            <svg className="h-3.5 w-3.5 text-white/50" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
            <span>Finder</span>
            <span>File</span>
            <span>Edit</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white/50">
            <div className="flex items-center gap-1.5 rounded-md bg-teal-500/15 px-2 py-0.5 border border-teal-500/25">
              <Activity className="h-2.5 w-2.5 text-teal-400" />
              <span className="font-semibold text-teal-300 font-mono text-[10px]">7d</span>
            </div>
            <span className="font-mono text-[10px]">Mon 9:42</span>
          </div>
        </div>

        {/* Dropdown popup */}
        <div className="absolute right-3 top-full mt-1 w-[260px] rounded-xl bg-[#161618]/[0.98] backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/70 overflow-hidden">
          {/* Header — matches real app headerSection */}
          <div className="px-4 pt-4 pb-3 border-b border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-400" />
                <span className="text-[13px] font-semibold text-white">7 day streak</span>
              </div>
              <span className="text-[10px] text-white/40 font-medium bg-white/[0.06] px-2 py-0.5 rounded-full">Normal</span>
            </div>
          </div>

          {/* Status — real app "counting" state */}
          <div className="px-4 py-3 border-b border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <Timer className="h-3 w-3 text-white/50" />
                  <span className="text-[11px] text-white/70">Next movement</span>
                </div>
                <span className="text-[9px] text-white/25">Peak Focus</span>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-[22px] font-semibold text-white font-mono tabular-nums"
              >
                23:14
              </motion.span>
            </div>
          </div>

          {/* Today progress — matches real app progressSection */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-white/35">Today</span>
              <span className="text-[11px] font-mono font-medium text-white/55">8/10</span>
            </div>
            <div className="h-2 rounded bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
                className="h-full rounded bg-gradient-to-r from-green-500 to-green-400"
              />
            </div>
          </div>
        </div>

        {/* Desktop area */}
        <div className="rounded-b-xl bg-[#111114]/60 border border-t-0 border-white/[0.05] h-44" />
      </div>
    </motion.div>
  )
}

/* Friction Steps */
const frictionSteps = [
  { skip: 1, label: 'Free pass', desc: 'One-tap dismiss', gradient: 'from-green-500/25 to-green-500/5', border: 'border-green-500/30', text: 'text-green-400' },
  { skip: 2, label: 'Quick reflection', desc: 'Why are you skipping?', gradient: 'from-yellow-500/25 to-yellow-500/5', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  { skip: 3, label: 'Written intent', desc: 'Type your reason', gradient: 'from-orange-500/25 to-orange-500/5', border: 'border-orange-500/30', text: 'text-orange-400' },
  { skip: 4, label: 'Cooling period', desc: '60-second pause', gradient: 'from-red-500/25 to-red-500/5', border: 'border-red-500/30', text: 'text-red-400' },
  { skip: 5, label: 'Full commitment', desc: 'Cannot skip', gradient: 'from-red-800/30 to-red-800/5', border: 'border-red-800/35', text: 'text-red-500' },
]

function FrictionStep({ step, index }: { step: typeof frictionSteps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex-1 relative friction-connector"
    >
      <div className={`h-full rounded-2xl border ${step.border} bg-gradient-to-b ${step.gradient} p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
        <div className={`text-2xl font-display font-bold mb-3 ${step.text}`}>{step.skip}</div>
        <div className={`text-[10px] font-mono font-bold ${step.text} mb-1.5 uppercase tracking-widest`}>Level {step.skip}</div>
        <div className="text-[15px] font-semibold text-text-primary mb-2">{step.label}</div>
        <div className="text-[12px] text-text-muted leading-relaxed">{step.desc}</div>
      </div>
    </motion.div>
  )
}

/* Mechanism Cards — Bento layout */
const mechanisms = [
  {
    icon: Shield,
    title: 'Progressive Accountability',
    description: 'First skip is free. Second asks why. Third invites reflection. Fourth requests patience. Over time, moving becomes the natural choice.',
    research: 'Thaler & Sunstein — Nudge Theory',
    tier: '5-tier system',
    wide: true,
    accent: 'border-l-teal-500',
    iconColor: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
  },
  {
    icon: Flame,
    title: 'Streak Motivation',
    description: 'We naturally protect what we have built. MoveFlow tracks your movement streak, making consistency feel rewarding and gaps feel meaningful.',
    research: 'Kahneman & Tversky — Prospect Theory',
    tier: 'Daily streaks',
    wide: true,
    accent: 'border-l-orange-500',
    iconColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Sun,
    title: 'Morning Precommitment',
    description: "Choose your commitment level before the day wears you down. Gentle, Normal, or Warrior — a promise from your rested self to your busy self.",
    research: 'Gollwitzer — Implementation Intentions',
    tier: '3 modes',
    wide: false,
    accent: 'border-l-yellow-500',
    iconColor: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  },
  {
    icon: Timer,
    title: 'Circadian Awareness',
    description: "Gentler nudges in the morning. Firmer reminders after lunch when energy dips. Adapts to your natural rhythm throughout the day.",
    research: 'Circadian rhythm research',
    tier: '5 daily periods',
    wide: false,
    accent: 'border-l-blue-400',
    iconColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  {
    icon: Calendar,
    title: 'Meeting-Aware Scheduling',
    description: 'Camera on? Mic active? Calendar event? MoveFlow detects meetings with confidence-weighted signals and silently postpones breaks.',
    research: 'Context-aware computing',
    tier: '4 signal fusion',
    wide: false,
    accent: 'border-l-green-400',
    iconColor: 'text-green-400 bg-green-400/10 border-green-400/20',
  },
  {
    icon: Battery,
    title: 'Snooze Budget',
    description: 'Five postponements per day. Visual indicators show your remaining flexibility. Earn one back by completing a break. Limited resources create mindfulness.',
    research: 'Behavioral economics — scarcity',
    tier: '5 daily budget',
    wide: false,
    accent: 'border-l-purple-400',
    iconColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  },
  {
    icon: Brain,
    title: 'Ulysses Contract',
    description: "Named after Odysseus, who chose his constraints wisely. Warrior mode locks your chosen level for the day — because your best decisions come before the day wears you down.",
    research: 'Elster — Ulysses and the Sirens',
    tier: 'Daily commitment',
    wide: true,
    accent: 'border-l-red-400',
    iconColor: 'text-red-400 bg-red-400/10 border-red-400/20',
  },
]

function MechanismCard({ mechanism, index }: { mechanism: typeof mechanisms[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = mechanism.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group ${mechanism.wide ? 'bento-wide' : ''}`}
    >
      <SpotlightCard className="relative rounded-2xl h-full">
        <div className={`relative rounded-2xl glass-card glass-card-hover p-7 h-full border-l-[3px] ${mechanism.accent}`}>
          {/* Number */}
          <div className="absolute top-5 right-5 font-mono text-[11px] font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
            0{index + 1}
          </div>

          {/* Icon */}
          <div className="relative mb-5">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors ${mechanism.iconColor}`}>
              <Icon className="h-5.5 w-5.5" />
            </div>
          </div>

          <h3 className="mb-4 font-display text-[18px] font-semibold tracking-tight text-text-primary">
            {mechanism.title}
          </h3>
          <p className="mb-5 text-[14px] leading-[1.7] text-text-secondary">
            {mechanism.description}
          </p>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="rounded-full bg-accent/10 border border-accent/25 px-2.5 py-0.5 font-semibold text-accent">
              {mechanism.tier}
            </span>
            <span className="text-text-muted text-[10px]">{mechanism.research}</span>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

/* Animated Stat */
function AnimatedStat({ value, suffix, label, delay = 0, hero = false }: { value: string; suffix?: string; label: string; delay?: number; hero?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`text-center rounded-2xl glass-card ${hero ? 'col-span-2 p-8 border-accent/20' : 'p-6'}`}
    >
      <div className={`font-display font-bold tracking-tight text-text-primary ${hero ? 'text-6xl md:text-7xl' : 'text-4xl md:text-5xl'}`}>
        {value}
        {suffix && <span className={hero ? 'gradient-text' : 'text-accent'}>{suffix}</span>}
      </div>
      <div className={`mt-2 ${hero ? 'text-base text-text-secondary' : 'text-sm text-text-muted'}`}>{label}</div>
    </motion.div>
  )
}

/* Step Card */
function StepCard({ step, title, description, delay }: { step: string; title: string; description: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="mb-6 relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 border border-accent/25 font-display text-2xl font-bold text-accent">
          {step}
        </div>
        <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl -z-10" />
      </div>
      <h3 className="mb-3 font-display text-lg font-semibold text-text-primary">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.7] text-text-secondary">{description}</p>
    </motion.div>
  )
}

/* Break Tier Card */
function BreakTierCard({ tier, index }: {
  tier: { name: string; interval: string; duration: string; description: string; color: string }
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <SpotlightCard className="rounded-2xl glass-card glass-card-hover p-6 h-full transition-all duration-300">
        <div className={`mb-3 inline-flex rounded-lg border px-3 py-1 text-[12px] font-semibold ${tier.color}`}>
          {tier.name}
        </div>
        <div className="mb-2.5 flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-text-primary">{tier.duration}</span>
          <span className="text-[12px] text-text-muted">{tier.interval}</span>
        </div>
        <p className="text-[13px] leading-relaxed text-text-secondary">{tier.description}</p>
      </SpotlightCard>
    </motion.div>
  )
}

/* Privacy Card */
function PrivacyCard({ item, index }: {
  item: { icon: typeof Eye; label: string; desc: string }
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-xl glass-card glass-card-hover p-4"
    >
      <Icon className="mb-3 h-5 w-5 text-success" />
      <div className="text-[13px] font-semibold text-text-primary">{item.label}</div>
      <div className="mt-1.5 text-[12px] text-text-muted">{item.desc}</div>
    </motion.div>
  )
}

/* ═══ MAIN PAGE ═══ */
export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.7], [0, -50])

  const breakTiers = [
    { name: 'Micro', interval: 'Every 20 min', duration: '20s', description: 'Eye rest — the 20-20-20 rule. Look 20 feet away for 20 seconds.', color: 'bg-blue-500/15 text-blue-400 border-blue-500/25' },
    { name: 'Movement', interval: 'Every 45 min', duration: '2 min', description: 'Stand, stretch, walk. Guided exercises tailored to desk workers.', color: 'bg-green-500/15 text-green-400 border-green-500/25' },
    { name: 'Exercise Snack', interval: 'Every 90 min', duration: '5 min', description: 'Bodyweight exercises: squats, push-ups, lunges. Elevate heart rate.', color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25' },
    { name: 'Extended', interval: 'Every 3 hours', duration: '10 min', description: 'Full movement session. Walk outside, stretch routine, active recovery.', color: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
  ]

  const privacyItems = [
    { icon: Eye, label: 'No camera access', desc: 'Detects camera usage, never accesses the feed' },
    { icon: Lock, label: 'No cloud sync', desc: 'All data stored locally on your Mac' },
    { icon: Shield, label: 'No analytics', desc: 'Zero tracking, zero telemetry, zero ads' },
    { icon: Monitor, label: 'No network required', desc: 'Works fully offline, always' },
  ]

  const navSections = ['problem', 'friction', 'mechanisms', 'privacy'] as const
  const [activeSection, setActiveSection] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    for (const id of navSections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Skip to content */}
      <a
        href="#problem"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-surface focus:font-semibold"
      >
        Skip to content
      </a>

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full nav-glass">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/20">
              <Activity className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-display text-[15px] font-semibold tracking-tight text-text-primary">
              MoveFlow
            </span>
          </div>

          <div className="hidden items-center gap-8 text-[13px] text-text-muted md:flex">
            {navSections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors hover:text-text-primary ${activeSection === id ? 'text-text-primary' : ''}`}
              >
                {id === 'friction' ? 'Skip Friction' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/albertolive/MoveFlow/releases"
              className="hidden sm:flex items-center gap-2 rounded-lg bg-accent px-4 py-1.5 text-[13px] font-semibold text-surface transition-all hover:brightness-110 shadow-lg shadow-teal-500/20"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg glass-card md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 text-text-primary" /> : <Menu className="h-4 w-4 text-text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-white/[0.06] md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navSections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-4 py-2.5 text-[14px] transition-colors ${activeSection === id ? 'bg-accent/10 text-accent font-medium' : 'text-text-secondary hover:text-text-primary'}`}
                  >
                    {id === 'friction' ? 'Accountability' : id === 'mechanisms' ? 'Approaches' : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <a
                  href="https://github.com/albertolive/MoveFlow/releases"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[14px] font-semibold text-surface"
                >
                  <Download className="h-4 w-4" />
                  Download for Mac
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative flex min-h-screen items-center px-6 pt-14 overflow-hidden"
      >
        {/* Animated background orbs — visible */}
        <div className="absolute top-[20%] left-[15%] h-[500px] w-[500px] rounded-full bg-teal-500/[0.08] blur-[140px] animate-orb" />
        <div className="absolute bottom-[20%] right-[20%] h-[400px] w-[400px] rounded-full bg-cyan-600/[0.06] blur-[120px] animate-orb-reverse" />
        <div className="absolute top-[60%] left-[60%] h-[300px] w-[300px] rounded-full bg-teal-400/[0.04] blur-[100px] animate-orb" />

        <div className="relative mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full glass-card badge-glow px-4 py-2 mb-8">
              <Monitor className="h-3.5 w-3.5 text-accent relative z-10" />
              <span className="text-[12px] font-medium text-text-secondary relative z-10">
                Native macOS app · Lives in your menu bar
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl font-bold leading-[1.12] tracking-[-0.03em] md:text-6xl lg:text-[5.5rem]">
              <span className="text-text-primary">Your body</span>
              <br />
              <span className="text-text-primary">was made to </span>
              <span className="text-accent">move</span>
              <span className="text-text-primary">.</span>
              <br />
              <span className="gradient-text">Let it.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-8 max-w-lg text-[1.15rem] leading-[1.7] text-text-secondary lg:text-[1.3rem]">
              Break reminders have a{' '}
              <span className="font-semibold text-text-primary">90% skip rate</span>.
              MoveFlow uses 7 evidence-based approaches to make movement{' '}
              <span className="font-semibold text-accent">the path of least resistance</span>.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://github.com/albertolive/MoveFlow/releases"
                className="glow-accent group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 font-display text-[15px] font-semibold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download for Mac
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/albertolive/MoveFlow"
                className="flex items-center gap-2 rounded-xl glass-card px-6 py-4 text-[15px] font-medium text-text-secondary transition-all hover:text-text-primary hover:border-white/15"
              >
                <GithubIcon className="h-4 w-4" />
                View on GitHub
              </a>
            </div>

            <p className="mt-5 text-[12px] text-text-muted">
              macOS 14+ · Apple Silicon & Intel · Free & open source
            </p>
          </motion.div>

          {/* Right: Mockup above the fold */}
          <div className="hidden md:block">
            <MenuBarMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5 text-text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* PROBLEM */}
      <Section id="problem" className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-4 font-mono text-[12px] font-medium tracking-widest text-accent uppercase">
              The Problem
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
              Break reminders don&apos;t fail because of{' '}
              <span className="text-text-muted line-through decoration-text-muted/40 decoration-2">bad timing</span>.
              <br />
              They fail because they ignore{' '}
              <span className="gradient-text">how we decide</span>.
            </h2>
            <p className="mt-6 text-[1.1rem] leading-[1.7] text-text-secondary">
              Your present-moment self naturally prioritizes comfort over long-term health.
              A simple &quot;skip&quot; button is a gift to the part of your mind that
              optimizes for right now — not for your future self.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.7] text-text-muted">
              Stretchly, Time Out, and every other break app treat this as a
              notification problem. It&apos;s a behavioral design problem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <AnimatedStat value="90" suffix="%" label="Average skip rate on break reminders" delay={0} hero />
            <AnimatedStat value="10" suffix="h" label="Daily sitting (devs)" delay={0.1} />
            <AnimatedStat value="40" suffix="%" label="Mortality risk increase" delay={0.2} />
          </div>
        </div>
      </Section>

      {/* SKIP FRICTION */}
      <div className="bg-surface-raised">
      <Section id="friction" className="relative section-glow mx-auto max-w-6xl px-6 py-32">
        <div className="relative z-10 mb-14 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-widest text-accent uppercase">
            Gentle Accountability
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
            Each skip becomes{' '}
            <span className="text-accent">more intentional</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] text-text-secondary leading-relaxed">
            Five levels of mindful resistance. From effortless to fully committed.
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-4 md:gap-5">
          {frictionSteps.map((step, i) => (
            <FrictionStep key={i} step={step} index={i} />
          ))}
        </div>

        {/* Gradient progress bar */}
        <div className="relative z-10 mt-6 mx-auto max-w-3xl">
          <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-green-500/60 via-yellow-500/60 via-orange-500/60 to-red-600/60" />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-text-muted font-mono">
            <span>Easy</span>
            <span>Impossible</span>
          </div>
        </div>
      </Section>

      </div>

      {/* MECHANISMS — Bento Grid */}
      <Section id="mechanisms" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-14 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-widest text-accent uppercase">
            7 Evidence-Based Approaches
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
            Not just reminders.{' '}
            <span className="gradient-text">Science-backed movement habits</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] text-text-secondary leading-relaxed">
            Each approach is grounded in peer-reviewed behavioral science.
            Together, they make movement the natural choice.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mechanisms.map((m, i) => (
            <MechanismCard key={i} mechanism={m} index={i} />
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <div className="bg-surface-raised">
      <Section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-14 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-widest text-accent uppercase">
            How It Works
          </div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] md:text-5xl">
            Three steps to <span className="text-accent">lasting habits</span>.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <StepCard
            step="1"
            title="Install & choose your level"
            description="Download, drag to Applications. Pick your commitment level: Gentle, Normal, or Warrior. A promise from your rested self to your busy self."
            delay={0}
          />
          <StepCard
            step="2"
            title="Work. MoveFlow adapts."
            description="Sits quietly in your menu bar. Detects meetings, tracks idle time, adapts to your natural rhythm. You forget it's there."
            delay={0.15}
          />
          <StepCard
            step="3"
            title="Move with gentle guidance"
            description="A full-screen overlay with guided movement. Want to skip? Each level asks for a bit more intention, helping you build consistency."
            delay={0.3}
          />
        </div>
      </Section>

      </div>

      {/* BREAK TYPES */}
      <Section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-14 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-widest text-accent uppercase">
            4-Tier Break System
          </div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] md:text-5xl">
            The right break at <span className="text-accent">the right time</span>.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {breakTiers.map((tier, i) => (
            <BreakTierCard key={i} tier={tier} index={i} />
          ))}
        </div>
      </Section>

      {/* PRIVACY */}
      <div className="bg-surface-raised">
      <Section id="privacy" className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-4 font-mono text-[12px] font-medium tracking-widest text-accent uppercase">
              Privacy First
            </div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] md:text-5xl">
              Zero data leaves <span className="text-accent">your machine</span>.
            </h2>
            <p className="mt-4 text-[1.1rem] leading-[1.7] text-text-secondary">
              MoveFlow runs 100% locally. No accounts, no analytics, no
              telemetry, no cloud. Your break data stays on your Mac in{' '}
              <code className="rounded-md bg-white/[0.06] px-2 py-1.5 font-mono text-[13px] text-accent border border-white/[0.08]">
                ~/Library/Application Support/MoveFlow/
              </code>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {privacyItems.map((item, i) => (
              <PrivacyCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </Section>

      </div>

      {/* FINAL CTA */}
      <Section className="relative mx-auto max-w-6xl px-6 py-36 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.1] blur-[140px]" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-[-0.02em] md:text-6xl">
            Start moving. Keep moving.{' '}
            <span className="gradient-text">Feel the difference</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[1.1rem] text-text-secondary leading-[1.7]">
            MoveFlow is free, open source, and respects your privacy.
            The only thing it asks is that you move.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/albertolive/MoveFlow/releases"
              className="glow-accent group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 font-display text-[16px] font-semibold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              Download for Mac
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/albertolive/MoveFlow"
              className="flex items-center gap-2 rounded-xl glass-card px-6 py-4 text-[15px] font-medium text-text-secondary transition-all hover:text-text-primary"
            >
              <GithubIcon className="h-5 w-5" />
              Star on GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-cyan-500">
                  <Activity className="h-3 w-3 text-white" />
                </div>
                <span className="font-display text-[13px] font-semibold text-text-primary">MoveFlow</span>
              </div>
              <p className="text-[12px] text-text-muted max-w-xs leading-relaxed">
                The mindful movement companion for your Mac.
              </p>
            </div>

            <div className="flex gap-12 text-[12px]">
              <div className="flex flex-col gap-2.5">
                <span className="font-semibold text-text-secondary uppercase tracking-wider text-[10px]">Product</span>
                <a href="#problem" className="text-text-muted transition-colors hover:text-text-secondary">Problem</a>
                <a href="#friction" className="text-text-muted transition-colors hover:text-text-secondary">Accountability</a>
                <a href="#mechanisms" className="text-text-muted transition-colors hover:text-text-secondary">Approaches</a>
                <a href="#privacy" className="text-text-muted transition-colors hover:text-text-secondary">Privacy</a>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="font-semibold text-text-secondary uppercase tracking-wider text-[10px]">Resources</span>
                <a href="https://github.com/albertolive/MoveFlow" className="text-text-muted transition-colors hover:text-text-secondary">GitHub</a>
                <a href="https://github.com/albertolive/MoveFlow/releases" className="text-text-muted transition-colors hover:text-text-secondary">Releases</a>
                <a href="https://github.com/albertolive/MoveFlow/issues" className="text-text-muted transition-colors hover:text-text-secondary">Issues</a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 md:flex-row">
            <span className="text-[11px] text-text-muted">macOS 14+ · Apple Silicon & Intel · Free & open source</span>
            <span className="text-[11px] text-text-muted">
              Built by{' '}
              <a
                href="https://github.com/albertolive"
                className="text-text-secondary underline decoration-border hover:text-text-primary"
              >
                Albert Olivé
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
