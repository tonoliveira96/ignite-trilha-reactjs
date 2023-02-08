import styled from 'styled-components';

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerPosts = styled.main`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;