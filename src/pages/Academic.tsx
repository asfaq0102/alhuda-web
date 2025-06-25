import React from 'react';
import { BookOpen, Users, Award, Calendar, FileText, GraduationCap, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';

const Academic = () => {
  const departments = [
    { name: "Computer Science", programs: ["BCA", "MCA", "Diploma in IT"] },
    { name: "Commerce", programs: ["B.Com", "M.Com", "BBA"] },
    { name: "Arts & Humanities", programs: ["BA English", "BA History", "BA Political Science"] },
    { name: "Science", programs: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics"] },
    { name: "Islamic Studies", programs: ["BA Islamic Studies", "MA Islamic Studies"] }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 animate-bounce">
            <Sparkles className="text-amber-400 w-8 h-8" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in font-montserrat">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
            Comprehensive programs designed to foster intellectual growth and academic achievement
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Programs Offered</h2>
            <p className="text-xl text-gray-600">Diverse academic programs across multiple disciplines</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{dept.name}</h3>
                </div>
                <ul className="space-y-3">
                  {dept.programs.map((program, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center group/item">
                      <GraduationCap className="mr-3 text-teal-600 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                      {program}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Our Faculty</h2>
            <p className="text-xl text-gray-600">Experienced educators committed to student success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Qualified Professors",
                description: "PhD holders and industry experts with extensive teaching experience",
                stats: "50+ Faculty Members",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: Award,
                title: "Research Excellence",
                description: "Active researchers contributing to academic knowledge and innovation",
                stats: "100+ Publications",
                gradient: "from-emerald-600 to-teal-600"
              },
              {
                icon: Calendar,
                title: "Regular Training",
                description: "Continuous professional development and skill enhancement programs",
                stats: "Monthly Workshops",
                gradient: "from-violet-600 to-purple-600"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <div className="text-blue-600 font-semibold bg-blue-50 py-2 px-4 rounded-full inline-block">{feature.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
          <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">Academic Calendar 2024-25</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-4">First Semester</h3>
                <div className="space-y-4 text-gray-200">
                  {[
                    { date: "June 1 - July 15", event: "Admission" },
                    { date: "July 20", event: "Classes Begin" },
                    { date: "September 15-25", event: "Mid-term Exams" },
                    { date: "November 20-30", event: "End Semester Exams" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <Calendar className="mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <div className="text-amber-400 font-semibold">{item.date}</div>
                        <div>{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 animate-fade-in delay-200">
                <h3 className="text-2xl font-bold text-white mb-4">Second Semester</h3>
                <div className="space-y-4 text-gray-200">
                  {[
                    { date: "December 10", event: "Classes Begin" },
                    { date: "February 10-20", event: "Mid-term Exams" },
                    { date: "April 15-25", event: "End Semester Exams" },
                    { date: "May 1 - June 15", event: "Summer Break" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <Calendar className="mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <div className="text-amber-400 font-semibold">{item.date}</div>
                        <div>{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Academic;
    