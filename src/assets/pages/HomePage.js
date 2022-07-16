import React from "react";

import Home from "../components/02-Home/home";
import FeaturedProduct from "../components/04-Featured_Product/featuredProduct";
import Info from "../components/05-Info/info";
import Recent from "../components/06-Recent/recent";
import Sale from "../components/07-Sale/sale";
import BestSale from "../components/08-Best_Sale/bestSale";
import Blog from "../components/09-Blog/blog";
import Address from "../components/10-Address/address";

export default function HomePage() {
  return (
    <>
      <Home />
      <FeaturedProduct />
      <Info />
      <Recent />
      {/* <Sale /> */}
      <BestSale />
      <Blog />
      <Address />
    </>
  );
}
