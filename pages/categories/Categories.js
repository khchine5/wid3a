import React from "react";
import Link from 'next/link';

class Categories extends React.Component {
  render() {
    return (
      <div className="home">
        <div
          className="parallax_background parallax-window"
          data-parallax="scroll"
          data-image-src="/static/images/categories.jpg"
          data-speed="0.8"
        />
        <div className="home_container">
          <div className="home_content">
            <div className="home_title">Shop</div>
            <div className="breadcrumbs">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="#">Woman</a>
                </li>
                <li>Accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
