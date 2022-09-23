import styled from 'styled-components';

export const HomeContainer = styled.main`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces[1]};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ShowHideButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding: ${({ theme }) => theme.spaces[3]};
`;
