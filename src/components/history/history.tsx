import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HistoryList, HistoryListItem, Button, HistoryContainer } from './components';

interface HistoryProps {
  data: string[];
  clearHistory: () => void;
  isShow: boolean;
}

export const History = memo(({ isShow, clearHistory, data }: HistoryProps) => {
  return (
    <HistoryContainer isShow={isShow} data-testid="historyContainer">
      <HistoryList data-testid="historyList">
        {data.map((record, index) => (
          <HistoryListItem data-testid={`historyListItem${index}`} key={uuidv4()}>
            {record}
          </HistoryListItem>
        ))}
      </HistoryList>
      <Button data-testid="historyClearButton" isShow={isShow} onClick={() => clearHistory()}>
        Clear
      </Button>
    </HistoryContainer>
  );
});
