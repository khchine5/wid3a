import React from "react";
import ProcuctsBar from "./ProcuctsBar";
import ProductContent from "./ProductContent";

class ProductsList extends React.Component {
  render() {
    return (
      <div className="product">
        <ProcuctsBar></ProcuctsBar>
        <ProductContent></ProductContent>
      </div>
    );
  }
}

export default ProductsList;
