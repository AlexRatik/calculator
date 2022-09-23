import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Container } from '@components/keypad/components';

interface KeypadProps {
  onClick: (val: string) => void;
  keypadButtons: string[];
}

export const Keypad = memo(({ onClick, keypadButtons }: KeypadProps) => {
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
});
