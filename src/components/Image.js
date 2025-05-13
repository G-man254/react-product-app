// component to hold the image of the product
import React from "react";
import product from "../product";
import "../App.css"; // Import custom styles

const Image = () => {
  return (
    <div className="image-container mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="overlay">
        <span className="overlay-text">{product.name}</span>
      </div>
    </div>
  );
};

export default Image;
