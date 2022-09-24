import { ControlPanelContainer, Button, ShowHideButton } from './components';

interface ControlPanelProps {
  isShowHistory: boolean;
  setIsShowHistory: () => void;
  clearAll: () => void;
}

export const ControlPanel = ({ setIsShowHistory, isShowHistory, clearAll }: ControlPanelProps) => {
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
};
