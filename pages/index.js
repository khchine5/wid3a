import React from "react";
import { commerce } from "../lib/commerce";
import Body from "../components/Body";
import Base from "../components/Base";

export async function getStaticProps({ params }) {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      products,
    },
  };
}
const Index = ({ merchant, products }) => {
  return (
    <Base>
      <Body products={products} />
    </Base>
  );
};

export default Index;
