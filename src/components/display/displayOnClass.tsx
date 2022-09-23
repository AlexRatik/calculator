import React, { PureComponent } from 'react';
import { DisplayWrapper, ErrorWrapper } from '@components/display/components';

interface DisplayOnClassProps {
  value: string;
  error: string;
}

export class DisplayOnClass extends PureComponent<DisplayOnClassProps> {
  render() {
    const { error, value } = this.props;
    return (
      <DisplayWrapper data-testid="display">
        <p data-testid="display_text">{value}</p>
        <ErrorWrapper data-testid="display_error">{error}</ErrorWrapper>
      </DisplayWrapper>
    );
  }
}
