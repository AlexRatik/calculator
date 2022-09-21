import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { keyboard } from '@constants/keyboard';
import { Button, Container } from '@components/keyboard/components';

interface KeyboardProps {
  onClick: (val: string) => void;
}

export const Keyboard = ({ onClick }: KeyboardProps) => {
  return (
    <Container>
      {keyboard.map((button) => (
        <Button key={uuidv4()} onClick={() => onClick(button)}>
          {button}
        </Button>
      ))}
    </Container>
  );
};
