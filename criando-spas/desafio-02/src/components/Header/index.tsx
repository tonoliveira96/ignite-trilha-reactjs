import { HeaderContainer } from './styles';

import Logo from "../../assets/logo.png";

export function Header(){
  return(
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <a href="">Manhuaçu, MG</a>
        <a href="">
        </a>
      </nav>
    </HeaderContainer>
  )
}