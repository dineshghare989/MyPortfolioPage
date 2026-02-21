import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Zap } from 'lucide-react';

const CodeWindow = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Decorative frame elements around the window */}
      <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl -z-10" />
      <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl -z-10" />

      <div className="bg-[#0b1120] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">about.ts</div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
          <div className="flex flex-col gap-1 text-orange-400">
            <div><span className="text-purple-400">const</span> <span className="text-white">developer</span> = {'{'}</div>
            <div className="pl-4"><span className="text-amber-300">name</span>: <span className="text-emerald-400">"Dinesh Ghare"</span>,</div>
            <div className="pl-4"><span className="text-amber-300">role</span>: <span className="text-emerald-400">"Full Stack Dev"</span>,</div>
            <div className="pl-4"><span className="text-amber-300">skills</span>: [</div>
            <div className="pl-8 text-emerald-400">"React", "Node",</div>
            <div className="pl-8 text-emerald-400">"TypeScript",</div>
            <div className="pl-4">],</div>
            <div className="pl-4"><span className="text-amber-300">coffee</span>: <span className="text-orange-400">Infinity</span>,</div>
            <div className="pl-4"><span className="text-amber-300">available</span>: <span className="text-emerald-400">true</span></div>
            <div>{'}'}</div>
            <div className="mt-4 text-muted-foreground">// Let's build something great!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 transition-all hover:border-primary/30 group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
      <Icon size={20} className="sm:w-6 sm:h-6" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
      <p className="text-sm sm:text-base font-bold text-white">{value}</p>
    </div>
  </div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Get To Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6 shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column: Code Window */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <CodeWindow />
          </motion.div>

          {/* Right Column: Text and Cards */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                A passionate developer crafting <span className="text-primary">digital experiences</span>
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a Full Stack Developer with a focus on building scalable web applications and intuitive user interfaces. I love turning complex problems into elegant, functional solutions.
                </p>
                <p>
                  My passion lies in creating <span className="text-primary">pixel-perfect UIs</span>, writing <span className="text-white">clean, maintainable code</span>, and staying at the forefront of modern web technologies.
                </p>
                <p>
                  When I'm not coding, I'm usually exploring new tech trends, contributing to open source, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <InfoCard icon={MapPin} label="Location" value="Maharashtra, Nashik" />
              <InfoCard icon={GraduationCap} label="Education" value="B.E in Comp Eng" />
              <InfoCard icon={Briefcase} label="Experience" value="5+ Years" />
              <InfoCard icon={Zap} label="Freelance" value="Available" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default About;