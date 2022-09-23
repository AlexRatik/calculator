const operations = ['/', '*', '+', '-', '%', '(', ')'];

const reverseAndJoin: (val: string) => string = (str: string) => {
  return str.split('').reverse().join('');
};

export const toggleValue: (val: string) => string = (expr: string) => {
  const arr = expr.split('');
  let value = '';
  let result = '';

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!operations.includes(arr[i])) {
      value += arr[i];
    } else {
      // (1+1)3=>(1+1)*(-3
      if (arr[i] === ')') {
        result = expr.slice(0, i + 1) + `*(-${reverseAndJoin(value)}`;
        break;
      }

      // For example: (-4) => 4
      if (arr[i] === '-' && arr[i - 1] == '(' && arr[i - 2] === undefined) {
        result = reverseAndJoin(value);
        break;
      }
      // For example: 2+(-6) => 2+6
      if (arr[i] === '-' && arr[i - 1] === '(') {
        result = expr.slice(0, i - 1) + reverseAndJoin(value);
        break;
      }
      //if arr[i] is operation and arr[i-1] is number. For example: 9+5 => 9+(-5)
      if (+arr[i - 1] >= 0 && i === arr.length - 1) {
        result = expr.slice(0, i + 1) + `(-`;
        break;
      }
      // (3+2)+3=>(3+2)+(-3)
      if (+arr[i - 1] >= 0 || arr[i - 1] === ')') {
        result = expr.slice(0, i + 1) + `(-${reverseAndJoin(value)})`;
        break;
      }
      //(42-23) => ((-42)-23)
      if (arr[i] === '(') {
        result = expr.slice(0, i + 1) + `(-${reverseAndJoin(value)})`;
        break;
      }
    }
  }

  return result || `(-${reverseAndJoin(value)})`;
};
