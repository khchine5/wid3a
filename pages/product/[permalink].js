import React from "react";
import { commerce } from "../../lib/commerce";
import Base from "../../components/Base";
import ProductContent from "../../product/ProductContent";

export async function getStaticProps({ params }) {
    const { permalink } = params;
    const product = await commerce.products.retrieve(permalink, {
      type: "permalink",
    });
    return {
      props: {
        product,
      },
    };
}

export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();
  
    return {
      paths: products.map((product) => ({
        params: {
          permalink: product.permalink,
        },
      })),
      fallback: false,
    };
  }

const ProductIndex = ({ product }) => {
    
  return (
      <Base>
        <ProductContent product={product} />
      </Base>
  );
};

export default ProductIndex;
