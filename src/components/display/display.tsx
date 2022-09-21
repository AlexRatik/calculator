import React from 'react';
import { DisplayWrapper, ErrorWrapper } from '@components/display/components';

interface DisplayProps {
  value: string;
  error: string;
}

export const Display = ({ value, error }: DisplayProps) => {
  return (
    <DisplayWrapper>
      <p>{value}</p>
      <ErrorWrapper>{error}</ErrorWrapper>
    </DisplayWrapper>
  );
};
