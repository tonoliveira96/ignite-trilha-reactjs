import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ButtonClose, CartContainer, CartContainerImage, CartContainerInfo, CartItem, CartResume } from '../../../styles/components/cart';
import { Button, } from '../../../styles/pages/app';
import { useCartContext } from '../../context/useCartContext';
import { useCart } from '../../hooks/useCart';
import XIcon from '../../icons/Xicon';
import formatValue from '../../utils/formatValue';

interface CartMenuProps {
  isOpen: boolean;
}

export default function CartMenu({ isOpen }: CartMenuProps) {
  const { setOpenCart, cart } = useCartContext();
  const { decrement } = useCart();

  const [isLoading, setIsLoading] = useState(false);

    async function handleByProduct() {
    setIsLoading(true);

    const itemsInCart = cart.map(item=>{
      return(
        {
          price: item.defaultPriceId,
          quantity: item.quantity
        }
      )
    })
    const response = await fetch(`http://localhost:3000/api/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemsArray: itemsInCart }),
    });

    response.json().then(data => {
      window.location.href = data.checkoutUrl;
    }).finally(() => {
      setIsLoading(false);
    });
  }

  const cartTotal = useMemo(() => {
    const total = cart.reduce((accumulator, product) => {
      const productSubtotal = product.price * product.quantity;

      return accumulator + productSubtotal;
    }, 0);

    return formatValue(total);
  }, [cart]);

  const totalItensInCart = useMemo(() => {
    const cartItems = cart.reduce((accumulator, product) => {
      const total = accumulator + product.quantity;

      return total;
    }, 0);

    return cartItems;
  }, [cart]);

  return (
    <CartContainer style={{ display: isOpen ? 'block' : 'none' }}>
      <div className='cart-items'>
        <ButtonClose onClick={() => { setOpenCart(false); }}>
          <XIcon />
        </ButtonClose>
        <h3>Sacola de compras</h3>
        {cart.map(item => (
          <CartItem key={item.id}>
            <CartContainerImage>
              <Image src={item.imageUrl} width={98} height={98} alt="" />
            </CartContainerImage>
            <CartContainerInfo>
              <span>{item.name}</span>
              <strong>{formatValue(item.price)}</strong>
              <p>{`Unid: ${item.quantity}`}</p>
              <button onClick={() => decrement(item.id)}>Remover</button>
            </CartContainerInfo>
          </CartItem>
        ))}
      </div>
      <CartResume>
        <span>{`Quantidade: ${totalItensInCart}`}</span>
        <strong>{`Valor total: ${cartTotal}`}</strong>
        <Button style={{ marginTop: '1rem' }} onClick={handleByProduct}>Finalizar compra</Button>
      </CartResume>
    </CartContainer>
  );
}