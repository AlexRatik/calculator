import { Component } from 'react';
import { ICalculator } from '@interfaces';
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
import { HomeContainer, Wrapper } from '@pages/home/components';
import { DisplayOnClass } from '@components/display';
import { KeypadOnClass } from '@components/keypad';
import { HistoryOnClass } from '@components/history';
import { keypadEnum, keypadButtons } from '@constants/keypadButtons';
import ControlPanelOnClass from '@components/controlPanel/controlPanelOnClass';
import { ErrorMessagesEnum } from '@constants/ErrorMessages';

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
    if (value === keypadEnum.CLEAR) {
      this.props.clearExpression();
    } else if (value === keypadEnum.CLEAR_ENTRY) {
      this.props.backspaceExpression();
    } else if (value === keypadEnum.EQUAL) {
      this.props.equalExpression();
    } else if (value === keypadEnum.TOGGLE_SIGN) {
      this.props.toggleSign();
    } else {
      this.props.setTap(value);
    }
  };

  setIsShowHistory = () => {
    this.setState((prev) => ({ isShowHistory: !prev.isShowHistory }));
  };

  clearAll = () => {
    this.props.clearExpression();
    this.props.clearHistory();
  };

  render() {
    const { isShowHistory } = this.state;
    const { expression, history, error } = this.props;
    return (
      <HomeContainer>
        <ErrorBoundary errorMessage={ErrorMessagesEnum.SOMETHING_WENT_WRONG}>
          <Wrapper>
            <DisplayOnClass value={expression} error={error} />
            <KeypadOnClass
              keypadButtons={keypadButtons}
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
          <ControlPanelOnClass
            isShowHistory={isShowHistory}
            setIsShowHistory={() => this.setIsShowHistory()}
            clearAll={this.clearAll}
          />
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
