import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight, Star, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address.",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubscribed(true);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });

      // Reset form after successful submission
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-bounce blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-violet-400 to-pink-500 rounded-full animate-spin-slow blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Enhanced Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Enhanced About Section */}
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-gradient">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                Al Huda College
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Excellence in education with Islamic values. Shaping tomorrow's leaders through comprehensive academic programs and character development.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600" },
                { Icon: Twitter, color: "hover:bg-sky-500" },
                { Icon: Instagram, color: "hover:bg-pink-600" },
                { Icon: Youtube, color: "hover:bg-red-600" }
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${color} transition-all duration-500 hover:scale-125 hover:rotate-12 border border-white/20 social-icon-animate`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="animate-fade-in delay-200">
            <h4 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <Star className="w-6 h-6 mr-2 text-amber-400 animate-pulse" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Academic Programs', 'Admission Process', 'Faculty Excellence', 'Student Life', 'Campus Tour'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-all duration-500 flex items-center group text-lg">
                    <ArrowRight size={16} className="mr-3 group-hover:translate-x-2 transition-transform duration-500 text-emerald-400" />
                    <span className="relative">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-500"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Programs */}
          <div className="animate-fade-in delay-400">
            <h4 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <Star className="w-6 h-6 mr-2 text-rose-400 animate-pulse" />
              Programs
            </h4>
            <ul className="space-y-4">
              {['Undergraduate Studies', 'Postgraduate Studies', 'Professional Courses', 'Distance Learning', 'Research Programs'].map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-all duration-500 flex items-center group text-lg">
                    <ArrowRight size={16} className="mr-3 group-hover:translate-x-2 transition-transform duration-500 text-amber-400" />
                    <span className="relative">
                      {program}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-500"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="animate-fade-in delay-600">
            <h4 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-400 animate-pulse" />
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                <MapPin size={24} className="text-blue-400 mt-1 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="text-white font-medium">Al Huda Campus</p>
                  <p className="text-gray-300">Education City, Knowledge District</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                <Phone size={24} className="text-emerald-400 flex-shrink-0 animate-bounce" />
                <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                <Mail size={24} className="text-amber-400 flex-shrink-0 animate-pulse mt-1" />
                <p className="text-gray-300 text-lg break-all">info@alhudacollege.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="text-center animate-fade-in delay-800">
            <h4 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
              Stay Updated with Al Huda
            </h4>
            <p className="text-gray-300 mb-8 text-xl">Subscribe to our newsletter for latest updates and announcements</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto items-center">
              <div className="flex-1 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full h-[46px] px-6 rounded-xl bg-white/10 backdrop-blur-sm border ${
                    isSubscribed ? 'border-emerald-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-500 text-base disabled:opacity-50`}
                  disabled={isSubmitting || isSubscribed}
              />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className={`${
                  isSubscribed 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } h-[46px] px-6 rounded-xl transition-all duration-500 hover:scale-105 shadow-lg text-base font-medium whitespace-nowrap min-w-[120px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : isSubscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Enhanced Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 Al Huda College. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white text-lg transition-all duration-500 relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;