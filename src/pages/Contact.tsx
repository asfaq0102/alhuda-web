import React from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
      {/* Hero Section */}
      <section 
        className="relative py-40 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 animate-bounce">
            <Sparkles className="text-amber-400 w-8 h-8" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in font-montserrat">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in">
            Ready to start your educational journey? We'd love to hear from you and discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-100 to-rose-100 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">Get in Touch</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@alhuda.edu",
                    description: "Send us an email anytime",
                    gradient: "from-blue-600 to-cyan-600"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 9876543210",
                    description: "Mon-Fri from 8am to 6pm",
                    gradient: "from-emerald-600 to-teal-600"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    content: "Al Huda Campus, Educational District, Kerala, India",
                    description: "Come say hello at our campus",
                    gradient: "from-amber-600 to-orange-600"
                  }
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 group p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 animate-scale-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float shadow-lg`} style={{ animationDelay: `${index * 0.2}s` }}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>
                        <p className="text-purple-600 font-medium">{contact.content}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 animate-fade-in shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 resize-none"
                    placeholder="Tell us about your query..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
