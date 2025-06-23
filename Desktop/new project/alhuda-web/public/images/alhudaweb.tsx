// // import React from 'react';
// // import { ArrowRight, BookOpen, Users, Award, Building, Lightbulb, Globe, Star, ChevronRight, Play, GraduationCap, Heart, Trophy, MapPin, CheckCircle, Clock, Target } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import Footer from '@/components/Footer';

// // const Index = () => {
// //   return (
// //     <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-montserrat">
// //       {/* Hero Section with Enhanced Aesthetic Colors */}
// //       <section 
// //         className="relative min-h-screen flex items-center justify-center overflow-hidden"
// //         style={{
// //           backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(67, 56, 202, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //           backgroundAttachment: 'fixed'
// //         }}
// //       >
// //         {/* Enhanced Floating Elements */}
// //         <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/30 rounded-full animate-float animate-pulse"></div>
// //         <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400/30 rounded-full animate-bounce delay-300"></div>
// //         <div className="absolute bottom-32 left-20 w-12 h-12 bg-violet-400/30 rounded-full animate-pulse delay-700"></div>
// //         <div className="absolute top-60 left-1/3 w-8 h-8 bg-rose-400/40 rounded-full animate-float delay-1000"></div>
// //         <div className="absolute bottom-40 right-1/4 w-14 h-14 bg-cyan-400/30 rounded-full animate-bounce delay-500"></div>
        
// //         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
// //           <div className="animate-fade-in">
// //             {/* Enhanced unique title styling - all words styled consistently */}
// //             <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-12 leading-tight relative">
// //               <div className="relative my-4">
// //                 <span className="block text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient tracking-wider leading-none animate-slide-up delay-200">
// //                   Shaping
// //                 </span>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 blur-xl opacity-30 animate-pulse"></div>
// //               </div>
// //               <div className="relative my-4">
// //                 <span className="block text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient tracking-wider leading-none">
// //                   Tomorrow's
// //                 </span>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 blur-xl opacity-30 animate-pulse"></div>
// //               </div>
// //               <div className="relative my-4">
// //                 <span className="block text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient tracking-wider leading-none animate-slide-up delay-700">
// //                   Leaders
// //                 </span>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 blur-xl opacity-30 animate-pulse"></div>
// //               </div>
// //             </h1>
            
// //             <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-1000">
// //               Al Huda Islamic Cultural Establishment - Where tradition meets innovation in education, fostering excellence through Islamic values and modern pedagogy.
// //             </p>
            
// //             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-1300">
// //               <Button 
// //                 size="lg" 
// //                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 hover:shadow-2xl border-0 animate-glow"
// //               >
// //                 Explore Programs
// //                 <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
// //               </Button>
              
