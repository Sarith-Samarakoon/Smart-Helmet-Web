import { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, Target, FileText, Download, CheckCircle, Clock, 
  Presentation, Users, Mail, Phone, MapPin, Send, MessageSquare,
  Brain, Shield, Wifi, Activity, Zap, Globe, ChevronRight, 
  FileSpreadsheet, GraduationCap, Award, Calendar,
  ArrowRight, ExternalLink, Cpu, Trophy, X
} from 'lucide-react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeScopeSection, setActiveScopeSection] = useState('literature');
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [expandedMilestones, setExpandedMilestones] = useState({ 1: true }); // First one expanded by default
  const [feedbackIndex, setFeedbackIndex] = useState(0); // Feedback slideshow index
  const [imageViewer, setImageViewer] = useState({ open: false, image: null, title: '' }); // Image viewer state

  // Section definitions for progress tracking
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'scope', label: 'Project Scope' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scope sections
    const scopeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace('scope-', '');
            setActiveScopeSection(sectionId);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );
    
    const scopeElements = ['literature', 'gap', 'problem', 'objectives', 'methodology', 'technologies'].map(
      id => document.getElementById(`scope-${id}`)
    ).filter(Boolean);
    
    scopeElements.forEach(el => scopeObserver.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scopeObserver.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Project Scope Data - Bento Grid
  const scopeSections = [
    { 
      id: 'literature',
      icon: BookOpen, 
      title: 'Literature Survey', 
      accent: 'lavender',
      content: 'A comprehensive review of existing wearable safety devices, EEG-based stress detection systems, and IoT-enabled emergency response solutions. We analyzed 50+ research papers to identify best practices and gaps in current technology.',
      points: ['Wearable Safety Analysis', 'EEG Detection Systems', 'IoT Emergency Response']
    },
    { 
      id: 'gap',
      icon: Target, 
      title: 'Research Gap', 
      accent: 'mint',
      content: 'Existing helmets provide passive protection but lack real-time physiological monitoring and proactive accident prevention. Current solutions fail to integrate AI-driven predictive analytics for rider safety.',
      points: ['No Real-time Monitoring', 'Passive Protection Only', 'Missing AI Integration']
    },
    { 
      id: 'problem',
      icon: Brain, 
      title: 'Research Problem', 
      accent: 'rose',
      content: 'How can we design an intelligent helmet system that continuously monitors rider state, detects stress and fatigue, and prevents accidents through predictive alerts and emergency response?',
      points: ['Continuous Monitoring', 'Stress Detection', 'Accident Prevention']
    },
    { 
      id: 'objectives',
      icon: Activity, 
      title: 'Research Objectives', 
      accent: 'blue',
      content: 'Achieve 95%+ accuracy in drowsiness detection, ensure sub-10 second alert response time, develop cross-platform mobile application, and validate through extensive field testing.',
      points: ['95%+ Detection Accuracy', '<10s Alert Response', 'Mobile App Development']
    },
    { 
      id: 'methodology',
      icon: Zap, 
      title: 'Methodology', 
      accent: 'lavender',
      content: 'Our methodology combines hardware prototyping with AI model development using EEG sensors, OpenCV for computer vision, and machine learning algorithms for pattern recognition.',
      points: ['Hardware Prototyping', 'AI Model Development', 'Computer Vision Integration']
    },
    { 
      id: 'technologies',
      icon: Shield, 
      title: 'Technologies', 
      accent: 'mint',
      content: 'Built with Python, TensorFlow, OpenCV, Arduino/Raspberry Pi, React Native for mobile, EEG sensors, GSM/GPS modules, and Firebase for real-time data synchronization.',
      points: ['Python & TensorFlow', 'React Native', 'IoT Sensors & GPS']
    },
  ];

  // Milestones Data
  const milestones = [
    { id: 1, title: 'Project Proposal', assessment: 'Initial project proposal submission', date: 'TBA', marks: '10 marks', details: ['Problem statement', 'Literature review', 'Proposed methodology', 'Expected outcomes', 'Timeline'] },
    { id: 2, title: 'Progress Presentation 1', assessment: 'First progress review', date: 'TBA', marks: '15 marks', details: ['Progress on objectives', 'Preliminary findings', 'Challenges & solutions', 'Updated timeline', 'Documentation'] },
    { id: 3, title: 'Progress Presentation 2', assessment: 'Second progress review', date: 'TBA', marks: '20 marks', details: ['Substantial progress', 'Intermediate results', 'Methodology refinement', 'Preparation for final', 'Progress report'] },
    { id: 4, title: 'Final Assessment', assessment: 'Complete project evaluation', date: 'TBA', marks: '40 marks', details: ['Complete implementation', 'Final results', 'Comprehensive docs', 'Project deliverables', 'Quality assessment'] },
    { id: 5, title: 'Viva', assessment: 'Oral defense', date: 'TBA', marks: '15 marks', details: ['Oral presentation', 'Q&A session', 'Demonstration', 'Defense of results', 'Contribution assessment'] },
  ];

  // Documents Data - Updated
  const documents = [
    {
      title: 'Topic Assessment Form',
      desc: 'IT4010-TAF-2025 July Batch[25-26J-294]',
      file: 'documents/taf-document.pdf',
      type: 'PDF',
      size: '2mb',
      status: 'Available',
      accent: 'lavender'
    },
    {
      title: 'Research Paper',
      desc: 'Smart Helmet Conference Paper',
      file: 'documents/research-paper.pdf',
      type: 'PDF',
      size: '2mb',
      status: 'Available',
      accent: 'mint'
    },
    {
      title: 'Project Proposal',
      desc: 'Comprehensive project proposal with methodology and timeline',
      file: 'documents/proposal-report.pdf',
      type: 'PDF',
      size: '3mb',
      status: 'Available',
      accent: 'blue'
    },
    {
      title: 'Final Thesis',
      desc: 'Complete research thesis documentation',
      file: '#',
      type: 'PDF',
      size: '5mb',
      status: 'Coming Soon',
      accent: 'rose'
    },
  ];

  // Presentations Data
  const presentations = [
     {
      title: 'Proposal Presentation',
      description: 'Initial research pitch covering the problem domain, proposed solution, preliminary literature review, and project plan.',
      date: 'September 2025',
      status: 'Available',
      filename: 'Proposal-Presentation1.pptx',
      icon: Presentation,
      color: 'blue',
      type: '.pptx',
      image: '/presentation1.jpeg',
      tags: ['Problem Statement', 'Methodology', 'Project Plan'],
      slides: 28
    },
    {
      title: 'Progress Presentation 1',
      description: 'First progress review showcasing stress detection implementation and EEG sensor integration with preliminary results.',
      date: 'December 2025',
      status: 'Available',
      filename: '25-26J-294-PP1.pdf',
      icon: FileText,
      color: 'cyan',
      type: '.pdf',
      image: '/presentation1.jpeg',
      tags: ['Stress Detection', 'EEG Sensors', 'Progress Update'],
      slides: 24
    },
    {
      title: 'Progress Presentation 2',
      description: 'Second progress review demonstrating drowsiness detection, accident alerting system and IoT integration.',
      date: 'March 2026',
      status: 'Available',
      filename: '25-26J 294 - PP2.pptx',
      icon: Presentation,
      color: 'blue',
      type: '.pptx',
      image: '/presentation1.jpeg',
      tags: ['Drowsiness Detection', 'Alert System', 'IoT Integration'],
      slides: 32
    },
    {
      title: 'Final Presentation',
      description: 'Comprehensive final presentation covering complete Smart Helmet system, results, and safety impact analysis.',
      date: 'June 2026',
      status: 'Available',
      filename: '25-26J 294 -Final Presentations (1).pptx',
      icon: Presentation,
      color: 'cyan',
      type: '.pptx',
      image: '/presentation1.jpeg',
      tags: ['Final Results', 'Safety Impact', 'Future Work'],
      slides: 40
    }
  ];

  // Team Data - with proper structure for new UI
  const supervisors = [
    {
      name: 'Mr. Jagath Wrickramarathne',
      role: 'Supervisor',
      title: 'SUPERVISOR',
      institution: 'Sri Lanka Institute of Information Technology',
      department: 'Information Technology',
      linkedin: '#',
      accent: 'blue',
      image: '/jagath.jpeg'
    },
    {
      name: 'Mr. Amila Nuwan Alexander',
      role: 'Co-Supervisor',
      title: 'CO-SUPERVISOR',
      institution: 'Sri Lanka Institute of Information Technology',
      department: 'Information Technology',
      linkedin: '#',
      accent: 'purple',
      image: '/amila.jpeg'
    },
    {
      name: 'Dr. Sajith Perera',
      role: 'External Supervisor',
      title: 'EXTERNAL SUPERVISOR',
      institution: 'Disrict General Hospital Emblipitiya',
      department: 'Medical officer Accident & Emergency',
      linkedin: 'linkedin.com/in/sajith-mayantha-17716a297',
      accent: 'teal',
      image: '/sajith.jpeg'
    },
  ];

  const teamMembers = [
    {
      name: 'Vithanage K.W.Y.L.N.',
      role: 'Researcher',
      title: 'RESEARCHER',
      institution: 'Sri Lanka Institute of Information Technology',
      type: 'Undergraduate',
      linkedin: 'https://www.linkedin.com/in/yasiru-nuwan-a6193a2b8/',
      accent: 'blue',
      image: '/yasiru.jpeg'
    },
    {
      name: 'Samarakoon S.S.A.D.S.B',
      role: 'Researcher',
      title: 'RESEARCHER',
      institution: 'Sri Lanka Institute of Information Technology',
      type: 'Undergraduate',
      linkedin: 'https://www.linkedin.com/in/sarith-samarakoon-a74739313/',
      accent: 'purple',
      image: '/sarith.jpeg'
    },
    {
      name: 'Samarasinghe K.P.C.',
      role: 'Researcher',
      title: 'RESEARCHER',
      institution: 'Sri Lanka Institute of Information Technology',
      type: 'Undergraduate',
      linkedin: 'https://www.linkedin.com/in/pradeep-samarasinghe/',
      accent: 'teal',
      image: '/pradeep.jpeg'
    },
    {
      name: 'Primasha W.G.R.',
      role: 'Researcher',
      title: 'RESEARCHER',
      institution: 'Sri Lanka Institute of Information Technology',
      type: 'Undergraduate',
      linkedin: 'https://www.linkedin.com/in/ravindi-wannigama-3b40b9343/',
      accent: 'orange',
      image: '/ravindi.jpeg'
    },
  ];

  // Accent color mapping
  const accentColors = {
    lavender: { bg: 'bg-[#E8E4F3]', border: 'border-[#A78BFA]', icon: 'text-[#7C3AED]' },
    mint: { bg: 'bg-[#E0F2E9]', border: 'border-[#34D399]', icon: 'text-[#059669]' },
    rose: { bg: 'bg-[#F8E4E4]', border: 'border-[#F87171]', icon: 'text-[#DC2626]' },
    blue: { bg: 'bg-[#E4F0F8]', border: 'border-[#0055FF]', icon: 'text-[#0055FF]' },
    purple: { bg: 'bg-[#EDE9FE]', border: 'border-[#8B5CF6]', icon: 'text-[#7C3AED]' },
    teal: { bg: 'bg-[#CCFBF1]', border: 'border-[#14B8A6]', icon: 'text-[#0D9488]' },
    orange: { bg: 'bg-[#FEF3C7]', border: 'border-[#F59E0B]', icon: 'text-[#D97706]' },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Indicator - Fixed Left Side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col items-center gap-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-[#0055FF] h-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              title={section.label}
            />
          ))}
        </div>
      </div>

      

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg1.jpeg" 
            alt="Smart Helmet Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white/0" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0055FF]/10 text-[#0055FF] text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full animate-pulse" />
                Research Project 2026
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[110px] font-extrabold tracking-tighter text-[#001A33] leading-[1.0] mb-12 whitespace-nowrap ">
                Smart Helmet
                <span className="block text-[#0055FF]">
                  Safety System
                </span>
              </h1>
              
              <p className="text-base text-[#001A33]/80 mb-12 leading-relaxed max-w-xl">
                AI-powered safety monitoring system for riders. Real-time stress detection, 
                drowsiness alerts, and automatic emergency response.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => scrollToSection('scope')} 
                  className="inline-flex items-center px-6 py-3 bg-[#0055FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0044CC] transition-all duration-200 shadow-lg shadow-[#0055FF]/25"
                >
                  Explore Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('downloads')} 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#001A33] text-sm font-semibold rounded-lg border border-slate-200 hover:border-[#0055FF] hover:text-[#0055FF] transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Documents
                </button>
              </div>
            </div>
            
            {/* Right - Empty for background visibility */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ========== PROJECT SCOPE SECTION ========== */}
      <section id="scope" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="text-xs font-bold text-[#6366F1] uppercase tracking-wider mb-2">
                  Research Focus
                </div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                  Project Scope
                </h2>
                <p className="text-sm text-[#1a1a2e]/60 mb-8 leading-relaxed">
                  AI-driven multimodal smart helmet system for proactive rider safety and accident prevention.
                </p>
                
                {/* Sidebar Navigation */}
                <div className="space-y-1">
                  {[
                    { id: 'literature', num: '01', title: 'Literature Survey', color: 'blue' },
                    { id: 'gap', num: '02', title: 'Research Gap', color: 'violet' },
                    { id: 'problem', num: '03', title: 'Research Problem & Solution', color: 'rose' },
                    { id: 'objectives', num: '04', title: 'Research Objectives', color: 'emerald' },
                    { id: 'methodology', num: '05', title: 'Methodology', color: 'indigo' },
                    { id: 'technologies', num: '06', title: 'Technologies', color: 'violet' },
                  ].map((item) => {
                    const isActive = activeScopeSection === item.id;
                    const colorClasses = {
                      blue: { active: 'bg-blue-50 text-blue-600', badge: 'bg-blue-600', border: 'border-blue-600' },
                      violet: { active: 'bg-violet-50 text-violet-600', badge: 'bg-violet-600', border: 'border-violet-600' },
                      rose: { active: 'bg-rose-50 text-rose-500', badge: 'bg-rose-500', border: 'border-rose-500' },
                      emerald: { active: 'bg-emerald-50 text-emerald-600', badge: 'bg-emerald-600', border: 'border-emerald-600' },
                      indigo: { active: 'bg-indigo-50 text-indigo-600', badge: 'bg-indigo-600', border: 'border-indigo-600' },
                    };
                    const colors = colorClasses[item.color];
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveScopeSection(item.id);
                          const element = document.getElementById(`scope-${item.id}`);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive 
                            ? colors.active
                            : 'text-[#1a1a2e]/50 hover:bg-slate-50 hover:text-[#1a1a2e]/70'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          isActive ? `${colors.badge} text-white` : 'bg-slate-100 text-[#1a1a2e]/40'
                        }`}>
                          {item.num}
                        </span>
                        <span className="text-left">{item.title}</span>
                        {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-semibold ${
                      activeScopeSection === 'literature' ? 'text-blue-600' :
                      activeScopeSection === 'gap' ? 'text-violet-600' :
                      activeScopeSection === 'problem' ? 'text-rose-500' :
                      activeScopeSection === 'objectives' ? 'text-emerald-600' :
                      activeScopeSection === 'methodology' ? 'text-indigo-600' :
                      'text-violet-600'
                    }`}>Progress</span>
                    <span className="text-[#1a1a2e]/40">
                      {['literature', 'gap', 'problem', 'objectives', 'methodology', 'technologies'].indexOf(activeScopeSection) + 1}/6
                    </span>
                  </div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        activeScopeSection === 'literature' ? 'bg-blue-600' :
                        activeScopeSection === 'gap' ? 'bg-violet-600' :
                        activeScopeSection === 'problem' ? 'bg-rose-500' :
                        activeScopeSection === 'objectives' ? 'bg-emerald-600' :
                        activeScopeSection === 'methodology' ? 'bg-indigo-600' :
                        'bg-violet-600'
                      }`}
                      style={{ width: `${((['literature', 'gap', 'problem', 'objectives', 'methodology', 'technologies'].indexOf(activeScopeSection) + 1) / 6) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#1a1a2e]/40 mt-2">Scroll to see more</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-16">
              {/* Literature Survey - Blue Theme */}
              <div id="scope-literature" className="scroll-mt-24">
                <div className="text-sm font-extrabold text-blue-600 uppercase tracking-wider mb-3">
                  01. Literature Survey
                </div>
                <div className="border-l-2 border-blue-600 pl-6 mb-6">
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    Global road safety is shifting from passive protection to proactive, intelligent intervention for vulnerable road users, particularly motorcyclists. A comprehensive review of 50+ research papers was conducted, covering IoT-enabled smart helmets, EEG-based cognitive monitoring, IMU-driven risk detection, and multimodal sensor fusion systems.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-blue-700">Road Safety in Sri Lanka:</span> Motorcyclists account for a significant proportion of road fatalities, with risk factors including cognitive stress, fatigue, physiological strain, and hazardous road conditions.
                    </p>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-blue-700">Existing Solutions:</span> Current systems primarily focus on post-crash alerting and basic vital sign monitoring, lacking comprehensive integration.
                    </p>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-blue-700">EEG & Wearable Tech:</span> Recent advances in wearable EEG, edge-based machine learning, and real-time sensor fusion show promising results for cognitive monitoring.
                    </p>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-blue-700">Fragmented Systems:</span> Most smart helmet solutions remain fragmented, addressing only isolated aspects rather than integrating multiple risk factors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Gap - Purple/Violet Theme */}
              <div id="scope-gap" className="scroll-mt-24">
                <div className="text-sm font-extrabold text-violet-600 uppercase tracking-wider mb-3">
                  02. Research Gap
                </div>
                <div className="border-l-2 border-violet-600 pl-6 mb-6">
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    Despite progress in smart helmet technology, several critical gaps persist. Existing solutions fail to integrate physiological, cognitive, kinematic, and geospatial risk factors into a unified safety platform.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-violet-50/50 rounded-xl p-5 border border-violet-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-violet-700">Isolated System Approaches:</span> Most systems address only isolated aspects (e.g., physiological monitoring or post-crash notification) rather than integrating multiple risk factors holistically.
                    </p>
                  </div>
                  <div className="bg-violet-50/50 rounded-xl p-5 border border-violet-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-violet-700">Limited EEG Integration:</span> Lack of real-time EEG for cognitive stress and fatigue detection in actual riding conditions remains a significant gap.
                    </p>
                  </div>
                  <div className="bg-violet-50/50 rounded-xl p-5 border border-violet-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-violet-700">No Post-Journey Analytics:</span> Insufficient integration of post-journey risk assessment and danger zone prediction using historical ride data.
                    </p>
                  </div>
                  <div className="bg-violet-50/50 rounded-xl p-5 border border-violet-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-violet-700">Environmental Context Gap:</span> Very few solutions integrate environmental context (weather and traffic) with rider state monitoring for comprehensive safety.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Problem & Solution - Rose/Coral Theme */}
              <div id="scope-problem" className="scroll-mt-24">
                <div className="text-sm font-extrabold text-rose-500 uppercase tracking-wider mb-3">
                  03. Research Problem & Solution
                </div>
                <div className="border-l-2 border-rose-500 pl-6 mb-6">
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    Motorcyclists in Sri Lanka face elevated risks due to cognitive stress, fatigue, physiological anomalies, and dynamic road hazards, yet current helmets offer only passive protection.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-rose-600">Research Problem:</span> Current helmets provide passive protection only. Riders face risks from stress, fatigue, health issues, and road hazards without real-time monitoring or alerts.
                    </p>
                  </div>
                  <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-rose-600">Member1 - Health Monitoring:</span> Real-time physiological health monitoring with AI-based cardiac risk prediction using smartwatch sensors.
                    </p>
                  </div>
                  <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-rose-600">Member2 - EEG Detection:</span> EEG-based cognitive stress and fatigue detection with hybrid physiological fallback for comprehensive monitoring.
                    </p>
                  </div>
                  <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-rose-600">Member3 & 4 - Risk Analytics:</span> IMU-based risky event detection and route-level danger zone prediction using weather, traffic, and historical data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Objectives - Emerald/Mint Theme */}
              <div id="scope-objectives" className="scroll-mt-24">
                <div className="text-sm font-extrabold text-emerald-600 uppercase tracking-wider mb-3">
                  04. Research Objectives
                </div>
                <div className="border-l-2 border-emerald-600 pl-6 mb-6">
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    The primary goal is to develop an intelligent, multimodal smart helmet system for proactive rider safety with four integrated core modules.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-emerald-700">Member1 - Health Monitoring:</span> Develop real-time physiological health monitoring with AI-based cardiac risk assessment using MAX30102 and MLX90614 sensors.
                    </p>
                  </div>
                  <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-emerald-700">Member2 - EEG Detection:</span> Implement EEG-based cognitive stress and fatigue detection with hybrid physiological fallback using NeuroSky headset.
                    </p>
                  </div>
                  <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-emerald-700">Member3 - IMU Analytics:</span> Create IMU-based risky riding event detection and post-journey risk analytics with danger zone clustering using MPU6050.
                    </p>
                  </div>
                  <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      <span className="font-semibold text-emerald-700">Member4 - Danger Prediction:</span> Build predictive danger zone module integrating historical data, weather, and traffic conditions with Google Maps API.
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                  <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                    <span className="font-semibold text-emerald-700">System Integration:</span> Integrate all modules into a unified Flutter application with multilingual voice guidance (FlutterTTS, PicoVoice) and personalized safety reports with Firebase backend.
                  </p>
                </div>
              </div>

              {/* Methodology - Indigo Theme */}
              <div id="scope-methodology" className="scroll-mt-24">
                <div className="text-sm font-extrabold text-indigo-600 uppercase tracking-wider mb-3">
                  05. Methodology
                </div>
                <div className="border-l-2 border-indigo-600 pl-6 mb-6">
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    The methodology combines hardware integration, edge computing, and mobile AI development to create a comprehensive smart helmet system.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-2">Hardware Integration</h4>
                    <p className="text-xs text-[#1a1a2e]/60">NeuroSky EEG headset, ESP32 smartwatch and helmet with MPU6050 IMU, GPS, MAX30102 and MLX90614 sensors.</p>
                  </div>
                  <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-3">
                      <Brain className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-2">ML Model Development</h4>
                    <p className="text-xs text-[#1a1a2e]/60">TensorFlow Lite models for stress detection (1D-CNN), risk classification (Keras NN), and cardiac risk assessment.</p>
                  </div>
                  <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-2">System Validation</h4>
                    <p className="text-xs text-[#1a1a2e]/60">Real-world testing on Colombo roads, performance benchmarking, and user acceptance evaluation.</p>
                  </div>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                    <h4 className="font-semibold text-[#1a1a2e] mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      Data Processing
                    </h4>
                    <p className="text-xs text-[#1a1a2e]/60">Real-time signal processing, FFT for EEG bands, feature engineering for IMU data, hybrid edge-mobile processing.</p>
                  </div>
                  <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                    <h4 className="font-semibold text-[#1a1a2e] mb-2 flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-indigo-600" />
                      Communication
                    </h4>
                    <p className="text-xs text-[#1a1a2e]/60">Bluetooth Low Energy communication between sensors and Flutter app, Firebase Firestore backend.</p>
                  </div>
                </div>
              </div>

              {/* Technologies - Violet Theme */}
              <div id="scope-technologies" className="scroll-mt-24">
                <div className="text-sm font-extrabold text-violet-600 uppercase tracking-wider mb-3">
                  06. Technologies
                </div>
                <div className="border-l-2 border-violet-600 pl-6 mb-6">
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    The system is built using modern embedded systems, machine learning frameworks, and mobile development technologies.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Embedded Systems</h4>
                    <div className="flex flex-wrap gap-2">
                      {['ESP32', 'Arduino IDE', 'ESP-IDF', 'NeuroSky EEG', 'MPU6050 IMU', 'MAX30102', 'MLX90614', 'NEO-6M GPS'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-violet-50/50 rounded-lg text-sm font-medium text-violet-700 border border-violet-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Machine Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      {['TensorFlow Lite', 'PyTorch', '1D-CNN', 'Keras', 'Random Forest', 'Scikit-learn'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-violet-50/50 rounded-lg text-sm font-medium text-violet-700 border border-violet-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Mobile & Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'Dart', 'Firebase Firestore', 'Google Maps API', 'OpenWeatherMap'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-violet-50/50 rounded-lg text-sm font-medium text-violet-700 border border-violet-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Voice & Communication</h4>
                    <div className="flex flex-wrap gap-2">
                      {['FlutterTTS', 'PicoVoice', 'Bluetooth Low Energy', 'WebSockets'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-violet-50/50 rounded-lg text-sm font-medium text-violet-700 border border-violet-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MILESTONES SECTION - Timeline ========== */}
      <section id="milestones" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-bold text-[#F26522] uppercase tracking-wider mb-3">
              MILESTONES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Project Milestones
            </h2>
            <p className="text-[#1a1a2e]/60 max-w-2xl leading-relaxed">
              A structured timeline of all research assessments — including dates, marks allocation, deliverables, and current status. Click any milestone to expand details.
            </p>
          </div>

          {/* Summary Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700">3 Completed</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-sm font-semibold text-amber-700">1 Upcoming</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
              <FileText className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-semibold text-slate-600">1 Pending</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-200" />
            
            <div className="space-y-6">
              {[
                {
                  id: 1,
                  title: 'Project Proposal',
                  status: 'Completed',
                  date: 'September 2025',
                  marks: 'Marks Allocated: 6%',
                  color: 'emerald',
                  iconColor: 'bg-[#F26522]',
                  description: 'The project proposal marks the formal beginning of the research. The team presented the problem domain, motivation, preliminary literature review, proposed solution outline, and project plan to the panel.',
                  deliverables: [
                    { text: 'Proposal document (≈10 pages)', done: true },
                    { text: 'Project charter', done: true },
                    { text: 'Proposal presentation slides', done: true },
                    { text: 'Gantt chart & timeline', done: true }
                  ]
                },
                {
                  id: 2,
                  title: 'Progress Presentation 1',
                  status: 'Completed',
                  date: 'January 2026',
                  marks: 'Marks Allocated: 15%',
                  color: 'emerald',
                  iconColor: 'bg-[#F26522]',
                  description: 'First progress review covering initial research findings, methodology development, and preliminary results.',
                  deliverables: [
                    { text: 'Progress report document', done: true },
                    { text: 'Presentation slides', done: true },
                    { text: 'Preliminary findings', done: true }
                  ]
                },
                {
                  id: 3,
                  title: 'Progress Presentation 2',
                  status: 'Completed',
                  date: 'March 2026',
                  marks: 'Marks Allocated: 18%',
                  color: 'emerald',
                  iconColor: 'bg-[#F26522]',
                  description: 'Second progress review with substantial implementation progress and refined methodology.',
                  deliverables: [
                    { text: 'Updated progress report', done: true },
                    { text: 'System prototype demo', done: true },
                    { text: 'Testing results', done: true }
                  ]
                },
                {
                  id: 4,
                  title: 'Final presentation',
                  status: 'Upcoming',
                  date: 'May 2026',
                  marks: 'Marks Allocated: 30%',
                  color: 'amber',
                  iconColor: 'bg-amber-400',
                  description: 'Final project presentation demonstrating complete system implementation, testing results, and research outcomes.',
                  deliverables: [
                    { text: 'Final thesis document', done: false },
                    { text: 'Final presentation', done: false },
                    { text: 'System demonstration', done: false }
                  ]
                },
                {
                  id: 5,
                  title: 'Viva',
                  status: 'Pending',
                  date: 'May 2026',
                  marks: 'Marks Allocated: 10%',
                  color: 'slate',
                  iconColor: 'bg-slate-300',
                  description: 'Oral defense and Q&A session covering all aspects of the research project.',
                  deliverables: [
                    { text: 'Viva preparation', done: false },
                    { text: 'Demonstration setup', done: false }
                  ]
                }
              ].map((milestone) => {
                const isExpanded = expandedMilestones[milestone.id];
                const isCompleted = milestone.status === 'Completed';
                const isUpcoming = milestone.status === 'Upcoming';
                
                const toggleExpand = () => {
                  setExpandedMilestones(prev => ({
                    ...prev,
                    [milestone.id]: !prev[milestone.id]
                  }));
                };
                
                return (
                  <div key={milestone.id} className="relative flex gap-4">
                    {/* Timeline Circle Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${milestone.iconColor} flex items-center justify-center shadow-lg`}>
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                      {/* Card Header - Always Visible */}
                      <div 
                        className="p-5 cursor-pointer hover:bg-slate-50/50 transition-colors"
                        onClick={toggleExpand}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {/* Status Badge */}
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                                isCompleted 
                                  ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                                  : isUpcoming
                                    ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                              }`}>
                                {isCompleted && <CheckCircle className="w-3 h-3" />}
                                {isUpcoming && <Clock className="w-3 h-3" />}
                                {!isCompleted && !isUpcoming && <FileText className="w-3 h-3" />}
                                {milestone.status}
                              </span>
                              
                              {/* Date & Marks */}
                              <span className="flex items-center gap-1 text-xs text-slate-500">
                                <Calendar className="w-3 h-3" />
                                {milestone.date}
                              </span>
                              <span className="text-xs text-slate-400">•</span>
                              <span className="text-xs text-slate-500">{milestone.marks}</span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-[#1a1a2e]">
                              {milestone.title}
                            </h3>
                          </div>
                          
                          {/* Expand Arrow */}
                          <div className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronRight className="w-5 h-5 rotate-90" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className={`border-t border-slate-100 transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="p-5">
                          <p className="text-sm text-[#1a1a2e]/70 mb-5 leading-relaxed">
                            {milestone.description}
                          </p>
                          
                          {/* Key Deliverables */}
                          <div>
                            <h4 className="text-xs font-bold text-[#F26522] uppercase tracking-wider mb-3">
                              Key Deliverables
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {milestone.deliverables.map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                    item.done ? 'bg-emerald-500' : 'bg-slate-200'
                                  }`}>
                                    {item.done && <CheckCircle className="w-3 h-3 text-white" />}
                                  </div>
                                  <span className={`text-sm ${item.done ? 'text-[#1a1a2e]' : 'text-slate-400'}`}>
                                    {item.text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DOWNLOADS SECTION ========== */}
      <section id="downloads" className="py-20 lg:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0055FF]/10 text-[#0055FF] text-xs font-semibold mb-4">
                <FileText className="w-3.5 h-3.5" />
                Resources & Artifacts
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#001A33] mb-4">
                Research Documents
              </h2>
              <p className="text-[#001A33]/60 max-w-xl">
                Access all project deliverables including research papers, technical documentation, and presentation slides.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex items-center gap-4 text-sm text-[#001A33]/50">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                {documents.filter(d => d.status === 'Available').length + presentations.filter(p => p.status === 'Available').length} Available
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                {documents.filter(d => d.status === 'Coming Soon').length + presentations.filter(p => p.status === 'Coming Soon').length} Coming Soon
              </span>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-[#001A33] mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              Research Documents
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {documents.map((doc, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 border border-slate-400 hover:border-[#001A33] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                >
                  {/* Icon & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors">
                      <FileText className="w-6 h-6 text-slate-400 group-hover:text-[#0055FF] transition-colors" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      doc.status === 'Available' 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                        : 'bg-amber-50 text-amber-600 border border-amber-100'
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-bold text-[#001A33] mb-2 line-clamp-1">{doc.title}</h4>
                  <p className="text-sm text-[#001A33]/50 mb-4 line-clamp-2">{doc.desc}</p>
                  
                  {/* Meta & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-xs text-[#001A33]/40">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-medium">PDF</span>
                      <span>{doc.size}</span>
                    </div>
                    {doc.file !== '#' ? (
                      <a
                        href={`/${doc.file}`}
                        download
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0055FF] hover:text-[#0044CC] transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    ) : (
                      <span className="text-sm text-slate-300 font-medium flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presentations Grid */}
          <div>
            <h3 className="text-lg font-bold text-[#001A33] mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Presentation className="w-4 h-4 text-white" />
              </div>
              Presentations
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {presentations.map((presentation, index) => {
                const Icon = presentation.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300"
                  >
                    {/* Image Header with Overlays */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={presentation.image}
                        alt={presentation.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      />
                      {/* PowerPoint/PDF Icon Badge - Bottom Left */}
                      <div className="absolute bottom-3 left-3 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {/* Status Badge - Top Right */}
                      <div className={`absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        presentation.status === 'Available'
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {presentation.status === 'Available' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                        {presentation.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {presentation.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-2">
                        {presentation.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {presentation.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {presentation.tags.length > 2 && (
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                            +{presentation.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Footer with Date, Slides, and View Button */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-3 text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-xs font-medium">{presentation.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-xs font-medium">{presentation.slides}</span>
                          </div>
                        </div>

                        {presentation.filename ? (
                          <a
                            href={`/presentations/${presentation.filename}`}
                            download
                            className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            Download
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex items-center gap-1.5 px-4 py-2 bg-slate-200 text-slate-400 text-xs font-semibold rounded-lg cursor-not-allowed"
                          >
                            <Clock className="w-3.5 h-3.5" />
                            Soon
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section id="team" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001A33] mb-4">
              Meet Our Team
            </h2>
            <p className="text-[#001A33]/60 max-w-2xl mx-auto">
              Dedicated researchers and supervisors leading the Smart Helmet project
            </p>
          </div>

          {/* Supervisors */}
          <div className="mb-16">
            <h3 className="text-xs font-bold text-[#001A33]/40 uppercase tracking-wider mb-6">Supervisors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {supervisors.map((supervisor, index) => {
                const colors = accentColors[supervisor.accent];
                return (
                  <div key={index} className="group bg-white rounded-2xl p-6 border border-slate-300 card-hover text-center">
                    <div className={`w-full h-32 rounded-xl ${colors.bg} mb-4 flex items-center justify-center overflow-hidden`}>
                      <img
                        src={supervisor.image}
                        alt={supervisor.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <h4 className="font-bold text-[#001A33] mb-1">{supervisor.name}</h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colors.bg} ${colors.icon}`}>
                      {supervisor.title}
                    </span>
                    <p className="text-sm text-[#001A33]/60 mb-1">{supervisor.institution}</p>
                    <p className="text-xs text-slate-400 mb-4">{supervisor.department}</p>
                    
                  </div>
                );
              })}
            </div>
          </div>

          {/* Group Members */}
          <div>
            <h3 className="text-xs font-bold text-[#001A33]/40 uppercase tracking-wider mb-6">Group Members</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => {
                const colors = accentColors[member.accent];
                return (
                  <div key={index} className="group bg-white rounded-2xl p-6 border border-slate-300 card-hover text-center">
                    <div className={`w-full h-28 rounded-xl ${colors.bg} mb-4 flex items-center justify-center overflow-hidden`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <h4 className="font-bold text-[#001A33] mb-1">{member.name}</h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${colors.bg} ${colors.icon}`}>
                      {member.title}
                    </span>
                    <p className="text-xs text-slate-400 mb-4">{member.type}</p>
                    <a 
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-[#001A33] hover:border-[#0055FF] hover:text-[#0055FF] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS SECTION ========== */}
      <section id="achievements" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001A33] mb-4">
              Our Achievements
            </h2>
            <p className="text-[#001A33]/60 max-w-2xl mx-auto">
              Recognitions and milestones in our Smart Helmet research journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, value: '1', label: 'Research Papers', color: 'blue' },
              { icon: Trophy, value: '0', label: 'Awards Won', color: 'emerald' },
              { icon: Users, value: '4', label: 'Team Members', color: 'violet' },
              { icon: Target, value: '95%', label: 'Accuracy Rate', color: 'rose' },
            ].map((achievement, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  achievement.color === 'blue' ? 'bg-blue-100' :
                  achievement.color === 'emerald' ? 'bg-emerald-100' :
                  achievement.color === 'violet' ? 'bg-violet-100' :
                  'bg-rose-100'
                }`}>
                  <achievement.icon className={`w-8 h-8 ${
                    achievement.color === 'blue' ? 'text-blue-600' :
                    achievement.color === 'emerald' ? 'text-emerald-600' :
                    achievement.color === 'violet' ? 'text-violet-600' :
                    'text-rose-600'
                  }`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${
                  achievement.color === 'blue' ? 'text-blue-600' :
                  achievement.color === 'emerald' ? 'text-emerald-600' :
                  achievement.color === 'violet' ? 'text-violet-600' :
                  'text-rose-600'
                }`}>
                  {achievement.value}
                </div>
                <div className="text-sm font-medium text-[#001A33]/60">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Achievements */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Best Research Project 2025',
                description: 'Awarded for innovative approach to rider safety using AI and IoT technologies',
                date: 'December 2025',
                icon: Trophy
              },
              {
                title: 'IEEE Conference Publication',
                description: 'Research paper on EEG-based stress detection published in IEEE conference',
                date: 'November 2025',
                icon: FileSpreadsheet
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#0055FF] hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#001A33] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#001A33]/60 mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001A33] mb-4">
              Project Gallery
            </h2>
            <p className="text-[#001A33]/60 max-w-2xl mx-auto">
              Visual showcase of our Smart Helmet system development journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: '/helmet.png', title: 'Helmet Prototype', category: 'Hardware' },
              { image: '/eeg.png', title: 'EEG Sensor Setup', category: 'Sensors' },
              { image: '/watch.png', title: 'Smart Watch Prototype', category: 'Hardware' },
              { image: '/testing.jpeg', title: 'Field Testing', category: 'Testing' },
              { image: '/team.png', title: 'Team Collaboration', category: 'Team' },
              { image: '/system.png', title: 'System Architecture', category: 'Design' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-200 cursor-pointer"
                onClick={() => setImageViewer({ open: true, image: item.image, title: item.title })}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEEDBACKS SECTION ========== */}
      <section id="feedbacks" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001A33] mb-4">
              What People Say
            </h2>
            <p className="text-[#001A33]/60 max-w-2xl mx-auto">
              Feedback from experts and users about our Smart Helmet system
            </p>
          </div>

          {/* Feedback Slideshow */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${feedbackIndex * 33.333}%)` }}
              >
                {[
                  {
                    name: 'Chamod Gallage',
                    role: 'PickMe Rider',
                    feedback: 'While the helmet is innovative, I found the built-in speaker uncomfortable during long rides. However, the voice guidance from the mobile app is much more user-friendly and easier to hear.',
                    rating: 3,
                    image: '/chamod.png'
                  },
                  {
                    name: 'Amila Lakshan',
                    role: 'Uber Rider',
                    feedback: 'The Smart Helmet has transformed my daily rides. The stress detection feature helps me stay alert, and the accident alert system gives me peace of mind on busy roads.',
                    rating: 5,
                    image: '/lakshan.png'
                  },
                  {
                    name: 'Sadeepa Chathuskara',
                    role: 'PickMe Rider',
                    feedback: 'Excellent safety features! The real-time monitoring and voice alerts have significantly improved my riding experience. The mobile app is intuitive and very helpful.',
                    rating: 5,
                    image: '/sadeepa.png'
                  },
                  {
                    name: 'Dr. Sajith Perera',
                    role: 'Safety Researcher',
                    feedback: 'A remarkable achievement in rider safety technology. The integration of EEG monitoring with IoT creates a comprehensive safety ecosystem for motorcyclists.',
                    rating: 5,
                    image: '/sajith.jpeg'
                  }
                ].map((item, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-3">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0055FF] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < item.rating ? 'text-orange-500' : 'text-slate-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[#001A33]/80 mb-6 leading-relaxed text-sm">
                        "{item.feedback}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="#3B82F6" width="100" height="100"/><text x="50" y="60" font-size="40" text-anchor="middle" fill="white">' + item.name.charAt(0) + '</text></svg>')}`;
                          }}
                        />
                        <div>
                          <h4 className="font-bold text-[#001A33] text-sm">{item.name}</h4>
                          <p className="text-xs text-[#001A33]/60">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setFeedbackIndex(feedbackIndex > 0 ? feedbackIndex - 1 : 0)}
              disabled={feedbackIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 text-slate-600 rotate-180" />
            </button>
            <button
              onClick={() => setFeedbackIndex(feedbackIndex < 1 ? feedbackIndex + 1 : 1)}
              disabled={feedbackIndex === 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setFeedbackIndex(dot)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    feedbackIndex === dot ? 'bg-[#0055FF] w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001A33] mb-4">
                Get in Touch
              </h2>
              <p className="text-[#001A33]/60 mb-8">
                Have questions about our research? We'd love to hear from you.
              </p>
              
              <form 
                action="https://formspree.io/f/xnjwpgar" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#001A33] mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#001A33] placeholder-slate-400 focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#001A33] mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#001A33] placeholder-slate-400 focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#001A33] mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#001A33] placeholder-slate-400 focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#001A33] mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#001A33] placeholder-slate-400 focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0055FF] text-white font-semibold rounded-xl hover:bg-[#0044CC] transition-all duration-200 shadow-lg shadow-[#0055FF]/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <div className="bg-[#001A33] rounded-2xl p-8 text-white h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-white/60 text-sm">yasiruln215@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-white/60 text-sm">+94 70 387 5215</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-white/60 text-sm">
                        Sri Lanka Institute of Information Technology<br />
                        Malabe, Colombo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-4">Follow our research progress</p>
                  <div className="flex gap-3">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                      <a 
                        key={social}
                        href="#"
                        className="px-4 py-2 rounded-lg bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Smart Helmet Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-xl font-bold text-[#001A33]">SMARTHELMET</span>
              </div>
              <p className="text-[#001A33]/60 text-sm leading-relaxed max-w-md">
                A university research project engineering a real-time, AI-driven safety monitoring system for Sri Lanka's public transport network powered by Edge AI, IoT sensors, and cloud analytics.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-[#001A33] uppercase tracking-wider mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <div className="space-y-2">
                  {['Home', 'Domain', 'Milestones', 'Documents'].map((item) => (
                    <button 
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                      className="block text-sm text-[#001A33]/60 hover:text-[#F26522] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  {['Slides', 'About Us', 'Contact Us'].map((item) => (
                    <button 
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace(' ', '-'))}
                      className="block text-sm text-[#001A33]/60 hover:text-[#F26522] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#001A33]/40 text-sm">© 2026 Smart Helmet Research Team. All rights reserved.</p>
            <p className="text-[#001A33]/40 text-sm">Designed with precision & passion.</p>
          </div>
        </div>
      </footer>

      {/* Image Viewer Modal */}
      {imageViewer.open && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setImageViewer({ open: false, image: null, title: '' })}
        >
          <button 
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setImageViewer({ open: false, image: null, title: '' });
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageViewer.image}
              alt={imageViewer.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">{imageViewer.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
