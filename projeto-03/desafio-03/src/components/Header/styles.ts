import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 296px;

  background: linear-gradient(180deg,${({theme})=>theme.profile} ,${({theme})=>theme.blue}) ;

  img.logo {
    width: 148px;
    height: 98px;
  }
`;