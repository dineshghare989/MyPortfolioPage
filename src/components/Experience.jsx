import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Leading the development of a flagship SaaS platform, mentoring junior developers, and architecting scalable backend solutions.',
    skills: ['React', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    company: 'Creative Web Agency',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    location: 'Mumbai, India',
    description: 'Developed high-performance web applications using React and Next.js. Improved lighthouse scores by 40% for major clients.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    company: 'Startup Hub',
    role: 'Junior Web Developer',
    period: '2019 - 2020',
    location: 'Pune, India',
    description: 'Contributed to various internal tools and client projects. Focused on building responsive UIs and integrating REST APIs.',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'PHP']
  }
];

const ExperienceItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 w-full ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute left-4 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-orange-500 z-20 flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.8)]"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.5)]" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`w-full lg:w-[45%] pl-12 lg:pl-0 group`}
      >
        <div className="bg-[#0b1120]/60 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 lg:p-8 hover:border-orange-500/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                  {experience.role}
                </h3>
                <p className="text-lg font-medium text-orange-500/90 tracking-wide">
                  {experience.company}
                </p>
              </div>
              <span className="shrink-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] lg:text-xs font-mono text-muted-foreground uppercase tracking-widest bg-[#1a2235]">
                {experience.period}
              </span>
            </div>

            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed font-light">
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-[10px] lg:text-xs font-medium rounded-full bg-orange-500/5 text-orange-500/70 border border-orange-500/10 hover:border-orange-500/30 hover:bg-orange-500/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer for Desktop Alternating Layout */}
      <div className="hidden lg:block lg:w-[45%]" />
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 lg:py-40 relative overflow-hidden bg-background" ref={containerRef}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="text-orange-500 font-mono text-sm uppercase tracking-[0.4em] mb-4 block font-semibold opacity-80">Professional Path</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mt-8 shadow-[0_0_20px_rgba(249,115,22,0.5)] opacity-80" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-1/2" />

          {/* Animated Glow Line */}
          <motion.div
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 bg-gradient-to-b from-orange-500 via-amber-600 to-transparent origin-top"
            style={{ scaleY }}
          />

          <div className="flex flex-col relative z-10">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
