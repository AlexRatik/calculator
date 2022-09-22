import React, { Component } from 'react';
import {
  Button,
  HistoryList,
  HistoryListItem,
  HistoryWrapper,
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
  }
}
