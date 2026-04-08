'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
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
  Zap,
  ArrowRight,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION WRAPPER — fade + slide on scroll
   ═══════════════════════════════════════════════════════════════════════════ */
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
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   macOS MENU BAR MOCKUP — hero visual showing the actual app UI
   ═══════════════════════════════════════════════════════════════════════════ */
function MenuBarMockup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative mx-auto mt-20 w-full max-w-xl"
    >
      {/* Glow behind mockup */}
      <div className="absolute -inset-12 rounded-3xl bg-accent/8 blur-[60px]" />

      <div className="relative">
        {/* macOS Menu Bar */}
        <div className="rounded-t-xl bg-[#1e1e21]/95 backdrop-blur-xl border border-white/[0.08] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] text-white/60 font-medium">
            <svg className="h-3.5 w-3.5 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span>Finder</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/60">
            <div className="flex items-center gap-1.5 rounded-md bg-amber-500/15 px-2 py-0.5 border border-amber-500/20">
              <Zap className="h-2.5 w-2.5 text-amber-400" />
              <span className="font-medium text-amber-300 font-mono text-[10px]">7🔥</span>
              <div className="flex gap-[3px] ml-0.5">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-[5px] w-[5px] rounded-full bg-amber-400/80" />
                ))}
                <div className="h-[5px] w-[5px] rounded-full bg-white/15" />
              </div>
            </div>
            <span className="font-mono text-[10px]">Mon 9:42</span>
          </div>
        </div>

        {/* Dropdown popup */}
        <div className="absolute right-6 top-full mt-1.5 w-60 rounded-xl bg-[#1a1a1d]/[0.98] backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden">
          {/* App header */}
          <div className="px-4 pt-4 pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white">MoveFlow</div>
                <div className="text-[10px] text-white/35 font-mono">Warrior Mode</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="px-4 py-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/40">Streak</span>
              <span className="text-[11px] font-mono font-semibold text-amber-400">7 days 🔥</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/40">Next break</span>
              <span className="text-[11px] font-mono text-white/60">23 min</span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-white/40">Today</span>
                <span className="text-[11px] font-mono font-medium text-white/60">8 / 10</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/40">Snoozes</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-[6px] w-[6px] rounded-full bg-amber-400/80" />
                ))}
                <div className="h-[6px] w-[6px] rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Week grid */}
          <div className="px-4 py-3 border-t border-white/[0.06]">
            <div className="text-[9px] text-white/25 font-medium mb-2 uppercase tracking-wider">This Week</div>
            <div className="grid grid-cols-7 gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} className="text-center">
                  <div className="text-[8px] text-white/25 mb-1">{d}</div>
                  <div className={`h-5 w-5 mx-auto rounded-md flex items-center justify-center text-[8px] font-medium ${
                    i < 3
                      ? 'bg-amber-500/20 text-amber-400'
                      : i === 3
                        ? 'bg-white/[0.06] text-white/40 ring-1 ring-amber-500/40'
                        : 'bg-white/[0.03] text-white/15'
                  }`}>
                    {i < 3 ? '✓' : i === 3 ? '•' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* macOS rounded bottom for menu bar */}
        <div className="rounded-b-xl bg-[#1e1e21]/40 border border-t-0 border-white/[0.04] h-48" />
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SKIP FRICTION DEMO — visual escalation from green → red
   ═══════════════════════════════════════════════════════════════════════════ */
