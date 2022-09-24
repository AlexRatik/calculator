import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '@pages/home';
import { Settings } from '@pages/settings';
import { HomeOnClass } from '@pages/home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="fc" element={<Home />} />
        <Route path="cc" element={<HomeOnClass />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
