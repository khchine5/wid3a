import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        
        <div className="info">
          <div className="info_content d-flex flex-row align-items-center justify-content-start">
            
            <div className="info_languages has_children">
              <div className="language_flag">
                <img
                  src="/static/images/flag_1.svg"
                />
              </div>
              <div className="dropdown_text">english</div>
              <div className="dropdown_arrow">
                <i className="fa fa-angle-down" aria-hidden="true" />
              </div>
              
              <ul>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="/static/images/flag_2.svg"
                      />
                    </div>
                    <div className="dropdown_text">french</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="/static/images/flag_3.svg"
                      />
                    </div>
                    <div className="dropdown_text">japanese</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="/static/images/flag_4.svg"
                      />
                    </div>
                    <div className="dropdown_text">russian</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="/static/images/flag_5.svg"
                      />
                    </div>
                    <div className="dropdown_text">spanish</div>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="info_currencies has_children">
              <div className="dropdown_text">usd</div>
              <div className="dropdown_arrow">
                <i className="fa fa-angle-down" aria-hidden="true" />
              </div>
              
              <ul>
                <li>
                  <a href="#">
                    <div className="dropdown_text">EUR</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="dropdown_text">YEN</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="dropdown_text">GBP</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="dropdown_text">CAD</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar_logo">
          <a href="#">
            <div>
              W<span>id3a</span>
            </div>
          </a>
        </div>
        
        <nav className="sidebar_nav">
          <ul>
            <li>
              <a href="index.html">
                home
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                woman
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                man
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                lookbook
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="blog.html">
                blog
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                contact
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="search">
          <form action="#" className="search_form" id="sidebar_search_form">
            <input
              type="text"
              className="search_input"
              placeholder="Search"
              required="required"
            />
            <button className="search_button">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </div>
        
        <div className="cart d-flex flex-row align-items-center justify-content-start">
          <div className="cart_icon">
            <a href="cart.html">
              <img src="/static/images/bag.png" alt />
              <div className="cart_num">2</div>
            </a>
          </div>
          <div className="cart_text">bag</div>
          <div className="cart_price">$39.99 (1)</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
