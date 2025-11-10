import { motion } from 'framer-motion'
import { ArrowRight, Download, User } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[92vh] overflow-hidden bg-black text-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light gradient overlay for readability (doesn't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col items-center justify-center text-center">
        {/* Avatar / Placeholder with neon ring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-violet-500 blur-2xl opacity-30 animate-pulse" />
            <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 ring-2 ring-cyan-400/60 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.35)]">
              <User className="h-12 w-12 text-cyan-300" />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Alex Matrix
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-lg md:text-2xl text-cyan-200/90"
        >
          Fullstack Developer & System Analyst
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 max-w-2xl text-slate-200/80"
        >
          I design scalable systems and craft elegant user experiences. Clean architecture, robust APIs, and delightful interfaces—delivered with precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(139,92,246,0.55)] transition-shadow"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-200 hover:bg-white/10 backdrop-blur-md"
          >
            <Download className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
