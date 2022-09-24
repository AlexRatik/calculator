import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  padding: ${({ theme }) => theme.spaces[3]};
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerColor};
`;
export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const NavListLink = styled(NavLink)`
  margin-right: ${({ theme }) => theme.spaces[3]};
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[0]}`};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.headerColor};
  &.active {
    border-bottom: ${({ theme }) => theme.blockBorder};
    border-color: ${({ theme }) => theme.headerColor};
  }
`;
