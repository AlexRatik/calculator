import styled from 'styled-components';

export const HistoryContainer = styled.aside<{ isShow: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  position: relative;
  padding: ${({ theme }) => theme.spaces[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.isShow ? '40%' : 0)};
  border-left: ${({ theme }) => theme.blockBorder};
`;

export const HistoryList = styled.ul`
  margin-top: ${({ theme }) => theme.spaces[4]};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  overflow: auto;
`;

export const HistoryListItem = styled.li`
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[0]}`};
  margin-right: ${({ theme }) => theme.spaces[1]};
  border-bottom: ${({ theme }) => theme.defaultBorder};
`;

export const Button = styled.button<{ isShow: boolean }>`
  position: absolute;
  padding: ${({ theme }) => theme.spaces[1]};
  right: 50%;
  transform: translateX(${(props) => (props.isShow ? '50%' : 0)});
  opacity: ${(props) => (props.isShow ? '1' : 0)};
  pointer-events: ${(props) => (props.isShow ? 'all' : 'none')};
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[4]}`};
  border: ${({ theme }) => theme.defaultBorder};
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
`;
