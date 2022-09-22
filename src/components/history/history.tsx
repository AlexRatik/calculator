import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HistoryWrapper, HistoryList, HistoryListItem, Button } from './components';

interface HistoryProps {
  data: string[];
  clearHistory: () => void;
  isShow: boolean;
}

export const History = ({ isShow, clearHistory, data }: HistoryProps) => {
  return (
    <HistoryWrapper isShow={isShow}>
      <HistoryList>
        {data.map((record) => (
          <HistoryListItem key={uuidv4()}>{record}</HistoryListItem>
        ))}
      </HistoryList>
      <Button isShow={isShow} onClick={() => clearHistory()}>
        Clear
      </Button>
    </HistoryWrapper>
  );
};
