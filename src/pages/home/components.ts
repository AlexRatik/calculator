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
