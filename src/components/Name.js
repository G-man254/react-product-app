// component to hold the name of the product
import React from "react";
import product from "../product";

const Name = () => {
  return <h4 className="mt-4 fw-bold">{product.name}</h4>;
};

export default Name;
