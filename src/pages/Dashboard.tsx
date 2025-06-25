import React from 'react';
import Sidebar from '../components/sidebar';
import { Search, Bell, User as UserIcon, BookCopy, Briefcase, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';

const upcomingEvents = [
  {
    title: 'Machine Learning Workshop',
    author: 'Dr. Alan V. Oppenheim',
    image: '/images/concert-performance-1.jpg',
  },
  {
    title: 'Cybersecurity Workshop',
    author: 'Dr. Steve B. Weinstein',
    image: '/images/concert-performance-2.jpg',
  },
  {
    title: 'Environmental Workshop',
    author: 'Dr. Jane Goodall',
    image: '/images/premier-league-panel.jpg',
  },
];

const courseInfo = [
  {
    title: 'Total Attendance',
    description: 'Overall attendance for all subjects',
    progress: 78,
    icon: BarChart,
  },
  {
    title: 'Assignments',
    description: 'Submitted and pending assignments',
    progress: 92,
    icon: Briefcase,
  },
  {
    title: 'Overall Syllabus',
    description: 'Completed topics across all courses',
    progress: 62,
    icon: BookCopy,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#1A1A1A] border border-gray-700 rounded-lg pl-10 pr-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-[#AFFF81]/50"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-800">
              <Bell className="text-gray-400" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-800">
              <img
                src="https://i.pravatar.cc/40"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-600"
              />
            </button>
          </div>
        </header>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="bg-[#AFFF81] text-black hover:bg-[#AFFF81]/90">Workshops</Button>
              <Button variant="ghost" className="hover:bg-gray-800 text-gray-400 hover:text-white">Webinar</Button>
              <Button variant="ghost" className="hover:bg-gray-800 text-gray-400 hover:text-white">Cultural</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-[#1A1A1A] rounded-2xl p-4 group">
                <div className="relative mb-4">
                  <img src={event.image} alt={event.title} className="rounded-xl w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Information */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Course Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseInfo.map((course) => (
              <div key={course.title} className="bg-[#1A1A1A] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-700/50 rounded-lg">
                    <course.icon className="w-6 h-6 text-[#AFFF81]" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-[#AFFF81] to-emerald-400 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard; 