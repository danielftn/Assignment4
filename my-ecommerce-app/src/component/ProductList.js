import React from "react";
import ProductItem from "./ProductItem";
import products from "../data/Products";

function ProductList(props) {
  return (
    <div className="product-list">
      <ProductItem products={products} handleCartAdd={props.handleCartAdd} />
    </div>
  );
}
export default ProductList;