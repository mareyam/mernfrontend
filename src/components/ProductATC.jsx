import React from 'react';
import "./ProductATC.css";

export default function ProductATC(props) {
  const { product, onAdd } = props;
  return (
    <div >
      <img className="small" src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

// <button onClick={() => onAdd(product)}></button>