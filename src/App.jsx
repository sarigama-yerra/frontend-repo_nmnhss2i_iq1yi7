import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur-md">
            <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">ALEX MATRIX</a>
            <nav className="hidden md:flex items-center gap-2 text-sm">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#stack', label: 'Stack' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-slate-200 hover:text-white hover:bg-white/10">
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="hidden md:inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-1.5 text-sm font-semibold">Let’s talk</a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <footer className="bg-black border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Alex Matrix — Built with care.
      </footer>
    </div>
  )
}

export default App
