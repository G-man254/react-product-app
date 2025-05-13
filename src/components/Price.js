// component to hold the price of the product

import React from "react";
import product from "../product";

const Price = () => {
  return <p><strong>Price:</strong> {product.price}</p>;
};

export default Price;
