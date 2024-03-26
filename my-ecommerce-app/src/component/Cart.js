import React from "react";
import CartItem from "./CartItem";

function Cart(props) {  // props is passed from the parent component
  return (
    <div className="shopping=cart"> {/* display the shopping cart */}
      <h1>Shopping Cart</h1>

      {props.cartItems.length !== 0 && (
        <div className="productList">
          <CartItem
            handleCartRemove={props.handleCartRemove} // pass the handleCartRemove function to the CartItem component
            cartItems={props.cartItems}  // pass the cart items to the CartItem component
          />
        </div>
      )}
      <div className="cartTotal"> {/* display the total price of the cart */}
        Total (in cart): ${Math.abs(props.totalPrice).toFixed(2)} {/* display the total price of the cart */}
      </div>
    </div>
  );
}
export default Cart;
