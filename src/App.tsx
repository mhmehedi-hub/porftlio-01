import Header from './components/Header';
import Hero from './components/Hero';
import Path from './components/Path';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Workbench from './components/Workbench';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050506] text-zinc-100 font-sans selection:bg-violet-600/40 selection:text-white antialiased overflow-x-hidden">
      {/* Absolute high-tech blueprint lines on deep margins */}
      <div className="fixed inset-y-0 left-4 md:left-8 w-px bg-zinc-900/40 pointer-events-none hidden sm:block"></div>
      <div className="fixed inset-y-0 right-4 md:right-8 w-px bg-zinc-900/40 pointer-events-none hidden sm:block"></div>

      {/* Floating Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Path />
        <Education />
        <Portfolio />
        <Skills />
        <Workbench />
        <Contact />
      </main>

      {/* Elegant minimalist footer */}
      <footer className="relative bg-[#070708] border-t border-zinc-900 py-12 px-4 sm:px-6 md:px-8 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 text-white font-display font-semibold text-sm flex items-center justify-center rounded-lg">
              MH
            </div>
            <div className="text-left">
              <span className="text-xs font-mono tracking-wider font-semibold text-zinc-300 block leading-none">Mehedi Hasan</span>
              <span className="text-[10px] text-zinc-500 font-mono">Brand Identity Specialist</span>
            </div>
          </div>

          <div className="text-center sm:text-right font-mono text-[10px] text-zinc-500 tracking-wider">
            <p>© 2026 Mehedi Hasan. Architecting digital spaces with Swiss grids.</p>
            <p className="text-zinc-600 mt-1 uppercase text-[9px]">Simplicity is the ultimate sophistication</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
