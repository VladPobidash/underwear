import React from "react";
import OurCategories from "../components/Home/OurCategories/OurCategories";
import FirstScreen from "../components/Home/FirstScreen/FirstScreen";
import OurSale from "../components/Home/OurSale/OurSale";
import Instagram from "../components/Home/Instagram/Instagram";

const Home = () => {
  return (
    <div>
      <FirstScreen />
      <OurCategories />
      <OurSale />
      <Instagram />
    </div>
  );
};

export default Home;
