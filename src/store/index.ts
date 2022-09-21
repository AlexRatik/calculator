import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from '@slices/themeSlice';
import calculatorReducer from '@slices/calculatorSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
