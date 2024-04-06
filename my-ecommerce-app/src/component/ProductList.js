import React , {useEffect, useState} from "react";
import ProductItem from "./ProductItem";

function ProductList(props) { // props is passed from the parent component
  const [products , setProdcuts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ProductPage")
    .then((Response) => Response.json())
    .then((data) => { setProdcuts(data)
  })},[])

  return (
    <div className="product-list"> 
      <ProductItem products={products} handleCartAdd={props.handleCartAdd} /> {/* pass the products and handleCartAdd function to the ProductItem component */}
    </div>
  );
}
export default ProductList;