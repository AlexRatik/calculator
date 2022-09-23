import { DisplayWrapper, ErrorWrapper } from '@components/display/components';
import { memo } from 'react';

interface DisplayProps {
  value: string;
  error: string;
}

export const Display = memo(({ value, error }: DisplayProps) => {
  return (
    <DisplayWrapper data-testid="display">
      <p data-testid="display_text">{value}</p>
      <ErrorWrapper data-testid="display_error">{error}</ErrorWrapper>
    </DisplayWrapper>
  );
});
