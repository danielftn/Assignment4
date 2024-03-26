import React from "react";
import ProductItem from "./ProductItem";
import products from "../data/Products";

function ProductList(props) { // props is passed from the parent component
  return (
    <div className="product-list"> 
      <ProductItem products={products} handleCartAdd={props.handleCartAdd} /> {/* pass the products and handleCartAdd function to the ProductItem component */}
    </div>
  );
}
export default ProductList;