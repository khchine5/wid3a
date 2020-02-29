import React from "react";

class HeaderNav extends React.Component {
  render() {
    return (
      <nav className="header_nav">
        <ul className="d-flex flex-row align-items-center justify-content-start">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="#">woman</a>
          </li>
          <li>
            <a href="#">man</a>
          </li>
          <li>
            <a href="#">lookbook</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
