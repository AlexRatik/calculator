const operations = ['/', '*', '+', '-'];

export const toggleLastValueSign = (expr: string) => {
  console.log(expr);
  const arr = expr.split('');
  let value = '';
  let index = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!operations.includes(arr[i])) {
      value += arr[i];
    } else {
      if (arr[i] === '-' && arr[i - 1] == undefined) {
        return value.split('').reverse().join('');
      }
      if (arr[i] === '-' && operations.includes(arr[i - 1])) {
        return expr.slice(0, i) + value.split('').reverse().join('');
      }
      if (operations.includes(arr[i]) && +arr[i - 1] > 0) {
        return expr.slice(0, i + 1) + '-' + value.split('').reverse().join('');
      }
      index = i;
      break;
    }
  }
  value += '-';
  return expr.slice(0, index) + value.split('').reverse().join('');
};
