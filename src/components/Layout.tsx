import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="relative">
          <div className="absolute top-0 right-0">
            <ThemeSwitcher />
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
