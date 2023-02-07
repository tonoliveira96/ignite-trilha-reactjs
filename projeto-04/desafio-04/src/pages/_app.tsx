
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { globalStyles } from '../../styles/global';
import { Conatiner, Header } from '../../styles/pages/app';


import logoImage from "../assets/logo.svg"

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Conatiner>
      <Header>
        <Image src={logoImage} alt="" />
      </Header>
      <Component { ...pageProps } />
    </Conatiner>
    );
}

export default MyApp;
