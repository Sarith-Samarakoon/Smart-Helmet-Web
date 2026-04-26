import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Us</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Get in touch with our Smart Helmet research team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8 animate-scale-in hover:border-teal-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition"
                    placeholder="Inquiry about research project"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 font-medium shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 animate-scale-in">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-slate-400">research@example.com</p>
                    <p className="text-slate-400">team@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                    <p className="text-slate-400">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-slate-400">Research Laboratory</p>
                    <p className="text-slate-400">University Campus</p>
                    <p className="text-slate-400">City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white animate-fade-in-up">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">Research Lab Hours</h3>
                <div className="space-y-2 text-teal-100">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="mt-4 text-sm text-teal-200">
                  For urgent inquiries about Smart Helmet project, please email us and we will respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
