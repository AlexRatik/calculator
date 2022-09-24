import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addSymbolToExpression } from '@utils';
import { backspaceFromExpression } from '@utils';
import { transformResult } from '@utils';
import { toggleValue } from '@utils';
import { ICalculator } from '@interfaces';
import { calculateExpression } from '@utils';
import { ErrorMessagesEnum } from '@constants/ErrorMessages';

const initialState: ICalculator = {
  expression: '0',
  history: [],
  error: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleSign: (state) => {
      state.expression = toggleValue(state.expression);
    },
    setTap: (state, action: PayloadAction<string>) => {
      state.error = '';
      state.expression = addSymbolToExpression(state.expression, action.payload);
    },
    clearExpression: (state) => {
      state.error = '';
      state.expression = '0';
    },
    backspaceExpression: (state) => {
      state.error = '';
      state.expression = backspaceFromExpression(state.expression);
    },
    equalExpression: (state) => {
      state.error = '';
      try {
        if (Number.isNaN(Number(state.expression))) {
          const res = transformResult(calculateExpression(state.expression));
          state.history.push(`${state.expression} = ${res}`);
          state.expression = String(res);
        }
      } catch (e) {
        if (e instanceof Error) {
          state.error = e.message;
        } else {
          state.error = ErrorMessagesEnum.SOMETHING_WENT_WRONG;
        }
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const {
  setTap,
  toggleSign,
  clearHistory,
  clearExpression,
  backspaceExpression,
  equalExpression,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
