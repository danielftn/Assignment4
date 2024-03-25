import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {product.name}
        {isHovered && <p>{product.description}</p>}
      </div>
      <div>{product.price}</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;