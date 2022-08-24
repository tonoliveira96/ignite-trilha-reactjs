import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 296px;

  background: ${({ theme }) => theme.profile};

  img.logo {
    width: 148px;
    height: 98px;
  }
`;