// //               <Button 
// //                 variant="outline" 
// //                 size="lg"
// //                 className="group border-2 border-emerald-400/40 text-white hover:bg-emerald-400 hover:text-slate-900 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 backdrop-blur-xl bg-white/10 hover:shadow-2xl"
// //               >
// //                 <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
// //                 Watch Tour
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Enhanced Scroll Indicator */}
// //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //           <div className="w-6 h-12 border-2 border-amber-400/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
// //             <div className="w-1 h-4 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className="py-32 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
// //         <div 
// //           className="absolute inset-0 opacity-10 animate-zoom-slow"
// //           style={{
// //             backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center'
// //           }}
// //         ></div>
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16 animate-fade-in">
// //             <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Excellence in Numbers</h2>
// //             <p className="text-xl text-slate-600 max-w-2xl mx-auto">Achievements that speak of our commitment to educational excellence</p>
// //           </div>
// //           <div className="grid md:grid-cols-4 gap-8">
// //             {[
// //               { number: "7+", label: "Institutions", icon: Building, delay: "delay-0", color: "bg-gradient-to-br from-blue-500 to-indigo-600" },
// //               { number: "1000+", label: "Students", icon: Users, delay: "delay-200", color: "bg-gradient-to-br from-emerald-500 to-teal-600" },
// //               { number: "50+", label: "Faculty", icon: Award, delay: "delay-400", color: "bg-gradient-to-br from-amber-500 to-orange-600" },
// //               { number: "20+", label: "Years Excellence", icon: Star, delay: "delay-600", color: "bg-gradient-to-br from-violet-500 to-purple-600" }
// //             ].map((stat, index) => (
// //               <div key={index} className={`text-center group animate-slide-up ${stat.delay}`}>
// //                 <div className={`w-24 h-24 ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
// //                   <stat.icon className="text-white w-10 h-10" />
// //                 </div>
// //                 <div className="text-5xl font-bold text-slate-800 mb-3 animate-scale-in">
// //                   {stat.number}
// //                 </div>
// //                 <div className="text-slate-600 font-medium text-lg">{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us Section */}
// //       <section 
// //         className="py-40 relative parallax"
// //         style={{
// //           backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //           backgroundAttachment: 'fixed'
// //         }}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-20 animate-fade-in">
// //             <h2 className="text-5xl font-bold text-white mb-6">Why Choose Al Huda?</h2>
// //             <p className="text-xl text-white/90 max-w-3xl mx-auto">Discover what makes us the preferred choice for quality education</p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-10">
// //             {[
// //               { 
// //                 icon: CheckCircle, 
// //                 title: "Proven Excellence", 
// //                 desc: "20+ years of educational leadership with outstanding academic results",
// //                 delay: "delay-0" 
// //               },
// //               { 
// //                 icon: Clock, 
// //                 title: "Modern Facilities", 
// //                 desc: "State-of-the-art infrastructure with latest technology integration",
// //                 delay: "delay-200" 
// //               },
// //               { 
// //                 icon: Target, 
// //                 title: "Career Focus", 
// //                 desc: "Industry-aligned curriculum with excellent placement opportunities",
// //                 delay: "delay-400" 
// //               }
// //             ].map((item, index) => (
// //               <div 
// //                 key={index}
// //                 className={`group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 animate-scale-in ${item.delay}`}
// //               >
// //                 <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
// //                   <item.icon className="text-white w-8 h-8" />
// //                 </div>
// //                 <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
// //                 <p className="text-white/90 text-lg leading-relaxed">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Programs Section */}
// //       <section className="py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full -translate-x-48 -translate-y-48 animate-float"></div>
// //           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/20 rounded-full translate-x-60 translate-y-60 animate-bounce"></div>
// //           <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-400/10 rounded-full animate-spin-slow"></div>
// //         </div>
        
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-24 animate-fade-in">
// //             <h2 className="text-5xl font-bold text-slate-800 mb-6">Academic Programs</h2>
// //             <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive programs designed to nurture intellectual growth and professional excellence</p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-10">
// //             {[
// //               {
// //                 icon: BookOpen,
// //                 title: "Undergraduate Programs",
// //                 description: "Bachelor's degrees in Computer Applications, Commerce, Arts, and Sciences with modern curriculum.",
// //                 gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
// //                 image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //                 delay: "delay-0"
// //               },
// //               {
// //                 icon: Award,
// //                 title: "Postgraduate Programs", 
// //                 description: "Master's programs with specializations designed for career advancement and research.",
// //                 gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
// //                 image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //                 delay: "delay-300"
// //               },
// //               {
// //                 icon: Lightbulb,
// //                 title: "Professional Courses",
// //                 description: "Industry-focused diploma and certificate programs for skill development.",
// //                 gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
// //                 image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //                 delay: "delay-600"
// //               }
// //             ].map((program, index) => (
// //               <div 
// //                 key={index}
// //                 className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 card-hover animate-scale-in ${program.delay} border border-slate-200`}
// //               >
// //                 <div 
// //                   className="h-64 bg-cover bg-center group-hover:scale-125 transition-transform duration-1000 relative overflow-hidden"
// //                   style={{ backgroundImage: `url(${program.image})` }}
// //                 >
// //                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/40 transition-all duration-700"></div>
// //                 </div>
                
