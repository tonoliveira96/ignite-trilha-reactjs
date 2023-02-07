import styled from 'styled-components';

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
  margin-left: auto;
  margin-right: auto;
`;

export const PostBody = styled.div`
  display: flex;
  padding: 2rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    line-height: 25px;
    text-align: justify;
  }
`;

export const CardPost = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 864px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding: 2rem;

  background: ${({ theme }) => theme.profile};
  margin-top: -96px;
  padding: 2rem;
`;

export const HeaderContainerPostCard = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items:center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`;

export const FooterContainerPostCard = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 0;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;