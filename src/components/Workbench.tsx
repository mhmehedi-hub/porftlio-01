import { useState, useMemo } from 'react';
import { Sliders, CheckCircle, Info, RefreshCw, Layers, ShieldCheck, Eye } from 'lucide-react';

// Hex to RGB converter
function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

// Relative luminance calculator
function getLuminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Contrast ratio calculator
function calculateContrast(hex1: string, hex2: string) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export default function Workbench() {
  // States for contrast checker
  const [bgColor, setBgColor] = useState('#0B0B0C');
  const [textColor, setTextColor] = useState('#A78BFA');

  // States for typography and grid scales
  const [typeScale, setTypeScale] = useState(1.414); // Augmented Fourth default
  const [gridPadding, setGridPadding] = useState(24); // in px
  const [hueAngle, setHueAngle] = useState(260); // Purple default (hue 0-360)

  // Memoized contrast result
  const contrastRatio = useMemo(() => {
    const ratio = calculateContrast(bgColor, textColor);
    return parseFloat(ratio.toFixed(2));
  }, [bgColor, textColor]);

  // Determine WCAG compliance rating
  const compliance = useMemo(() => {
    if (contrastRatio >= 7) return { label: 'PASS AAA (Enhanced)', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-900/50' };
    if (contrastRatio >= 4.5) return { label: 'PASS AA (Normal)', color: 'text-sky-400 bg-sky-950/40 border-sky-900/50' };
    if (contrastRatio >= 3) return { label: 'PASS (Large Text Only)', color: 'text-amber-400 bg-amber-950/30 border-amber-900/30' };
    return { label: 'FAIL WCAG 2.1', color: 'text-rose-400 bg-rose-950/40 border-rose-900/50' };
  }, [contrastRatio]);

  const handleReset = () => {
    setBgColor('#0B0B0C');
    setTextColor('#A78BFA');
    setTypeScale(1.414);
    setGridPadding(24);
    setHueAngle(260);
  };

  // Preset scales list
  const scales = [
    { name: 'Major Third (1.250)', value: 1.25 },
    { name: 'Perfect Fourth (1.333)', value: 1.333 },
    { name: 'Augmented Fourth (1.414)', value: 1.414 },
    { name: 'Golden Ratio (1.618)', value: 1.618 }
  ];

  return (
    <section id="workbench" className="relative py-20 md:py-28 bg-[#070708] border-t border-zinc-900 px-4 sm:px-6 md:px-8">
      {/* Design coordinates lines on back */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">// Interactive Playground</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
              Design Systems Lab
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 self-start md:self-end px-4 py-2 bg-zinc-950 hover:bg-zinc-900 text-xs font-mono text-zinc-400 hover:text-white rounded-xl border border-zinc-800/80 transition-all active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Workbench
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Controls Panel (col-span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Color & Contrast Box */}
            <div className="bg-zinc-950 border border-zinc-900/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-violet-400" />
                <h3 className="font-mono text-xs text-zinc-200 uppercase tracking-wider">Luminance & Contrast</h3>
              </div>

              <p className="text-[11px] text-zinc-500 leading-relaxed mb-5">
                Toggle background and foreground colors to test readability standards. Calculates relative luminance dynamically based on W3C algorithms.
              </p>

              {/* Color selectors */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {/* Background color select */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase">Canvas Background</label>
                  <div className="flex flex-wrap gap-1.5">
                    {['#0B0B0C', '#1E1B4B', '#121214', '#F3F4F6'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setBgColor(color)}
                        className={`w-6 h-6 rounded-md border transition-all ${
                          bgColor === color ? 'ring-2 ring-violet-500 scale-110 border-white' : 'border-zinc-800'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Text color select */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase">Accent Ink Color</label>
                  <div className="flex flex-wrap gap-1.5">
                    {['#A78BFA', '#10B981', '#38BDF8', '#E11D48', '#0F172A'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setTextColor(color)}
                        className={`w-6 h-6 rounded-md border transition-all ${
                          textColor === color ? 'ring-2 ring-violet-500 scale-110 border-white' : 'border-zinc-800'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Contrast Ratio Readout Gauge */}
              <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${compliance.color}`}>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest uppercase opacity-75">Contrast Ratio</span>
                  <span className="font-display font-bold text-2xl tracking-tight leading-none mt-1">
                    {contrastRatio} : 1
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono tracking-wider font-semibold block">
                    {compliance.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Geometry & Typography System Box */}
            <div className="bg-zinc-950 border border-zinc-900/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sliders className="w-4 h-4 text-violet-400" />
                <h3 className="font-mono text-xs text-zinc-200 uppercase tracking-wider">Dynamic Layout Ratios</h3>
              </div>

              <div className="flex flex-col gap-5">
                {/* 1. Hue Angle Accent Slider */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">Accent Hue Angle:</span>
                    <span className="text-violet-400" style={{ color: `hsl(${hueAngle}, 80%, 65%)` }}>{hueAngle}° HSL</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hueAngle}
                    onChange={(e) => setHueAngle(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  />
                  <div className="w-full h-1 rounded-full bg-gradient-to-r from-red-500 via-green-500 via-blue-500 via-purple-500 to-red-500 opacity-40"></div>
                </div>

                {/* 2. Typographic multiplier scale slider */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Modular Type Scale:</span>
                    <span className="text-zinc-200 font-semibold">{typeScale}x</span>
                  </div>
                  <div className="flex gap-1.5 mb-1 flex-wrap">
                    {scales.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => setTypeScale(s.value)}
                        className={`px-2 py-1 rounded text-[9px] font-mono transition-all border ${
                          typeScale === s.value
                            ? 'bg-zinc-900 text-violet-400 border-violet-500/20'
                            : 'bg-zinc-900/40 text-zinc-500 border-transparent hover:text-zinc-300'
                        }`}
                      >
                        {s.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                  <input
                    type="range"
                    min="1.1"
                    max="1.8"
                    step="0.05"
                    value={typeScale}
                    onChange={(e) => setTypeScale(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  />
                </div>

                {/* 3. Grid Padding Slider */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Layout Padding:</span>
                    <span className="text-zinc-200 font-semibold">{gridPadding}px</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="48"
                    value={gridPadding}
                    onChange={(e) => setGridPadding(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Visual Canvas Rendering (col-span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B0B0C] border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* Card Canvas Title Header */}
              <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-900 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-violet-400" />
                  Live Branding Mockup
                </span>
                <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800/40">
                  interactive
                </span>
              </div>

              {/* LIVE CANVAS STYLING INTEGRATION */}
              <div
                className="transition-colors duration-300 p-8 flex items-center justify-center min-h-[420px] relative"
                style={{ backgroundColor: bgColor }}
              >
                {/* Visual grid blueprint guidelines when active */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>

                {/* The Brand mock card asset itself */}
                <div
                  className="w-full max-w-md bg-zinc-950/60 border border-zinc-900/60 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm transition-all"
                  style={{ 
                    padding: `${gridPadding}px`,
                    borderColor: bgColor === '#F3F4F6' ? '#E5E7EB' : 'rgba(39,39,42,0.6)',
                    backgroundColor: bgColor === '#F3F4F6' ? '#FFFFFF' : 'rgba(9,9,11,0.6)'
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Brand Mock Logo Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Core vector element rotating hue accent */}
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs text-white"
                          style={{ backgroundColor: `hsl(${hueAngle}, 70%, 55%)` }}
                        >
                          A
                        </div>
                        <span 
                          className="font-display font-bold text-sm tracking-widest"
                          style={{ color: bgColor === '#F3F4F6' ? '#09090B' : '#FFFFFF' }}
                        >
                          AURA LABS
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800/50 px-2 py-0.5 rounded">
                        Est. 2026
                      </span>
                    </div>

                    {/* Typographic modular scale presentation block */}
                    <div className="flex flex-col gap-2 py-4 border-y border-zinc-900/50">
                      {/* Dynamic Title sizing using multiplier */}
                      <h4 
                        className="font-display font-bold tracking-tight leading-tight uppercase transition-all"
                        style={{ 
                          fontSize: `${14 * Math.pow(typeScale, 2)}px`,
                          color: textColor
                        }}
                      >
                        Architecting Space
                      </h4>
                      {/* Dynamic Subtitle sizing */}
                      <p 
                        className="font-sans leading-relaxed tracking-wide transition-all"
                        style={{ 
                          fontSize: `${11 * typeScale}px`,
                          color: bgColor === '#F3F4F6' ? '#374151' : '#A1A1AA'
                        }}
                      >
                        Establishing geometric layouts, minimalist modular systems, and visual pathways.
                      </p>
                    </div>

                    {/* Grid blueprint metrics footer */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>Scale: {typeScale}x</span>
                      <span>Padding: {gridPadding}px</span>
                      <span 
                        className="font-semibold transition-colors duration-300"
                        style={{ color: textColor }}
                      >
                        HUE: {hueAngle}°
                      </span>
                    </div>

                  </div>
                </div>

              </div>

              {/* Bottom stats panel */}
              <div className="bg-zinc-950 border-t border-zinc-900 px-4 py-3 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-zinc-600" />
                  W3C Compliance checks out instantly
                </span>
                <span className="text-zinc-600">
                  GRID.CSS // TYPE.SYS
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
