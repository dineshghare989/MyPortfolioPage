import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Atom,
  FileCode,
  Server,
  Palette,
  Database,
  Cloud,
  Layout,
  Terminal,
  Cpu
} from 'lucide-react';

const skills = [
  {
    name: 'React',
    icon: Atom,
    level: 'Expert',
    proficiency: 95,
    description: 'Building interactive UIs',
    color: 'from-blue-400 to-cyan-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    shadow: 'shadow-blue-500/25'
  },
  {
    name: 'TypeScript',
    icon: FileCode,
    level: 'Advanced',
    proficiency: 90,
    description: 'Type-safe development',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-600/10',
    border: 'border-blue-600/20',
    shadow: 'shadow-blue-600/25'
  },
  {
    name: 'Node.js',
    icon: Server,
    level: 'Advanced',
    proficiency: 88,
    description: 'Scalable backend systems',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    shadow: 'shadow-green-500/25'
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    level: 'Expert',
    proficiency: 95,
    description: 'Rapid UI styling',
    color: 'from-cyan-400 to-teal-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    shadow: 'shadow-cyan-500/25'
  },
  {
    name: 'Next.js',
    icon: Layout,
    level: 'Advanced',
    proficiency: 85,
    description: 'Full-stack React framework',
    color: 'from-gray-200 to-white',
    bg: 'bg-gray-500/10',
    border: 'border-gray-500/20',
    shadow: 'shadow-gray-500/25'
  },
  {
    name: 'MongoDB',
    icon: Database,
    level: 'Int.',
    proficiency: 80,
    description: 'NoSQL database solutions',
    color: 'from-green-500 to-lime-500',
    bg: 'bg-green-600/10',
    border: 'border-green-600/20',
    shadow: 'shadow-green-600/25'
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    level: 'Intermediate',
    proficiency: 75,
    description: 'Relational data management',
    color: 'from-blue-400 to-indigo-400',
    bg: 'bg-blue-700/10',
    border: 'border-blue-700/20',
    shadow: 'shadow-blue-700/25'
  },
  {
    name: 'Python',
    icon: Terminal,
    level: 'Intermediate',
    proficiency: 70,
    description: 'Scripting & automation',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    shadow: 'shadow-yellow-500/25'
  },
  {
    name: 'Docker',
    icon: Cloud,
    level: 'Intermediate',
    proficiency: 65,
    description: 'Containerization',
    color: 'from-blue-400 to-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    shadow: 'shadow-sky-500/25'
  },
  {
    name: 'AWS',
    icon: Cloud,
    level: 'Basic',
    proficiency: 60,
    description: 'Cloud infrastructure',
    color: 'from-orange-400 to-amber-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    shadow: 'shadow-orange-500/25'
  },
  {
    name: 'GraphQL',
    icon: Cpu,
    level: 'Advanced',
    proficiency: 80,
    description: 'Efficient API queries',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    shadow: 'shadow-pink-500/25'
  },
  {
    name: 'Framer Motion',
    icon: Layout,
    level: 'Expert',
    proficiency: 90,
    description: 'Complex animations',
    color: 'from-purple-500 to-fuchsia-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    shadow: 'shadow-purple-500/25'
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative group p-6 rounded-2xl border ${skill.border} ${skill.bg} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg ${skill.shadow}`}
    >
      {/* Background Gradient Blob */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full bg-gradient-to-br ${skill.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 text-white shadow-inner`}>
            <skill.icon size={24} className="text-white drop-shadow-md" />
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${skill.border} bg-black/40 text-muted-foreground`}>
            {skill.level}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {skill.description}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
            viewport={{ once: true }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          />
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-xs text-muted-foreground font-medium">{skill.proficiency}%</span>
        </div>

      </div>

      {/* Interactive Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated stack of modern technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;