import styled from 'styled-components';

export const ControlPanelContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: ${({ theme }) => theme.spaces[2]};
  transform: translateX(-50%);
  display: flex;
  width: 95%;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding: ${({ theme }) => theme.spaces[3]};
`;

export const ShowHideButton = styled(Button)`
  //position: fixed;
  //right: 10px;
  //bottom: 10px;
`;