// //                 <div className="p-10">
// //                   <div className={`w-20 h-20 ${program.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-float`} style={{ animationDelay: `${index * 0.3}s` }}>
// //                     <program.icon className="text-white w-10 h-10" />
// //                   </div>
                  
// //                   <h3 className="text-2xl font-bold text-slate-800 mb-6">{program.title}</h3>
// //                   <p className="text-slate-600 leading-relaxed mb-8 text-lg">{program.description}</p>
                  
// //                   <Button 
// //                     variant="outline" 
// //                     className="group border-2 border-emerald-500 hover:border-amber-500 hover:bg-amber-500/10 text-slate-800 transition-all duration-500 hover:scale-105"
// //                   >
// //                     Explore Program
// //                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
// //                   </Button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Student Life Section */}
// //       <section 
// //         className="py-40 relative parallax"
// //         style={{
// //           backgroundImage: `linear-gradient(rgba(67, 56, 202, 0.9), rgba(99, 102, 241, 0.85)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //           backgroundAttachment: 'fixed'
// //         }}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-24 animate-fade-in">
// //             <h2 className="text-5xl font-bold text-white mb-6">Campus Life</h2>
// //             <p className="text-xl text-white/90 max-w-3xl mx-auto">Experience vibrant campus culture with endless opportunities for growth</p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-10">
// //             {[
// //               { 
// //                 icon: Users, 
// //                 title: "Student Organizations", 
// //                 desc: "Join vibrant clubs and societies that match your interests",
// //                 image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //                 delay: "delay-0" 
// //               },
// //               { 
// //                 icon: Trophy, 
// //                 title: "Sports & Recreation", 
// //                 desc: "State-of-the-art facilities for athletics and wellness",
// //                 image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //                 delay: "delay-200" 
// //               },
// //               { 
// //                 icon: GraduationCap, 
// //                 title: "Academic Support", 
// //                 desc: "Tutoring, mentorship, and career guidance programs",
// //                 image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //                 delay: "delay-400" 
// //               }
// //             ].map((item, index) => (
// //               <div 
// //                 key={index}
// //                 className={`group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 animate-scale-in ${item.delay}`}
// //               >
// //                 <div 
// //                   className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
// //                   style={{ backgroundImage: `url(${item.image})` }}
// //                 >
// //                   <div className="h-full bg-gradient-to-t from-slate-900/60 to-transparent"></div>
// //                 </div>
// //                 <div className="p-8">
// //                   <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
// //                     <item.icon className="text-white w-8 h-8" />
// //                   </div>
// //                   <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
// //                   <p className="text-white/90 text-lg leading-relaxed">{item.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <div className="absolute top-20 left-20 w-48 h-48 bg-white/10 rounded-full animate-float"></div>
// //           <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-400/20 rounded-full animate-bounce"></div>
// //           <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse"></div>
// //           <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-spin-slow"></div>
// //         </div>
        
// //         <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
// //           <h2 className="text-5xl font-bold text-white mb-10 animate-slide-up">
// //             Ready to Shape Your Future?
// //           </h2>
          
// //           <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto animate-fade-in delay-500">
// //             Join thousands of students who have chosen Al Huda for their educational journey. Experience excellence in education with Islamic values.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in delay-700">
// //             <Button 
// //               size="lg"
// //               className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 px-16 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-115 shadow-2xl animate-glow"
// //             >
// //               Apply Now
// //               <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
// //             </Button>
            
// //             <Button 
// //               variant="outline"
// //               size="lg"
// //               className="border-2 border-emerald-400/40 text-white hover:bg-emerald-400 hover:text-slate-900 px-16 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-115 backdrop-blur-xl bg-white/10 hover:shadow-2xl"
// //             >
// //               Schedule Visit
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Index;


