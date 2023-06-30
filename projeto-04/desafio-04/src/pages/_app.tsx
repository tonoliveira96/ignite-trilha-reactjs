
import type { AppProps } from 'next/app';
import { globalStyles } from '../../styles/global';
import { Container } from '../../styles/pages/app';

import { CartProvider } from '../context/useCartContext';
import HeaderDefault from './components/HeaderDefault';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <HeaderDefault />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  );
}

export default MyApp;
