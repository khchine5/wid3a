import React from "react";

class Currency extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Currency;
