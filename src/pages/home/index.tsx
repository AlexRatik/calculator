import React from 'react';
import { ErrorBoundary } from '@components/errorBoundary';

export const Home = () => {
  return (
    <ErrorBoundary errorMessage={'Something went wrong...'}>
      <p>fsagwf</p>
    </ErrorBoundary>
  );
};
