import styled from 'styled-components';

export const AmountButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4.5rem;
  background: ${({ theme }) => theme.button};
  border-radius: 6px;

  button {
    width: 1.5rem;
    background: transparent;
    border: 0;
    margin: 0;
    color: ${({ theme }) => theme.purple};
    font-size: 2rem;
  }

  button:hover {
    background: ${({ theme }) => theme.hover};
  }

  span {
    color: ${({ theme }) => theme.title};
    font-size: 1rem;
  }
`;
