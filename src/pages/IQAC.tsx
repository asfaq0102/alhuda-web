import React from 'react';
import { Award, Target, Users, FileText, CheckCircle, TrendingUp, Sparkles, Star, Book, Globe, Trophy } from 'lucide-react';
import Footer from '@/components/Footer';

const IQAC = () => {
  const iqacMembers = [
    { 
      name: "Dr. Mohammed Ali", 
      position: "Chairperson", 
      department: "Principal",
      gradient: "from-blue-600 to-cyan-600"
    },
    { 
      name: "Dr. Fatima Khan", 
      position: "Coordinator", 
      department: "Vice Principal",
      gradient: "from-purple-600 to-pink-600"
    },
    { 
      name: "Prof. Ahmed Hassan", 
      position: "Member", 
      department: "Computer Science",
      gradient: "from-emerald-600 to-teal-600"
    },
    { 
      name: "Dr. Aisha Rahman", 
      position: "Member", 
      department: "Commerce",
      gradient: "from-amber-600 to-orange-600"
    },
    { 
      name: "Mr. Yusuf Ibrahim", 
      position: "Member", 
      department: "Arts",
      gradient: "from-violet-600 to-purple-600"
    },
    { 
      name: "Ms. Sarah Ali", 
      position: "External Member", 
      department: "Industry Expert",
      gradient: "from-rose-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
            IQAC
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
            Internal Quality Assurance Cell - Ensuring Excellence in Education
          </p>
        </div>
      </section>

      {/* About IQAC */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">About IQAC</h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Internal Quality Assurance Cell (IQAC) is a quality sustenance mechanism of Al Huda College. It works towards enhancement and integration of quality culture in all institutional processes.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-600 leading-relaxed">
                  IQAC ensures continuous improvement in academic and administrative performance through systematic monitoring, evaluation, and enhancement of quality parameters.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Award className="text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="font-bold text-blue-600 text-lg">Quality</h3>
                  <p className="text-gray-600">Assurance</p>
                </div>
                <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <TrendingUp className="text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="font-bold text-purple-600 text-lg">Continuous</h3>
                  <p className="text-gray-600">Improvement</p>
                </div>
              </div>
            </div>
            <div className="relative group animate-fade-in">
              <div 
                className="rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-2"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
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

      {/* IQAC Functions */}
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Target className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">IQAC Functions</h2>
            <p className="text-xl text-gray-600">Key responsibilities and activities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Quality Enhancement",
                description: "Continuous monitoring and enhancement of teaching-learning processes",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: FileText,
                title: "Documentation",
                description: "Systematic documentation of quality initiatives and performance indicators",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: Users,
                title: "Stakeholder Feedback",
                description: "Regular collection and analysis of feedback from all stakeholders",
                gradient: "from-emerald-600 to-teal-600"
              },
              {
                icon: CheckCircle,
                title: "Self Assessment",
                description: "Periodic self-assessment and preparation of quality reports",
                gradient: "from-amber-600 to-orange-600"
              },
              {
                icon: Star,
                title: "Best Practices",
                description: "Identification and promotion of best practices in education",
                gradient: "from-violet-600 to-purple-600"
              },
              {
                icon: TrendingUp,
                title: "Performance Monitoring",
                description: "Regular monitoring of academic and administrative performance",
                gradient: "from-rose-600 to-pink-600"
              }
            ].map((function_, index) => {
              const Icon = function_.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${function_.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{function_.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{function_.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IQAC Members */}
      <section className="py-20 relative overflow-hidden"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Users className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">IQAC Members</h2>
            <p className="text-xl text-gray-200">Dedicated team ensuring quality standards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iqacMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{member.name}</h3>
                <p className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{member.position}</p>
                <p className="text-gray-300">{member.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Quality Initiatives", icon: Star, gradient: "from-blue-600 to-cyan-600" },
              { number: "50+", label: "Best Practices", icon: Award, gradient: "from-purple-600 to-pink-600" },
              { number: "1000+", label: "Stakeholders", icon: Users, gradient: "from-emerald-600 to-teal-600" },
              { number: "25+", label: "Achievements", icon: Trophy, gradient: "from-amber-600 to-orange-600" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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

export default IQAC;
