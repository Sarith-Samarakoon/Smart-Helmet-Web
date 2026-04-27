import { useEffect, useRef } from 'react';
import { FileText, Download, CheckCircle, FolderOpen } from 'lucide-react';

const Documents = () => {
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

  const documents = [
    {
      title: 'Project Charter',
      description: 'Initial project charter outlining scope, objectives, and stakeholders',
      filename: 'project-charter.pdf',
      status: 'Available',
      color: 'blue'
    },
    {
      title: 'TAF Document',
      description: 'Team Allocation Form for project registration and approval',
      filename: 'taf-document.pdf',
      status: 'Available',
      color: 'cyan'
    },
    {
      title: 'Proposal Report',
      description: 'Comprehensive proposal with research methodology and timeline',
      filename: 'proposal-report.pdf',
      status: 'Available',
      color: 'blue'
    },
    {
      title: 'Research Document',
      description: 'Smart Helmet research documentation and findings',
      filename: 'research-document.pdf',
      status: 'Available',
      color: 'cyan'
    },
    {
      title: 'Smart Helmet Thesis',
      description: 'Complete thesis documentation on Smart Helmet system',
      filename: 'smart-helmet-thesis.pdf',
      status: 'Available',
      color: 'blue'
    },
    {
      title: 'Progress Presentation Justification',
      description: 'Progress presentation assessment and justification sheet',
      filename: 'justification-sheet.pdf',
      status: 'Available',
      color: 'cyan'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 shadow-blue-500/20 bg-blue-100 text-blue-600',
    cyan: 'from-cyan-500 to-blue-500 shadow-cyan-500/20 bg-cyan-100 text-cyan-600'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={addToRefs} className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FolderOpen className="w-4 h-4" />
            Downloads
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Documents</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access all Smart Helmet research documentation and deliverables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="reveal group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[doc.color]} shadow-lg`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[doccolor]}`}>
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {doc.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {doc.description}
              </p>
              <a
                href={`/documents/${doc.filename}`}
                download
                className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${colorClasses[doc.color]}`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="reveal mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Document Availability</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              All project documents will be made available as they are completed and approved. 
              Documents are organized by phase and include comprehensive details of our research journey. 
              Please check back regularly for updates as we progress through the project milestones.
            </p>
          </div>
        </div>

        <div ref={addToRefs} className="reveal mt-8 bg-white border border-slate-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Document Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Planning & Registration
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Project Charter</li>
                <li>• TAF Document</li>
                <li>• Proposal Report</li>
              </ul>
            </div>
            <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100">
              <h4 className="font-semibold text-cyan-600 mb-3 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                Research & Thesis
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Research Document</li>
                <li>• Smart Helmet Thesis</li>
                <li>• Progress Justification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
