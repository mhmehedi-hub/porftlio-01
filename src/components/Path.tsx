import { motion } from 'motion/react';

interface PathItem {
  number: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

const PATH_ITEMS: PathItem[] = [
  {
    number: '01',
    title: 'Foundation',
    description: 'Started with HTML, CSS and vanilla JavaScript. Built static sites and understood the web from first principles.'
  },
  {
    number: '02',
    title: 'React & Next.js',
    description: 'Learned React, fell in love with the App Router. Went deep on component architecture and server components.'
  },
  {
    number: '03',
    title: 'MERN Stack',
    description: 'Added Node.js, Express, and MongoDB. Built complete applications end-to-end for the first time — it changed everything.'
  },
  {
    number: '04',
    title: 'Production Mindset',
    description: 'Learning Docker, Git workflows, CI/CD and deployment. Now thinking in systems, not just features.',
    isCurrent: true
  }
];

export default function Path() {
  return (
    <section id="path" className="relative py-20 md:py-28 bg-[#050506] border-t border-zinc-900 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -z-10 w-[350px] h-[350px] rounded-full bg-violet-600/5 blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-[250px] h-[250px] rounded-full bg-indigo-600/5 blur-[100px]"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-violet-400 uppercase tracking-widest block"
          >
            // MY PATH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-1"
          >
            How I got here.
          </motion.h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical path timeline track line */}
          <div className="absolute left-3 sm:left-[1.4rem] top-4 bottom-4 w-[2px] bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900/40"></div>

          {/* Timeline entries list */}
          <div className="flex flex-col gap-8 md:gap-10">
            {PATH_ITEMS.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={item.number}
                className="relative group"
              >
                {/* Timeline node circle indicator */}
                <div className="absolute -left-12 sm:-left-[3.45rem] top-6 flex items-center justify-center">
                  {item.isCurrent ? (
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400/30 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-[#050506] border-2 border-violet-500 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                        <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                      </span>
                    </span>
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-zinc-700/80 group-hover:border-zinc-500 transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors"></div>
                    </div>
                  )}
                </div>

                {/* Timeline card */}
                <div className={`p-6 md:p-8 rounded-2xl bg-zinc-950/40 border transition-all duration-300 ${
                  item.isCurrent 
                    ? 'border-violet-500/25 shadow-[0_4px_24px_rgba(139,92,246,0.03)] hover:border-violet-500/40 bg-zinc-950/60' 
                    : 'border-zinc-900 hover:border-zinc-800/80 hover:bg-zinc-950/70'
                }`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-violet-400 font-semibold">
                      {item.number}.
                    </span>
                    <h3 className="font-display font-bold text-lg md:text-xl text-zinc-100 tracking-tight">
                      {item.title}
                    </h3>
                    {item.isCurrent && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-mono font-medium tracking-wider uppercase bg-violet-500/10 border border-violet-500/25 text-violet-400 ml-2 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl font-sans font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
