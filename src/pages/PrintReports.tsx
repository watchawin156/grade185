import React from 'react';

const PrintReports = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-72 flex-col gap-1">
          <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold leading-tight tracking-tight">พิมพ์ ปพ.</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">แก้ไขและพิมพ์เอกสาร ปพ. ของนักเรียน</p>
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
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 h-[calc(100vh-170px)]">
        {/* Add student list and report details here */}
      </div>
    </div>
  );
};

export default PrintReports;
