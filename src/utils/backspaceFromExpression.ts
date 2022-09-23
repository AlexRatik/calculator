export const backspaceFromExpression = (expression: string) => {
  if (expression.length === 1) {
    return '0';
  } else {
    return expression.slice(0, expression.length - 1);
  }
};
