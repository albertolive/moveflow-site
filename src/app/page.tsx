'use client'

import { useEffect, useRef } from 'react'
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

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

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
   PSYCHOLOGY MECHANISM CARD
   ═══════════════════════════════════════════════════════════════════════════ */
const mechanisms = [
  {
    icon: Shield,
    title: 'Progressive Skip Friction',
    description:
      'First skip is free. Second asks why. Third requires typing a commitment phrase. Fourth demands a 60-second wait. Your brain learns: skipping costs more than moving.',
    research: 'Thaler & Sunstein — Nudge Theory',
    tier: '5-tier escalation',
  },
  {
    icon: Flame,
    title: 'Streak Loss Aversion',
    description:
      'Humans fear loss 2× more than they value gains. MoveFlow shows your active streak and makes breaking it feel viscerally painful — with sound, visual, and haptic feedback.',
    research: 'Kahneman & Tversky — Prospect Theory',
    tier: 'Daily streaks',
  },
  {
    icon: Sun,
    title: 'Morning Precommitment',
    description:
      'Choose your commitment level before willpower depletes. Gentle, Normal, or Warrior mode — a binding contract with your future self, made when your prefrontal cortex is strongest.',
    research: 'Gollwitzer — Implementation Intentions',
    tier: '3 commitment modes',
  },
  {
    icon: Timer,
    title: 'Circadian Awareness',
    description:
      'Gentler nudges in the morning when you\'re fresh. Aggressive reminders post-lunch when your body crashes. The app adapts to your biological rhythm, not a fixed timer.',
    research: 'Circadian rhythm research',
    tier: '5 daily periods',
  },
  {
    icon: Calendar,
    title: 'Meeting-Aware Scheduling',
    description:
      'Camera on? Mic active? Calendar event? MoveFlow detects meetings with confidence-weighted signals and silently postpones breaks. No interruptions during your standup.',
    research: 'Context-aware computing',
    tier: '4 signal fusion',
  },
  {
    icon: Battery,
    title: 'Snooze Budget',
    description:
      'Five snoozes per day. Visual dots in the menu bar drain as you use them. Regenerate one by completing a break. Scarcity creates value — each snooze becomes precious.',
    research: 'Behavioral economics — scarcity principle',
    tier: '5 daily budget',
  },
  {
    icon: Brain,
    title: 'Ulysses Contract',
    description:
      'Named after Odysseus who tied himself to the mast. Warrior mode locks in your commitment — you can\'t downgrade mid-day. Your morning self protects your afternoon self.',
    research: 'Elster — Ulysses and the Sirens',
    tier: 'Binding commitment',
  },
]

