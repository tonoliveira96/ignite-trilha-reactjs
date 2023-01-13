import styled from 'styled-components';

export const ContainerProfile = styled.div`
  display: flex;
  width: 100%;
  max-width: 864px;
  height: 212px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;

  background: ${({ theme }) => theme.profile};
  margin-top: -96px;
  padding: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ContainerInfoProfile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 1rem;
  gap: 1rem;

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.text};
  }
`;

export const HeaderContainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.title};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`;

export const FooterContainerProfile = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 0;
  margin-top: 0.5rem;

  span{
  gap: 1rem;
  }
`;
