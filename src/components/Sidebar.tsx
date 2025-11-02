import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark hover:text-primary dark:hover:text-primary ${
      isActive ? 'bg-primary/10 text-primary' : ''
    }`;

  return (
    <aside className="flex h-screen min-h-[700px] w-64 flex-col justify-between bg-content-light dark:bg-content-dark p-4 border-r border-border-light dark:border-border-dark fixed">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHfHT0QhoVU-hiycT6DM7UD4J6p-wrIHR51vgydVMM0a__3OY2Gmigot4hUbDWAyI1bO3zIh3toyQDo9Y4q1EsbH96vV0VyGLLMs0XUE8b2JhzfMMwV5uw06LohYJRjmAbnHdP6ZuPkHTq9GksF4-qte3zVzyX_hrvanHQV8cW83KjSiW6RRNBTWz6pCjPuX7yMdH4AuFQN0izwYF_XuLfqazO348c708kSrvTRwwYlg37zsJXlpuHW09RdbSTL0fQHcjF5tHCE04")'}}></div>
          <div className="flex flex-col">
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-normal">PrimarySchool App</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">Teacher Portal</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" className={navLinkClasses}>
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium leading-normal">แดชบอร์ด</p>
          </NavLink>
          <NavLink to="/students/1" className={navLinkClasses}>
            <span className="material-symbols-outlined">groups</span>
            <p className="text-sm font-medium leading-normal">รายชื่อนักเรียน</p>
          </NavLink>
          <NavLink to="/attendance/daily" className={navLinkClasses}>
            <span className="material-symbols-outlined">fact_check</span>
            <p className="text-sm font-medium leading-normal">เช็คชื่อ</p>
          </NavLink>
          <NavLink to="/health" className={navLinkClasses}>
            <span className="material-symbols-outlined">health_and_safety</span>
            <p className="text-sm font-medium leading-normal">สุขภาพ</p>
          </NavLink>
          <NavLink to="/grades" className={navLinkClasses}>
            <span className="material-symbols-outlined">grading</span>
            <p className="text-sm font-medium leading-normal">บันทึกคะแนน</p>
          </NavLink>
          <NavLink to="/assessment/traits" className={navLinkClasses}>
            <span className="material-symbols-outlined">psychology</span>
            <p className="text-sm font-medium leading-normal">ประเมินคุณลักษณะ</p>
          </NavLink>
          <NavLink to="/print-reports" className={navLinkClasses}>
            <span className="material-symbols-outlined">print</span>
            <p className="text-sm font-medium leading-normal">พิมพ์ ปพ.</p>
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark hover:text-primary dark:hover:text-primary">
          <span className="material-symbols-outlined">account_circle</span>
          <p className="text-sm font-medium leading-normal">Profile</p>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark hover:text-primary dark:hover:text-primary">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium leading-normal">Logout</p>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
