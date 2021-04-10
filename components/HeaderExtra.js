import React from "react";

class HeaderExtra extends React.Component {
  render() {
    return (
      <div className="header_extra ml-auto d-flex flex-row align-items-center justify-content-start">
        
        <div className="info_languages has_children">
          <div className="language_flag">
            <img
              src="/static/images/flag_1.svg"
              alt="https://www.flaticon.com/authors/freepik"
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
                    alt="https://www.flaticon.com/authors/freepik"
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
                    alt="https://www.flaticon.com/authors/freepik"
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
                    alt="https://www.flaticon.com/authors/freepik"
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
                    alt="https://www.flaticon.com/authors/freepik"
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
        
        <div className="cart d-flex flex-row align-items-center justify-content-start">
          <div className="cart_icon">
            <a href="cart.html">
              <img src="/static/images/bag.png" alt />
              <div className="cart_num">2</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderExtra;
