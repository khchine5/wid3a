import React from "react";
import Link from 'next/link'


class Product extends React.Component {
  render() {
    return (
      <div className="product grid-item hot">
        <div className="product_inner">
          <div className="product_image">
            <img src="/static/images/product_1.jpg" alt />
            <div className="product_tag">hot</div>
          </div>
          <div className="product_content text-center">
            <div className="product_title">
              <Link href="/product">
                <a>long red shirt</a>
              </Link>
            </div>
            <div className="product_price">$39.90</div>
            <div className="product_button ml-auto mr-auto trans_200">
              <a href="#">add to cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
