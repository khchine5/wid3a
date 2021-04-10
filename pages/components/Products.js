import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="section_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="products_container grid">
                {products.map((product) => (
                  <Product product={product} key={product.sku}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
