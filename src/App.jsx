import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiUser,
  FiActivity,
  FiMapPin,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiArrowUpRight,
  FiDownload,
  FiTerminal,
  FiGrid,
  FiGlobe,
  FiChevronUp,
  FiCheckCircle,
  FiCpu
} from "react-icons/fi";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, pre }) => (
  <div className="space-y-2 mb-16 text-center lg:text-left">
    <span className="text-[10px] font-mono tracking-[0.3em] text-blue-600 uppercase font-bold block">
      // {pre}
    </span>
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
      {title}
    </h2>
    <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto lg:mx-0 mt-3" />
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "education", "skills", "activities", "projects", "contact"];
      const currentScroll = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyTop = document.body.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const finalPosition = targetTop - bodyTop - offset;

      window.scrollTo({
        top: finalPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const statistics = [
    { label: "Computer Science Student", value: "B.Sc CS", icon: <FiUser className="text-blue-600" /> },
    { label: "C Programmer", value: "Core Logic", icon: <FiTerminal className="text-indigo-600" /> },
    { label: "C++ Learner", value: "OOP Paradigms", icon: <FiCpu className="text-cyan-600" /> },
    { label: "Problem Solver", value: "Analytical", icon: <FiActivity className="text-blue-700" /> }
  ];

  const skillMatrix = [
    { name: "C Programming", type: "Core Language", level: "90%" },
    { name: "C++ Programming", type: "OOP Architecture", level: "80%" },
    { name: "Problem Solving", type: "Algorithmic Precision", level: "85%" },
    { name: "Communication Skills", type: "Human Vector", level: "90%" },
    { name: "Teamwork", type: "Collaborative Sync", level: "92%" },
    { name: "Analytical Thinking", type: "System Evaluation", level: "88%" },
    { name: "Presentation Skills", type: "Information Vector", level: "85%" },
    { name: "Time Management", type: "Execution Matrix", level: "90%" }
  ];

  const activities = [
    { text: "Academic programming practice using C.", desc: "Developing foundational systems computational models and procedural structures." },
    { text: "Active participation in classroom presentations.", desc: "Communicating intricate data architecture concepts to student environments." },
    { text: "Collaborative teamwork in academic activities.", desc: "Syncing project assignments across cross-functional peer configurations." },
    { text: "Continuous learning of programming concepts and software skills.", desc: "Engaging daily with modular paradigms, memory handling, and modern tools." }
  ];

  const projects = [
    {
      title: "Student Portfolio Website",
      tag: "Production Frontend",
      desc: "A highly intuitive, state-driven architecture custom-designed to demonstrate academic trajectory to premium tracking monitors.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Academic Programming Projects",
      tag: "Systems & Structure",
      desc: "A secure repository of logical exercises, parsing modules, and low-level matrix configurations written natively in core C.",
      tech: ["C Language", "Data Structures", "Pointers"]
    },
    {
      title: "Future Software Development Projects",
      tag: "Systems Research",
      desc: "Algorithmic pipelines engineered to explore polymorphism boundaries, file manipulation layers, and runtime optimization frameworks.",
      tech: ["C++", "OOPs Concepts", "STL Frameworks"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-blue-600/10 selection:text-blue-700 overflow-x-hidden relative">
      
      {/* Premium Canvas Overlay: Light Mesh Gradient & Dot Matrix */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-blue-100/40 via-indigo-50/20 to-transparent blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-cyan-100/30 to-transparent blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      {/* --- FLOATING NAVIGATION HEADER --- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-md bg-white/75 border-b border-slate-200/40 shadow-sm h-16" : "h-24 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <div 
            onClick={() => handleSmoothScroll("hero")}
            className="text-lg font-black tracking-widest cursor-pointer text-slate-900 font-mono group"
          >
            SAMEERA<span className="text-blue-600 group-hover:text-cyan-500 transition-colors">.</span>BANU
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">
            {["about", "education", "skills", "activities", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleSmoothScroll(item)}
                className={`transition-colors relative py-1 hover:text-blue-600 ${activeSection === item ? "text-blue-600 font-extrabold" : ""}`}
              >
                {item}
                {activeSection === item && (
                  <motion.span layoutId="activeNavTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => handleSmoothScroll("contact")}
              className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full bg-slate-900 text-white hover:bg-blue-600 shadow-md transition-all active:scale-95"
            >
              Get In Touch
            </button>
          </div>

          <button 
            className="lg:hidden text-xl text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-40 lg:hidden p-6"
          >
            <nav className="flex flex-col space-y-4 text-xs font-bold tracking-widest uppercase text-slate-600">
              {["about", "education", "skills", "activities", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleSmoothScroll(item)}
                  className={`text-left py-2 border-b border-slate-100 last:border-none ${activeSection === item ? "text-blue-600" : ""}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CORE MATRIX HUB --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24">

        {/* 1. PREMIUM HERO SECTION */}
        <section id="hero" className="min-h-[calc(100vh-96px)] flex flex-col justify-center py-12 relative">
          
          {/* Floating Skill Badges Backdrop Animation */}
          <div className="absolute inset-0 pointer-events-none hidden xl:block">
            <motion.div 
              animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[15%] right-[12%] bg-white border border-slate-200/80 shadow-md px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono text-slate-600"
            >
              <FiTerminal className="text-blue-600" /> C Programming
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-[25%] right-[38%] bg-white border border-slate-200/80 shadow-md px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono text-slate-600"
            >
              <FiCpu className="text-indigo-600" /> C++ Learner
            </motion.div>
            <motion.div 
              animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-[55%] right-[5%] bg-white border border-slate-200/80 shadow-md px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono text-slate-600"
            >
              <FiActivity className="text-cyan-600" /> Problem Solver
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-8 text-center lg:text-left order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-blue-700 uppercase font-extrabold">Recruiter Pipeline Active</span>
              </motion.div>

              <div className="space-y-3">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]"
                >
                  Sameera Banu
                  <span className="block text-xl sm:text-2xl xl:text-3xl font-bold tracking-normal text-slate-800 mt-4 font-sans max-w-2xl">
                    Computer Science Student at Jamal Mohamed College
                  </span>
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-800 leading-relaxed font-normal"
              >
                Motivated Computer Science student eager to apply programming and analytical skills in a dynamic organization. Passionate about software development, problem solving, teamwork, and continuous learning.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-3.5"
              >
                <button
                  onClick={() => handleSmoothScroll("contact")}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-blue-600/20 transition-all transform active:scale-98 flex items-center gap-2 group"
                >
                  Contact Me <FiArrowUpRight className="text-sm transition-transform group-hover:rotate-45" />
                </button>
                <button
                  onClick={() => alert("Resume document placeholder active.")}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold tracking-widest uppercase border border-slate-200 shadow-sm transition-colors flex items-center gap-2"
                >
                  Download Resume <FiDownload />
                </button>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#0a66c2] text-white text-xs font-bold tracking-widest uppercase shadow-sm flex items-center gap-2 hover:opacity-95"
                >
                  View LinkedIn <FiLinkedin />
                </a>
              </motion.div>
            </div>

            {/* Glassmorphism Abstract Floating Profile Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2"
            >
              <div className="relative w-full aspect-square max-w-[310px] mx-auto group">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-transparent blur-xl" />
                
                {/* Micro Glassmorphic Frame */}
                <div className="w-full h-full rounded-[2rem] border border-white bg-white/70 shadow-2xl backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden relative">
                  <div className="flex items-center justify-between opacity-40 font-mono text-[9px] text-slate-500">
                    <span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />SYS / NODE</span>
                    <span>ENV_v2.6</span>
                  </div>

                  <div className="my-auto flex flex-col items-center justify-center space-y-4 py-4 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 border border-slate-200/80 flex items-center justify-center text-2xl font-mono font-bold text-blue-600 shadow-inner group-hover:border-blue-400 transition-colors duration-500">
                      SB
                    </div>
                    <div className="text-center space-y-1">
                      <div className="text-base font-black text-slate-900 tracking-wide font-mono">SAMEERA BANU</div>
                      <div className="text-[10px] text-slate-700 font-mono tracking-widest uppercase font-bold">Tamil Nadu, India</div>
                    </div>
                  </div>

                  <div className="text-[9px] text-center font-mono text-slate-700 border-t border-slate-100 pt-3 flex justify-between items-center">
                    <span>UNDERGRAD</span>
                    <span className="text-blue-600 font-bold">B.Sc CS // 2028</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics Grid Rows */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto w-full">
            {statistics.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200/60 rounded-2xl p-4.5 flex items-center gap-4 shadow-sm backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 font-medium tracking-tight mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionTitle title="Professional Summary" pre="Identity Vector" />
              <p className="text-slate-600 leading-relaxed font-medium text-base text-center lg:text-left">
                I am a dedicated Computer Science student currently pursuing my degree at Jamal Mohamed College. I enjoy learning programming concepts, developing technical skills, and exploring opportunities to contribute to meaningful projects.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6 relative overflow-hidden">
                <div className="space-y-1 sm:col-span-2">
                  <span className="text-[10px] font-mono text-slate-700 uppercase font-bold block tracking-widest">Primary Contact Node</span>
                  <a href="mailto:mohanapriyam070708@gmail.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-2 pt-1 truncate">
                    <FiMail className="text-slate-700" /> mohanapriyam070708@gmail.com
                  </a>
                </div>
                
                <div className="space-y-1 border-t border-slate-100 sm:border-none pt-4 sm:pt-0">
                  <span className="text-[10px] font-mono text-slate-700 uppercase font-bold block tracking-widest">Alternative Mail</span>
                  <a href="mailto:sadhickbatcha70@gmail.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-2 pt-1 truncate">
                    <FiMail className="text-slate-700" /> sadhickbatcha70@gmail.com
                  </a>
                </div>

                <div className="space-y-1 border-t border-slate-100 sm:border-none pt-4 sm:pt-0">
                  <span className="text-[10px] font-mono text-slate-700 uppercase font-bold block tracking-widest">Direct Line</span>
                  <a href="tel:8344262708" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-2 pt-1">
                    <FiPhone className="text-slate-700" /> +91 83442 62708
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDUCATION TIMELINE */}
        <section id="education" className="py-24 border-t border-slate-200/60">
          <div className="text-center max-w-md mx-auto mb-16">
            <SectionTitle title="Academic Journey" pre="Chronology" />
          </div>

          <div className="relative max-w-3xl mx-auto border-l-[2px] border-slate-200 pl-6 sm:pl-10 ml-4 sm:mx-auto space-y-10">
            {/* College Card */}
            <div className="relative group">
              <div className="absolute -left-[37px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-[3px] border-blue-600 shadow-sm group-hover:border-cyan-500 transition-colors" />
              <Reveal>
                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded font-extrabold">2025 – 2028</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Bachelor of Computer Science</h3>
                  <h4 className="text-sm text-slate-700 font-medium">Jamal Mohamed College, Trichy</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pt-1">
                    Engaging with core computational logic structures, database systems, memory paradigms, and standard object orientations.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Higher Secondary Card */}
            <div className="relative group">
              <div className="absolute -left-[37px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-[3px] border-slate-300" />
              <Reveal>
                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-widest text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded">2023 – 2025</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Higher Secondary Education</h3>
                  <h4 className="text-sm text-slate-700 font-medium">CSI Methodist Girls Higher Secondary School</h4>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4. SKILLS SHOWCASE */}
        <section id="skills" className="py-24 border-t border-slate-200/60">
          <div className="text-center max-w-md mx-auto mb-16">
            <SectionTitle title="Capabilities Inventory" pre="Skills Showcase" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {skillMatrix.map((sk, index) => (
              <Reveal key={index} delay={index * 0.04}>
                <div className="bg-white border border-slate-200/60 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-300 transition-all group relative overflow-hidden h-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-slate-700 uppercase tracking-widest font-bold">
                        {sk.type}
                      </span>
                      <FiCheckCircle className="text-blue-600/40 group-hover:text-blue-600 transition-colors text-xs" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {sk.name}
                    </h4>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: sk.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 5. ACTIVITIES SECTION */}
        <section id="activities" className="py-24 border-t border-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <SectionTitle title="Operational Logs" pre="Activities Matrix" />
              <p className="text-slate-800 font-medium text-sm leading-relaxed text-center lg:text-left">
                Practical integration milestones across collaborative academic activities, structural paradigms, and university classroom presentations.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((act, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm h-full flex gap-4 items-start hover:border-slate-300 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold border border-blue-100/50">
                      0{idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{act.text}</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{act.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-slate-200/60">
          <div className="text-center max-w-md mx-auto mb-16">
            <SectionTitle title="Execution Repositories" pre="Projects Gallery" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((proj, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200/70 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group h-full">
                  <div className="space-y-4">
                    <div className="w-full aspect-video rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 to-transparent" />
                      <span className="font-mono text-[10px] tracking-widest text-slate-600 group-hover:scale-105 transition-transform">
                        [ REPO_CONTAINER_0{idx + 1} ]
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-blue-600 bg-blue-50 border border-blue-100/40 px-2 py-0.5 rounded uppercase font-bold">
                        {proj.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-2.5 group-hover:text-blue-600 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 font-medium leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="text-[9px] font-mono text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => alert("Project viewport initialization pending package compilation.")}
                      className="w-full py-2 rounded-xl bg-slate-900 text-white hover:bg-blue-600 text-[11px] font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-1"
                    >
                      View Project <FiArrowUpRight />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 7. LANGUAGES SECTION */}
        <section className="py-20 border-t border-slate-200/60">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
            {[
              { name: "Tamil", scope: "Native Fluency" },
              { name: "English", scope: "Professional Capability" }
            ].map((lang, i) => (
              <div key={i} className="flex-1 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm flex items-center gap-3">
                <FiGlobe className="text-blue-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900">{lang.name}</div>
                  <div className="text-[10px] font-mono text-slate-600 mt-0.5">{lang.scope}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-slate-200/60 mb-6">
          <div className="text-center max-w-md mx-auto mb-16">
            <SectionTitle title="Initialize Pipeline" pre="Contact Endpoint" />
          </div>

          <div className="max-w-md mx-auto space-y-2.5">
            <a 
              href="mailto:mohanapriyam070708@gmail.com"
              className="p-4 rounded-xl border border-slate-200/60 bg-white hover:bg-slate-50 flex items-center gap-4 group transition-colors shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-sm">
                <FiMail />
              </div>
              <div className="overflow-hidden">
                <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest font-bold">Primary Route</div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate mt-0.5">mohanapriyam070708@gmail.com</div>
              </div>
            </a>

            <a 
              href="mailto:sadhickbatcha70@gmail.com"
              className="p-4 rounded-xl border border-slate-200/60 bg-white hover:bg-slate-50 flex items-center gap-4 group transition-colors shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-600 text-sm">
                <FiMail />
              </div>
              <div className="overflow-hidden">
                <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest font-bold">Alternative Route</div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-slate-900 transition-colors truncate mt-0.5">sadhickbatcha70@gmail.com</div>
              </div>
            </a>

            <a 
              href="tel:8344262708"
              className="p-4 rounded-xl border border-slate-200/60 bg-white hover:bg-slate-50 flex items-center gap-4 group transition-colors shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 text-sm">
                <FiPhone />
              </div>
              <div>
                <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest font-bold">Cellular Node</div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-cyan-600 transition-colors mt-0.5">+91 83442 62708</div>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-mono text-slate-500 block font-bold">Designed and Developed by Sameera Banu</span>
            <span className="text-[10px] text-slate-600 block mt-0.5">&copy; {new Date().getFullYear()} Undergraduate Portal Portfolio. All rights saved.</span>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shadow-inner"
          >
            <FiChevronUp />
          </button>
        </div>
      </footer>
    </div>
  );
}