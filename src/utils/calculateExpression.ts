import { ErrorMessagesEnum } from '@constants/ErrorMessages';
import { calculateSubExpression } from './calculateSubExpression';

const openBracket = '(';
const closeBracket = ')';

export const calculateExpression = (expression: string) => {
  const arr = expression.split('');
  const firstOpenBracketIndex = expression.indexOf(openBracket);
  const lastOpenBracketIndex = expression.lastIndexOf(openBracket);
  const firstCloseBracketIndex = expression.indexOf(closeBracket);
  const lastCloseBracketIndex = expression.lastIndexOf(closeBracket);
  const openBracketsArr: string[] = arr.filter((s) => s === openBracket);
  const closeBracketsArr: string[] = arr.filter((s) => s === closeBracket);
  if (
    firstCloseBracketIndex < firstOpenBracketIndex ||
    lastOpenBracketIndex > lastCloseBracketIndex ||
    openBracketsArr.length !== closeBracketsArr.length
  ) {
    throw new Error(ErrorMessagesEnum.INVALID_BRACKETS);
  }
  let historyArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    historyArr.push(arr[i]);
    if (arr[i] === closeBracket) {
      historyArr.pop();
      const openBracketIndex = historyArr.lastIndexOf(openBracket);
      const resultInBrackets = calculateSubExpression(
        historyArr.splice(openBracketIndex + 1, i - openBracketIndex).join('')
      );
      historyArr.pop();
      historyArr.push(resultInBrackets);
    }

    if (i === arr.length - 1) {
      if (historyArr.includes(openBracket) || historyArr.includes(closeBracket)) {
        throw new Error(ErrorMessagesEnum.INVALID_BRACKETS);
      }
      const result = calculateSubExpression(historyArr.join(''));
      historyArr = [result];
    }
  }
  return historyArr[0];
};
