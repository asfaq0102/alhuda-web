import React from 'react';
import { Image, Sparkles, Camera, Users, Star } from 'lucide-react';
import Footer from '@/components/Footer';

const Gallery = () => {
  const galleryImages = [
    // New Images
    {
      url: "/images/faculty-group.jpg",
      title: "Faculty Excellence",
      category: "Faculty",
      description: "Our dedicated faculty members with their achievements under the campus tree"
    },
    {
      url: "/images/premier-league-session.jpg",
      title: "Premier League Session",
      category: "Academic",
      description: "Interactive session with students during the Ilahiya Premier League event"
    },
    {
      url: "/images/premier-league-panel.jpg",
      title: "Expert Panel Discussion",
      category: "Academic",
      description: "Distinguished panel members engaging in the Premier League discussion"
    },
    {
      url: "/images/concert-performance-1.jpg",
      title: "Stage Performance",
      category: "Cultural",
      description: "Dynamic stage performance with spectacular lighting effects"
    },
    {
      url: "/images/concert-performance-2.jpg",
      title: "Concert Highlights",
      category: "Cultural",
      description: "Energetic performance showcasing student talent"
    },
    {
      url: "/images/concert-crowd.jpg",
      title: "Concert Celebration",
      category: "Cultural",
      description: "Students celebrating during the cultural event with amazing effects"
    },
    {
      url: "/images/premier-league-debate.jpg",
      title: "Premier League Competition",
      category: "Academic",
      description: "Students participating in the Ilahiya Premier League debate competition"
    },
    // Existing Images
    {
      url: "/images/IMG-20241221-WA0066.jpg",
      title: "NSS Activities 2024",
      category: "NSS",
      description: "Students participating in National Service Scheme activities and community service"
    },
    {
      url: "/images/IMG-20240926-WA0041.jpg",
      title: "NSS Campaign",
      category: "NSS",
      description: "Students gathered for an evening event at the Open Air Auditorium"
    },
    {
      url: "/images/IMG-20240203-WA0188.jpg",
      title: "Faculty Recognition",
      category: "Faculty",
      description: "Interactive learning session with students in the college auditorium"
    },
    {
      url: "/images/IMG-20240102-WA0014.jpg",
      title: "Student Assembly",
      category: "Events",
      description: "Recognition and awards ceremony for outstanding achievements"
    },
    {
      url: "/images/IMG-20240101-WA0322.jpg",
      title: "Student Gathering",
      category: "NSS",
      description: "NSS volunteers participating in Swachhata Hi Seva 2024 campaign"
    },
    {
      url: "/images/IMG-20231004-WA0015.jpg",
      title: "Cultural Activity",
      category: "Events",
      description: "Students participating in cultural activities with traditional pot decoration"
    },
    {
      url: "/images/IMG-20250521-WA0000.jpg",
      title: "Award Ceremony",
      category: "Events",
      description: "Students gathered for an important academic session"
    },
    {
      url: "/images/IMG-20250524-WA0040.jpg",
      title: "Academic Session",
      category: "Faculty",
      description: "Faculty members receiving recognition for their contributions"
    },
    {
      url: "/images/NSS-2023-2025.jpg",
      title: "NSS Group Photo",
      category: "NSS",
      description: "NSS volunteers and coordinators gathered for a group photo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
      {/* Hero Section */}
      <section 
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
            Our Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
            Explore our vibrant campus life, NSS activities, and memorable moments through our collection
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Camera className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Campus Life in Pictures</h2>
            <p className="text-xl text-gray-600">A visual journey through our educational environment and activities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-125"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Image className="text-white" size={20} />
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "1000+", label: "Photos", icon: Camera, gradient: "from-blue-600 to-cyan-600" },
              { number: "50+", label: "Events", icon: Star, gradient: "from-purple-600 to-pink-600" },
              { number: "100+", label: "Activities", icon: Users, gradient: "from-amber-600 to-orange-600" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-gray-200 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">Join Our Community</h2>
          <p className="text-xl text-gray-200 mb-8">
              Be part of our vibrant campus life and create your own memorable moments
          </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
              Apply Now
          </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