// import React from 'react';
// import { ArrowRight, BookOpen, Users, Award, Building, Lightbulb, Globe, Star, ChevronRight, Play, GraduationCap, Heart, Trophy, MapPin, CheckCircle, Clock, Target } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Footer from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-montserrat">
//       {/* Hero Section with Enhanced Aesthetic Colors */}
//       <section 
//         className="relative min-h-screen flex items-center justify-center overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(67, 56, 202, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         {/* Enhanced Floating Elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/30 rounded-full animate-float animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400/30 rounded-full animate-bounce delay-300"></div>
//         <div className="absolute bottom-32 left-20 w-12 h-12 bg-violet-400/30 rounded-full animate-pulse delay-700"></div>
//         <div className="absolute top-60 left-1/3 w-8 h-8 bg-rose-400/40 rounded-full animate-float delay-1000"></div>
//         <div className="absolute bottom-40 right-1/4 w-14 h-14 bg-cyan-400/30 rounded-full animate-bounce delay-500"></div>
        
//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//           <div className="animate-fade-in">
//             {/* Modified title with smaller text, more margin-top, and horizontal scroll animation */}
//             <div className="relative mt-16 overflow-hidden">
//               <div className="inline-block animate-scroll-horizontal whitespace-nowrap">
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-wider leading-none">
//                   Shaping Tomorrow's Leaders
//                 </h1>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 blur-xl opacity-30 animate-pulse"></div>
//             </div>
            
//             <p className="text-lg sm:text-xl text-white/90 mt-8 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-1000">
//               Al Huda Islamic Cultural Establishment - Where tradition meets innovation in education, fostering excellence through Islamic values and modern pedagogy.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-1300">
//               <Button 
//                 size="lg" 
//                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 hover:shadow-2xl border-0 animate-glow"
//               >
//                 Explore Programs
//                 <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
//               </Button>
              
//               <Button 
//                 variant="outline" 
//                 size="lg"
//                 className="group border-2 border-emerald-400/40 text-white hover:bg-emerald-400 hover:text-slate-900 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 backdrop-blur-xl bg-white/10 hover:shadow-2xl"
//               >
//                 <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
//                 Watch Tour
//               </Button>
//             </div>
//           </div>
//         </div>
        
