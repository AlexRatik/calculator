const operations = ['/', '*', '+', '-'];

export const addToExpression = (expression: string, value: string) => {
  let result = String(expression);
  const lastCharIsOperation = operations.includes(result[result.length - 1]);
  const valueIsOperation = operations.includes(value);
  if (lastCharIsOperation && valueIsOperation) {
    return result.slice(0, result.length - 1) + value;
  }
  if (result === '0' && !operations.includes(value)) {
    result = value;
    return result;
  }
  if (result === '-0' && !operations.includes(value)) {
    result = '-' + value;
    return result;
  }
  return result + value;
};
