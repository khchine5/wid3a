import React from "react";

class ProcuctsBar extends React.Component {
  render() {
    return (
      <div className="products_bar">
        <div className="section_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="products_bar_content d-flex flex-row align-items-center justify-content-start">
                  <div className="product_categories">
                    <ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
                      <li className="active">
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Hot Products</a>
                      </li>
                      <li>
                        <a href="#">New Products</a>
                      </li>
                      <li>
                        <a href="#">Sale Products</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcuctsBar;
