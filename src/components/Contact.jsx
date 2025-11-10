import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 text-slate-100 py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-center"
        >
          Let’s Build Something
        </motion.h2>
        <p className="mt-3 text-center text-slate-400 max-w-2xl mx-auto">
          Open to collaborations, consulting, and ambitious product work.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-slate-100 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-slate-100 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" placeholder="you@domain.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-slate-100 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" placeholder="Tell me about your project" />
            </div>
            <button className="mt-6 w-full rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(139,92,246,0.55)]">
              Send Message
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center gap-4 text-slate-300">
              <a href="mailto:you@example.com" className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-4 py-2 hover:bg-white/10">
                <Mail className="h-4 w-4 text-cyan-300" /> Email
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-4 py-2 hover:bg-white/10">
                <Github className="h-4 w-4 text-cyan-300" /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-4 py-2 hover:bg-white/10">
                <Linkedin className="h-4 w-4 text-cyan-300" /> LinkedIn
              </a>
            </div>

            <div className="mt-8 text-left max-w-md text-slate-400">
              <h3 className="text-slate-200 font-semibold">Availability</h3>
              <p>Currently taking on select projects and advisory roles. Let’s discuss timelines and scope.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
