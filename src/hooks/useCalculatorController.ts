import { keypadEnum } from '@constants/keypadButtons';
import {
  backspaceExpression,
  clearExpression,
  equalExpression,
  setTap,
  toggleSign,
} from '@slices/calculatorSlice';
import { useAppDispatch } from './reduxHooks';

export const useCalculatorController = () => {
  const dispatch = useAppDispatch();
  return (value: string) => {
    if (value === keypadEnum.CLEAR) {
      return dispatch(clearExpression());
    } else if (value === keypadEnum.CLEAR_ENTRY) {
      return dispatch(backspaceExpression());
    } else if (value === keypadEnum.EQUAL) {
      return dispatch(equalExpression());
    } else if (value === keypadEnum.TOGGLE_SIGN) {
      return dispatch(toggleSign());
    } else {
      return dispatch(setTap(value));
    }
  };
};
