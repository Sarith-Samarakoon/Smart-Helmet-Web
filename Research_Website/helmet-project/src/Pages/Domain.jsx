import { useEffect, useRef } from 'react';
import { BookOpen, Search, AlertTriangle, Target, Workflow, Cpu } from 'lucide-react';

const Domain = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
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

  const sections = [
    {
      icon: Search,
      title: 'Literature Survey',
      color: 'blue',
      content: 'A comprehensive review of existing wearable safety devices, EEG-based stress detection systems, and IoT-enabled emergency response solutions. We analyzed current helmet technologies, driver monitoring systems, and real-world accident statistics to establish the theoretical foundation for integrating AI with rider safety equipment.'
    },
    {
      icon: AlertTriangle,
      title: 'Research Gap',
      color: 'orange',
      content: 'Existing helmets provide passive protection but lack real-time physiological monitoring and proactive accident prevention. No current solution combines EEG-based stress detection, computer vision for drowsiness monitoring, and automatic emergency alerting in a single integrated system for motorcyclists.'
    },
    {
      icon: BookOpen,
      title: 'Research Problem',
      color: 'purple',
      content: 'How can we design an intelligent helmet system that continuously monitors rider physiological state, detects early signs of stress and fatigue, prevents accidents through timely alerts, and automatically notifies emergency services when accidents occur?'
    },
    {
      icon: Target,
      title: 'Research Objectives',
      color: 'emerald',
      content: '1) Achieve 95%+ accuracy in stress and drowsiness detection using EEG and computer vision. 2) Implement real-time emergency alert system with <10 second response time. 3) Develop mobile app for rider monitoring and emergency contact notification. 4) Validate system effectiveness through field testing.'
    },
    {
      icon: Workflow,
      title: 'Methodology',
      color: 'cyan',
      content: 'Our methodology combines hardware prototyping with AI model development. We use EEG sensors for brainwave analysis, OpenCV for eye tracking, machine learning algorithms (Random Forest, SVM) for classification, and GSM/GPS modules for emergency communication. System validation through controlled testing and real-world pilot studies.'
    },
    {
      icon: Cpu,
      title: 'Technologies Used',
      color: 'indigo',
      content: 'Python, TensorFlow, OpenCV for AI and computer vision. Arduino/Raspberry Pi for hardware integration. React Native for mobile app development. EEG sensors, accelerometers, GSM modules for hardware components. Firebase for real-time data synchronization and cloud storage.'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={addToRefs} className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            Research Framework
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Domain</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Smart Helmet Research Framework & AI Methodology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                ref={addToRefs}
                className="reveal group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl border-2 ${colorClasses[section.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={addToRefs} className="reveal mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Smart Helmet Research Framework</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              Our research follows a structured approach integrating AI, IoT, and biomedical engineering to create 
              a comprehensive safety solution. Each component is carefully designed to contribute to rider safety, 
              ensuring real-time monitoring and rapid emergency response for accident prevention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
