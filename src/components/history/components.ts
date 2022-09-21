import styled from 'styled-components';

export const HistoryWrapper = styled.aside`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  position: relative;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[2]} 80px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
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

export const Button = styled.button`
  position: absolute;
  padding: ${({ theme }) => theme.spaces[1]};
  right: 50%;
  transform: translateX(50%);
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[4]}`};
  border: ${({ theme }) => theme.defaultBorder};
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
`;
