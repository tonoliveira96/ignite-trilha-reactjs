import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 256px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 8rem;
  gap: 1rem;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    top: calc(0px - 1.5rem);
  }

  .coffeeType span {
    margin: 1rem 0;
    font-size: 0.875rem;
    line-height: 1.3%;
    text-transform: uppercase;
    font-weight: bold;
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 30px;
    margin-left: 0.25rem;
  }

  h4 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.label};
    text-align: center;
    word-wrap: break-word;
  }

  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

export const CoffeeCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.3;
    font-weight: 800;
    font-family: 'Baloo 2';
  }

  button {
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme['purple-dark']};
  }
`;

export const ContainerAmountButtons = styled.div`
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
