import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, FileText, Sparkles, HardDrive, Crop } from 'lucide-react';
import { PROJECTS, AVATAR_IMAGE } from '../data';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'avatar' | 'brand' | 'ui'>('avatar');

  // Tabs structure
  const tabs = {
    avatar: {
      fileName: 'mehedi_avatar.jpg',
      image: AVATAR_IMAGE,
      dim: '1024 x 1024 px',
      size: '1.1 MB',
      format: 'JPG.IMAGE',
      palette: ['#FFFFFF', '#1A191C', '#EAEAEA', '#3E3B42']
    },
    brand: {
      fileName: 'aura_brandbook.psd',
      image: PROJECTS[0].image,
      dim: '3200 x 2400 px',
      size: '4.2 MB',
      format: 'PSD.PHOTOSHOP',
      palette: ['#0B0B0C', '#8B5CF6', '#F3F4F6', '#1E1B4B']
    },
    ui: {
      fileName: 'pulse_dashboard.fig',
      image: PROJECTS[1].image,
      dim: '2560 x 1920 px',
      size: '3.8 MB',
      format: 'FIGMA.PROJECT',
      palette: ['#09090B', '#A78BFA', '#10B981', '#18181B']
    }
  };

  const currentAsset = tabs[activeTab];

  return (
    <section id="about" className="relative pt-32 pb-24 md:py-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 right-0 -z-10 w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[120px]"></div>
      <div className="absolute bottom-10 left-10 -z-10 w-[200px] h-[200px] rounded-full bg-indigo-600/10 blur-[100px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column: Introductions and copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for Design Commissions
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs md:text-sm font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-2"
          >
            <span>// Hello world, I am</span>
          </motion.p>

          {/* Massive Display Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col text-left font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
          >
            <span>Mehedi</span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent filter drop-shadow-sm select-none">
              Hasan
            </span>
          </motion.div>

          {/* Specialization Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-lg text-xs md:text-sm font-mono text-zinc-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Brand Identity & Graphic Artist</span>
            <span className="w-1.5 h-4 bg-violet-500 animate-pulse inline-block ml-0.5"></span>
          </motion.div>

          {/* Creative Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed"
          >
            Crafting pure brand guidelines, structural Swiss layout systems, and glowing digital designs. 
            I synthesize geometric balance with neon aesthetics to deliver visual stories that are 
            unforgettable.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.4)] hover:-translate-y-0.5"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://drive.google.com/file/d/1VoMiKLYfYaC2mjw4GTcTSPzRgcW2d3U2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800/85 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <Download className="w-4 h-4 text-violet-400" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right column: Interactive macOS Mock Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          {/* File Switcher Tabs */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => setActiveTab('avatar')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-all border ${
                activeTab === 'avatar'
                  ? 'bg-violet-600/10 border-violet-500/40 text-violet-300'
                  : 'bg-zinc-950/40 border-zinc-900 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              mehedi.jpg
            </button>
            <button
              onClick={() => setActiveTab('brand')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-all border ${
                activeTab === 'brand'
                  ? 'bg-violet-600/10 border-violet-500/40 text-violet-300'
                  : 'bg-zinc-950/40 border-zinc-900 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              aura_identity.psd
            </button>
            <button
              onClick={() => setActiveTab('ui')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-all border ${
                activeTab === 'ui'
                  ? 'bg-violet-600/10 border-violet-500/40 text-violet-300'
                  : 'bg-zinc-950/40 border-zinc-900 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              pulse_dashboard.fig
            </button>
          </div>

          {/* macOS window mockup container */}
          <div className="relative group rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-2xl shadow-purple-950/10">
            {/* Soft backdrop glow behind window */}
            <div className="absolute -inset-px bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl -z-10 group-hover:from-violet-900/30 group-hover:to-zinc-900 transition duration-500"></div>

            {/* Window Title Bar */}
            <div className="bg-[#0B0B0C] border-b border-zinc-900 px-4 py-3.5 flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
              </div>

              {/* Filename tab title */}
              <div className="text-zinc-400 font-mono text-xs select-none flex items-center gap-1.5 bg-zinc-900/80 px-4 py-1 rounded-md border border-zinc-800/30">
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                {currentAsset.fileName}
              </div>

              {/* Status bar item */}
              <div className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase select-none">
                100% Zoom
              </div>
            </div>

            {/* Window Canvas Image */}
            <div className="relative aspect-square sm:aspect-[3/4] bg-zinc-900/40 overflow-hidden group/image flex items-center justify-center p-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center border border-zinc-800/30"
                >
                  <img
                    src={currentAsset.image}
                    alt={currentAsset.fileName}
                    className="w-full h-full object-cover transition-all duration-700 saturate-[0.88] contrast-[1.04] hover:saturate-100 hover:scale-[1.03] hover:contrast-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Grid overlay for design aesthetic */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Window Metadata Panel Footer */}
            <div className="bg-[#0B0B0C] border-t border-zinc-900/80 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Crop className="w-3.5 h-3.5 text-zinc-600" />
                  {currentAsset.dim}
                </span>
                <span className="flex items-center gap-1">
                  <HardDrive className="w-3.5 h-3.5 text-zinc-600" />
                  {currentAsset.size}
                </span>
              </div>

              {/* Extracted Theme Color Palette circles */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-600 uppercase">Colors:</span>
                <div className="flex gap-1.5">
                  {currentAsset.palette.map((color, index) => (
                    <div
                      key={index}
                      className="w-3.5 h-3.5 rounded-full border border-zinc-800 hover:scale-125 transition-transform cursor-pointer"
                      style={{ backgroundColor: color }}
                      title={`Palette color ${color}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
