import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Palette, Rocket, Users, ArrowRight
} from 'lucide-react';

const aboutCards = [
  { icon: Code2, title: 'Clean Code', description: 'I write maintainable, scalable code following best practices.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful interfaces with great user experience.' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and smooth interactions.' },
  { icon: Users, title: 'Collaboration', description: 'Working effectively in teams and with clients.' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-foreground">About <span className="text-orange-600">Me</span></h2>
            <p className="section-subtitle">Get to know more about my journey and what drives me as a developer.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Left Column: Who I Am (Spans 2 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-2 h-full">
              <div className="h-full glass-card p-6 md:p-10 flex flex-col justify-between border-primary/20 relative overflow-hidden group">
                {/* Decorative Gradient Blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 transition-all duration-500 group-hover:bg-primary/20" />

                <div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">Who I Am</h3>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. I specialize in <span className="text-white font-medium">React, Node.js</span>, and cloud technologies.
                    </p>
                    <p>
                      My journey started with a curiosity for how websites work, which led me to dive deep into both frontend and backend development. Today, I help businesses bring their ideas to life through elegant, efficient code.
                    </p>
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-lg group/link no-underline"
                >
                  Let's Work Together <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Feature Grid (Spans 3 cols) */}
            <motion.div variants={containerVariants} className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.4)" }}
                  className="glass-card p-6 md:p-8 flex flex-col justify-center h-full border border-white/5 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{card.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;