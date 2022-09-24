import { PureComponent } from 'react';
import { Button, ControlPanelContainer, ShowHideButton } from '@components/controlPanel/components';

interface ControlPanelProps {
  isShowHistory: boolean;
  setIsShowHistory: () => void;
  clearAll: () => void;
}

class ControlPanelOnClass extends PureComponent<ControlPanelProps> {
  render() {
    const { isShowHistory, setIsShowHistory, clearAll } = this.props;
    return (
      <ControlPanelContainer>
        <Button onClick={clearAll} data-testid="clearAllButton">
          Clear All
        </Button>
        <ShowHideButton onClick={setIsShowHistory} data-testid="showHideHistoryButton">
          {isShowHistory ? 'Hide' : 'Show'} history
        </ShowHideButton>
      </ControlPanelContainer>
    );
  }
}

export default ControlPanelOnClass;
