import { BookOpen, Search, AlertTriangle, Target, Workflow, Cpu, ChevronRight } from 'lucide-react';

const Domain = () => {
  const sections = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Literature Survey',
      color: 'blue',
      content: 'A comprehensive review of existing wearable safety devices, EEG-based stress detection systems, and IoT-enabled emergency response solutions. We analyzed current helmet technologies, driver monitoring systems, and real-world accident statistics to establish the theoretical foundation for integrating AI with rider safety equipment.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Research Gap',
      color: 'red',
      content: 'Existing helmets provide passive protection but lack real-time physiological monitoring and proactive accident prevention. No current solution combines EEG-based stress detection, computer vision for drowsiness monitoring, and automatic emergency alerting in a single integrated system for motorcyclists.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Research Problem',
      color: 'purple',
      content: 'How can we design an intelligent helmet system that continuously monitors rider physiological state, detects early signs of stress and fatigue, prevents accidents through timely alerts, and automatically notifies emergency services when accidents occur?'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Research Objectives',
      color: 'green',
      content: '1) Achieve 95%+ accuracy in stress and drowsiness detection using EEG and computer vision. 2) Implement real-time emergency alert system with <10 second response time. 3) Develop mobile app for rider monitoring and emergency contact notification. 4) Validate system effectiveness through field testing.'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Methodology',
      color: 'orange',
      content: 'Our methodology combines hardware prototyping with AI model development. We use EEG sensors for brainwave analysis, OpenCV for eye tracking, machine learning algorithms (Random Forest, SVM) for classification, and GSM/GPS modules for emergency communication. System validation through controlled testing and real-world pilot studies.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Technologies Used',
      color: 'cyan',
      content: 'Python, TensorFlow, OpenCV for AI and computer vision. Arduino/Raspberry Pi for hardware integration. React Native for mobile app development. EEG sensors, accelerometers, GSM modules for hardware components. Firebase for real-time data synchronization and cloud storage.'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-xl" />
              <img 
                src="/logo.png" 
                alt="Smart Helmet Logo" 
                className="relative w-20 h-20 object-contain animate-float"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Domain</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Smart Helmet Research Framework & AI Methodology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1 animate-scale-in"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl border ${colorClasses[section.color]}`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Smart Helmet Research Framework</h3>
            <p className="text-teal-100 leading-relaxed">
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
