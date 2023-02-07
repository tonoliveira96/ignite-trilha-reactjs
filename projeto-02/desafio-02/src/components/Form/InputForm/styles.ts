import styled from 'styled-components';

interface ContainerInputProps {
  size: number;
}

export const ContainerInput = styled.div<ContainerInputProps>`
  width: ${(props) => `${props.size}px`};

  input {
    display: flex;
    width: 100%;
    height: 2.6rem;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.button};
    background: ${({ theme }) => theme.input};
    border-radius: 4px;
  }
`;
