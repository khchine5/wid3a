import React from "react";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductsList from "./ProductsList";

class ProductsListBody extends React.Component {
  render() {
    return (
      <div className="super_container">
        <Menu/>
        <Sidebar/>
        <ProductsList/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}


export default ProductsListBody;