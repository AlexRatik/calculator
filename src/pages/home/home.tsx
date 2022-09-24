import { useState } from 'react';
import { ErrorBoundary } from '@components/errorBoundary';
import { HomeContainer, Wrapper } from './components';
import { Display } from '@components/display';
import { Keypad } from '@components/keypad';
import { useAppDispatch, useAppSelector } from '@hooks';
import { clearExpression, clearHistory } from '@slices/calculatorSlice';
import { keypadButtons } from '@constants/keypadButtons';
import { History } from '@components/history';
import { ControlPanel } from '@components/controlPanel';
import { useCalculatorController } from '@hooks';
import { ErrorMessagesEnum } from '@constants/ErrorMessages';

export const Home = () => {
  const { expression, history, error } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const [isShowHistory, setIsShowHistory] = useState<boolean>(true);

  const tap = useCalculatorController();

  const clearAll = () => {
    dispatch(clearExpression());
    dispatch(clearHistory());
  };

  return (
    <HomeContainer>
      <ErrorBoundary errorMessage={ErrorMessagesEnum.SOMETHING_WENT_WRONG}>
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
        <ControlPanel
          isShowHistory={isShowHistory}
          setIsShowHistory={() => setIsShowHistory((prev) => !prev)}
          clearAll={clearAll}
        />
      </ErrorBoundary>
    </HomeContainer>
  );
};