const frictionSteps = [
  { skip: 1, label: 'Free pass', desc: 'One-tap dismiss', emoji: '✓', gradient: 'from-green-500/20 to-green-500/5', border: 'border-green-500/20', text: 'text-green-400', glow: 'shadow-green-500/10' },
  { skip: 2, label: 'Quick check', desc: '"Why are you skipping?"', emoji: '?', gradient: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/20', text: 'text-yellow-400', glow: 'shadow-yellow-500/10' },
  { skip: 3, label: 'Type it out', desc: '"I choose to sit"', emoji: '⌨', gradient: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/20', text: 'text-orange-400', glow: 'shadow-orange-500/10' },
  { skip: 4, label: 'Wait 60s', desc: 'Stare at countdown', emoji: '⏱', gradient: 'from-red-500/20 to-red-500/5', border: 'border-red-500/20', text: 'text-red-400', glow: 'shadow-red-500/10' },
  { skip: 5, label: 'Locked out', desc: 'Cannot skip', emoji: '🔒', gradient: 'from-red-800/25 to-red-800/5', border: 'border-red-800/25', text: 'text-red-500', glow: 'shadow-red-800/10' },
]

function FrictionStep({ step, index }: { step: typeof frictionSteps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex-1 relative"
    >
      <div className={`h-full rounded-xl border ${step.border} bg-gradient-to-b ${step.gradient} p-4 text-center shadow-lg ${step.glow} transition-all duration-300 hover:scale-[1.03]`}>
        <div className="text-2xl mb-2">{step.emoji}</div>
        <div className={`text-[10px] font-mono font-bold ${step.text} mb-1 uppercase tracking-wider`}>Skip #{step.skip}</div>
        <div className="text-[13px] font-semibold text-text-primary mb-0.5">{step.label}</div>
        <div className="text-[11px] text-text-muted leading-snug">{step.desc}</div>
      </div>
      {index < frictionSteps.length - 1 && (
        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-surface-raised border border-border-subtle">
          <ArrowRight className="h-3 w-3 text-text-muted" />
        </div>
      )}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   MECHANISM CARD — glass card with gradient border on hover
   ═══════════════════════════════════════════════════════════════════════════ */
const mechanisms = [
  {
    icon: Shield,
    title: 'Progressive Skip Friction',
    description: 'First skip is free. Second asks why. Third requires typing a commitment phrase. Fourth demands a 60-second wait. Your brain learns: skipping costs more than moving.',
    research: 'Thaler & Sunstein — Nudge Theory',
    tier: '5-tier escalation',
  },
  {
    icon: Flame,
    title: 'Streak Loss Aversion',
    description: 'Humans fear loss 2× more than they value gains. MoveFlow shows your active streak and makes breaking it feel viscerally painful — with sound, visual, and haptic feedback.',
    research: 'Kahneman & Tversky — Prospect Theory',
    tier: 'Daily streaks',
  },
  {
    icon: Sun,
    title: 'Morning Precommitment',
    description: "Choose your commitment level before willpower depletes. Gentle, Normal, or Warrior mode — a binding contract with your future self.",
    research: 'Gollwitzer — Implementation Intentions',
    tier: '3 modes',
  },
  {
    icon: Timer,
    title: 'Circadian Awareness',
    description: "Gentler nudges in the morning when you're fresh. Aggressive reminders post-lunch when your body crashes. Adapts to your biological rhythm.",
    research: 'Circadian rhythm research',
    tier: '5 daily periods',
  },
  {
    icon: Calendar,
    title: 'Meeting-Aware Scheduling',
    description: 'Camera on? Mic active? Calendar event? MoveFlow detects meetings with confidence-weighted signals and silently postpones breaks.',
    research: 'Context-aware computing',
    tier: '4 signal fusion',
  },
  {
    icon: Battery,
    title: 'Snooze Budget',
    description: 'Five snoozes per day. Visual dots in the menu bar drain as you use them. Regenerate one by completing a break. Scarcity creates value.',
    research: 'Behavioral economics — scarcity',
    tier: '5 daily budget',
  },
  {
    icon: Brain,
    title: 'Ulysses Contract',
    description: "Named after Odysseus who tied himself to the mast. Warrior mode locks in your commitment — you can't downgrade mid-day.",
    research: 'Elster — Ulysses and the Sirens',
    tier: 'Binding lock',
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative gradient-border"
    >
      <div className="relative overflow-hidden rounded-2xl glass-card glass-card-hover p-6 transition-all duration-300 h-full">
        {/* Number */}
        <div className="absolute top-5 right-5 font-mono text-[11px] font-medium text-text-muted/50">
          0{index + 1}
        </div>

        {/* Icon with glow */}
        <div className="relative mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <div className="absolute inset-0 h-11 w-11 rounded-xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <h3 className="mb-2 font-display text-[17px] font-semibold tracking-tight text-text-primary">
          {mechanism.title}
        </h3>
        <p className="mb-4 text-[13px] leading-relaxed text-text-secondary">
          {mechanism.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 font-medium text-accent">
            {mechanism.tier}
          </span>
          <span className="text-text-muted text-[10px]">{mechanism.research}</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATED STAT
   ═══════════════════════════════════════════════════════════════════════════ */
function AnimatedStat({ value, suffix, label, delay = 0 }: { value: string; suffix?: string; label: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center rounded-2xl glass-card p-6"
    >
      <div className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
        {value}
        {suffix && <span className="gradient-text">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm text-text-muted">{label}</div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   STEP CARD
   ═══════════════════════════════════════════════════════════════════════════ */
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
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl glass-card font-display text-2xl font-bold text-accent animate-pulse-glow">
        {step}
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-text-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   BREAK TIER CARD — extracted to fix hooks-in-map
   ═══════════════════════════════════════════════════════════════════════════ */
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
      className="rounded-2xl glass-card glass-card-hover p-6 transition-all duration-300"
    >
      <div className={`mb-3 inline-flex rounded-lg border px-3 py-1 text-[12px] font-semibold ${tier.color}`}>
        {tier.name}
      </div>
      <div className="mb-1 flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold text-text-primary">{tier.duration}</span>
        <span className="text-[12px] text-text-muted">{tier.interval}</span>
      </div>
      <p className="text-[13px] leading-relaxed text-text-secondary">{tier.description}</p>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRIVACY CARD — extracted to fix hooks-in-map
   ═══════════════════════════════════════════════════════════════════════════ */
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
      className="rounded-xl glass-card p-4 transition-all duration-300 hover:border-success/20"
    >
      <Icon className="mb-2 h-5 w-5 text-success" />
      <div className="text-[13px] font-semibold text-text-primary">{item.label}</div>
      <div className="mt-0.5 text-[12px] text-text-muted">{item.desc}</div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60])

  const breakTiers = [
    { name: 'Micro', interval: 'Every 20 min', duration: '20s', description: 'Eye rest — the 20-20-20 rule. Look 20 feet away for 20 seconds.', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Movement', interval: 'Every 45 min', duration: '2 min', description: 'Stand, stretch, walk. Guided exercises tailored to desk workers.', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'Exercise Snack', interval: 'Every 90 min', duration: '5 min', description: 'Bodyweight exercises: squats, push-ups, lunges. Elevate heart rate.', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    { name: 'Extended', interval: 'Every 3 hours', duration: '10 min', description: 'Full movement session. Walk outside, stretch routine, active recovery.', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  ]

  const privacyItems = [
    { icon: Eye, label: 'No camera access', desc: 'Detects camera usage, never accesses the feed' },
    { icon: Lock, label: 'No cloud sync', desc: 'All data stored locally on your Mac' },
    { icon: Shield, label: 'No analytics', desc: 'Zero tracking, zero telemetry, zero ads' },
    { icon: Monitor, label: 'No network required', desc: 'Works fully offline, always' },
  ]

  return (
    <div className="relative min-h-screen">
      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-display text-[15px] font-semibold tracking-tight text-text-primary">
              MoveFlow
            </span>
          </div>

          <div className="hidden items-center gap-8 text-[13px] text-text-muted md:flex">
            <a href="#problem" className="transition-colors hover:text-text-primary">Problem</a>
            <a href="#friction" className="transition-colors hover:text-text-primary">Skip Friction</a>
            <a href="#mechanisms" className="transition-colors hover:text-text-primary">Mechanisms</a>
            <a href="#privacy" className="transition-colors hover:text-text-primary">Privacy</a>
          </div>

          <a
            href="/MoveFlow-v1.0-macOS.zip"
            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-1.5 text-[13px] font-semibold text-surface transition-all hover:brightness-110 shadow-lg shadow-amber-500/20"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
      </nav>

      {/* ─── HERO ───────────────────────────────────────────────── */}
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-14 overflow-hidden"
      >
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.07] blur-[120px] animate-orb" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/[0.05] blur-[100px] animate-orb-reverse" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-center"
        >
          {/* Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
            <Monitor className="h-3.5 w-3.5 text-accent" />
            <span className="text-[12px] font-medium text-text-secondary">
              Native macOS app · Lives in your menu bar
            </span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
            <span className="gradient-text-subtle">Your brain wants you</span>
            <br />
            <span className="gradient-text-subtle">to </span>
            <span className="gradient-text">skip</span>
            <span className="gradient-text-subtle">.</span>
            <br />
            <span className="text-text-primary">Make it earn it.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Every break reminder has a{' '}
            <span className="font-semibold text-danger">90% skip rate</span>.
            MoveFlow uses 7 behavioral psychology mechanisms to make skipping{' '}
            <span className="font-semibold text-text-primary">harder than moving</span>.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/MoveFlow-v1.0-macOS.zip"
              className="glow-amber group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-display text-[15px] font-semibold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download for Mac
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Requirements */}
          <p className="mt-5 text-[12px] text-text-muted">
            Requires macOS 14 (Sonoma) or later · Apple Silicon & Intel · Free
          </p>
        </motion.div>

        {/* macOS Mockup */}
        <MenuBarMockup />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5 text-text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ─── PROBLEM SECTION ────────────────────────────────────── */}
      <Section id="problem" className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
              The Problem
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Break timers don&apos;t fail because of{' '}
              <span className="text-text-muted line-through decoration-danger/50">bad timing</span>.
              <br />
              They fail because of{' '}
              <span className="gradient-text">your brain</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Your present-moment self always prioritizes comfort over health.
              A simple &quot;skip&quot; button is a gift to the part of your brain that
              optimizes for right now — not for your 80-year-old self.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Stretchly, Time Out, and every other break app give you a
              frictionless exit. That&apos;s not a design flaw — it&apos;s a
              psychology failure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <AnimatedStat value="90" suffix="%" label="Average skip rate" delay={0} />
            <AnimatedStat value="10" suffix="h" label="Daily sitting (devs)" delay={0.1} />
            <AnimatedStat value="40" suffix="%" label="Mortality risk increase" delay={0.2} />
            <AnimatedStat value="0" label="Apps that fight back" delay={0.3} />
          </div>
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── SKIP FRICTION SECTION ──────────────────────────────── */}
      <Section id="friction" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
            Core Innovation
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Each skip costs{' '}
            <span className="gradient-text">progressively more</span>{' '}
            than the last.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Five tiers of escalating friction. From effortless to impossible.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {frictionSteps.map((step, i) => (
            <FrictionStep key={i} step={step} index={i} />
          ))}
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── MECHANISMS SECTION ─────────────────────────────────── */}
      <Section id="mechanisms" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
            7 Psychology Mechanisms
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Not a timer.{' '}
            <span className="gradient-text">A behavioral intervention engine</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Each mechanism is grounded in peer-reviewed behavioral science.
            Together, they make skipping cost more than moving.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mechanisms.map((m, i) => (
            <MechanismCard key={i} mechanism={m} index={i} />
          ))}
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── HOW IT WORKS ───────────────────────────────────────── */}
      <Section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
            How It Works
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Three steps. <span className="gradient-text">Zero willpower</span>.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-3 md:gap-8">
          <StepCard
            step="1"
            title="Install & choose your mode"
            description="Download, drag to Applications. Pick your commitment level: Gentle, Normal, or Warrior. This is your Ulysses Contract."
            delay={0}
          />
          <StepCard
            step="2"
            title="Work. MoveFlow watches."
            description="Sits silently in your menu bar. Detects meetings, tracks idle time, adjusts to your circadian rhythm. You forget it's there."
            delay={0.15}
          />
          <StepCard
            step="3"
            title="Move, or face the friction"
            description="Full-screen overlay with a guided exercise. Want to skip? The progressive friction engine makes each skip cost more than the last."
            delay={0.3}
          />
        </div>

        {/* Connector arrows */}
        <div className="mt-10 hidden justify-center gap-4 md:flex">
          {[0, 1].map((i) => (
            <div key={i} className="flex w-1/3 items-center justify-center text-text-muted/40">
              <ArrowRight className="h-4 w-4" />
            </div>
          ))}
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── BREAK TYPES ────────────────────────────────────────── */}
      <Section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
            4-Tier Break System
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            The right break at <span className="gradient-text">the right time</span>.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {breakTiers.map((tier, i) => (
            <BreakTierCard key={i} tier={tier} index={i} />
          ))}
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── PRIVACY ────────────────────────────────────────────── */}
      <Section id="privacy" className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
              Privacy First
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Zero data leaves <span className="gradient-text">your machine</span>.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              MoveFlow runs 100% locally. No accounts, no analytics, no
              telemetry, no cloud. Your break data stays on your Mac in{' '}
              <code className="rounded-md bg-surface-hover/80 px-2 py-1 font-mono text-[13px] text-accent border border-border-subtle">
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

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── FINAL CTA ──────────────────────────────────────────── */}
      <Section className="relative mx-auto max-w-6xl px-6 py-32 text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Stop negotiating with your{' '}
            <span className="gradient-text">sedentary brain</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-text-secondary">
            MoveFlow is free and respects your privacy.
            The only thing it fights is your urge to sit.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/MoveFlow-v1.0-macOS.zip"
              className="glow-amber group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-display text-[16px] font-semibold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              Download for Mac
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-border-subtle/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-orange-600">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="font-display text-[13px] font-semibold text-text-primary">MoveFlow</span>
          </div>

          <div className="flex items-center gap-6 text-[12px] text-text-muted">
            <a href="#privacy" className="transition-colors hover:text-text-secondary">
              Privacy
            </a>
            <span>
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
