import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.background};
  z-index: 10;

  nav {
    display: flex;
    gap: 0.8rem;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;

  transition: background-color 0.4s;

  &.location {
    background: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-dark']};
  }
  &.location:hover {
    background: ${({ theme }) => theme['purple']};
    color: ${({ theme }) => theme['purple-light']};
  }

  &.cart {
    background: ${({ theme }) => theme['yellow-light']};
  }
  &.cart:hover {
    background: ${({ theme }) => theme['yellow']};
  }
`;
