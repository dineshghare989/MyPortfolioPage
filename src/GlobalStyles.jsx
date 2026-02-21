
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

    :root {
      --background: 222 47% 5%;
      --foreground: 210 40% 98%;
      --card: 222 47% 8%;
      --card-foreground: 210 40% 98%;
      --popover: 222 47% 8%;
      --popover-foreground: 210 40% 98%;
      --primary: 24 95% 53%; /* Vivid Orange */
      --primary-foreground: 222 47% 5%;
      --secondary: 217 33% 17%;
      --secondary-foreground: 210 40% 98%;
      --muted: 217 33% 17%;
      --muted-foreground: 215 20% 65%;
      --accent: 38 92% 50%; /* Amber */
      --accent-foreground: 210 40% 98%;
      --destructive: 0 84% 60%;
      --destructive-foreground: 210 40% 98%;
      --border: 217 33% 17%;
      --input: 217 33% 17%;
      --ring: 24 95% 53%;
      --radius: 0.75rem;
      --gradient-start: 222 47% 3%;
      --gradient-mid: 217 50% 8%;
      --gradient-end: 210 60% 12%;
    }

    body {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-mid)) 50%, hsl(var(--gradient-end)) 100%);
      background-attachment: fixed;
      min-height: 100vh;
    }

    /* Custom Utility Class Mappings for Tailwind Colors */
    .bg-background { background-color: hsl(var(--background)); }
    .bg-card { background-color: hsl(var(--card)); }
    .bg-primary { background-color: hsl(var(--primary)); }
    .bg-secondary { background-color: hsl(var(--secondary)); }
    .bg-accent { background-color: hsl(var(--accent)); }
    .bg-muted { background-color: hsl(var(--muted)); }
    
    .text-foreground { color: hsl(var(--foreground)); }
    .text-primary { color: hsl(var(--primary)); }
    .text-primary-foreground { color: hsl(var(--primary-foreground)); }
    .text-muted-foreground { color: hsl(var(--muted-foreground)); }
    .text-accent { color: hsl(var(--accent)); }

    .border-border { border-color: hsl(var(--border)); }
    .border-primary { border-color: hsl(var(--primary)); }

    .font-display { font-family: 'Space Grotesk', sans-serif; }
    
    /* Custom Components from CSS */
    .gradient-text {
      background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)));
      background-size: 200% auto;
      -webkit-background-clip: text;
      color: transparent;
    }

    .glass-card {
      background-color: hsla(var(--card), 0.5);
      backdrop-filter: blur(24px);
      border: 1px solid hsla(var(--border), 0.5);
      border-radius: var(--radius);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }

    .skill-card {
      background-color: hsla(var(--card), 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid hsla(var(--border), 0.3);
      border-radius: var(--radius);
      padding: 1.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .project-card {
      background-color: hsla(var(--card), 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid hsla(var(--border), 0.3);
      border-radius: var(--radius);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .glow-button {
      position: relative;
      overflow: hidden;
    }
    .glow-button::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.3s;
      background: radial-gradient(circle at center, hsl(var(--primary) / 0.4) 0%, transparent 70%);
    }
    .glow-button:hover::before { opacity: 1; }

    .nav-link {
      position: relative;
      color: hsl(var(--muted-foreground));
      transition: color 0.3s;
    }
    .nav-link:hover { color: hsl(var(--foreground)); }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: hsl(var(--primary));
      transition: width 0.3s;
    }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    .nav-link.active { color: hsl(var(--primary)); }

    .section-title {
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1rem;
    }
    @media (min-width: 768px) { .section-title { font-size: 3rem; } }
    
    .section-subtitle {
      color: hsl(var(--muted-foreground));
      text-align: center;
      max-width: 42rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
    }
    
    /* Utilities */
    .container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }

    html { scroll-behavior: smooth; }
    section { scroll-margin-top: 6rem; }

    @media (min-width: 640px) { .container { max-width: 640px; } }
    @media (min-width: 768px) { .container { max-width: 768px; } }
    @media (min-width: 1024px) { .container { max-width: 1024px; } }
    @media (min-width: 1280px) { .container { max-width: 1280px; } }

    /* Custom Scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: hsl(var(--primary) / 0.5);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: hsl(var(--primary));
    }
  `}</style>
);
export default GlobalStyles