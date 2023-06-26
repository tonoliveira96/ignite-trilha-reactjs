import { ImageContainer, ProductContainer, ProductDetails } from '../../../styles/pages/products';

export default function Products() {
  return (<ProductContainer>
    <ImageContainer />
    <ProductDetails>
      <h1>Camisa</h1>
      <span>79,90</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio, officia asperiores hic debitis ipsa veritatis, iusto commodi quis id molestiae exercitationem perferendis in! Recusandae, beatae. Debitis vel labore sed!</p>
      <button>
        Comprar agora
      </button>
    </ProductDetails>
  </ProductContainer>);
};
