import React, { Component } from 'react';
import { ICalculator } from '@interfaces/ICalculator';
import { connect } from 'react-redux';
import {
  backspaceExpression,
  clearExpression,
  clearHistory,
  equalExpression,
  setTap,
  toggleSign,
} from '@slices/calculatorSlice';
import { ErrorBoundary } from '@components/errorBoundary';
import { HomeContainer, ShowHideButton, Wrapper } from '@pages/home/components';
import { DisplayOnClass } from '@components/display';
import { KeypadOnClass } from '@components/keypad';
import { HistoryOnClass } from '@components/history';
import { keyboardEnum } from '@constants/keypad';

interface HomeOnClassProps extends ICalculator {
  setTap: (action: string) => void;
  toggleSign: () => void;
  clearHistory: () => void;
  clearExpression: () => void;
  backspaceExpression: () => void;
  equalExpression: () => void;
}

interface HomeOnClassState {
  isShowHistory: boolean;
}

class HomeOnClass extends Component<HomeOnClassProps, HomeOnClassState> {
  constructor(props: HomeOnClassProps) {
    super(props);
    this.state = {
      isShowHistory: true,
    };
  }

  tap = (value: string) => {
    if (value === keyboardEnum.CLEAR) {
      this.props.clearExpression();
    } else if (value === keyboardEnum.CLEAR_ENTRY) {
      this.props.backspaceExpression();
    } else if (value === keyboardEnum.EQUAL) {
      this.props.equalExpression();
    } else if (value === keyboardEnum.TOGGLE_SIGN) {
      this.props.toggleSign();
    } else {
      this.props.setTap(value);
    }
  };

  setIsShowHistory = () => {
    this.setState((prev) => ({ isShowHistory: !prev.isShowHistory }));
  };

  render() {
    const { isShowHistory } = this.state;
    const { expression, history, error } = this.props;
    return (
      <HomeContainer>
        <ErrorBoundary errorMessage={'Something went wrong...Try again, please'}>
          <Wrapper>
            <DisplayOnClass value={expression} error={error} />
            <KeypadOnClass
              onClick={(val: string) => {
                this.tap(val);
              }}
            />
          </Wrapper>
          <HistoryOnClass
            isShow={isShowHistory}
            data={history}
            clearHistory={() => this.props.clearHistory()}
          />
          <ShowHideButton onClick={this.setIsShowHistory}>
            {isShowHistory ? 'Hide' : 'Show'} history
          </ShowHideButton>
        </ErrorBoundary>
      </HomeContainer>
    );
  }
}

const mapStateToProps = ({ calculator }: { calculator: ICalculator }) => ({
  ...calculator,
});

const mapDispatchToProps = {
  setTap,
  toggleSign,
  clearHistory,
  clearExpression,
  backspaceExpression,
  equalExpression,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeOnClass);
