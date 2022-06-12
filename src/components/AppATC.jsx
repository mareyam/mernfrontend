import HeaderATC from './HeaderATC';
import MainATC from './MainATC';
import BasketATC from './BasketATC';
import ShoesATC from './ShoesATC';
import { useState } from 'react';
import "./ProductATC.css";

function AppATC() {
  const { products } = ShoesATC;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <HeaderATC countCartItems={cartItems.length}></HeaderATC>
      <div className="row">
        <MainATC  products={products} onAdd={onAdd}></MainATC>
        <BasketATC
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}

        ></BasketATC>
      </div>
    </div>
  );
}

export default AppATC;