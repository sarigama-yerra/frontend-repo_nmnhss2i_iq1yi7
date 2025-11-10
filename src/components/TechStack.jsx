import { motion } from 'framer-motion'
import { ReactLogo, Box, Server, Boxes, Database, Cloud, Docker, Github } from 'lucide-react'

const stack = [
  { name: 'React', icon: ReactLogo },
  { name: 'Node.js', icon: Server },
  { name: 'Next.js', icon: Boxes },
  { name: 'Python', icon: Box },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Docker },
  { name: 'SQL/NoSQL', icon: Database },
  { name: 'GitHub', icon: Github },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative bg-slate-950 text-slate-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-center"
        >
          Tech Stack
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stack.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="group relative flex flex-col items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]"
            >
              <div className="rounded-lg bg-cyan-500/10 p-4 ring-1 ring-cyan-400/30 mb-3">
                <Icon className="h-8 w-8 text-cyan-300" />
              </div>
              <div className="text-slate-200 font-medium">{name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
