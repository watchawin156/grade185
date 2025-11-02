import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HealthOverview from './pages/HealthOverview';
import TeacherDashboard from './pages/TeacherDashboard';
import DailyAttendance from './pages/DailyAttendance';
import StudentDetails from './pages/StudentDetails';
import PrintReports from './pages/PrintReports';
import TraitAssessment from './pages/TraitAssessment';
import Gradebook from './pages/Gradebook';
import YearlyAttendanceSummary from './pages/YearlyAttendanceSummary';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="health" element={<HealthOverview />} />
          <Route path="attendance/daily" element={<DailyAttendance />} />
          <Route path="students/:studentId" element={<StudentDetails />} />
          <Route path="print-reports" element={<PrintReports />} />
          <Route path="assessment/traits" element={<TraitAssessment />} />
          <Route path="grades" element={<Gradebook />} />
          <Route path="attendance/summary" element={<YearlyAttendanceSummary />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
