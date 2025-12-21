import { Routes, Route } from 'react-router-dom';
import TestPage from '@/pages/test/TestPage';
import HomePage from '@/pages/home/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default AppRoutes;

