import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerForm = styled.div`
  width: 100%;

`;

export const FormCardContent = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 640px;
    padding: 40px;
    margin-top: 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.card};
    gap: 1rem;

    .formInfo {
      display: flex;
      gap: 1rem;

      span {
        font-size: 1rem;
        color: ${({ theme }) => theme.subtitle};
        line-height: 1.3;
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.text};
        line-height: 1.3;
      }
    }

    .formSection {
      display: flex;
      gap: 1.25rem;
    }
`

export const ContainerCart = styled.div``;
