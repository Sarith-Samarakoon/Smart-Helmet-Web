import { useEffect, useRef } from 'react';
import { Presentation, CheckCircle, Calendar, Download, Clock, FileText, MonitorPlay } from 'lucide-react';

const Presentations = () => {
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

  const presentations = [
    {
      title: 'Smart Helmet Proposal Presentation',
      description: 'Initial project proposal presentation outlining Smart Helmet research objectives, AI methodology, and safety monitoring approach',
      date: 'Available Now',
      status: 'Available',
      filename: 'Proposal-Presentation1.pptx',
      icon: Presentation,
      color: 'blue',
      type: '.pptx'
    },
    {
      title: 'Progress Presentation 1',
      description: 'First progress review showcasing stress detection implementation and EEG sensor integration',
      date: 'Available Now',
      status: 'Available',
      filename: '25-26J-294-PP1.pdf',
      icon: FileText,
      color: 'cyan',
      type: '.pdf'
    },
    {
      title: 'Progress Presentation 2',
      description: 'Second progress review demonstrating drowsiness detection and accident alerting system',
      date: 'Available Now',
      status: 'Available',
      filename: '25-26J 294 - PP2.pptx',
      icon: Presentation,
      color: 'blue',
      type: '.pptx'
    },
    {
      title: 'Final Presentation',
      description: 'Comprehensive final presentation covering complete Smart Helmet system, results, and safety impact analysis',
      date: 'Coming Soon',
      status: 'In Progress',
      filename: null,
      icon: Presentation,
      color: 'cyan',
      type: '.pptx'
    }
  ];

  const colorClasses = {
    blue: {
      icon: 'from-blue-500 to-blue-600',
      badge: 'bg-blue-100 text-blue-600 border-blue-200',
      button: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      bg: 'bg-blue-50 border-blue-100',
      text: 'text-blue-600'
    },
    cyan: {
      icon: 'from-cyan-500 to-blue-500',
      badge: 'bg-cyan-100 text-cyan-600 border-cyan-200',
      button: 'from-cyan-600 to-cyan-500 shadow-cyan-500/25',
      bg: 'bg-cyan-50 border-cyan-100',
      text: 'text-cyan-600'
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={addToRefs} className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <MonitorPlay className="w-4 h-4" />
            Presentations
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Presentations</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access Smart Helmet presentation slides and materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {presentations.map((presentation, index) => {
            const Icon = presentation.icon;
            const colors = colorClasses[presentation.color];
            return (
              <div
                key={index}
                ref={addToRefs}
                className="reveal group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.icon} shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                    presentation.status === 'Available' 
                      ? colors.badge
                      : 'bg-amber-100 text-amber-600 border-amber-200'
                  }`}>
                    {presentation.status === 'Available' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                    {presentation.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {presentation.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {presentation.description}
                </p>
                <div className="flex items-center text-slate-400 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{presentation.date}</span>
                </div>
                {presentation.filename ? (
                  <a
                    href={`/presentations/${presentation.filename}`}
                    download
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${colors.button}`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {presentation.type}
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full flex items-center justify-center px-4 py-3 bg-slate-100 rounded-xl text-slate-400 cursor-not-allowed font-medium border border-slate-200"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Coming Soon
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div ref={addToRefs} className="reveal mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Presentation Schedule</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              Presentations are scheduled at key milestones throughout the Smart Helmet project lifecycle. 
              Each presentation represents a critical evaluation point where we showcase our AI-powered safety features, 
              demonstrate real-time monitoring capabilities, and present research findings on rider safety improvement.
            </p>
          </div>
        </div>

        <div ref={addToRefs} className="reveal mt-8 bg-white border border-slate-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Presentation Phases</h3>
          <div className="space-y-4">
            {[
              {
                number: '1',
                title: 'Proposal Phase',
                description: 'Initial presentation establishing Smart Helmet scope, AI methodology, and safety objectives',
                color: 'blue'
              },
              {
                number: '2',
                title: 'Progress Reviews',
                description: 'Mid-project evaluations demonstrating stress detection, drowsiness monitoring, and IoT integration',
                color: 'cyan'
              },
              {
                number: '3',
                title: 'Final Presentation',
                description: 'Comprehensive overview of complete Smart Helmet system with live demonstration and safety impact results',
                color: 'blue'
              }
            ].map((phase, idx) => (
              <div key={idx} className={`flex items-start p-4 ${colorClasses[phase.color].bg} rounded-xl`}>
                <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${colorClasses[phase.color].icon} rounded-xl flex items-center justify-center text-white font-bold mr-4 shadow-lg`}>
                  {phase.number}
                </div>
                <div>
                  <h4 className={`font-bold ${colorClasses[phase.color].text} mb-1`}>{phase.title}</h4>
                  <p className="text-slate-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
