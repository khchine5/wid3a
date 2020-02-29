import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Boxes from "./Boxes";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class Body extends React.Component {
  render() {
    return (
      <div className="super_container">
        <Menu></Menu>
        <Sidebar></Sidebar>
        <Home></Home>
        <Boxes></Boxes>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    );
  }
}

export default Body;
