import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';

interface Product {
  id: string,
  defaultPriceId: string,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number;
}

export type CartContextType = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};

const CartDefaultValue: CartContextType = {
  cart: [],
  setCart: (state) => state,
  openCart: false,
  setOpenCart: (state) => state,
};

export const CartContext = createContext<CartContextType>(CartDefaultValue);

export function useCartContext() {
  return useContext(CartContext);
}

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Product[]>(CartDefaultValue.cart);
  const [openCart, setOpenCart] = useState<boolean>(CartDefaultValue.openCart);

  const value = useMemo(() => ({
    cart,
    setCart,
    openCart,
    setOpenCart
  }), [cart, openCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};