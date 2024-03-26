import React, { useEffect, useState } from "react";
import reviews from "../data/Reviews.js";

function HomeMainSection() {
  const [Reviews, setReviews] = useState([]); // state to store selected reviews

  useEffect(() => { // select 2 random reviews from the reviews array
    const selectedReviews = [];
    for (let j = 0; j < 2; j++) {
      const randomI = Math.floor(Math.random() * reviews.length);  // generate random index
      selectedReviews.push(reviews[randomI]); // add the review to the selectedReviews array
    }
    setReviews(selectedReviews); // update the state with the selected reviews
  }, []);

  return (
    <main>
      {}
      <section class="about-us"> 
        <h2>About Us</h2> 
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service.
        Learn more about our story and commitment to your satisfaction.
        </p>
      </section>

      {}
      <section class="shop-now">
        <button>
          <a href="products.html">Shop Now</a>
        </button>
      </section>  

      {}
      <section class="customer-reviews">  
        {Reviews.map((review, i) => ( // display the selected reviews
          <div key={i} class="review">
            <h2>{review.customerName}</h2>  
            <p>{review.reviewContent}</p>
            <p>Rating: {"⭐".repeat(review.stars)}</p>{" "} 
            {}
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomeMainSection;