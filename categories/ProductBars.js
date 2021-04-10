import React from "react";

class ProductBars extends React.Component {
  render() {
    return (
      <div className="products_bar">
        <div className="section_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="products_bar_content d-flex flex-column flex-xxl-row align-items-start align-items-xxl-center justify-content-start">
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
                  <div className="products_bar_side ml-xxl-auto d-flex flex-row align-items-center justify-content-start">
                    <div className="products_dropdown product_dropdown_sorting">
                      <div className="isotope_sorting_text">
                        <span>Default Sorting</span>
                        <i className="fa fa-caret-down" aria-hidden="true" />
                      </div>
                      <ul>
                        <li className="item_sorting_btn">Default</li>
                        <li className="item_sorting_btn">Price</li>
                        <li className="item_sorting_btn">Name</li>
                      </ul>
                    </div>
                    <div className="product_view d-flex flex-row align-items-center justify-content-start">
                      <div className="view_item active">
                        <img src="/static/images/view_1.png" alt />
                      </div>
                      <div className="view_item">
                        <img src="/static/images/view_2.png" alt />
                      </div>
                      <div className="view_item">
                        <img src="/static/images/view_3.png" alt />
                      </div>
                    </div>
                    <div className="products_dropdown text-right product_dropdown_filter">
                      <div className="isotope_filter_text">
                        <span>Filter</span>
                        <i className="fa fa-caret-down" aria-hidden="true" />
                      </div>
                      <ul>
                        <li className="item_filter_btn" data-filter="*">
                          All
                        </li>
                        <li className="item_filter_btn" data-filter=".hot">
                          Hot
                        </li>
                        <li className="item_filter_btn" data-filter=".new">
                          New
                        </li>
                        <li className="item_filter_btn" data-filter=".sale">
                          Sale
                        </li>
                      </ul>
                    </div>
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

export default ProductBars;
