import React from 'react';

const HealthOverview = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-72 flex-col gap-1">
          <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold leading-tight tracking-tight">ภาพรวมสุขภาพนักเรียน</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">ห้อง ป.1/1</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border-light dark:border-border-dark h-10 px-4 text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            <span className="truncate">ปีการศึกษา 2567</span>
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-6">
        <div className="flex border-b border-border-light dark:border-border-dark">
          <button className="px-4 py-2 text-sm font-semibold border-b-2 border-primary text-primary">ภาพรวมชั้นเรียน</button>
          <button className="px-4 py-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark">บันทึกสุขภาพรายบุคคล</button>
        </div>
        <div className="bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-text-primary-light dark:text-text-primary-dark border-collapse">
              <thead className="bg-gray-50 dark:bg-gray-800 text-center">
                <tr>
                  <th className="px-4 py-3 font-bold sticky-col-header text-left min-w-[200px] border-r border-border-light dark:border-border-dark" rowSpan={2} scope="col">เลขที่ ชื่อ - นามสกุล</th>
                  <th className="px-2 py-3 font-bold min-w-[160px] border-r border-border-light dark:border-border-dark" colSpan={4} scope="colgroup">เทอม 1</th>
                  <th className="px-2 py-3 font-bold min-w-[160px]" colSpan={4} scope="colgroup">เทอม 2</th>
                </tr>
                <tr>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">น้ำหนัก (ครั้งที่ 1)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">ส่วนสูง (ครั้งที่ 1)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">น้ำหนัก (ครั้งที่ 2)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">ส่วนสูง (ครั้งที่ 2)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">น้ำหนัก (ครั้งที่ 1)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">ส่วนสูง (ครั้งที่ 1)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px] border-r border-border-light dark:border-border-dark" scope="col">น้ำหนัก (ครั้งที่ 2)</th>
                  <th className="px-2 py-2 font-medium min-w-[80px]" scope="col">ส่วนสูง (ครั้งที่ 2)</th>
                </tr>
              </thead>
              <tbody>
                {/* Add table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthOverview;
