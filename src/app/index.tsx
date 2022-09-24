import { AppRouter } from './appRouter';
import { useAppSelector } from '@hooks';
import { ThemeProvider } from 'styled-components';
import { Header } from '@components/header';
import { GlobalStyles } from '@styles';

export const App = () => {
  const { configuration } = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={configuration}>
      <Header />
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  );
};
