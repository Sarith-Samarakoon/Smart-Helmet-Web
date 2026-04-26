import { Presentation, CheckCircle, Calendar, Download, Clock, FileText } from 'lucide-react';

const Presentations = () => {
  const presentations = [
    {
      title: 'Smart Helmet Proposal Presentation',
      description: 'Initial project proposal presentation outlining Smart Helmet research objectives, AI methodology, and safety monitoring approach',
      date: 'Available Now',
      status: 'Available',
      filename: 'Proposal-Presentation1.pptx',
      icon: Presentation,
      color: 'teal',
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
      color: 'teal',
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
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Presentations</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Access Smart Helmet presentation slides and materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {presentations.map((presentation, index) => {
            const Icon = presentation.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1 animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    presentation.color === 'teal' 
                      ? 'bg-gradient-to-br from-teal-500 to-emerald-500' 
                      : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                  }`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    presentation.status === 'Available' 
                      ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {presentation.status === 'Available' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                    {presentation.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {presentation.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {presentation.description}
                </p>
                <div className="flex items-center text-slate-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{presentation.date}</span>
                </div>
                {presentation.filename ? (
                  <a
                    href={`/presentations/${presentation.filename}`}
                    download
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg ${
                      presentation.color === 'teal' 
                        ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 shadow-teal-500/25' 
                        : 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 shadow-cyan-500/25'
                    }`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {presentation.type}
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full flex items-center justify-center px-4 py-3 bg-slate-700/50 rounded-xl text-slate-500 cursor-not-allowed font-medium border border-slate-700"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Coming Soon
                  </button>
                )}
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                  presentation.color === 'teal' 
                    ? 'from-teal-500/5 to-emerald-500/5' 
                    : 'from-cyan-500/5 to-blue-500/5'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Presentation Schedule</h3>
            <p className="text-teal-100 leading-relaxed">
              Presentations are scheduled at key milestones throughout the Smart Helmet project lifecycle. 
              Each presentation represents a critical evaluation point where we showcase our AI-powered safety features, 
              demonstrate real-time monitoring capabilities, and present research findings on rider safety improvement.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-6">Presentation Phases</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="font-semibold text-teal-400">Proposal Phase</h4>
                <p className="text-slate-400">Initial presentation establishing Smart Helmet scope, AI methodology, and safety objectives</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400">Progress Reviews</h4>
                <p className="text-slate-400">Mid-project evaluations demonstrating stress detection, drowsiness monitoring, and IoT integration</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="font-semibold text-teal-400">Final Presentation</h4>
                <p className="text-slate-400">Comprehensive overview of complete Smart Helmet system with live demonstration and safety impact results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
