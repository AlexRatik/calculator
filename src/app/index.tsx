import React from 'react';
import { AppRouter } from './appRouter';
import { useAppSelector } from '@hooks/hooks';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};
