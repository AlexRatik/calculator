const operations = ['/', '*', '+', '-'];

export const addToExpression = (expression: string, value: string) => {
  let result = String(expression);
  console.log(result, typeof result);
  const lastCharIsOperation = operations.includes(result[result.length - 1]);
  const valueIsOperation = operations.includes(value);
  if (lastCharIsOperation && valueIsOperation) {
    return result.slice(0, result.length - 1) + value;
  }
  if (result === '0' && !operations.includes(value)) {
    console.log(1);
    result = value;
    return result;
  }
  return result + value;
};
