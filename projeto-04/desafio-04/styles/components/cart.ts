import { styled } from '..';

export const CartContainer = styled('aside', {
  position: 'absolute',
  right: 0,
  width: 480,
  zIndex: 10,
  height: '100vh',
  backgroundColor: '$gray800',
  padding: '2rem',
  transition: 'width 0.6s ease',

  h1: {
    fontSize: '$lg',
    color: '$white',
    fontWeight: 'bold'
  },
  '&.cart-items': {
    display: 'flex',
    flexDirection: 'column',
  },
  '&.menu-open': {
    display: 'block',

  },
  '&.menu-close': {
    display: 'none',
  }
});

export const CartItem = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1.5rem'
});

export const CartContainerImage = styled('div', {
  maxWidth: 98,
  height: 98,
  background: 'linear-gradient(188deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginRight: '0.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover'
  }
});

export const CartContainerInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '0.25rem',

  span: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'normal'
  },
  p:{
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'normal'
  },
  strong: {
    fontSize: '$lg',
    color: '$white',
    fontWeight: 'bold'
  },
  button: {
    border: 0,
    backgroundColor: 'transparent',
    color: '$green300',
    fontSize: '$md',
  }
});

export const CartResume = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  bottom: 0,
  gap: '1rem',
  margin: '2rem 0',
  paddingTop: '1rem',
  borderTop: '1px solid $gray300',

  span: {
    fontSize: '$xl',
    color: '$gray100',
    fontWeight: 'normal'
  },
  strong: {
    fontSize: '$2xl',
    color: '$white',
    fontWeight: 'bold'
  }
});

export const CartAmount = styled('span', {
  position: 'absolute',
  display: 'flex',
  top: -10,
  right: -10,
  width: 24,
  height: 24,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$green500',
  color: '$white'
});

export const ButtonClose = styled('button', {
  width: 56,
  height: 56,
  borderRadius: 8,
  border: 0,
  background: 'transparent',

  '&:hover': {
    filter: 'opacity(75%)',
    transition: '500ms'
  }
});

export const OpenCart = styled('button', {
  width: 48,
  height: 48,
  borderRadius: 8,
  border: 0,
  background: '$gray800'
});

export const ButtonCart = styled('button', {
  position: 'relative',
  width: 56,
  height: 56,
  borderRadius: 8,
  border: 0,

  variants: {
    color: {
      default: {
        backgroundColor: '$gray800'
      },
      green: {
        backgroundColor: '$green300'
      }
    }
  },

  '&:hover': {
    filter: 'opacity(75%)',
    transition: '500ms'
  }
});