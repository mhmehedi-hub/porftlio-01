import { motion } from 'motion/react';
import { GraduationCap, Calendar, Check } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  status: string;
  period: string;
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Shahid Abul Kashem College',
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'BBA',
    status: 'COMPLETED',
    period: '2019 - 2020'
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 bg-[#050506] border-t border-zinc-900 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] rounded-full bg-violet-600/5 blur-[120px]"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-violet-400 uppercase tracking-widest block"
          >
            // EDUCATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-1"
          >
            Academic Background.
          </motion.h2>
        </div>

        {/* Education Item Cards */}
        <div className="flex flex-col gap-6">
          {EDUCATION_ITEMS.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.institution}
              className="p-6 md:p-8 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800/85 hover:bg-zinc-950/60 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex gap-4 items-start">
                {/* Institution Icon */}
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-zinc-100 tracking-tight leading-tight">
                      {item.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-sans font-normal">
                      {item.degree}
                    </p>
                  </div>

                  {/* Badges container */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold tracking-wider uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      {item.field}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Check className="w-3 h-3 shrink-0" />
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Date / Period Pill */}
              <div className="self-start md:self-center shrink-0">
                <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
