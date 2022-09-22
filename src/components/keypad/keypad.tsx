import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { keypad } from '@constants/keypad';
import { Button, Container } from '@components/keypad/components';

interface KeyboardProps {
  onClick: (val: string) => void;
}

export const Keypad = ({ onClick }: KeyboardProps) => {
  return (
    <Container>
      {keypad.map((button) => (
        <Button key={uuidv4()} onClick={() => onClick(button)}>
          {button}
        </Button>
      ))}
    </Container>
  );
};
