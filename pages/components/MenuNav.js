import React from "react";

class MenuNav extends React.Component {
  render() {
    return (
      <nav className="menu_nav">
        <ul className="menu_mm">
          <li className="menu_mm">
            <a href="index.html">home</a>
          </li>
          <li className="menu_mm">
            <a href="#">woman</a>
          </li>
          <li className="menu_mm">
            <a href="#">man</a>
          </li>
          <li className="menu_mm">
            <a href="#">lookbook</a>
          </li>
          <li className="menu_mm">
            <a href="blog.html">blog</a>
          </li>
          <li className="menu_mm">
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MenuNav;
