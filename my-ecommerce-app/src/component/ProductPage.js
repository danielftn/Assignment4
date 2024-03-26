import React, { createContext, useState, useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ProductList from "./ProductList";
import Cart from "./Cart";


export const CartItemsContext = createContext(null);

function Productpage() { 
  const [cartItems, setCartItems] = useState([]); // cartItems is an array of objects
  const [priceTotal, setPriceTotal] = useState(0);  // priceTotal is a number

  useEffect(() => { // get the cart items and total price from local storage
    const itemsInLocal = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(itemsInLocal);

    let calculatedTotalPrice = 0; // calculate the total price of the items in the cart
    for (let j = 0; j < itemsInLocal.length; j++) {
      calculatedTotalPrice += itemsInLocal[j].total;  
    }
    setPriceTotal(calculatedTotalPrice);  
  }, []);

  const handleCartAdd = (childData) => {  // add an item to the cart
    let inCart = false;
    for (let k = 0; k < cartItems.length; k++) {
      if (childData.id === cartItems[k].id) {
        cartItems[k].quantity += 1;
        cartItems[k].total += childData.price;  // update the total price of the item
        setPriceTotal(priceTotal + childData.price);  // update the total price of the cart
        inCart = true;
      }
    }
    if (cartItems.length === 0 || inCart === false) { // if the item is not in the cart, add it
      childData.quantity = 1;
      childData.total = childData.price;
      cartItems.push(childData);
      setPriceTotal(priceTotal + childData.price);
    }
    setCartItems(cartItems);  // update the state
    const string = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", string);
    localStorage.setItem("priceTotal", priceTotal);
  };

  const handleCartRemove = (childData) => { // remove an item from the cart
    for (let i = 0; i < cartItems.length; i++) {
      if (childData.id === cartItems[i].id) {
        cartItems[i].quantity -= 1;
        cartItems[i].total -= cartItems[i].price;
        setPriceTotal(priceTotal - cartItems[i].price);
        if (cartItems[i].quantity === 0) {  
          cartItems.splice(i, 1);
        }
        break;
      }
    }
    setCartItems(cartItems);  // update the state 
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // update the local storage
  };

  return (
    <div className="product-page">
      <Header />
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            <ProductList handleCartAdd={handleCartAdd} /> 
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Cart
              handleCartRemove={handleCartRemove} // pass the handleCartRemove function to the Cart component
              totalPrice={priceTotal} // pass the total price to the Cart component
              cartItems={cartItems} // pass the cart items to the Cart component
            />
          </td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
