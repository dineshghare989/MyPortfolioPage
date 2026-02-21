
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './GlobalStyles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- MAIN APP ---
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <GlobalStyles />
      <Navbar />
      <Hero containerVariants={containerVariants} itemVariants={itemVariants} />
      <About containerVariants={containerVariants} itemVariants={itemVariants} />
      <Experience />
      <Skills />
      <Projects />
      <Contact containerVariants={containerVariants} itemVariants={itemVariants} />
      <Footer />
    </div>
  );
};

export default App;