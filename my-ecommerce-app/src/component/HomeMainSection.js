import React, { useEffect, useState } from "react";
import reviews from "../data/reviews.js";

function HomeMainSection() {
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    const randomReviews = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * reviews.length); 
      randomReviews.push(reviews[randomIndex]);
    }
    setReviews(randomReviews); 
  }, []);

  return (
    <main>
      {}
      <section class="about-us">
        <h2>About Us</h2>
        <p>
        Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service.
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
        {Reviews.map((review, index) => (
          <div key={index} class="review">
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