import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Calendar, Award, Flag } from 'lucide-react';

const Milestones = () => {
  const [openMilestone, setOpenMilestone] = useState(null);
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
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={addToRefs} className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Flag className="w-4 h-4" />
            Project Timeline
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Smart Helmet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Milestones</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Track our research progress through key assessment phases
          </p>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              ref={addToRefs}
              className="reveal group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleMilestone(milestone.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {milestone.id}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      {milestone.title}
                    </h2>
                  </div>
                  <p className="text-slate-500 ml-11">{milestone.assessment}</p>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <div className="text-right hidden sm:block">
                    <div className="flex items-center text-slate-400 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{milestone.date}</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{milestone.marks}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {openMilestone === milestone.id ? (
                      <ChevronUp className="w-6 h-6 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-500" />
                    )}
                  </div>
                </div>
              </button>

              {openMilestone === milestone.id && (
                <div className="px-8 pb-6 border-t border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">
                    Assessment Details
                  </h3>
                  <ul className="space-y-2">
                    {milestone.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-slate-600"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="reveal mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Smart Helmet Assessment Overview</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              The Smart Helmet project is evaluated through a structured milestone system with a total of 100 marks distributed across five key phases. 
              Each milestone represents a critical stage in developing our AI-powered safety system, ensuring continuous progress and quality control.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { marks: '10', label: 'Proposal', color: 'from-blue-400 to-blue-500' },
                { marks: '15', label: 'Progress 1', color: 'from-cyan-400 to-blue-400' },
                { marks: '20', label: 'Progress 2', color: 'from-blue-500 to-cyan-400' },
                { marks: '40', label: 'Final', color: 'from-cyan-500 to-blue-500' },
                { marks: '15', label: 'Viva', color: 'from-blue-400 to-cyan-500' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-xl p-4 text-center shadow-lg`}>
                  <div className="text-2xl font-bold">{item.marks}</div>
                  <div className="text-sm text-blue-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
