import { BookOpen, Target, Lightbulb, Shield, Brain, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Logo */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Smart Helmet Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain animate-float animate-pulse-glow rounded-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-animated">
            Smart Helmet Research
          </h1>
          <p className="text-xl md:text-2xl text-teal-700 max-w-3xl mx-auto font-medium">
            AI-Powered Safety & Health Monitoring System
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12 animate-fade-in-up">
          <div className="video-container bg-black">
            <video 
              className="w-full aspect-video object-cover"
              controls
              poster="/logo.png"
            >
              <source src="/helmet-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-teal-600 mt-4 font-medium animate-fade-in-up">
            Watch: This Helmet Could Save Your Life!
          </p>
        </div>

        {/* Abstract Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 hover-lift animate-scale-in">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 animate-pulse-glow">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Project Abstract</h2>
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-4">
              The Smart Helmet research project aims to revolutionize rider safety through an AI-powered helmet system. Our innovative solution integrates real-time stress detection, drowsiness monitoring, and automatic accident alerting to protect motorcyclists and industrial workers.
            </p>
            <p className="text-lg mb-4">
              Using advanced EEG sensors, computer vision algorithms, and IoT connectivity, the Smart Helmet continuously monitors the wearer's physiological state and environmental conditions. When critical thresholds are detected, the system automatically sends emergency alerts to designated contacts and emergency services.
            </p>
            <p className="text-lg">
              This research contributes to the growing field of wearable safety technology, addressing the critical need for proactive accident prevention rather than reactive response. Our comprehensive approach combines hardware engineering, machine learning, and mobile application development.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover-lift transition-all duration-300 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mb-4 mx-auto">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Safety First
            </h3>
            <p className="text-gray-600 text-center">
              Real-time accident detection with automatic emergency alert system
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover-lift transition-all duration-300 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full mb-4 mx-auto">
              <Brain className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              AI-Powered
            </h3>
            <p className="text-gray-600 text-center">
              Machine learning algorithms for stress and drowsiness detection
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover-lift transition-all duration-300 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mb-4 mx-auto">
              <Activity className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Health Monitoring
            </h3>
            <p className="text-gray-600 text-center">
              Continuous vital signs tracking with EEG sensor integration
            </p>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg p-6 text-white hover-lift transition-all duration-300">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Research Goals</h3>
            </div>
            <p className="text-teal-100">
              Develop a comprehensive safety solution that reduces accident fatalities through predictive technology and rapid emergency response.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl shadow-lg p-6 text-white hover-lift transition-all duration-300">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Innovation</h3>
            </div>
            <p className="text-cyan-100">
              First-of-its-kind integration of EEG sensors, computer vision, and IoT for comprehensive rider safety monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
