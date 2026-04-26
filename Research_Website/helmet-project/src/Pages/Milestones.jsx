import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Award } from 'lucide-react';

const Milestones = () => {
  const [openMilestone, setOpenMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      title: 'Project Proposal',
      assessment: 'Initial project proposal submission and presentation',
      date: 'To be announced',
      marks: '10 marks',
      details: [
        'Problem statement and justification',
        'Literature review summary',
        'Proposed methodology',
        'Expected outcomes and deliverables',
        'Timeline and resource requirements'
      ]
    },
    {
      id: 2,
      title: 'Progress Presentation 1',
      assessment: 'First progress review and milestone assessment',
      date: 'To be announced',
      marks: '15 marks',
      details: [
        'Progress on research objectives',
        'Preliminary findings and analysis',
        'Challenges encountered and solutions',
        'Updated timeline and next steps',
        'Documentation of work completed'
      ]
    },
    {
      id: 3,
      title: 'Progress Presentation 2',
      assessment: 'Second progress review and milestone assessment',
      date: 'To be announced',
      marks: '20 marks',
      details: [
        'Substantial progress on research',
        'Intermediate results and analysis',
        'Methodology refinement',
        'Preparation for final phase',
        'Comprehensive progress report'
      ]
    },
    {
      id: 4,
      title: 'Final Assessment',
      assessment: 'Complete project evaluation and final submission',
      date: 'To be announced',
      marks: '40 marks',
      details: [
        'Complete research implementation',
        'Final results and analysis',
        'Comprehensive documentation',
        'Project deliverables',
        'Quality and completeness assessment'
      ]
    },
    {
      id: 5,
      title: 'Viva',
      assessment: 'Oral defense and comprehensive evaluation',
      date: 'To be announced',
      marks: '15 marks',
      details: [
        'Oral presentation of research',
        'Question and answer session',
        'Demonstration of understanding',
        'Defense of methodology and results',
        'Overall contribution assessment'
      ]
    }
  ];

  const toggleMilestone = (id) => {
    setOpenMilestone(openMilestone === id ? null : id);
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
            Smart Helmet Milestones
          </h1>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Track our research progress through key assessment phases
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 animate-scale-in"
            >
              <button
                onClick={() => toggleMilestone(milestone.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h2>
                  <p className="text-gray-600">{milestone.assessment}</p>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <div className="text-right">
                    <div className="flex items-center text-teal-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{milestone.date}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{milestone.marks}</span>
                    </div>
                  </div>
                  {openMilestone === milestone.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>

              {openMilestone === milestone.id && (
                <div className="px-8 pb-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                    Assessment Details
                  </h3>
                  <ul className="space-y-2">
                    {milestone.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Smart Helmet Assessment Overview</h3>
          <p className="text-teal-100 leading-relaxed mb-4">
            The Smart Helmet project is evaluated through a structured milestone system with a total of 100 marks distributed across five key phases. 
            Each milestone represents a critical stage in developing our AI-powered safety system, ensuring continuous progress and quality control.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm text-teal-100">Proposal</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-teal-100">Progress 1</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold">20</div>
              <div className="text-sm text-teal-100">Progress 2</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold">40</div>
              <div className="text-sm text-teal-100">Final</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-teal-100">Viva</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
