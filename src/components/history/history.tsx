import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HistoryWrapper, HistoryList, HistoryListItem, Button } from './components';

interface HistoryProps {
  data: string[];
  clearHistory: () => void;
}

export const History = ({ clearHistory, data }: HistoryProps) => {
  return (
    <HistoryWrapper>
      <HistoryList>
        {data.map((record) => (
          <HistoryListItem key={uuidv4()}>{record}</HistoryListItem>
        ))}
      </HistoryList>
      <Button onClick={() => clearHistory()}>Clear</Button>
    </HistoryWrapper>
  );
};
