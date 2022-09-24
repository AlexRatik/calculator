import { isNumber } from './isNumber';
import { ErrorMessagesEnum } from '@constants/ErrorMessages';
import { operationsPriorities } from '@constants/operations';
import { OperationType } from '@types';
import { calculateOperation } from './calculateOperation';

export const calculateSubExpression: (expr: string) => string = (expression: string) => {
  if (!isNumber(expression[expression.length - 1]))
    throw new Error(ErrorMessagesEnum.INVALID_EXPRESSION);
  const arr = expression.split('');
  const valuesStack = [];
  const operationsStack = [];
  let tempValue = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-' && !isNumber(arr[i - 1])) {
      tempValue += arr[i];
      continue;
    }
    if (!isNumber(arr[i])) {
      if (tempValue.length > 0) valuesStack.push(tempValue);
      tempValue = '';

      if (valuesStack.length === 0) {
        valuesStack.push(arr[i]);
      } else {
        if (
          operationsPriorities[arr[i] as OperationType] <
          operationsPriorities[operationsStack[operationsStack.length - 1] as OperationType]
        ) {
          const [a, b]: unknown[] = valuesStack.splice(-2);
          valuesStack.push(calculateOperation(operationsStack.pop(), a as number, b as number));
        }
      }
      operationsStack.push(arr[i]);
    } else {
      tempValue += arr[i];
      if (i === arr.length - 1) {
        valuesStack.push(tempValue);
        let HIGH_PRIORITY = Math.max(...Object.values(operationsPriorities));
        while (valuesStack.length > 1 && HIGH_PRIORITY > 0) {
          for (let j = 0; j < operationsStack.length; j++) {
            if (operationsPriorities[operationsStack[j] as OperationType] === HIGH_PRIORITY) {
              const result = calculateOperation(
                operationsStack[j],
                valuesStack[j] as number,
                valuesStack[j + 1] as number
              );
              operationsStack.splice(j, 1);
              valuesStack.splice(j, 2, result);
              HIGH_PRIORITY = 3;
            }
          }
          HIGH_PRIORITY -= 1;
        }
      }
    }
  }
  return String(valuesStack[0]);
};
