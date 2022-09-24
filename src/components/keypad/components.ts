import styled from 'styled-components';

export const Container = styled.section`
  margin: ${({ theme }) => theme.spaces[3]};
  display: grid;
  grid-template-columns: repeat(5, ${({ theme }) => theme.keySize});
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[3]};
`;

export const Button = styled.button`
  width: ${({ theme }) => theme.keySize};
  height: ${({ theme }) => theme.keySize};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  border-radius: ${({ theme }) => theme.buttonBorderRadiuses[1]};

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    border-radius: ${({ theme }) => theme.buttonBorderRadiuses[0]};
  }
  @media (max-width: 380px) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`;
