
import { useState } from "react";

function ProductItem(props) {
  const [showDescription, setShowDescription] = useState(false);  // showDescription = state variable which determines whether to show the description
  const [productHoverID, setProductHover] = useState(0);  // productHoverID = state variable to store the product id on hover

  return props.products.map(function (product) {  // map through the products array
    return (
      <div className="product-item" id={product.id}>  {/* display the product details */}
        <div className="product-image">
          <img
            style={{ height: "300px" }}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div  
          className="product-name"  
          onMouseEnter={() => { 
            setShowDescription(true); 
            setProductHover(product.id);  // set the product id on hover
          }}
          onMouseLeave={() => setShowDescription(false)}  // show the description on hover
        >
          {product.name}
        </div>
        <div className="product-price">Price: ${product.price}</div>  {/* display the price */}
        <button type="button" onClick={() => props.handleCartAdd(product)}>   {/* add the product to the cart */}
          Add to Cart
        </button>
        {showDescription && productHoverID === product.id && (  
          <div>{product.description}</div>  
        )}
      </div>
    );
  });
}
export default ProductItem;