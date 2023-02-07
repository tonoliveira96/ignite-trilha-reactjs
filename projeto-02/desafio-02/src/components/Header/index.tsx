import { HeaderContainer, NavItem } from './styles';
import { MapPin, ShoppingCart } from "phosphor-react"

import Logo from "../../assets/logo.svg";
import { useTheme } from 'styled-components';

export function Header(){

  const theme = useTheme()
  return(
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <NavItem to="/" title='Localização' className='location'>
          <MapPin size={24} color={theme['purple-dark']} weight="fill" />
          Manhuaçu, MG</NavItem>
        <NavItem to="/checkout" title='Carinho' className='cart'>
          <ShoppingCart size={24} color={theme['yellow-dark']} weight="fill" />
        </NavItem>
      </nav>
    </HeaderContainer>
  )
}