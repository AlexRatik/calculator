const operationsAndDot = ['.', '/', '*', '+', '-'];

export const addToExpression = (expression: string, value: string) => {
  let result = String(expression);
  const lastCharIsOperation = operationsAndDot.includes(result[result.length - 1]);
  const valueIsOperation = operationsAndDot.includes(value);
  if (lastCharIsOperation && valueIsOperation) {
    return result.slice(0, result.length - 1) + value;
  }
  if (result === '0' && !operationsAndDot.includes(value)) {
    result = value;
    return result;
  }
  if (result === '-0' && !operationsAndDot.includes(value)) {
    result = '-' + value;
    return result;
  }
  return result + value;
};
