import { Mail, Award, User } from 'lucide-react';

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
            About Our Team
          </h1>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Meet the dedicated researchers behind Smart Helmet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 animate-scale-in"
            >
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 h-32 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-600 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-teal-100 leading-relaxed">
            Our team is committed to developing innovative safety solutions that save lives. We believe in leveraging 
            cutting-edge AI and IoT technology to create practical, real-world applications. 
            Together, we strive to revolutionize rider safety through our Smart Helmet system.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Team Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-teal-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-teal-900 mb-2">Innovation</h4>
              <p className="text-teal-700 text-sm">
                Pioneering AI-powered safety technology
              </p>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-cyan-900 mb-2">Collaboration</h4>
              <p className="text-cyan-700 text-sm">
                Working together to save lives
              </p>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-teal-900 mb-2">Impact</h4>
              <p className="text-teal-700 text-sm">
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
