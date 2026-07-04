import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, Settings, CheckCircle2, Cpu } from 'lucide-react';
import { SKILLS, EXPERIENCES } from '../data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Software' | 'Core Design' | 'Aesthetics'>('All');
  
  // Bezier interactive simulator state
  const [anchorX, setAnchorX] = useState(150);
  const [anchorY, setAnchorY] = useState(100);
  const [handle1X, setHandle1X] = useState(60);
  const [handle1Y, setHandle1Y] = useState(40);
  const [handle2X, setHandle2X] = useState(240);
  const [handle2Y, setHandle2Y] = useState(160);

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const handleResetBezier = () => {
    setAnchorX(150);
    setAnchorY(100);
    setHandle1X(60);
    setHandle1Y(40);
    setHandle2X(240);
    setHandle2Y(160);
  };

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#0B0B0C] border-t border-zinc-900 px-4 sm:px-6 md:px-8">
      {/* Absolute floating graphics background */}
      <div className="absolute top-1/2 left-0 -z-10 w-[250px] h-[250px] rounded-full bg-indigo-900/10 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">// Competencies & Path</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
            Expertise & Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left panel (Skills Categorizer and metrics) - col-span 7 */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-4">
              {(['All', 'Software', 'Core Design', 'Aesthetics'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all uppercase ${
                    activeCategory === cat
                      ? 'bg-violet-600/10 border border-violet-500/40 text-violet-300'
                      : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                  }`}
                >
                  {cat === 'All' ? 'All Competencies' : cat}
                </button>
              ))}
            </div>

            {/* Skills Progress list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-medium text-sm text-zinc-200">{skill.name}</span>
                    <span className="font-mono text-xs text-violet-400">{skill.level}%</span>
                  </div>

                  {/* Custom progress bar */}
                  <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                    />
                  </div>

                  <p className="text-[11px] text-zinc-500 leading-normal">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel (Interactive Vector Pen Simulator & Timeline) - col-span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Interactive Vector Bezier Pen Simulator Box */}
            <div className="bg-zinc-950 border border-zinc-900/80 rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse"></div>
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Vector Bezier Simulator</span>
                </div>
                <button
                  onClick={handleResetBezier}
                  className="text-[10px] font-mono text-zinc-500 hover:text-violet-400 border border-zinc-800 hover:border-violet-500/20 px-2 py-1 rounded bg-zinc-900/50 transition-all"
                >
                  Reset Vector
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 leading-relaxed mb-4">
                Interactive anchor and handles study. Click and drag the handles below to see how bezier vectors recalculate mathematical paths.
              </p>

              {/* SVG Canvas drawing vector */}
              <div className="relative aspect-video bg-[#050506] rounded-xl border border-zinc-900 overflow-hidden flex items-center justify-center">
                {/* Visual grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* The Bezier path itself */}
                  <path
                    d={`M ${handle1X} ${handle1Y} Q ${anchorX} ${anchorY} ${handle2X} ${handle2Y}`}
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                  />

                  {/* Lines connecting handles to anchors */}
                  <line x1={handle1X} y1={handle1Y} x2={anchorX} y2={anchorY} stroke="#4B5563" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1={handle2X} y1={handle2Y} x2={anchorX} y2={anchorY} stroke="#4B5563" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Anchor Point (Middle control point) */}
                  <circle cx={anchorX} cy={anchorY} r="5" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.5" cursor="pointer" />

                  {/* Handle 1 Control Point */}
                  <circle cx={handle1X} cy={handle1Y} r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" cursor="pointer" />

                  {/* Handle 2 Control Point */}
                  <circle cx={handle2X} cy={handle2Y} r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" cursor="pointer" />

                  {/* Display anchor text metrics */}
                  <text x="12" y="24" fill="#6B7280" fontSize="8" fontFamily="monospace">
                    bezierPath: M {handle1X},{handle1Y} Q {anchorX},{anchorY} {handle2X},{handle2Y}
                  </text>
                </svg>
              </div>

              {/* Slider Controls for the simulator */}
              <div className="mt-4 flex flex-col gap-3">
                {/* Anchor Position Slider */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>Apex Anchor (X):</span>
                    <span className="text-violet-400">{anchorX}px</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="250"
                    value={anchorX}
                    onChange={(e) => setAnchorX(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  />
                </div>

                {/* Left Handle Y Position Slider */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>Left Bezier Vector (Y):</span>
                    <span className="text-sky-400">{handle1Y}px</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="180"
                    value={handle1Y}
                    onChange={(e) => setHandle1Y(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-sky-500"
                  />
                </div>

                {/* Right Handle Y Position Slider */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>Right Bezier Vector (Y):</span>
                    <span className="text-sky-400">{handle2Y}px</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="180"
                    value={handle2Y}
                    onChange={(e) => setHandle2Y(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-sky-500"
                  />
                </div>
              </div>
            </div>

            {/* Quick Experience Journey Cards summary */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">// Professional Timeline</span>
              
              <div className="flex flex-col gap-3">
                {EXPERIENCES.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl flex gap-3 items-start"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-violet-400 mt-0.5">
                      {exp.type === 'agency' && <Cpu className="w-4 h-4" />}
                      {exp.type === 'freelance' && <Settings className="w-4 h-4" />}
                      {exp.type === 'award' && <Award className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-zinc-100">{exp.role}</span>
                        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/60 px-1.5 py-0.5 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{exp.company}</p>
                      <p className="text-[11px] text-zinc-400 leading-relaxed mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
