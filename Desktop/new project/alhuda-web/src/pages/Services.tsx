import React from 'react';
import { Code, Palette, Smartphone, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 animate-bounce">
            <Sparkles className="text-amber-400 w-8 h-8" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in font-montserrat">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in">
            Comprehensive digital solutions tailored to elevate your business to new heights.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
                features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"],
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Beautiful, intuitive designs that captivate users and drive engagement through thoughtful user experience research.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
                features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
                gradient: "from-emerald-600 to-teal-600"
              },
              {
                icon: Globe,
                title: "Digital Strategy",
                description: "Comprehensive digital transformation strategies that align technology with your business objectives.",
                features: ["Digital Consulting", "Technology Roadmap", "SEO & Marketing", "Analytics & Insights"],
                gradient: "from-amber-600 to-orange-600"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 group/item">
                        <div className={`w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300`}></div>
                        <span className="group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold py-6`}
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/10 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life with our expert services.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-8 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
