import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-blue-400 to-cyan-300'
  },
  {
    title: 'Fitness Tracker App',
    description: 'Track workouts, nutrition, and progress with beautiful analytics.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-emerald-400 to-green-500'
  },
  {
    title: 'AI Content Generator',
    description: 'Generate marketing copy, blog posts, and social media content with AI.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management with real-time updates.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics and scheduling tool for multiple social platforms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'Redis'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listings with virtual tours and mortgage calculator.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'AWS'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-teal-400 to-cyan-500'
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl h-[380px] sm:h-[450px] overflow-hidden bg-card/50 border border-white/10 p-2"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        {/* Full Background Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Content Box */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-4 sm:p-5 bg-card/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                {project.description}
              </p>
            </div>

            {/* Buttons - Always Visible */}
            <div className="flex gap-2 shrink-0">
              <motion.a
                href={project.codeUrl}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-secondary text-foreground rounded-full hover:bg-secondary/80 transition-colors border border-white/5"
                title="View Code"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={project.codeUrl}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-0.5 text-[10px] font-medium rounded-full border border-white/10 bg-white/5 text-muted-foreground uppercase tracking-wider`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent work, showcasing my ability to build sophisticated web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;