import React from "react";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    product && <div className="product grid-item hot">
      <div className="product_inner">
        <div className="product_image">
          { product && product.assets ? 
          <img src={product.assets[0].url} alt={product.description} /> :
          <img src="/static/images/product_1.jpg" alt={product.description} /> }
          <div className="product_tag">hot</div>
        </div>
        <div className="product_content text-center">
          <div className="product_title">
            <Link href="/product">
              <a>{product.name}</a>
            </Link>
          </div>
          <div className="product_price">{product.price.formatted_with_symbol } </div>
          <div className="product_button ml-auto mr-auto trans_200">
            <a href="#">add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
