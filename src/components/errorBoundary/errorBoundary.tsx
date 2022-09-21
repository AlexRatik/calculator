import React, { Component, ReactNode } from 'react';
import { StyledError } from '@components/errorBoundary/components';

interface ErrorBoundaryProps {
  errorMessage: string;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <StyledError>{this.props.errorMessage}</StyledError>;
    }

    return this.props.children;
  }
}
