import React, { Component } from 'react';
import { keypad } from '@constants/keypad';
import { Button, Container } from '@components/keypad/components';
import { v4 as uuidv4 } from 'uuid';

interface KeypadOnClassProps {
  onClick: (val: string) => void;
}

export class KeypadOnClass extends Component<KeypadOnClassProps> {
  render() {
    return (
      <Container>
        {keypad.map((button) => (
          <Button key={uuidv4()} onClick={() => this.props.onClick(button)}>
            {button}
          </Button>
        ))}
      </Container>
    );
  }
}
