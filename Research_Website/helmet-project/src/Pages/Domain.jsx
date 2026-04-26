import { BookOpen, Search, AlertTriangle, Target, Workflow, Cpu } from 'lucide-react';

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
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    cyan: 'bg-cyan-100 text-cyan-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Smart Helmet Logo" 
              className="w-20 h-20 object-contain animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text-animated">
            Research Domain
          </h1>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Smart Helmet Research Framework & AI Methodology
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover-lift transition-all duration-300 animate-scale-in"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full ${colorClasses[section.color]}`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Smart Helmet Research Framework</h3>
          <p className="text-teal-100 leading-relaxed">
            Our research follows a structured approach integrating AI, IoT, and biomedical engineering to create 
            a comprehensive safety solution. Each component is carefully designed to contribute to rider safety, 
            ensuring real-time monitoring and rapid emergency response for accident prevention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Domain;
