import styled from 'styled-components';

export const DisplayWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spaces[2]};
  margin-right: ${({ theme }) => theme.spaces[2]};
  padding: ${({ theme }) => `${theme.spaces[0]} ${theme.spaces[4]}`};
  height: 100px;
  border-bottom: ${({ theme }) => theme.blockBorder};
  font-size: ${({ theme }) => theme.fontSizes[5]};
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: ${({ theme }) => theme.spaces[2]};
  color: ${({ theme }) => theme.colors.error};
`;
