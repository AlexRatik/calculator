import { ControlPanelContainer, Button, ShowHideButton } from './components';
import React from 'react';

interface ControlPanelProps {
  isShowHistory: boolean;
  setIsShowHistory: () => void;
  clearAll: () => void;
}

export const ControlPanel = ({ setIsShowHistory, isShowHistory, clearAll }: ControlPanelProps) => {
  return (
    <ControlPanelContainer>
      <Button onClick={clearAll}>Clear All</Button>
      <ShowHideButton onClick={setIsShowHistory}>
        {isShowHistory ? 'Hide' : 'Show'} history
      </ShowHideButton>
    </ControlPanelContainer>
  );
};
