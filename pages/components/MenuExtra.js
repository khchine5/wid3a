import React from "react";

class MenuExtra extends React.Component {
  render() {
    return (
      <div className="menu_extra">
        <div className="menu_social">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-pinterest" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuExtra;
