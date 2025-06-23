import React from 'react';
import { GraduationCap, Award, BookOpen, Mail, Sparkles, Star, Users } from 'lucide-react';
import Footer from '@/components/Footer';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Mohammed Ali",
      position: "Principal",
      department: "Administration",
      qualification: "Ph.D in Education, M.Ed",
      experience: "20+ years",
      email: "principal@alhuda.edu",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      name: "Dr. Fatima Khan",
      position: "Vice Principal",
      department: "Academic Affairs",
      qualification: "Ph.D in Mathematics, M.Sc",
      experience: "18+ years",
      email: "viceprincipal@alhuda.edu",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Prof. Ahmed Hassan",
      position: "HOD Computer Science",
      department: "Computer Science",
      qualification: "M.Tech in CSE, B.Tech",
      experience: "15+ years",
      email: "ahmed.hassan@alhuda.edu",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      name: "Dr. Aisha Rahman",
      position: "HOD Commerce",
      department: "Commerce",
      qualification: "Ph.D in Commerce, M.Com",
      experience: "12+ years",
      email: "aisha.rahman@alhuda.edu",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      name: "Prof. Yusuf Ibrahim",
      position: "HOD Arts",
      department: "Arts & Humanities",
      qualification: "M.A in English, B.Ed",
      experience: "14+ years",
      email: "yusuf.ibrahim@alhuda.edu",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      name: "Dr. Mariam Ali",
      position: "HOD Science",
      department: "Science",
      qualification: "Ph.D in Physics, M.Sc",
      experience: "16+ years",
      email: "mariam.ali@alhuda.edu",
      gradient: "from-rose-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
            Our Faculty
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
            Meet our dedicated team of educators and administrators committed to academic excellence
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Faculty Members</h2>
            <p className="text-xl text-gray-600">Experienced educators with diverse expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${faculty.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <GraduationCap className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                  <p className="text-purple-600 font-semibold bg-purple-50 py-1 px-4 rounded-full inline-block">{faculty.position}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <BookOpen className="text-indigo-500 mr-3 group-hover/item:scale-110 transition-transform duration-300" size={18} />
                    <span className="text-gray-600">{faculty.department}</span>
                  </div>
                  <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <Award className="text-amber-500 mr-3 group-hover/item:scale-110 transition-transform duration-300" size={18} />
                    <span className="text-gray-600">{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <Star className="text-emerald-500 mr-3 group-hover/item:scale-110 transition-transform duration-300" size={18} />
                    <span className="text-gray-600">{faculty.experience}</span>
                  </div>
                  <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <Mail className="text-blue-500 mr-3 group-hover/item:scale-110 transition-transform duration-300" size={18} />
                    <span className="text-gray-600">{faculty.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Faculty Excellence</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Faculty Members", gradient: "from-blue-600 to-cyan-600", icon: Users },
              { number: "75%", label: "PhD Holders", gradient: "from-purple-600 to-pink-600", icon: GraduationCap },
              { number: "15+", label: "Average Experience", gradient: "from-emerald-600 to-teal-600", icon: Award },
              { number: "100+", label: "Research Publications", gradient: "from-amber-600 to-orange-600", icon: BookOpen }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
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

export default Faculty;
