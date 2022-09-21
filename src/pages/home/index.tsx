import React from 'react';
import { ErrorBoundary } from '@components/errorBoundary';
import { HomeContainer, Wrapper } from './components';
import { Display } from '@components/display';
import { Keypad } from '@components/keypad';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import {
  backspaceExpression,
  clearExpression,
  clearHistory,
  equalExpression,
  setTap,
} from '@slices/calculatorSlice';
import { keyboardEnum } from '@constants/keyboard';
import { History } from '@components/history';

export const Home = () => {
  const { expression, history, error } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const tap = (value: string) => {
    if (value === keyboardEnum.CLEAR) {
      dispatch(clearExpression());
    } else if (value === keyboardEnum.CLEAR_ENTRY) {
      dispatch(backspaceExpression());
    } else if (value === keyboardEnum.EQUAL) {
      dispatch(equalExpression());
    } else {
      dispatch(setTap(value));
    }
  };

  return (
    <HomeContainer>
      <ErrorBoundary errorMessage={'Something went wrong...'}>
        <Wrapper>
          <Display value={expression} error={error} />
          <Keypad
            onClick={(val: string) => {
              tap(val);
            }}
          />
        </Wrapper>
        <History data={history} clearHistory={() => dispatch(clearHistory())} />
      </ErrorBoundary>
    </HomeContainer>
  );
};