function MechanismCard({
  mechanism,
  index,
}: {
  mechanism: (typeof mechanisms)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = mechanism.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised p-6 transition-all duration-300 hover:border-border hover:bg-surface-hover">
        {/* Number badge */}
        <div className="absolute top-5 right-5 font-mono text-[11px] font-medium text-text-muted">
          0{index + 1}
        </div>

        {/* Icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft">
          <Icon className="h-5 w-5 text-accent" />
        </div>

        {/* Content */}
        <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-text-primary">
          {mechanism.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {mechanism.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-medium text-accent">
            {mechanism.tier}
          </span>
          <span className="text-text-muted">{mechanism.research}</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════════════════════ */
function AnimatedStat({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: string
  suffix?: string
  label: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
        {value}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   STEP CARD
   ═══════════════════════════════════════════════════════════════════════════ */
function StepCard({
  step,
  title,
  description,
  delay,
}: {
  step: string
  title: string
  description: string
  delay: number
}) {
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
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-raised font-display text-xl font-bold text-accent">
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

  return (
    <div className="relative min-h-screen">
      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-border-subtle/50 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-3.5 w-3.5 text-surface" />
            </div>
            <span className="font-display text-[15px] font-semibold tracking-tight">
              MoveFlow
            </span>
          </div>

          <div className="hidden items-center gap-8 text-[13px] text-text-secondary md:flex">
            <a href="#problem" className="transition-colors hover:text-text-primary">
              Problem
            </a>
            <a href="#mechanisms" className="transition-colors hover:text-text-primary">
              How It Works
            </a>
            <a href="#privacy" className="transition-colors hover:text-text-primary">
              Privacy
            </a>
          </div>

          <a
            href="https://github.com/albertolive/MoveFlow/releases"
            className="flex items-center gap-2 rounded-lg bg-text-primary px-4 py-1.5 text-[13px] font-medium text-surface transition-all hover:bg-accent hover:text-surface"
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
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-14"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-center"
        >
          {/* Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-1.5">
            <Monitor className="h-3.5 w-3.5 text-accent" />
            <span className="text-[12px] font-medium text-text-secondary">
              Native macOS app · Lives in your menu bar
            </span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">
            Your brain wants you
            <br />
            to{' '}
            <span className="relative">
              <span className="relative z-10 text-accent">skip</span>
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-accent/20" />
            </span>
            .
            <br />
            <span className="text-text-secondary">Make it earn it.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Every break reminder has a{' '}
            <span className="font-semibold text-danger">90% skip rate</span>.
            MoveFlow uses 7 behavioral psychology mechanisms to make skipping{' '}
            <span className="font-semibold text-text-primary">
              harder than moving
            </span>
            .
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/albertolive/MoveFlow/releases"
              className="glow-amber group flex items-center gap-2.5 rounded-xl bg-accent px-7 py-3.5 font-display text-[15px] font-semibold text-surface transition-all hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download for Mac
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/albertolive/MoveFlow"
              className="flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-[15px] font-medium text-text-secondary transition-all hover:border-text-muted hover:text-text-primary"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          {/* Requirements */}
          <p className="mt-5 text-[12px] text-text-muted">
            Requires macOS 14 (Sonoma) or later · Apple Silicon & Intel · Free & open source
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
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
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Break timers don&apos;t fail
              <br />
              because of{' '}
              <span className="text-text-muted line-through decoration-danger/50">
                bad timing
              </span>
              .
              <br />
              They fail because of{' '}
              <span className="text-accent">your brain</span>.
            </h2>
            <p className="mt-6 leading-relaxed text-text-secondary">
              Your present-moment self always prioritizes comfort over health.
              A simple &quot;skip&quot; button is a gift to the part of your brain that
              optimizes for right now, not for your 80-year-old self.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Stretchly, Time Out, and every other break app give you a
              frictionless exit. That&apos;s not a design flaw — it&apos;s a
              psychology failure.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '90', suffix: '%', label: 'Average skip rate', delay: 0 },
              { value: '10', suffix: 'h', label: 'Daily sitting (devs)', delay: 0.1 },
              { value: '40', suffix: '%', label: 'Mortality risk increase', delay: 0.2 },
              { value: '0', suffix: '', label: 'Apps that fight back', delay: 0.3 },
            ].map((stat, i) => (
              <AnimatedStat key={i} {...stat} />
            ))}
          </div>
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── MECHANISMS SECTION ─────────────────────────────────── */}
      <Section id="mechanisms" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-[12px] font-medium tracking-wider text-accent uppercase">
            7 Psychology Mechanisms
          </div>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Not a timer.
            <br />A{' '}
            <span className="text-accent">behavioral intervention engine</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Each mechanism is grounded in peer-reviewed behavioral science.
            Together, they make the cost of skipping progressively higher than
            the cost of moving.
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
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Three steps. Zero willpower needed.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <StepCard
            step="1"
            title="Install & choose your mode"
            description="Download, drag to Applications. On first launch, pick your commitment level: Gentle, Normal, or Warrior. This is your Ulysses Contract."
            delay={0}
          />
          <StepCard
            step="2"
            title="Work. MoveFlow watches."
            description="Sits silently in your menu bar. Detects meetings, tracks idle time, adjusts to your circadian rhythm. You forget it's there — until it's time to move."
            delay={0.15}
          />
          <StepCard
            step="3"
            title="Move, or face the friction"
            description="Full-screen overlay with a guided exercise. Want to skip? The progressive friction engine makes each skip cost more than the last. Your streak is on the line."
            delay={0.3}
          />
        </div>

        {/* Connector arrows for desktop */}
        <div className="mt-8 hidden justify-center gap-4 md:flex">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex w-1/3 items-center justify-center text-text-muted"
            >
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
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            The right break at the right time.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Micro',
              interval: 'Every 20 min',
              duration: '20 sec',
              description: 'Eye rest following the 20-20-20 rule. Look at something 20 feet away.',
              color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
            },
            {
              name: 'Movement',
              interval: 'Every 45 min',
              duration: '2 min',
              description: 'Stand, stretch, walk. Guided exercises tailored to desk workers.',
              color: 'bg-green-500/10 text-green-400 border-green-500/20',
            },
            {
              name: 'Exercise Snack',
              interval: 'Every 90 min',
              duration: '5 min',
              description: 'Bodyweight exercises. Squats, push-ups, lunges. Enough to elevate heart rate.',
              color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            },
            {
              name: 'Extended',
              interval: 'Every 3 hours',
              duration: '10 min',
              description: 'Full movement session. Walk outside, full stretch routine, active recovery.',
              color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
            },
          ].map((tier, i) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, margin: '-40px' })
            return (
              <motion.div
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border-subtle bg-surface-raised p-6 transition-colors hover:border-border"
              >
                <div className={`mb-3 inline-flex rounded-lg border px-3 py-1 text-[12px] font-semibold ${tier.color}`}>
                  {tier.name}
                </div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-text-primary">
                    {tier.duration}
                  </span>
                  <span className="text-[12px] text-text-muted">{tier.interval}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-text-secondary">
                  {tier.description}
                </p>
              </motion.div>
            )
          })}
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
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Zero data leaves
              <br />
              your machine.
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              MoveFlow runs 100% locally. No accounts, no analytics, no
              telemetry, no cloud. Your break data stays on your Mac in{' '}
              <code className="rounded bg-surface-hover px-1.5 py-0.5 font-mono text-[13px] text-accent">
                ~/Library/Application Support/MoveFlow/
              </code>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Eye, label: 'No camera access', desc: 'Detects camera usage, never accesses the feed' },
              { icon: Lock, label: 'No cloud sync', desc: 'All data stored locally on your Mac' },
              { icon: Shield, label: 'No analytics', desc: 'Zero tracking, zero telemetry, zero ads' },
              { icon: Monitor, label: 'No network required', desc: 'Works fully offline, always' },
            ].map((item, i) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true })
              const Icon = item.icon
              return (
                <motion.div
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-border-subtle bg-surface-raised p-4"
                >
                  <Icon className="mb-2 h-5 w-5 text-success" />
                  <div className="text-[13px] font-semibold text-text-primary">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-[12px] text-text-muted">
                    {item.desc}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      <div className="divider mx-auto max-w-6xl" />

      {/* ─── FINAL CTA ──────────────────────────────────────────── */}
      <Section className="relative mx-auto max-w-6xl px-6 py-32 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Stop negotiating
            <br />
            with your{' '}
            <span className="text-accent">sedentary brain</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-text-secondary">
            MoveFlow is free, open source, and respects your privacy.
            The only thing it fights is your urge to sit.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/albertolive/MoveFlow/releases"
              className="glow-amber group flex items-center gap-2.5 rounded-xl bg-accent px-7 py-3.5 font-display text-[15px] font-semibold text-surface transition-all hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download for Mac
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/albertolive/MoveFlow"
              className="flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-[15px] font-medium text-text-secondary transition-all hover:border-text-muted hover:text-text-primary"
            >
              <GithubIcon className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent">
              <Zap className="h-3 w-3 text-surface" />
            </div>
            <span className="font-display text-[13px] font-semibold">MoveFlow</span>
          </div>

          <div className="flex items-center gap-6 text-[12px] text-text-muted">
            <a
              href="https://github.com/albertolive/MoveFlow"
              className="transition-colors hover:text-text-secondary"
            >
              GitHub
            </a>
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
