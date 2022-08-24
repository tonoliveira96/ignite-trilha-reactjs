import { HeaderContainer } from './styles';

import logo from "../../assets/logo.svg"
import effect01 from "../../assets/effect01.svg"
import effect02 from "../../assets/effect02.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect01} alt="" className=''/>
      <img src={logo} alt="" className='logo' />
      <img src={effect02} alt="" />
    </HeaderContainer>
  );
}