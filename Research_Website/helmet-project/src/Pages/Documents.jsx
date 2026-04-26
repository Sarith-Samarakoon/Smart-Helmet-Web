import { FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      title: 'Project Charter',
      description: 'Initial project charter outlining scope, objectives, and stakeholders',
      filename: 'project-charter.pdf',
      status: 'Available',
      icon: <FileText className="w-6 h-6" />,
      color: 'teal'
    },
    {
      title: 'TAF Document',
      description: 'Team Allocation Form for project registration and approval',
      filename: 'taf-document.pdf',
      status: 'Available',
      icon: <FileText className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      title: 'Proposal Report',
      description: 'Comprehensive proposal with research methodology and timeline',
      filename: 'proposal-report.pdf',
      status: 'Available',
      icon: <FileText className="w-6 h-6" />,
      color: 'teal'
    },
    {
      title: 'Research Document',
      description: 'Smart Helmet research documentation and findings',
      filename: 'research-document.pdf',
      status: 'Available',
      icon: <FileText className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      title: 'Smart Helmet Thesis',
      description: 'Complete thesis documentation on Smart Helmet system',
      filename: 'smart-helmet-thesis.pdf',
      status: 'Available',
      icon: <FileText className="w-6 h-6" />,
      color: 'teal'
    },
    {
      title: 'Progress Presentation Justification',
      description: 'Progress presentation assessment and justification sheet',
      filename: 'justification-sheet.pdf',
      status: 'Available',
      icon: <FileText className="w-6 h-6" />,
      color: 'cyan'
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
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Documents</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Access all Smart Helmet research documentation and deliverables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1 animate-scale-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${doc.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-emerald-500' : 'bg-gradient-to-br from-cyan-500 to-blue-500'}`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {doc.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {doc.title}
              </h3>
              <p className="text-slate-400 mb-4">
                {doc.description}
              </p>
              <a
                href={`/documents/${doc.filename}`}
                download
                className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg ${doc.color === 'teal' ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 shadow-teal-500/25' : 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 shadow-cyan-500/25'}`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Document Availability</h3>
            <p className="text-teal-100 leading-relaxed">
              All project documents will be made available as they are completed and approved. 
              Documents are organized by phase and include comprehensive details of our research journey. 
              Please check back regularly for updates as we progress through the project milestones.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-6">Document Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
              <h4 className="font-semibold text-teal-400 mb-3 flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                Planning & Registration
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>• Project Charter</li>
                <li>• TAF Document</li>
                <li>• Proposal Report</li>
              </ul>
            </div>
            <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                Research & Thesis
              </h4>
              <ul className="space-y-2 text-slate-400">
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
