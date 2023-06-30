import Image from 'next/image';
import { ButtonCart, CartAmount } from '../../../styles/components/cart';
import { Header } from '../../../styles/pages/app';
import logoImage from "../../assets/logo.svg";
import { useCartContext } from '../../context/useCartContext';
import BagIcon from '../../icons/BagIcon';
import CartMenu from './CartMenu';

export default function HeaderDefault() {
  const { cart, openCart, setOpenCart } = useCartContext();

  return (
    <>
      <Header>
        <Image src={logoImage} alt="" />
        <ButtonCart color='default' className={openCart ? 'menu-open' : 'menu-close'} onClick={() => { setOpenCart(true); }}>
          <CartAmount>
            {cart.length}
          </CartAmount>
          <BagIcon />
        </ButtonCart>
      </Header>
      <CartMenu isOpen={openCart} />
    </>
  );
}