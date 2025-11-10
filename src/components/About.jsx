import { motion } from 'framer-motion'
import { Cpu, Layers, Cloud, Database } from 'lucide-react'

const skills = [
  { icon: Cpu, label: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { icon: Layers, label: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'GraphQL', 'REST'] },
  { icon: Cloud, label: 'Cloud Architecture', items: ['AWS', 'Docker', 'CI/CD', 'Serverless'] },
  { icon: Database, label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
]

const timeline = [
  { year: '2025', title: 'Lead System Analyst', desc: 'Designed service meshes and observability pipelines for high-traffic platforms.' },
  { year: '2023', title: 'Senior Fullstack Engineer', desc: 'Built scalable micro frontends and event-driven backends.' },
  { year: '2021', title: 'Cloud & DevOps', desc: 'Automated deployments with IaC and container orchestration.' },
  { year: '2019', title: 'Fullstack Foundations', desc: 'Crafted robust APIs and delightful UIs.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 text-slate-100 py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-slate-300"
        >
          I merge systems thinking with product sense to deliver resilient platforms. From domain modeling to UX polish, I bridge the gap between architecture and experience.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, label, items }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_0_30px_rgba(14,165,233,0.1)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/10 p-3 ring-1 ring-cyan-400/30">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold">{label}</h3>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pl-10"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
                  <span className="text-cyan-300 font-semibold">{t.year}</span>
                </div>
                <h4 className="mt-2 text-xl font-bold">{t.title}</h4>
                <p className="text-slate-400">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
