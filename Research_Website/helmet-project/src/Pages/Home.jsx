import { BookOpen, Target, Lightbulb, Shield, Brain, Activity, Zap, Wifi, Smartphone, ChevronRight, Presentation, Download, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Next-Gen Safety Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Smart Helmet
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Research
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-xl mb-8 leading-relaxed">
                AI-powered safety and health monitoring system revolutionizing rider protection through predictive technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/documents" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  Explore Research
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-teal-500/50 hover:text-teal-400 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-fade-in-up">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse-glow" />
                
                {/* Logo Container */}
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="/logo.png" 
                    alt="Smart Helmet Logo" 
                    className="w-full h-full object-contain animate-float"
                  />
                  
                  {/* Tech Indicators */}
                  <div className="absolute -right-4 top-1/4 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl p-3 shadow-xl">
                    <Brain className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="absolute -left-4 bottom-1/3 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl p-3 shadow-xl">
                    <Wifi className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="absolute -right-2 bottom-1/4 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl p-3 shadow-xl">
                    <Smartphone className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-teal-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3', label: 'Core Technologies' },
              { value: '24/7', label: 'Monitoring' },
              { value: '<1s', label: 'Alert Response' },
              { value: '99%', label: 'Accuracy Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Project Abstract</h2>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none text-slate-400 leading-relaxed space-y-6">
              <p className="text-xl">
                The Smart Helmet research project aims to revolutionize rider safety through an AI-powered helmet system. Our innovative solution integrates real-time stress detection, drowsiness monitoring, and automatic accident alerting to protect motorcyclists and industrial workers.
              </p>
              <p>
                Using advanced EEG sensors, computer vision algorithms, and IoT connectivity, the Smart Helmet continuously monitors the wearer's physiological state and environmental conditions. When critical thresholds are detected, the system automatically sends emergency alerts to designated contacts and emergency services.
              </p>
              <p>
                This research contributes to the growing field of wearable safety technology, addressing the critical need for proactive accident prevention rather than reactive response. Our comprehensive approach combines hardware engineering, machine learning, and mobile application development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Advanced technologies working together to create a comprehensive safety ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Real-time accident detection with automatic emergency alert system and GPS location tracking.',
                color: 'from-teal-500 to-emerald-500',
              },
              {
                icon: Brain,
                title: 'AI-Powered',
                description: 'Machine learning algorithms for stress and drowsiness detection with predictive analytics.',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Activity,
                title: 'Health Monitoring',
                description: 'Continuous vital signs tracking with EEG sensor integration and biometric analysis.',
                color: 'from-teal-500 to-cyan-500',
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Goals & Innovation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 p-8 md:p-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Research Goals</h3>
                <p className="text-teal-100 leading-relaxed">
                  Develop a comprehensive safety solution that reduces accident fatalities through predictive technology and rapid emergency response. Our goal is to create technology that anticipates danger before it happens.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 md:p-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-cyan-100 leading-relaxed">
                  First-of-its-kind integration of EEG sensors, computer vision, and IoT for comprehensive rider safety monitoring. We're pushing the boundaries of what's possible in wearable technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Download Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Download Presentations</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Access our project presentations and proposal documents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Proposal Presentation */}
            <a 
              href="/presentations/Proposal-Presentation1.pptx"
              download
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <Download className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proposal Presentation</h3>
              <p className="text-slate-400 text-sm mb-4">Initial project proposal outlining research objectives and AI methodology.</p>
              <div className="flex items-center text-teal-400 text-sm font-medium">
                <span>Download .pptx</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Progress Presentation 1 */}
            <a 
              href="/presentations/25-26J-294-PP1.pdf"
              download
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Download className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Progress Presentation 1</h3>
              <p className="text-slate-400 text-sm mb-4">First progress review showcasing stress detection and EEG sensor integration.</p>
              <div className="flex items-center text-cyan-400 text-sm font-medium">
                <span>Download .pdf</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Progress Presentation 2 */}
            <a 
              href="/presentations/25-26J 294 - PP2.pptx"
              download
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <Download className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Progress Presentation 2</h3>
              <p className="text-slate-400 text-sm mb-4">Second progress review demonstrating drowsiness detection and accident alerting.</p>
              <div className="flex items-center text-teal-400 text-sm font-medium">
                <span>Download .pptx</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/presentations" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
            >
              <span>View all presentations</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Research</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Dive deeper into our methodology, findings, and technical documentation.
              </p>
              <a 
                href="/documents" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-slate-100 transition-colors duration-300"
              >
                View Documentation
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
