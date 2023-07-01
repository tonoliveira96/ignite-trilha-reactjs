import { useEffect } from 'react';
import { useCartContext } from '../context/useCartContext';

const cartStorageKey = '@igniteshop:products';

export const useCart = () => {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    function loadProducts() {
      const storageProducts = localStorage.getItem(
        cartStorageKey,
      );

      if (storageProducts) {
        setCart([...JSON.parse(storageProducts)]);
      }
    }

    loadProducts();
  }, [setCart]);

  function addToCart(product: any) {
    const productsExists = cart.find(p => p.id === product.id);

    if (productsExists) {
      const updateCart = cart.map(p =>
        p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p,
      );
      localStorage.setItem(
        cartStorageKey,
        JSON.stringify(updateCart),
      );
      setCart(updateCart);
    } else {
      localStorage.setItem(
        cartStorageKey,
        JSON.stringify([...cart, { ...product, quantity: 1 }]),
      );
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id: string) {
    const updateCart = cart.filter(item => item.id !== id);
    setCart(updateCart);
    localStorage.setItem(
      cartStorageKey,
      JSON.stringify(updateCart),
    );
  }

  function increment(id: string) {
    const newProducts = cart.map(product =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setCart(newProducts);

    localStorage.setItem(
      cartStorageKey,
      JSON.stringify(newProducts),
    );
  }

  function decrement(id: string) {
    const newProducts = cart.map(product =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    );
    setCart(newProducts);
    localStorage.setItem(
      cartStorageKey,
      JSON.stringify(newProducts),
    );
  }

  function clearCart() {
    localStorage.removeItem(cartStorageKey);
  }

  return {
    addToCart,
    increment,
    decrement,
    clearCart,
    removeFromCart,
  };
};