import React from 'react';
import { Users, Target, Award, Heart, BookOpen, Globe, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://img.freepik.com/free-photo/international-day-education-dark-style_23-2151013353.jpg?semt=ais_items_boosted&w=740)`,
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
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in">
            Discover the rich history, mission, and vision that drives Al Huda Islamic Cultural Establishment forward
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                Our History
              </h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Al Huda Islamic Cultural Establishment And Orphanage was founded with a noble vision to provide quality education rooted in Islamic values while embracing modern academic excellence. Our journey began as a small educational initiative and has grown into a comprehensive network of institutions.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over the years, we have established multiple educational institutions including Ilahiya Higher Secondary School, IES Atholi, IES Koyilandy, CUP Chemancheri, KKMIN Academy, and Ilahiya Arts and Science College, serving thousands of students across various academic levels.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment extends beyond education to community service, particularly through our orphanage section, where we provide care, shelter, and education to underprivileged children, ensuring they receive the same quality of education and opportunities.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div 
                className="rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-2"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Mission & Vision</h2>
            <p className="text-xl text-gray-600">Guiding principles that shape our educational philosophy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-6">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive education that combines academic excellence with Islamic moral values, fostering intellectual growth, spiritual development, and social responsibility. We strive to create future leaders who contribute positively to society while maintaining their cultural and religious identity.
              </p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-6">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution recognized for academic excellence, innovative teaching methodologies, and holistic development of students. We envision creating a learning environment that nurtures critical thinking, creativity, and character building for a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Our Core Values</h2>
            <p className="text-xl text-gray-600">The fundamental principles that guide our actions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description: "Committed to maintaining the highest standards of education and continuous improvement in teaching-learning processes.",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: Heart,
                title: "Islamic Values",
                description: "Integrating Islamic moral principles and ethics into all aspects of education and character development.",
                gradient: "from-rose-600 to-pink-600"
              },
              {
                icon: Users,
                title: "Community Service",
                description: "Dedicated to serving the community through education, social work, and supporting underprivileged children.",
                gradient: "from-purple-600 to-indigo-600"
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Ensuring quality in all educational processes through systematic monitoring and continuous improvement.",
                gradient: "from-amber-600 to-orange-600"
              },
              {
                icon: Target,
                title: "Holistic Development",
                description: "Focusing on overall personality development including intellectual, spiritual, and social growth.",
                gradient: "from-emerald-600 to-teal-600"
              },
              {
                icon: Globe,
                title: "Cultural Heritage",
                description: "Preserving and promoting Islamic culture while embracing modern educational methodologies.",
                gradient: "from-violet-600 to-purple-600"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
          <h2 className="text-4xl font-bold text-white mb-12 font-montserrat">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Educational Institutions", gradient: "from-blue-600 to-cyan-600", icon: BookOpen },
              { number: "1000+", label: "Students Graduated", gradient: "from-purple-600 to-pink-600", icon: Users },
              { number: "20+", label: "Years of Excellence", gradient: "from-emerald-600 to-teal-600", icon: Award },
              { number: "50+", label: "Qualified Faculty", gradient: "from-amber-600 to-orange-600", icon: Target }
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{achievement.number}</div>
                  <div className="text-gray-200 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
