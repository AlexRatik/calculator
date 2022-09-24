import styled from 'styled-components';

export const StyledError = styled.article`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  text-align: center;
  margin-top: ${({ theme }) => theme.spaces[3]};
  color: ${({ theme }) => theme.colors.error};
`;
