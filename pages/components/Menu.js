import React from "react";
import Language from "./Language";
import Currency from "./Currency";
import MenuSearch from "./MenuSearch";
import MenuNav from "./MenuNav";
import MenuExtra from "./MenuExtra";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu d-flex flex-column align-items-start justify-content-start menu_mm trans_400">
        <div className="menu_close_container">
          <div className="menu_close">
            <div />
            <div />
          </div>
        </div>
        <div className="menu_top d-flex flex-row align-items-center justify-content-start">
          <Language></Language>
          <Currency></Currency>
        </div>
        <MenuSearch></MenuSearch>
        <MenuNav></MenuNav>
        <MenuExtra></MenuExtra>
      </div>
    );
  }
}

export default Menu;
