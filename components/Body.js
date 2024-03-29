import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Boxes from "./Boxes";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Body = ({products}) => {
  return (
    <div className="super_container">
      <Menu />
      <Sidebar />
      <Home />
      <Boxes />
      <Categories />
      <Products products={products} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Body;
