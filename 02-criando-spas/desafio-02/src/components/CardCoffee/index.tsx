import { ShoppingCart } from 'phosphor-react';
import { AmountButtonsComponent } from '../AmoutButtons';
import { CoffeeCardContainer, CoffeeCardFooter, CoffeeType } from './styles';

interface CardCoffeeProps {
  name: string;
  description: string;
  price: string;
  type: String[];
  image: string;
}

export function CoffeeCard({ name, description, price, image, type }: CardCoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={ image } alt={ image } />
      <div className='coffeeType'>
        { type.map(item => (
          <CoffeeType key={ item }>{ item }</CoffeeType>
        )) }
      </div>
      <h4>{ name }</h4>
      <p>{ description }</p>
      <CoffeeCardFooter>
        <span className='price'>{ price }</span>
        <AmountButtonsComponent />
        <button className='addToCart'>
          <ShoppingCart size={ 22 } weight="fill" color='#FFFFFF' />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}