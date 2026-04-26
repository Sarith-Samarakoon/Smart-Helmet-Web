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
            Project Documents
          </h1>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Access all Smart Helmet research documentation and deliverables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-6 hover-lift transition-all duration-300 animate-scale-in ${doc.color === 'teal' ? 'border-l-4 border-teal-500' : 'border-l-4 border-cyan-500'}`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${doc.color === 'teal' ? 'bg-teal-100' : 'bg-cyan-100'}`}>
                  <div className={doc.color === 'teal' ? 'text-teal-600' : 'text-cyan-600'}>
                    {doc.icon}
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {doc.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {doc.description}
              </p>
              <a
                href={`/documents/${doc.filename}`}
                download
                className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-white transition-all duration-300 hover:scale-105 ${doc.color === 'teal' ? 'bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-500/30' : 'bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/30'}`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Document Availability</h3>
          <p className="text-blue-100 leading-relaxed">
            All project documents will be made available as they are completed and approved. 
            Documents are organized by phase and include comprehensive details of our research journey. 
            Please check back regularly for updates as we progress through the project milestones.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Document Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-teal-50 rounded-xl">
              <h4 className="font-semibold text-teal-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                Planning & Registration
              </h4>
              <ul className="space-y-2 text-teal-700">
                <li>• Project Charter</li>
                <li>• TAF Document</li>
                <li>• Proposal Report</li>
              </ul>
            </div>
            <div className="p-4 bg-cyan-50 rounded-xl">
              <h4 className="font-semibold text-cyan-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                Research & Thesis
              </h4>
              <ul className="space-y-2 text-cyan-700">
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
