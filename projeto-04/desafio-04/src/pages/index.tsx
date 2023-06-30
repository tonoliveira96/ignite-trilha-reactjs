import { useKeenSlider } from "keen-slider/react";
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Stripe from "stripe";
import { HomeContainer, Products } from '../../styles/pages/home';

import "keen-slider/keen-slider.min.css";
import Head from 'next/head';
import Link from 'next/link';

import { ButtonCart } from '../../styles/components/cart';
import { useCartContext } from '../context/useCartContext';
import { useCart } from '../hooks/useCart';
import BagIcon from '../icons/BagIcon';
import { stripe } from '../lib/stripe';
import formatValue from '../utils/formatValue';

export interface ProductProps {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
}
interface HomeProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProps) {

  const { addToCart } = useCart();
  const { cart, openCart } = useCartContext();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link href={`products/${product.id}`} key={product.id} prefetch={false}>
            <Products className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <ButtonCart color='green' onClick={() => addToCart(product)}>
                  <BagIcon />
                </ButtonCart>
              </footer>
            </Products>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatValue(Number(price.unit_amount) / 100)
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  };
};
