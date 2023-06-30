import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stripe from "stripe";
import { Button } from '../../../styles/pages/app';
import { ImageContainer, ProductContainer, ProductDetails } from '../../../styles/pages/products';
import { useCart } from '../../hooks/useCart';
import { stripe } from '../../lib/stripe';
import formatValue from '../../utils/formatValue';

interface ProductProps {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: number;
  defaultPriceId: string;
};
interface ProductsPageProps {
  product: ProductProps;
}

export default function Products({ product }: ProductsPageProps) {
  const { addToCart } = useCart();

  const handleAddcart = (product: ProductProps) => {
    addToCart(product);
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatValue(product.price)}</span>
          <p>{product.description}</p>
          <Button onClick={() => handleAddcart(product)}>
            Adicionar a sacola
          </Button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
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
        price: (Number(price.unit_amount) / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hora
  };
};
