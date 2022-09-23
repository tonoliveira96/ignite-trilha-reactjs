import type { NextPage } from 'next';
import Image from 'next/image';
import { HomeContainer, Products } from '../../styles/pages/home';

import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/3.png";

import "keen-slider/keen-slider.min.css";

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={ sliderRef } className="keen-slider">
      <Products className="keen-slider__slide">
        <Image src={ camiseta1 } width={ 520 } height={ 480 } alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products className="keen-slider__slide">
        <Image src={ camiseta2 } width={ 520 } height={ 480 } alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products className="keen-slider__slide">
        <Image src={ camiseta3 } width={ 520 } height={ 480 } alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products className="keen-slider__slide">
        <Image src={ camiseta3 } width={ 520 } height={ 480 } alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
    </HomeContainer>
  );
};

export default Home;
