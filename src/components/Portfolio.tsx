import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Calendar, User, Tag, Maximize2, Copy, Check, Palette } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'branding' | 'ui-ux' | 'render' | 'typography'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Filter project categories
  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="portfolio" className="relative py-20 md:py-28 border-t border-zinc-900 bg-[#070708] px-4 sm:px-6 md:px-8">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">// Selected Case Studies</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
              Creative Portfolio
            </h2>
          </div>

          {/* Filter Pill List */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'branding', label: 'Branding' },
              { id: 'ui-ux', label: 'UI/UX Design' },
              { id: 'render', label: '3D Render' },
              { id: 'typography', label: 'Typography' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  filter === cat.id
                    ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/20'
                    : 'bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800/80 text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer bg-zinc-950 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Image Container with Custom Hover Overlay */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-zinc-900/60 border-b border-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Backdrop Overlay on Hover */}
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Top-Right Category tag indicator */}
                  <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono tracking-wider text-violet-300 uppercase border border-zinc-800/50">
                    {project.category.replace('-', ' ')}
                  </div>
                </div>

                {/* Info Text panel */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-display font-semibold text-zinc-100 group-hover:text-violet-400 transition-colors tracking-tight text-lg">
                      {project.title}
                    </h3>
                    <span className="text-[10px] text-zinc-500 font-mono">{project.date}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="bg-zinc-900 text-zinc-500 text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border border-zinc-800/50">
                        #{t}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] font-mono text-zinc-600 self-center">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Details Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0C0C0D] border border-zinc-800/80 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 text-left shadow-2xl"
              >
                {/* Modal header title & close btn */}
                <div className="sticky top-0 bg-[#0C0C0D] border-b border-zinc-900/80 p-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{selectedProject.category.replace('-', ' ')} file</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800/60 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left panel: high res picture and metadata */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 relative">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                    </div>

                    {/* Technical details block */}
                    <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 grid grid-cols-2 gap-4 text-xs font-mono">
                      <div className="flex flex-col gap-1.5 border-r border-zinc-900 pr-4">
                        <span className="text-zinc-600 uppercase text-[10px] tracking-widest">Dimensions</span>
                        <span className="text-zinc-300">{selectedProject.dimensions || '3000 x 2000 px'}</span>
                      </div>
                      <div className="flex flex-col gap-1.5 pl-2">
                        <span className="text-zinc-600 uppercase text-[10px] tracking-widest">File Weight</span>
                        <span className="text-zinc-300">{selectedProject.fileSize || '4.5 MB'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right panel: project descriptions and palettes */}
                  <div className="md:col-span-5 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                        {selectedProject.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-xs font-mono py-1 border-y border-zinc-900">
                        <span className="text-zinc-500 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {selectedProject.client}
                        </span>
                        <span className="text-zinc-500 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {selectedProject.date}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase block mb-1">Creative Strategy</span>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase block mb-2">Color Blueprint</span>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-2">
                            {selectedProject.colors.map((hex, index) => (
                              <button
                                key={index}
                                onClick={() => copyToClipboard(hex)}
                                className="group/btn relative w-8 h-8 rounded-lg border border-zinc-800 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
                                style={{ backgroundColor: hex }}
                                title={`Copy ${hex} to clipboard`}
                              >
                                <Copy className="w-3 h-3 text-white/40 group-hover/btn:text-white/80 opacity-0 group-hover/btn:opacity-100 transition" />
                              </button>
                            ))}
                          </div>
                          
                          {/* Clipboard response feedback */}
                          <AnimatePresence>
                            {copiedColor && (
                              <motion.span
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -5 }}
                                className="text-[10px] text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-900/50 px-2 py-1 rounded"
                              >
                                Copied {copiedColor}!
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Metadata summary */}
                    <div className="pt-4 border-t border-zinc-900">
                      <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase block mb-2">Scope Deliverables</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-zinc-400 text-[10px] font-mono px-2.5 py-1 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
