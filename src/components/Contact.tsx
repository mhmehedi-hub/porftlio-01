import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle, FileText, Ticket, Send, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState<'branding' | 'ui-ux' | 'render' | 'poster'>('branding');
  const [budget, setBudget] = useState(5000);
  const [details, setDetails] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);

    // Simulate submission compiling specifications
    setTimeout(() => {
      const randomTicket = `MH-${Math.floor(1000 + Math.random() * 9000)}-2026`;
      setTicketNumber(randomTicket);
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setProjectType('branding');
    setBudget(5000);
    setDetails('');
    setSubmitted(false);
  };

  // Deliverable details based on type
  const currentDeliverable = {
    branding: {
      timeline: '4 - 6 Weeks',
      deliverables: 'Primary Logo, SVG marks, Font pairings, Typography guidelines book, Color palette swatches, Brand Identity Assets pack'
    },
    'ui-ux': {
      timeline: '3 - 5 Weeks',
      deliverables: 'Interactive Figma design system, Dark/Light theme interfaces, Prototype wireframes, Vector layout component library'
    },
    render: {
      timeline: '2 - 3 Weeks',
      deliverables: 'High-res Cycles render images, Procedural node-shaders pack, 3D source files (.blend / .fbx), Light rig schemes'
    },
    poster: {
      timeline: '1 - 2 Weeks',
      deliverables: 'Swiss grid vector layout poster, 300DPI physical ink print-ready layout files, Typography balance specification sheet'
    }
  }[projectType];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#0B0B0C] border-t border-zinc-900 px-4 sm:px-6 md:px-8">
      {/* Absolute background visual helper */}
      <div className="absolute bottom-0 right-0 -z-10 w-[300px] h-[300px] rounded-full bg-violet-950/10 blur-[130px]"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info & Creative Pitch (col-span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="flex flex-col gap-5">
              <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">// Let's Build Something</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white leading-none">
                Start a Project
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether you need a complete modular branding system, elegant web application mockups, or custom Swiss graphic posters, let's establish your design guidelines together.
              </p>
            </div>

            {/* Design Credentials Contacts */}
            <div className="flex flex-col gap-4 bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">Direct Channels</span>
              
              <div className="flex flex-col gap-3 text-xs font-mono">
                <a href="mailto:mehedihasanfbid@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors py-1">
                  <Mail className="w-4 h-4 text-violet-400" />
                  mehedihasanfbid@gmail.com
                </a>
                <div className="flex items-center gap-3 text-zinc-400 py-1">
                  <Phone className="w-4 h-4 text-violet-400" />
                  +880 1700-000000 (Mock Contact)
                </div>
                <div className="flex items-center gap-3 text-zinc-400 py-1">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  GMT +6 Timezone Office
                </div>
              </div>
            </div>

            {/* Studio quote */}
            <div className="text-[10px] font-mono text-zinc-600 leading-relaxed max-w-sm">
              * Design requests are compiled into structured briefs. Initial feedback and timeline estimates are delivered within 24 working hours.
            </div>
          </div>

          {/* Right panel: Live Form or Ticket Success Render (col-span 7) */}
          <div className="lg:col-span-7 bg-[#0C0C0D] border border-zinc-900 rounded-2xl shadow-2xl relative flex items-center justify-center p-6 md:p-8">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                /* 1. PROJECT INQUIRY FORM */
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-5 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Mahmudul Hasan"
                        className="bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors placeholder-zinc-700 font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. mehedi@design.com"
                        className="bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors placeholder-zinc-700 font-sans"
                      />
                    </div>
                  </div>

                  {/* Project Tier selector tabs */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase">Project Category</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'branding', label: 'Branding' },
                        { id: 'ui-ux', label: 'UI/UX Wireframe' },
                        { id: 'render', label: '3D Art' },
                        { id: 'poster', label: 'Typography' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setProjectType(item.id as any)}
                          className={`px-3 py-2.5 rounded-xl text-[10px] font-mono transition-all border uppercase ${
                            projectType === item.id
                              ? 'bg-violet-600/10 border-violet-500 text-violet-300'
                              : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated budget slider */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-zinc-500">
                      <span>Project Budget Limit</span>
                      <span className="text-violet-400 font-bold font-sans">${budget.toLocaleString()} USD</span>
                    </div>
                    <input
                      type="range"
                      min="1500"
                      max="15000"
                      step="500"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-violet-500"
                    />
                    <div className="flex justify-between text-[8px] font-mono text-zinc-600">
                      <span>$1.5K Starter</span>
                      <span>$5K Mid</span>
                      <span>$10K Enterprise</span>
                      <span>$15K+ Premium</span>
                    </div>
                  </div>

                  {/* Project Brief Details text area */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase">Brief Specifications</label>
                    <textarea
                      rows={3}
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Specify your visual goals, client targets, font wishes, or inspiration references..."
                      className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors placeholder-zinc-700 font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full relative inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono uppercase tracking-widest text-white bg-violet-600 hover:bg-violet-700 font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(124,58,237,0.2)] active:scale-[0.98] disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Initializing Ticket...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Create Design Briefcase</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* 2. INVOICE/TICKET STATEMENT SUCCESS RENDER */
                <motion.div
                  key="ticket-receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full flex flex-col gap-6 text-left border border-zinc-900 bg-zinc-950 p-6 rounded-xl relative overflow-hidden"
                >
                  {/* Subtle Grid blueprint background on ticket */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                  <div className="flex items-start justify-between border-b border-zinc-900 pb-4">
                    <div className="flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-violet-400 animate-pulse" />
                      <div>
                        <h4 className="font-display font-bold text-sm text-zinc-100">Project Brief compiled</h4>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Design specifications ticket</span>
                      </div>
                    </div>
                    <div className="bg-violet-950/40 border border-violet-900/60 px-2 py-1 rounded text-[10px] font-mono text-violet-300">
                      {ticketNumber}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-xs font-mono">
                    <div className="grid grid-cols-2 gap-4 border-b border-zinc-900/60 pb-3">
                      <div>
                        <span className="text-[9px] text-zinc-600 uppercase block mb-1">Client Contact</span>
                        <span className="text-zinc-300 font-sans font-semibold">{name}</span>
                        <p className="text-[10px] text-zinc-500">{email}</p>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-600 uppercase block mb-1">Service Tier</span>
                        <span className="text-zinc-300 font-semibold uppercase">{projectType} Design</span>
                        <p className="text-[10px] text-violet-400 font-sans font-semibold">${budget.toLocaleString()} USD</p>
                      </div>
                    </div>

                    <div className="border-b border-zinc-900/60 pb-3">
                      <span className="text-[9px] text-zinc-600 uppercase block mb-1">Project Deliverables</span>
                      <p className="text-zinc-400 font-sans text-[11px] leading-relaxed">
                        {currentDeliverable.deliverables}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-b border-[#111] pb-3">
                      <div>
                        <span className="text-[9px] text-zinc-600 uppercase block mb-1">Cycle Duration</span>
                        <span className="text-emerald-400 font-semibold">{currentDeliverable.timeline}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-600 uppercase block mb-1">Brief status</span>
                        <span className="text-zinc-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping"></span>
                          Reviewing specifications
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-600 uppercase block mb-1">Design Objectives</span>
                      <p className="text-zinc-500 font-sans italic text-[11px] leading-relaxed line-clamp-2">
                        "{details}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <button
                      onClick={() => {
                        alert(`Design Briefcase Saved! Your ticket is ${ticketNumber}. Copy this ticket and email me directly to expedite.`);
                      }}
                      className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-[10px] uppercase tracking-wider rounded-lg border border-zinc-800/80 transition-all text-center"
                    >
                      Export Ticket PDF
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white font-mono text-[10px] uppercase tracking-wider rounded-lg transition-all text-center"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
