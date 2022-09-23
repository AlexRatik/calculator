import React, { Component } from 'react';
import {
  Button,
  HistoryContainer,
  HistoryList,
  HistoryListItem,
} from '@components/history/components';
import { v4 as uuidv4 } from 'uuid';

interface HistoryOnClassProps {
  data: string[];
  clearHistory: () => void;
  isShow: boolean;
}

export class HistoryOnClass extends Component<HistoryOnClassProps> {
  render() {
    const { data, clearHistory, isShow } = this.props;
    return (
      <HistoryContainer isShow={isShow} data-testid="history_container">
        <HistoryList data-testid="history_list">
          {data.map((record, index) => (
            <HistoryListItem key={uuidv4()} data-testid={`history_list_item${index}`}>
              {record}
            </HistoryListItem>
          ))}
        </HistoryList>
        <Button data-testid="history_clear_button" isShow={isShow} onClick={() => clearHistory()}>
          Clear
        </Button>
      </HistoryContainer>
    );
  }
}
