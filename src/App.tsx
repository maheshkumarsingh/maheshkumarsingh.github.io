import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Globe, 
  MapPin, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Layout, 
  ExternalLink,
  ChevronRight,
  Terminal,
  Zap,
  Cloud
} from "lucide-react";
import { RESUME_DATA } from "./constants";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-accent font-mono text-sm uppercase tracking-widest"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-accent mt-4"
    />
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-[-1] opacity-20"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-xl tracking-tighter"
        >
          MKS<span className="text-accent">.</span>
        </motion.div>
        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest hidden md:flex">
          {["About", "Experience", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
              {item}
            </a>
          ))}
        </div>
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="px-5 py-2 glass-card rounded-full text-xs font-mono uppercase tracking-widest hover:bg-accent hover:text-black transition-all duration-300"
        >
          Hire Me
        </motion.a>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
        <div className="max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono mb-4 tracking-[0.3em] uppercase"
          >
            {RESUME_DATA.role}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold leading-[0.9] mb-8 tracking-tighter"
          >
            MAHESH <br />
            <span className="text-gradient">KUMAR SINGH</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-8">
                {RESUME_DATA.summary[0]} {RESUME_DATA.summary[1]}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl glow-on-hover transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={RESUME_DATA.contact.personal} target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl glow-on-hover transition-all">
                  <Globe className="w-6 h-6" />
                </a>
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-4 glass-card rounded-2xl glow-on-hover transition-all">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="order-1 md:order-2 relative group"
            >
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-all" />
              <div className="relative glass-card p-2 rounded-[2rem] overflow-hidden aspect-[4/5] max-w-sm mx-auto shadow-2xl flex items-center justify-center">
                {RESUME_DATA.contact.image ? (
                  <img 
                    src={RESUME_DATA.contact.image} 
                    alt={RESUME_DATA.name}
                    className="w-full h-full object-cover rounded-[1.8rem] grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.classList.add('bg-accent/5');
                      const fallback = document.getElementById('image-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div id="image-fallback" className="hidden flex-col items-center justify-center text-accent/40">
                  <Layout className="w-20 h-20 mb-4 opacity-20" />
                  <p className="text-[10px] font-mono uppercase tracking-widest">Image not found</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent rounded-br-3xl opacity-50" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent rounded-tl-3xl opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-6 md:px-24 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 glass-card rounded-3xl"
          >
            <Zap className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4">High Scale</h3>
            <p className="text-white/60 leading-relaxed">
              Scaled microservices to handle <span className="text-white font-bold">1M+ transactions/day</span> using Azure Service Bus & Event Grid.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 glass-card rounded-3xl"
          >
            <Cpu className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4">Optimization</h3>
            <p className="text-white/60 leading-relaxed">
              Improved performance with optimized SQL & EF Core queries, cutting response times by <span className="text-white font-bold">70%</span>.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 glass-card rounded-3xl"
          >
            <Cloud className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4">Cloud Native</h3>
            <p className="text-white/60 leading-relaxed">
              Azure 3x certified (AZ-900, AZ-204, AI-102) with deep CI/CD and monitoring expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="Professional Journey">Experience</SectionTitle>
          
          <div className="space-y-16">
            {RESUME_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,148,0.8)]" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-display font-bold">{exp.company}</h3>
                    {exp.role && <p className="text-accent font-mono text-sm mt-1">{exp.role}</p>}
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-white/40 font-mono text-xs uppercase tracking-widest">{exp.period}</p>
                    <div className="flex items-center justify-end gap-1 text-white/40 text-xs mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {(exp as any).roles && (exp as any).roles.length > 0 && (
                  <div className="space-y-8 mt-6">
                    {(exp as any).roles.map((subRole: any, sIdx: number) => (
                      <div key={sIdx} className="glass-card p-6 rounded-2xl">
                        <h4 className="text-xl font-bold flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-accent" />
                          {subRole.title}
                        </h4>
                        <p className="text-white/40 text-sm font-mono mt-1">{subRole.period}</p>
                        <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {subRole.location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-white/60 leading-relaxed">
                        <span className="text-accent mt-1.5">
                          <Terminal className="w-4 h-4" />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certs Section */}
      <section id="skills" className="py-32 px-6 md:px-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Technical Arsenal">Skills & Technologies</SectionTitle>
          
          <div className="grid lg:grid-cols-2 gap-24 mb-24">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {RESUME_DATA.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 glass-card rounded-2xl flex items-center gap-4"
                  >
                    <div className="p-3 bg-accent/10 rounded-xl text-accent">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold tracking-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Languages & Frameworks</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-white/40 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.languages.map((lang, idx) => (
                      <span key={idx} className="px-4 py-2 bg-accent/10 rounded-full text-sm font-mono text-accent">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-white/40 mb-3">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.frameworks.map((fw, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-500/10 rounded-full text-sm font-mono text-blue-300">
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-accent transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Specializations</h3>
              <div className="space-y-3">
                {RESUME_DATA.specializations.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-3 glass-card rounded-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <SectionTitle subtitle="Validated Expertise">Certifications</SectionTitle>
            <div className="space-y-4">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 glass-card rounded-2xl flex items-center gap-4 group"
                >
                  <ShieldCheck className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle subtitle="Achievements">Awards & Community</SectionTitle>
            <div className="space-y-4">
              {RESUME_DATA.awards.map((award, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 glass-card rounded-2xl">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 md:px-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Building Real Solutions">Featured Projects</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:border-accent/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-accent text-sm font-mono mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 bg-accent/10 rounded text-xs font-mono text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2 text-white/70 text-sm leading-relaxed">
                      <span className="text-accent mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="Academic Foundation">Education</SectionTitle>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 glass-card rounded-[40px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-32 h-32" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-2">{RESUME_DATA.education.school}</h3>
            <p className="text-accent text-xl mb-2">{RESUME_DATA.education.degree}</p>
            <p className="text-accent/80 font-mono text-sm mb-4">{RESUME_DATA.education.honors}</p>
            <p className="text-white/40 font-mono tracking-widest uppercase">{RESUME_DATA.education.period}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-24 bg-accent text-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-sm uppercase tracking-[0.4em] mb-8"
          >
            Let's build something impactful
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter"
          >
            READY TO <br /> COLLABORATE?
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="group flex items-center gap-4 bg-black text-white px-10 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all"
            >
              <Mail className="w-6 h-6" />
              {RESUME_DATA.contact.email}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="flex justify-center gap-12 border-t border-black/10 pt-12">
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold uppercase tracking-widest hover:underline">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href={RESUME_DATA.contact.personal} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold uppercase tracking-widest hover:underline">
              <Globe className="w-5 h-5" /> Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-white/5 text-center text-white/40 text-sm font-mono uppercase tracking-widest">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{RESUME_DATA.location}</span>
          </div>
          <p>Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
