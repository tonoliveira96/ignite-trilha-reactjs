import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Stripe from "stripe";
import { ImageContainer, ProductContainer, ProductDetails } from '../../../styles/pages/products';
import { stripe } from '../../lib/stripe';

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string;
    defaultPriceId: string;
  };
}

export default function Products({ product }: ProductProps) {
  const [isLaoding, setIsLoading] = useState(false);
  async function handleByProduct() {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: product.defaultPriceId }),
      });
      response.json().then(data => {
        window.location.href = data.checkoutUrl;
      });

    } catch (error) {

    } finally {
      setIsLoading(false);
    }



  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button disabled={isLaoding} onClick={handleByProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>);
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps<any, { id: string; }> = async ({ params }) => {
  const productId = params?.id as string;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(price.unit_amount) / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hora
  };
};
