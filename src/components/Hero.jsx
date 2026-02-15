import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown, Mail, Code, Terminal, Cpu, Database } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Blobs */}
        <motion.div
          style={{ y: y1 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

        {/* Floating Icons Background */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-10 text-primary/30 hidden lg:block"
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 right-10 text-orange-500/30 hidden lg:block"
        >
          <Terminal size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6 relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <span className="relative px-6 py-2 rounded-full bg-white/5 text-primary text-sm font-medium border border-white/10 backdrop-blur-md">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold font-display mb-6 leading-tight tracking-tight text-foreground"
            >
              Building Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-[length:300%_auto] animate-shine">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I'm <span className="text-white font-semibold">Dinesh Ghare</span>, a Full Stack Developer transforming ideas into exceptional web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all w-full sm:w-auto flex justify-center items-center gap-2 group no-underline"
              >
                View My Work <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/10 text-foreground px-10 py-4 rounded-full font-bold text-lg hover:border-primary/50 transition-all w-full sm:w-auto flex justify-center items-center gap-2 backdrop-blur-sm bg-white/5 no-underline"
              >
                Let's Talk
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: 'mailto:dineshghare2468@gmail.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ y: -5, color: "#f97316" }}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon size={26} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* Modern Abstract Frame */}
            <div className="relative w-[320px] h-[350px] md:w-[400px] md:h-[450px]">
              {/* Rotating Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-[2rem] rotate-6 opacity-30 blur-lg animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] rotate-3" />

              {/* Floating Badge (Top Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 z-20 bg-card/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                  <Cpu size={20} />
                </div>
                <span className="font-bold text-sm">Full Stack</span>
              </motion.div>

              {/* Floating Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 bg-card/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Database size={20} />
                </div>
                <span className="font-bold text-sm">Backend Expert</span>
              </motion.div>

              {/* Image Container */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-card/50 backdrop-blur-sm group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                  src={profilePic}
                  alt="Dinesh Ghare"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 text-muted-foreground/50 hover:text-primary/80 transition-colors cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-current to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;