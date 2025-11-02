import React from 'react';

const Gradebook = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-72 flex-col gap-1">
          <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold leading-tight tracking-tight">บันทึกคะแนน</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">ห้อง ป.1/1</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border-light dark:border-border-dark h-10 px-4 text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-base">book</span>
            <span className="truncate">ภาคเรียนที่ 1 / ปีการศึกษา 2567</span>
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Add subject selection and grade table here */}
      </div>
    </div>
  );
};

export default Gradebook;
