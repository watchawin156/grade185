import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-72 flex-col gap-1">
          <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold leading-tight tracking-tight">สวัสดี, คุณครูอนงค์!</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">นี่คือภาพรวมของห้องเรียนของคุณวันนี้</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary-light dark:text-text-primary-dark">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8 lg:col-span-3">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Add stat cards here */}
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="lg:col-span-2">
              <h2 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold leading-tight tracking-tight mb-4">เลือกชั้น</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Add grade selection buttons here */}
              </div>
            </section>
            <section className="lg:col-span-1">
              <h2 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold leading-tight tracking-tight mb-4">การแจ้งเตือนสำคัญ</h2>
              <div className="bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark rounded-xl p-4 space-y-3">
                {/* Add notification items here */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
