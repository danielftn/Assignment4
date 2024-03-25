import React from "react";
import ProductItem from "./productItem";
import products from "../data/products";

function ProductList(props) {
  return (
    <div className="product-list">
      <ProductItem products={products} handleCartAdd={props.handleCartAdd} />
    </div>
  );
}
export default ProductList;