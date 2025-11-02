import React from 'react';

const StudentDetails = () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-72 flex-col gap-1">
          <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold leading-tight tracking-tight">ข้อมูลนักเรียน: วีระ ชัยชนะ</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">ภาพรวมข้อมูลทั้งหมดของนักเรียน</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary-light dark:text-text-primary-dark">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
            <span className="material-symbols-outlined text-base">edit</span>
            <span className="truncate">แก้ไขข้อมูลนักเรียน</span>
          </button>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add student details sections here */}
      </section>
    </div>
  );
};

export default StudentDetails;
