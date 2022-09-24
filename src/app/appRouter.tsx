import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '@pages/home';
import { Settings } from '@pages/settings';
import { HomeOnClass } from '@pages/home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="calculator/fc" />} />
      <Route path="calculator/fc" element={<Home />} />
      <Route path="calculator/cc" element={<HomeOnClass />} />
      <Route path="calculator/settings" element={<Settings />} />
    </Routes>
  );
};
