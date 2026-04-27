import { useEffect, useRef, useState } from 'react';
import { 
  Search, AlertTriangle, BookOpen, Target, Workflow, Cpu, 
  ChevronRight, Award, Calendar, FileText, Download, CheckCircle, Clock, 
  Presentation, FolderOpen, Users, Mail, Phone, MapPin, Send, MessageSquare,
  Sparkles, ArrowDown, Brain, Shield, Wifi, Smartphone, Activity, Zap, Globe, Flag
} from 'lucide-react';

const Home = () => {
  const sectionsRef = useRef([]);
  const [openMilestone, setOpenMilestone] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const toggleMilestone = (id) => {
    setOpenMilestone(openMilestone === id ? null : id);
  };

  // Domain Data
  const domainSections = [
    { icon: Search, title: 'Literature Survey', color: 'blue', content: 'A comprehensive review of existing wearable safety devices, EEG-based stress detection systems, and IoT-enabled emergency response solutions.' },
    { icon: AlertTriangle, title: 'Research Gap', color: 'orange', content: 'Existing helmets provide passive protection but lack real-time physiological monitoring and proactive accident prevention.' },
    { icon: BookOpen, title: 'Research Problem', color: 'purple', content: 'How can we design an intelligent helmet system that continuously monitors rider state, detects stress and fatigue, and prevents accidents?' },
    { icon: Target, title: 'Research Objectives', color: 'emerald', content: '1) 95%+ accuracy in detection. 2) <10 second alert response. 3) Mobile app development. 4) Field testing validation.' },
    { icon: Workflow, title: 'Methodology', color: 'cyan', content: 'Our methodology combines hardware prototyping with AI model development using EEG sensors, OpenCV, and machine learning algorithms.' },
    { icon: Cpu, title: 'Technologies', color: 'indigo', content: 'Python, TensorFlow, OpenCV, Arduino/Raspberry Pi, React Native, EEG sensors, GSM/GPS modules, Firebase.' },
  ];

  // Milestones Data
  const milestones = [
    { id: 1, title: 'Project Proposal', assessment: 'Initial project proposal submission', date: 'TBA', marks: '10 marks', details: ['Problem statement', 'Literature review', 'Proposed methodology', 'Expected outcomes', 'Timeline'] },
    { id: 2, title: 'Progress Presentation 1', assessment: 'First progress review', date: 'TBA', marks: '15 marks', details: ['Progress on objectives', 'Preliminary findings', 'Challenges & solutions', 'Updated timeline', 'Documentation'] },
    { id: 3, title: 'Progress Presentation 2', assessment: 'Second progress review', date: 'TBA', marks: '20 marks', details: ['Substantial progress', 'Intermediate results', 'Methodology refinement', 'Preparation for final', 'Progress report'] },
    { id: 4, title: 'Final Assessment', assessment: 'Complete project evaluation', date: 'TBA', marks: '40 marks', details: ['Complete implementation', 'Final results', 'Comprehensive docs', 'Project deliverables', 'Quality assessment'] },
    { id: 5, title: 'Viva', assessment: 'Oral defense', date: 'TBA', marks: '15 marks', details: ['Oral presentation', 'Q&A session', 'Demonstration', 'Defense of results', 'Contribution assessment'] },
  ];

  // Documents Data
  const documents = [
    { title: 'Project Charter', desc: 'Initial project charter', file: 'project-charter.pdf', color: 'blue' },
    { title: 'TAF Document', desc: 'Team Allocation Form', file: 'taf-document.pdf', color: 'cyan' },
    { title: 'Proposal Report', desc: 'Comprehensive proposal', file: 'proposal-report.pdf', color: 'blue' },
    { title: 'Research Document', desc: 'Research documentation', file: 'research-document.pdf', color: 'cyan' },
    { title: 'Smart Helmet Thesis', desc: 'Complete thesis', file: 'smart-helmet-thesis.pdf', color: 'blue' },
    { title: 'Justification Sheet', desc: 'Progress assessment', file: 'justification-sheet.pdf', color: 'cyan' },
  ];

  // Team Data - 6 members
  const teamMembers = [
    { name: 'Dr. Alex Chen', role: 'Principal Investigator', email: 'a.chen@university.edu', image: 'AC', achievements: ['IEEE Fellow', 'PhD MIT', 'Best Researcher Award 2023'] },
    { name: 'Sarah Williams', role: 'Lead AI Engineer', email: 's.williams@university.edu', image: 'SW', achievements: ['MS Stanford', '2 Patents', 'Top 10 AI Researcher'] },
    { name: 'Michael Zhang', role: 'Hardware Lead', email: 'm.zhang@university.edu', image: 'MZ', achievements: ['MS Robotics CMU', 'IoT Expert', 'Published 5 Papers'] },
    { name: 'Emily Rodriguez', role: 'Data Scientist', email: 'e.rodriguez@university.edu', image: 'ER', achievements: ['MS Data Science', 'Kaggle Master', 'Grant Winner'] },
    { name: 'James Park', role: 'IoT Developer', email: 'j.park@university.edu', image: 'JP', achievements: ['MS Berkeley', 'Full Stack Dev', 'Innovation Award'] },
    { name: 'Lisa Kumar', role: 'UI/UX Designer', email: 'l.kumar@university.edu', image: 'LK', achievements: ['BFA Design', 'UX Researcher', 'Design Lead'] },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200 from-blue-500 to-blue-600',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200 from-cyan-500 to-blue-500',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
  };

  return (
    <div className="bg-white">
      {/* ========== HERO SECTION - Light Professional IT Services Theme ========== */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={addToRefs} className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Safety Research</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Smart Helmet
                <span className="block text-blue-600">Research Project</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Pioneering the future of rider safety through AI-powered helmet technology with real-time stress detection, drowsiness monitoring, and automatic accident alerting.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={() => scrollToSection('about')} className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25">
                  Explore Research <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button onClick={() => scrollToSection('documents')} className="inline-flex items-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" /> Documents
                </button>
              </div>
              
              <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-100 border-2 border-white flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Trusted Technology Stack</p>
                  <p className="text-sm font-medium text-slate-900">AI • IoT • Cloud</p>
                </div>
              </div>
            </div>
            
            {/* Right - Professional Hero Image */}
            <div ref={addToRefs} className="reveal relative">
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl animate-pulse" />
                
                {/* Main Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-100 bg-white">
                  {/* Abstract Tech Illustration */}
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                        <defs>
                          <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="400" height="300" fill="url(#heroGrid)" />
                      </svg>
                    </div>

                    {/* Animated Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-64 h-64 border border-blue-400/30 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-4 border border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-8 border border-indigo-400/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    </div>

                    {/* Central Helmet Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-bounce" style={{ animationDuration: '3s' }}>
                          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-blue-500/30 rounded-3xl blur-xl animate-pulse" />
                      </div>
                    </div>

                    {/* Floating Stats Cards */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg animate-[float_3s_ease-in-out_infinite]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Activity className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Accuracy</p>
                          <p className="text-sm font-bold text-slate-900">99.8%</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg animate-[float_4s_ease-in-out_infinite]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Brain className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">AI Status</p>
                          <p className="text-sm font-bold text-slate-900">Active</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg animate-[float_3.5s_ease-in-out_infinite]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <Wifi className="w-4 h-4 text-cyan-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Connection</p>
                          <p className="text-sm font-bold text-slate-900">Live</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg animate-[float_4.5s_ease-in-out_infinite]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Protection</p>
                          <p className="text-sm font-bold text-slate-900">On</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Team Members', value: '6', icon: Users, color: 'blue' },
                    { label: 'Research Papers', value: '12', icon: BookOpen, color: 'cyan' },
                    { label: 'Patents Pending', value: '3', icon: Award, color: 'indigo' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-center hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <div className={`w-10 h-8 mx-auto mb-2 bg-${stat.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
                      </div>
                      <p className="text-lg font-bold text-slate-900">{stat.value}+</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button onClick={() => scrollToSection('stats')} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer group">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </button>
      </section>

      {/* ========== STATS SECTION - Light ========== */}
      <section id="stats" className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div ref={addToRefs} className="reveal grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ icon: Users, value: '6', label: 'Team Members' }, { icon: BookOpen, value: '12', label: 'Publications' }, { icon: Award, value: '3', label: 'Awards Won' }, { icon: Globe, value: '2', label: 'Patents Pending' }].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="text-4xl font-bold mb-2">{stat.value}+</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION - With 3D Helmet ========== */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Professional Tech Image */}
            <div ref={addToRefs} className="reveal order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1 shadow-2xl shadow-blue-500/20">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative bg-white rounded-[22px] overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative flex items-center justify-center">
                    {/* Tech Pattern Background */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="400" height="400" fill="url(#grid)" />
                        <circle cx="200" cy="200" r="150" stroke="rgba(59,130,246,0.3)" strokeWidth="2" fill="none" />
                        <circle cx="200" cy="200" r="100" stroke="rgba(6,182,212,0.3)" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    
                    {/* Central Icon */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Smart Helmet</h3>
                      <p className="text-blue-200 text-sm">AI-Powered Safety System</p>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-white/60">AI Status</p>
                          <p className="text-sm font-semibold text-white">Active</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-white/60">Response</p>
                          <p className="text-sm font-semibold text-white">&lt; 1s</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 right-4 -translate-y-1/2 space-y-3">
                      {['EEG', 'GPS', 'GSM'].map((tech, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur rounded-lg px-3 py-2 border border-white/10">
                          <p className="text-xs text-white/80 font-medium">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div ref={addToRefs} className="reveal order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>About The Project</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Revolutionizing
                <span className="text-blue-600"> Rider Safety</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our Smart Helmet Research Project combines cutting-edge AI, IoT sensors, and real-time data processing to create the next generation of protective headgear. The system continuously monitors vital signs, detects anomalies, and provides instant alerts to prevent accidents before they happen.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[{ icon: Brain, title: 'AI Detection', desc: '95%+ accuracy' }, { icon: Wifi, title: 'Real-time Sync', desc: '<1s response' }, { icon: Shield, title: 'Impact Protection', desc: 'Advanced materials' }, { icon: Smartphone, title: 'Mobile App', desc: 'iOS & Android' }].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Key Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Advanced <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Cutting-edge technology integrated for maximum safety</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ icon: Activity, title: 'Stress Detection', desc: 'EEG sensors monitor rider stress levels in real-time, alerting when attention drops.', color: 'blue' }, { icon: Brain, title: 'Drowsiness Alert', desc: 'AI-powered eye tracking detects fatigue and triggers immediate warnings.', color: 'cyan' }, { icon: Zap, title: 'Accident Response', desc: 'Automatic emergency contact notification with GPS location when impact detected.', color: 'indigo' }].map((f, i) => (
              <div key={i} ref={addToRefs} className="reveal group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-${f.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-8 h-8 text-${f.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DOMAIN SECTION ========== */}
      <section id="domain" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Search className="w-4 h-4" />
              <span>Research Framework</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Research Domain</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Smart Helmet Research Framework & AI Methodology</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {domainSections.map((s, i) => {
              const Icon = s.icon;
              const colorMap = {
                blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-600',
                cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-600',
                orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-600',
                purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-600',
                emerald: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-600',
                indigo: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-600',
              };
              return (
                <div key={i} ref={addToRefs} className="reveal group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[s.color]} border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{s.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== MILESTONES SECTION ========== */}
      <section id="milestones" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Flag className="w-4 h-4" />
              <span>Project Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Project Milestones</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Track our research progress through key assessment phases</p>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={m.id} ref={addToRefs} className="reveal group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                <button onClick={() => toggleMilestone(m.id)} className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">{m.id}</span>
                      <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
                    </div>
                    <p className="text-slate-500 ml-14">{m.assessment}</p>
                  </div>
                  <div className="flex items-center space-x-4 ml-4">
                    <div className="text-right hidden sm:block">
                      <div className="flex items-center text-slate-400 mb-1"><Calendar className="w-4 h-4 mr-2" /><span className="text-sm font-medium">{m.date}</span></div>
                      <div className="flex items-center text-blue-600"><Award className="w-4 h-4 mr-2" /><span className="text-sm font-medium">{m.marks}</span></div>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      {openMilestone === m.id ? <ChevronRight className="w-6 h-6 text-blue-600 rotate-90 transition-transform" /> : <ChevronRight className="w-6 h-6 text-slate-400 transition-transform" />}
                    </div>
                  </div>
                </button>
                {openMilestone === m.id && (
                  <div className="px-8 pb-6 border-t border-slate-100">
                    <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Assessment Details</h4>
                    <ul className="space-y-2">
                      {m.details.map((d, idx) => (
                        <li key={idx} className="flex items-start text-slate-600"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DOCUMENTS SECTION ========== */}
      <section id="documents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <FolderOpen className="w-4 h-4" />
              <span>Downloads</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Project Documents</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Access all Smart Helmet research documentation and deliverables</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((d, i) => (
              <div key={i} ref={addToRefs} className="reveal group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${d.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-cyan-500 to-blue-500'} shadow-lg`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-50 text-emerald-600">
                    <CheckCircle className="w-3 h-3 mr-1" /> Available
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{d.title}</h3>
                <p className="text-slate-600 mb-4">{d.desc}</p>
                <a href={`/documents/${d.file}`} download className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${d.color === 'blue' ? 'from-blue-600 to-blue-500' : 'from-cyan-600 to-cyan-500'} hover:opacity-90`}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRESENTATIONS SECTION ========== */}
      <section id="presentations" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Presentation className="w-4 h-4" />
              <span>Presentations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Project Presentations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Access presentation slides and materials</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[{ title: 'Proposal Presentation', desc: 'Initial project proposal', file: 'Proposal-Presentation1.pptx', type: '.pptx', color: 'blue', icon: Presentation, status: 'Available' }, { title: 'Progress Presentation 1', desc: 'First progress review', file: '25-26J-294-PP1.pdf', type: '.pdf', color: 'cyan', icon: FileText, status: 'Available' }, { title: 'Progress Presentation 2', desc: 'Second progress review', file: '25-26J 294 - PP2.pptx', type: '.pptx', color: 'blue', icon: Presentation, status: 'Available' }, { title: 'Final Presentation', desc: 'Coming soon', file: null, type: '.pptx', color: 'cyan', icon: Presentation, status: 'Coming Soon' }].map((p, i) => {
              const Icon = p.icon;
              const isBlue = p.color === 'blue';
              return (
                <div key={i} ref={addToRefs} className="reveal group bg-white border border-slate-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${isBlue ? 'from-blue-500 to-blue-600' : 'from-cyan-500 to-blue-500'} shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${p.status === 'Available' ? 'border-emerald-500/30 bg-emerald-50 text-emerald-600' : 'border-amber-500/30 bg-amber-50 text-amber-600'}`}>
                      {p.status === 'Available' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}{p.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 mb-4">{p.desc}</p>
                  {p.file ? (
                    <a href={`/presentations/${p.file}`} download className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${isBlue ? 'from-blue-600 to-blue-500' : 'from-cyan-600 to-cyan-500'} hover:opacity-90`}>
                      <Download className="w-4 h-4 mr-2" /> Download {p.type}
                    </a>
                  ) : (
                    <button disabled className="w-full flex items-center justify-center px-4 py-3 bg-slate-100 rounded-xl text-slate-400 cursor-not-allowed font-medium border border-slate-200">
                      <Clock className="w-4 h-4 mr-2" /> Coming Soon
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet the <span className="text-blue-600">Researchers</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Dedicated experts pushing the boundaries of safety technology</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} ref={addToRefs} className="reveal group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-slate-500 mb-4">{member.email}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.achievements.slice(0, 2).map((achievement, j) => (
                    <span key={j} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{achievement}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Get in touch with our Smart Helmet research team</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div ref={addToRefs} className="reveal bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition" placeholder="Inquiry about research" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/25">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div ref={addToRefs} className="reveal bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                      <Mail className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">research@university.edu</p>
                      <p className="text-slate-600">team@smarthelmet.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mr-4">
                      <Phone className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                      <MapPin className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                      <p className="text-slate-600">AI Research Laboratory</p>
                      <p className="text-slate-600">University Campus, Building C</p>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={addToRefs} className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-10 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Research Lab Hours</h3>
                <div className="space-y-2 text-blue-100">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <img src="/logo.png" alt="Smart Helmet Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Smart Helmet Research</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#team" className="hover:text-blue-400 transition-colors">Team</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <p className="text-slate-500 text-sm">© 2024 Smart Helmet Research. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
