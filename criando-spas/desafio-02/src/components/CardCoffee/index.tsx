import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { CoffeeCardContainer, CoffeeCardFooter, ContainerAmountButtons } from './styles';

interface CardCoffeeProps {
  name: string;
  description: string;
  price: number;
  type: String[];
  image: string;
}

export function CoffeeCard({ name, description, price, image, type }: CardCoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={ image } alt={image} />
      <div className='coffeeType'>
        { type.map(item => (
          <span>{ item }</span>
        )) }
      </div>
      <h4>{ name }</h4>
      <p>{ description }</p>
      <CoffeeCardFooter>
        <span> { price }</span>
        <ContainerAmountButtons>
          <button>
            <Minus size={ 16 } weight="fill" />
          </button>
          <span>1</span>
          <button>
            <Plus size={ 16 } weight="fill" />
          </button>
        </ContainerAmountButtons>
        <button>
          <ShoppingCart size={ 22 } weight="fill" color='#FFFFFF' />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}