import { motion } from 'framer-motion'
import { ExternalLink, LayoutGrid, Workflow } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'Socket-driven dashboards with anomaly detection and smooth micro-interactions.',
    tags: ['React', 'WebSockets', 'D3.js'],
    link: '#',
  },
  {
    title: 'System Design: Event Bus',
    desc: 'High-throughput event bus with idempotency and outbox pattern.',
    tags: ['Kafka', 'CQRS', 'Docker'],
    link: '#',
  },
  {
    title: 'Multi-tenant SaaS',
    desc: 'Isolated tenancy with policy-based access and audit trails.',
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 text-slate-100 py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              Selected Projects
            </motion.h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              A blend of web apps, data products, and architectural blueprints—built to scale and crafted to delight.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-cyan-300/90">
            <LayoutGrid className="h-5 w-5" />
            <span className="text-sm">Interactive grid</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_0_30px_rgba(14,165,233,0.08)] hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-cyan-500/10 p-3 ring-1 ring-cyan-400/30">
                  <Workflow className="h-6 w-6 text-cyan-300" />
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-cyan-400/30 bg-white/5 px-2 py-1 text-cyan-200/90">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