//         {/* Enhanced Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-12 border-2 border-amber-400/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
//             <div className="w-1 h-4 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-32 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//         <div 
//           className="absolute inset-0 opacity-10 animate-zoom-slow"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Excellence in Numbers</h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">Achievements that speak of our commitment to educational excellence</p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { number: "7+", label: "Institutions", icon: Building, delay: "delay-0", color: "bg-gradient-to-br from-blue-500 to-indigo-600" },
//               { number: "1000+", label: "Students", icon: Users, delay: "delay-200", color: "bg-gradient-to-br from-emerald-500 to-teal-600" },
//               { number: "50+", label: "Faculty", icon: Award, delay: "delay-400", color: "bg-gradient-to-br from-amber-500 to-orange-600" },
//               { number: "20+", label: "Years Excellence", icon: Star, delay: "delay-600", color: "bg-gradient-to-br from-violet-500 to-purple-600" }
//             ].map((stat, index) => (
//               <div key={index} className={`text-center group animate-slide-up ${stat.delay}`}>
//                 <div className={`w-24 h-24 ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
//                   <stat.icon className="text-white w-10 h-10" />
//                 </div>
//                 <div className="text-5xl font-bold text-slate-800 mb-3 animate-scale-in">
//                   {stat.number}
//                 </div>
//                 <div className="text-slate-600 font-medium text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section 
//         className="py-40 relative parallax"
//         style={{
//           backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20 animate-fade-in">
//             <h2 className="text-5xl font-bold text-white mb-6">Why Choose Al Huda?</h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">Discover what makes us the preferred choice for quality education</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               { 
//                 icon: CheckCircle, 
//                 title: "Proven Excellence", 
//                 desc: "20+ years of educational leadership with outstanding academic results",
//                 delay: "delay-0" 
//               },
//               { 
//                 icon: Clock, 
//                 title: "Modern Facilities", 
//                 desc: "State-of-the-art infrastructure with latest technology integration",
//                 delay: "delay-200" 
//               },
//               { 
//                 icon: Target, 
//                 title: "Career Focus", 
//                 desc: "Industry-aligned curriculum with excellent placement opportunities",
//                 delay: "delay-400" 
//               }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className={`group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 animate-scale-in ${item.delay}`}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
//                   <item.icon className="text-white w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
//                 <p className="text-white/90 text-lg leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full -translate-x-48 -translate-y-48 animate-float"></div>
//           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/20 rounded-full translate-x-60 translate-y-60 animate-bounce"></div>
//           <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-400/10 rounded-full animate-spin-slow"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-24 animate-fade-in">
//             <h2 className="text-5xl font-bold text-slate-800 mb-6">Academic Programs</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive programs designed to nurture intellectual growth and professional excellence</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 icon: BookOpen,
//                 title: "Undergraduate Programs",
//                 description: "Bachelor's degrees in Computer Applications, Commerce, Arts, and Sciences with modern curriculum.",
//                 gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
//                 image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                 delay: "delay-0"
//               },
//               {
//                 icon: Award,
//                 title: "Postgraduate Programs", 
//                 description: "Master's programs with specializations designed for career advancement and research.",
//                 gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
//                 image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                 delay: "delay-300"
//               },
//               {
//                 icon: Lightbulb,
//                 title: "Professional Courses",
//                 description: "Industry-focused diploma and certificate programs for skill development.",
//                 gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
//                 image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                 delay: "delay-600"
//               }
//             ].map((program, index) => (
//               <div 
//                 key={index}
//                 className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 card-hover animate-scale-in ${program.delay} border border-slate-200`}
//               >
//                 <div 
//                   className="h-64 bg-cover bg-center group-hover:scale-125 transition-transform duration-1000 relative overflow-hidden"
//                   style={{ backgroundImage: `url(${program.image})` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/40 transition-all duration-700"></div>
//                 </div>
                
//                 <div className="p-10">
//                   <div className={`w-20 h-20 ${program.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-float`} style={{ animationDelay: `${index * 0.3}s` }}>
//                     <program.icon className="text-white w-10 h-10" />
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-slate-800 mb-6">{program.title}</h3>
//                   <p className="text-slate-600 leading-relaxed mb-8 text-lg">{program.description}</p>
                  
//                   <Button 
//                     variant="outline" 
//                     className="group border-2 border-emerald-500 hover:border-amber-500 hover:bg-amber-500/10 text-slate-800 transition-all duration-500 hover:scale-105"
//                   >
//                     Explore Program
//                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Student Life Section */}
//       <section 
//         className="py-40 relative parallax"
//         style={{
//           backgroundImage: `linear-gradient(rgba(67, 56, 202, 0.9), rgba(99, 102, 241, 0.85)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-24 animate-fade-in">
//             <h2 className="text-5xl font-bold text-white mb-6">Campus Life</h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">Experience vibrant campus culture with endless opportunities for growth</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               { 
//                 icon: Users, 
//                 title: "Student Organizations", 
//                 desc: "Join vibrant clubs and societies that match your interests",
//                 image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                 delay: "delay-0" 
//               },
//               { 
//                 icon: Trophy, 
//                 title: "Sports & Recreation", 
//                 desc: "State-of-the-art facilities for athletics and wellness",
//                 image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                 delay: "delay-200" 
//               },
//               { 
//                 icon: GraduationCap, 
//                 title: "Academic Support", 
//                 desc: "Tutoring, mentorship, and career guidance programs",
//                 image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                 delay: "delay-400" 
//               }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className={`group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 animate-scale-in ${item.delay}`}
//               >
//                 <div 
//                   className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
//                   style={{ backgroundImage: `url(${item.image})` }}
//                 >
//                   <div className="h-full bg-gradient-to-t from-slate-900/60 to-transparent"></div>
//                 </div>
//                 <div className="p-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
//                     <item.icon className="text-white w-8 h-8" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
//                   <p className="text-white/90 text-lg leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-48 h-48 bg-white/10 rounded-full animate-float"></div>
//           <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-400/20 rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse"></div>
//           <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-spin-slow"></div>
//         </div>
        
