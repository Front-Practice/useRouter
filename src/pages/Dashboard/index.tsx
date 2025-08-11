import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaDesktop, FaFolder, FaDownload, FaMusic, FaImage, FaVideo, FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6'

const sidebarItems = [
  { path: '/', name: 'Home', icon: <FaHome /> },
  { path: '/desktop', name: 'Desktop', icon: <FaDesktop /> },
  { path: '/documents', name: 'Documents', icon: <FaFolder /> },
  { path: '/downloads', name: 'Downloads', icon: <FaDownload /> },
  { path: '/music', name: 'Music', icon: <FaMusic /> },
  { path: '/pictures', name: 'Pictures', icon: <FaImage /> },
  { path: '/videos', name: 'Videos', icon: <FaVideo /> },
  { path: '/users', name: 'Users', icon: <FaUsers /> },
];

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-60 flex-shrink-0 bg-gray-800 text-white">
        <div className="p-4 text-2xl font-bold">File Explorer</div>
        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200 ${
                  isActive ? 'bg-gray-900' : ''
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet /> 
      </main>
    </div>
  );
};

export default React.memo(DashboardLayout);