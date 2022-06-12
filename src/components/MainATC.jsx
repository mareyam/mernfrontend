import React from 'react';
import ProductATC from './ProductATC';
import "./ProductATC.css";

export default function MainATC(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row" style={{display: "flex"}}>
        {products.map((product) => (
          <ProductATC key={product.id} product={product} onAdd={onAdd}></ProductATC>
        ))}
      </div>
    </main>
  );
}