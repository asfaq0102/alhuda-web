import React from 'react';
import { BookOpen, Clock, Award, Users, Sparkles, GraduationCap, Star } from 'lucide-react';
import Footer from '@/components/Footer';

const Programs = () => {
  const programs = [
    {
      category: "Undergraduate Programs",
      icon: BookOpen,
      gradient: "from-blue-600 to-cyan-600",
      courses: [
        {
          name: "Bachelor of Computer Applications (BCA)",
          duration: "3 Years",
          seats: "60",
          description: "Comprehensive computer science program covering programming, software development, and IT fundamentals."
        },
        {
          name: "Bachelor of Commerce (B.Com)",
          duration: "3 Years", 
          seats: "80",
          description: "Complete commerce education including accounting, finance, business studies, and economics."
        },
        {
          name: "Bachelor of Arts (BA)",
          duration: "3 Years",
          seats: "100",
          description: "Liberal arts program with specializations in English, History, Political Science, and Islamic Studies."
        },
        {
          name: "Bachelor of Science (B.Sc)",
          duration: "3 Years",
          seats: "60",
          description: "Science program with majors in Physics, Chemistry, Mathematics, and Biology."
        }
      ]
    },
    {
      category: "Postgraduate Programs",
      icon: GraduationCap,
      gradient: "from-purple-600 to-pink-600",
      courses: [
        {
          name: "Master of Computer Applications (MCA)",
          duration: "2 Years",
          seats: "40",
          description: "Advanced computer science program focusing on software development and emerging technologies."
        },
        {
          name: "Master of Commerce (M.Com)",
          duration: "2 Years",
          seats: "50",
          description: "Advanced commerce studies with specialization in finance, accounting, and business management."
        },
        {
          name: "Master of Arts in Islamic Studies (MA)",
          duration: "2 Years",
          seats: "30",
          description: "Comprehensive Islamic studies program covering theology, jurisprudence, and Islamic culture."
        }
      ]
    },
    {
      category: "Diploma Programs",
      icon: Award,
      gradient: "from-emerald-600 to-teal-600",
      courses: [
        {
          name: "Diploma in Information Technology",
          duration: "1 Year",
          seats: "40",
          description: "Practical IT program covering computer basics, programming, and software applications."
        },
        {
          name: "Diploma in Business Administration",
          duration: "1 Year",
          seats: "30",
          description: "Business fundamentals covering management, marketing, and entrepreneurship skills."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 animate-bounce">
            <Sparkles className="text-amber-400 w-8 h-8" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in font-montserrat">
            Academic Programs
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
            Comprehensive courses designed to prepare students for successful careers
          </p>
        </div>
      </section>

      {/* Programs Section */}
      {programs.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 relative overflow-hidden ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'}`}>
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {React.createElement(category.icon, { className: "text-white", size: 36 })}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">{category.category}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.courses.map((course, courseIndex) => (
                <div 
                  key={courseIndex}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${courseIndex * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{course.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{course.description}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <BookOpen className="text-white" size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    <div className="text-center group/item">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="text-green-600" size={20} />
                      </div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold text-gray-900">{course.duration}</div>
                    </div>
                    <div className="text-center group/item">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover/item:scale-110 transition-transform duration-300">
                        <Users className="text-purple-600" size={20} />
                      </div>
                      <div className="text-sm text-gray-600">Seats</div>
                      <div className="font-semibold text-gray-900">{course.seats}</div>
                    </div>
                    <div className="text-center group/item">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover/item:scale-110 transition-transform duration-300">
                        <Star className="text-amber-600" size={20} />
                      </div>
                      <div className="text-sm text-gray-600">Certification</div>
                      <div className="font-semibold text-gray-900">Degree</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Admission Requirements */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">Admission Requirements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Undergraduate",
                icon: BookOpen,
                gradient: "from-blue-600 to-cyan-600",
                requirements: ["12th Standard Pass", "Minimum 50% Marks", "Entrance Test"]
              },
              {
                title: "Postgraduate",
                icon: GraduationCap,
                gradient: "from-purple-600 to-pink-600",
                requirements: ["Bachelor's Degree", "Minimum 55% Marks", "Entrance Test"]
              },
              {
                title: "Diploma",
                icon: Award,
                gradient: "from-emerald-600 to-teal-600",
                requirements: ["10th Standard Pass", "Minimum 45% Marks", "Merit Based"]
              }
            ].map((level, index) => {
              const Icon = level.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${level.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{level.title}</h3>
                  <div className="space-y-4 text-gray-200">
                    {level.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center group/item">
                        <Star className="mr-3 text-amber-400 group-hover/item:scale-110 transition-transform duration-300" size={16} />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Programs;
