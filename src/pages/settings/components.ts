import styled from 'styled-components';

export const SettingsContainer = styled.main`
  height: 100%;
  margin: ${({ theme }) => theme.spaces[4]};
`;

export const Select = styled.select`
  margin-top: ${({ theme }) => theme.spaces[1]};
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[2]}`};
  display: block;
  width: 250px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  border: ${({ theme }) => theme.defaultBorder};
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
  }
`;

export const SettingsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[7]};
`;

export const SettingsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces[4]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`;
