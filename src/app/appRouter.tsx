import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@pages/home';
import { Settings } from '@pages/settings';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/fc" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
