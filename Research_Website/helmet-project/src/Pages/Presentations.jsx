import { Presentation, CheckCircle, Calendar, Play, Download, Clock } from 'lucide-react';

const Presentations = () => {
  const presentations = [
    {
      title: 'Smart Helmet Proposal Presentation',
      description: 'Initial project proposal presentation outlining Smart Helmet research objectives, AI methodology, and safety monitoring approach',
      date: 'Available Now',
      status: 'Available',
      filename: 'presentation1.pptx',
      icon: <Presentation className="w-6 h-6" />,
      color: 'teal'
    },
    {
      title: 'Progress Presentation 1',
      description: 'First progress review showcasing stress detection implementation and EEG sensor integration',
      date: 'Coming Soon',
      status: 'In Progress',
      filename: null,
      icon: <Presentation className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      title: 'Progress Presentation 2',
      description: 'Second progress review demonstrating drowsiness detection and accident alerting system',
      date: 'Coming Soon',
      status: 'In Progress',
      filename: null,
      icon: <Presentation className="w-6 h-6" />,
      color: 'teal'
    },
    {
      title: 'Final Presentation',
      description: 'Comprehensive final presentation covering complete Smart Helmet system, results, and safety impact analysis',
      date: 'Coming Soon',
      status: 'In Progress',
      filename: null,
      icon: <Presentation className="w-6 h-6" />,
      color: 'cyan'
    }
  ];

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
            Project Presentations
          </h1>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Access Smart Helmet presentation slides and materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {presentations.map((presentation, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 hover-lift transition-all duration-300 animate-scale-in ${presentation.color === 'teal' ? 'border-t-4 border-teal-500' : 'border-t-4 border-cyan-500'}`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${presentation.color === 'teal' ? 'bg-teal-100' : 'bg-cyan-100'}`}>
                  <div className={presentation.color === 'teal' ? 'text-teal-600' : 'text-cyan-600'}>
                    {presentation.icon}
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${presentation.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {presentation.status === 'Available' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                  {presentation.status}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {presentation.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {presentation.description}
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{presentation.date}</span>
              </div>
              {presentation.filename ? (
                <a
                  href={`/presentations/${presentation.filename}`}
                  download
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 ${presentation.color === 'teal' ? 'bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-500/30' : 'bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/30'}`}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Presentation
                </a>
              ) : (
                <button
                  disabled
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 rounded-lg text-gray-400 cursor-not-allowed font-medium"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Presentation Schedule</h3>
          <p className="text-teal-100 leading-relaxed">
            Presentations are scheduled at key milestones throughout the Smart Helmet project lifecycle. 
            Each presentation represents a critical evaluation point where we showcase our AI-powered safety features, 
            demonstrate real-time monitoring capabilities, and present research findings on rider safety improvement.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Presentation Phases</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-teal-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="font-semibold text-teal-900">Proposal Phase</h4>
                <p className="text-teal-700">Initial presentation establishing Smart Helmet scope, AI methodology, and safety objectives</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-cyan-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="font-semibold text-cyan-900">Progress Reviews</h4>
                <p className="text-cyan-700">Mid-project evaluations demonstrating stress detection, drowsiness monitoring, and IoT integration</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-teal-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="font-semibold text-teal-900">Final Presentation</h4>
                <p className="text-teal-700">Comprehensive overview of complete Smart Helmet system with live demonstration and safety impact results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
