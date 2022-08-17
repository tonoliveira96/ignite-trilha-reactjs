import { ShoppingCart } from 'phosphor-react';
import { AmountButtonsComponent } from '../AmoutButtons';
import { CoffeeCardContainer, CoffeeCardFooter } from './styles';

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
        <AmountButtonsComponent />
        <button>
          <ShoppingCart size={ 22 } weight="fill" color='#FFFFFF' />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}