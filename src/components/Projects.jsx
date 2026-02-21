import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, X } from 'lucide-react';

const projects = [
  {
    title: 'Analytics Dashboard',
    type: 'Web App',
    description: 'A real-time analytics platform with interactive charts, data visualization, and custom reporting. Built for enterprise...',
    longDescription: 'This comprehensive dashboard allows businesses to monitor key performance indicators in real-time. It features dynamic data filtering, custom reporting tools, and deep integration with multiple data sources. The architecture is designed for high performance and scalability.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'Chart.js', 'Tailwind', 'Framer Motion'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-400 to-amber-300'
  },
  {
    title: 'ShopFlow Mobile',
    type: 'Mobile',
    description: 'A full-featured e-commerce mobile app with AR product preview, smart recommendations, and seamless checko...',
    longDescription: 'ShopFlow revolutionizes mobile shopping with AI-powered product recommendations and augmented reality product preview. The app integrates with 50+ payment providers and supports 12 languages. Featured in App Store\'s Design Showcase.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    tags: ['React Native', 'GraphQL', 'Stripe', 'Firebase', 'Redux'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-400 to-amber-500'
  },
  {
    title: 'NeuralChat AI',
    type: 'AI / ML',
    description: 'An AI-powered conversational platform with real-time processing, multi-language support, and context-aware...',
    longDescription: 'NeuralChat AI leverages cutting-edge language models to provide human-like conversation and intelligent problem-solving. It includes sentiment analysis, real-time translation, and seamless integration with enterprise communication tools.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    tags: ['Next.js', 'OpenAI', 'WebSockets', 'Tailwind', 'Zustand'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-400 to-amber-600'
  },
  {
    title: 'EduTech Platform',
    type: 'Web App',
    description: 'Interactive learning management system with real-time collaboration, course progress tracking, and AI tutoring.',
    longDescription: 'A modern LMS designed for the digital age, featuring live classroom integration, automated grading, and personalized learning paths powered by machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-500 to-amber-400'
  },
  {
    title: 'FitTrack Pro',
    type: 'Mobile',
    description: 'Comprehensive fitness tracking app with real-time heart rate monitoring, workout plans, and social sharing.',
    longDescription: 'FitTrack Pro helps users achieve their fitness goals through detailed activity tracking, customized training plans, and a supportive community. Scalable for both individual and professional use.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80',
    tags: ['React Native', 'Firebase', 'TensorFlow', 'HealthKit'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-600 to-amber-500'
  },
  {
    title: 'CryptoVault',
    type: 'Web App',
    description: 'Secure cryptocurrency wallet and exchange platform with real-time market data and advanced trading tools.',
    longDescription: 'CryptoVault provides a highly secure environment for managing digital assets. Features include multi-sig security, instant trades, and deep portfolio analytics for professional traders.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Solidity', 'Web3.js', 'PostgreSQL'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-400 to-amber-300'
  },
  {
    title: 'EcoMarket',
    type: 'E-commerce',
    description: 'Sustainable marketplace connecting local farmers with consumers for fresh, organic produce delivery.',
    longDescription: 'EcoMarket promotes sustainable living by simplifying the farm-to-table process. Features Include smart routing for delivery, producer profiles, and seasonal subscription boxes.',
    image: 'https://images.unsplash.com/photo-1488459711635-de84fd24d539?w=800&auto=format&fit=crop&q=80',
    tags: ['Vue', 'Deno', 'Supabase', 'Leaflet'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-500 to-amber-400'
  },
  {
    title: 'SecurePath VPN',
    type: 'Saas',
    description: 'Privacy-focused VPN service with unlimited bandwidth, global servers, and advanced encryption protocols.',
    longDescription: 'SecurePath ensures online anonymity and security through a global network of high-speed servers and enterprise-grade encryption. Features include split tunneling and kill-switch functionality.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    tags: ['Electron', 'Rust', 'WebRTC', 'Redis'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-600 to-amber-600'
  },
  {
    title: 'Visionary CRM',
    type: 'Enterprise',
    description: 'Next-generation CRM with AI-powered lead scoring, automated outreach, and deep pipeline analytics.',
    longDescription: 'Visionary CRM transforms sales processes with intelligent automation and predictive analytics. It helps sales teams focus on the right leads and close deals faster than ever before.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'Python', 'FastAPI', 'ElasticSearch'],
    codeUrl: '#',
    demoUrl: '#',
    color: 'from-orange-400 to-amber-500'
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-[#0b1120] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] flex flex-col h-full"
      onClick={() => onClick(project)}
    >
      {/* Top Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-orange-500 text-black text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-orange-500/20">
            {project.type}
          </span>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="p-6 lg:p-8 flex flex-col gap-5 flex-grow">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-medium rounded-md bg-orange-500/5 text-orange-500/60 border border-orange-500/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-[10px] font-medium rounded-md bg-orange-500/5 text-orange-500/60 border border-orange-500/10">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 mt-auto pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(project);
            }}
            className="flex items-center gap-2 text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors group/link bg-transparent border-none cursor-pointer p-0"
          >
            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            Details
          </button>
          <a
            href={project.codeUrl}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-white transition-colors no-underline"
          >
            <Github size={14} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Responsive items per page
  useEffect(() => {
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      const width = window.innerWidth;
      const newItemsPerPage = width < 768 ? 3 : 6;

      setItemsPerPage(newItemsPerPage);

      // Only reset to page 1 if we actually crossed the breakpoint
      // This prevents resets on mobile when the address bar hides/shows
      if ((lastWidth >= 768 && width < 768) || (lastWidth < 768 && width >= 768)) {
        setCurrentPage(1);
      }
      lastWidth = width;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const containerVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="py-24 lg:py-40 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-orange-500 font-mono text-sm uppercase tracking-[0.4em] mb-4 block font-semibold opacity-80">What I've Built</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mt-8 shadow-[0_0_20px_rgba(249,115,22,0.5)] opacity-80" />
        </motion.div>

        {/* Paginated Grid with Animation */}
        <div className="relative min-h-[600px] lg:min-h-[800px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onClick={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all cursor-pointer"
            >
              <ArrowUpRight size={20} className="-rotate-135" />
            </motion.button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-12 h-12 rounded-xl font-bold transition-all cursor-pointer ${currentPage === i + 1
                    ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all cursor-pointer"
            >
              <ArrowUpRight size={20} className="rotate-45" />
            </motion.button>
          </div>

          <p className="text-muted-foreground text-sm font-medium">
            Page <span className="text-orange-500">{currentPage}</span> of {totalPages}
          </p>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/dineshghare989"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all group no-underline"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0b1120] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors border border-white/10 z-[110] backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-1 custom-scrollbar">
                {/* Top View */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />

                  {/* Modal Title Overlay */}
                  <div className="absolute top-6 left-6 flex gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-orange-500 text-black text-[10px] font-bold uppercase tracking-widest">
                      {selectedProject.type}
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="p-6 lg:p-10 space-y-6 lg:space-y-8">
                  <div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 lg:px-4 lg:py-1.5 text-[10px] lg:text-xs font-bold text-orange-500 bg-orange-500/5 rounded-full border border-orange-500/10 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <motion.a
                      href={selectedProject.demoUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 bg-orange-500 text-black py-3 lg:py-4 rounded-2xl font-bold text-sm lg:text-base shadow-lg shadow-orange-500/20 no-underline"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.codeUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-3 lg:py-4 rounded-2xl font-bold text-sm lg:text-base hover:bg-white/10 transition-all font-display no-underline"
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;