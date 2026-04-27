import { useEffect, useRef } from 'react';
import { Mail, Award, User, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
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
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={addToRefs} className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Meet the Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated researchers behind Smart Helmet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="reveal group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-32 flex items-center justify-center border-b border-slate-100">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-blue-200 shadow-lg">
                  <User className="w-10 h-10 text-blue-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex items-center text-slate-500 mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-500" />
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-500 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white mb-12 shadow-xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              Our team is committed to developing innovative safety solutions that save lives. We believe in leveraging 
              cutting-edge AI and IoT technology to create practical, real-world applications. 
              Together, we strive to revolutionize rider safety through our Smart Helmet system.
            </p>
          </div>
        </div>

        <div ref={addToRefs} className="reveal bg-white border border-slate-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Team Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-blue-600 mb-2">Innovation</h4>
              <p className="text-slate-600 text-sm">
                Pioneering AI-powered safety technology
              </p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-cyan-600 mb-2">Collaboration</h4>
              <p className="text-slate-600 text-sm">
                Working together to save lives
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-blue-600 mb-2">Impact</h4>
              <p className="text-slate-600 text-sm">
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
