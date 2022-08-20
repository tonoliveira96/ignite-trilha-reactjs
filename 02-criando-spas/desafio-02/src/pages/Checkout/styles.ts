import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerForm = styled.div`
  width: 100%;
`;

export const FormCardContent = styled.div`
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

  .payMethod {
    display: flex;
    gap: 0.75rem;
  }
`;

export const ButtonPayMethod = styled.button`
  display: flex;
  width: 178px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;

  background: ${({ theme }) => theme.button};
  border-radius: 6px;
  border: 0;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;
`;

export const ContainerCart = styled.div``;

export const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 448px;
  padding: 40px;
  margin-top: 1rem;
  border-radius: 6px 44px;
  background: ${({ theme }) => theme.card};
`;

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 0;
  gap: 1rem;
  border-bottom: 1px solid #e6e5e5;
  font-size: 1rem;
  font-weight: 400;

  img {
    width: 64px;
    height: 64px;
  }

  .buttonsActions {
    display: flex;
    width: 100%;
    gap: 0.5rem;
  }

  .removeItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    background: ${({ theme }) => theme.button};
    border: 0;
    border-radius: 6px;

    font-size: 0.75rem;
  }

  button:hover {
    background: ${({ theme }) => theme.hover};
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
    text-align: right;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
  margin: 1rem 0;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text};
  }

  .total {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
  }
`;

export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 12px 8px;
  border-radius: 6px;
  border: 0;

  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;

  transition: background-color 0.3s;

  &:hover{
    background: ${({ theme }) => theme['yellow-dark']};
  }
`;
