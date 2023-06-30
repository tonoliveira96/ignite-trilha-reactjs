import { useCallback, useEffect } from 'react';
import { useCartContext } from '../context/useCartContext';

export const useCart = () => {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    function loadProducts() {
      const storageProducts = localStorage.getItem(
        '@igniteshop:products',
      );

      if (storageProducts) {
        setCart([...JSON.parse(storageProducts)]);
      } 
    }

    loadProducts();
  }, [setCart]);

  function addToCart(product: any) {
    const productsExists = cart.find(p => p.id === product.id);
    console.log("entrei");

    if (productsExists) {
      const updateCart = cart.map(p =>
        p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p,
      );
      localStorage.setItem(
        '@igniteshop:products',
        JSON.stringify(updateCart),
      );
      setCart(updateCart)
    } else {
      localStorage.setItem(
        '@igniteshop:products',
        JSON.stringify([...cart, { ...product, quantity: 1 }]),
      );
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const increment = useCallback(
    id => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      const newProducts = cart.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
      setCart(newProducts);

      localStorage.setItem(
        '@igniteshop:products',
        JSON.stringify(newProducts),
      );
    },
    [cart, setCart],
  );

  function decrement(id: string) {
    const newProducts = cart.map(product =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    );
    console.log(newProducts);
    setCart(newProducts);
    localStorage.setItem(
      '@igniteshop:products',
      JSON.stringify(newProducts),
    );
  }

  return {
    addToCart,
    increment,
    decrement
  };
};