import React, { Component } from 'react';
import { DisplayWrapper, ErrorWrapper } from '@components/display/components';

interface DisplayOnClassProps {
  value: string;
  error: string;
}

export class DisplayOnClass extends Component<DisplayOnClassProps> {
  render() {
    return (
      <DisplayWrapper>
        <p>{this.props.value}</p>
        <ErrorWrapper>{this.props.error}</ErrorWrapper>
      </DisplayWrapper>
    );
  }
}
