import { ErrorMessagesEnum } from '@constants/ErrorMessages';

export const calculateOperation = (operation: string | undefined, x: number, y: number) => {
  const a = +x;
  const b = +y;
  if ((operation === '/' || operation === '%') && (a === 0 || b === 0)) {
    throw new Error(ErrorMessagesEnum.DIVISION_BY_ZERO);
  }
  switch (operation) {
    case '+': {
      return +a + +b;
    }
    case '-': {
      return +a - +b;
    }
    case '*': {
      return +a * +b;
    }
    case '/': {
      return +a / +b;
    }
    case '%': {
      return +a % +b;
    }
    default: {
      return new Error(ErrorMessagesEnum.SOMETHING_WENT_WRONG);
    }
  }
};
