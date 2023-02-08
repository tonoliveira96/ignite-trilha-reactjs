import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color:  ${({ theme }) => theme.title};
  border-radius: 6px;
  background: ${({ theme }) => theme.input};
  border: 1px solid ${({ theme }) => theme.border};
`;