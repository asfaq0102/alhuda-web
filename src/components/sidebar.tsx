import React from 'react';
import {
  LayoutDashboard,
  Megaphone,
  BookOpen,
  FileText,
  Users,
  CreditCard,
  Bookmark,
  HelpCircle,
  Settings,
  Box,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, name: 'Dashboard', path: '/dashboard' },
  { icon: Megaphone, name: 'Announcements', path: '/announcements' },
  { icon: BookOpen, name: 'Courses', path: '/courses' },
  { icon: FileText, name: 'Exams & Result', path: '/exams' },
  { icon: Users, name: 'Attendance', path: '/attendance' },
  { icon: CreditCard, name: 'Payments', path: '/payments' },
];

const bottomNavItems = [
  { icon: Bookmark, name: 'Saved', path: '/saved' },
  { icon: HelpCircle, name: 'Help & Support', path: '/support' },
  { icon: Settings, name: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1A1A1A] p-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10">
          <Box className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">Campus Connect</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#AFFF81] text-black font-semibold'
                    : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-700 pt-4">
        <nav className="flex flex-col space-y-2">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 