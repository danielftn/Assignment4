import React from "react";

function CartItem(props) {
  return props.cartItems.map(function (product) {
    return (
      <div className="product-item" id={product.id}>  {/* display the product details */}
        <div className="product-image">
          <img
            style={{ height: "300px" }}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-name">{product.name}</div>  {/* display the name */}
        <div className="product-price">Price: ${product.price}</div>  {/* display the price */}
        <div className="product-quantity">Quantity: {product.quantity}</div>  {/* display the quantity */}
        <div className="product-total">Total: ${product.total.toFixed(2)}</div> {/* display the total price */}
        <button
          type="button"
          onClick={() => {
            props.handleCartRemove(product);  // remove the product from the cart
          }}
        >
          Remove
        </button>
      </div>
    );
  });
}

export default CartItem;
