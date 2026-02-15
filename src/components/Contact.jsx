import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dineshghare2468@gmail.com',
    href: 'mailto:dineshghare2468@gmail.com',
    description: 'Send me a message anytime!'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Call me during standard business hours'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Maharashtra, Nashik',
    href: '#',
    description: 'Available for remote work worldwide'
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
    <section id="contact" className="py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03] z-0 flex justify-center">
        <span className="text-[20vw] font-bold text-white leading-none whitespace-nowrap">CONTACT</span>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Info */}
          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's work <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  together
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Have a project in mind? I'm always open to discussing new ideas and opportunities. Let's build something amazing.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all group hover:border-primary/30"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{info.label}</p>
                    <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Glow Effect behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-600/5 blur-2xl -z-10 rounded-3xl" />

            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-secondary/30 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-white placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-secondary/30 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-white placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-secondary/30 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-white placeholder:text-white/20"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-secondary/30 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-white placeholder:text-white/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:shadow-orange-600/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>) : (<><Send className="w-5 h-5" />Send Message</>)}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;