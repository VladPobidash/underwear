import { useRouteMatch } from "react-router";
import React from "react";

const Category = () => {
  const route = useRouteMatch();
  console.log(route);
  const categoryPath = [
    { _id: 1, text: "комплекти", path: "/kits" },
    { _id: 2, text: "бюзгальтери", path: "/bras" },
    { _id: 3, text: "трусики", path: "/panties" },
    { _id: 4, text: "купальники", path: "/swimwear" },
    { _id: 5, text: "SALE", path: "/sale" },
  ];

  const kkk = categoryPath.map((k) => {
     if (k.path === route.path) {
        return k.text
     }
  })
  
  return (
    <>
      <h1>{kkk}</h1>
    </>
  );
};

export default Category;
