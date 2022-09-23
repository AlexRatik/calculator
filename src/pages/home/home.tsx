import React, { useState } from 'react';
import { ErrorBoundary } from '@components/errorBoundary';
import { HomeContainer, Wrapper, ShowHideButton } from './components';
import { Display } from '@components/display';
import { Keypad } from '@components/keypad';
import { useAppDispatch, useAppSelector } from '@hooks';
import {
  backspaceExpression,
  clearExpression,
  clearHistory,
  equalExpression,
  setTap,
  toggleSign,
} from '@slices/calculatorSlice';
import { keypadEnum, keypadButtons } from '@constants/keypadButtons';
import { History } from '@components/history';

export const Home = () => {
  const { expression, history, error } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const [isShowHistory, setIsShowHistory] = useState<boolean>(true);

  const tap = (value: string) => {
    if (value === keypadEnum.CLEAR) {
      dispatch(clearExpression());
    } else if (value === keypadEnum.CLEAR_ENTRY) {
      dispatch(backspaceExpression());
    } else if (value === keypadEnum.EQUAL) {
      dispatch(equalExpression());
    } else if (value === keypadEnum.TOGGLE_SIGN) {
      dispatch(toggleSign());
    } else {
      dispatch(setTap(value));
    }
  };

  return (
    <HomeContainer>
      <ErrorBoundary errorMessage={'Something went wrong...Try again, please'}>
        <Wrapper>
          <Display value={expression} error={error} />
          <Keypad
            keypadButtons={keypadButtons}
            onClick={(val: string) => {
              tap(val);
            }}
          />
        </Wrapper>
        <History
          isShow={isShowHistory}
          data={history}
          clearHistory={() => dispatch(clearHistory())}
        />
        <ShowHideButton onClick={() => setIsShowHistory((prev) => !prev)}>
          {isShowHistory ? 'Hide' : 'Show'} history
        </ShowHideButton>
      </ErrorBoundary>
    </HomeContainer>
  );
};
