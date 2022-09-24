import { Component } from 'react';
import { Button, Container } from '@components/keypad/components';
import { v4 as uuidv4 } from 'uuid';

interface KeypadOnClassProps {
  onClick: (val: string) => void;
  keypadButtons: string[];
}

export class KeypadOnClass extends Component<KeypadOnClassProps> {
  render() {
    const { keypadButtons, onClick } = this.props;
    return (
      <Container>
        {keypadButtons.map((button) => (
          <Button
            key={uuidv4()}
            onClick={() => onClick(button)}
            data-testid={`keypad_button${button}`}
          >
            {button}
          </Button>
        ))}
      </Container>
    );
  }
}
