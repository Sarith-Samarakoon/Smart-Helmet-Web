import { Mail, Award, User, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Team Member 1',
      role: 'Lead Researcher',
      email: 'member1@example.com',
      achievements: [
        'Published 2 research papers',
        'Dean\'s List 2023',
        'Best Project Award'
      ],
      image: null
    },
    {
      name: 'Team Member 2',
      role: 'Research Assistant',
      email: 'member2@example.com',
      achievements: [
        'Research Grant Recipient',
        'Academic Excellence Award',
        'Technical Lead'
      ],
      image: null
    },
    {
      name: 'Team Member 3',
      role: 'Research Assistant',
      email: 'member3@example.com',
      achievements: [
        'Innovation Competition Winner',
        'Scholarship Recipient',
        'Open Source Contributor'
      ],
      image: null
    },
    {
      name: 'Team Member 4',
      role: 'Research Assistant',
      email: 'member4@example.com',
      achievements: [
        'Hackathon Winner',
        'Technical Certification',
        'Research Symposium Presenter'
      ],
      image: null
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
            About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Meet the dedicated researchers behind Smart Helmet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1 animate-scale-in"
            >
              <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 h-32 flex items-center justify-center border-b border-slate-700">
                <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center border border-slate-600">
                  <User className="w-10 h-10 text-slate-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-400 font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex items-center text-slate-400 mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-teal-400" />
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-400 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white mb-8 animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-teal-100 leading-relaxed">
              Our team is committed to developing innovative safety solutions that save lives. We believe in leveraging 
              cutting-edge AI and IoT technology to create practical, real-world applications. 
              Together, we strive to revolutionize rider safety through our Smart Helmet system.
            </p>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-6">Team Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-teal-400 mb-2">Innovation</h4>
              <p className="text-slate-400 text-sm">
                Pioneering AI-powered safety technology
              </p>
            </div>
            <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2">Collaboration</h4>
              <p className="text-slate-400 text-sm">
                Working together to save lives
              </p>
            </div>
            <div className="text-center p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-teal-400 mb-2">Impact</h4>
              <p className="text-slate-400 text-sm">
                Creating real-world safety solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