//         <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
//           <h2 className="text-5xl font-bold text-white mb-10 animate-slide-up">
//             Ready to Shape Your Future?
//           </h2>
          
//           <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto animate-fade-in delay-500">
//             Join thousands of students who have chosen Al Huda for their educational journey. Experience excellence in education with Islamic values.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in delay-700">
//             <Button 
//               size="lg"
//               className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 px-16 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-115 shadow-2xl animate-glow"
//             >
//               Apply Now
//               <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
//             </Button>
            
//             <Button 
//               variant="outline"
//               size="lg"
//               className="border-2 border-emerald-400/40 text-white hover:bg-emerald-400 hover:text-slate-900 px-16 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-115 backdrop-blur-xl bg-white/10 hover:shadow-2xl"
//             >
//               Schedule Visit
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Index;






import React from 'react';
import { ArrowRight, BookOpen, Users, Award, Building, Lightbulb, Globe, Star, ChevronRight, Play, GraduationCap, Heart, Trophy, MapPin, CheckCircle, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-montserrat">
      {/* Hero Section with Enhanced Aesthetic Colors */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(67, 56, 202, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/30 rounded-full animate-float animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-violet-400/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-rose-400/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 right-1/4 w-14 h-14 bg-cyan-400/30 rounded-full animate-bounce delay-500"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            {/* Modified title with smaller text, more margin-top, and continuous horizontal scroll */}
            <div className="relative mt-16 overflow-hidden">
              <div 
                style={{
                  display: 'inline-block',
                  animation: 'scroll-horizontal 20s linear infinite',
                  whiteSpace: 'nowrap'
                }}
              >
                <h1 
                  style={{
                    fontSize: '2.25rem',
                    lineHeight: '2.5rem',
                    fontWeight: '900',
                    backgroundImage: 'linear-gradient(to right, #34d399, #22d3ee, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '0.1em'
                  }}
                  className="sm:text-4xl lg:text-5xl"
                >
                  Shaping Tomorrow's Leaders
                </h1>
              </div>
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: 'linear-gradient(to right, #34d399, #22d3ee, #3b82f6)',
                  filter: 'blur(12px)',
                  opacity: '0.3',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              ></div>
              <style>
                {`
                  @keyframes scroll-horizontal {
                    0% { transform: translateX(100vw); }
                    100% { transform: translateX(-100%); }
                  }
                `}
              </style>
            </div>
            
            <p className="text-lg sm:text-xl text-white/90 mt-8 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-1000">
              Al Huda Islamic Cultural Establishment - Where tradition meets innovation in education, fostering excellence through Islamic values and modern pedagogy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-1300">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 hover:shadow-2xl border-0 animate-glow"
              >
                Explore Programs
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-emerald-400/40 text-white hover:bg-emerald-400 hover:text-slate-900 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 backdrop-blur-xl bg-white/10 hover:shadow-2xl"
              >
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                Watch Tour
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-amber-400/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1 h-4 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 animate-zoom-slow"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Excellence in Numbers</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Achievements that speak of our commitment to educational excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Institutions", icon: Building, delay: "delay-0", color: "bg-gradient-to-br from-blue-500 to-indigo-600" },
              { number: "1000+", label: "Students", icon: Users, delay: "delay-200", color: "bg-gradient-to-br from-emerald-500 to-teal-600" },
              { number: "50+", label: "Faculty", icon: Award, delay: "delay-400", color: "bg-gradient-to-br from-amber-500 to-orange-600" },
              { number: "20+", label: "Years Excellence", icon: Star, delay: "delay-600", color: "bg-gradient-to-br from-violet-500 to-purple-600" }
            ].map((stat, index) => (
              <div key={index} className={`text-center group animate-slide-up ${stat.delay}`}>
                <div className={`w-24 h-24 ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                  <stat.icon className="text-white w-10 h-10" />
                </div>
                <div className="text-5xl font-bold text-slate-800 mb-3 animate-scale-in">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className="py-40 relative parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose Al Huda?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Discover what makes us the preferred choice for quality education</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: CheckCircle, 
                title: "Proven Excellence", 
                desc: "20+ years of educational leadership with outstanding academic results",
                delay: "delay-0" 
              },
              { 
                icon: Clock, 
                title: "Modern Facilities", 
                desc: "State-of-the-art infrastructure with latest technology integration",
                delay: "delay-200" 
              },
              { 
                icon: Target, 
                title: "Career Focus", 
                desc: "Industry-aligned curriculum with excellent placement opportunities",
                delay: "delay-400" 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 animate-scale-in ${item.delay}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full -translate-x-48 -translate-y-48 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/20 rounded-full translate-x-60 translate-y-60 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-400/10 rounded-full animate-spin-slow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Academic Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive programs designed to nurture intellectual growth and professional excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: BookOpen,
                title: "Undergraduate Programs",
                description: "Bachelor's degrees in Computer Applications, Commerce, Arts, and Sciences with modern curriculum.",
                gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "delay-0"
              },
              {
                icon: Award,
                title: "Postgraduate Programs", 
                description: "Master's programs with specializations designed for career advancement and research.",
                gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "delay-300"
              },
              {
                icon: Lightbulb,
                title: "Professional Courses",
                description: "Industry-focused diploma and certificate programs for skill development.",
                gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "delay-600"
              }
            ].map((program, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 card-hover animate-scale-in ${program.delay} border border-slate-200`}
              >
                <div 
                  className="h-64 bg-cover bg-center group-hover:scale-125 transition-transform duration-1000 relative overflow-hidden"
                  style={{ backgroundImage: `url(${program.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/40 transition-all duration-700"></div>
                </div>
                
                <div className="p-10">
                  <div className={`w-20 h-20 ${program.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-float`} style={{ animationDelay: `${index * 0.3}s` }}>
                    <program.icon className="text-white w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">{program.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">{program.description}</p>
                  
                  <Button 
                    variant="outline" 
                    className="group border-2 border-emerald-500 hover:border-amber-500 hover:bg-amber-500/10 text-slate-800 transition-all duration-500 hover:scale-105"
                  >
                    Explore Program
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section 
        className="py-40 relative parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(67, 56, 202, 0.9), rgba(99, 102, 241, 0.85)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Campus Life</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Experience vibrant campus culture with endless opportunities for growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Users, 
                title: "Student Organizations", 
                desc: "Join vibrant clubs and societies that match your interests",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "delay-0" 
              },
              { 
                icon: Trophy, 
                title: "Sports & Recreation", 
                desc: "State-of-the-art facilities for athletics and wellness",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "delay-200" 
              },
              { 
                icon: GraduationCap, 
                title: "Academic Support", 
                desc: "Tutoring, mentorship, and career guidance programs",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "delay-400" 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 animate-scale-in ${item.delay}`}
              >
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="h-full bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-48 h-48 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-spin-slow"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-10 animate-slide-up">
            Ready to Shape Your Future?
          </h2>
          
          <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto animate-fade-in delay-500">
            Join thousands of students who have chosen Al Huda for their educational journey. Experience excellence in education with Islamic values.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in delay-700">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 px-16 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-115 shadow-2xl animate-glow"
            >
              Apply Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-emerald-400/40 text-white hover:bg-emerald-400 hover:text-slate-900 px-16 py-6 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-115 backdrop-blur-xl bg-white/10 hover:shadow-2xl"
            >
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;