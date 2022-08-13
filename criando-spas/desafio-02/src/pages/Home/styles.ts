import styled from 'styled-components';

interface IconContainerProps {
  colorItem: string;
}

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5.8rem 0;

  .introContainer {
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap-reverse;
  }
`;

export const IntroTitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.title};
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.subtitle};
  }
`;

export const IntroContainerItems = styled.div`
  display: grid;
  grid-template-columns: 294px 294px;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 16px;
  margin-right: 0.8rem;
  ${(props) => `background: ${props.colorItem}`};
`;

export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    flex: 1;
  }
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 0;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.subtitle};
    font-weight: 700;
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.5rem 0;
  gap: 2rem;
`;
