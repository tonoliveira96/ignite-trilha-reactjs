import type { NextPage } from 'next'
import Image from 'next/image';
import { HomeContainer, Products } from '../../styles/pages/home';

import camiseta1 from "../assets/1.png"
import camiseta2 from "../assets/2.png"
import camiseta3 from "../assets/3.png"

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Products>
        <Image src={camiseta1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products>
        <Image src={camiseta2} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products>
        <Image src={camiseta3} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
    </HomeContainer>
  )
}

export default Home
