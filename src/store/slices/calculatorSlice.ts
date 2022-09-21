import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToExpression } from '../../utils/addToExpression';
import { backspaceToExpression } from '../../utils/backspaceToExpression';
import { evaluate } from 'mathjs';
import { transformResult } from '../../utils/transformResult';

interface InitialState {
  expression: string;
  history: string[];
  error: string;
}

const initialState: InitialState = {
  expression: '0',
  history: [],
  error: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setTap: (state, action: PayloadAction<string>) => {
      state.error = '';
      state.expression = addToExpression(state.expression, action.payload);
    },
    clearExpression: (state) => {
      state.error = '';
      state.expression = '0';
    },
    backspaceExpression: (state) => {
      state.error = '';
      state.expression = backspaceToExpression(state.expression);
    },
    equalExpression: (state) => {
      state.error = '';
      try {
        if (Number.isNaN(Number(state.expression))) {
          const res = transformResult(evaluate(state.expression));
          state.history.push(`${state.expression} = ${res}`);
          state.expression = String(res);
        }
      } catch (e) {
        state.error = 'Invalid expression';
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { setTap, clearHistory, clearExpression, backspaceExpression, equalExpression } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
